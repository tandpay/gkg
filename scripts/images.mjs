// Build-time responsive images: every JPEG in public/ gets AVIF, WebP and JPEG
// variants at a few widths, written to public/img/ with a content hash in the
// name (so they can be cached for a year), plus src/image-manifest.json that
// the <Img> component reads. Runs before `vite build`; outputs are gitignored.
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const SRC = 'public';
const OUT = 'public/img';
const WIDTHS = [480, 960, 1600];
const FORMATS = {
  avif: (img) => img.avif({ quality: 52, effort: 4 }),
  webp: (img) => img.webp({ quality: 74, effort: 4 }),
  jpg: (img) => img.jpeg({ quality: 76, mozjpeg: true, progressive: true }),
};

mkdirSync(OUT, { recursive: true });
const manifest = {};
const files = readdirSync(SRC).filter((f) => /\.jpe?g$/i.test(f) && f !== 'og-image.jpg');
const started = Date.now();
let written = 0;

await Promise.all(files.map(async (file) => {
  const input = readFileSync(join(SRC, file));
  const hash = createHash('sha256').update(input).digest('hex').slice(0, 8);
  const name = basename(file, extname(file));
  const { width, height } = await sharp(input).metadata();
  const widths = [...new Set(WIDTHS.map((w) => Math.min(w, width)))];
  const entry = { width, height, sources: {} };

  for (const [format, encode] of Object.entries(FORMATS)) {
    entry.sources[format] = [];
    for (const w of widths) {
      const out = `${name}.${hash}-${w}.${format}`;
      if (!existsSync(join(OUT, out))) {
        await encode(sharp(input).rotate().resize({ width: w, withoutEnlargement: true })).toFile(join(OUT, out));
        written++;
      }
      entry.sources[format].push([`/img/${out}`, w]);
    }
  }
  manifest[`/${file}`] = entry;
}));

// Drop variants of images that were replaced or removed.
const keep = new Set(Object.values(manifest).flatMap((e) => Object.values(e.sources).flat().map(([u]) => basename(u))));
for (const f of readdirSync(OUT)) if (!keep.has(f)) rmSync(join(OUT, f));

writeFileSync('src/image-manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`images: ${files.length} sources, ${written} variants written in ${((Date.now() - started) / 1000).toFixed(1)}s`);

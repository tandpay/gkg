// compress-images.mjs  — run with: node compress-images.mjs
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const MAX_BYTES  = 0; // Compress ALL images
const QUALITY    = 75;
const MAX_WIDTH  = 1920;

const files = readdirSync(PUBLIC_DIR).filter(f =>
  ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
);

for (const file of files) {
  const fullPath = join(PUBLIC_DIR, file);
  const { size } = statSync(fullPath);

  if (size <= MAX_BYTES) {
    console.log(`⏭  Skip  ${file} (${(size / 1024).toFixed(0)} KB)`);
    continue;
  }

  const ext  = extname(file).toLowerCase();
  const name = basename(file, ext);
  const out  = join(PUBLIC_DIR, `${name}${ext}`);

  try {
    await sharp(fullPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(out + '.tmp');

    // Overwrite original with compressed version
    const { renameSync } = await import('fs');
    renameSync(out + '.tmp', out);

    const newSize = statSync(out).size;
    console.log(`✅ Done  ${file}: ${(size/1024/1024).toFixed(1)} MB → ${(newSize/1024).toFixed(0)} KB`);
  } catch (e) {
    console.error(`❌ Error ${file}:`, e.message);
  }
}

console.log('\nAll done!');

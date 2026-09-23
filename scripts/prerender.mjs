// Build-time prerender: renders every route to static HTML so search engines
// and AI crawlers (which mostly do not run JavaScript) see the full content,
// then writes sitemap.xml. Run after `vite build` and the SSR build.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const ssrEntry = resolve('dist-ssr/entry-server.js');
const { render } = await import(pathToFileURL(ssrEntry).href);
const { routes, notFound, headTags, canonicalUrl, SITE_URL, products } = await import(
  pathToFileURL(resolve('src/seo.js')).href
);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
const headBlock = /<!--head:start-->[\s\S]*?<!--head:end-->/;
if (!headBlock.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the prerender placeholders');
}

// Preload the hero in the format and width the browser will actually pick.
const imageManifest = JSON.parse(readFileSync(resolve('src/image-manifest.json'), 'utf8'));
const hero = imageManifest['/hero.jpg'];
const heroPreload = hero
  ? `<link rel="preload" as="image" type="image/avif" imagesrcset="${hero.sources.avif.map(([u, w]) => `${u} ${w}w`).join(', ')}" imagesizes="100vw" fetchpriority="high" />`
  : '<link rel="preload" as="image" href="/hero.jpg" fetchpriority="high" />';

function page(route, url) {
  return template
    .replace(headBlock, headTags(route, { heroPreload }))
    .replace('<!--app-html-->', render(url));
}

for (const route of routes) {
  writeFileSync(resolve(dist, route.file), page(route, route.path));
  console.log(`prerendered ${route.path} -> ${route.file}`);
}
writeFileSync(resolve(dist, notFound.file), page(notFound, '/404'));
console.log('prerendered 404 -> 404.html');

// Images shown on each page, listed so image search can index them.
const productImages = ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9', '6.10', '6.11'];
const images = {
  '/': [
    ['/hero.jpg', 'Golden Kitchen Garden Rwanda farm team tending a strawberry field'],
    ['/1.jpg', 'Regenerative and climate-smart agriculture'],
    ['/2.jpg', 'Nutrition and food security programs'],
    ['/3.jpg', 'Agrifood innovation'],
    ['/4.jpg', 'Circular economy composting'],
    ['/program-commercial-landscaping.jpg', 'Commercial edible landscaping'],
    ['/landscaping-pathway.jpg', 'Edible landscaping pathway'],
  ],
  '/about': [['/empowering-women.jpg', 'Women farmers empowered through GKG climate-smart agriculture']],
  '/products': productImages.map((n, i) => [`/${n}.jpg`, products[i]]),
  '/impact': [['/7.jpg', 'Golden Kitchen Garden Rwanda community impact']],
};

const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map(
    (r) => `  <url>
    <loc>${canonicalUrl(r)}</loc>
    <lastmod>${lastmod}</lastmod>
${(images[r.path] ?? [])
  .map(([src, title]) => `    <image:image><image:loc>${SITE_URL}${src}</image:loc><image:title>${xml(title)}</image:title></image:image>`)
  .join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);
console.log('wrote sitemap.xml');

rmSync(resolve('dist-ssr'), { recursive: true, force: true });

import manifest from '../image-manifest.json';

const srcSet = (list) => list.map(([url, w]) => `${url} ${w}w`).join(', ');

// Responsive image: AVIF → WebP → JPEG at several widths, chosen by the browser
// from `sizes`. Falls back to the original file if it has no generated variants.
export default function Img({ src, sizes = '100vw', alt, ...rest }) {
  const entry = manifest[src];
  if (!entry) return <img src={src} alt={alt} {...rest} />;
  const { avif, webp, jpg } = entry.sources;
  const fallback = jpg.find(([, w]) => w >= 960) ?? jpg[jpg.length - 1];
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(webp)} sizes={sizes} />
      <img src={fallback[0]} srcSet={srcSet(jpg)} sizes={sizes} width={entry.width} height={entry.height} alt={alt} {...rest} />
    </picture>
  );
}


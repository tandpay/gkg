import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeFor, canonicalUrl, structuredData } from '../seo';

// Keeps <head> in step with client-side navigation. The initial HTML already
// carries the right tags from the build-time prerender.
function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function HeadSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = routeFor(pathname);
    document.title = route.title;
    setMeta('meta[name="description"]', 'content', route.description);
    if (route.noindex) return;
    const url = canonicalUrl(route);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', route.title);
    setMeta('meta[property="og:description"]', 'content', route.description);
    setMeta('meta[name="twitter:title"]', 'content', route.title);
    setMeta('meta[name="twitter:description"]', 'content', route.description);
    const ld = document.head.querySelector('script[type="application/ld+json"]');
    if (ld) ld.textContent = JSON.stringify(structuredData(route));
  }, [pathname]);

  return null;
}

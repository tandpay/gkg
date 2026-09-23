import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Reveals `.reveal` / `.reveal-media` elements once as they enter the viewport.
// Content is visible by default; hiding only applies under html.js (set inline
// in index.html), so crawlers and no-JS visitors always see everything.
export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.active), .reveal-media:not(.active)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('active'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}

'use client';

import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { headerOffset } from './headerOffset';

/**
 * Lenis keeps its own scroll target, which overrides Next.js' scroll-to-top on
 * client navigations. Reset it (or jump to the URL hash) whenever the route changes.
 */
export function ScrollRestoration() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;
    const jump = () => {
      const hash = window.location.hash;
      const el = hash ? document.querySelector(hash) : null;
      // A pixel target measured from the real scroll position: Lenis resolves an
      // element against its own scroll value, which can lag the browser's hash jump.
      // Same rule as Lenis' own anchor handling: below the fixed header (scroll-padding)
      // and on the section's content rather than its top padding (scroll-margin).
      const margin = el ? parseFloat(getComputedStyle(el).scrollMarginTop) || 0 : 0;
      const target = el
        ? Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset() - margin)
        : 0;
      lenis.scrollTo(target, { immediate: true, force: true });
    };
    jump();
    if (document.readyState === 'complete') return;
    // The browser scrolls to the fragment once more when the document has loaded
    // (the page streams in), landing where the element was at parse time: redo it.
    const onLoad = () => requestAnimationFrame(jump);
    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, [lenis, pathname]);

  return null;
}

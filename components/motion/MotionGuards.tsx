'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Light reveal set for browsers without scroll-driven animations: only small
 * surfaces (headline masks, paragraphs, list items, bars). Large blocks (cards
 * with images, device stages, the giant footer word) stay static because every
 * transitioning block forces a recomposite per scroll frame under software
 * compositing (measured in headless Firefox).
 */
const TARGETS = [
  '.lm-in',
  '.sx-txt',
  '.sx-up',
  '.sx-num',
  '.sx-lab',
  '.sx-rule',
  '.rv-bar',
  '.rv:not(article):not(.rv-media)',
].join(', ');

/** Infinite animations: device screenshots and the technologies band. */
const LOOPS = '.stage';

/**
 * The three small document-level guards behind the site's motion, in one client
 * component so they share a chunk:
 *
 * - The scroll reveals are CSS scroll-driven animations (zero JS). Browsers
 *   without `animation-timeline` (Firefox stable, as of 2026) are flagged with
 *   `html.no-sda`: infinite loops pause while scrolling and one
 *   IntersectionObserver adds `.is-in` to the light reveal set above, whose
 *   entrances are short CSS transitions (nothing runs per scroll frame).
 *   Validated on real hardware by the site owner (smooth, animations kept).
 * - Infinite loops only run while their block is on screen (`loop-paused`
 *   otherwise); an off-screen loop would cost a composite per frame for nothing.
 * - `html.is-scrolling` is set while the page moves (cleared 160 ms after the
 *   last scroll event) so CSS can pause the loops under software compositing.
 */
export function MotionGuards() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const observers: IntersectionObserver[] = [];

    const loops = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('loop-paused', !entry.isIntersecting);
        }
      },
      { rootMargin: '10% 0px' },
    );
    document.querySelectorAll(LOOPS).forEach((el) => loops.observe(el));
    observers.push(loops);

    if (typeof CSS !== 'undefined' && !CSS.supports('animation-timeline: view()')) {
      root.classList.add('no-sda');
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        root.classList.add('sda-light');
        const reveals = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              entry.target.classList.add('is-in');
              reveals.unobserve(entry.target);
            }
          },
          { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
        );
        document.querySelectorAll(TARGETS).forEach((el) => reveals.observe(el));
        observers.push(reveals);
      }
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    let timer = 0;
    const onScroll = () => {
      if (!root.classList.contains('is-scrolling')) root.classList.add('is-scrolling');
      window.clearTimeout(timer);
      timer = window.setTimeout(() => root.classList.remove('is-scrolling'), 160);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
      root.classList.remove('is-scrolling');
    };
  }, []);

  return null;
}

'use client';

import { useEffect, useRef } from 'react';
import { buttonClass } from '@/components/ui/Button';
import { ArrowRight } from '@/components/ui/Icons';

interface FlyingCtaProps {
  href: string;
  label: string;
  /** id of the hero's own CTA link, which this one replaces while it flies. */
  heroId: string;
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * The header's call to action. On the home page it starts in the hero and flies into
 * its header slot as the page scrolls (same pill, only its position changes), so the
 * same link is never shown twice. Elsewhere, on small screens and
 * under `prefers-reduced-motion`, it simply sits in the header.
 */
export function FlyingCta({ href, label, heroId }: FlyingCtaProps) {
  const slotRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    const link = linkRef.current;
    const hero = document.getElementById(heroId);
    if (!slot || !link || !hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const wide = window.matchMedia('(min-width: 721px)');

    let active = false;
    let heroTop = 0;
    let heroLeft = 0;
    let heroW = 0;
    let heroH = 0;
    let slotTop = 0;
    let slotLeft = 0;
    let slotH = 0;
    let frame = 0;

    const measure = () => {
      const h = hero.getBoundingClientRect();
      heroTop = h.top + window.scrollY;
      heroLeft = h.left;
      heroW = h.width;
      heroH = h.height;
      const s = slot.getBoundingClientRect();
      slotTop = s.top;
      slotLeft = s.left;
      slotH = s.height;
      link.style.width = `${heroW}px`;
      link.style.height = `${heroH}px`;
    };

    const render = () => {
      frame = 0;
      if (!active || !link.classList.contains('is-flying')) return;
      const distance = Math.max(1, heroTop - slotTop);
      const p = easeInOut(Math.min(1, Math.max(0, window.scrollY / distance)));
      const x = lerp(heroLeft, slotLeft, p);
      const y = lerp(heroTop - window.scrollY, slotTop, p);
      const scale = lerp(1, slotH / heroH, p);
      link.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    let pending = 0;
    const start = () => {
      if (active) return;
      active = true;
      // While the hero's entrance animation plays, its own button does the job.
      link.style.visibility = 'hidden';
      const entrance = (hero.closest('.intro') ?? hero).getAnimations();
      const token = ++pending;
      Promise.all(entrance.map((animation) => animation.finished))
        .catch(() => {})
        .then(() => {
          if (!active || token !== pending) return;
          // The slot keeps the link's size while the link leaves the flow.
          const r = link.getBoundingClientRect();
          slot.style.width = `${r.width}px`;
          slot.style.height = `${r.height}px`;
          // From here on the hero keeps its button for layout only (hidden visibility
          // also takes it out of the tab order and the accessibility tree).
          hero.style.visibility = 'hidden';
          link.classList.add('is-flying');
          link.style.visibility = '';
          measure();
          render();
        });
    };
    const stop = () => {
      if (!active) return;
      active = false;
      pending += 1;
      cancelAnimationFrame(frame);
      frame = 0;
      link.classList.remove('is-flying');
      link.removeAttribute('style');
      hero.removeAttribute('style');
      slot.removeAttribute('style');
    };
    const sync = () => {
      if (wide.matches) start();
      else stop();
    };

    const onResize = () => {
      sync();
      if (link.classList.contains('is-flying')) {
        measure();
        render();
      }
    };
    sync();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize);
    wide.addEventListener('change', sync);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      wide.removeEventListener('change', sync);
      stop();
    };
  }, [heroId]);

  return (
    <span ref={slotRef} className="hdr-cta pointer-events-auto inline-flex">
      <a ref={linkRef} href={href} className={`${buttonClass('primary', 'md')} fly-cta`}>
        {label}
        <ArrowRight size={18} />
      </a>
    </span>
  );
}

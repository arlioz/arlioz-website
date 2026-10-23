'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { buttonClass } from '@/components/ui/Button';
import { ArrowRight } from '@/components/ui/Icons';

interface HeaderCtaProps {
  href: string;
  label: string;
  /** Shown instead of `label` on phones (globals.css), where the full label does not fit. */
  shortLabel: string;
  /** id of the hero section: while it is on screen, its own button does the job. */
  heroId: string;
}

/**
 * The header's call to action. On the home page it stays hidden while the hero is in
 * view (the hero has the same button) and appears once the hero has scrolled under
 * the header, so the action is never offered twice. Elsewhere it is always shown.
 * The initial hidden state is pure CSS (`#top:has(> main .hero)` in globals.css), so
 * nothing flashes before hydration; this only toggles `is-out` from the observer.
 */
export function HeaderCta({ href, label, shortLabel, heroId }: HeaderCtaProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const link = ref.current;
    const hero = document.getElementById(heroId);
    if (!link || !hero) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) link.classList.toggle('is-out', !entry.isIntersecting);
      },
      { rootMargin: '-84px 0px 0px 0px' },
    );
    observer.observe(hero);
    return () => {
      observer.disconnect();
      link.classList.remove('is-out');
    };
  }, [heroId, pathname]);

  return (
    <a
      ref={ref}
      href={href}
      className={`${buttonClass('primary', 'md')} hdr-cta pointer-events-auto`}
    >
      <span className="hdr-cta-long">{label}</span>
      <span className="hdr-cta-short">{shortLabel}</span>
      <ArrowRight size={18} />
    </a>
  );
}

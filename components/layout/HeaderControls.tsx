'use client';

import { useLenis } from 'lenis/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type CSSProperties, useEffect, useId, useRef, useState } from 'react';
import { type SiteContent } from '@/content/types';
import { type Locale } from '@/lib/i18n';
import { site } from '@/lib/site';
import { ButtonLink } from '@/components/ui/Button';
import { Glow } from '@/components/ui/Glow';
import { ArrowUpRight } from '@/components/ui/Icons';
import { LangSwitch } from './LangSwitch';

interface HeaderControlsProps {
  locale: Locale;
  homeHref: string;
  nav: SiteContent['nav'];
  a11y: SiteContent['a11y'];
}

const dotColor = {
  orange: 'bg-orange',
  blue: 'bg-blue',
  green: 'bg-green',
} as const;

/** The menu's section under the middle of the screen, read when the menu opens. */
function sectionInView(anchors: string[]): string | null {
  const y = window.innerHeight * 0.45;
  for (const id of anchors) {
    const rect = document.getElementById(id)?.getBoundingClientRect();
    if (rect && rect.top <= y && rect.bottom > y) return id;
  }
  return null;
}

/**
 * The menu button and its full-screen overlay. Opening is a circular reveal from
 * the button, then the links rise one after the other from under their rule
 * (globals.css, "Menu overlay"); the three bars of the button fold into a cross
 * and its label slides from "Menu" to "Close". The overlay is a column on phones,
 * sized with `dvh` so the six links and the contact block fit on one screen
 * without scrolling (it still scrolls on very short screens).
 */
export function HeaderControls({ locale, homeHref, nav, a11y }: HeaderControlsProps) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  // Where the visitor is, shown in the menu (aria-current="location").
  const [active, setActive] = useState<string | null>(null);
  // Centre of the button, where the overlay's circular reveal starts from.
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  const lenis = useLenis();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const dialogId = useId();

  // Close on navigation (state adjusted during render, no effect needed).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setClosing(false);
  }

  // Scroll lock, Escape key and focus management while the menu is open.
  useEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    lenis?.stop();
    const timer = window.setTimeout(() => firstLinkRef.current?.focus(), 80);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = previous;
      lenis?.start();
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
      button?.focus({ preventScroll: true });
    };
  }, [open, lenis]);

  const close = () => {
    if (!open) return;
    setOpen(false);
    // Keep the overlay mounted until its CSS exit animation ends.
    setClosing(true);
  };
  const toggle = () => {
    if (open) close();
    else {
      setActive(sectionInView(nav.items.map((item) => item.anchor)));
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      setOpen(true);
      setClosing(false);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-label={open ? a11y.closeMenu : a11y.openMenu}
        aria-expanded={open}
        aria-controls={dialogId}
        className="menu-btn pill glass pointer-events-auto relative z-10 inline-flex h-[52px] cursor-pointer items-center gap-3 rounded-pill px-5 font-sans text-[15px] font-medium text-paper"
      >
        {/* Both labels are stacked and slide in place; the accessible name is the aria-label. */}
        <span aria-hidden="true" className="menu-lbl">
          <span>{nav.menu}</span>
          <span>{nav.close}</span>
        </span>
        <span aria-hidden="true" className="menu-ico">
          <i />
          <i />
          <i />
        </span>
      </button>

      {(open || closing) && (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          aria-label={a11y.menuDialog}
          aria-hidden={!open || undefined}
          data-lenis-prevent
          data-state={open ? 'open' : 'closing'}
          style={{ '--menu-x': `${origin.x}px`, '--menu-y': `${origin.y}px` } as CSSProperties}
          onAnimationEnd={(event) => {
            if (event.animationName === 'menu-out') setClosing(false);
          }}
          className="menu-overlay pointer-events-auto fixed inset-0 z-0 bg-ink"
        >
          {/* The halos are wider than the screen: clipped here so the overlay never scrolls sideways. */}
          <div aria-hidden="true" className="menu-bg">
            <Glow
              color="#FA7F13"
              opacity={0.16}
              blur={160}
              style={{
                width: '52vw',
                height: '52vw',
                maxWidth: 760,
                maxHeight: 760,
                right: '-8%',
                top: '-18%',
              }}
            />
            <Glow
              color="#2065CB"
              opacity={0.18}
              blur={160}
              style={{
                width: '46vw',
                height: '46vw',
                maxWidth: 680,
                maxHeight: 680,
                left: '-10%',
                top: '40%',
              }}
            />
          </div>
          <div className="menu-grid relative mx-auto w-full max-w-[1440px] px-gutter pt-32 pb-14">
            <nav aria-label={a11y.mainNav}>
              <p className="menu-item label-mono mb-5 text-muted-3" style={stagger(0)}>
                {nav.sectionLabel}
              </p>
              <ul className="menu-list m-0 list-none p-0">
                {nav.items.map((item, i) => (
                  <li key={item.anchor} style={stagger(i + 1)}>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={`${homeHref}#${item.anchor}`}
                      onClick={close}
                      aria-current={active === item.anchor ? 'location' : undefined}
                      className="menu-link relative flex items-center gap-[clamp(16px,3vw,40px)] py-[clamp(14px,1.8vw,22px)] text-paper"
                    >
                      <span className="menu-num menu-side min-w-7 font-mono text-[13px] text-muted-3">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="menu-mask">
                        <span className="menu-text font-display leading-none font-medium tracking-[-0.045em]">
                          {item.label}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`menu-dot menu-side ml-auto h-3.5 w-3.5 flex-none rounded-full ${dotColor[item.dot]}`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <aside
              className="menu-item menu-aside flex flex-col gap-9 pt-10"
              style={stagger(nav.items.length + 1)}
            >
              <div className="ma-mail flex flex-col gap-[10px]">
                <p className="label-mono m-0 text-muted-3">{nav.write}</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-u selectable self-start font-display text-mail font-medium tracking-[-0.02em] text-paper"
                >
                  {site.email}
                </a>
              </div>
              <div className="ma-soc flex flex-col gap-[10px]">
                <p className="label-mono m-0 text-muted-3">{nav.follow}</p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="link-u inline-flex items-center gap-2 self-start text-lg text-paper"
                >
                  {nav.linkedin}
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="ma-lang flex flex-col gap-[10px]">
                <p className="label-mono m-0 text-muted-3">{nav.language}</p>
                <LangSwitch
                  locale={locale}
                  label={a11y.languageGroup}
                  size="sm"
                  className="self-start rounded-pill border border-line-3 p-[3px]"
                />
              </div>
              <p className="ma-tag m-0 max-w-[340px] text-[15px] leading-[1.6] text-muted-3">
                {nav.tagline}
              </p>
              <ButtonLink
                href={`${homeHref}#contact`}
                onClick={close}
                className="ma-cta self-start"
              >
                {nav.cta}
              </ButtonLink>
            </aside>
          </div>
        </div>
      )}
    </>
  );
}

/** Position in the entrance sequence, read by the `--i` delays in globals.css. */
function stagger(i: number): CSSProperties {
  return { '--i': i } as CSSProperties;
}

/** Fallback when the CSS variable can't be read (server render). Matches `globals.css`. */
const FALLBACK = 104;

/**
 * Space kept above an anchor target for the fixed header, from `--header-offset` on
 * <html> (also used by `scroll-padding-top`), so Lenis and native jumps agree.
 */
export function headerOffset(): number {
  if (typeof window === 'undefined') return FALLBACK;
  const value = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--header-offset'),
  );
  return Number.isFinite(value) ? value : FALLBACK;
}

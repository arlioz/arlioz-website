import { type CSSProperties } from 'react';
import { type TrustLogo } from '@/content/media';

/**
 * A company logo drawn as a single-tone mask in the current text colour (it follows
 * the colour scheme), or its name as a wordmark when there is no logo file. Logos
 * are sized by their shape, not by a fixed height: a wide wordmark gets a lower
 * height than a square symbol, so every logo carries about the same visual weight
 * (height ∝ ratio^-0.35 × `--logo-h`, set by the parent).
 */
export function BrandLogo({ logo }: { logo: TrustLogo }) {
  if (!logo.src || !logo.w || !logo.h) {
    return <span className="trust-word font-display font-semibold">{logo.name}</span>;
  }
  const ratio = logo.w / logo.h;
  const style = {
    '--logo': `url(${logo.src})`,
    '--ratio': ratio,
    '--scale': Math.pow(ratio, -0.35).toFixed(3),
  } as CSSProperties;
  return (
    <span className="inline-flex items-center gap-2.5">
      <span role="img" aria-label={logo.name} className="trust-logo" style={style} />
      {logo.withName && (
        <span aria-hidden="true" className="trust-word font-display font-semibold">
          {logo.name}
        </span>
      )}
    </span>
  );
}

/** A row of logos that wraps on narrow screens; no motion. */
export function LogoRow({
  logos,
  className = '',
}: {
  logos: readonly TrustLogo[];
  className?: string;
}) {
  return (
    <ul
      className={`logo-row m-0 flex list-none flex-wrap items-center justify-center p-0 ${className}`}
    >
      {logos.map((logo) => (
        <li key={logo.name} className="flex flex-none items-center">
          <BrandLogo logo={logo} />
        </li>
      ))}
    </ul>
  );
}

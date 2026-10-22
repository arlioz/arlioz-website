import { type CSSProperties } from 'react';
import { type SiteContent } from '@/content/types';
import { trustLogos, type TrustLogo } from '@/content/media';

/**
 * Logos are sized by their shape, not by a fixed height: a wide wordmark gets a
 * lower height than a square symbol, so every logo carries about the same visual
 * weight (height ∝ ratio^-0.35).
 */
function Logo({ logo }: { logo: TrustLogo }) {
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

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="trust-track m-0 flex list-none items-center p-0 whitespace-nowrap"
    >
      {trustLogos.map((logo) => (
        <li key={logo.name} className="flex flex-none items-center">
          <Logo logo={logo} />
        </li>
      ))}
    </ul>
  );
}

/** Under the hero: the companies and schools where the team has worked, as a logo loop. */
export function TrustBand({ content }: { content: SiteContent }) {
  return (
    <section
      aria-labelledby="trust-label"
      className="border-t border-line py-[clamp(28px,3.4vw,44px)]"
    >
      <p
        id="trust-label"
        className="label-mono m-0 mb-[clamp(20px,2.4vw,28px)] text-center text-muted-3"
      >
        {content.trust.label}
      </p>
      <div className="marquee text-muted-2">
        <div className="marquee-track">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}

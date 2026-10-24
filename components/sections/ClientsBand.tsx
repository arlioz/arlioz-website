import { type SiteContent } from '@/content/types';
import { clientLogos } from '@/content/media';
import { LogoRow } from '@/components/ui/BrandLogo';

/**
 * The proof band under the hero: the clients who run our work in production, then
 * the key figures, as social proof right after the promise. Static on purpose:
 * moving logos need a pause control (WCAG 2.2.2) and slow the page down. A client
 * without a logo file shows its name.
 */
export function ClientsBand({ content }: { content: SiteContent }) {
  const { clients } = content;
  return (
    <section
      aria-labelledby="clients-label"
      className="clients-band border-t border-line py-[clamp(24px,2.8vw,36px)]"
    >
      <div className="container-site flex flex-col gap-[clamp(24px,2.8vw,36px)]">
        <div className="flex flex-wrap items-center justify-center gap-x-[clamp(32px,4.4vw,64px)] gap-y-5">
          <p id="clients-label" className="label-mono m-0 text-muted-3">
            {clients.label}
          </p>
          <LogoRow logos={clientLogos} className="logo-row-clients text-paper-2" />
        </div>
        <dl
          aria-label={clients.statsLabel}
          className="stats m-0 border-t border-line pt-[clamp(20px,2.4vw,32px)]"
        >
          {clients.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <dt className="label-mono-sm text-muted-3">{stat.label}</dt>
              <dd className="m-0 font-display text-[clamp(36px,3.6vw,56px)] leading-none font-medium tracking-[-0.04em] text-paper">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

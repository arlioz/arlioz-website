import { type SiteContent } from '@/content/types';
import { clientLogos } from '@/content/media';
import { LogoRow } from '@/components/ui/BrandLogo';

/**
 * The band under the hero: the clients who run our work in production, as social
 * proof right after the promise. Static on purpose: moving logos need a pause
 * control (WCAG 2.2.2) and slow the page down. A client without a logo file shows
 * its name.
 */
export function ClientsBand({ content }: { content: SiteContent }) {
  return (
    <section
      aria-labelledby="clients-label"
      className="clients-band border-t border-line py-[clamp(24px,2.8vw,36px)]"
    >
      <div className="container-site flex flex-wrap items-center justify-center gap-x-[clamp(32px,4.4vw,64px)] gap-y-5">
        <p id="clients-label" className="label-mono m-0 text-muted-3">
          {content.clients.label}
        </p>
        <LogoRow logos={clientLogos} className="logo-row-clients text-paper-2" />
      </div>
    </section>
  );
}

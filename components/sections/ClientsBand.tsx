import { type SiteContent } from '@/content/types';

const dots = ['bg-orange', 'bg-blue', 'bg-green'] as const;

/**
 * The band under the hero: the clients who run our work in production, as social
 * proof right after the promise. Names for now; swap each for its logo (with the
 * client's consent) when the files are available.
 */
export function ClientsBand({ content }: { content: SiteContent }) {
  const { clients } = content;
  return (
    <div className="clients-band border-t border-line py-[clamp(24px,2.8vw,36px)]">
      <div className="container-site flex flex-wrap items-center justify-center gap-x-[clamp(28px,4vw,56px)] gap-y-4">
        <p className="label-mono m-0 text-muted-3">{clients.label}</p>
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-[clamp(28px,4vw,56px)] gap-y-3 p-0 font-display text-[clamp(24px,2.6vw,34px)] leading-none font-medium tracking-[-0.035em] text-paper">
          {clients.items.map((client, i) => (
            <li key={client} className="inline-flex items-center gap-3">
              <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${dots[i % 3]}`} />
              {client}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

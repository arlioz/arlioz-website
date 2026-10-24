import { type SiteContent, type StartOffer } from '@/content/types';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Check } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';
import { mailto } from '@/components/ui/MailLink';

function StartCard({ offer, primary }: { offer: StartOffer; primary: boolean }) {
  return (
    <article
      className={`card-hover ${primary ? 'hx-orange' : 'hx-green'} relative flex flex-col gap-6 rounded-card border border-line-2 bg-surface p-[clamp(28px,3vw,44px)]`}
    >
      <div className="hx" aria-hidden="true" />
      <div className="hx-line" aria-hidden="true" />
      {/* Title first, so both cards line up whether or not they carry short facts. */}
      <div className="relative flex flex-col gap-3">
        <h3 className="m-0 font-display text-[clamp(26px,2.4vw,34px)] leading-[1.05] font-medium tracking-[-0.03em]">
          {offer.title}
        </h3>
        {offer.meta && <p className="label-mono-sm m-0 text-muted-3">{offer.meta}</p>}
      </div>
      <p className="relative m-0 text-[17px] leading-[1.6] text-paper-2">{offer.text}</p>
      <ul className="relative m-0 flex list-none flex-col gap-2.5 border-t border-line-2 p-0 pt-5">
        {offer.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-base leading-[1.5] text-paper-2">
            <Check
              className={`mt-1 flex-none ${primary ? 'text-orange-light' : 'text-green-light'}`}
            />
            {point}
          </li>
        ))}
      </ul>
      <div className="relative mt-auto pt-2">
        <ButtonLink href={mailto(offer.cta.subject)} variant={primary ? 'primary' : 'glass'} arrow>
          {offer.cta.label}
        </ButtonLink>
      </div>
    </article>
  );
}

/**
 * The two ways to start: a free discovery call (primary), or an audit sized to
 * the client's IT estate and project.
 * Both open an e-mail with a pre-filled subject; contact stays e-mail and LinkedIn.
 */
export function Start({ content }: { content: SiteContent }) {
  const { start } = content;
  return (
    <section
      id="demarrer"
      aria-labelledby="start-title"
      className="border-y border-line bg-ink-2 py-section"
    >
      <div className="container-site">
        <div className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <div className="flex min-w-0 max-w-[780px] flex-col gap-[26px]">
            <Eyebrow index={start.index} label={start.label} animated />
            <LineTitle
              id="start-title"
              lines={start.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.035em]"
            />
          </div>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.6] text-muted text-pretty">
            {start.intro}
          </p>
        </div>
        <div className="start-grid">
          <StartCard offer={start.call} primary />
          <StartCard offer={start.audit} primary={false} />
        </div>
      </div>
    </section>
  );
}

import { type Offer, type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowDown, Check, expertiseIcons, Layers, Shield } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';
import { MailLink } from '@/components/ui/MailLink';

/** Brand colour code: orange = development, blue = GDPR, green = both. */
const tone = {
  orange: { hx: 'hx-orange', ico: 'bg-orange/13 text-orange-light', accent: 'text-orange-light' },
  blue: { hx: 'hx-blue', ico: 'bg-blue/14 text-blue-light', accent: 'text-blue-light' },
  green: { hx: 'hx-green', ico: 'bg-green/14 text-green-light', accent: 'text-green-light' },
} as const;

const icons = [expertiseIcons.code, Shield, Layers] as const;

/**
 * One offer, read top to bottom: what it is, where you are today (grey), where you
 * will be (ink, after the arrow), what we do (four points), then the contact link.
 * The problem / result labels are only for screen readers; the arrow says it.
 */
function OfferCard({
  offer,
  index,
  labels,
}: {
  offer: Offer;
  index: number;
  labels: SiteContent['expertises']['labels'];
}) {
  const t = tone[offer.accent];
  const Icon = icons[index] ?? Layers;
  return (
    <article
      className={`offer card-hover ${t.hx} relative flex flex-col rounded-card border border-line-2 bg-surface`}
    >
      <div className="hx" aria-hidden="true" />
      <div className="hx-line" aria-hidden="true" />

      <div className="relative flex items-center gap-4">
        <span
          aria-hidden="true"
          className={`inline-flex h-12 w-12 flex-none items-center justify-center rounded-tile ${t.ico}`}
        >
          <Icon />
        </span>
        <h3 className="m-0 font-display text-card leading-[1.1] font-medium tracking-[-0.025em]">
          {offer.title}
        </h3>
      </div>

      <dl className="relative m-0 flex flex-col gap-3">
        <div>
          <dt className="sr-only">{labels.problem}</dt>
          <dd className="m-0 text-base leading-[1.6] text-muted">{offer.problem}</dd>
        </div>
        <div>
          <dt className="sr-only">{labels.result}</dt>
          <dd className="m-0 flex flex-col gap-3 text-[17px] leading-[1.55] font-medium text-paper">
            <ArrowDown size={18} className={t.accent} />
            {offer.result}
          </dd>
        </div>
      </dl>

      <ul className="relative m-0 flex list-none flex-col gap-2.5 border-t border-line-2 p-0 pt-5">
        {offer.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-base leading-[1.5] text-paper-2">
            <Check className={`mt-1 flex-none ${t.accent}`} />
            {point}
          </li>
        ))}
      </ul>

      <MailLink link={offer.cta} className="relative mt-auto pt-2" />
    </article>
  );
}

/** Three offers, each read as before → after, with what we do and a contact link. */
export function Expertises({ content }: { content: SiteContent }) {
  const { expertises: x } = content;
  return (
    <section id="expertises" aria-labelledby="services-title" className="py-section">
      <div className="container-site">
        <div className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <div className="flex min-w-0 max-w-[780px] flex-col gap-[26px]">
            <Eyebrow index={x.index} label={x.label} animated />
            <LineTitle
              id="services-title"
              lines={x.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.04em]"
            />
          </div>
          <p className="m-0 max-w-[470px] text-[17px] leading-[1.6] text-muted text-pretty">
            {x.intro}
          </p>
        </div>

        <div className="offers">
          {x.offers.map((offer, i) => (
            <OfferCard key={offer.title} offer={offer} index={i} labels={x.labels} />
          ))}
        </div>

        <p className="mt-[clamp(28px,3.4vw,44px)] mb-0 flex max-w-[560px] items-start gap-3 text-[17px] leading-[1.6] text-paper-2">
          <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-green" />
          {x.signature}
        </p>
      </div>
    </section>
  );
}

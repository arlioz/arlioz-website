import { type SiteContent, type Testimonial } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkedIn } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';

/** Every recommendation is about development work: orange, per the brand colour code. */
const avatarTone = 'bg-orange/14 text-orange-light';
const card =
  'card-hover hx-orange relative m-0 flex flex-col rounded-card border border-line-2 bg-surface';

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

/** The LinkedIn mark in the card's corner: where the recommendation comes from. */
function Source({ label }: { label: string }) {
  return (
    <span className="absolute top-[clamp(20px,2.4vw,32px)] right-[clamp(20px,2.4vw,32px)] text-muted-3">
      <LinkedIn size={18} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

/** Initials avatar (the portraits are theirs), then « Name — headline » on one line. */
function Byline({
  item,
  large = false,
  className = '',
}: {
  item: Testimonial;
  large?: boolean;
  className?: string;
}) {
  return (
    <figcaption className={`relative flex items-center gap-4 ${className}`}>
      <span
        aria-hidden="true"
        className={`flex flex-none items-center justify-center rounded-full font-display font-medium ${avatarTone} ${
          large ? 'h-[52px] w-[52px] text-[17px]' : 'h-11 w-11 text-[15px]'
        }`}
      >
        {initials(item.name)}
      </span>
      <p className="m-0 min-w-0 text-[15.5px] leading-snug">
        <span className="font-display text-[17px] font-medium tracking-[-0.01em] text-paper">
          {item.name}
        </span>
        <span className="text-muted"> — {item.role}</span>
      </p>
    </figcaption>
  );
}

/**
 * Recommendations published on LinkedIn: one quoted large, the others in a row of
 * three. Static on purpose (no carousel to pause), no scroll reveal on the cards.
 */
export function Testimonials({ content }: { content: SiteContent }) {
  const { testimonials } = content;
  const [featured, ...others] = testimonials.items;
  const note = (item: Testimonial) =>
    item.translated ? (
      <p className="relative m-0 text-[13px] text-muted-3">{testimonials.translated}</p>
    ) : null;

  return (
    <section id="temoignages" aria-labelledby="testimonials-title" className="py-section">
      <div className="container-site">
        <div className="mb-[clamp(40px,5vw,64px)] flex min-w-0 max-w-[780px] flex-col gap-[26px]">
          <Eyebrow index={testimonials.index} label={testimonials.label} />
          <LineTitle
            id="testimonials-title"
            lines={testimonials.title}
            className="font-display text-h2 leading-none font-medium tracking-[-0.04em]"
          />
        </div>

        {featured && (
          <figure className={`${card} gap-8 p-[clamp(28px,4.4vw,64px)]`}>
            <div className="hx" aria-hidden="true" />
            <div className="hx-line" aria-hidden="true" />
            <Source label={testimonials.source} />
            <blockquote className="relative m-0 flex flex-col gap-5">
              <span
                aria-hidden="true"
                className="h-[0.42em] font-serif text-[clamp(80px,8vw,112px)] leading-[0.8] text-orange-light italic"
              >
                “
              </span>
              <p className="m-0 max-w-[62ch] text-[clamp(20px,2vw,26px)] leading-[1.55] tracking-[-0.01em] text-paper text-pretty">
                {featured.quote}
              </p>
              {note(featured)}
            </blockquote>
            <Byline item={featured} large />
          </figure>
        )}

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {others.map((item) => (
            <figure key={item.name} className={`${card} gap-6 p-[clamp(24px,2.6vw,36px)]`}>
              <div className="hx" aria-hidden="true" />
              <div className="hx-line" aria-hidden="true" />
              <Source label={testimonials.source} />
              <blockquote className="relative m-0 flex flex-col gap-4">
                <span
                  aria-hidden="true"
                  className="h-[0.42em] font-serif text-[64px] leading-[0.8] text-orange-light/70 italic"
                >
                  “
                </span>
                <p className="m-0 text-[17px] leading-[1.65] text-paper-2 text-pretty">
                  {item.quote}
                </p>
                {note(item)}
              </blockquote>
              <Byline item={item} className="mt-auto border-t border-line-2 pt-5" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

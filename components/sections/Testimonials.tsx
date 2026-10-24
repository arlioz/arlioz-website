import { type SiteContent, type Testimonial } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkedIn } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

/**
 * Initials avatar (the portraits are theirs), then the name with a small LinkedIn
 * mark for the source (kept next to the name so it never wraps alone), and the headline. Orange: every recommendation is about development
 * work, per the brand colour code.
 */
function Byline({
  item,
  source,
  large = false,
}: {
  item: Testimonial;
  source: string;
  large?: boolean;
}) {
  return (
    <figcaption className="flex items-center gap-4">
      <span
        aria-hidden="true"
        className={`flex flex-none items-center justify-center rounded-full bg-orange/14 font-display font-medium text-orange-light ${
          large ? 'h-[52px] w-[52px] text-[17px]' : 'h-11 w-11 text-[15px]'
        }`}
      >
        {initials(item.name)}
      </span>
      <p className="m-0 min-w-0 text-[15.5px] leading-snug">
        <span className="font-display text-[17px] font-medium tracking-[-0.01em] text-paper">
          {item.name}
        </span>
        <LinkedIn size={14} className="ml-1.5 inline-block align-[-2px] text-muted-3" />
        <span className="sr-only">{source}</span>
        <span className="text-muted"> — {item.role}</span>
      </p>
    </figcaption>
  );
}

/**
 * Recommendations published on LinkedIn, laid out like a magazine page: one
 * recommendation quoted large and set off to the right, then the others in columns
 * split by hairlines. No cards: each quote takes its own height, so a long one never
 * leaves empty boxes beside it. Static on purpose (no carousel to pause).
 */
export function Testimonials({ content }: { content: SiteContent }) {
  const { testimonials } = content;
  const [featured, ...others] = testimonials.items;
  const note = (item: Testimonial) =>
    item.translated ? (
      <p className="m-0 text-[13px] text-muted-3">{testimonials.translated}</p>
    ) : null;

  return (
    <section id="temoignages" aria-labelledby="testimonials-title" className="py-section">
      <div className="container-site">
        <div className="mb-[clamp(36px,4.4vw,64px)] flex min-w-0 max-w-[780px] flex-col gap-[26px]">
          <Eyebrow index={testimonials.index} label={testimonials.label} animated />
          <LineTitle
            id="testimonials-title"
            lines={testimonials.title}
            className="font-display text-h2 leading-none font-medium tracking-[-0.035em]"
          />
        </div>

        {/* The featured quote is set off to the right (columns 5–12), magazine style;
            its quote mark pops first, then the quote rises. */}
        <div className="grid grid-cols-1 2xl:grid-cols-12">
          {featured && (
            <figure className="rv-q m-0 flex min-w-0 flex-col gap-8 2xl:col-span-8 2xl:col-start-5">
              <blockquote className="m-0 flex flex-col gap-5">
                <span
                  aria-hidden="true"
                  className="rv-pop h-[0.42em] origin-bottom-left font-serif text-[clamp(88px,8vw,120px)] leading-[0.8] text-orange-light italic"
                >
                  “
                </span>
                <p className="m-0 max-w-[32em] text-[clamp(21px,2.1vw,28px)] leading-[1.5] tracking-[-0.012em] text-paper text-pretty">
                  {featured.quote}
                </p>
                {note(featured)}
              </blockquote>
              <Byline item={featured} source={testimonials.source} large />
            </figure>
          )}
        </div>

        <div className="mt-[clamp(48px,6vw,88px)] grid grid-cols-1 border-t border-line-2 2xl:grid-cols-3">
          {others.map((item, i) => (
            <figure
              key={item.name}
              className={`m-0 flex min-w-0 flex-col gap-6 py-[clamp(32px,3.6vw,48px)] 2xl:px-[clamp(24px,2.8vw,44px)] 2xl:first:pl-0 2xl:last:pr-0 ${
                i > 0 ? 'border-t border-line-2 2xl:border-t-0 2xl:border-l' : ''
              }`}
            >
              <blockquote className="m-0 flex flex-col gap-3">
                <p className="m-0 max-w-[46ch] text-[17px] leading-[1.65] text-paper-2 text-pretty">
                  {item.quote}
                </p>
                {note(item)}
              </blockquote>
              <Byline item={item} source={testimonials.source} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

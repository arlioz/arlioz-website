import { type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LineTitle } from '@/components/ui/LineTitle';

const accents = [
  { hx: 'hx-orange', dot: 'bg-orange/14 text-orange-light' },
  { hx: 'hx-blue', dot: 'bg-blue/14 text-blue-light' },
  { hx: 'hx-green', dot: 'bg-green/14 text-green-light' },
] as const;

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

/**
 * Recommendations published on LinkedIn, quoted with the author's name, headline
 * and how they know Amaury. Initials instead of photos: the portraits are theirs.
 */
export function Testimonials({ content }: { content: SiteContent }) {
  const { testimonials } = content;
  return (
    <section id="temoignages" aria-labelledby="testimonials-title" className="py-section">
      <div className="container-site">
        <div className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div className="flex min-w-0 max-w-[780px] flex-col gap-[26px]">
            <Eyebrow index={testimonials.index} label={testimonials.label} />
            <LineTitle
              id="testimonials-title"
              lines={testimonials.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.04em]"
            />
          </div>
          <p className="rv m-0 max-w-[420px] text-[16.5px] leading-[1.6] text-muted text-pretty">
            {testimonials.text}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {testimonials.items.map((item, i) => {
            const a = accents[i % accents.length] ?? accents[0];
            return (
              <figure
                key={item.name}
                className={`card-hover ${a.hx} relative m-0 flex flex-col gap-8 rounded-card border border-line-2 bg-surface p-[clamp(24px,3vw,40px)]`}
              >
                <div className="hx" aria-hidden="true" />
                <div className="hx-line" aria-hidden="true" />
                <blockquote className="relative m-0 flex flex-col gap-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-[64px] leading-[0.5] text-paper/20 italic"
                  >
                    “
                  </span>
                  <p className="m-0 text-[17px] leading-[1.65] text-paper-2 text-pretty">
                    {item.quote}
                  </p>
                </blockquote>
                <figcaption className="relative mt-auto flex items-center gap-4 border-t border-line-2 pt-6">
                  <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-full font-display text-[16px] font-medium ${a.dot}`}
                  >
                    {initials(item.name)}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-display text-[19px] leading-tight font-medium tracking-[-0.02em] text-paper">
                      {item.name}
                    </span>
                    <span className="text-[15px] leading-snug text-muted">{item.role}</span>
                    <span className="label-mono-sm text-muted-3">
                      {item.context} · {testimonials.source}
                      {item.translated ? ` · ${testimonials.translated}` : ''}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

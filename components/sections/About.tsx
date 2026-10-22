import { type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';

const bars = [
  'bg-[linear-gradient(90deg,#FEB613,#FA7F13_55%,#E8392B)]',
  'bg-[linear-gradient(90deg,#1A55B8,#2065CB_55%,#3D80E0)] b2',
  'bg-[linear-gradient(90deg,#1E92A0,#2BBE8D_60%,#4FD6A4)] b3',
] as const;

export function About({ content }: { content: SiteContent }) {
  const { about } = content;
  return (
    <section id="a-propos" aria-labelledby="about-title" className="py-section">
      <div className="container-site">
        <div className="split">
          <div className="flex flex-col justify-between gap-10">
            <Eyebrow index={about.index} label={about.label} />
            <dl className="about-facts m-0">
              {about.facts.map((fact, i) => (
                <div key={fact.label} className={i === 0 ? 'about-fact-main' : 'about-fact'}>
                  <dt
                    className={
                      i === 0
                        ? 'label-mono m-0 text-muted-3'
                        : 'm-0 text-sm leading-[1.4] text-muted text-pretty'
                    }
                  >
                    {fact.label}
                  </dt>
                  <dd className="m-0 font-display leading-[0.9] font-normal tracking-[-0.05em] text-paper">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="min-w-0">
            <h2
              id="about-title"
              className="rv m-0 font-display text-h2-sm leading-[1.17] font-normal tracking-[-0.028em] text-pretty"
            >
              {about.title.map((segment, i) =>
                segment.mark ? (
                  <span key={i} className={`mk mk-${segment.mark}`}>
                    {segment.text}
                  </span>
                ) : (
                  <span key={i}>{segment.text}</span>
                ),
              )}
            </h2>
            <div className="pillars mt-14 grid grid-cols-3 gap-10">
              {about.pillars.map((pillar, i) => (
                <div key={pillar.title} className="flex flex-col gap-4">
                  <div aria-hidden="true" className={`rv-bar h-1 rounded-pill ${bars[i] ?? ''}`} />
                  <h3 className="m-0 mt-1 font-display text-card leading-[1.1] font-medium tracking-[-0.025em]">
                    {pillar.title}
                  </h3>
                  <p className="m-0 text-base leading-[1.6] text-muted">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

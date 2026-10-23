import { type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';

const bars = [
  'bg-[linear-gradient(90deg,#FEB613,#FA7F13_55%,#E8392B)]',
  'bg-[linear-gradient(90deg,#1A55B8,#2065CB_55%,#3D80E0)] b2',
  'bg-[linear-gradient(90deg,#1E92A0,#2BBE8D_60%,#4FD6A4)] b3',
] as const;

export function About({ content }: { content: SiteContent }) {
  const { about } = content;
  // No top padding: it follows Expertises on the same background, whose bottom padding is the gap.
  return (
    <section id="a-propos" aria-labelledby="about-title" className="pb-section">
      <div className="container-site">
        <div className="split">
          {/* The key figures moved to the proof band under the hero. */}
          <Eyebrow index={about.index} label={about.label} className="self-start" />

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

import Image from 'next/image';
import { type SiteContent } from '@/content/types';
import { Chips } from '@/components/ui/Chips';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LogoRow } from '@/components/ui/BrandLogo';
import { trustLogos } from '@/content/media';

/** Brand colour code on the three pillars: build (orange), protect (blue), pass on (green). */
const bars = [
  'bg-[linear-gradient(90deg,#FEB613,#FA7F13_55%,#E8392B)]',
  'bg-[linear-gradient(90deg,#1A55B8,#2065CB_55%,#3D80E0)]',
  'bg-[linear-gradient(90deg,#1E92A0,#2BBE8D_60%,#4FD6A4)]',
] as const;

const accent = {
  blue: { hx: 'hx-blue', text: 'text-blue-light', border: 'border-blue-light/32' },
  orange: { hx: 'hx-orange', text: 'text-orange-light', border: 'border-orange-light/30' },
} as const;

/**
 * Who you work with: the title, a sentence with the brand colour marks, one profile
 * card per member, the three pillars, then the companies behind their experience.
 * One profile card per member, in the expertise cards' language (surface, accent
 * highlight along the top edge). Desktop and tablet: portrait on the left, text on the
 * right. Phone: a compact header (small portrait next to the name), text below.
 */
export function Team({ content }: { content: SiteContent }) {
  const { team } = content;
  return (
    <section
      id="equipe"
      aria-labelledby="team-title"
      className="border-y border-line bg-ink-2 py-section"
    >
      <div className="container-site">
        <div className="rv mb-[clamp(48px,6vw,80px)] flex min-w-0 max-w-[780px] flex-col gap-[26px]">
          <Eyebrow index={team.index} label={team.label} />
          <h2
            id="team-title"
            className="m-0 font-display text-h2 leading-none font-medium tracking-[-0.035em] text-balance"
          >
            {team.title}
          </h2>
          <p className="m-0 font-display text-[clamp(22px,2.2vw,30px)] leading-[1.3] font-normal tracking-[-0.02em] text-paper-2 text-pretty">
            {team.intro.map((segment, i) =>
              segment.mark ? (
                <span key={i} className={`mk mk-${segment.mark}`}>
                  {segment.text}
                </span>
              ) : (
                <span key={i}>{segment.text}</span>
              ),
            )}
          </p>
        </div>

        <div className="team-grid">
          {team.members.map((member) => {
            const a = accent[member.accent];
            return (
              <article
                key={member.name}
                className={`tcard card-hover ${a.hx} relative rounded-card border border-line-2 bg-surface`}
              >
                <div className="hx" aria-hidden="true" />
                <div className="hx-line" aria-hidden="true" />

                <div className="tcard-photo relative overflow-hidden rounded-[18px] bg-surface-2">
                  {member.photo ? (
                    <Image
                      src={member.photo.src}
                      alt={member.photo.alt}
                      fill
                      sizes="(max-width: 720px) 112px, (max-width: 1080px) 240px, 300px"
                      quality={85}
                      className="photo-zoom object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center bg-surface-2 font-display text-[clamp(40px,5vw,72px)] leading-none font-medium tracking-[-0.06em] text-paper/12"
                    >
                      {member.initials}
                    </span>
                  )}
                </div>

                <div className="tcard-head relative flex min-w-0 flex-col gap-2.5">
                  <p
                    className={`tcard-role hx-tag label-mono-sm m-0 w-fit rounded-pill border px-3 py-1.5 ${a.border} ${a.text}`}
                  >
                    {member.role}
                  </p>
                  <h3 className="m-0 font-display text-member leading-[1.05] font-medium tracking-[-0.03em]">
                    {member.name}
                  </h3>
                </div>

                <div className="tcard-body relative flex min-w-0 flex-col gap-5">
                  <p className="m-0 text-[16.5px] leading-[1.6] text-muted">{member.text}</p>
                  {member.now && (
                    <p className="m-0 flex items-center gap-2.5 text-[15px] font-medium text-paper-2">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 flex-none rounded-full bg-orange"
                      />
                      {member.now}
                    </p>
                  )}
                  <Chips items={member.tags} className="mt-auto" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="pillars mt-[clamp(40px,5vw,64px)] grid grid-cols-3 gap-10">
          {team.pillars.map((pillar, i) => (
            <div key={pillar.title} className="flex flex-col gap-3">
              <div aria-hidden="true" className={`h-1 rounded-pill ${bars[i] ?? ''}`} />
              <h3 className="m-0 mt-1 font-display text-card leading-[1.1] font-medium tracking-[-0.025em]">
                {pillar.title}
              </h3>
              <p className="m-0 text-base leading-[1.6] text-muted">{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(56px,7vw,96px)] flex flex-col items-center gap-[clamp(24px,3vw,36px)] border-t border-line pt-[clamp(40px,5vw,64px)]">
          <p className="label-mono m-0 text-center text-muted-3">{content.trust.label}</p>
          <LogoRow logos={trustLogos} className="logo-row-trust max-w-[1100px] text-muted-2" />
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { type SiteContent } from '@/content/types';
import { Chips } from '@/components/ui/Chips';
import { Eyebrow } from '@/components/ui/Eyebrow';

const accent = {
  blue: { hx: 'hx-blue', text: 'text-blue-light', border: 'border-blue-light/32' },
  orange: { hx: 'hx-orange', text: 'text-orange-light', border: 'border-orange-light/30' },
} as const;

/**
 * One profile card per member, in the expertise cards' language (surface, accent
 * highlight along the top edge). Desktop and tablet: portrait on the left, text on the
 * right. Phone: a compact header (small portrait next to the name), text below.
 */
export function Team({ content }: { content: SiteContent }) {
  const { team } = content;
  return (
    <section id="equipe" aria-labelledby="team-title" className="pt-section-sm pb-section">
      <div className="container-site">
        <div className="rv mb-[clamp(48px,6vw,80px)] flex min-w-0 max-w-[780px] flex-col gap-[26px]">
          <Eyebrow index={team.index} label={team.label} />
          <h2
            id="team-title"
            className="m-0 font-display text-h2 leading-none font-medium tracking-[-0.04em] text-balance"
          >
            {team.title}
          </h2>
        </div>

        <div className="team-grid">
          {team.members.map((member, i) => {
            const a = accent[member.accent];
            return (
              <article
                key={member.name}
                className={`tcard card-hover ${a.hx} rv ${i === 1 ? 'rv-d1' : ''} relative rounded-card border border-line-2 bg-surface`}
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
                  <p className="m-0 text-base leading-[1.6] text-muted">{member.text}</p>
                  <Chips items={member.tags} className="mt-auto" />
                </div>
              </article>
            );
          })}
        </div>

        {team.recommendations.items.length > 0 && (
          <figure className="rv m-0 mt-[clamp(48px,6vw,80px)] flex flex-col gap-6">
            <figcaption className="label-mono text-muted-3">
              {team.recommendations.label}
            </figcaption>
            <ul className="team-quotes m-0 list-none p-0">
              {team.recommendations.items.map((item) => (
                <li
                  key={item.author}
                  className="flex flex-col justify-between gap-6 rounded-card border border-line-2 bg-surface p-[clamp(24px,2.6vw,36px)]"
                >
                  <div className="flex flex-col gap-3">
                    <span
                      aria-hidden="true"
                      className="font-serif text-[56px] leading-[0.6] text-orange-light italic"
                    >
                      “
                    </span>
                    <blockquote
                      lang={item.lang}
                      className="m-0 font-display text-[clamp(19px,1.6vw,23px)] leading-[1.4] tracking-[-0.01em] text-paper text-pretty"
                    >
                      {item.quote}
                    </blockquote>
                  </div>
                  <p className="m-0 flex flex-col gap-1">
                    <span className="font-medium text-paper">{item.author}</span>
                    <span className="text-sm text-muted">{item.role}</span>
                  </p>
                </li>
              ))}
            </ul>
          </figure>
        )}
      </div>
    </section>
  );
}

import Link from 'next/link';
import { type CSSProperties } from 'react';
import { type SiteContent } from '@/content/types';
import { type Locale, localePath } from '@/lib/i18n';
import { Chips } from '@/components/ui/Chips';
import { DeviceStage } from '@/components/ui/DeviceStage';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowRight, ArrowUpRight } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';

const glow = { orange: '#FA7F13', blue: '#2065CB', green: '#2BBE8D' } as const;

export function Work({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { work } = content;
  const total = String(content.projects.length).padStart(2, '0');
  return (
    <section
      id="realisations"
      aria-labelledby="work-title"
      className="border-y border-line bg-ink-2 py-section"
    >
      <div className="container-site">
        <div className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <div className="flex min-w-0 max-w-[780px] flex-col gap-[26px]">
            {/* First section under the band: no opacity reveal near the fold (axe contrast). */}
            <Eyebrow index={work.index} label={work.label} />
            <LineTitle
              id="work-title"
              lines={work.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.04em]"
            />
          </div>
        </div>

        {/* Stacked cards: on wide screens each card sticks under the header and the next
            one lands on top of it while it recedes (CSS scroll-driven, see .pcard). */}
        <div
          className="stack"
          style={
            {
              timelineScope: content.projects.map((_, i) => `--c${i + 1}`).join(', '),
            } as CSSProperties
          }
        >
          {content.projects.map((project, i) => {
            const href = localePath(locale, 'work', project.slug);
            const last = i === content.projects.length - 1;
            const vars = {
              '--i': i,
              '--self': `--c${i + 1}`,
              '--accent': glow[project.accent],
              ...(last ? {} : { '--next': `--c${i + 2}` }),
            } as CSSProperties;
            const headline = project.story.results[0] ?? { text: project.highlights };
            return (
              <article
                key={project.slug}
                className={`pcard proj-card ${project.reversed ? 'pcard-rev' : ''}`}
                style={vars}
              >
                <div className="pcard-bar label-mono text-muted-3">
                  <p className="m-0 flex flex-wrap items-center gap-x-3.5 gap-y-2 tracking-[0.06em]">
                    <span className="text-paper">
                      {project.index} / {total}
                    </span>
                    <span aria-hidden="true" className="pcard-rule" />
                    <span className="pcard-type">{project.type}</span>
                    <span aria-hidden="true" className="pcard-type">
                      /
                    </span>
                    <span>
                      {work.clientPrefix} {project.client}
                    </span>
                  </p>
                  <Link
                    href={href}
                    className="link-u pcard-top-link inline-flex items-center gap-2 font-sans text-[15px] font-medium tracking-normal text-paper normal-case"
                  >
                    {work.caseStudy}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className={`proj-row ${project.reversed ? 'proj-row-rev' : ''}`}>
                  <DeviceStage
                    devices={project.devices}
                    reversed={project.reversed}
                    glow={glow[project.accent]}
                    href={href}
                    ariaLabel={`${work.caseStudy} : ${project.title}`}
                  />
                  <div className="flex min-w-0 flex-col gap-4">
                    <LineTitle
                      as="h3"
                      lines={[project.title]}
                      className="font-display text-h3-work leading-[1.02] font-medium tracking-[-0.035em]"
                    />
                    <p className="sx-txt m-0 max-w-[580px] text-[17px] leading-[1.6] text-muted text-pretty">
                      {project.summary}
                    </p>
                    <dl className="pcard-story m-0 grid max-w-[580px] gap-3 border-t border-line-2 pt-4">
                      <div className="grid gap-1">
                        <dt className="label-mono-sm text-muted-3">{work.need}</dt>
                        <dd className="m-0 text-base leading-[1.55] text-paper-2">
                          {project.story.challenge}
                        </dd>
                      </div>
                      <div className="grid gap-1">
                        <dt className="label-mono-sm text-muted-3">{work.result}</dt>
                        <dd className="m-0 text-base leading-[1.55] text-paper-2">
                          {headline.value && (
                            <strong className="font-semibold text-paper">{headline.value} </strong>
                          )}
                          {headline.text}
                        </dd>
                      </div>
                    </dl>
                    <Chips items={project.tags} className="pcard-chips mt-1" />
                    <div className="pcard-links mt-2 flex flex-wrap gap-x-7 gap-y-3 text-[16px]">
                      <Link
                        href={href}
                        className="link-u pcard-body-link inline-flex items-center gap-2 font-medium text-paper"
                      >
                        {work.caseStudy}
                        <ArrowRight size={16} />
                      </Link>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener"
                          className="link-u inline-flex items-center gap-2 text-muted"
                        >
                          {project.demoLabel}
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <span aria-hidden="true" className="pcard-veil" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { type SiteContent } from '@/content/types';
import { type Locale, localePath } from '@/lib/i18n';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Glow } from '@/components/ui/Glow';
import { Check, expertiseIcons, Layers } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';

const card =
  'card-hover sx-card hx-green relative flex min-h-[288px] flex-col justify-between gap-10 rounded-card border border-line-2 bg-surface p-8';

/** Arlioz Education: teaching, and architectural / technical support for companies. */
export function Education({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { education: e } = content;
  const home = localePath(locale);
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="relative overflow-clip border-y border-line bg-ink-2 py-section"
    >
      <Glow
        color="#2BBE8D"
        opacity={0.14}
        blur={140}
        style={{ width: 520, height: 520, right: -200, top: -220 }}
      />
      <div className="container-site relative">
        <div className="split mb-[clamp(48px,6vw,80px)]">
          <div className="rv flex min-w-0 flex-col gap-[26px]">
            <Eyebrow index={e.index} label={e.label} />
            <p className="label-mono m-0 inline-flex w-fit items-center gap-2.5 rounded-pill border border-line-3 px-3.5 py-2 tracking-[0.07em] text-green-light">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green" />
              {e.brand}
            </p>
            <LineTitle
              id="education-title"
              lines={e.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.04em]"
            />
          </div>
          <div className="rv rv-d1 flex min-w-0 flex-col gap-9">
            <p className="m-0 max-w-[620px] text-[17px] leading-[1.6] text-muted text-pretty">
              {e.text}
            </p>
            <div className="edu-aud grid gap-8 border-t border-line pt-8">
              {e.audiences.map((audience) => (
                <div key={audience.title} className="flex min-w-0 flex-col gap-2.5">
                  <h3 className="m-0 font-display text-card leading-[1.1] font-medium tracking-[-0.025em]">
                    {audience.title}
                  </h3>
                  <p className="m-0 text-[15.5px] leading-[1.6] text-muted">{audience.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="edu-grid">
          {e.topics.map((topic, i) => {
            const Icon = expertiseIcons[topic.icon];
            return (
              <article key={topic.title} className={`${card} ${i % 2 === 0 ? 'sx-d1' : 'sx-d2'}`}>
                <div className="hx" aria-hidden="true" />
                <div className="hx-line" aria-hidden="true" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="ico inline-flex h-[52px] w-[52px] items-center justify-center rounded-tile bg-green/13 text-green-light">
                    <Icon />
                  </span>
                  <span className="hx-tag label-mono-sm rounded-pill border border-green-light/30 px-3 py-1.5 text-green-light">
                    {topic.tag}
                  </span>
                </div>
                <div className="relative flex flex-col gap-2.5">
                  <LineTitle
                    as="h3"
                    lines={[topic.title]}
                    className="font-display text-card leading-[1.1] font-medium tracking-[-0.025em]"
                  />
                  <p className="sx-txt m-0 text-[15.5px] leading-[1.6] text-muted">{topic.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Featured: migrating away from PCSoft tools. */}
        <article className="card-hover sx-card hx-green relative mt-4 flex flex-wrap items-start justify-between gap-x-12 gap-y-8 overflow-clip rounded-card border border-line-2 bg-surface p-[clamp(28px,3.4vw,44px)]">
          <Glow
            color="#2BBE8D"
            opacity={0.26}
            blur={110}
            style={{ width: 360, height: 360, right: -120, top: -140 }}
          />
          <div className="hx" aria-hidden="true" />
          <div className="hx-line" aria-hidden="true" />
          <div className="relative flex min-w-0 max-w-[600px] flex-[1_1_380px] flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="ico inline-flex h-[52px] w-[52px] items-center justify-center rounded-tile bg-green/13 text-green-light">
                <Layers />
              </span>
              <span className="hx-tag label-mono-sm rounded-pill border border-green-light/30 px-3 py-1.5 text-green-light">
                {e.featured.tag}
              </span>
            </div>
            <LineTitle
              as="h3"
              lines={[e.featured.title]}
              className="font-display text-h3 leading-[1.05] font-medium tracking-[-0.035em] text-balance"
            />
            <p className="sx-txt m-0 text-base leading-[1.6] text-muted">{e.featured.text}</p>
          </div>
          <ul className="relative m-0 flex min-w-0 flex-[1_1_360px] list-none flex-col p-0">
            {e.featured.items.map((item, i, all) => (
              <li
                key={item}
                className={`sx-li flex items-center gap-3 border-t border-line-2 py-[13px] text-[15px] text-paper-2 ${
                  i === all.length - 1 ? 'border-b' : ''
                }`}
              >
                <Check className="ck flex-none text-green-light" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div className="rv mt-[clamp(32px,4vw,48px)] flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink href={`${home}#contact`}>{e.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

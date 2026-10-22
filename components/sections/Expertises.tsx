import { type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Glow } from '@/components/ui/Glow';
import { ArrowRight, Check, expertiseIcons, Layers, Shield } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';
import { ButtonLink } from '@/components/ui/Button';
import { MailLink, mailto } from '@/components/ui/MailLink';

const card =
  'card-hover sx-card relative flex flex-col rounded-card border border-line-2 bg-surface';

export function Expertises({ content }: { content: SiteContent }) {
  const { expertises: x } = content;
  return (
    <section id="expertises" aria-labelledby="services-title" className="pb-section">
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
          <p className="rv m-0 max-w-[470px] text-[17px] leading-[1.6] text-muted text-pretty">
            {x.intro}
          </p>
        </div>

        <div className="bento">
          {/* RGPD */}
          <article className={`${card} span-r2 hx-blue gap-7 overflow-clip p-9`}>
            <Glow
              color="#2065CB"
              opacity={0.3}
              blur={90}
              style={{ width: 320, height: 320, right: -110, top: -110 }}
            />
            <div className="hx" aria-hidden="true" />
            <div className="hx-line" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-3">
              <span className="ico inline-flex h-[52px] w-[52px] items-center justify-center rounded-tile bg-blue/16 text-blue-light">
                <Shield />
              </span>
              <span className="hx-tag label-mono-sm rounded-pill border border-blue-light/32 px-3 py-1.5 text-blue-light">
                {x.rgpd.tag}
              </span>
            </div>
            <div className="relative flex flex-col gap-3.5">
              <LineTitle
                as="h3"
                lines={[x.rgpd.title]}
                className="font-display text-h3 leading-[1.02] font-medium tracking-[-0.035em]"
              />
              <p className="sx-txt m-0 text-base leading-[1.6] text-muted">{x.rgpd.text}</p>
            </div>
            <ul className="relative m-0 mt-auto flex list-none flex-col p-0">
              {x.rgpd.items.map((item, i, all) => (
                <li
                  key={item}
                  className={`sx-li flex items-center gap-3 border-t border-line-2 py-[13px] text-base text-paper-2 ${
                    i === all.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <Check className="ck flex-none text-blue-light" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="sx-txt relative flex flex-col gap-4">
              <p className="m-0 text-base leading-[1.6] text-paper-2">{x.rgpd.benefit}</p>
              <MailLink link={x.rgpd.cta} />
            </div>
          </article>

          {/* Development cards */}
          {x.cards.map((item, i) => {
            const Icon = expertiseIcons[item.icon];
            return (
              <article
                key={item.title}
                className={`${card} ${i % 2 === 0 ? 'sx-d1' : 'sx-d2'} hx-orange min-h-[288px] justify-between gap-10 p-8`}
              >
                <div className="hx" aria-hidden="true" />
                <div className="hx-line" aria-hidden="true" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="ico inline-flex h-[52px] w-[52px] items-center justify-center rounded-tile bg-orange/13 text-orange-light">
                    <Icon />
                  </span>
                  <span className="hx-tag label-mono-sm rounded-pill border border-orange-light/30 px-3 py-1.5 text-orange-light">
                    {item.tag}
                  </span>
                </div>
                <div className="relative flex flex-col gap-2.5">
                  <LineTitle
                    as="h3"
                    lines={[item.title]}
                    className="font-display text-card leading-[1.1] font-medium tracking-[-0.025em]"
                  />
                  <p className="sx-txt m-0 text-base leading-[1.6] text-muted">{item.text}</p>
                </div>
              </article>
            );
          })}

          {/* Stack architecture */}
          <article
            className={`${card} span-c3 hx-green flex-row flex-wrap items-center justify-between gap-10 overflow-clip p-[clamp(28px,3.4vw,44px)]`}
          >
            <Glow
              color="#2BBE8D"
              opacity={0.2}
              style={{ width: 360, height: 360, left: '38%', bottom: -160 }}
            />
            <div className="hx" aria-hidden="true" />
            <div className="hx-line" aria-hidden="true" />
            <div className="stk-txt relative flex min-w-0 max-w-[660px] flex-[1_1_420px] flex-col gap-[18px]">
              <div className="flex items-center gap-3.5">
                <span className="ico inline-flex h-[52px] w-[52px] items-center justify-center rounded-tile bg-green/14 text-green">
                  <Layers />
                </span>
                <span className="hx-tag label-mono-sm rounded-pill border border-green/32 px-3 py-1.5 text-green">
                  {x.stack.tag}
                </span>
              </div>
              <LineTitle
                as="h3"
                lines={[x.stack.title]}
                className="mt-1.5 font-display text-h3 leading-[1.02] font-medium tracking-[-0.035em]"
              />
              <p className="sx-txt m-0 text-[16.5px] leading-[1.6] text-muted">
                {x.stack.text.map((segment, i) =>
                  segment.strong ? (
                    <span key={i} className="text-paper">
                      {segment.text}
                    </span>
                  ) : (
                    <span key={i}>{segment.text}</span>
                  ),
                )}
              </p>
            </div>
            <svg
              className="vn relative h-auto w-full max-w-[380px] flex-[0_1_380px]"
              role="img"
              aria-label={x.stack.diagram.aria}
              viewBox="0 0 360 210"
            >
              <defs>
                <clipPath id="arz-lens">
                  <circle cx="135" cy="105" r="90" />
                </clipPath>
              </defs>
              <g className="vn-l">
                <circle
                  cx="135"
                  cy="105"
                  r="90"
                  fill="rgba(250,127,19,0.07)"
                  stroke="#FA7F13"
                  strokeWidth="1.5"
                />
                <text
                  x="88"
                  y="109"
                  textAnchor="middle"
                  fill="#FB9A4B"
                  fontFamily="var(--font-mono)"
                  fontSize="12"
                  fontWeight="500"
                  letterSpacing="1.5"
                >
                  {x.stack.diagram.left}
                </text>
              </g>
              <g className="vn-r">
                <circle
                  cx="225"
                  cy="105"
                  r="90"
                  fill="rgba(32,101,203,0.1)"
                  stroke="#2065CB"
                  strokeWidth="1.5"
                />
                <text
                  x="272"
                  y="109"
                  textAnchor="middle"
                  fill="#6E9CF0"
                  fontFamily="var(--font-mono)"
                  fontSize="12"
                  fontWeight="500"
                  letterSpacing="1.5"
                >
                  {x.stack.diagram.right}
                </text>
              </g>
              <g className="vn-c">
                <circle cx="225" cy="105" r="90" fill="#2BBE8D" clipPath="url(#arz-lens)" />
                <text
                  x="180"
                  y="101"
                  textAnchor="middle"
                  fill="#0A0A0C"
                  fontFamily="var(--font-mono)"
                  fontSize="10.5"
                  fontWeight="500"
                  letterSpacing="0.8"
                >
                  {x.stack.diagram.center[0]}
                </text>
                <text
                  x="180"
                  y="117"
                  textAnchor="middle"
                  fill="#0A0A0C"
                  fontFamily="var(--font-mono)"
                  fontSize="10.5"
                  fontWeight="500"
                  letterSpacing="0.8"
                >
                  {x.stack.diagram.center[1]}
                </text>
              </g>
            </svg>
          </article>

          {/* Migration from PCSoft tools: a trajectory card */}
          <article
            className={`${card} span-c3 hx-orange gap-9 overflow-clip p-[clamp(28px,3.4vw,44px)]`}
          >
            <Glow
              color="#FA7F13"
              opacity={0.18}
              blur={110}
              style={{ width: 360, height: 360, right: -120, top: -140 }}
            />
            <div className="hx" aria-hidden="true" />
            <div className="hx-line" aria-hidden="true" />

            <div className="relative flex flex-wrap items-start justify-between gap-x-12 gap-y-8">
              <div className="flex min-w-0 max-w-[560px] flex-[1_1_380px] flex-col gap-5">
                <div className="flex items-center gap-3.5">
                  <span className="ico inline-flex h-[52px] w-[52px] items-center justify-center rounded-tile bg-orange/13 text-orange-light">
                    <Layers />
                  </span>
                  <span className="hx-tag label-mono-sm rounded-pill border border-orange-light/30 px-3 py-1.5 text-orange-light">
                    {x.migration.tag}
                  </span>
                </div>
                <LineTitle
                  as="h3"
                  lines={[x.migration.title]}
                  className="font-display text-h3 leading-[1.05] font-medium tracking-[-0.035em] text-balance"
                />
                <p className="sx-txt m-0 text-base leading-[1.6] text-muted">{x.migration.text}</p>
              </div>

              {/* Today → tomorrow */}
              <div className="mig-band sx-txt flex min-w-0 flex-[0_1_420px] items-stretch gap-4 rounded-card border border-line-2 bg-ink/40 p-5">
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <span className="label-mono-sm text-muted-3">{x.migration.from.label}</span>
                  <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {x.migration.from.items.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-sm tracking-[0.02em] text-muted-2 line-through decoration-line-5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  aria-hidden="true"
                  className="mig-arrow inline-flex h-9 w-9 flex-none items-center justify-center self-center rounded-full bg-orange/13 text-orange-light"
                >
                  <ArrowRight size={18} />
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <span className="label-mono-sm text-orange-light">{x.migration.to.label}</span>
                  <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {x.migration.to.items.map((item) => (
                      <li key={item} className="font-mono text-sm tracking-[0.02em] text-paper">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* The four steps */}
            <ol className="mig-steps relative m-0 list-none p-0">
              {x.migration.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="sx-li flex min-w-0 flex-col gap-2.5 border-t border-line-2 pt-5"
                >
                  <span className="label-mono-sm text-orange-light">0{i + 1}</span>
                  <span className="font-display text-[20px] leading-[1.15] font-medium tracking-[-0.02em] text-paper">
                    {step.title}
                  </span>
                  <span className="text-base leading-[1.55] text-muted">{step.text}</span>
                </li>
              ))}
            </ol>

            <div className="sx-txt relative flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
              <p className="m-0 flex items-start gap-3 text-base text-paper-2">
                <Check className="mt-0.5 flex-none text-orange-light" />
                {x.migration.note}
              </p>
              <MailLink link={x.migration.cta} />
            </div>
          </article>
        </div>

        <div className="rv mt-[clamp(32px,4vw,48px)] flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink href={mailto(x.devCta.subject)}>{x.devCta.label}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

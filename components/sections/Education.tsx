import { type SiteContent } from '@/content/types';
import { type Locale, localePath } from '@/lib/i18n';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Glow } from '@/components/ui/Glow';
import { LineTitle } from '@/components/ui/LineTitle';

/** Arlioz Education, as a compact band: teaching, and support for company teams. */
export function Education({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { education: e } = content;
  const home = localePath(locale);
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="relative overflow-clip border-y border-line bg-ink-2 py-[clamp(64px,8vw,120px)] [--anchor-pad:clamp(64px,8vw,120px)]"
    >
      <Glow
        color="#2BBE8D"
        opacity={0.14}
        blur={140}
        style={{ width: 520, height: 520, right: -200, top: -220 }}
      />
      <div className="container-site relative">
        <div className="split">
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
          <div className="flex min-w-0 flex-col gap-9">
            <p className="m-0 max-w-[620px] text-[17px] leading-[1.6] text-muted text-pretty">
              {e.text}
            </p>
            <div className="edu-aud grid gap-8 border-t border-line pt-8">
              {e.audiences.map((audience) => (
                <div key={audience.title} className="flex min-w-0 flex-col gap-2.5">
                  <h3 className="m-0 font-display text-card leading-[1.1] font-medium tracking-[-0.025em]">
                    {audience.title}
                  </h3>
                  <p className="m-0 text-[16.5px] leading-[1.6] text-muted">{audience.text}</p>
                </div>
              ))}
            </div>
            <div>
              <ButtonLink href={`${home}#contact`} variant="glass" arrow>
                {e.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

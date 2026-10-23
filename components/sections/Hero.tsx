import Image from 'next/image';
import { type SiteContent } from '@/content/types';
import { type Locale, localePath } from '@/lib/i18n';
import { ChromaCurrent } from '@/components/motion/ChromaCurrent';
import { ButtonLink } from '@/components/ui/Button';
import { DeviceStage } from '@/components/ui/DeviceStage';
import { mailto } from '@/components/ui/MailLink';
import { HERO_ID } from '@/components/layout/Header';

/** Line 1 builds (orange, development), line 2 grows teams (green, development and GDPR). */
const highlight = ['hero-hl-a', 'hero-hl-c'] as const;
const glow = { orange: '#FA7F13', blue: '#2065CB', green: '#2BBE8D' } as const;

/**
 * The promise on the left, the proof on the right: a product we run in production, on
 * its three devices, linking to its case study. Under the buttons, short facts and the
 * recommendations link. The primary button opens an e-mail asking for a discovery call.
 */
export function Hero({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { hero, team, testimonials, work } = content;
  const home = localePath(locale);
  const showcase = content.projects[0];

  return (
    <section id={HERO_ID} aria-labelledby="hero-title" className="relative overflow-clip">
      <div className="hero relative">
        <ChromaCurrent className="hero-chroma" lightColors={['#e8640a', '#0a9e8a']} />
        <div aria-hidden="true" className="hero-veil" />

        <div className="container-site hero-grid relative z-[2]">
          <div className="flex min-w-0 flex-col items-start gap-[clamp(22px,2.4vw,30px)]">
            {/* The people first: the founders' faces above the promise. */}
            <a
              href={`${home}#equipe`}
              className="intro intro-1 hero-team inline-flex items-center gap-3 rounded-pill border border-line-3 bg-paper/3 py-1.5 pr-4 pl-1.5 text-[15px] font-medium text-paper-2"
            >
              <span aria-hidden="true" className="flex -space-x-2.5">
                {team.members.map((member) =>
                  member.photo ? (
                    <Image
                      key={member.name}
                      src={member.photo.src}
                      alt=""
                      width={36}
                      height={36}
                      sizes="36px"
                      quality={85}
                      loading="eager"
                      className="hero-face h-9 w-9 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      key={member.name}
                      className="hero-face flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 font-display text-[13px] text-paper-3"
                    >
                      {member.initials}
                    </span>
                  ),
                )}
              </span>
              {hero.team}
            </a>

            <div className="flex flex-col gap-4">
              <p className="intro intro-1 label-mono m-0 text-muted-2">{hero.eyebrow}</p>
              <h1
                id="hero-title"
                className="hero-title ln-wrap m-0 font-display text-[clamp(36px,5vw,76px)] leading-[1.02] font-medium tracking-[-0.038em]"
              >
                {hero.title.map((line, i) => (
                  <span key={line.em} className="ln">
                    <span className={`ln-in ln-${i + 1}`}>
                      {line.lead}
                      <em className={`hero-hl ${highlight[i] ?? highlight[0]}`}>{line.em}</em>
                      {/* Two columns and phones: each promise on two short lines, so no
                          word is left alone. Single-column tablets keep one line each. */}
                      {line.tail && ' '}
                      <br className="hero-br" />
                      {line.tail?.trimStart()}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <p className="intro intro-3 hero-lead m-0 max-w-[580px] text-lead leading-[1.55] text-paper-2 text-pretty">
              {hero.lead}
            </p>

            <div className="intro intro-4 hero-ctas flex flex-wrap gap-3 pt-1">
              <ButtonLink href={mailto(hero.callSubject)}>{hero.ctaPrimary}</ButtonLink>
              <ButtonLink href={`${home}#realisations`} variant="glass">
                {hero.ctaSecondary}
              </ButtonLink>
            </div>

            <ul className="intro intro-4 label-mono-sm m-0 flex list-none flex-wrap gap-2 p-0 text-muted-2">
              {hero.facts.map((fact) => (
                <li key={fact} className="rounded-pill border border-line-3 px-3 py-2">
                  {fact}
                </li>
              ))}
              <li>
                <a
                  href={`${home}#temoignages`}
                  className="hero-proof-link inline-flex rounded-pill border border-line-3 px-3 py-2 text-paper-2"
                >
                  {hero.proof.replace('{count}', String(testimonials.items.length))}
                </a>
              </li>
            </ul>
          </div>

          {showcase && (
            <figure className="intro intro-4 hero-visual m-0 flex min-w-0 flex-col gap-3">
              <DeviceStage
                devices={showcase.devices}
                glow={glow[showcase.accent]}
                href={localePath(locale, 'work', showcase.slug)}
                ariaLabel={`${work.caseStudy} : ${showcase.title}`}
                priority
              />
              <figcaption className="label-mono-sm flex items-center gap-2.5 text-muted-3">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange" />
                {hero.visualCaption}
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}

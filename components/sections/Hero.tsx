import Image from 'next/image';
import { type SiteContent } from '@/content/types';
import { type Locale, localePath } from '@/lib/i18n';
import { ChromaCurrent } from '@/components/motion/ChromaCurrent';
import { ButtonLink } from '@/components/ui/Button';
import { HERO_ID } from '@/components/layout/Header';

const highlight = ['hero-hl-a', 'hero-hl-b'] as const;

export function Hero({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { hero, team, testimonials } = content;
  const home = localePath(locale);

  return (
    <section id={HERO_ID} aria-labelledby="hero-title" className="relative overflow-clip">
      <div className="hero relative">
        <ChromaCurrent className="hero-chroma" lightColors={['#e8640a', '#0a9e8a']} />
        <div aria-hidden="true" className="hero-veil" />

        <div className="container-site relative z-[2] flex flex-col items-center gap-[clamp(26px,2.8vw,36px)] text-center">
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

          <h1
            id="hero-title"
            className="hero-title ln-wrap m-0 max-w-[1120px] font-display text-[clamp(40px,5.4vw,84px)] leading-[1.02] font-medium tracking-[-0.045em] text-balance"
          >
            {hero.title.map((line, i) => (
              <span key={line.em} className="ln">
                <span className={`ln-in ln-${i + 1}`}>
                  {line.lead}
                  <em className={`hero-hl ${highlight[i] ?? highlight[0]}`}>{line.em}</em>
                  {line.tail}
                </span>
              </span>
            ))}
          </h1>

          <p className="intro intro-3 hero-lead m-0 max-w-[620px] text-lead leading-[1.55] text-paper-2 text-pretty">
            {hero.lead}
          </p>

          <div className="intro intro-4 hero-ctas flex flex-wrap justify-center gap-3 pt-2">
            <ButtonLink href={`${home}#contact`}>{hero.ctaPrimary}</ButtonLink>
            <ButtonLink href={`${home}#realisations`} variant="glass">
              {hero.ctaSecondary}
            </ButtonLink>
          </div>

          <a
            href={`${home}#temoignages`}
            className="intro intro-4 link-u label-mono inline-flex items-center gap-2.5 text-muted-2"
          >
            <span aria-hidden="true" className="inline-flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
            </span>
            {hero.proof.replace('{count}', String(testimonials.items.length))}
          </a>
        </div>
      </div>
    </section>
  );
}

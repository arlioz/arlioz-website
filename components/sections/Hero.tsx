import { type SiteContent } from '@/content/types';
import { type Locale, localePath } from '@/lib/i18n';
import { ChromaCurrent } from '@/components/motion/ChromaCurrent';
import { ButtonLink } from '@/components/ui/Button';
import { HERO_ID } from '@/components/layout/Header';

const highlight = ['hero-hl-a', 'hero-hl-b'] as const;

export function Hero({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { hero } = content;
  const home = localePath(locale);

  return (
    <section id={HERO_ID} aria-labelledby="hero-title" className="relative overflow-clip">
      <div className="hero relative">
        <ChromaCurrent className="hero-chroma" />
        <div aria-hidden="true" className="hero-veil" />

        <div className="container-site relative z-[2] flex flex-col items-center gap-[clamp(30px,3.2vw,40px)] text-center">
          <p className="intro intro-1 hero-badge label-mono m-0 inline-flex items-center gap-3 rounded-pill border border-line-3 bg-white/3 py-2 pr-4 pl-3 tracking-[0.07em] text-paper-3">
            <span aria-hidden="true" className="inline-flex gap-1">
              <span className="h-2 w-2 rounded-full bg-orange" />
              <span className="h-2 w-2 rounded-full bg-blue" />
              <span className="h-2 w-2 rounded-full bg-green" />
            </span>
            {hero.badge}
          </p>

          <h1
            id="hero-title"
            className="hero-title ln-wrap m-0 max-w-[1000px] font-display text-[clamp(44px,6.6vw,104px)] leading-[0.98] font-medium tracking-[-0.05em] text-balance"
          >
            {hero.title.map((line, i) => (
              <span key={line.em} className="ln">
                <span className={`ln-in ln-${i + 1}`}>
                  {line.lead}
                  <em className={`hero-hl ${highlight[i] ?? highlight[0]}`}>{line.em}</em>
                </span>
              </span>
            ))}
          </h1>

          <div className="intro intro-4 hero-ctas flex flex-wrap justify-center gap-3 pt-3">
            <ButtonLink href={`${home}#contact`}>{hero.ctaPrimary}</ButtonLink>
            <ButtonLink href={`${home}#realisations`} variant="glass">
              {hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

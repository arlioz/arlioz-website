import { type Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { icons, tone } from '@/components/sections/Expertises';
import { MethodSteps } from '@/components/sections/Method';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Glow } from '@/components/ui/Glow';
import { ArrowDown, ArrowLeft, ArrowRight, Check } from '@/components/ui/Icons';
import { JsonLd } from '@/components/ui/JsonLd';
import { LineTitle } from '@/components/ui/LineTitle';
import { mailto } from '@/components/ui/MailLink';
import { getContent, getOffer, getProject, offerSlugs } from '@/content';
import { isLocale, localePath, locales } from '@/lib/i18n';
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from '@/lib/seo';
import { site } from '@/lib/site';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) => offerSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  const offer = getOffer(locale, slug);
  if (!offer) return {};
  return buildMetadata({
    locale,
    content,
    title: content.services.metaTitle(offer.title),
    description: offer.solution,
    key: 'services',
    slug,
  });
}

const glow = { orange: '#FA7F13', blue: '#2065CB', green: '#2BBE8D' } as const;

/**
 * One offer, in depth: what it changes (before → after), what we do, how we work, a
 * proof in production when there is one, the questions clients ask about it, and the
 * two ways to start. Everything comes from the home page content; nothing is added.
 */
export default async function ServicePage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const offer = getOffer(locale, slug);
  if (!offer) notFound();
  const { services: sv, expertises: x, method, faq, start } = content;
  const t = tone[offer.accent];
  const Icon = icons[offer.icon];
  const home = localePath(locale);
  const path = localePath(locale, 'services', slug);
  const project =
    offer.proof?.kind === 'project' ? getProject(locale, offer.proof.slug) : undefined;
  const mission =
    offer.proof?.kind === 'mission'
      ? content.work.items.find((item) => 'kind' in item && item.kind === 'mission')
      : undefined;
  const questions = offer.faq.map((i) => faq.items[i]).filter((item) => item !== undefined);
  const service = serviceJsonLd(locale, content, slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: site.name, path: home },
            { name: x.label, path: `${home}#expertises` },
            { name: offer.title, path },
          ]),
          ...(service ? [service] : []),
        ]}
      />

      {/* Hero */}
      <section aria-labelledby="service-title" className="relative overflow-clip">
        <Glow
          color={glow[offer.accent]}
          opacity={0.18}
          blur={160}
          style={{ width: 620, height: 620, right: -180, top: -220 }}
        />
        <div aria-hidden="true" className="blueprint blueprint-method" />
        <div className="container-site relative pt-[clamp(40px,5vw,64px)] pb-[clamp(64px,8vw,120px)]">
          <Link
            href={`${home}#expertises`}
            className="intro intro-1 link-u inline-flex items-center gap-[10px] text-[15px] text-paper-3"
          >
            <ArrowLeft size={16} />
            {sv.back}
          </Link>
          <div className="mt-[clamp(48px,6vw,88px)] flex items-center gap-4">
            <span
              aria-hidden="true"
              className={`inline-flex h-12 w-12 flex-none items-center justify-center rounded-tile ${t.ico}`}
            >
              <Icon />
            </span>
            <p className="label-mono m-0 text-muted-2">{sv.label}</p>
          </div>
          <LineTitle
            as="h1"
            id="service-title"
            mode="load"
            lines={[offer.title]}
            className="mt-7 max-w-[16ch] font-display text-case leading-[0.95] font-medium tracking-[-0.05em]"
          />
          <p className="intro intro-3 m-0 mt-7 max-w-[820px] font-display text-case-lead leading-[1.3] font-normal tracking-[-0.02em] text-paper-3 text-pretty">
            {offer.solution}
          </p>
          {/* One action here: the call and the audit come at the end of the page. */}
          <div className="intro intro-4 mt-10">
            <ButtonLink href={mailto(offer.cta.subject)}>{offer.cta.label}</ButtonLink>
          </div>
        </div>
      </section>

      {/* Before → after, then what we do */}
      <section aria-labelledby="service-what" className="border-y border-line bg-ink-2 py-section">
        <div className="container-site">
          <div className="split">
            <Eyebrow
              index="01"
              label={`${x.labels.problem} → ${x.labels.result}`}
              className="self-start"
              animated
            />
            <div className="flex min-w-0 flex-col gap-12">
              <dl className="m-0 flex flex-col gap-5">
                <div>
                  <dt className="sr-only">{x.labels.problem}</dt>
                  <dd className="m-0 font-display text-[clamp(22px,2.2vw,30px)] leading-[1.3] tracking-[-0.02em] text-muted text-pretty">
                    {offer.problem}
                  </dd>
                </div>
                <ArrowDown size={22} className={`rv-pop ${t.accent}`} />
                <div>
                  <dt className="sr-only">{x.labels.result}</dt>
                  <dd className="sx-txt m-0 font-display text-[clamp(26px,2.8vw,40px)] leading-[1.2] font-medium tracking-[-0.025em] text-paper text-pretty">
                    {offer.result}
                  </dd>
                </div>
              </dl>
              <div className="flex flex-col gap-5 border-t border-line-2 pt-8">
                <h2 id="service-what" className="label-mono m-0 text-muted-3">
                  {sv.whatWeDo}
                </h2>
                <ul className="m-0 grid list-none gap-x-10 gap-y-4 p-0 lg:grid-cols-2">
                  {offer.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[17px] leading-[1.5] text-paper-2"
                    >
                      <Check className={`mt-1 flex-none ${t.accent}`} />
                      {point}
                    </li>
                  ))}
                </ul>
                {offer.note && (
                  <p className="m-0 text-sm leading-[1.6] text-muted-3">{offer.note}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="service-method" className="relative overflow-clip py-section">
        <div className="container-site relative">
          <div className="mb-[clamp(40px,5vw,64px)] flex flex-col gap-[26px]">
            <Eyebrow index="02" label={method.label} animated />
            <h2
              id="service-method"
              className="m-0 font-display text-h2-sm leading-[1.1] font-medium tracking-[-0.03em]"
            >
              {sv.method}
            </h2>
          </div>
          <MethodSteps method={method} />
        </div>
      </section>

      {/* Proof in production */}
      {(project || mission) && (
        <section aria-labelledby="service-proof" className="pb-section">
          <div className="container-site">
            <div
              className={`card-hover ${t.hx} relative grid gap-8 rounded-card border border-line-2 bg-surface p-[clamp(28px,4vw,56px)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end`}
            >
              <div className="hx" aria-hidden="true" />
              <div className="hx-line" aria-hidden="true" />
              <div className="relative flex min-w-0 flex-col gap-4">
                <p className="label-mono-sm m-0 flex items-center gap-2.5 text-muted-3">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange" />
                  {sv.proof}
                </p>
                <h2
                  id="service-proof"
                  className="m-0 font-display text-h3-work leading-[1.05] font-medium tracking-[-0.035em]"
                >
                  {project ? project.title : mission?.title}
                </h2>
                <p className="m-0 max-w-[640px] text-[17px] leading-[1.6] text-muted">
                  {project ? project.summary : mission?.summary}
                </p>
              </div>
              <Link
                href={project ? localePath(locale, 'work', project.slug) : `${home}#realisations`}
                className="link-u hit relative inline-flex items-center gap-2 font-medium text-paper"
              >
                {project ? sv.proofProject : sv.proofMission}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Questions */}
      {questions.length > 0 && (
        <section aria-labelledby="service-faq" className="pb-section">
          <div className="container-site">
            <div className="split">
              <h2
                id="service-faq"
                className="m-0 self-start font-display text-h2-sm leading-[1.1] font-medium tracking-[-0.03em]"
              >
                {sv.faq}
              </h2>
              <div className="min-w-0 border-t border-line-2">
                {questions.map((item) => (
                  <details key={item.question} className="faq-item border-b border-line-2">
                    <summary className="faq-q flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] font-display text-[clamp(19px,1.7vw,22px)] leading-[1.3] font-medium tracking-[-0.015em] text-paper">
                      {item.question}
                      <span aria-hidden="true" className="faq-icon flex-none" />
                    </summary>
                    <p className="m-0 max-w-[62ch] pb-[22px] text-[17px] leading-[1.65] text-muted">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ways to start */}
      <section aria-labelledby="service-cta" className="pb-section">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[32px] border border-line-2 bg-surface p-[clamp(28px,5vw,72px)]">
            <Glow
              color={glow[offer.accent]}
              opacity={0.16}
              blur={130}
              style={{ width: 420, height: 420, left: -140, top: -160 }}
            />
            <div className="relative flex flex-col gap-6">
              <h2
                id="service-cta"
                className="m-0 font-display text-contact leading-none font-medium tracking-[-0.04em] text-balance"
              >
                {sv.ctaTitle}
              </h2>
              <p className="m-0 max-w-[560px] text-[17px] leading-[1.6] text-muted">{sv.ctaText}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href={mailto(start.call.cta.subject)}>
                  {start.call.cta.label}
                </ButtonLink>
                <ButtonLink href={mailto(start.audit.cta.subject)} variant="glass" arrow>
                  {start.audit.cta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

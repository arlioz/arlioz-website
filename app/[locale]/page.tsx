import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ClientsBand } from '@/components/sections/ClientsBand';
import { Contact } from '@/components/sections/Contact';
import { Expertises } from '@/components/sections/Expertises';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { Method } from '@/components/sections/Method';
import { Start } from '@/components/sections/Start';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { Work } from '@/components/sections/Work';
import { JsonLd } from '@/components/ui/JsonLd';
import { getContent } from '@/content';
import { isLocale } from '@/lib/i18n';
import {
  buildMetadata,
  faqJsonLd,
  organizationJsonLd,
  servicesJsonLd,
  websiteJsonLd,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, content: getContent(locale) });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);

  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(locale, content),
          websiteJsonLd(locale, content),
          servicesJsonLd(locale, content),
          faqJsonLd(content),
        ]}
      />
      {/* Promise → proof → offer → method → people → proof → way in → objections → contact. */}
      <Hero locale={locale} content={content} />
      <ClientsBand content={content} />
      <Expertises locale={locale} content={content} />
      <Work locale={locale} content={content} />
      <Method content={content} />
      <Team content={content} />
      <Testimonials content={content} />
      <Start content={content} />
      <Faq content={content} />
      <Contact locale={locale} content={content} />
    </>
  );
}

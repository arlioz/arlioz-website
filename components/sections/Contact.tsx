import { type SiteContent } from '@/content/types';
import { type Locale, localePath } from '@/lib/i18n';
import { site } from '@/lib/site';
import { Eyebrow } from '@/components/ui/Eyebrow';
import Link from 'next/link';
import { Magnetic } from '@/components/motion/Magnetic';
import { ButtonLink } from '@/components/ui/Button';
import { ArrowUpRight, Shield } from '@/components/ui/Icons';
import { LogoMark } from '@/components/ui/LogoMark';

export function Contact({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { contact } = content;
  // No top padding: it follows the FAQ on the same background, whose bottom padding is the gap.
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-section">
      <div className="container-site">
        <div className="rv-media relative overflow-hidden rounded-[32px] border border-line-2 bg-surface p-[clamp(28px,5vw,72px)]">
          <div className="contact-grid relative">
            <div className="flex min-w-0 flex-col gap-7">
              <Eyebrow index={contact.index} label={contact.label} />
              <h2
                id="contact-title"
                className="m-0 font-display text-contact leading-none font-medium tracking-[-0.04em] text-balance"
              >
                {contact.title}
              </h2>
              <p className="m-0 max-w-[460px] text-[17px] leading-[1.6] text-muted">
                {contact.text}
              </p>
            </div>

            <div className="relative flex min-w-0 flex-col justify-center gap-[22px] rounded-card border border-line-2 bg-ink p-[clamp(28px,3.4vw,44px)]">
              <LogoMark height={44} className="self-start" />
              <h3 className="m-0 font-display text-[clamp(26px,2.4vw,32px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance">
                {contact.direct.title}
              </h3>
              <p className="m-0 text-base leading-[1.6] text-muted">{contact.direct.text}</p>
              <div className="flex flex-wrap gap-3 pt-1.5">
                <Magnetic>
                  <ButtonLink
                    href={`mailto:${site.email}?subject=${encodeURIComponent(contact.direct.subject)}`}
                  >
                    {contact.direct.email}
                  </ButtonLink>
                </Magnetic>
                <ButtonLink href={site.linkedin} variant="glass" target="_blank" rel="noopener">
                  {contact.direct.linkedin}
                  <ArrowUpRight size={16} />
                </ButtonLink>
              </div>
              <p className="m-0 flex items-start gap-[10px] text-sm leading-[1.55] text-muted">
                <Shield size={18} strokeWidth={1.7} className="mt-px flex-none text-blue-light" />
                <span>
                  {contact.direct.privacy}{' '}
                  <Link href={localePath(locale, 'privacy')} className="link-u hit text-paper-2">
                    {contact.direct.privacyLink}
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

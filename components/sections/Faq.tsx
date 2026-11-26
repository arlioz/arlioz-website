import { type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LineTitle } from '@/components/ui/LineTitle';

/**
 * The questions a client asks before writing to us, answered from what the site already
 * says. Native disclosure widgets: keyboard and screen readers work without script.
 * The same items feed the FAQPage structured data (lib/seo.ts).
 */
export function Faq({ content }: { content: SiteContent }) {
  const { faq } = content;
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-section">
      <div className="container-site">
        <div className="split">
          <div className="flex min-w-0 flex-col gap-[26px] self-start">
            <Eyebrow index={faq.index} label={faq.label} />
            <LineTitle
              id="faq-title"
              lines={faq.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.035em]"
            />
          </div>
          <div className="min-w-0 border-t border-line-2">
            {faq.items.map((item) => (
              <details key={item.question} className="faq-item group border-b border-line-2">
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
  );
}

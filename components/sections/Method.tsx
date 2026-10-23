import { type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LineTitle } from '@/components/ui/LineTitle';

/**
 * How we work, as a technical drawing: four numbered steps hung on one dimension line
 * (horizontal on wide screens, vertical on phones), each with the deliverable the
 * client gets at the end of it.
 */
export function Method({ content }: { content: SiteContent }) {
  const { method: m } = content;
  return (
    <section id="methode" aria-labelledby="method-title" className="py-section">
      <div className="container-site">
        <div className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <div className="flex min-w-0 max-w-[780px] flex-col gap-[26px]">
            <Eyebrow index={m.index} label={m.label} animated />
            <LineTitle
              id="method-title"
              lines={m.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.04em]"
            />
          </div>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.6] text-muted text-pretty">
            {m.intro}
          </p>
        </div>

        <ol className="method-steps m-0 list-none">
          {m.steps.map((step, i) => (
            <li key={step.title} className="method-step">
              <span aria-hidden="true" className="method-num label-mono">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="m-0 font-display text-card leading-[1.1] font-medium tracking-[-0.025em]">
                {step.title}
              </h3>
              <p className="m-0 text-base leading-[1.6] text-muted">{step.text}</p>
              <p className="method-deliv m-0 mt-auto flex flex-col gap-1.5 border-t border-line-2 pt-4">
                <span className="label-mono-sm text-muted-3">{m.deliverable}</span>
                <span className="font-medium text-paper">{step.deliverable}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

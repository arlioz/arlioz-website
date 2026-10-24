import { type SiteContent } from '@/content/types';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Check } from '@/components/ui/Icons';
import { LineTitle } from '@/components/ui/LineTitle';

/**
 * The four steps as rows read top to bottom, each one left to right: the numbered
 * step, what we do, then what the client gets. Wide screens give each its column;
 * tablets put the title above the other two; phones stack everything. As a row comes
 * in, its rule draws from the left and its number pops: the eye follows the steps.
 */
export function MethodSteps({ method }: { method: SiteContent['method'] }) {
  return (
    <ol className="m-0 list-none border-b border-line-2 p-0">
      {method.steps.map((step, i) => (
        <li
          key={step.title}
          className="relative grid gap-5 py-[clamp(28px,3.4vw,44px)] lg:grid-cols-2 lg:gap-x-10 xl:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,3.6fr)] xl:items-start"
        >
          <span aria-hidden="true" className="rv-bar absolute inset-x-0 top-0 h-px bg-line-2" />
          <div className="flex items-center gap-4 lg:col-span-2 xl:col-span-1">
            <span
              aria-hidden="true"
              className="rv-pop label-mono inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-green-light/40 text-green-light"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="m-0 font-display text-card leading-[1.1] font-medium tracking-[-0.025em]">
              {step.title}
            </h3>
          </div>
          <p className="m-0 max-w-[56ch] text-[17px] leading-[1.65] text-paper-2 text-pretty">
            {step.text}
          </p>
          <div className="flex flex-col gap-2 rounded-tile border border-green/20 bg-green/6 p-5">
            <p className="label-mono-sm m-0 flex items-center gap-2 text-green-light">
              <Check size={14} />
              {method.deliverable}
            </p>
            <p className="m-0 text-base leading-[1.5] font-medium text-paper">{step.deliverable}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Method({ content }: { content: SiteContent }) {
  const { method: m } = content;
  return (
    <section id="methode" aria-labelledby="method-title" className="py-section">
      <div className="container-site">
        <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <div className="flex min-w-0 max-w-[780px] flex-col gap-[26px]">
            <Eyebrow index={m.index} label={m.label} animated />
            <LineTitle
              id="method-title"
              lines={m.title}
              className="font-display text-h2 leading-none font-medium tracking-[-0.035em]"
            />
          </div>
          <p className="sx-txt m-0 max-w-[420px] text-[17px] leading-[1.6] text-muted text-pretty">
            {m.intro}
          </p>
        </div>
        <MethodSteps method={m} />
      </div>
    </section>
  );
}

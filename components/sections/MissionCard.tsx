import { type CSSProperties } from 'react';
import { type Mission, type SiteContent } from '@/content/types';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { LineTitle } from '@/components/ui/LineTitle';
import { MailLink } from '@/components/ui/MailLink';

/**
 * A mission inside a client's team, in the same pile as the projects (same shell,
 * top bar and accent glow). There is nothing to screenshot, so the visual column is
 * typographic: the client's logo, then what we do there as large numbered lines.
 */
export function MissionCard({
  mission,
  number,
  labels,
  style,
}: {
  mission: Mission;
  number: string;
  labels: SiteContent['work'];
  style: CSSProperties;
}) {
  const listId = `mission-${mission.client.toLowerCase()}`;
  return (
    <article className="pcard pcard-rev mission-card" style={style}>
      <div className="pcard-bar label-mono text-muted-3">
        <p className="m-0 flex flex-wrap items-center gap-x-3.5 gap-y-2 tracking-[0.06em]">
          <span className="text-paper">{number}</span>
          <span aria-hidden="true" className="pcard-rule" />
          <span className="pcard-type">{mission.type}</span>
          <span aria-hidden="true" className="pcard-type">
            /
          </span>
          <span>
            {labels.clientPrefix} {mission.client}
          </span>
        </p>
        <p className="m-0 inline-flex items-center gap-2.5 tracking-[0.06em] text-paper">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange" />
          {mission.status}
        </p>
      </div>

      <div className="proj-row proj-row-rev">
        <div className="mission-board">
          <div className="logo-row mission-logo text-paper">
            <BrandLogo logo={mission.logo} />
          </div>
          <p id={listId} className="label-mono-sm m-0 text-muted-3">
            {mission.actionsLabel}
          </p>
          <ol aria-labelledby={listId} className="m-0 list-none p-0">
            {mission.actions.map((action, i) => (
              <li key={action} className="mission-step">
                <span aria-hidden="true" className="mission-num label-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mission-text font-display font-medium">{action}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <LineTitle
            as="h3"
            lines={[mission.title]}
            className="font-display text-h3-work leading-[1.02] font-medium tracking-[-0.035em]"
          />
          <p className="sx-txt m-0 max-w-[580px] text-[17px] leading-[1.6] text-muted text-pretty">
            {mission.summary}
          </p>
          <dl className="pcard-story m-0 grid max-w-[580px] gap-3 border-t border-line-2 pt-4">
            <div className="grid gap-1">
              <dt className="label-mono-sm text-muted-3">{labels.need}</dt>
              <dd className="m-0 text-base leading-[1.55] text-paper-2">{mission.need}</dd>
            </div>
          </dl>
          <div className="pcard-links mt-2 flex flex-wrap gap-x-7 gap-y-3 text-[16px]">
            <MailLink link={mission.cta} className="hit" />
          </div>
        </div>
      </div>

      <span aria-hidden="true" className="pcard-veil" />
    </article>
  );
}

import { type ContactLink } from '@/content/types';
import { site } from '@/lib/site';
import { ArrowRight } from './Icons';

/** `mailto:` URL to the Arlioz address with a pre-filled subject. */
export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

/** Text link that opens an e-mail about a given topic (expertise cards). */
export function MailLink({ link, className = '' }: { link: ContactLink; className?: string }) {
  return (
    <a
      href={mailto(link.subject)}
      className={`link-u inline-flex w-fit items-center gap-2 text-base font-medium text-paper ${className}`}
    >
      {link.label}
      <ArrowRight size={16} />
    </a>
  );
}

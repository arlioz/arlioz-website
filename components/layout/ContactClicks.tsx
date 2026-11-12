'use client';

import { track } from '@vercel/analytics';
import { useEffect } from 'react';

/**
 * Counts clicks on the contact links (e-mail, LinkedIn) as a Vercel Analytics event:
 * contact requests are how the site's success is measured. One delegated listener
 * for the whole document. The event carries the channel, the page and the e-mail's
 * pre-filled subject (which button was used), and nothing about the visitor.
 */
export function ContactClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      const href = link?.getAttribute('href') ?? '';
      const email = href.startsWith('mailto:');
      if (!email && !href.includes('linkedin.com')) return;
      track('contact', {
        channel: email ? 'email' : 'linkedin',
        page: window.location.pathname,
        subject: email ? new URLSearchParams(href.split('?')[1] ?? '').get('subject') : null,
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}

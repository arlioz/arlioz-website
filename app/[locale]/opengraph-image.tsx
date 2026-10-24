import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getContent } from '@/content';
import { isLocale } from '@/lib/i18n';
import { site } from '@/lib/site';

export const alt = 'Arlioz';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fr';
  const content = getContent(locale);

  const [display, sans, logo] = await Promise.all([
    readFile(join(process.cwd(), 'lib/og/BricolageGrotesque-Medium.ttf')),
    readFile(join(process.cwd(), 'lib/og/InstrumentSans-Regular.ttf')),
    readFile(join(process.cwd(), 'public/images/logo-arlioz-512.png')),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#FFFFFF',
        color: '#0B0D12',
        fontFamily: 'Instrument Sans',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: -160,
          top: -200,
          width: 620,
          height: 620,
          borderRadius: 999,
          // Soft glow as a radial gradient: a blur filter is clipped to a square by the
          // image renderer.
          background: 'radial-gradient(circle, rgba(250, 127, 19, 0.2), rgba(250, 127, 19, 0) 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -200,
          bottom: -260,
          width: 620,
          height: 620,
          borderRadius: 999,
          background: 'radial-gradient(circle, rgba(43, 190, 141, 0.2), rgba(43, 190, 141, 0) 70%)',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          padding: 72,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={logoSrc} alt="" width={76} height={84} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Bricolage Grotesque', fontSize: 44, letterSpacing: -1.5 }}>
            arlioz
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Bricolage Grotesque',
              fontSize: 62,
              lineHeight: 1.04,
              letterSpacing: -2.5,
            }}
          >
            {content.hero.title.map((line, i) => (
              <span key={line.em} style={{ display: 'flex', flexWrap: 'wrap', whiteSpace: 'pre' }}>
                <span>{line.lead}</span>
                <span style={{ color: i === 0 ? '#E8640A' : '#1D5BBF' }}>{line.em}</span>
                {line.tail && <span>{line.tail}</span>}
              </span>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 26,
              color: '#4B5563',
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: 999, background: '#FA7F13' }} />
              <div style={{ width: 12, height: 12, borderRadius: 999, background: '#2065CB' }} />
              <div style={{ width: 12, height: 12, borderRadius: 999, background: '#2BBE8D' }} />
            </div>
            <span>{content.meta.ogTagline}</span>
            <span style={{ marginLeft: 'auto', color: '#6B7280' }}>
              {site.url.replace('https://', '')}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Bricolage Grotesque', data: display, weight: 500, style: 'normal' },
        { name: 'Instrument Sans', data: sans, weight: 400, style: 'normal' },
      ],
    },
  );
}

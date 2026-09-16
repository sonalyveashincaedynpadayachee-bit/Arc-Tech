import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '90px',
          backgroundColor: '#08060D',
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 30% 10%, rgba(124,58,237,0.35) 0%, transparent 70%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            color: '#E5E4E2',
            fontSize: 32,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#A855F7',
            }}
          />
          {siteConfig.name}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 48,
            fontSize: 64,
            lineHeight: 1.05,
            maxWidth: 900,
            color: '#F2F1EF',
            letterSpacing: '-0.02em',
          }}
        >
          Your business should run without you in it.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 26,
            color: '#A9A6A1',
          }}
        >
          AI Automation Studio · {siteConfig.city}
        </div>
      </div>
    ),
    { ...size }
  );
}

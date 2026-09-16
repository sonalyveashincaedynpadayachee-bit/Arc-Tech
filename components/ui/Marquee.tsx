'use client';

import type { ReactNode } from 'react';

export function Marquee({ children }: { children: ReactNode[] }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee gap-16 hover:[animation-play-state:paused]">
        {[...children, ...children].map((child, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

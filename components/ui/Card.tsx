'use client';

import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        'group relative overflow-hidden rounded-lg border border-line-subtle bg-bg-raised p-8',
        'transition-all duration-300 ease-state hover:-translate-y-1.5 hover:border-line-strong hover:shadow-lg',
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(124,58,237,0.14), transparent 70%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

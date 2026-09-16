import { cn } from '@/lib/cn';

export function ArcMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-6 w-6', className)}
      aria-hidden="true"
    >
      <path
        d="M4 24C4 13.5066 12.5066 5 23 5"
        stroke="url(#arc-mark-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="23" cy="5" r="2.25" fill="#C084FC" />
      <defs>
        <linearGradient id="arc-mark-gradient" x1="4" y1="24" x2="23" y2="5">
          <stop offset="0%" stopColor="#E5E4E2" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'flex items-center gap-2.5 font-display text-[1.375rem] leading-none tracking-tight text-platinum-200',
        className
      )}
    >
      <ArcMark />
      Arc Tech
    </span>
  );
}

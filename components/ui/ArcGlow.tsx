import { cn } from '@/lib/cn';

export function ArcGlow({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute animate-breathe',
        className
      )}
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,' +
          0.25 * intensity +
          ') 0%, transparent 70%)',
        filter: 'blur(2px)',
      }}
    />
  );
}

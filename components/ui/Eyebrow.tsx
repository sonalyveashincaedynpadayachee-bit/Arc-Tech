import { cn } from '@/lib/cn';

export function Eyebrow({
  children,
  className,
  tone = 'purple',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'purple' | 'platinum';
}) {
  return (
    <span
      className={cn(
        'eyebrow inline-flex items-center gap-3',
        tone === 'purple' ? 'text-purple-300' : 'text-platinum-500',
        className
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}

import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';

export function SectionHeading({
  numeral,
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: {
  numeral: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <div className={cn('flex items-baseline gap-4', align === 'center' && 'justify-center')}>
        <span className="numeral text-small">{numeral}</span>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="font-display text-h2 font-normal leading-[1.05] tracking-tight text-text-primary">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'text-lead text-text-secondary leading-relaxed',
            align === 'center' ? 'max-w-prose' : 'max-w-prose'
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

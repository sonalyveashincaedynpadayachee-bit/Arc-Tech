import { cn } from '@/lib/cn';

const variants = [
  'radial-gradient(120% 120% at 20% 10%, rgba(168,85,247,0.35) 0%, transparent 55%), linear-gradient(160deg, #151020 0%, #08060D 100%)',
  'radial-gradient(120% 120% at 80% 90%, rgba(124,58,237,0.32) 0%, transparent 55%), linear-gradient(160deg, #0E0B16 0%, #08060D 100%)',
  'radial-gradient(120% 120% at 80% 10%, rgba(192,132,252,0.28) 0%, transparent 55%), linear-gradient(160deg, #151020 0%, #08060D 100%)',
  'radial-gradient(120% 120% at 20% 90%, rgba(76,29,149,0.4) 0%, transparent 55%), linear-gradient(160deg, #0E0B16 0%, #08060D 100%)',
];

export function CaseVisual({ index, className }: { index: number; className?: string }) {
  const bg = variants[index % variants.length];
  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{ background: bg }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-70 transition-transform duration-700 ease-entrance group-hover:scale-[1.04]"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d={`M-20,${180 + index * 15} Q200,${40 + index * 10} 420,${140 - index * 12}`}
          fill="none"
          stroke="rgba(229,228,226,0.18)"
          strokeWidth="1"
        />
        <path
          d={`M-20,${230 + index * 10} Q200,${100 + index * 8} 420,${190 - index * 10}`}
          fill="none"
          stroke="rgba(192,132,252,0.3)"
          strokeWidth="1"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx={30 + i * 50}
            cy={80 + ((i * 37 + index * 20) % 160)}
            r={i % 3 === 0 ? 2.5 : 1.25}
            fill={i % 3 === 0 ? '#C084FC' : '#E5E4E2'}
            opacity={i % 3 === 0 ? 0.7 : 0.35}
          />
        ))}
      </svg>
    </div>
  );
}

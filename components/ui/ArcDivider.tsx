export function ArcDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative h-px w-full overflow-visible" aria-hidden>
      <svg
        viewBox="0 0 1240 40"
        preserveAspectRatio="none"
        className={`h-10 w-full ${flip ? 'rotate-180' : ''}`}
        style={{ marginTop: '-20px' }}
      >
        <path
          d="M0,0 Q620,40 1240,0"
          fill="none"
          stroke="url(#arc-divider-gradient)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="arc-divider-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(229,228,226,0)" />
            <stop offset="50%" stopColor="rgba(168,85,247,0.35)" />
            <stop offset="100%" stopColor="rgba(229,228,226,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

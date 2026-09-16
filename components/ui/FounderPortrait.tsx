export function FounderPortrait() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-xl opacity-60 blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)' }}
      />
      <div className="relative overflow-hidden rounded-xl border border-line-strong shadow-lg">
        <svg
          viewBox="0 0 480 560"
          className="aspect-[6/7] w-full"
          role="img"
          aria-label="Editorial duotone light study representing Nadia Kessler, Founder & Principal Architect of Arc Tech"
        >
          <defs>
            <linearGradient id="founder-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1C1529" />
              <stop offset="55%" stopColor="#0E0B16" />
              <stop offset="100%" stopColor="#08060D" />
            </linearGradient>
            <linearGradient id="founder-beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E5E4E2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E5E4E2" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="founder-rim" cx="88%" cy="10%" r="65%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="founder-floor" cx="30%" cy="105%" r="70%">
              <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5B21B6" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="480" height="560" fill="url(#founder-bg)" />
          <rect width="480" height="560" fill="url(#founder-rim)" />
          <rect width="480" height="560" fill="url(#founder-floor)" />

          <polygon points="150,0 260,0 60,560 -50,560" fill="url(#founder-beam)" opacity="0.5" />
          <polygon points="300,0 340,0 180,560 130,560" fill="url(#founder-beam)" opacity="0.3" />

          <path
            d="M-20 460 Q 240 380 500 430"
            fill="none"
            stroke="#A855F7"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <path
            d="M-20 500 Q 240 430 500 470"
            fill="none"
            stroke="#E5E4E2"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          <text
            x="40"
            y="500"
            fontFamily="var(--font-display), serif"
            fontStyle="italic"
            fontSize="88"
            fill="#E5E4E2"
            opacity="0.16"
          >
            NK
          </text>

          <g opacity="0.7">
            <path d="M410 50 L410 20 M425 35 L395 35" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="410" cy="35" r="34" fill="none" stroke="#A855F7" strokeOpacity="0.3" strokeWidth="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

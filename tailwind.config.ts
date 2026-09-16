import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: {
          base: 'var(--bg-base)',
          raised: 'var(--bg-raised)',
          elevated: 'var(--bg-elevated)',
          overlay: 'var(--bg-overlay)',
        },
        purple: {
          900: 'var(--purple-900)',
          800: 'var(--purple-800)',
          700: 'var(--purple-700)',
          600: 'var(--purple-600)',
          500: 'var(--purple-500)',
          400: 'var(--purple-400)',
          300: 'var(--purple-300)',
        },
        platinum: {
          100: 'var(--platinum-100)',
          200: 'var(--platinum-200)',
          300: 'var(--platinum-300)',
          400: 'var(--platinum-400)',
          500: 'var(--platinum-500)',
          600: 'var(--platinum-600)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        line: {
          subtle: 'var(--line-subtle)',
          DEFAULT: 'var(--line-default)',
          strong: 'var(--line-strong)',
        },
        rose: {
          400: '#F87171',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: 'var(--fs-display)',
        h1: 'var(--fs-h1)',
        h2: 'var(--fs-h2)',
        h3: 'var(--fs-h3)',
        lead: 'var(--fs-lead)',
        body: 'var(--fs-body)',
        small: 'var(--fs-small)',
        micro: 'var(--fs-micro)',
      },
      spacing: {
        18: '4.5rem',
        section: 'clamp(96px, 12vw, 180px)',
      },
      maxWidth: {
        content: '1240px',
        prose: '68ch',
      },
      borderRadius: {
        sm: 'var(--r-sm)',
        md: 'var(--r-md)',
        lg: 'var(--r-lg)',
        xl: 'var(--r-xl)',
        pill: 'var(--r-pill)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        entrance: 'cubic-bezier(0.22, 1, 0.36, 1)',
        state: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        sheen: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(220%)', opacity: '0' },
        },
      },
      animation: {
        breathe: 'breathe 14s ease-in-out infinite',
        sheen: 'sheen 3s linear infinite',
        marquee: 'marquee 32s linear infinite',
        pulseDown: 'pulseDown 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

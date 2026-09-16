'use client';

import Link from 'next/link';
import { useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

function useMagnetic() {
  const ref = useRef<HTMLElement | null>(null);
  const [style, setStyle] = useState<{ transform: string }>({ transform: 'translate(0px, 0px)' });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const max = 6;
    const tx = Math.max(-max, Math.min(max, x * 0.25));
    const ty = Math.max(-max, Math.min(max, y * 0.25));
    setStyle({ transform: `translate(${tx}px, ${ty}px)` });
  };

  const onMouseLeave = () => setStyle({ transform: 'translate(0px, 0px)' });

  return { ref, style, onMouseMove, onMouseLeave };
}

const base =
  'relative inline-flex items-center justify-center gap-2 font-sans text-small font-medium transition-all duration-200 ease-state whitespace-nowrap select-none';

const variants: Record<ButtonVariant, string> = {
  primary:
    'rounded-pill px-7 py-[14px] text-bg-base bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] hover:shadow-glow overflow-hidden',
  secondary:
    'rounded-pill px-7 py-[14px] border border-line text-text-primary hover:border-purple-400 hover:bg-purple-500/5',
  tertiary: 'text-text-primary py-1 group',
};

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, showArrow, href } = props;
  const magnetic = useMagnetic();

  const content = (
    <>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(135deg, #FFFFFF 0%, #E5E4E2 22%, #C084FC 48%, #F5F4F2 68%, #CFCDC9 100%)',
            backgroundSize: '220% 220%',
          }}
        />
      )}
      <span className={cn(variant === 'primary' && 'relative z-10')}>{children}</span>
      {(variant === 'tertiary' || showArrow) && (
        <ArrowRight
          aria-hidden
          size={16}
          strokeWidth={1.25}
          className="transition-transform duration-200 ease-state group-hover:translate-x-1"
        />
      )}
      {variant === 'tertiary' && (
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-purple-300 transition-transform duration-300 ease-state group-hover:scale-x-100"
        />
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link
        ref={magnetic.ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        style={magnetic.style}
        onMouseMove={magnetic.onMouseMove}
        onMouseLeave={magnetic.onMouseLeave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={magnetic.ref as React.Ref<HTMLButtonElement>}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={classes}
      style={magnetic.style}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
    >
      {content}
    </button>
  );
}

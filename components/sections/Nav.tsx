'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Wordmark } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/cn';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-state',
        scrolled
          ? 'border-b border-line-subtle bg-[rgba(8,6,13,0.72)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container-arc flex h-20 items-center justify-between">
        <Link href="/" aria-label="Arc Tech home" className="group shrink-0">
          <Wordmark animated />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative font-sans text-small text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-purple-300 transition-transform duration-250 ease-state group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Book a strategy call
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-text-primary lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} strokeWidth={1.25} /> : <Menu size={24} strokeWidth={1.25} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 top-20 z-40 flex flex-col justify-between bg-[rgba(8,6,13,0.98)] backdrop-blur-2xl transition-opacity duration-300 ease-state lg:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <ul className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
          {siteConfig.nav.map((item, i) => (
            <li
              key={item.href}
              className="w-full overflow-hidden"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
            >
              <Link
                href={item.href}
                className={cn(
                  'block border-b border-line-subtle py-5 font-display text-h3 text-text-primary transition-all duration-500 ease-entrance',
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-8 pb-12">
          <Button href="/contact" variant="primary" className="w-full">
            Book a strategy call
          </Button>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useEffect, useRef } from 'react';

/**
 * Redraws the browser tab icon as a live arc-progress ring tied to scroll
 * position — the brand's signature arc, extended into a surface most sites
 * never touch. Progressively enhances the static /favicon.svg.
 */
export function ScrollFavicon() {
  const lastStep = useRef(-1);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let link = document.querySelector<HTMLLinkElement>('link[data-scroll-favicon]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.setAttribute('data-scroll-favicon', 'true');
      document.head.appendChild(link);
    }

    const draw = (pct: number) => {
      ctx.clearRect(0, 0, 32, 32);

      // Rounded-square canvas, matching favicon.svg
      const r = 8;
      ctx.fillStyle = '#08060D';
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.arcTo(32, 0, 32, 32, r);
      ctx.arcTo(32, 32, 0, 32, r);
      ctx.arcTo(0, 32, 0, 0, r);
      ctx.arcTo(0, 0, 32, 0, r);
      ctx.closePath();
      ctx.fill();

      const cx = 16;
      const cy = 17;
      const radius = 10;
      const start = -Math.PI / 2;

      // Faint track
      ctx.strokeStyle = 'rgba(229,228,226,0.16)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Progress arc, platinum to purple
      if (pct > 0) {
        const grad = ctx.createLinearGradient(0, 0, 32, 32);
        grad.addColorStop(0, '#E5E4E2');
        grad.addColorStop(1, '#A855F7');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, start, start + Math.PI * 2 * pct);
        ctx.stroke();
      }

      link!.href = canvas.toDataURL('image/png');
    };

    const update = () => {
      rafId.current = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      const step = Math.round(pct * 40); // update in ~2.5% increments
      if (step !== lastStep.current) {
        lastStep.current = step;
        draw(step / 40);
      }
    };

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(update);
    };

    draw(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      link?.remove();
    };
  }, []);

  return null;
}

'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { services } from '@/lib/content/services';

export function ServicesSidebarNav() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    services.forEach((service) => {
      const el = document.getElementById(service.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Services" className="sticky top-32 hidden flex-col gap-1 lg:flex">
      {services.map((service) => (
        <a
          key={service.slug}
          href={`#${service.slug}`}
          aria-current={activeSlug === service.slug ? 'true' : undefined}
          className={cn(
            'flex items-center gap-3 rounded-md px-3 py-2.5 text-small transition-colors duration-200',
            activeSlug === service.slug
              ? 'bg-bg-elevated text-text-primary'
              : 'text-text-tertiary hover:text-text-secondary'
          )}
        >
          <span className="numeral">{service.numeral}</span>
          {service.title}
        </a>
      ))}
    </nav>
  );
}

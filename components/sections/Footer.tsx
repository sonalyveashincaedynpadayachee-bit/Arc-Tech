import Link from 'next/link';
import { Wordmark } from '@/components/ui/Logo';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/content/services';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line-subtle bg-bg-raised">
      <Container className="section-pad !pb-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-5">
            <Wordmark />
            <p className="max-w-[32ch] text-small leading-relaxed text-text-secondary">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-platinum-500">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-platinum-500">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-small text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-platinum-500">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-small text-text-secondary transition-colors hover:text-text-primary"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-small text-text-secondary">{siteConfig.city}</li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-small text-text-secondary transition-colors hover:text-text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-small text-text-secondary transition-colors hover:text-text-primary"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-x my-12" />

        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-text-tertiary">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="eyebrow text-text-tertiary hover:text-text-secondary">
              Privacy
            </Link>
            <Link href="/terms" className="eyebrow text-text-tertiary hover:text-text-secondary">
              Terms
            </Link>
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none relative left-1/2 h-[0.55em] w-[120%] -translate-x-1/2 select-none overflow-hidden text-center"
      >
        <span
          className="block font-display text-[clamp(6rem,20vw,16rem)] leading-none tracking-tight"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(229,228,226,0.05)',
          }}
        >
          ARC TECH
        </span>
      </div>
    </footer>
  );
}

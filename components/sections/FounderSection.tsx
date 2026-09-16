import { Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { FounderPortrait } from '@/components/ui/FounderPortrait';
import { siteConfig } from '@/lib/site-config';

export function FounderSection() {
  return (
    <section className="relative section-pad bg-bg-raised">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5 lg:col-start-1">
            <FounderPortrait />
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:pt-6">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="numeral text-small">05</span>
                <Eyebrow>Founder &amp; Principal Architect</Eyebrow>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-h1 font-normal leading-[1.02] text-text-primary">
                {siteConfig.founder.name}
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-5 text-body leading-relaxed text-text-secondary">
              <p>
                I spent six years building automation and data infrastructure inside
                venture-backed companies before I started Arc Tech. I kept watching the
                same pattern: founders who built something worth scaling, then got buried
                by the operational weight of scaling it.
              </p>
              <p>
                I don&rsquo;t believe automation is a cost center or a nice-to-have. I
                believe it&rsquo;s the difference between a business that depends on its
                founder and one that compounds without her. That distinction is the entire
                premise of this studio.
              </p>
              <p>
                I take a small number of engagements a quarter, on purpose. Every system
                Arc Tech ships has my name on the architecture, not just the invoice.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="border-l border-purple-500/50 pl-6">
                <p className="font-display text-h3 font-normal italic leading-snug text-platinum-200">
                  &ldquo;The best automation is invisible. You only notice it in what stops
                  going wrong.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={siteConfig.founder.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 text-small font-medium text-text-primary"
              >
                <Linkedin size={18} strokeWidth={1.25} />
                Connect on LinkedIn
                <span className="transition-transform duration-200 ease-state group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

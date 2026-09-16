import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { FounderPortrait } from '@/components/ui/FounderPortrait';
import { Button } from '@/components/ui/Button';
import { founderQuotes } from '@/lib/content/founder';
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

            <Reveal delay={0.1}>
              <p className="max-w-xl text-body leading-relaxed text-text-secondary">
                I started Arc Tech in {siteConfig.founder.foundedYear} after watching
                founder after founder get buried by the weight of their own growth.
                My name is on every system&rsquo;s architecture, not just the invoice.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="border-l border-purple-500/50 pl-6">
                <p className="font-display text-h3 font-normal italic leading-snug text-platinum-200">
                  &ldquo;{founderQuotes.close}&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <Button href="/about#founder" variant="tertiary" className="self-start">
                Read the full profile
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

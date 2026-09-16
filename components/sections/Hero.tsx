import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Container } from '@/components/ui/Container';
import { NodeMesh } from '@/components/ui/NodeMesh';
import { MaskReveal } from '@/components/ui/MaskReveal';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site-config';

const logos = ['Meridian', 'Northfield & Co.', 'Vantage Health', 'Copperline', 'Oswell', 'Barrow Retail'];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-bg-base">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] animate-breathe sm:h-[560px] md:h-[680px]"
        style={{ background: 'var(--grad-arc)' }}
      />
      <NodeMesh className="pointer-events-none absolute inset-0 h-full w-full opacity-20" />

      <Container className="relative z-10 flex flex-col items-start gap-10 pb-24 pt-40 md:pt-48">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="numeral text-small">00</span>
            <Eyebrow>AI Automation Studio · {siteConfig.city}</Eyebrow>
          </div>
        </Reveal>

        <h1 className="max-w-4xl font-display text-display font-normal leading-[0.98] tracking-tight text-text-primary">
          <MaskReveal delay={0.15}>
            <span className="metal">Your business should run</span>
          </MaskReveal>
          <MaskReveal delay={0.3}>
            <em className="metal italic">without you in it.</em>
          </MaskReveal>
        </h1>

        <Reveal delay={0.55}>
          <p className="max-w-[58ch] text-lead leading-relaxed text-text-secondary">
            Arc Tech builds the AI systems that run your operations — live in 6 weeks,
            zero new hires.
          </p>
        </Reveal>

        <Reveal delay={0.68}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary">
              Book a strategy call
            </Button>
            <Button href="/work" variant="secondary">
              See what we build
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="mt-8 flex flex-col gap-5">
            <p className="eyebrow text-text-tertiary">
              Trusted by founders across e-commerce, professional services &amp; SaaS
            </p>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {logos.map((logo) => (
                <li
                  key={logo}
                  className="font-display text-lg italic text-platinum-400 opacity-45 transition-opacity duration-300 hover:opacity-100"
                >
                  {logo}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 hidden h-16 w-px -translate-x-1/2 overflow-hidden bg-line-default sm:block"
      >
        <div className="h-4 w-full animate-pulseDown bg-purple-300" />
      </div>
    </section>
  );
}

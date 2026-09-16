import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site-config';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-32 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[1000px] -translate-y-1/2 animate-breathe"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.45) 0%, transparent 70%)',
        }}
      />
      <Container className="relative z-10 flex flex-col items-center gap-10 text-center">
        <Reveal>
          <h2 className="max-w-4xl font-display text-h1 font-normal leading-[1.02] tracking-tight">
            <span className="metal">Let&rsquo;s build the version</span>{' '}
            <span className="metal">of your business that</span>{' '}
            <em className="metal italic">runs itself.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="/contact" variant="primary">
            Book a strategy call
          </Button>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="eyebrow text-text-tertiary">
            Limited engagements per quarter · Currently booking {siteConfig.currentBookingQuarter}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

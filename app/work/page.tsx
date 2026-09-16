import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { WorkFilter } from '@/components/sections/WorkFilter';
import { FinalCta } from '@/components/sections/FinalCta';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected case studies: AI voice agents, workflow automation, lead generation systems, and custom AI integrations shipped for founder-led businesses.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bg-base pb-16 pt-40 md:pt-48">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[600px] animate-breathe"
          style={{ background: 'var(--grad-arc)' }}
        />
        <Container className="relative z-10">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Selected Work</Eyebrow>
            <h1 className="max-w-3xl font-display text-h1 font-normal leading-[1.02] tracking-tight">
              <span className="metal">Systems that shipped,</span>{' '}
              <em className="metal italic">not slideware.</em>
            </h1>
            <p className="max-w-[58ch] text-lead leading-relaxed text-text-secondary">
              Four engagements, four industries, one pattern: diagnose the real
              bottleneck, then build the system that removes it for good.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative bg-bg-base">
        <Container>
          <WorkFilter />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

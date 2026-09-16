import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function Positioning() {
  return (
    <section className="relative section-pad bg-bg-base">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-baseline gap-4">
            <span className="numeral text-small">01</span>
            <Eyebrow>The Problem</Eyebrow>
          </div>
          <p className="max-w-4xl font-display text-h1 font-normal leading-[1.15] text-text-tertiary">
            Most businesses don&rsquo;t have a{' '}
            <span className="metal">growth problem</span>. They have a{' '}
            <span className="metal">capacity problem</span> — hiring won&rsquo;t fix
            it,{' '}
            <span className="metal">systems that run themselves will.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

import type { Metadata } from 'next';
import { Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FounderPortrait } from '@/components/ui/FounderPortrait';
import { ArcMark } from '@/components/ui/Logo';
import { FinalCta } from '@/components/sections/FinalCta';
import { values, howWeWork } from '@/lib/content/values';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Arc Tech is a boutique AI automation studio founded by Nadia Kessler, built on precision, restraint, and infrastructure that outlasts the engagement.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bg-base pb-20 pt-40 md:pt-48">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[600px] animate-breathe"
          style={{ background: 'var(--grad-arc)' }}
        />
        <Container className="relative z-10">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>About Arc Tech</Eyebrow>
            <h1 className="max-w-3xl font-display text-h1 font-normal leading-[1.02] tracking-tight">
              <span className="metal">Built by an engineer,</span>{' '}
              <em className="metal italic">run like a studio.</em>
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="relative bg-bg-base pb-section">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <FounderPortrait />
            </Reveal>

            <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:pt-6">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <span className="numeral text-small">01</span>
                  <Eyebrow>Founder &amp; Principal Architect</Eyebrow>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-h1 font-normal leading-[1.02] text-text-primary">
                  {siteConfig.founder.name}
                </h2>
              </Reveal>

              <Reveal delay={0.1} className="flex flex-col gap-5 text-body leading-relaxed text-text-secondary">
                <p className="drop-cap">
                  I started my career as a data engineer inside two venture-backed
                  startups, building the pipelines that fed their growth teams. By the
                  time I left the second one, I&rsquo;d shipped internal automation that
                  quietly saved the operations team over 20 hours a week — nobody had
                  asked me to build it. I just couldn&rsquo;t watch the manual process
                  anymore.
                </p>
                <p>
                  That became the pattern. Every founder I talked to after that had the
                  same problem wearing a different costume: too much of the business
                  depended on them personally showing up, every day, to keep it moving.
                  Hiring didn&rsquo;t fix it. It just added more people who also needed
                  managing.
                </p>
                <p>
                  I started Arc Tech in 2023 to build the alternative: systems precise
                  enough to be trusted with real operations, and restrained enough that
                  they never feel like a Rube Goldberg machine bolted onto your business.
                  I still lead the architecture on every engagement personally. That
                  won&rsquo;t change as the studio grows.
                </p>
                <p>
                  Before Arc Tech, I led data infrastructure teams and built automation
                  tooling used across e-commerce, healthcare, and professional services.
                  I hold a degree in computer science and have spent the years since
                  turning that foundation into something founders can actually use
                  without an engineering team of their own.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
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

      <section className="relative section-pad border-t border-line-subtle bg-bg-raised">
        <Container>
          <Reveal className="flex flex-col gap-5 max-w-2xl">
            <div className="flex items-baseline gap-4">
              <span className="numeral text-small">02</span>
              <Eyebrow>What We Believe</Eyebrow>
            </div>
            <h2 className="font-display text-h2 font-normal leading-[1.05] text-text-primary">
              Four principles, <em className="metal italic">held without exception.</em>
            </h2>
          </Reveal>

          <RevealGroup className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            {values.map((value) => (
              <RevealItem key={value.numeral}>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line">
                    <ArcMark className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="numeral text-small">{value.numeral}</span>
                    <h3 className="font-display text-h3 font-normal text-text-primary">
                      {value.title}
                    </h3>
                    <p className="text-body leading-relaxed text-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="relative section-pad bg-bg-base">
        <Container>
          <Reveal className="flex flex-col gap-5 max-w-2xl">
            <div className="flex items-baseline gap-4">
              <span className="numeral text-small">03</span>
              <Eyebrow>How We Work</Eyebrow>
            </div>
            <h2 className="font-display text-h2 font-normal leading-[1.05] text-text-primary">
              A studio model, <em className="metal italic">not an agency roster.</em>
            </h2>
          </Reveal>

          <RevealGroup className="mt-16 flex flex-col divide-y divide-line-subtle border-t border-line-subtle">
            {howWeWork.map((item, i) => (
              <RevealItem key={item.title}>
                <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:gap-8">
                  <span className="numeral text-lead md:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-h3 font-normal text-text-primary md:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-body leading-relaxed text-text-secondary md:col-span-7">
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

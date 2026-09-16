import type { Metadata } from 'next';
import { Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FounderPortrait } from '@/components/ui/FounderPortrait';
import { FounderVitals } from '@/components/ui/FounderVitals';
import { ArcMark } from '@/components/ui/Logo';
import { FinalCta } from '@/components/sections/FinalCta';
import { values, howWeWork } from '@/lib/content/values';
import { founderQuotes } from '@/lib/content/founder';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Arc Tech is a boutique AI automation studio founded by Sonaly Singh, built on precision, restraint, and infrastructure that outlasts the engagement.',
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

      <section id="founder" className="relative overflow-hidden bg-bg-base pb-section scroll-mt-24">
        <Container>
          {/* Masthead row */}
          <Reveal>
            <div className="flex items-center justify-between gap-6 border-b border-line-subtle pb-6">
              <div className="flex items-baseline gap-4">
                <span className="numeral text-small">01</span>
                <Eyebrow>The Founder Profile</Eyebrow>
              </div>
              <span className="eyebrow hidden text-text-tertiary sm:inline">
                {siteConfig.city} · Est. {siteConfig.founder.foundedYear}
              </span>
            </div>
          </Reveal>

          {/* Headline splash */}
          <div className="relative mt-10 sm:mt-14">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[10rem] leading-none sm:-top-10 sm:text-[14rem]"
              style={{ color: 'transparent', WebkitTextStroke: '1px rgba(229,228,226,0.06)' }}
            >
              01
            </span>
            <Reveal delay={0.05}>
              <h2 className="relative font-display text-display font-normal leading-[0.95] tracking-tight text-text-primary">
                {siteConfig.founder.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="relative mt-5 max-w-xl text-lead leading-relaxed text-text-secondary">
                Founder &amp; Principal Architect — on precision, restraint, and why
                she still signs every system herself.
              </p>
            </Reveal>
          </div>

          {/* Feature spread */}
          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <Reveal delay={0.1}>
                <FounderPortrait />
                <p className="mt-4 font-display text-small italic text-text-tertiary">
                  {siteConfig.founder.name}, photographed at the Arc Tech studio.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <FounderVitals />
              </Reveal>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-7">
              <Reveal delay={0.1} className="flex flex-col gap-5 text-body leading-relaxed text-text-secondary">
                <p className="drop-cap">
                  I started as a data engineer at two venture-backed startups, building
                  the pipelines that fed their growth teams. By the second one, I&rsquo;d
                  shipped internal automation saving the ops team 20+ hours a week —
                  nobody asked me to build it. I just couldn&rsquo;t watch the manual
                  process anymore.
                </p>
                <p>
                  That became the pattern. Every founder had the same problem in a
                  different costume: the business depended on them showing up daily.
                  Hiring didn&rsquo;t fix it — it just added more people to manage.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <blockquote className="border-l border-purple-500/50 pl-6">
                  <p className="font-display text-h3 font-normal italic leading-snug text-platinum-200">
                    &ldquo;{founderQuotes.pull}&rdquo;
                  </p>
                </blockquote>
              </Reveal>

              <Reveal delay={0.25} className="flex flex-col gap-5 text-body leading-relaxed text-text-secondary">
                <p>
                  I started Arc Tech in 2023 to build the alternative: systems precise
                  enough to trust with real operations, restrained enough to never feel
                  bolted on.
                </p>
                <p>
                  Before Arc Tech, I led data infrastructure teams and built automation
                  used across e-commerce, healthcare, and professional services. Since
                  then, I&rsquo;ve turned a computer science degree into tools founders
                  can run without an engineering team.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <blockquote className="border-l border-purple-500/50 pl-6">
                  <p className="font-display text-h3 font-normal italic leading-snug text-platinum-200">
                    &ldquo;{founderQuotes.close}&rdquo;
                  </p>
                </blockquote>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="flex flex-col gap-3 border-t border-line-subtle pt-6">
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
                  <p className="eyebrow text-text-tertiary">
                    Interview condensed and edited for length and clarity.
                  </p>
                </div>
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

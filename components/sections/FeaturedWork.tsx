import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CaseVisual } from '@/components/ui/CaseVisual';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { caseStudies } from '@/lib/content/work';

export function FeaturedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section id="work" className="relative section-pad bg-bg-base">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              numeral="04"
              eyebrow="Selected Work"
              title={
                <>
                  Systems that shipped, <em className="metal italic">not slideware.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/work" variant="tertiary" className="hidden sm:inline-flex">
              View all work
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featured.map((study, i) => (
            <RevealItem key={study.slug}>
              <a href={`/work#${study.slug}`} className="group flex h-full flex-col gap-6">
                <div className="overflow-hidden rounded-lg border border-line-subtle">
                  <CaseVisual index={i} className="aspect-[4/3] w-full" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="eyebrow text-purple-300">{study.industry}</span>
                  <h3 className="font-display text-h3 font-normal leading-snug text-text-primary">
                    {study.headline}
                  </h3>
                  <p className="text-small leading-relaxed text-text-secondary">
                    {study.summary}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 text-small font-medium text-text-primary">
                    Read the case study
                    <span
                      aria-hidden
                      className="transition-transform duration-200 ease-state group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Button href="/work" variant="tertiary" className="mt-12 sm:hidden">
            View all work
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

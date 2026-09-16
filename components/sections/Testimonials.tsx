import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { testimonials } from '@/lib/content/testimonials';

export function Testimonials() {
  return (
    <section className="relative section-pad bg-bg-base">
      <Container>
        <Reveal>
          <SectionHeading
            numeral="06"
            eyebrow="What They Say"
            title={
              <>
                Clients notice <em className="metal italic">what stops going wrong.</em>
              </>
            }
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <RevealItem key={t.name}>
              <figure className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-lg border border-line-subtle bg-bg-raised p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-2 -top-6 select-none font-display text-[8rem] leading-none text-purple-900/40"
                >
                  &ldquo;
                </span>
                <blockquote className="relative z-10 font-display text-h3 font-normal leading-snug text-text-primary">
                  {t.quote}
                </blockquote>
                <figcaption className="relative z-10 flex items-center gap-4">
                  <div
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-small font-medium text-bg-base"
                    style={{ background: 'var(--grad-platinum)' }}
                  >
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-small font-medium text-text-primary">{t.name}</p>
                    <p className="text-small text-text-tertiary">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { faqs } from '@/lib/content/faq';

export function FaqSection() {
  return (
    <section className="relative section-pad bg-bg-raised">
      <Container className="max-w-content">
        <Reveal>
          <SectionHeading
            numeral="07"
            eyebrow="Questions"
            title={
              <>
                Before you <em className="metal italic">book the call.</em>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}

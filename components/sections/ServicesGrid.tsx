import { Phone, Workflow, Plug, Target, BrainCircuit, ClipboardList } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { services } from '@/lib/content/services';

const icons = [Phone, Workflow, Plug, Target, BrainCircuit, ClipboardList];

export function ServicesGrid() {
  return (
    <section id="services" className="relative section-pad bg-bg-base">
      <Container>
        <Reveal>
          <SectionHeading
            numeral="02"
            eyebrow="Capabilities"
            title={
              <>
                Six systems.{' '}
                <em className="metal italic">One operating principle.</em>
              </>
            }
            lead="Every engagement starts from one question: what is a human doing that a system could do instead?"
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <RevealItem key={service.slug}>
                <Card className="flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-line">
                      <Icon size={22} strokeWidth={1.25} className="text-purple-300" />
                    </div>
                    <span className="numeral text-small">{service.numeral}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="font-display text-h3 font-normal text-text-primary">
                      {service.title}
                    </h3>
                    <p className="text-small leading-relaxed text-text-secondary">
                      {service.summary}
                    </p>
                  </div>
                  <Button href={`/services#${service.slug}`} variant="tertiary" className="self-start">
                    Learn more
                  </Button>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}

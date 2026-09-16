import { Container } from '@/components/ui/Container';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';

const metrics = [
  { value: 40, suffix: '+', label: 'Systems Deployed' },
  { value: 12000, suffix: '+', label: 'Hours Returned' },
  { value: 3.4, suffix: '×', label: 'Avg. Pipeline Lift', decimal: true },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export function MetricsBand() {
  return (
    <section className="relative border-y border-line-subtle bg-bg-raised">
      <Container className="py-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-4 lg:gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col items-center gap-3 text-center">
                <span className="metal font-display text-h1 font-normal leading-none">
                  {metric.decimal ? (
                    <>3.4{metric.suffix}</>
                  ) : (
                    <CountUp value={metric.value} suffix={metric.suffix} />
                  )}
                </span>
                <span className="eyebrow text-text-tertiary">{metric.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

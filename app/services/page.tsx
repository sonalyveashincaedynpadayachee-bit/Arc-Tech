import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ServicesSidebarNav } from '@/components/sections/ServicesSidebarNav';
import { ServiceDeepSection } from '@/components/sections/ServiceDeepSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { services } from '@/lib/content/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Six AI automation capabilities — voice and chat agents, workflow automation, custom integrations, lead generation, internal copilots, and automation strategy.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
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
            <Eyebrow>What We Build</Eyebrow>
            <h1 className="max-w-3xl font-display text-h1 font-normal leading-[1.02] tracking-tight">
              <span className="metal">Six systems.</span>{' '}
              <em className="metal italic">One studio.</em>
            </h1>
            <p className="max-w-[58ch] text-lead leading-relaxed text-text-secondary">
              Every engagement draws from the same six capabilities, combined to fit the
              shape of your operation — never sold as a bundle you don&rsquo;t need.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative bg-bg-base">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <ServicesSidebarNav />
            </div>
            <div className="lg:col-span-9">
              {services.map((service, i) => (
                <ServiceDeepSection
                  key={service.slug}
                  service={service}
                  isLast={i === services.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

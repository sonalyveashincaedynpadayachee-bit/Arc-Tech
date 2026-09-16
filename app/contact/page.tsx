import type { Metadata } from 'next';
import { Calendar, Mail, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a strategy call with Arc Tech or send a project inquiry. We respond to every message within one business day.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-bg-base pb-section pt-40 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] animate-breathe"
        style={{ background: 'var(--grad-arc)' }}
      />
      <Container className="relative z-10">
        <Reveal className="flex flex-col gap-6 max-w-2xl">
          <Eyebrow>Get In Touch</Eyebrow>
          <h1 className="font-display text-h1 font-normal leading-[1.02] tracking-tight">
            <span className="metal">Tell us what&rsquo;s</span>{' '}
            <em className="metal italic">costing you time.</em>
          </h1>
          <p className="text-lead leading-relaxed text-text-secondary">
            Book a strategy call directly, or send us the details below. Either way,
            you&rsquo;ll hear from a real person — never a queue.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-5 rounded-lg border border-line-subtle bg-bg-raised p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-line">
                <Calendar size={22} strokeWidth={1.25} className="text-purple-300" />
              </div>
              <h2 className="font-display text-h3 font-normal text-text-primary">
                Prefer to book directly?
              </h2>
              <p className="text-body leading-relaxed text-text-secondary">
                Skip the form and grab 30 minutes on our calendar for a live strategy
                call — no pitch deck, just a working conversation about where automation
                would actually move the needle for you.
              </p>
              <Button href={siteConfig.calendlyUrl} variant="secondary">
                Open booking calendar
              </Button>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-line-subtle bg-bg-raised p-8">
              <div className="flex items-center gap-3">
                <Mail size={18} strokeWidth={1.25} className="text-purple-300" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-body text-text-primary underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} strokeWidth={1.25} className="text-purple-300" />
                <p className="text-body text-text-secondary">
                  We respond within one business day, always.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

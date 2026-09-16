import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="bg-bg-base pb-section pt-40 md:pt-48">
      <Container className="max-w-content">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 font-display text-h1 font-normal leading-tight text-text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 eyebrow text-text-tertiary">Last updated September 2026</p>

        <div className="mt-14 flex max-w-prose flex-col gap-8 text-body leading-relaxed text-text-secondary">
          <p>
            {siteConfig.name} (&ldquo;Arc Tech,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            respects your privacy. This policy explains what information we collect
            through {siteConfig.url}, how we use it, and the choices you have.
          </p>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Information we collect
            </h2>
            <p>
              When you submit our contact form or book a strategy call, we collect the
              name, email address, company, budget range, and project details you
              provide. We do not collect payment information through this site.
              Standard analytics data (pages visited, referring source, device type)
              may be collected in aggregate to understand how visitors use the site.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              How we use it
            </h2>
            <p>
              We use the information you submit solely to respond to your inquiry,
              schedule and prepare for calls, and, if you become a client, to scope and
              deliver the engagement. We do not sell your personal information to third
              parties, ever.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Client project data
            </h2>
            <p>
              For active engagements, any operational, customer, or business data
              accessed during a build is governed by a separate data processing
              agreement and mutual NDA, signed before any system access is granted.
              That data is scoped, access-controlled, and never used outside the
              engagement it was collected for.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Your rights
            </h2>
            <p>
              You can request access to, correction of, or deletion of any personal
              information we hold about you by emailing{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-purple-300 underline underline-offset-4">
                {siteConfig.email}
              </a>
              . We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Contact
            </h2>
            <p>
              Questions about this policy can be sent to{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-purple-300 underline underline-offset-4">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

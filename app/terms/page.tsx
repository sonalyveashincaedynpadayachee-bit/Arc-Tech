import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms governing use of the ${siteConfig.name} website.`,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="bg-bg-base pb-section pt-40 md:pt-48">
      <Container className="max-w-content">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 font-display text-h1 font-normal leading-tight text-text-primary">
          Terms of Service
        </h1>
        <p className="mt-4 eyebrow text-text-tertiary">Last updated September 2026</p>

        <div className="mt-14 flex max-w-prose flex-col gap-8 text-body leading-relaxed text-text-secondary">
          <p>
            These terms govern your use of {siteConfig.url} (the &ldquo;Site&rdquo;),
            operated by {siteConfig.legalName}. By using the Site, you agree to these
            terms.
          </p>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Use of the site
            </h2>
            <p>
              The Site is provided for the purpose of learning about Arc Tech&rsquo;s
              services and submitting inquiries. You agree not to misuse the Site,
              including attempting to access it by means other than the interface we
              provide, or to interfere with its normal operation.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              No engagement without agreement
            </h2>
            <p>
              Nothing on this Site constitutes an offer to enter into a services
              agreement. Pricing ranges, timelines, and outcomes referenced on the Site
              are illustrative of past engagements and are not guarantees for future
              work. A statement of work is executed separately before any engagement
              begins.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Intellectual property
            </h2>
            <p>
              All content on this Site — copy, design, and code — is the property of{' '}
              {siteConfig.legalName} unless otherwise noted, and may not be reproduced
              without permission.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Limitation of liability
            </h2>
            <p>
              The Site is provided &ldquo;as is&rdquo; without warranties of any kind.
              {' '}{siteConfig.name} is not liable for any indirect or consequential
              damages arising from your use of the Site.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-h3 font-normal text-text-primary">
              Contact
            </h2>
            <p>
              Questions about these terms can be sent to{' '}
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

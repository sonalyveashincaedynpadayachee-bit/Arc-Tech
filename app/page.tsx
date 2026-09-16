import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { Positioning } from '@/components/sections/Positioning';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { FounderSection } from '@/components/sections/FounderSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { faqs } from '@/lib/content/faq';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `${siteConfig.name} — AI Automation Studio for Founder-Led Businesses`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <LogoMarquee />
      <Positioning />
      <ServicesGrid />
      <ProcessTimeline />
      <MetricsBand />
      <FeaturedWork />
      <FounderSection />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}

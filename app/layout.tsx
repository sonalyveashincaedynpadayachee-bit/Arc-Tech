import type { Metadata } from 'next';
import { instrumentSerif, interTight, jetBrainsMono } from './fonts';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { ScrollFavicon } from '@/components/ui/ScrollFavicon';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — AI Automation Studio`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AI automation agency',
    'AI voice agents',
    'workflow automation',
    'RAG copilot',
    'applied AI consultancy',
  ],
  authors: [{ name: siteConfig.founder.name }],
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — AI Automation Studio`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — AI Automation Studio`,
    description: siteConfig.description,
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  founder: {
    '@type': 'Person',
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.title,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.city,
  },
  sameAs: [siteConfig.socials.linkedin, siteConfig.socials.twitter],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <GrainOverlay />
        <ScrollFavicon />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

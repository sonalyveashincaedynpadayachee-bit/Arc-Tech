# Arc Tech — Marketing Site

Production marketing site for Arc Tech, a boutique AI automation studio. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 16** (App Router, static prerendering for every route)
- **TypeScript**
- **Tailwind CSS** — design tokens mapped from CSS custom properties
- **Framer Motion** — scroll reveals, magnetic buttons, the process timeline's scroll-driven arc
- **Lucide React** — icons (1.25 stroke width throughout)
- **next/font** — Instrument Serif, Inter Tight, JetBrains Mono, self-hosted with zero layout shift

## File structure

```
app/
  layout.tsx            Root layout: fonts, Nav, Footer, grain overlay, Organization JSON-LD
  globals.css           Design tokens (colors, type scale, spacing, shadows, motion easings)
  fonts.ts              next/font definitions
  page.tsx              Home page (assembles all 12 home sections)
  sitemap.ts            Dynamic sitemap.xml
  robots.ts             robots.txt
  opengraph-image.tsx   Dynamically generated OG/social image
  services/page.tsx     Services page (deep sections + sticky sidebar)
  work/page.tsx          Work index (filterable case studies)
  about/page.tsx         About page (founder story, values, how we work)
  contact/page.tsx       Contact page (form + booking panel)
  privacy/page.tsx, terms/page.tsx

components/
  ui/                    Primitives: Button, Card, Container, SectionHeading, Eyebrow,
                         Reveal, Accordion, FormField, Marquee, CountUp, Logo, ArcGlow,
                         ArcDivider, GrainOverlay, NodeMesh, CaseVisual, FounderPortrait
  sections/              Page sections: Nav, Footer, Hero, ServicesGrid, ProcessTimeline,
                         FounderSection, Testimonials, FaqSection, FinalCta, CaseStudyBlock,
                         WorkFilter, ServiceDeepSection, ServicesSidebarNav, ContactForm

lib/
  site-config.ts         Site-wide constants (name, email, socials, booking quarter, nav)
  content/                Copy: services.ts, work.ts, testimonials.ts, faq.ts, process.ts, values.ts
  cn.ts                   Tiny classnames helper
```

## Where to swap real content before launch

1. **Founder photograph** — `components/ui/FounderPortrait.tsx` currently renders an
   abstract editorial light-study (duotone gradient + monogram) in place of a real
   photograph, since no real photo was available to source. Replace its contents with
   a `next/image` of the real founder portrait (duotone/platinum treatment recommended
   to match the brand system), sized ~6:7 aspect ratio.
2. **Client logos** — `components/sections/Hero.tsx` and `components/sections/LogoMarquee.tsx`
   currently render client names as styled text. Swap for real logo SVGs/images at
   ~45% opacity, 100% on hover, once real client permission is secured.
3. **Metrics** — `components/sections/MetricsBand.tsx` ships with example figures
   (40+ systems deployed, 12,000+ hours returned, 3.4x pipeline lift, 98% retention).
   **Replace these with real, verified client figures before launch.**
4. **Case studies** — `lib/content/work.ts` holds four illustrative case studies.
   Replace with real client engagements (with permission) or clearly-labeled
   composite/anonymized examples.
5. **Testimonials** — `lib/content/testimonials.ts`. Replace with real, attributed
   client quotes (with permission) before launch.
6. **Booking link** — `lib/site-config.ts` → `calendlyUrl`. Point this at a real
   Calendly/Cal.com booking page. The Contact page links out to it as a button;
   swap for an embedded iframe once a real scheduling account exists.
7. **Contact email / socials** — `lib/site-config.ts` → `email`, `socials.linkedin`,
   `socials.twitter`. The contact form currently opens a pre-filled `mailto:` link
   (no backend); wire it to a real form handler (e.g. a Next.js Server Action or
   a service like Resend/Formspree) when ready.
8. **Founder name / bio** — `lib/site-config.ts` (`founder`) and the copy in
   `components/sections/FounderSection.tsx` / `app/about/page.tsx`.
9. **OG image** — `app/opengraph-image.tsx` generates the social preview image
   dynamically from brand colors and the hero headline; edit its JSX to change
   the design, no static asset to replace.

## Updating the design tokens

All brand tokens live in `app/globals.css` under `:root` and are mapped into
Tailwind via `tailwind.config.ts`. To retheme:

- **Colors** — edit the CSS custom properties in `globals.css` (`--bg-*`,
  `--purple-*`, `--platinum-*`, `--text-*`, `--line-*`, `--grad-*`). Every
  component references these through Tailwind classes (`bg-bg-raised`,
  `text-purple-300`, etc.) or `var(--token)` directly — no hardcoded hex
  values in component files.
- **Type scale** — `--fs-display` through `--fs-micro` (fluid `clamp()` values).
- **Fonts** — `app/fonts.ts` (swap the `next/font/google` imports for different
  families; keep the three `--font-display` / `--font-sans` / `--font-mono`
  variable names consistent with `tailwind.config.ts`).
- **Spacing / radii / shadows** — `tailwind.config.ts` `theme.extend` and the
  matching custom properties in `globals.css`.
- **Motion** — easing curves are defined as `--ease-entrance` / `--ease-state`
  in `globals.css` and as Tailwind `transitionTimingFunction` utilities.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (static export of every route)
npm run start     # serve the production build
npm run lint
```

## Notes

- Every route is statically prerendered (`○ (Static)` in the build output).
- Dark theme only, by design — no light mode.
- All scroll/hover motion respects `prefers-reduced-motion: reduce`.
- The film-grain overlay, arc motif, and metallic gradient text are the
  three signature details — see `components/ui/GrainOverlay.tsx`,
  `components/ui/ArcDivider.tsx` / `ArcGlow.tsx`, and the `.metal` /
  `.metal-purple` utility classes in `globals.css`.

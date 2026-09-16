export type CaseStudy = {
  slug: string;
  industry: string;
  serviceTags: string[];
  client: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string[];
  architecture: string[];
  results: { metric: string; label: string }[];
  testimonial: { quote: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'response-time-home-services',
    industry: 'Home Services',
    serviceTags: ['AI Voice & Chat Agents', 'Workflow Automation'],
    client: 'A 3-location HVAC and plumbing group',
    headline: 'Cut response time from 9 hours to 4 minutes',
    summary:
      'A voice and SMS agent answers, qualifies, and books every inbound call across three dispatch lines before a human picks up.',
    challenge:
      'Inbound calls routed through one shared inbox, monitored only during business hours. After-hours callbacks averaged 9 hours — and 40% of callers had already booked a competitor by then.',
    approach: [
      'Mapped call types across all three locations into decision trees for the top 7 intents',
      'Trained the voice agent on pricing, service radius, and technician availability',
      'Wired the agent directly to the dispatch calendar for real-time booking',
      'Built an escalation path to the on-call manager for emergencies',
    ],
    architecture: [
      'Inbound telephony via Twilio, routed to a custom voice agent',
      'Real-time availability sync with the dispatch scheduling system',
      'CRM write-back for every call, auto-transcribed and tagged',
      'SMS escalation to the manager for emergency-tier jobs',
    ],
    results: [
      { metric: '9hr → 4min', label: 'Average response time' },
      { metric: '+38%', label: 'Booked-call conversion' },
      { metric: '24/7', label: 'Coverage, zero added headcount' },
    ],
    testimonial: {
      quote: 'We lost jobs every night to whoever answered first. That stopped in the first two weeks.',
      attribution: 'Operations Director',
    },
  },
  {
    slug: 'pipeline-lift-b2b-consulting',
    industry: 'Professional Services',
    serviceTags: ['Lead Generation Systems', 'Workflow Automation'],
    client: 'A 12-person B2B advisory practice',
    headline: '3.4x pipeline growth in one quarter, zero new hires',
    summary:
      'A scoring and sequencing system replaced the founder’s manual prospecting — filling the pipeline while she stayed in delivery.',
    challenge:
      'The founder was the only source of new business, squeezed into gaps between client work — rarely, and the pipeline showed it monthly.',
    approach: [
      'Built an ideal-customer model from 24 months of closed-won and closed-lost data',
      'Automated enrichment and scoring for every lead, inbound or sourced',
      'Designed a six-touch, multi-channel sequence personalized at scale',
      'Routed hot leads to the founder’s calendar, cold leads to nurture',
    ],
    architecture: [
      'Enrichment via a firmographic and intent data provider, orchestrated in n8n',
      'Custom scoring model weighted against historical close-won attributes',
      'Sequencing engine across email and LinkedIn with reply detection',
      'CRM as system of record, dashboarded weekly',
    ],
    results: [
      { metric: '3.4x', label: 'Pipeline volume, quarter over quarter' },
      { metric: '<15min', label: 'Lead response time, down from 2 days' },
      { metric: '0', label: 'New hires required' },
    ],
    testimonial: {
      quote:
        'I stopped being the bottleneck on my own growth. The pipeline runs itself — I get to do the work I’m good at.',
      attribution: 'Founder & Managing Director',
    },
  },
  {
    slug: 'internal-copilot-ecommerce',
    industry: 'E-Commerce',
    serviceTags: ['Internal Copilots & RAG', 'Automation Audit & Strategy'],
    client: 'A 40-person DTC apparel brand',
    headline: '35% faster onboarding for a growing support team',
    summary:
      'A private RAG copilot now answers what used to interrupt the COO 6 times daily.',
    challenge:
      'Institutional knowledge lived in one head and a messy shared drive. New hires took 6 weeks to ramp; the COO fielded the same questions daily.',
    approach: [
      'Consolidated 2 years of scattered SOP documentation',
      'Built a RAG copilot, scoped by role and department',
      'Deployed inside the team’s existing Slack workspace',
      'Instrumented analytics to surface undocumented knowledge gaps',
    ],
    architecture: [
      'Ingestion pipeline that re-indexes automatically on SOP updates',
      'Vector store scoped by department-level access controls',
      'Slack-native interface citing links back to source docs',
      'Weekly gap report surfaced to the operations team',
    ],
    results: [
      { metric: '35%', label: 'Faster new-hire ramp time' },
      { metric: '-6/day', label: 'Fewer repeat questions to leadership' },
      { metric: '92%', label: 'Support team weekly active usage' },
    ],
    testimonial: {
      quote:
        'New hires asked me the same six questions weekly. Now they ask the copilot — I get my afternoons back.',
      attribution: 'Chief Operating Officer',
    },
  },
  {
    slug: 'custom-integration-saas',
    industry: 'B2B SaaS',
    serviceTags: ['Custom AI Integrations'],
    client: 'A Series A vertical SaaS platform',
    headline: 'AI feature shipped to production in 19 days',
    summary:
      'A bespoke LLM integration replaced a shelved prototype, wired directly into the product’s existing backend.',
    challenge:
      'The proof of concept fell apart under real usage — no fallback logic, unpredictable latency, no monitoring. Shelved for 2 quarters.',
    approach: [
      'Rebuilt the integration at the API level',
      'Introduced provider fallback logic and defined latency budgets',
      'Built a versioned prompt library with regression tests',
      'Instrumented cost and performance monitoring before launch',
    ],
    architecture: [
      'Direct API integration into the existing service layer',
      'Multi-provider fallback routing for availability',
      'Prompt version control with automated regression testing',
      'Real-time cost and latency dashboards',
    ],
    results: [
      { metric: '19 days', label: 'Build to production ship' },
      { metric: '99.6%', label: 'Uptime in first 90 days' },
      { metric: '-40%', label: 'Inference cost vs. original prototype' },
    ],
    testimonial: {
      quote:
        'They didn’t hand us a prototype — they handed us infrastructure our engineers could maintain.',
      attribution: 'Head of Product',
    },
  },
];

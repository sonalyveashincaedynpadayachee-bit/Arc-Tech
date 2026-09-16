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
      'A voice and SMS agent now answers, qualifies, and books every inbound call across three dispatch lines, before a human ever picks up the phone.',
    challenge:
      'Inbound calls were routed through a single shared inbox monitored during business hours only. After-hours and overflow calls averaged a 9-hour callback window, and 40% of callers had already booked a competitor by the time they were reached.',
    approach: [
      'Mapped every call type across the three locations and built decision trees for the seven most common intents',
      'Deployed a voice agent trained on the company’s pricing logic, service radius, and technician availability',
      'Connected the agent directly to the dispatch calendar for real-time booking, not a callback queue',
      'Built a fallback escalation path to an on-call manager for emergency-tier requests',
    ],
    architecture: [
      'Inbound telephony via Twilio, routed to a custom voice agent',
      'Real-time availability sync with the dispatch scheduling system',
      'CRM write-back for every call, transcribed and tagged automatically',
      'Manager escalation via SMS for jobs flagged as emergency-tier',
    ],
    results: [
      { metric: '9hr → 4min', label: 'Average response time' },
      { metric: '+38%', label: 'Booked-call conversion' },
      { metric: '24/7', label: 'Coverage, zero added headcount' },
    ],
    testimonial: {
      quote:
        'We were losing jobs every single night to whoever answered the phone first. That stopped being a problem in the first two weeks.',
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
      'An enrichment, scoring, and sequencing system replaced a founder’s manual prospecting routine, filling the pipeline while she stayed in client delivery.',
    challenge:
      'The founder was the only source of new business. Prospecting happened in the gaps between client work, which meant it happened rarely, and the pipeline reflected that inconsistency month over month.',
    approach: [
      'Built an ideal-customer profile model from twenty-four months of closed-won and closed-lost data',
      'Automated enrichment and scoring for every inbound and sourced lead',
      'Designed a six-touch, multi-channel sequence personalized at scale',
      'Routed hot leads directly to the founder’s calendar, cold leads into nurture',
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
        'I stopped being the bottleneck on my own growth. The pipeline builds itself now, and I get to actually do the work I’m good at.',
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
      'A private RAG-based copilot trained on SOPs, return policies, and product data now answers the questions that used to interrupt the COO six times a day.',
    challenge:
      'Institutional knowledge lived in one person’s head and a disorganized shared drive. New support hires took nearly six weeks to ramp to full productivity, and the COO fielded the same repeat questions daily.',
    approach: [
      'Consolidated and restructured two years of scattered SOP documentation',
      'Built a retrieval-augmented copilot scoped by role and department',
      'Deployed inside the team’s existing Slack workspace',
      'Instrumented usage analytics to surface undocumented knowledge gaps',
    ],
    architecture: [
      'Document ingestion pipeline with automatic re-indexing on SOP updates',
      'Vector store scoped by department-level access controls',
      'Slack-native interface with citation links back to source documents',
      'Weekly gap report surfaced to the operations team',
    ],
    results: [
      { metric: '35%', label: 'Faster new-hire ramp time' },
      { metric: '-6/day', label: 'Fewer repeat questions to leadership' },
      { metric: '92%', label: 'Support team weekly active usage' },
    ],
    testimonial: {
      quote:
        'New hires used to ask me the same six questions every week. Now they ask the copilot, and I get my afternoons back.',
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
      'A bespoke LLM integration was wired directly into the product’s existing backend, replacing a shelved prototype the internal team couldn’t get past a demo.',
    challenge:
      'The engineering team had a working proof of concept that fell apart under real usage — no fallback logic, unpredictable latency, and no monitoring. It had been shelved for two quarters.',
    approach: [
      'Rebuilt the integration at the API level against the existing data model',
      'Introduced provider fallback logic and defined latency budgets',
      'Established a versioned, testable prompt library with regression tests',
      'Instrumented cost and performance monitoring before launch',
    ],
    architecture: [
      'Direct API integration into the product’s existing service layer',
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
        'They didn’t hand us a prototype. They handed us infrastructure our own engineers could maintain and extend.',
      attribution: 'Head of Product',
    },
  },
];

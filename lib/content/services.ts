export type Service = {
  slug: string;
  numeral: string;
  title: string;
  summary: string;
  whoFor: string;
  included: string[];
  outcomes: string[];
  caseSnippet: {
    quote: string;
    attribution: string;
  };
};

export const services: Service[] = [
  {
    slug: 'ai-voice-chat-agents',
    numeral: '01',
    title: 'AI Voice & Chat Agents',
    summary:
      'Inbound and outbound agents that qualify, book, and follow up 24/7 without a script that sounds like one.',
    whoFor:
      'Founder-led businesses where every missed call or slow reply is a lost customer — clinics, home services, real estate teams, and consultancies with high inbound volume.',
    included: [
      'Custom voice agent built on your call flows, trained on your offer and objection patterns',
      'SMS and web chat agent with shared memory across channels',
      'Live calendar booking with conflict handling and reminder sequencing',
      'Call recording, transcription, and weekly performance reporting',
      'Human handoff protocol for edge cases and high-value leads',
    ],
    outcomes: [
      'Average response time under 90 seconds, day or night',
      'Typical qualification-to-booked-call conversion lift of 30–45%',
    ],
    caseSnippet: {
      quote:
        'The voice agent now handles 70% of our inbound calls end-to-end. Our team only sees the ones worth their time.',
      attribution: 'Operations Director, home services group',
    },
  },
  {
    slug: 'workflow-automation',
    numeral: '02',
    title: 'Workflow Automation',
    summary:
      'End-to-end operational pipelines across your CRM, inbox, docs, and billing. Built in n8n, Make, and custom code.',
    whoFor:
      'Teams of 3–40 people drowning in manual handoffs between tools that were never designed to talk to each other.',
    included: [
      'Full audit of your current tool stack and manual touchpoints',
      'Workflow architecture diagram before a single automation is built',
      'Native integrations across CRM, invoicing, project management, and email',
      'Exception handling and monitoring so silent failures never happen',
      'Documentation and a Loom walkthrough for every workflow shipped',
    ],
    outcomes: [
      'Clients recover an average of 18–25 hours per week of manual work',
      'Sub-24-hour turnaround on invoice-to-payment cycles, typically',
    ],
    caseSnippet: {
      quote:
        'We used to lose a full day every week reconciling three systems by hand. That day is back.',
      attribution: 'Managing Partner, professional services firm',
    },
  },
  {
    slug: 'custom-ai-integrations',
    numeral: '03',
    title: 'Custom AI Integrations',
    summary:
      'Bespoke LLM tooling wired directly into your stack via API. Not a wrapper — infrastructure.',
    whoFor:
      'Product and engineering teams that need AI features shipped into an existing application, not a bolt-on chatbot.',
    included: [
      'API-level integration with your existing backend and data model',
      'Model selection and evaluation against your actual use case, not a leaderboard',
      'Prompt and context engineering with versioned, testable prompt libraries',
      'Cost and latency monitoring with fallback logic for provider outages',
      'Handover documentation for your internal engineering team',
    ],
    outcomes: [
      'Production-grade uptime with defined SLAs, not a demo that breaks in week two',
      'Average 3-week build-to-ship timeline for a defined integration scope',
    ],
    caseSnippet: {
      quote:
        'They didn’t hand us a prototype. They handed us infrastructure our engineers could actually maintain.',
      attribution: 'Head of Product, B2B SaaS platform',
    },
  },
  {
    slug: 'lead-generation-systems',
    numeral: '04',
    title: 'Lead Generation Systems',
    summary:
      'Enrichment, scoring, sequencing, and routing that fills the pipeline while you’re in delivery.',
    whoFor:
      'Founders and sales leaders who are the top of their own funnel and have no time left to also run it.',
    included: [
      'Ideal-customer data enrichment pulled from firmographic and intent sources',
      'Lead scoring model tuned to your historical close-won data',
      'Automated multi-channel sequencing across email and LinkedIn',
      'Real-time routing to the right owner with SLA-based alerts',
      'Weekly pipeline health dashboard delivered automatically',
    ],
    outcomes: [
      'Pipeline volume lift averaging 2.5–3.4x within the first quarter',
      'Lead response time reduced from days to under 15 minutes',
    ],
    caseSnippet: {
      quote:
        'Our pipeline used to depend entirely on me remembering to follow up. Now it runs whether I do or not.',
      attribution: 'Founder, boutique consulting practice',
    },
  },
  {
    slug: 'internal-copilots-rag',
    numeral: '05',
    title: 'Internal Copilots & RAG',
    summary:
      'Private assistants trained on your documentation, SOPs, and data. Your team’s institutional memory, searchable.',
    whoFor:
      'Growing teams where onboarding takes too long and answers to “how do we do this” live only in one person’s head.',
    included: [
      'Retrieval-augmented architecture built on your private document store',
      'Access-controlled deployment so sensitive data stays scoped by role',
      'Continuous ingestion pipeline as your documentation changes',
      'Slack, Teams, or standalone interface — wherever your team already works',
      'Usage analytics to identify knowledge gaps you didn’t know you had',
    ],
    outcomes: [
      'New hire ramp time cut by an average of 35%',
      'Institutional knowledge retained even after key employees leave',
    ],
    caseSnippet: {
      quote:
        'New account managers used to ask me the same six questions every week. Now they ask the copilot.',
      attribution: 'COO, e-commerce brand',
    },
  },
  {
    slug: 'automation-audit-strategy',
    numeral: '06',
    title: 'Automation Audit & Strategy',
    summary:
      'A forensic map of every hour your business loses to manual work, with a prioritized build roadmap.',
    whoFor:
      'Founders who know something is inefficient but can’t yet name what, or in what order to fix it.',
    included: [
      'Two-week operational audit across every department and tool',
      'Time-and-motion analysis quantifying hours lost per process',
      'Prioritized roadmap ranked by return on build effort',
      'Build-vs-buy recommendation for every candidate system',
      'Live findings presentation with your leadership team',
    ],
    outcomes: [
      'Clients leave with a costed, sequenced 12-month automation roadmap',
      'Average identified recovery of 12,000+ hours annually across a team',
    ],
    caseSnippet: {
      quote:
        'The audit alone paid for itself. We knew exactly what to build first and why.',
      attribution: 'CEO, multi-location healthcare practice',
    },
  },
];

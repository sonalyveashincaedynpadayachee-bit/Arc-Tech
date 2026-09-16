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
    summary: 'Inbound and outbound agents that qualify, book, and follow up 24/7.',
    whoFor:
      'Clinics, home services, and real estate teams where a missed call means a lost customer.',
    included: [
      'Voice agent trained on your call flows, pricing, and objection handling',
      'SMS and web chat sharing one memory across channels',
      'Real-time booking with conflict checks and automatic reminders',
      'Call recordings, transcripts, and a weekly performance report',
      'Live handoff for high-value leads and edge cases',
    ],
    outcomes: [
      'Under 90 seconds response time, day or night',
      '30–45% lift in qualified-to-booked conversion',
    ],
    caseSnippet: {
      quote:
        'The voice agent closes 70% of our inbound calls without us. We only see the ones worth our time.',
      attribution: 'Operations Director, home services group',
    },
  },
  {
    slug: 'workflow-automation',
    numeral: '02',
    title: 'Workflow Automation',
    summary: 'CRM, inbox, docs, and billing pipelines, built in n8n and Make.',
    whoFor: 'Teams of 3–40 people losing hours to manual handoffs between disconnected tools.',
    included: [
      'Full audit of your tool stack and manual touchpoints',
      'Architecture diagram before we build a single automation',
      'Native integrations: CRM, invoicing, project management, email',
      'Exception handling and monitoring — no silent failures',
      'A Loom walkthrough and documentation for every workflow shipped',
    ],
    outcomes: [
      '18–25 hours a week recovered from manual work',
      'Invoice-to-payment cycles under 24 hours',
    ],
    caseSnippet: {
      quote:
        'We lost a full day every week reconciling three systems by hand. That day is back.',
      attribution: 'Managing Partner, professional services firm',
    },
  },
  {
    slug: 'custom-ai-integrations',
    numeral: '03',
    title: 'Custom AI Integrations',
    summary: 'LLM tooling wired into your stack — infrastructure, not a wrapper.',
    whoFor:
      'Engineering teams shipping AI features into an existing application, not a chatbot bolt-on.',
    included: [
      'API-level integration with your backend and data model',
      'Model selection tested against your use case, not a leaderboard',
      'Versioned, testable prompt libraries with context engineering',
      'Cost and latency monitoring with automatic provider fallback',
      'Full handover docs for your engineering team',
    ],
    outcomes: [
      'Production-grade uptime with a defined SLA, not a demo',
      '3-week build-to-ship timeline for a defined scope',
    ],
    caseSnippet: {
      quote:
        'They didn’t hand us a prototype — they handed us infrastructure our engineers could maintain.',
      attribution: 'Head of Product, B2B SaaS platform',
    },
  },
  {
    slug: 'lead-generation-systems',
    numeral: '04',
    title: 'Lead Generation Systems',
    summary: 'Enrichment, scoring, and sequencing that fill your pipeline for you.',
    whoFor: 'Founders who are their own top-of-funnel, with no time left to run it.',
    included: [
      'Enrichment from firmographic and intent data sources',
      'Scoring model tuned to your closed-won history',
      'Automated sequencing across email and LinkedIn',
      'Real-time routing with SLA-based owner alerts',
      'Automated weekly pipeline health dashboard',
    ],
    outcomes: [
      '2.5–3.4x pipeline lift in the first quarter',
      'Response time cut from days to under 15 minutes',
    ],
    caseSnippet: {
      quote:
        'My pipeline used to depend on me remembering to follow up. Now it runs whether I do or not.',
      attribution: 'Founder, boutique consulting practice',
    },
  },
  {
    slug: 'internal-copilots-rag',
    numeral: '05',
    title: 'Internal Copilots & RAG',
    summary: 'Private assistants trained on your docs — institutional memory, searchable.',
    whoFor: 'Teams where onboarding drags on and the answers live in one person’s head.',
    included: [
      'RAG architecture built on your private document store',
      'Role-scoped access so sensitive data stays contained',
      'Continuous re-indexing as your docs change',
      'Deployed in Slack, Teams, or standalone',
      'Usage analytics that surface knowledge gaps',
    ],
    outcomes: [
      '35% faster new-hire ramp time',
      'Institutional knowledge that outlasts any one employee',
    ],
    caseSnippet: {
      quote: 'New hires used to ask me the same six questions weekly. Now they ask the copilot.',
      attribution: 'COO, e-commerce brand',
    },
  },
  {
    slug: 'automation-audit-strategy',
    numeral: '06',
    title: 'Automation Audit & Strategy',
    summary: 'A map of every hour lost to manual work — prioritized, costed.',
    whoFor: 'Founders who sense the inefficiency but can’t name what to fix first.',
    included: [
      'Two-week audit across every department and tool',
      'Time-and-motion analysis, hours lost per process',
      'Roadmap ranked by return on build effort',
      'Build-vs-buy recommendation for every candidate system',
      'Live findings presentation with your leadership team',
    ],
    outcomes: [
      'A costed, sequenced 12-month roadmap, delivered live',
      '12,000+ hours a year identified for recovery',
    ],
    caseSnippet: {
      quote: 'The audit paid for itself. We knew exactly what to build first, and why.',
      attribution: 'CEO, multi-location healthcare practice',
    },
  },
];

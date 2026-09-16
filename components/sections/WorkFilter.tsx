'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import { CaseStudyBlock } from '@/components/sections/CaseStudyBlock';
import { caseStudies } from '@/lib/content/work';

export function WorkFilter() {
  const industries = useMemo(
    () => ['All', ...Array.from(new Set(caseStudies.map((c) => c.industry)))],
    []
  );
  const serviceTags = useMemo(
    () => Array.from(new Set(caseStudies.flatMap((c) => c.serviceTags))),
    []
  );

  const [industry, setIndustry] = useState('All');
  const [service, setService] = useState<string | null>(null);

  const filtered = caseStudies.filter((c) => {
    const matchIndustry = industry === 'All' || c.industry === industry;
    const matchService = !service || c.serviceTags.includes(service);
    return matchIndustry && matchService;
  });

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line-subtle pb-10">
        <div>
          <span className="eyebrow mb-3 block text-platinum-500">Industry</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by industry">
            {industries.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setIndustry(item)}
                aria-pressed={industry === item}
                className={cn(
                  'rounded-pill border px-4 py-2 text-small transition-colors duration-200',
                  industry === item
                    ? 'border-purple-400 bg-purple-500/10 text-text-primary'
                    : 'border-line text-text-secondary hover:border-line-strong'
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow mb-3 block text-platinum-500">Service</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by service">
            <button
              type="button"
              onClick={() => setService(null)}
              aria-pressed={service === null}
              className={cn(
                'rounded-pill border px-4 py-2 text-small transition-colors duration-200',
                service === null
                  ? 'border-purple-400 bg-purple-500/10 text-text-primary'
                  : 'border-line text-text-secondary hover:border-line-strong'
              )}
            >
              All
            </button>
            {serviceTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setService(tag)}
                aria-pressed={service === tag}
                className={cn(
                  'rounded-pill border px-4 py-2 text-small transition-colors duration-200',
                  service === tag
                    ? 'border-purple-400 bg-purple-500/10 text-text-primary'
                    : 'border-line text-text-secondary hover:border-line-strong'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-body text-text-tertiary">
          No case studies match that combination yet — try a different filter.
        </p>
      ) : (
        filtered.map((study, i) => <CaseStudyBlock key={study.slug} study={study} index={i} />)
      )}
    </div>
  );
}

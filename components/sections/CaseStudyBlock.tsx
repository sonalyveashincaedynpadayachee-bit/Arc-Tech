import { CaseVisual } from '@/components/ui/CaseVisual';
import { Reveal } from '@/components/ui/Reveal';
import type { CaseStudy } from '@/lib/content/work';

export function CaseStudyBlock({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article
      id={study.slug}
      data-industry={study.industry}
      data-services={study.serviceTags.join('|')}
      className="scroll-mt-32 border-b border-line-subtle py-20 last:border-b-0"
    >
      <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-lg border border-line-subtle">
            <CaseVisual index={index} className="aspect-[4/3] w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <span className="eyebrow text-purple-300">{study.industry}</span>
            <h2 className="font-display text-h2 font-normal leading-[1.05] text-text-primary">
              {study.headline}
            </h2>
            <p className="text-body leading-relaxed text-text-secondary">{study.summary}</p>
            <div className="flex flex-wrap gap-2">
              {study.serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="eyebrow rounded-pill border border-line px-3 py-1.5 text-text-tertiary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-7">
          <div>
            <h3 className="eyebrow mb-3 text-platinum-500">The Challenge</h3>
            <p className="text-body leading-relaxed text-text-secondary">{study.challenge}</p>
          </div>

          <div>
            <h3 className="eyebrow mb-3 text-platinum-500">The Approach</h3>
            <ul className="flex flex-col gap-2.5">
              {study.approach.map((step) => (
                <li key={step} className="flex items-start gap-3 text-body text-text-secondary">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-3 text-platinum-500">System Architecture</h3>
            <ul className="flex flex-col gap-2 rounded-lg border border-line-subtle bg-bg-raised p-6 font-mono text-small text-text-secondary">
              {study.architecture.map((line, i) => (
                <li key={line} className="flex gap-3">
                  <span className="text-text-tertiary">{String(i + 1).padStart(2, '0')}</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-platinum-500">Results</h3>
            <div className="grid grid-cols-3 gap-6">
              {study.results.map((result) => (
                <div key={result.label} className="flex flex-col gap-1">
                  <span className="metal font-display text-h3 font-normal">{result.metric}</span>
                  <span className="text-small text-text-tertiary">{result.label}</span>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="border-l border-purple-500/50 pl-6">
            <p className="font-display text-h3 font-normal italic leading-snug text-platinum-200">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <footer className="mt-3 eyebrow text-text-tertiary">{study.testimonial.attribution}</footer>
          </blockquote>
        </div>
      </Reveal>
    </article>
  );
}

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import type { Service } from '@/lib/content/services';

export function ServiceDeepSection({ service, isLast }: { service: Service; isLast: boolean }) {
  return (
    <div id={service.slug} className={`scroll-mt-32 py-16 ${!isLast ? 'border-b border-line-subtle' : ''}`}>
      <Reveal className="flex flex-col gap-10">
        <div className="flex items-baseline gap-4">
          <span className="numeral text-lead">{service.numeral}</span>
          <h2 className="font-display text-h2 font-normal leading-tight text-text-primary">
            {service.title}
          </h2>
        </div>

        <p className="max-w-prose text-lead leading-relaxed text-text-secondary">
          {service.summary}
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow text-platinum-500">Who it&rsquo;s for</h3>
            <p className="text-body leading-relaxed text-text-secondary">{service.whoFor}</p>

            <h3 className="eyebrow mt-4 text-platinum-500">Typical outcomes</h3>
            <ul className="flex flex-col gap-2">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-body text-text-secondary">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="eyebrow text-platinum-500">What&rsquo;s included</h3>
            <ul className="flex flex-col gap-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
                  <Check size={18} strokeWidth={1.25} className="mt-0.5 shrink-0 text-purple-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="rounded-lg border border-line-subtle bg-bg-raised p-8">
          <p className="font-display text-h3 font-normal italic leading-snug text-platinum-200">
            &ldquo;{service.caseSnippet.quote}&rdquo;
          </p>
          <footer className="mt-4 eyebrow text-text-tertiary">
            {service.caseSnippet.attribution}
          </footer>
        </blockquote>

        <div>
          <Button href="/contact" variant="secondary">
            Discuss this for your business
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

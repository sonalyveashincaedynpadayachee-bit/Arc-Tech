import { founderVitals } from '@/lib/content/founder';

export function FounderVitals() {
  return (
    <div className="rounded-lg border border-line-subtle bg-bg-raised">
      <div className="border-b border-line-subtle px-6 py-4">
        <span className="eyebrow text-platinum-500">The Basics</span>
      </div>
      <dl className="flex flex-col divide-y divide-line-subtle">
        {founderVitals.map((item) => (
          <div key={item.label} className="flex items-baseline justify-between gap-6 px-6 py-4">
            <dt className="eyebrow shrink-0 text-text-tertiary">{item.label}</dt>
            <dd className="text-right text-small text-text-secondary">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

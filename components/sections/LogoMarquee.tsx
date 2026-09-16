import { Marquee } from '@/components/ui/Marquee';

const clients = [
  'Meridian Group', 'Northfield & Co.', 'Vantage Health', 'Copperline',
  'Oswell Partners', 'Barrow Retail', 'Fielder & James', 'Amberline Labs',
];

export function LogoMarquee() {
  return (
    <div className="border-y border-line-subtle bg-bg-base py-12">
      <Marquee>
        {clients.map((client) => (
          <span
            key={client}
            className="px-8 font-display text-2xl italic tracking-tight text-platinum-400 opacity-50"
          >
            {client}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

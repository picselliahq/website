import Link from 'next/link';
import type { FeatureCTA } from '@/lib/blog-cta';

export default function BlogCTA({ ctas }: { ctas: FeatureCTA[] }) {
  if (ctas.length === 0) return null;

  return (
    <div
      className="rounded-2xl p-8 mt-12"
      style={{
        backgroundColor: 'var(--secondary-system-background)',
        border: '1px solid var(--border)',
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-6"
        style={{ color: 'var(--picsellia-green)' }}
      >
        Related from Picsellia
      </p>

      <div className={`grid gap-6 ${ctas.length > 1 ? 'md:grid-cols-2' : ''}`}>
        {ctas.map((cta) => (
          <div key={cta.href} className="flex flex-col gap-3">
            <h3 className="text-base font-semibold text-label">{cta.title}</h3>
            <p className="text-sm text-secondary flex-1">{cta.description}</p>
            <Link
              href={cta.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: 'var(--picsellia-green)' }}
            >
              {cta.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

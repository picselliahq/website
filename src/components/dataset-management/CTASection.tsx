import Link from 'next/link';

const ctaStats = [
  { value: '50M+', label: 'Images versioned' },
  { value: '∞', label: 'Version history' },
  { value: '100%', label: 'Reproducibility' },
  { value: '0', label: 'Data loss' },
];

const trustIndicators = [
  'No credit card required',
  '14-day free trial',
  'Unlimited versions',
];

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="card p-0 overflow-hidden relative">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(var(--picsellia-blue) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-blue) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-blue)]/10 border border-[var(--picsellia-blue)]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-blue)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-blue)]"></span>
              </span>
              <span className="text-xs font-mono text-[var(--picsellia-blue)]">VERSION_CONTROL</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
              Ready to version your datasets?
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
              Free trial, no credit card. Start versioning your datasets today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/trial" className="btn-primary px-8 py-3 text-base">
                Start Free Trial
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/demo" className="btn-secondary px-8 py-3 text-base">
                Schedule Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--tertiary-label)]">
              {trustIndicators.map((indicator) => (
                <div key={indicator} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
              {ctaStats.map((stat) => (
                <div key={stat.label} className="p-4 md:p-6 text-center">
                  <div className="text-lg md:text-xl font-bold text-[var(--label)] font-mono">{stat.value}</div>
                  <div className="text-xs text-[var(--tertiary-label)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

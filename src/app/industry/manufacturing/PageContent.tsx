'use client';

import Image from 'next/image';
import Link from 'next/link';

// Manufacturing-specific use cases
const useCases = [
  {
    title: 'Surface Defect Detection',
    description: "Detect scratches, dents, discoloration, and surface anomalies with sub-millimeter precision. Trained on your exact defect taxonomy.",
    image: '/images/use-cases/manufacturing/anomaly-detection.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    stats: { value: '99.5%', label: 'Detection accuracy' },
  },
  {
    title: 'Assembly Verification',
    description: "Verify component presence, orientation, and positioning. Catch assembly errors before they reach the next station.",
    image: '/images/use-cases/manufacturing/assembly-verification.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: { value: '0.1%', label: 'Escape rate' },
  },
  {
    title: 'Packaging Inspection',
    description: "Validate labels, seals, barcodes, and packaging integrity. Ensure every product ships correctly.",
    image: '/images/use-cases/manufacturing/packaging-inspection.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    stats: { value: '100%', label: 'Traceability' },
  },
  {
    title: 'Safety Compliance',
    description: "Monitor PPE usage, restricted zones, and safety protocols. Protect workers with automated visual checks.",
    image: '/images/use-cases/manufacturing/safety-compliance.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stats: { value: '24/7', label: 'Monitoring' },
  },
];

// Quality-first differentiators
const qualityPillars = [
  {
    title: 'Multi-reviewer workflows',
    description: 'Every label is validated by multiple experts. Consensus ensures accuracy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Golden test datasets',
    description: 'Benchmark every model version against curated edge cases before deployment.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Per-defect metrics',
    description: 'Track precision and recall for each defect type. No blind spots.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Human-level benchmarks',
    description: 'Compare model performance against your best inspectors. Prove ROI.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--system-blue)]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-indigo)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <svg className="w-4 h-4 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-sm font-medium text-[var(--system-blue)]">Manufacturing</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            Visual inspection at <span className="text-[var(--system-blue)]">human-level precision</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            Quality AI that matches your best inspectors. Built on high-quality labels, rigorous evaluation, and secure on-premise deployment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/demo" className="btn-primary px-6 py-3">
              Request Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/use-cases/defects-detection" className="btn-secondary px-6 py-3">
              See Defect Detection
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-16 relative">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
              <div className="relative h-[400px]">
                <Image
                  src="/images/use-cases/manufacturing/manufacturing-slider-1.jpg"
                  alt="Manufacturing inspection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 via-transparent to-transparent" />

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Detection Accuracy</div>
                        <div className="text-lg font-bold text-[var(--system-blue)]">99.5%</div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">vs Human Inspector</div>
                        <div className="text-lg font-bold text-[var(--picsellia-green)]">+12%</div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Deployment</div>
                        <div className="text-lg font-bold text-[var(--system-indigo)]">On-Premise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '99.5%', label: 'Defect detection rate' },
              { value: '<0.1%', label: 'False positive rate' },
              { value: '80%', label: 'Inspection cost reduction' },
              { value: '100%', label: 'On-premise capable' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--system-blue)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality-First Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Quality First
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Precision starts with perfect labels
              </h2>
              <p className="text-[var(--secondary-label)] text-lg mb-8">
                In manufacturing, a false positive stops the line. A missed defect ships to customers.
                That's why we obsess over annotation quality — multi-reviewer consensus, expert validation,
                and golden test sets that catch edge cases before they reach production.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {qualityPillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center flex-shrink-0 text-[var(--system-indigo)]">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--label)] mb-1">{pillar.title}</h3>
                      <p className="text-sm text-[var(--secondary-label)]">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[var(--label)]">Label Quality Report</h3>
                  <span className="px-3 py-1 rounded-full bg-[var(--picsellia-green)]/10 text-xs font-medium text-[var(--picsellia-green)]">
                    Production Ready
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[var(--secondary-label)]">Inter-annotator agreement</span>
                      <span className="font-medium text-[var(--label)]">96.8%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--tertiary-system-background)]">
                      <div className="h-2 rounded-full bg-[var(--picsellia-green)]" style={{ width: '96.8%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[var(--secondary-label)]">Expert validation rate</span>
                      <span className="font-medium text-[var(--label)]">100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--tertiary-system-background)]">
                      <div className="h-2 rounded-full bg-[var(--system-blue)]" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[var(--secondary-label)]">Edge cases covered</span>
                      <span className="font-medium text-[var(--label)]">847 samples</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--tertiary-system-background)]">
                      <div className="h-2 rounded-full bg-[var(--system-indigo)]" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border)]">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--label)]">12,450</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Total images</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--label)]">8</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Defect classes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--label)]">3</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Reviewers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Scenarios Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Evaluation
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Test before you trust
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Every model is evaluated against curated test scenarios before deployment. Track per-defect metrics, compare to human baselines, and catch regressions early.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Scenario Testing Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Golden Test Sets</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">Curated edge cases</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--secondary-label)]">
                  Build test datasets with your hardest cases — lighting variations, rare defects, borderline calls. Every model version runs against them before promotion.
                </p>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="space-y-3">
                  {['Lighting edge cases', 'Rare defect coverage', 'Borderline samples', 'Historical failures'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Per-Defect Metrics Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Per-Class Metrics</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">No blind spots</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--secondary-label)]">
                  Overall accuracy hides weak spots. Track precision, recall, and F1 for each defect type. Know exactly where your model excels and where it struggles.
                </p>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--label)]">Scratch</span>
                    <span className="text-sm font-mono text-[var(--picsellia-green)]">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--label)]">Dent</span>
                    <span className="text-sm font-mono text-[var(--picsellia-green)]">98.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--label)]">Discoloration</span>
                    <span className="text-sm font-mono text-[var(--system-orange)]">94.1%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--label)]">Contamination</span>
                    <span className="text-sm font-mono text-[var(--picsellia-green)]">97.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Human Benchmark Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Human Baseline</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">Prove the ROI</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--secondary-label)]">
                  Have your inspectors label the same test set. Compare model performance to human accuracy. Quantify the improvement you're getting.
                </p>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--secondary-label)]">87.3%</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Human avg</div>
                  </div>
                  <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--picsellia-green)]">99.5%</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Model</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 text-center">
                  <span className="text-sm font-medium text-[var(--picsellia-green)]">+12.2% improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[var(--system-teal)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Built for the production floor
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                From surface inspection to assembly verification, Picsellia powers quality control across manufacturing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card p-0 overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-[var(--black)]/20 to-transparent" />

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white">{useCase.stats.value}</div>
                    <div className="text-xs text-white/70">{useCase.stats.label}</div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[var(--system-blue)] flex items-center justify-center text-white">
                    {useCase.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2">{useCase.title}</h3>
                  <p className="text-sm text-[var(--secondary-label)]">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring & Deployment Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Monitor in production. Deploy on-premise.
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Asynchronous monitoring catches drift without blocking the line. On-premise deployment keeps your data where it belongs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Monitoring Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                    <Image src="/images/community/icons/model-monitoring.svg" alt="Monitoring" width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--label)]">Asynchronous Monitoring</h3>
                    <p className="text-sm text-[var(--tertiary-label)]">Non-blocking production insights</p>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6">
                  Your inspection line runs at full speed. Meanwhile, Picsellia samples predictions,
                  tracks confidence trends, and flags anomalies — without adding latency to your process.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Sampling rate', value: 'Configurable' },
                    { label: 'Trend analysis', value: 'Hourly' },
                    { label: 'Drift alerts', value: 'Real-time' },
                    { label: 'Reports', value: 'Daily' },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-lg bg-[var(--tertiary-system-background)]">
                      <div className="text-sm font-medium text-[var(--label)]">{item.value}</div>
                      <div className="text-xs text-[var(--tertiary-label)]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-[var(--secondary-label)]">
                    Batch review suspicious predictions at end of shift
                  </span>
                </div>
              </div>
            </div>

            {/* On-Premise Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--system-indigo)]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--label)]">On-Premise Deployment</h3>
                    <p className="text-sm text-[var(--tertiary-label)]">Your data stays in your factory</p>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6">
                  Manufacturing data is sensitive — product designs, defect patterns, production volumes.
                  Deploy Picsellia entirely on your infrastructure. Air-gapped environments supported.
                </p>
                <div className="space-y-3">
                  {[
                    'Full platform on your servers',
                    'No cloud dependency required',
                    'Air-gapped network support',
                    'RBAC and audit logging',
                    'Your security policies enforced',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm text-[var(--secondary-label)]">
                    ISO 27001:2022 certified.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Deployment Architecture */}
          <div className="mt-12 card p-8">
            <h3 className="text-lg font-semibold text-[var(--label)] mb-6 text-center">Deployment Architecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)] text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--label)] mb-2">Edge Inference</h4>
                <p className="text-xs text-[var(--secondary-label)]">
                  Models run on industrial PCs at each inspection station. Sub-100ms latency.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)] text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--label)] mb-2">On-Prem Server</h4>
                <p className="text-xs text-[var(--secondary-label)]">
                  Picsellia platform runs on your data center. Training, labeling, versioning — all local.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)] text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--label)] mb-2">Air-Gap Ready</h4>
                <p className="text-xs text-[var(--secondary-label)]">
                  Zero internet required. Sync updates via secure media when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--system-blue)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--system-blue)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--system-blue)]">QUALITY_FIRST</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                Ready to outperform human inspection?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                See how Picsellia delivers 99.5% defect detection with on-premise deployment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo" className="btn-primary px-8 py-3 text-base">
                  Request Demo
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary px-8 py-3 text-base">
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
                {[
                  { value: '99.5%', label: 'Detection rate' },
                  { value: '<0.1%', label: 'False positives' },
                  { value: 'On-Prem', label: 'Deployment' },
                  { value: 'ISO 27001', label: 'Certified' },
                ].map((stat) => (
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
    </>
  );
}

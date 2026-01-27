import Link from 'next/link';

const capabilities = [
  {
    category: 'Data',
    tagline: 'Organize & prepare',
    description: 'Centralize all your visual data with built-in versioning, smart labeling, and automated pipelines.',
    color: 'var(--picsellia-green)',
    href: '/datalake',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    items: [
      { name: 'Datalake', description: 'Unified storage for images, videos & 3D' },
      { name: 'Dataset Versioning', description: 'Git-like version control for data' },
      { name: 'Smart Labeling', description: 'AI-assisted annotation tools' },
      { name: 'Augmentation', description: 'Automated data pipelines' },
    ],
  },
  {
    category: 'Train',
    tagline: 'Build & experiment',
    description: 'Train models with full experiment tracking, AutoML optimization, and seamless framework integration.',
    color: 'var(--picsellia-blue)',
    href: '/ai-laboratory',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    items: [
      { name: 'Experiment Tracking', description: 'Log metrics & parameters' },
      { name: 'AutoML', description: 'Automated hyperparameter search' },
      { name: 'Model Registry', description: 'Version & manage models' },
      { name: 'Custom Training', description: 'PyTorch & TensorFlow support' },
    ],
  },
  {
    category: 'Deploy',
    tagline: 'Ship & scale',
    description: 'Deploy models anywhere with one click. Auto-scaling infrastructure from cloud to edge devices.',
    color: 'var(--system-orange)',
    href: '/model-deployment',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
      </svg>
    ),
    items: [
      { name: 'One-Click Deploy', description: 'Cloud or edge in seconds' },
      { name: 'Auto-Scaling', description: 'Handle traffic spikes' },
      { name: 'A/B Testing', description: 'Compare model versions' },
      { name: 'Edge Support', description: 'NVIDIA Jetson & more' },
    ],
  },
  {
    category: 'Monitor',
    tagline: 'Observe & improve',
    description: 'Track performance in production with real-time metrics, drift detection, and automated retraining.',
    color: 'var(--system-indigo)',
    href: '/model-monitoring',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    items: [
      { name: 'Performance Metrics', description: 'Real-time tracking' },
      { name: 'Drift Detection', description: 'Catch issues early' },
      { name: 'Alerting', description: 'Smart notifications' },
      { name: 'Auto-Retraining', description: 'Continuous improvement' },
    ],
  },
];

export default function Features() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Built for the complete ML lifecycle
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              Every tool you need to go from raw data to production-ready models, all in one unified platform.
            </p>
          </div>
          <Link href="/product-overview" className="btn-secondary">
            Explore platform
          </Link>
        </div>

        {/* Lifecycle Visual */}
        <div className="mb-12 p-6 rounded-2xl border border-[var(--border)] bg-[var(--secondary-system-background)]">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
            {capabilities.map((cap, index) => (
              <div key={cap.category} className="flex items-center">
                <div className="flex items-center gap-3 px-4 py-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `color-mix(in srgb, ${cap.color} 15%, transparent)`, color: cap.color }}
                  >
                    {cap.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--label)]">{cap.category}</div>
                    <div className="text-xs text-[var(--tertiary-label)]">{cap.tagline}</div>
                  </div>
                </div>
                {index < capabilities.length - 1 && (
                  <svg className="w-6 h-6 text-[var(--border)] hidden md:block mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {capabilities.map((section, sectionIndex) => (
            <Link
              key={section.category}
              href={section.href}
              className={`group ${sectionIndex === 0 ? 'md:row-span-2' : ''}`}
            >
              <div className={`card p-0 overflow-hidden h-full ${sectionIndex === 0 ? 'min-h-[400px]' : ''}`}>
                {sectionIndex === 0 ? (
                  // Featured card - Data
                  <div className="h-full flex flex-col">
                    <div
                      className="p-8 flex-1 relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${section.color} 10%, transparent), color-mix(in srgb, ${section.color} 5%, transparent))` }}
                    >
                      {/* Decorative grid */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `linear-gradient(${section.color} 1px, transparent 1px), linear-gradient(90deg, ${section.color} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                      }} />

                      <div className="relative">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                          style={{ backgroundColor: `color-mix(in srgb, ${section.color} 20%, transparent)`, color: section.color }}
                        >
                          {section.icon}
                        </div>
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: section.color }}>
                          {section.tagline}
                        </div>
                        <h3 className="text-2xl font-semibold text-[var(--label)] mb-3 group-hover:text-[var(--picsellia-green)] transition-colors">
                          {section.category}
                        </h3>
                        <p className="text-[var(--secondary-label)] mb-6">
                          {section.description}
                        </p>
                      </div>

                      {/* Decorative circles */}
                      <div className="absolute -bottom-16 -right-16 w-48 h-48 border rounded-full opacity-20" style={{ borderColor: section.color }} />
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 border rounded-full opacity-30" style={{ borderColor: section.color }} />
                    </div>
                    <div className="p-6 border-t border-[var(--border)]">
                      <ul className="grid grid-cols-2 gap-3">
                        {section.items.map((item) => (
                          <li key={item.name} className="flex items-start gap-2">
                            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: section.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-[var(--secondary-label)]">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // Regular cards
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ backgroundColor: `color-mix(in srgb, ${section.color} 15%, transparent)`, color: section.color }}
                      >
                        {section.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--picsellia-green)] group-hover:bg-[var(--picsellia-green)] transition-all">
                        <svg className="w-4 h-4 text-[var(--secondary-label)] group-hover:text-[var(--white)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: section.color }}>
                      {section.tagline}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                      {section.category}
                    </h3>
                    <p className="text-sm text-[var(--secondary-label)] mb-4 flex-1">
                      {section.description}
                    </p>

                    <div className="pt-4 border-t border-[var(--border)]">
                      <ul className="flex flex-wrap gap-2">
                        {section.items.map((item) => (
                          <li
                            key={item.name}
                            className="text-xs px-2 py-1 rounded-md bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]"
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '16+', label: 'Supported frameworks' },
            { value: '50+', label: 'Pre-built models' },
            { value: '99.9%', label: 'Platform uptime' },
            { value: '<100ms', label: 'Inference latency' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-[var(--label)] mb-1">{stat.value}</div>
              <div className="text-xs text-[var(--tertiary-label)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

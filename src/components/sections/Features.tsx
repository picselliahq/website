import Image from 'next/image';
import Link from 'next/link';

const capabilities = [
  {
    category: 'Data',
    tagline: 'Organize & prepare',
    description: 'Store images and videos in one place. Version your datasets, label them, and pipe them into training.',
    color: 'var(--picsellia-green)',
    href: '/datalake',
    icon: '/images/community/icons/datalake.svg',
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
    description: 'Run experiments, compare results, and iterate. Works with PyTorch, TensorFlow, and Ultralytics out of the box.',
    color: 'var(--picsellia-blue)',
    href: '/ai-laboratory',
    icon: '/images/community/icons/experiment-tracking.svg',
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
    description: 'Push models to cloud endpoints or edge devices. Traffic spikes are handled automatically.',
    color: 'var(--system-orange)',
    href: '/model-deployment',
    icon: '/images/community/icons/serverless-deployment.svg',
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
    description: 'Watch how your models perform in production. Get alerts when accuracy drops, retrain when needed.',
    color: 'var(--system-indigo)',
    href: '/model-monitoring',
    icon: '/images/community/icons/model-monitoring.svg',
    items: [
      { name: 'Performance Metrics', description: 'Real-time tracking' },
      { name: 'Drift Detection', description: 'Catch issues early' },
      { name: 'Alerting', description: 'Get notified' },
      { name: 'Auto-Retraining', description: 'Close the loop' },
    ],
  },
];

export default function Features() {
  return (
    <section className="py-24 border-t border-[var(--border)] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(51, 171, 104, 0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(97, 135, 226, 0.03) 0%, transparent 70%)' }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              One platform, four stages
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              Data goes in, predictions come out. Here is what happens in between.
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
                    style={{ backgroundColor: `color-mix(in srgb, ${cap.color} 15%, transparent)` }}
                  >
                    <Image src={cap.icon} alt={cap.category} width={24} height={24} />
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
                          style={{ backgroundColor: `color-mix(in srgb, ${section.color} 20%, transparent)` }}
                        >
                          <Image src={section.icon} alt={section.category} width={32} height={32} />
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
                        style={{ backgroundColor: `color-mix(in srgb, ${section.color} 15%, transparent)` }}
                      >
                        <Image src={section.icon} alt={section.category} width={28} height={28} />
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

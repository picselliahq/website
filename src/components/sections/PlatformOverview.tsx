import Link from 'next/link';

const features = [
  {
    title: 'Data Management',
    description: 'Centralize, organize, and version all your computer vision data in one secure platform.',
    video: '/videos/datalake.webm',
    href: '/datalake',
  },
  {
    title: 'Data Ingestion',
    description: 'Import data from any source with smart pipelines and automatic preprocessing.',
    video: '/videos/data ingestion.webm',
    href: '/dataset-management',
  },
  {
    title: 'Data Curation',
    description: 'Clean, filter, and curate your datasets with AI-assisted tools for quality control.',
    video: '/videos/data curation.webm',
    href: '/labeling-tool',
  },
  {
    title: 'Experiment Tracking',
    description: 'Track experiments, compare models, and reproduce results with full lineage.',
    video: '/videos/experiment tracking.webm',
    href: '/experiment-tracking',
  },
];

export default function PlatformOverview() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Everything you need to ship vision AI
          </h2>
          <p className="text-[var(--secondary-label)]">
            A complete platform that covers the entire ML lifecycle, from data preparation to production monitoring.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href} className="group">
              <div className="card overflow-hidden h-full">
                {/* Video */}
                <div className="aspect-video bg-[var(--tertiary-system-background)] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={feature.video} type="video/webm" />
                  </video>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[var(--secondary-label)]">
                        {feature.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-[var(--system-gray-3)] group-hover:text-[var(--picsellia-green)] group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/product-overview" className="text-sm text-[var(--secondary-label)] hover:text-[var(--picsellia-green)] transition-colors inline-flex items-center gap-2">
            View all features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

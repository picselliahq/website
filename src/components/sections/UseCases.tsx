import Link from 'next/link';

const useCases = [
  {
    title: 'Defect Detection',
    industry: 'Manufacturing',
    description: 'Automated visual inspection for quality control. Detect surface defects, assembly errors, and anomalies in real-time on production lines.',
    href: '/use-cases/defects-detection',
    stat: '99.5%',
    statLabel: 'Detection accuracy',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    featured: true,
  },
  {
    title: 'Document Processing',
    industry: 'Enterprise',
    description: 'Intelligent document analysis and data extraction at scale. Automate invoice processing, form recognition, and compliance checks.',
    href: '/use-cases/document-processing',
    stat: '10x',
    statLabel: 'Faster processing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Infrastructure Inspection',
    industry: 'Energy',
    description: 'Remote visual inspection using drone and satellite imagery. Monitor pipelines, power lines, and solar farms automatically.',
    href: '/use-cases/remote-visual-inspection',
    stat: '80%',
    statLabel: 'Cost reduction',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Sports Analytics',
    industry: 'Sports Tech',
    description: 'Real-time player tracking and game analysis. Extract performance metrics and tactical insights from broadcast footage.',
    href: '/use-cases/live-sport-analysis',
    stat: '60fps',
    statLabel: 'Real-time tracking',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    title: 'Waste Sorting',
    industry: 'Sustainability',
    description: 'AI-powered waste classification for recycling facilities. Identify materials on conveyor belts for automated sorting.',
    href: '/industry/waste-management',
    stat: '95%',
    statLabel: 'Sorting accuracy',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
    ),
  },
];

export default function UseCases() {
  const featured = useCases.find(uc => uc.featured);
  const others = useCases.filter(uc => !uc.featured);

  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Proven across industries
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              See how leading companies use Picsellia to solve real-world computer vision challenges.
            </p>
          </div>
          <Link href="/use-cases" className="btn-secondary">
            View all use cases
          </Link>
        </div>

        {/* Featured Use Case */}
        {featured && (
          <Link href={featured.href} className="group block mb-8">
            <div className="card p-0 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Visual Side */}
                <div className="relative bg-gradient-to-br from-[var(--picsellia-green)]/10 to-[var(--picsellia-blue)]/10 p-8 md:p-12 flex flex-col justify-between min-h-[300px]">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--picsellia-green)]/20 flex items-center justify-center text-[var(--picsellia-green)]">
                    {featured.icon}
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-[var(--label)] mb-1">
                      {featured.stat}
                    </div>
                    <div className="text-sm text-[var(--secondary-label)]">
                      {featured.statLabel}
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-1/2 right-8 w-32 h-32 border border-[var(--border)] rounded-full opacity-30" />
                  <div className="absolute top-1/2 right-16 w-48 h-48 border border-[var(--border)] rounded-full opacity-20" />
                </div>
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs text-[var(--picsellia-green)] uppercase tracking-wider mb-3 font-medium">
                    {featured.industry} — Featured
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--label)] mb-4 group-hover:text-[var(--picsellia-green)] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-[var(--secondary-label)] mb-6 leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="flex items-center text-sm text-[var(--secondary-label)] group-hover:text-[var(--picsellia-green)] transition-colors">
                    Read case study
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Use Cases - Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((useCase, index) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="card p-6 h-full flex flex-col relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--picsellia-green)]/5 to-transparent rounded-bl-full" />

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[var(--tertiary-system-background)] flex items-center justify-center text-[var(--secondary-label)] group-hover:text-[var(--picsellia-green)] group-hover:bg-[var(--picsellia-green)]/10 transition-all mb-4">
                  {useCase.icon}
                </div>

                {/* Industry tag */}
                <span className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-2">
                  {useCase.industry}
                </span>

                {/* Title */}
                <h3 className="text-lg font-medium text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--secondary-label)] flex-1 mb-4">
                  {useCase.description}
                </p>

                {/* Stat */}
                <div className="flex items-end justify-between pt-4 border-t border-[var(--border)]">
                  <div>
                    <div className="text-2xl font-bold text-[var(--label)]">{useCase.stat}</div>
                    <div className="text-xs text-[var(--tertiary-label)]">{useCase.statLabel}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--picsellia-green)] group-hover:bg-[var(--picsellia-green)] transition-all">
                    <svg className="w-4 h-4 text-[var(--secondary-label)] group-hover:text-[var(--white)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

const useCases = [
  {
    title: 'Defect Detection',
    industry: 'Manufacturing',
    description: 'Spot surface defects and assembly errors on the production line. Cameras check every part, every time.',
    href: '/use-cases/defects-detection',
    stat: '99.5%',
    statLabel: 'Detection accuracy',
    image: '/images/use-cases/manufacturing/anomaly-detection.jpg',
    featured: true,
  },
  {
    title: 'Crop Monitoring',
    industry: 'Agriculture',
    description: 'Fly a drone over your fields, feed the images to a model, and know which plots need attention before it is visible to the eye.',
    href: '/industry/agriculture',
    stat: '30%',
    statLabel: 'Yield increase',
    image: '/images/use-cases/agriculture/crop-monitoring.jpg',
  },
  {
    title: 'Infrastructure Inspection',
    industry: 'Energy',
    description: 'Inspect pipelines, power lines, and solar panels from drone footage instead of sending people out.',
    href: '/industry/energy',
    stat: '80%',
    statLabel: 'Cost reduction',
    image: '/images/use-cases/energy/infrastructure-inspection.jpg',
  },
  {
    title: 'Assembly Verification',
    industry: 'Manufacturing',
    description: 'Check that every component is in the right place, in real time, on the line.',
    href: '/industry/manufacturing',
    stat: '60fps',
    statLabel: 'Real-time tracking',
    image: '/images/use-cases/manufacturing/assembly-verification.jpg',
  },
  {
    title: 'Waste Sorting',
    industry: 'Sustainability',
    description: 'Tell plastic from cardboard on a conveyor belt. Sorting facilities use this to automate what used to be manual.',
    href: '/industry/waste-management',
    stat: '95%',
    statLabel: 'Sorting accuracy',
    image: '/images/use-cases/waste-management/automated-segregation.jpg',
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
              What people build with it
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              Manufacturing, agriculture, energy, logistics. Different industries, same workflow.
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
                <div className="relative min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-1">
                      {featured.stat}
                    </div>
                    <div className="text-sm text-white/80">
                      {featured.statLabel}
                    </div>
                  </div>
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
              <div className="card p-0 h-full flex flex-col overflow-hidden">
                {/* Image */}
                <div className={`relative ${index === 0 ? 'h-48' : 'h-36'} overflow-hidden`}>
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white/90 uppercase tracking-wider px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm">
                    {useCase.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-lg font-medium text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--secondary-label)] flex-1 mb-4 line-clamp-2">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

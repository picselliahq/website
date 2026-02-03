import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const caseKeys = ['defectDetection', 'cropMonitoring', 'infrastructureInspection', 'assemblyVerification', 'wasteSorting'] as const;
const caseImages = {
  defectDetection: '/images/use-cases/manufacturing/anomaly-detection.jpg',
  cropMonitoring: '/images/use-cases/agriculture/crop-monitoring.jpg',
  infrastructureInspection: '/images/use-cases/energy/infrastructure-inspection.jpg',
  assemblyVerification: '/images/use-cases/manufacturing/assembly-verification.jpg',
  wasteSorting: '/images/use-cases/waste-management/automated-segregation.jpg',
};
const caseHrefs = {
  defectDetection: '/use-cases/defects-detection',
  cropMonitoring: '/industry/agriculture',
  infrastructureInspection: '/industry/energy',
  assemblyVerification: '/industry/manufacturing',
  wasteSorting: '/industry/waste-management',
};

export default function UseCases() {
  const t = useTranslations('home.useCases');

  const useCases = caseKeys.map((key, index) => ({
    title: t(`cases.${key}.title`),
    industry: t(`cases.${key}.industry`),
    description: t(`cases.${key}.description`),
    href: caseHrefs[key],
    stat: t(`cases.${key}.stat`),
    statLabel: t(`cases.${key}.statLabel`),
    image: caseImages[key],
    featured: index === 0,
  }));

  const featured = useCases.find(uc => uc.featured);
  const others = useCases.filter(uc => !uc.featured);

  return (
    <section className="py-24 border-t border-[var(--border)] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(51, 171, 104, 0.03) 0%, transparent 70%)' }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              {t('description')}
            </p>
          </div>
          <Link href="/use-cases" className="btn-secondary">
            {t('viewAllUseCases')}
          </Link>
        </div>

        {/* Featured Use Case */}
        {featured && (
          <Link href={featured.href as any} className="group block mb-8">
            <div className="card p-0 overflow-hidden">
              <div className="grid md:grid-cols-2">
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
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs text-[var(--picsellia-green)] uppercase tracking-wider mb-3 font-medium">
                    {featured.industry} — {t('featured')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--label)] mb-4 group-hover:text-[var(--picsellia-green)] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-[var(--secondary-label)] mb-6 leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="flex items-center text-sm text-[var(--secondary-label)] group-hover:text-[var(--picsellia-green)] transition-colors">
                    {t('readCaseStudy')}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Use Cases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((useCase, index) => (
            <Link
              key={useCase.title}
              href={useCase.href as any}
              className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="card p-0 h-full flex flex-col overflow-hidden">
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
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-medium text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)] flex-1 mb-4 line-clamp-2">
                    {useCase.description}
                  </p>
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

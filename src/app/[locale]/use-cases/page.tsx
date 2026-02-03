'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const caseStudies = [
  {
    slug: 'sgs',
    company: 'SGS',
    logo: '/images/customers/sgs.svg',
    industry: 'Testing & Certification',
    headline: 'How SGS Slashed Development Time by 66%',
    description: 'SGS reduced model development from 3 days to 1 day using Picsellia for industrial inspection automation.',
    image: '/images/use-cases/manufacturing/anomaly-detection.jpg',
    stats: [
      { value: '66%', label: 'Time Saved' },
      { value: '3→1', label: 'Days per Model' },
      { value: '100+', label: 'AI Apps' },
    ],
  },
  {
    slug: 'pellencst',
    company: 'PellencST',
    logo: '/images/customers/pellenc.svg',
    industry: 'Waste Sorting Technology',
    headline: 'How PellencST Cut Time-to-Model by 90%',
    description: 'PellencST reduced model development from 6-9 months to 1 month using Picsellia for waste sorting machines.',
    image: '/images/use-cases/waste-management/automated-segregation.jpg',
    stats: [
      { value: '90%', label: 'Faster' },
      { value: '2,500+', label: 'Machines' },
      { value: '4x', label: 'Deployment' },
    ],
  },
  {
    slug: 'altaroad',
    company: 'Altaroad',
    logo: '/images/customers/altaroad.png',
    industry: 'Construction & Waste Monitoring',
    headline: 'How Altaroad Saved 50% Time Operating Models',
    description: 'Altaroad reduced data scientist time on model maintenance from 50% to 10% using Picsellia.',
    image: '/images/use-cases/waste-management/truck.jpg',
    stats: [
      { value: '50%', label: 'Time Saved' },
      { value: '150K+', label: 'Data Points' },
      { value: '4x', label: 'Faster' },
    ],
  },
  {
    slug: 'ficha',
    company: 'Ficha',
    logo: '/images/customers/ficha.png',
    industry: 'Waste Management',
    headline: 'How Ficha Accelerated Innovation in WasteTech',
    description: 'Ficha achieved 3x faster annotation and 20% weekly time savings using Picsellia for waste classification.',
    image: '/images/use-cases/waste-management/classification.jpg',
    stats: [
      { value: '3x', label: 'Faster Annotation' },
      { value: '20%', label: 'Time Saved' },
      { value: '50%', label: 'Shorter Cycles' },
    ],
  },
  {
    slug: 'abelio',
    company: 'Abelio',
    logo: '/images/customers/abelio.png',
    industry: 'Agriculture',
    headline: 'How Abelio Reduced Time-to-Model for Precision Agriculture',
    description: 'Abelio achieved 48-hour retraining cycles and managed terabytes of drone imagery using Picsellia.',
    image: '/images/use-cases/agriculture/field.jpg',
    stats: [
      { value: '48h', label: 'Retraining' },
      { value: '4x', label: 'Scaling' },
      { value: 'TBs', label: 'Data' },
    ],
  },
];

export default function UseCasesPage() {
  const t = useTranslations('use-cases.index');
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <span className="badge">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Customer Success Stories</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            See how teams ship <span className="text-[var(--picsellia-green)]">AI faster</span> with Picsellia
          </h1>

          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-12">
            From startups to industry leaders, discover how companies across industries use Picsellia to accelerate computer vision development.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '90%', label: 'Average time reduction' },
              { value: '5+', label: 'Industries served' },
              { value: '2,500+', label: 'Models in production' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--picsellia-green)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Link key={study.slug} href={`/use-cases/${study.slug}`} className="block group">
                <div className={`card p-0 overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'direction-rtl' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <Image
                        src={study.image}
                        alt={study.headline}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 via-transparent to-transparent" />

                      {/* Stats overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                        {study.stats.map((stat) => (
                          <div key={stat.label} className="px-3 py-2 rounded-lg bg-[var(--card)]/90 backdrop-blur-sm">
                            <div className="text-lg font-bold text-[var(--label)]">{stat.value}</div>
                            <div className="text-xs text-[var(--tertiary-label)]">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      {/* Company */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 border border-[var(--border)]">
                          <Image
                            src={study.logo}
                            alt={study.company}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--label)]">{study.company}</div>
                          <div className="text-sm text-[var(--tertiary-label)]">{study.industry}</div>
                        </div>
                      </div>

                      {/* Headline */}
                      <h2 className="text-xl md:text-2xl font-semibold text-[var(--label)] mb-3 group-hover:text-[var(--picsellia-green)] transition-colors">
                        {study.headline}
                      </h2>
                      <p className="text-[var(--secondary-label)] mb-6">
                        {study.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-sm font-medium text-[var(--picsellia-green)]">
                        Read case study
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                Ready to accelerate your CV development?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                Join industry leaders who have reduced their time-to-production by up to 90% with Picsellia.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo" className="btn-primary px-8 py-3">
                  Request Demo
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/trial" className="btn-secondary px-8 py-3">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

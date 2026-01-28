import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Customer Success Stories | Picsellia',
  description: 'Discover how leading companies use Picsellia to accelerate their computer vision development and reduce time-to-production.',
};

interface CaseStudyPreview {
  slug: string;
  company: string;
  logo: string;
  industry: string;
  headline: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

const caseStudies: CaseStudyPreview[] = [
  {
    slug: 'sgs',
    company: 'SGS',
    logo: '/images/customers/sgs.svg',
    industry: 'Testing & Certification',
    headline: 'How SGS Slashed Development Time by 66%',
    description: 'SGS reduced model development from 3 days to 1 day using Picsellia for industrial inspection automation.',
    metrics: [
      { value: '66%', label: 'Time Saved' },
      { value: '3→1', label: 'Days per Model' },
      { value: '100+', label: 'AI Apps Deployed' },
    ],
  },
  {
    slug: 'pellencst',
    company: 'PellencST',
    logo: '/images/customers/pellenc.svg',
    industry: 'Waste Sorting Technology',
    headline: 'How PellencST Cut Time-to-Model by 90%',
    description: 'PellencST reduced model development from 6-9 months to 1 month using Picsellia for waste sorting machines.',
    metrics: [
      { value: '90%', label: 'Time Reduction' },
      { value: '4x', label: 'Faster Deployment' },
      { value: '2,500+', label: 'Machines' },
    ],
  },
  {
    slug: 'altaroad',
    company: 'Altaroad',
    logo: '/images/customers/altaroad.png',
    industry: 'Construction & Waste Monitoring',
    headline: 'How Altaroad Saved 50% Time Operating Models',
    description: 'Altaroad reduced data scientist time on model maintenance from 50% to 10% using Picsellia.',
    metrics: [
      { value: '50%', label: 'Time Saved' },
      { value: '4x', label: 'Faster Deployment' },
      { value: '150K+', label: 'Data Points' },
    ],
  },
  {
    slug: 'ficha',
    company: 'Ficha',
    logo: '/images/customers/ficha.png',
    industry: 'Waste Management',
    headline: 'How Ficha Accelerated Innovation in WasteTech',
    description: 'Ficha achieved 3x faster annotation and 20% weekly time savings using Picsellia for waste classification.',
    metrics: [
      { value: '3x', label: 'Faster Annotation' },
      { value: '20%', label: 'Time Saved Weekly' },
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
    metrics: [
      { value: '48h', label: 'Retraining Cycle' },
      { value: '4x', label: 'Seasonal Scaling' },
      { value: 'TBs', label: 'Data Managed' },
    ],
  },
];

const industries = [
  { name: 'All', count: caseStudies.length },
  { name: 'Waste Management', count: 3 },
  { name: 'Agriculture', count: 1 },
  { name: 'Testing & Certification', count: 1 },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--picsellia-green)] mb-4">
              Customer Success Stories
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[var(--foreground)] mb-6 leading-tight">
              See how teams ship AI faster with Picsellia
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              From startups to industry leaders, discover how companies across industries
              use Picsellia to accelerate computer vision development and reduce time-to-production.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-[var(--border)]">
            <div>
              <div className="text-3xl font-semibold text-[var(--foreground)]">90%</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">Average time reduction</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[var(--foreground)]">5+</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">Industries served</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[var(--foreground)]">2,500+</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">Models in production</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[var(--foreground)]">TBs</div>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">Data managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, index) => (
              <button
                key={industry.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]'
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/use-cases/${study.slug}`}
                className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--foreground)]/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                      <Image
                        src={study.logo}
                        alt={study.company}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">{study.company}</h3>
                      <p className="text-sm text-[var(--muted-foreground)]">{study.industry}</p>
                    </div>
                  </div>
                  <span className="text-[var(--muted-foreground)] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--picsellia-green)] transition-colors">
                  {study.headline}
                </h2>
                <p className="text-[var(--muted-foreground)] text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-6 pt-6 border-t border-[var(--border)]">
                  {study.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="text-lg font-semibold text-[var(--foreground)]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)]">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[var(--muted)] rounded-2xl p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)] mb-4">
              Ready to accelerate your CV development?
            </h2>
            <p className="text-[var(--muted-foreground)] mb-8 max-w-xl mx-auto">
              Join industry leaders who have reduced their time-to-production by up to 90% with Picsellia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary">
                Request a demo
              </Link>
              <Link href="/trial" className="btn-secondary">
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

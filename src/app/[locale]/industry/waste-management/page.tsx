'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Waste-specific use cases
const useCases = [
  {
    title: 'Automated Waste Sorting',
    description: 'Classify materials on conveyor belts in real-time. PET, HDPE, cardboard, aluminum — your model learns to distinguish them all, even as packaging evolves.',
    image: '/images/use-cases/waste-management/automated-segregation.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    stats: { value: '95%', label: 'Classification accuracy' },
  },
  {
    title: 'Contamination Detection',
    description: 'Spot contaminated recyclables before they ruin an entire batch. Identify food residue, mixed materials, and non-recyclable items in the stream.',
    image: '/images/use-cases/waste-management/classification.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    stats: { value: '60%', label: 'Less contamination' },
  },
  {
    title: 'Fill Level Monitoring',
    description: 'Track container fill levels across your network. Optimize collection routes based on actual need, not fixed schedules.',
    image: '/images/use-cases/waste-management/overflow-prevention.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stats: { value: '30%', label: 'Fewer truck runs' },
  },
  {
    title: 'Material Composition',
    description: "Analyze waste streams to understand what's coming through. Generate reports for regulatory compliance and recycling optimization.",
    image: '/images/use-cases/waste-management/logistical-analysis.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    stats: { value: '100%', label: 'Traceability' },
  },
];

// The continuous learning challenges
const challenges = [
  {
    title: 'New packaging every week',
    description: "Brands redesign, seasonal editions launch, new materials enter the market. Your model trained on last year's packaging is already outdated.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Regional variations',
    description: 'Products in France differ from Germany. Local brands, different recycling symbols, varying material compositions across regions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Mixed & damaged items',
    description: 'Crushed cans, torn labels, multi-layer packaging. Real-world waste looks nothing like pristine training images.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: 'Model drift over time',
    description: "A model that worked great in January underperforms by June. Without monitoring, you won't know until sorting quality drops.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
];

export default function WasteManagementPage() {
  const t = useTranslations('industries.wasteManagement');
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-teal)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Waste Management</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            AI that keeps up with <span className="text-[var(--picsellia-green)]">changing waste streams</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            Packaging changes. Materials evolve. Your AI should too. Build waste sorting models that continuously learn and adapt.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/demo" className="btn-primary px-6 py-3">
              Request Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/use-cases" className="btn-secondary px-6 py-3">
              See Use Cases
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-16 relative">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
              <div className="relative h-[400px]">
                <Image
                  src="/images/use-cases/waste-management/truck.jpg"
                  alt="Waste sorting facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 via-transparent to-transparent" />

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Model Updates</div>
                        <div className="text-lg font-bold text-[var(--label)]">Weekly</div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-teal)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--system-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Classification</div>
                        <div className="text-lg font-bold text-[var(--system-teal)]">95.2%</div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Drift Monitoring</div>
                        <div className="text-lg font-bold text-[var(--system-orange)]">24/7</div>
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
              { value: '50M+', label: 'Items classified daily' },
              { value: '95%', label: 'Sorting accuracy' },
              { value: '40%', label: 'Cost reduction' },
              { value: '<50ms', label: 'Classification speed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--picsellia-green)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Your training data is already outdated
              </h2>
              <p className="text-[var(--secondary-label)] text-lg mb-8">
                Static models don't work in waste management. New packaging hits shelves every week.
                Seasonal products come and go. Brand redesigns happen overnight. Your sorting AI needs
                to adapt — or accuracy plummets.
              </p>

              <div className="space-y-6">
                {challenges.map((challenge) => (
                  <div key={challenge.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0 text-[var(--system-orange)]">
                      {challenge.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--label)] mb-1">{challenge.title}</h3>
                      <p className="text-sm text-[var(--secondary-label)]">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 bg-gradient-to-br from-[var(--system-orange)]/5 to-transparent">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-[var(--system-orange)] mb-2">73%</div>
                  <div className="text-lg text-[var(--label)]">of waste AI projects fail</div>
                  <div className="text-sm text-[var(--tertiary-label)] mt-2">due to model degradation over time</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--tertiary-system-background)]">
                    <span className="text-sm text-[var(--secondary-label)]">Model trained</span>
                    <span className="text-sm font-medium text-[var(--picsellia-green)]">January</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--tertiary-system-background)]">
                    <span className="text-sm text-[var(--secondary-label)]">New products launched</span>
                    <span className="text-sm font-medium text-[var(--system-orange)]">+2,400/month</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--tertiary-system-background)]">
                    <span className="text-sm text-[var(--secondary-label)]">Accuracy by June</span>
                    <span className="text-sm font-medium text-[var(--system-red)]">↓ 15%</span>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-[var(--system-red)]/10 border border-[var(--system-red)]/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--system-red)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-[var(--system-red)]">Without continuous learning</div>
                      <div className="text-xs text-[var(--secondary-label)]">Your sorting line misclassifies thousands of items daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning Architecture */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Continuous learning, not one-time training
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Picsellia creates a closed loop: monitor production, catch drift, retrain, and redeploy — automatically.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="card p-8 md:p-12">
            {/* Circular Flow */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Deploy & Monitor',
                  description: 'Models run on your sorting line. Every prediction is logged with confidence scores.',
                  color: 'var(--picsellia-green)',
                  icon: '/images/community/icons/model-monitoring.svg',
                },
                {
                  step: 2,
                  title: 'Detect Drift',
                  description: 'When confidence drops or new item types appear, the system flags them automatically.',
                  color: 'var(--system-orange)',
                  icon: '/images/community/icons/experiment-tracking.svg',
                },
                {
                  step: 3,
                  title: 'Smart Labeling',
                  description: 'Low-confidence samples are routed to human reviewers. AI pre-labels, experts validate.',
                  color: 'var(--system-blue)',
                  icon: '/images/community/icons/labeling-tool.svg',
                },
                {
                  step: 4,
                  title: 'Retrain & Redeploy',
                  description: 'Updated models are trained on new data and deployed without downtime.',
                  color: 'var(--system-indigo)',
                  icon: '/images/community/icons/ci-cd.svg',
                },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  {/* Connector arrow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 -right-3 z-10">
                      <svg className="w-6 h-6 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  <div className="p-6 rounded-2xl bg-[var(--tertiary-system-background)] border border-[var(--border)] h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg font-bold"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.step}
                      </div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${item.color} 15%, transparent)` }}>
                        <Image src={item.icon} alt={item.title} width={22} height={22} />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--label)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--secondary-label)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Loop back indicator */}
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm font-medium text-[var(--picsellia-green)]">Continuous loop — models improve every week</span>
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
                Built for sorting facilities
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                From MRFs to collection points, Picsellia powers waste classification across the recycling chain.
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
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[var(--picsellia-green)] flex items-center justify-center text-white">
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

      {/* Platform Capabilities - Focused on Retraining */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Tools for continuous improvement
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Every feature in Picsellia is designed for iteration. Collect new samples, retrain fast, and push to production.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Monitoring Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                    <Image src="/images/community/icons/model-monitoring.svg" alt="Monitoring" width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Model Monitoring</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">Catch drift before it hurts</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--secondary-label)]">
                  Track prediction confidence in real-time. When your model sees packaging it wasn't trained on,
                  you'll know immediately — not weeks later when sorting quality drops.
                </p>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="space-y-3">
                  {['Confidence score tracking', 'Drift detection alerts', 'Performance dashboards', 'Anomaly detection'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/model-monitoring" className="inline-flex items-center gap-2 text-[var(--picsellia-green)] font-medium text-sm mt-4 hover:underline">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Active Learning Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center">
                    <Image src="/images/community/icons/labeling-tool.svg" alt="Labeling" width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Active Learning</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">Label smarter, not harder</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--secondary-label)]">
                  Low-confidence predictions are automatically queued for review. Your team labels only the samples
                  that matter — the edge cases your model struggles with.
                </p>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="space-y-3">
                  {['Uncertainty sampling', 'Pre-annotation', 'Review workflows', 'Quality assurance'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/labeling-tool" className="inline-flex items-center gap-2 text-[var(--system-orange)] font-medium text-sm mt-4 hover:underline">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Retraining Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center">
                    <Image src="/images/community/icons/ci-cd.svg" alt="Pipelines" width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Automated Pipelines</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">Retrain on schedule or trigger</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--secondary-label)]">
                  Set up pipelines that retrain models weekly, or trigger retraining when enough new samples accumulate.
                  Deploy updated models without stopping your line.
                </p>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="space-y-3">
                  {['Scheduled retraining', 'Trigger-based updates', 'A/B model testing', 'Zero-downtime deployment'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/automated-pipelines" className="inline-flex items-center gap-2 text-[var(--system-indigo)] font-medium text-sm mt-4 hover:underline">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Result Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[var(--picsellia-green)]/10 to-[var(--system-teal)]/10 border border-[var(--picsellia-green)]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-[var(--label)] mb-2">The result? Models that never go stale.</h3>
                <p className="text-[var(--secondary-label)]">
                  Keep 95%+ accuracy year-round, even as packaging changes weekly.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--picsellia-green)]">52</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Retraining cycles/year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--system-teal)]">&lt;1%</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Accuracy variance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Integration
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Connects to your sorting infrastructure
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Picsellia integrates with existing camera systems, conveyor controls, and sorting robots.
                Deploy models to edge devices or process in the cloud — your choice.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Camera Integration', description: 'Works with industrial cameras, line-scan sensors, and hyperspectral imaging' },
                  { title: 'Edge Deployment', description: 'Run inference on NVIDIA Jetson, industrial PCs, or embedded systems' },
                  { title: 'PLC & SCADA', description: 'Send classification signals to sorting actuators and robotics' },
                  { title: 'Data Pipelines', description: 'Automatic upload of production images for retraining datasets' },
                  { title: 'MES Integration', description: 'Feed classification data into manufacturing execution systems' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--system-blue)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[var(--label)]">{item.title}</h3>
                      <p className="text-sm text-[var(--secondary-label)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--system-blue)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--label)] mb-2">Edge Performance</h3>
                <p className="text-sm text-[var(--secondary-label)]">Optimized for industrial throughput</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Latency', value: '<50ms' },
                  { label: 'Throughput', value: '20 FPS' },
                  { label: 'Models', value: 'ONNX/TRT' },
                  { label: 'Uptime', value: '99.9%' },
                ].map((spec) => (
                  <div key={spec.label} className="p-4 rounded-lg bg-[var(--tertiary-system-background)] text-center">
                    <div className="text-lg font-bold font-mono text-[var(--label)]">{spec.value}</div>
                    <div className="text-xs text-[var(--tertiary-label)]">{spec.label}</div>
                  </div>
                ))}
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
                backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--picsellia-green)]">CONTINUOUS_LEARNING</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                Ready to future-proof your sorting AI?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                See how Picsellia keeps waste classification accurate — even as packaging evolves every week.
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
                  { value: '50M+', label: 'Items/day' },
                  { value: '95%+', label: 'Accuracy maintained' },
                  { value: 'Weekly', label: 'Model updates' },
                  { value: '<50ms', label: 'Classification' },
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

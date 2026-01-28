'use client';

import Image from 'next/image';
import Link from 'next/link';

// Customer logos
const customerLogos = [
  { name: 'SGS', src: '/images/customers/sgs.svg' },
  { name: 'RTE', src: '/images/customers/rte.svg' },
  { name: 'Pellenc', src: '/images/customers/pellenc.svg' },
  { name: 'Skillcorner', src: '/images/customers/skillcorner.svg' },
  { name: 'Fortil', src: '/images/customers/fortil.svg' },
  { name: 'Isarsoft', src: '/images/customers/isarsoft.svg' },
];

// Platform stages
const platformStages = [
  {
    id: 'data',
    category: 'Data',
    tagline: 'Collect & organize',
    headline: 'Stop drowning in unorganized data',
    problem: 'Your images are scattered across cloud buckets, hard drives, and legacy systems. Finding the right data for training takes days, not minutes.',
    solution: 'One source of truth for all your visual data. Connect any storage, auto-organize with AI, and find exactly what you need in seconds.',
    color: 'var(--system-blue)',
    video: '/videos/datalake.webm',
    features: [
      { name: 'Datalake', href: '/datalake' },
      { name: 'Dataset Management', href: '/dataset-management' },
    ],
    stats: { value: '10B+', label: 'Images managed' },
  },
  {
    id: 'annotate',
    category: 'Annotate',
    tagline: 'Label & review',
    headline: 'Labeling shouldn\'t be your bottleneck',
    problem: 'Manual annotation is slow, expensive, and error-prone. Your ML team is wasting time on labeling instead of building models.',
    solution: 'AI-assisted labeling cuts annotation time by 10x. Built-in quality control ensures consistent, high-quality training data.',
    color: 'var(--system-orange)',
    video: '/videos/labeling tool animation.webm',
    features: [
      { name: 'Labeling Tool', href: '/labeling-tool' },
      { name: 'Annotation Campaigns', href: '/annotation-campaigns' },
    ],
    stats: { value: '10x', label: 'Faster labeling' },
  },
  {
    id: 'train',
    category: 'Train',
    tagline: 'Build & experiment',
    headline: 'Experiments shouldn\'t disappear',
    problem: 'You\'ve run hundreds of experiments but can\'t reproduce your best results. Model versions are scattered across notebooks.',
    solution: 'Every experiment tracked, every model versioned, every result reproducible. Compare runs side-by-side.',
    color: 'var(--system-indigo)',
    video: '/videos/experiment tracking animation.webm',
    features: [
      { name: 'AI Laboratory', href: '/ai-laboratory' },
      { name: 'Experiment Tracking', href: '/experiment-tracking' },
      { name: 'Automated Pipelines', href: '/automated-pipelines' },
    ],
    stats: { value: '100%', label: 'Reproducibility' },
  },
  {
    id: 'deploy',
    category: 'Deploy',
    tagline: 'Ship & monitor',
    headline: 'Production shouldn\'t be a black box',
    problem: 'Your model works in the lab but fails in production. You only find out when customers complain.',
    solution: 'Deploy with confidence. Real-time monitoring catches drift before it impacts users.',
    color: 'var(--picsellia-green)',
    video: '/videos/deployment monitoring .webm',
    features: [
      { name: 'Model Deployment', href: '/model-deployment' },
      { name: 'Model Monitoring', href: '/model-monitoring' },
    ],
    stats: { value: '99.9%', label: 'Uptime SLA' },
  },
];

// Business outcomes
const outcomes = [
  { metric: '80%', label: 'Faster time to production' },
  { metric: '60%', label: 'Lower operational costs' },
  { metric: '10x', label: 'More experiments per week' },
  { metric: '0', label: 'Surprise production failures' },
];

// Enterprise features
const enterpriseFeatures = [
  { title: 'ISO 27001:2022', description: 'Certified information security management' },
  { title: 'Deploy Anywhere', description: 'Cloud, on-premise, or hybrid deployment' },
  { title: 'Role-Based Access', description: 'SSO/SAML with fine-grained permissions' },
  { title: '99.9% Uptime SLA', description: 'Enterprise SLAs with 24/7 support' },
  { title: 'API-First', description: 'Full REST API and Python SDK' },
  { title: 'Infinite Scale', description: 'Handle millions of images seamlessly' },
];

export default function ProductOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)]"></span>
              The Complete Vision AI Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            Ship Vision AI <span className="text-[var(--picsellia-green)]">10x faster</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            The only platform where data scientists, ML engineers, and operations teams
            work together—from raw images to production models.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/trial" className="btn-primary px-6 py-3">
              Start Free Trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/demo" className="btn-secondary px-6 py-3">
              See Live Demo
            </Link>
          </div>

          {/* Video */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--secondary-system-background)]">
              <video autoPlay muted loop playsInline className="w-full h-auto" src="/videos/data layer view.mov" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-16 border-b border-[var(--border)]">
            {outcomes.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--picsellia-green)] mb-1">{stat.metric}</div>
                <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="text-center">
            <p className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-8">
              Trusted by ML teams at leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              {customerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="relative h-8 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Lifecycle Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                One platform. Zero friction.
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                Picsellia replaces your fragmented toolchain with a unified platform designed specifically for computer vision.
              </p>
            </div>
          </div>

          {/* Lifecycle Visual */}
          <div className="mb-12 p-6 rounded-2xl border border-[var(--border)] bg-[var(--secondary-system-background)]">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
              {platformStages.map((stage, index) => (
                <div key={stage.id} className="flex items-center">
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: stage.color }}
                    >
                      0{index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--label)]">{stage.category}</div>
                      <div className="text-xs text-[var(--tertiary-label)]">{stage.tagline}</div>
                    </div>
                  </div>
                  {index < platformStages.length - 1 && (
                    <svg className="w-6 h-6 text-[var(--border)] hidden md:block mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {platformStages.map((stage, index) => (
              <Link
                key={stage.id}
                href={stage.features[0].href}
                className={`group ${index === 0 ? 'md:row-span-2' : ''}`}
              >
                <div className={`card p-0 overflow-hidden h-full ${index === 0 ? 'min-h-[500px]' : ''}`}>
                  {index === 0 ? (
                    // Featured card - Data
                    <div className="h-full flex flex-col">
                      <div
                        className="p-8 flex-1 relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${stage.color} 10%, transparent), color-mix(in srgb, ${stage.color} 5%, transparent))` }}
                      >
                        {/* Decorative grid */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                          backgroundImage: `linear-gradient(${stage.color} 1px, transparent 1px), linear-gradient(90deg, ${stage.color} 1px, transparent 1px)`,
                          backgroundSize: '32px 32px'
                        }} />

                        <div className="relative">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6"
                            style={{ backgroundColor: stage.color }}
                          >
                            01
                          </div>
                          <div className="text-xs uppercase tracking-wider mb-2" style={{ color: stage.color }}>
                            {stage.tagline}
                          </div>
                          <h3 className="text-2xl font-semibold text-[var(--label)] mb-3 group-hover:text-[var(--picsellia-green)] transition-colors">
                            {stage.headline}
                          </h3>
                          <p className="text-[var(--secondary-label)] mb-4 text-sm">
                            {stage.problem}
                          </p>
                          <p className="text-[var(--label)] text-sm">
                            <span className="font-medium" style={{ color: stage.color }}>With Picsellia:</span> {stage.solution}
                          </p>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute -bottom-16 -right-16 w-48 h-48 border rounded-full opacity-20" style={{ borderColor: stage.color }} />
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 border rounded-full opacity-30" style={{ borderColor: stage.color }} />
                      </div>

                      {/* Video */}
                      <div className="h-48 overflow-hidden border-t border-[var(--border)]">
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={stage.video} />
                      </div>

                      <div className="p-6 border-t border-[var(--border)]">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {stage.features.map((f) => (
                              <span key={f.name} className="text-xs px-2 py-1 rounded-md bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                                {f.name}
                              </span>
                            ))}
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold" style={{ color: stage.color }}>{stage.stats.value}</div>
                            <div className="text-xs text-[var(--tertiary-label)]">{stage.stats.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular cards
                    <div className="h-full flex flex-col">
                      {/* Video */}
                      <div className="h-40 overflow-hidden">
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={stage.video} />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all group-hover:scale-110"
                            style={{ backgroundColor: stage.color }}
                          >
                            0{index + 1}
                          </div>
                          <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--picsellia-green)] group-hover:bg-[var(--picsellia-green)] transition-all">
                            <svg className="w-4 h-4 text-[var(--secondary-label)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </div>
                        </div>

                        <div className="text-xs uppercase tracking-wider mb-1" style={{ color: stage.color }}>
                          {stage.tagline}
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                          {stage.headline}
                        </h3>
                        <p className="text-sm text-[var(--secondary-label)] mb-4 flex-1">
                          {stage.solution}
                        </p>

                        <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {stage.features.map((f) => (
                              <span key={f.name} className="text-xs px-2 py-1 rounded-md bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                                {f.name}
                              </span>
                            ))}
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold" style={{ color: stage.color }}>{stage.stats.value}</div>
                            <div className="text-[10px] text-[var(--tertiary-label)]">{stage.stats.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Enterprise Ready
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Built for teams that can't afford to fail
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                Security, compliance, and reliability that enterprise teams demand.
              </p>
            </div>
            <Link href="/demo" className="btn-secondary">
              Talk to Sales
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enterpriseFeatures.map((feature) => (
              <div key={feature.title} className="card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-base font-medium text-[var(--label)]">{feature.title}</h3>
                </div>
                <p className="text-sm text-[var(--secondary-label)] pl-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--picsellia-green)]">READY_TO_SHIP</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                Ready to ship Vision AI faster?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                Join 50+ companies who've unified their ML workflow and accelerated time-to-production by 80%.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="/trial" className="btn-primary px-8 py-3 text-base">
                  Start Free Trial
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary px-8 py-3 text-base">
                  Schedule Demo
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--tertiary-label)]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ISO 27001:2022 Certified</span>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
                {[
                  { value: '50M+', label: 'Images processed' },
                  { value: '<100ms', label: 'Inference latency' },
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: '24/7', label: 'Support' },
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

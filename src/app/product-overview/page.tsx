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

// Platform stages with value-focused copy
const platformStages = [
  {
    id: 'data',
    stage: '01',
    title: 'Collect',
    headline: 'Stop drowning in unorganized data',
    description: 'Your images are scattered across cloud buckets, hard drives, and legacy systems. Finding the right data for training takes days, not minutes.',
    value: 'One source of truth for all your visual data. Connect any storage, auto-organize with AI, and find exactly what you need in seconds.',
    color: 'var(--system-blue)',
    features: [
      { label: 'Datalake', href: '/datalake', desc: 'Unified data repository' },
      { label: 'Dataset Management', href: '/dataset-management', desc: 'Version & organize' },
    ],
    video: '/videos/datalake.webm',
    stats: [
      { value: '10B+', label: 'Images managed' },
      { value: '<50ms', label: 'Search latency' },
    ],
  },
  {
    id: 'annotate',
    stage: '02',
    title: 'Annotate',
    headline: 'Labeling shouldn\'t be your bottleneck',
    description: 'Manual annotation is slow, expensive, and error-prone. Your ML team is wasting time on labeling instead of building models.',
    value: 'AI-assisted labeling cuts annotation time by 10x. Built-in quality control ensures consistent, high-quality training data every time.',
    color: 'var(--system-orange)',
    features: [
      { label: 'Labeling Tool', href: '/labeling-tool', desc: 'AI-powered annotation' },
      { label: 'Annotation Campaigns', href: '/annotation-campaigns', desc: 'Team workflows' },
    ],
    video: '/videos/labeling tool animation.webm',
    stats: [
      { value: '10x', label: 'Faster labeling' },
      { value: '99%', label: 'Annotation accuracy' },
    ],
  },
  {
    id: 'train',
    stage: '03',
    title: 'Train',
    headline: 'Experiments shouldn\'t disappear',
    description: 'You\'ve run hundreds of experiments but can\'t reproduce your best results. Model versions are scattered across notebooks and local machines.',
    value: 'Every experiment tracked, every model versioned, every result reproducible. Compare runs side-by-side and always know what worked.',
    color: 'var(--system-indigo)',
    features: [
      { label: 'AI Laboratory', href: '/ai-laboratory', desc: 'Build & train models' },
      { label: 'Experiment Tracking', href: '/experiment-tracking', desc: 'Track & compare' },
      { label: 'Automated Pipelines', href: '/automated-pipelines', desc: 'CI/CD for ML' },
    ],
    video: '/videos/experiment tracking animation.webm',
    stats: [
      { value: '100%', label: 'Reproducibility' },
      { value: '5x', label: 'Faster iteration' },
    ],
  },
  {
    id: 'deploy',
    stage: '04',
    title: 'Deploy',
    headline: 'Production shouldn\'t be a black box',
    description: 'Your model works in the lab but fails in production. You only find out when customers complain. Debugging takes weeks.',
    value: 'Deploy with confidence. Real-time monitoring catches drift before it impacts users. Automatic retraining keeps your models sharp.',
    color: 'var(--picsellia-green)',
    features: [
      { label: 'Model Deployment', href: '/model-deployment', desc: 'One-click deploy' },
      { label: 'Model Monitoring', href: '/model-monitoring', desc: 'Production insights' },
    ],
    video: '/videos/deployment monitoring .webm',
    stats: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '<100ms', label: 'Inference latency' },
    ],
  },
];

// Business outcomes
const outcomes = [
  {
    metric: '80%',
    label: 'Faster time to production',
    description: 'From months to weeks. Ship vision AI at startup speed.',
  },
  {
    metric: '60%',
    label: 'Lower operational costs',
    description: 'Eliminate tool sprawl. One platform, one bill, one team.',
  },
  {
    metric: '10x',
    label: 'More experiments per week',
    description: 'Iterate faster. Test more hypotheses. Find what works.',
  },
  {
    metric: '0',
    label: 'Surprise production failures',
    description: 'Catch drift before users do. Sleep well at night.',
  },
];

// Pain points of fragmented tools
const painPoints = [
  'Different tool for every task',
  'Data scattered everywhere',
  'No experiment tracking',
  'Manual deployment process',
  'No production visibility',
  'Compliance nightmares',
];

export default function ProductOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[var(--picsellia-green)]/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">The Complete Vision AI Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              Ship Vision AI<br />
              <span className="text-[var(--picsellia-green)]">10x faster</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[var(--secondary-label)] mb-8 max-w-2xl mx-auto">
              The only platform where data scientists, ML engineers, and operations teams
              work together—from raw images to production models.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/trial" className="btn-primary px-8 py-4 text-base">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/demo" className="btn-secondary px-8 py-4 text-base">
                See Live Demo
              </Link>
            </div>

            {/* Hero Video */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                src="/videos/data layer view.mov"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--system-grouped-background)] via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-[var(--tertiary-label)] mb-8">
            Trusted by ML teams at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {customerLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative h-8 w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image src={logo.src} alt={logo.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-red) 1px, transparent 1px), linear-gradient(90deg, var(--system-red) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-red)] text-sm font-medium uppercase tracking-wider mb-4 block">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                Building Vision AI is<br />
                <span className="text-[var(--system-red)]">unnecessarily painful</span>
              </h2>
              <p className="text-lg text-[var(--secondary-label)] mb-8">
                Your team juggles 10+ tools. Data lives in silos. Experiments vanish into notebooks.
                Deployments are manual nightmares. Sound familiar?
              </p>

              {/* Pain points */}
              <div className="grid grid-cols-2 gap-3">
                {painPoints.map((pain) => (
                  <div key={pain} className="flex items-center gap-2 text-sm text-[var(--secondary-label)]">
                    <svg className="w-4 h-4 text-[var(--system-red)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {pain}
                  </div>
                ))}
              </div>
            </div>

            {/* Fragmented tools illustration */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-3">
                {['S3', 'Label\nStudio', 'Jupyter', 'W&B', 'Docker', 'K8s', 'Grafana', 'Slack', '???'].map((tool, i) => (
                  <div
                    key={tool}
                    className="aspect-square rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-sm text-[var(--tertiary-label)] font-mono p-4 text-center whitespace-pre-line"
                    style={{
                      opacity: 0.4 + (i * 0.07),
                      transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i * 0.5)}deg)`,
                    }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
              {/* Chaos lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
                <line x1="20%" y1="20%" x2="80%" y2="50%" stroke="var(--system-red)" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="50%" y1="10%" x2="30%" y2="80%" stroke="var(--system-red)" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="var(--system-red)" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--picsellia-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              One platform.<br />
              <span className="text-[var(--picsellia-green)]">Zero friction.</span>
            </h2>
            <p className="text-lg text-[var(--secondary-label)]">
              Picsellia replaces your fragmented toolchain with a unified platform
              designed specifically for computer vision. Every stage connected.
              Every team aligned. Every model tracked.
            </p>
          </div>

          {/* Workflow visualization */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--system-blue)] via-[var(--system-orange)] via-[var(--system-indigo)] to-[var(--picsellia-green)] -translate-y-1/2 z-0" style={{ top: '60px' }} />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {platformStages.map((stage, i) => (
                <div key={stage.id} className="relative z-10">
                  {/* Stage number */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto"
                    style={{ backgroundColor: stage.color }}
                  >
                    {stage.stage}
                  </div>

                  {/* Card */}
                  <div className="card p-5 text-center h-full">
                    <h3 className="text-lg font-semibold mb-2" style={{ color: stage.color }}>
                      {stage.title}
                    </h3>
                    <p className="text-sm text-[var(--secondary-label)] mb-4">
                      {stage.value.split('.')[0]}.
                    </p>
                    <div className="space-y-1">
                      {stage.features.map((feature) => (
                        <Link
                          key={feature.label}
                          href={feature.href}
                          className="block text-xs text-[var(--tertiary-label)] hover:text-[var(--picsellia-green)] transition-colors"
                        >
                          {feature.label} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      {platformStages.map((stage, index) => (
        <section
          key={stage.id}
          className="py-24 border-b border-[var(--border)] relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${stage.color} 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }} />

          <div className="max-w-6xl mx-auto px-6 relative">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: stage.color }}
                  >
                    {stage.stage}
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wider" style={{ color: stage.color }}>
                    {stage.title}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  {stage.headline}
                </h2>

                <p className="text-[var(--secondary-label)] mb-6">
                  {stage.description}
                </p>

                <div className="card p-5 mb-8 border-l-4" style={{ borderLeftColor: stage.color }}>
                  <p className="text-[var(--label)]">
                    <span className="font-semibold" style={{ color: stage.color }}>With Picsellia:</span>{' '}
                    {stage.value}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {stage.features.map((feature) => (
                    <Link
                      key={feature.label}
                      href={feature.href}
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] hover:border-[var(--picsellia-green)]/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-[var(--label)] group-hover:text-[var(--picsellia-green)] transition-colors">
                        {feature.label}
                      </span>
                      <svg className="w-4 h-4 text-[var(--tertiary-label)] group-hover:text-[var(--picsellia-green)] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-8">
                  {stage.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold" style={{ color: stage.color }}>{stat.value}</div>
                      <div className="text-xs text-[var(--tertiary-label)]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                    src={stage.video}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Business Outcomes Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden bg-[var(--tertiary-system-background)]">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-4 block">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              What our customers achieve
            </h2>
            <p className="text-lg text-[var(--secondary-label)] max-w-2xl mx-auto">
              Real outcomes from teams who switched to Picsellia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="card p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[var(--picsellia-green)] mb-2">
                  {outcome.metric}
                </div>
                <div className="text-sm font-medium text-[var(--label)] mb-2">
                  {outcome.label}
                </div>
                <p className="text-xs text-[var(--tertiary-label)]">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-4 block">
              Enterprise Ready
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Built for teams that can't afford to fail
            </h2>
            <p className="text-lg text-[var(--secondary-label)] max-w-2xl mx-auto">
              Security, compliance, and reliability that enterprise teams demand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'ISO 27001 Certified',
                description: 'Bank-grade security with SOC 2 compliance. Your data is encrypted at rest and in transit.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: 'Deploy Anywhere',
                description: 'Cloud, on-premise, or hybrid. Run Picsellia where your data lives. Air-gapped options available.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Role-Based Access',
                description: 'Fine-grained permissions. SSO/SAML integration. Audit logs for every action.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: '99.9% Uptime SLA',
                description: 'Enterprise SLAs with 24/7 support. Dedicated success manager for your team.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'API-First',
                description: 'Full REST API and Python SDK. Integrate with your existing stack in hours.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Infinite Scale',
                description: 'From prototype to production. Handle millions of images without changing your workflow.',
              },
            ].map((feature) => (
              <div key={feature.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center text-[var(--system-blue)] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--label)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--secondary-label)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--picsellia-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--picsellia-green)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Ready to ship Vision AI faster?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                Join 50+ companies who've unified their ML workflow and
                accelerated time-to-production by 80%.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/trial" className="btn-primary px-10 py-4 text-base">
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary px-10 py-4 text-base">
                  Talk to Sales
                </Link>
              </div>
              <p className="text-xs text-[var(--tertiary-label)] mt-6">
                No credit card required · 14-day free trial · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

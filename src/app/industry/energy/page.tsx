'use client';

import Image from 'next/image';
import Link from 'next/link';

// Energy-specific use cases
const useCases = [
  {
    title: 'Infrastructure Inspection',
    description: 'Detect damaged insulators, corrosion, and vegetation encroachment from drone imagery. Replace manual inspection with AI-powered analysis.',
    image: '/images/use-cases/energy/energy-infrastructure-inspection.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stats: { value: '95%', label: 'Detection accuracy' },
  },
  {
    title: 'Predictive Maintenance',
    description: 'Identify equipment degradation before failures occur. Thermal and visual analysis for transformers, turbines, and grid components.',
    image: '/images/use-cases/energy/energy-predictive-maintenance.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    stats: { value: '40%', label: 'Less downtime' },
  },
  {
    title: 'Security & Surveillance',
    description: 'Monitor perimeters, detect intrusions, and ensure site security across remote energy installations with real-time video analytics.',
    image: '/images/use-cases/energy/energy-security-surveilance.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    stats: { value: '24/7', label: 'Monitoring' },
  },
  {
    title: 'Safety Protocols',
    description: 'Ensure PPE compliance, detect hazardous conditions, and monitor worker safety across energy facilities with automated visual checks.',
    image: '/images/use-cases/energy/energy-safety-protocols.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stats: { value: '80%', label: 'Fewer incidents' },
  },
];

// Platform capabilities mapped to energy needs
const platformCapabilities = [
  {
    stage: 'Collect',
    title: 'Centralize inspection data',
    description: 'Aggregate imagery from drones, fixed cameras, satellites, and thermal sensors into a single searchable repository.',
    color: 'var(--system-blue)',
    features: ['Multi-source ingestion', 'Geo-tagged assets', 'Metadata extraction', 'Cloud storage sync'],
    link: '/datalake',
    linkLabel: 'Datalake',
  },
  {
    stage: 'Annotate',
    title: 'Label defects at scale',
    description: 'AI-assisted annotation for damage types, severity levels, and component classification. Quality review workflows for expert validation.',
    color: 'var(--system-orange)',
    features: ['Pre-annotation models', 'Custom taxonomies', 'Expert review queues', 'Annotation analytics'],
    link: '/labeling-tool',
    linkLabel: 'Labeling Tool',
  },
  {
    stage: 'Train',
    title: 'Build detection models',
    description: 'Train and iterate on defect detection models. Compare experiments, track metrics, and reproduce results.',
    color: 'var(--system-indigo)',
    features: ['Experiment tracking', 'Model versioning', 'Hyperparameter tuning', 'Training pipelines'],
    link: '/experiment-tracking',
    linkLabel: 'Experiment Tracking',
  },
  {
    stage: 'Deploy',
    title: 'Deploy to the field',
    description: 'Ship models to edge devices, drones, or cloud endpoints. Monitor performance and detect drift in production.',
    color: 'var(--picsellia-green)',
    features: ['Edge deployment', 'Model monitoring', 'Drift detection', 'Auto-retraining triggers'],
    link: '/model-deployment',
    linkLabel: 'Model Deployment',
  },
];

// Field applications architecture
const fieldSources = [
  { name: 'Inspection Drones', icon: '🛸', description: 'Autonomous flight paths' },
  { name: 'Fixed Cameras', icon: '📷', description: 'Substation monitoring' },
  { name: 'Thermal Sensors', icon: '🌡️', description: 'Hotspot detection' },
  { name: 'Satellite Imagery', icon: '🛰️', description: 'Large-scale surveys' },
];

export default function EnergyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--system-yellow)]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-orange)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <svg className="w-4 h-4 text-[var(--system-yellow)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-[var(--system-yellow)]">Energy & Utilities</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            AI-powered inspection for <span className="text-[var(--system-yellow)]">critical infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            From drone imagery to actionable insights. Build, deploy, and monitor computer vision models that keep your grid running.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/demo" className="btn-primary px-6 py-3">
              Request Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/use-cases/defects-detection" className="btn-secondary px-6 py-3">
              See Use Cases
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-16 relative">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
              <div className="relative h-[400px]">
                <Image
                  src="/images/wind-1.jpg"
                  alt="Wind turbine inspection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 via-transparent to-transparent" />

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-yellow)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--system-yellow)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Defects Detected</div>
                        <div className="text-lg font-bold text-[var(--label)]">2,847</div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Model Accuracy</div>
                        <div className="text-lg font-bold text-[var(--picsellia-green)]">97.3%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
            {[
              { value: '10M+', label: 'Inspection images processed' },
              { value: '95%', label: 'Defect detection accuracy' },
              { value: '60%', label: 'Inspection cost reduction' },
              { value: '24/7', label: 'Continuous monitoring' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--system-yellow)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Customer proof */}
          <div className="text-center">
            <p className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-6">
              Trusted by energy leaders
            </p>
            <div className="flex justify-center items-center gap-12">
              <div className="relative h-10 w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="/images/customers/rte.svg" alt="RTE" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section - Platform on Top */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-yellow) 1px, transparent 1px), linear-gradient(90deg, var(--system-yellow) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-yellow)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              One platform orchestrating your entire vision AI stack
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Picsellia sits at the center of your ML operations, connecting field applications with centralized data management, training, and deployment.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="card p-8 md:p-12">

            {/* Picsellia Platform - Top Layer */}
            <div className="mb-8">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[var(--system-yellow)]/10 via-[var(--picsellia-green)]/10 to-[var(--system-blue)]/10 border-2 border-[var(--system-yellow)]/30 relative overflow-hidden">
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `linear-gradient(var(--system-yellow) 1px, transparent 1px), linear-gradient(90deg, var(--system-yellow) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }} />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--system-yellow)] flex items-center justify-center">
                        <Image src="/images/Icon_white.svg" alt="Picsellia" width={24} height={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--label)]">Picsellia MLOps Platform</h3>
                        <p className="text-xs text-[var(--tertiary-label)]">Centralized orchestration layer</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
                      <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                      <span className="text-xs font-medium text-[var(--picsellia-green)]">ACTIVE</span>
                    </div>
                  </div>

                  {/* Platform modules */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: 'Data Management', desc: 'Centralize & version', color: 'var(--system-blue)', icon: '/images/community/icons/datalake.svg' },
                      { name: 'Annotation', desc: 'Label & review', color: 'var(--system-orange)', icon: '/images/community/icons/labeling-tool.svg' },
                      { name: 'Training', desc: 'Build & experiment', color: 'var(--system-indigo)', icon: '/images/community/icons/experiment-tracking.svg' },
                      { name: 'Deployment', desc: 'Ship & monitor', color: 'var(--picsellia-green)', icon: '/images/community/icons/model-monitoring.svg' },
                    ].map((module) => (
                      <div key={module.name} className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${module.color} 20%, transparent)` }}>
                            <Image src={module.icon} alt={module.name} width={18} height={18} />
                          </div>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: module.color }} />
                        </div>
                        <div className="text-sm font-medium text-[var(--label)]">{module.name}</div>
                        <div className="text-[10px] text-[var(--tertiary-label)]">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="flex justify-around mb-4 px-8">
              {[
                { label: 'Data Upload', color: 'var(--system-blue)', direction: 'up' },
                { label: 'Inference', color: 'var(--picsellia-green)', direction: 'down' },
                { label: 'Visualization', color: 'var(--system-indigo)', direction: 'up' },
                { label: 'Human Feedback', color: 'var(--system-orange)', direction: 'up' },
              ].map((connection) => (
                <div key={connection.label} className="flex flex-col items-center gap-1">
                  <div className="flex flex-col items-center">
                    {connection.direction === 'up' ? (
                      <svg className="w-4 h-4" style={{ color: connection.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" style={{ color: connection.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    )}
                    <div className="w-px h-8" style={{ backgroundColor: connection.color }} />
                  </div>
                  <span className="text-[9px] text-[var(--tertiary-label)] text-center whitespace-nowrap">{connection.label}</span>
                </div>
              ))}
            </div>

            {/* Field Applications - Bottom Layer */}
            <div className="p-6 rounded-2xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">Field Applications</h3>
                  <p className="text-xs text-[var(--tertiary-label)]">Connected devices running inference at the edge</p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20">
                  <span className="text-xs font-medium text-[var(--system-blue)]">4 CONNECTED</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Inspection Drones', desc: 'Autonomous flight + on-board inference', status: 'Running', metric: '< 50ms', icon: '/images/community/icons/ci-cd.svg' },
                  { name: 'Fixed Cameras', desc: 'Substation monitoring + alerts', status: 'Running', metric: '24/7', icon: '/images/community/icons/model-monitoring.svg' },
                  { name: 'Thermal Sensors', desc: 'Hotspot detection + anomaly alerts', status: 'Running', metric: 'Real-time', icon: '/images/community/icons/experiment-tracking.svg' },
                  { name: 'Mobile Devices', desc: 'Field worker inspection app', status: 'Running', metric: 'On-demand', icon: '/images/community/icons/labeling-tool.svg' },
                ].map((device) => (
                  <div key={device.name} className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center">
                        <Image src={device.icon} alt={device.name} width={22} height={22} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                        <span className="text-[9px] text-[var(--picsellia-green)]">{device.status}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[var(--label)] mb-1">{device.name}</div>
                    <div className="text-[10px] text-[var(--tertiary-label)] mb-2">{device.desc}</div>
                    <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                      <span className="text-[9px] text-[var(--tertiary-label)]">Latency</span>
                      <span className="text-xs font-mono text-[var(--picsellia-green)]">{device.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback Loop Indicator */}
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20">
                <svg className="w-4 h-4 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-xs text-[var(--system-orange)]">Continuous improvement: Field data → Annotation → Retraining → Deployment</span>
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
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Built for energy infrastructure
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                From transmission lines to solar farms, Picsellia powers inspection workflows across the energy sector.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
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
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[var(--system-yellow)] flex items-center justify-center text-white">
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

      {/* Platform Capabilities - Visual & Verbose */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              From raw images to production AI
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Four steps to transform your inspection data into automated defect detection. Each step builds on the last.
            </p>
          </div>

          {/* Visual Pipeline */}
          <div className="space-y-8">
            {/* Step 1 - Collect */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--system-blue)] flex items-center justify-center text-white text-xl font-bold">1</div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--system-blue)]">Collect</span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">Centralize all your inspection data</h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Stop juggling files across hard drives and cloud folders. Every image from every drone flight, every camera feed, every thermal scan — all in one searchable place.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Connect any storage (S3, Azure, GCS)', 'Auto-extract GPS & metadata', 'Search by location, date, or equipment', 'Version your datasets automatically'].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[var(--system-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/datalake" className="inline-flex items-center gap-2 text-[var(--system-blue)] font-medium hover:underline">
                  Learn about Datalake
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--system-blue)] text-white text-xs font-medium">
                    Datalake
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-infrastructure-inspection.jpg"
                    alt="Data collection"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-[var(--system-blue)] to-[var(--system-orange)]" />
            </div>

            {/* Step 2 - Annotate */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--system-orange)] text-white text-xs font-medium">
                    Labeling Tool
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-predictive-maintenance.jpg"
                    alt="Annotation"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--system-orange)] flex items-center justify-center text-white text-xl font-bold">2</div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--system-orange)]">Annotate</span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">Label defects with your experts</h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Your maintenance engineers know what a cracked insulator looks like. Capture that knowledge by marking defects in images. AI suggestions speed up the work by 10x.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['AI pre-labels obvious defects', 'Experts review and correct', 'Custom defect categories', 'Quality control workflows'].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[var(--system-orange)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/labeling-tool" className="inline-flex items-center gap-2 text-[var(--system-orange)] font-medium hover:underline">
                  Learn about Labeling Tool
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-[var(--system-orange)] to-[var(--system-indigo)]" />
            </div>

            {/* Step 3 - Train */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--system-indigo)] flex items-center justify-center text-white text-xl font-bold">3</div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--system-indigo)]">Train</span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">Build your detection models</h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Turn your labeled data into AI models that detect defects automatically. No PhD required — pick a model type, click train, and track progress in real-time.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['One-click model training', 'Compare different approaches', 'Track all experiments', 'Reproducible results'].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[var(--system-indigo)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/experiment-tracking" className="inline-flex items-center gap-2 text-[var(--system-indigo)] font-medium hover:underline">
                  Learn about Experiment Tracking
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--system-indigo)] text-white text-xs font-medium">
                    Training
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-security-surveilance.jpg"
                    alt="Model training"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-[var(--system-indigo)] to-[var(--picsellia-green)]" />
            </div>

            {/* Step 4 - Deploy */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)] text-white text-xs font-medium">
                    Deployment
                  </div>
                  <Image
                    src="/images/use-cases/energy/energy-safety-protocols.jpg"
                    alt="Model deployment"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--picsellia-green)] flex items-center justify-center text-white text-xl font-bold">4</div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--picsellia-green)]">Deploy</span>
                    <h3 className="text-2xl font-semibold text-[var(--label)]">Put AI to work in the field</h3>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6 text-lg">
                  Deploy your model to drones, cameras, or cloud APIs with one click. Monitor performance live and get alerts if accuracy drops. Retrain when needed.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Deploy to edge or cloud', 'Real-time monitoring', 'Automatic drift detection', 'One-click retraining'].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[var(--picsellia-green)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/model-deployment" className="inline-flex items-center gap-2 text-[var(--picsellia-green)] font-medium hover:underline">
                  Learn about Deployment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 p-8 rounded-2xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-[var(--label)]">The result? AI-powered inspection at scale.</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '10x', label: 'Faster labeling with AI assistance' },
                { value: '95%', label: 'Defect detection accuracy' },
                { value: '< 100ms', label: 'Edge inference latency' },
                { value: '24/7', label: 'Continuous monitoring' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[var(--picsellia-green)] mb-1">{stat.value}</div>
                  <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
                </div>
              ))}
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
                Enterprise Ready
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Built for critical infrastructure requirements
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Energy companies operate under strict security and compliance requirements. Picsellia is designed to meet these demands from day one.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'ISO 27001 Certified', description: 'Enterprise-grade security and data protection' },
                  { title: 'On-Premise Deployment', description: 'Keep sensitive infrastructure data within your network' },
                  { title: 'Air-Gapped Support', description: 'Operate in disconnected environments' },
                  { title: 'Role-Based Access', description: 'Fine-grained permissions for teams and contractors' },
                  { title: 'Audit Logging', description: 'Complete traceability for compliance requirements' },
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--label)] mb-2">Security First</h3>
                <p className="text-sm text-[var(--secondary-label)]">Your infrastructure data stays protected</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Encryption', value: 'AES-256' },
                  { label: 'Uptime SLA', value: '99.9%' },
                  { label: 'Data Residency', value: 'EU/US' },
                  { label: 'Backup', value: 'Daily' },
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
                backgroundImage: `linear-gradient(var(--system-yellow) 1px, transparent 1px), linear-gradient(90deg, var(--system-yellow) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--system-yellow)]/10 border border-[var(--system-yellow)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--system-yellow)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--system-yellow)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--system-yellow)]">INFRASTRUCTURE_AI</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                Ready to modernize your inspection workflow?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                See how leading energy companies use Picsellia to detect defects faster and reduce inspection costs.
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
                  { value: '10M+', label: 'Images analyzed' },
                  { value: '<100ms', label: 'Edge inference' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: 'ISO 27001', label: 'Certified' },
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

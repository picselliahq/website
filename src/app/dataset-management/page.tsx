'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Customer logos
const customerLogos = [
  { name: 'SGS', src: '/images/customers/sgs.svg' },
  { name: 'RTE', src: '/images/customers/rte.svg' },
  { name: 'Pellenc', src: '/images/customers/pellenc.svg' },
  { name: 'Skillcorner', src: '/images/customers/skillcorner.svg' },
];

// Core capabilities
const capabilities = [
  {
    id: 'versioning',
    title: 'Git-like Version Control',
    tagline: 'Never lose your data again',
    description: 'Track every change to your datasets. Compare versions, rollback mistakes, and branch for experiments. Full lineage from raw data to trained models.',
    color: 'var(--picsellia-blue)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    stats: { value: '100%', label: 'Reproducibility' },
  },
  {
    id: 'organization',
    title: 'Smart Data Organization',
    tagline: 'Structure without chaos',
    description: 'Tag, filter, and slice your data in seconds. Create custom views, save queries, and share collections. No more hunting through folders.',
    color: 'var(--system-orange)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    stats: { value: '5x', label: 'Faster discovery' },
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    tagline: 'Work together, not in silos',
    description: 'Share datasets across teams with fine-grained permissions. Track who changed what, when, and why. Comments and reviews built-in.',
    color: 'var(--system-indigo)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    stats: { value: '60%', label: 'Less coordination' },
  },
  {
    id: 'traceability',
    title: 'Full Data Lineage',
    tagline: 'Know where your data comes from',
    description: 'Trace any prediction back to its training data. Audit-ready lineage for compliance. Understand model behavior through data.',
    color: 'var(--picsellia-green)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    stats: { value: '100%', label: 'Audit compliance' },
  },
];

// Version comparison animation
const VersionTimeline = () => {
  const [activeVersion, setActiveVersion] = useState(2);
  const versions = [
    { id: 0, name: 'v1.0', images: 1200, annotations: 4800, date: 'Jan 15', status: 'archived' },
    { id: 1, name: 'v1.1', images: 1450, annotations: 5800, date: 'Feb 02', status: 'archived' },
    { id: 2, name: 'v2.0', images: 2100, annotations: 8400, date: 'Feb 28', status: 'production' },
    { id: 3, name: 'v2.1', images: 2350, annotations: 9400, date: 'Mar 15', status: 'staging' },
  ];

  return (
    <div className="relative">
      {/* Timeline track */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-[var(--border)]" />
      <div
        className="absolute top-5 left-0 h-0.5 bg-[var(--picsellia-blue)] transition-all duration-500"
        style={{ width: `${(activeVersion / (versions.length - 1)) * 100}%` }}
      />

      <div className="relative flex justify-between">
        {versions.map((version) => (
          <button
            key={version.id}
            onClick={() => setActiveVersion(version.id)}
            className={`relative flex flex-col items-center group ${version.id <= activeVersion ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                version.id === activeVersion
                  ? 'bg-[var(--picsellia-blue)] border-[var(--picsellia-blue)] text-white scale-110'
                  : version.id < activeVersion
                  ? 'bg-[var(--picsellia-blue)]/20 border-[var(--picsellia-blue)] text-[var(--picsellia-blue)]'
                  : 'bg-[var(--card)] border-[var(--border)] text-[var(--tertiary-label)]'
              }`}
            >
              <span className="text-xs font-mono font-bold">{version.name}</span>
            </div>
            <div className="mt-3 text-center">
              <div className={`text-xs font-medium ${version.id === activeVersion ? 'text-[var(--label)]' : 'text-[var(--tertiary-label)]'}`}>
                {version.date}
              </div>
              {version.id === activeVersion && (
                <div className={`mt-1 px-2 py-0.5 rounded text-[9px] font-medium ${
                  version.status === 'production' ? 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]' :
                  version.status === 'staging' ? 'bg-[var(--system-orange)]/10 text-[var(--system-orange)]' :
                  'bg-[var(--system-gray)]/10 text-[var(--tertiary-label)]'
                }`}>
                  {version.status}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Version details */}
      <div className="mt-8 p-4 rounded-xl bg-[var(--black)] border border-[var(--border)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--picsellia-blue)]/20 flex items-center justify-center">
              <span className="text-xs font-mono text-[var(--picsellia-blue)] font-bold">{versions[activeVersion].name}</span>
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--label)]">Dataset: defect-detection</div>
              <div className="text-xs text-[var(--tertiary-label)]">Last modified {versions[activeVersion].date}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] hover:bg-[var(--picsellia-blue)]/10 hover:text-[var(--picsellia-blue)] transition-colors">
              Compare
            </button>
            <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--picsellia-blue)] text-white">
              Checkout
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)]">
            <div className="text-xs text-[var(--tertiary-label)] mb-1">Images</div>
            <div className="text-xl font-bold font-mono text-[var(--label)]">{versions[activeVersion].images.toLocaleString()}</div>
          </div>
          <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)]">
            <div className="text-xs text-[var(--tertiary-label)] mb-1">Annotations</div>
            <div className="text-xl font-bold font-mono text-[var(--label)]">{versions[activeVersion].annotations.toLocaleString()}</div>
          </div>
          <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)]">
            <div className="text-xs text-[var(--tertiary-label)] mb-1">Change</div>
            <div className="text-xl font-bold font-mono text-[var(--picsellia-green)]">
              +{activeVersion > 0 ? versions[activeVersion].images - versions[activeVersion - 1].images : versions[activeVersion].images}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DatasetManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--picsellia-blue)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[var(--picsellia-green)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-blue)]">Dataset Management</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            Your datasets deserve <span className="text-[var(--picsellia-blue)]">version control</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            Git for your computer vision data. Track changes, compare versions, and ensure every experiment is reproducible.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/trial" className="btn-primary px-6 py-3">
              Start Free Trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="https://documentation.picsellia.com/docs/datasets" className="btn-secondary px-6 py-3">
              Read Documentation
            </Link>
          </div>

          {/* Video Demo */}
          <div className="mb-16 relative">
            <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--secondary-system-background)]">
              <video autoPlay muted loop playsInline className="w-full h-auto" src="/videos/dataset-management.mov" />
            </div>

            {/* Floating version card */}
            <div className="absolute -bottom-6 -left-6 card px-4 py-3 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-blue)]/20 flex items-center justify-center">
                  <span className="text-sm font-mono text-[var(--picsellia-blue)] font-bold">v3</span>
                </div>
                <div>
                  <div className="text-xs text-[var(--tertiary-label)]">Current Version</div>
                  <div className="text-sm font-medium text-[var(--label)]">+2,340 images</div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -top-4 -right-4 card px-4 py-3 shadow-xl hidden lg:block">
              <div className="text-xs text-[var(--tertiary-label)]">Datasets</div>
              <div className="text-2xl font-bold text-[var(--label)] font-mono">24</div>
              <div className="text-[10px] text-[var(--picsellia-green)]">All versioned</div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-16 border-b border-[var(--border)]">
            {[
              { value: '100%', label: 'Reproducibility' },
              { value: '0', label: 'Data loss' },
              { value: '5x', label: 'Faster iterations' },
              { value: '∞', label: 'Version history' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--picsellia-blue)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="text-center">
            <p className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-8">
              Used by teams at
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

      {/* Version Control Deep Dive */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--picsellia-blue) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-blue) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="text-[var(--picsellia-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Version Control
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Track every change, reproduce any result
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Your datasets evolve constantly—new images, corrected labels, filtered samples. Without version control, you're flying blind.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Immutable snapshots',
                    description: 'Every dataset version is a permanent snapshot. Reference exact data states in experiments.',
                  },
                  {
                    title: 'Label management',
                    description: 'Create, rename, and merge labels across your dataset. Keep your taxonomy clean and consistent.',
                  },
                  {
                    title: 'Fork for experiments',
                    description: 'Fork dataset versions to test hypotheses without affecting production data.',
                  },
                  {
                    title: 'Audit-ready history',
                    description: 'Complete changelog with who changed what, when, and why. Perfect for compliance.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--picsellia-blue)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[var(--label)] mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--secondary-label)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Interactive Timeline */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--label)]">Version Timeline</h3>
                <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">Interactive</span>
              </div>
              <VersionTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Everything you need to manage datasets
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                Version, organize, and share your datasets. Everything connects to your experiments.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={cap.id}
                className={`card p-0 overflow-hidden group ${index === 0 ? 'md:row-span-2' : ''}`}
              >
                {index === 0 ? (
                  // Featured card - Version Control
                  <div className="h-full flex flex-col">
                    <div
                      className="p-8 flex-1 relative overflow-hidden min-h-[280px]"
                      style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${cap.color} 10%, transparent), color-mix(in srgb, ${cap.color} 5%, transparent))` }}
                    >
                      {/* Decorative grid */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `linear-gradient(${cap.color} 1px, transparent 1px), linear-gradient(90deg, ${cap.color} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                      }} />

                      <div className="relative">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6"
                          style={{ backgroundColor: cap.color }}
                        >
                          {cap.icon}
                        </div>
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: cap.color }}>
                          {cap.tagline}
                        </div>
                        <h3 className="text-2xl font-semibold text-[var(--label)] mb-4">
                          {cap.title}
                        </h3>
                        <p className="text-[var(--secondary-label)]">
                          {cap.description}
                        </p>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -bottom-16 -right-16 w-48 h-48 border rounded-full opacity-20" style={{ borderColor: cap.color }} />
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 border rounded-full opacity-30" style={{ borderColor: cap.color }} />
                    </div>

                    {/* Video */}
                    <div className="h-48 overflow-hidden border-t border-[var(--border)]">
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/videos/data ingestion.webm" />
                    </div>

                    <div className="p-6 border-t border-[var(--border)]">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-[var(--secondary-label)]">Full audit trail included</div>
                        <div className="text-right">
                          <div className="text-xl font-bold" style={{ color: cap.color }}>{cap.stats.value}</div>
                          <div className="text-xs text-[var(--tertiary-label)]">{cap.stats.label}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular cards
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: cap.color }}
                      >
                        {cap.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold" style={{ color: cap.color }}>{cap.stats.value}</div>
                        <div className="text-[10px] text-[var(--tertiary-label)]">{cap.stats.label}</div>
                      </div>
                    </div>

                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: cap.color }}>
                      {cap.tagline}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--label)] mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[var(--secondary-label)] flex-1">
                      {cap.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Integration Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--system-indigo) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Developer Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Programmatic dataset management
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Full Python SDK with type hints, auto-completion, and comprehensive documentation. Integrate datasets directly into your ML pipelines.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Create & Version */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                </div>
                <span className="text-xs text-[var(--tertiary-label)]">dataset_management.py</span>
              </div>
              <pre className="p-5 text-xs overflow-x-auto bg-[var(--black)] font-mono leading-relaxed">
                <code>
                  <span className="text-[var(--system-indigo)]">from</span> <span className="text-[var(--label)]">picsellia</span> <span className="text-[var(--system-indigo)]">import</span> <span className="text-[var(--label)]">Client</span>{'\n\n'}
                  <span className="text-[var(--label)]">client</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">Client()</span>{'\n'}
                  <span className="text-[var(--label)]">datalake</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.get_datalake()</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Get or create dataset</span>{'\n'}
                  <span className="text-[var(--label)]">dataset</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.get_dataset(</span><span className="text-[var(--picsellia-green)]">&quot;defect-detection&quot;</span><span className="text-[var(--label)]">)</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Create a new version</span>{'\n'}
                  <span className="text-[var(--label)]">version</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">dataset.create_version(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">version</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;v3&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">description</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;Added edge cases&quot;</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Add data from datalake</span>{'\n'}
                  <span className="text-[var(--label)]">data</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">datalake.list_data(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;edge-case&quot;</span><span className="text-[var(--label)]">,</span> <span className="text-[var(--picsellia-green)]">&quot;validated&quot;</span><span className="text-[var(--label)]">]</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>{'\n'}
                  <span className="text-[var(--label)]">version.add_data(data)</span>
                </code>
              </pre>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[var(--tertiary-label)]">Python SDK</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">create_version()</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Labels & Export */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                </div>
                <span className="text-xs text-[var(--tertiary-label)]">labels_export.py</span>
              </div>
              <pre className="p-5 text-xs overflow-x-auto bg-[var(--black)] font-mono leading-relaxed">
                <code>
                  <span className="text-[var(--tertiary-label)]"># Label manipulation</span>{'\n'}
                  <span className="text-[var(--label)]">labels</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">version.list_labels()</span>{'\n'}
                  <span className="text-[var(--label)]">version.create_label(</span><span className="text-[var(--picsellia-green)]">&quot;scratch&quot;</span><span className="text-[var(--label)]">)</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Rename a label</span>{'\n'}
                  <span className="text-[var(--label)]">label</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">version.get_label(</span><span className="text-[var(--picsellia-green)]">&quot;defect&quot;</span><span className="text-[var(--label)]">)</span>{'\n'}
                  <span className="text-[var(--label)]">label.update(name</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;surface_defect&quot;</span><span className="text-[var(--label)]">)</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Export annotations in COCO format</span>{'\n'}
                  <span className="text-[var(--label)]">version.export_annotation_file(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">AnnotationFileType.COCO,</span>{'\n'}
                  {'  '}<span className="text-[var(--picsellia-green)]">&quot;./training_data&quot;</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>
                </code>
              </pre>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[var(--tertiary-label)]">Supports COCO, YOLO, Pascal VOC</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">label.update()</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Export Formats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'COCO', description: 'Object detection & segmentation' },
              { name: 'YOLO', description: 'YOLOv5/v8 format' },
              { name: 'Pascal VOC', description: 'XML annotations' },
              { name: 'Custom', description: 'JSON/CSV exports' },
            ].map((format) => (
              <div key={format.name} className="card p-4 text-center">
                <div className="text-lg font-mono font-bold text-[var(--label)]">{format.name}</div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">{format.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Organization Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Interactive Demo */}
            <div className="order-2 lg:order-1">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[var(--label)]">Dataset Browser</h3>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg text-xs bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                      Grid
                    </button>
                    <button className="px-3 py-1.5 rounded-lg text-xs bg-[var(--system-orange)]/10 text-[var(--system-orange)]">
                      Split
                    </button>
                  </div>
                </div>

                {/* Split visualization */}
                <div className="space-y-3">
                  {[
                    { name: 'train', count: 8400, percent: 70, color: 'var(--picsellia-blue)' },
                    { name: 'validation', count: 1800, percent: 15, color: 'var(--system-orange)' },
                    { name: 'test', count: 1800, percent: 15, color: 'var(--picsellia-green)' },
                  ].map((split) => (
                    <div key={split.name} className="p-4 rounded-lg bg-[var(--black)] border border-[var(--border)]">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: split.color }} />
                          <span className="text-sm font-medium text-[var(--label)]">{split.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-mono text-[var(--label)]">{split.count.toLocaleString()}</span>
                          <span className="text-xs text-[var(--tertiary-label)] ml-2">{split.percent}%</span>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--tertiary-system-background)] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${split.percent}%`, backgroundColor: split.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats footer */}
                <div className="mt-6 pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold font-mono text-[var(--label)]">12K</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Total images</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-[var(--label)]">48K</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Annotations</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-[var(--picsellia-green)]">Balanced</div>
                    <div className="text-xs text-[var(--tertiary-label)]">Class dist.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Data Organization
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Structure your data the right way
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Proper data splits are crucial for model performance. Create reproducible train/val/test splits, stratify by class, and ensure no data leakage.
              </p>

              <div className="space-y-4">
                {[
                  'Automatic stratified splits by class distribution',
                  'Custom split ratios with reproducible seeds',
                  'No overlap guarantee between splits',
                  'Re-split without losing annotations',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--label)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Workflow Integration
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Fits into your existing workflow
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Datasets connect directly to annotations, experiments, and deployments. No manual handoffs.
            </p>
          </div>

          {/* Workflow diagram */}
          <div className="card p-8">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {/* Datalake */}
              <Link
                href="/datalake"
                className="p-6 rounded-xl border text-center transition-all bg-[var(--tertiary-system-background)] border-[var(--border)] hover:border-[var(--picsellia-green)]/50"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image src="/images/community/icons/datalake.svg" alt="Datalake" width={40} height={40} />
                </div>
                <div className="text-sm font-medium text-[var(--label)]">Datalake</div>
              </Link>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <svg className="w-8 h-8 text-[var(--border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Dataset (active) */}
              <div className="p-6 rounded-xl border text-center bg-[var(--system-orange)]/10 border-[var(--system-orange)]/30 scale-105">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image src="/images/community/icons/data-management.svg" alt="Dataset" width={40} height={40} />
                </div>
                <div className="text-sm font-medium text-[var(--system-orange)]">Dataset</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <svg className="w-8 h-8 text-[var(--border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Experiment */}
              <Link
                href="/experiment-tracking"
                className="p-6 rounded-xl border text-center transition-all bg-[var(--tertiary-system-background)] border-[var(--border)] hover:border-[var(--picsellia-green)]/50"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image src="/images/community/icons/experiment-tracking.svg" alt="Experiment" width={40} height={40} />
                </div>
                <div className="text-sm font-medium text-[var(--label)]">Experiment</div>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--border)] grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold font-mono text-[var(--picsellia-blue)]">Auto-sync</div>
                <div className="text-sm text-[var(--tertiary-label)]">From datalake</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[var(--system-orange)]">Version</div>
                <div className="text-sm text-[var(--tertiary-label)]">Every change</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[var(--system-indigo)]">Reference</div>
                <div className="text-sm text-[var(--tertiary-label)]">In experiments</div>
              </div>
            </div>
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
                backgroundImage: `linear-gradient(var(--picsellia-blue) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-blue) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-blue)]/10 border border-[var(--picsellia-blue)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-blue)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-blue)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--picsellia-blue)]">VERSION_CONTROL</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                Ready to version your datasets?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                Free trial, no credit card. Start versioning your datasets today.
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
                  <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited versions</span>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
                {[
                  { value: '50M+', label: 'Images versioned' },
                  { value: '∞', label: 'Version history' },
                  { value: '100%', label: 'Reproducibility' },
                  { value: '0', label: 'Data loss' },
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

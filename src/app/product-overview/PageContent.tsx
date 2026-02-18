'use client';

import Image from 'next/image';
import Link from 'next/link';
import PlatformLifecycle from '@/components/sections/PlatformLifecycle';

// Customer logos
const customerLogos = [
  { name: 'SGS', src: '/images/customers/sgs.svg' },
  { name: 'RTE', src: '/images/customers/rte.svg' },
  { name: 'Pellenc', src: '/images/customers/pellenc.svg' },
  { name: 'Skillcorner', src: '/images/customers/skillcorner.svg' },
  { name: 'Fortil', src: '/images/customers/fortil.svg' },
  { name: 'Isarsoft', src: '/images/customers/isarsoft.svg' },
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
  { title: 'Infinite Scale', description: 'Handle millions of images without breaking' },
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

      <PlatformLifecycle />

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
                Free trial, no credit card. See how it works on your own data.
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

'use client';

import Link from 'next/link';
import { useState } from 'react';

// Platform modules data
const platformModules = [
  {
    id: 'data-engine',
    name: 'Data Engine',
    description: 'Data management, versioning, and preparation',
    monthlyPrice: 1000,
    annualPrice: 12000,
    extraUserMonthly: 500,
    extraUserAnnual: 6000,
    color: 'var(--system-blue)',
    includedUsers: 3,
    standalone: true,
    features: [
      'Unlimited data storage',
      'Dataset versioning',
      'Smart data curation',
      'Visual similarity search',
      'CLIP embeddings',
      'Multi-format support',
    ],
  },
  {
    id: 'visionai-factory',
    name: 'VisionAI Factory',
    description: 'Model training, experimentation, and deployment',
    monthlyPrice: 250,
    annualPrice: 3000,
    extraUserMonthly: 75,
    extraUserAnnual: 900,
    color: 'var(--picsellia-green)',
    includedUsers: 3,
    requiresDataEngine: true,
    popular: true,
    features: [
      'Experiment tracking',
      'Model registry',
      'Pre-built pipelines',
      'Custom training pipelines',
      'One-click GPU allocation',
      'Model deployment',
    ],
  },
  {
    id: 'reliability-engine',
    name: 'Reliability Engine',
    description: 'Model monitoring, performance tracking, drift detection',
    monthlyPrice: 500,
    annualPrice: 6000,
    extraUserMonthly: 150,
    extraUserAnnual: 1800,
    color: 'var(--system-orange)',
    includedUsers: 3,
    requiresDataEngine: true,
    features: [
      'Real-time monitoring',
      'Anomaly detection',
      'Drift detection',
      'Feedback loops',
      'Continuous training',
      'Shadow deployments',
    ],
  },
];

// DPU pricing tiers
const dpuTiers = [
  { range: '0 - 1M', dpu: '0 - 16,667', discount: '0%', price: '€0.80' },
  { range: '1M - 2.5M', dpu: '16,668 - 41,667', discount: '10%', price: '€0.72' },
  { range: '2.5M - 5M', dpu: '41,668 - 83,333', discount: '18%', price: '€0.656' },
  { range: '5M - 10M', dpu: '83,334 - 166,667', discount: '29%', price: '€0.568' },
  { range: '10M - 20M', dpu: '166,668 - 333,333', discount: '40%', price: '€0.48' },
  { range: '20M - 100M', dpu: '333,334 - 1,666,667', discount: '60%', price: '€0.32' },
];

// MU pricing tiers
const muTiers = [
  { range: '0 - 1M', mu: '0 - 1,000', discount: '0%', price: '€1.00' },
  { range: '1M - 2.5M', mu: '1,001 - 2,500', discount: '10%', price: '€0.72' },
  { range: '2.5M - 5M', mu: '2,501 - 5,000', discount: '18%', price: '€0.656' },
  { range: '5M - 10M', mu: '5,001 - 10,000', discount: '29%', price: '€0.568' },
  { range: '10M - 20M', mu: '10,001 - 20,000', discount: '40%', price: '€0.48' },
  { range: '20M - 100M', mu: '20,001 - 100,000', discount: '50%', price: '€0.40' },
];

// FAQ data
const faqs = [
  {
    question: 'What is a Data Processing Unit (DPU)?',
    answer: 'DPU is our unit for measuring data ingestion and processing. Standard images convert at 60 images = 1 DPU, videos at 1 video = 1 DPU, and multi-spectral images at 5 images = 1 DPU.',
  },
  {
    question: 'What is a Monitoring Unit (MU)?',
    answer: 'MU measures production inference monitoring. Each MU covers 1,000 monitored predictions through the Reliability Engine for quality tracking and drift detection.',
  },
  {
    question: 'Can I use modules independently?',
    answer: 'The Data Engine can be used standalone. VisionAI Factory and Reliability Engine both require the Data Engine as a foundation. Each module includes 3 user seats.',
  },
  {
    question: 'How does volume pricing work?',
    answer: 'Volume discounts are applied based on your annual cumulative usage. As you process more data or monitor more predictions, you automatically unlock better rates.',
  },
  {
    question: 'What about enterprise pricing?',
    answer: 'For large deployments, we offer custom pricing with negotiated volume commitments, dedicated support, and SLAs. Contact our sales team for details.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--picsellia-green)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--system-blue)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Transparent Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Pay for what you <span className="text-[var(--picsellia-green)]">actually use</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              Modular platform pricing plus usage-based costs. Scale from pilot to production
              with volume discounts that grow with you.
            </p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-[var(--tertiary-system-background)] border border-[var(--border)]">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[var(--picsellia-green)] text-white'
                    : 'text-[var(--secondary-label)] hover:text-[var(--label)]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-[var(--picsellia-green)] text-white'
                    : 'text-[var(--secondary-label)] hover:text-[var(--label)]'
                }`}
              >
                Annual
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules Section */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Platform Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Choose your modules
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Start with Data Engine, then add VisionAI Factory and Reliability Engine as needed.
              Each module includes 3 user seats with the option to add more.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {platformModules.map((module) => (
              <div
                key={module.id}
                className={`card p-0 overflow-hidden relative ${
                  module.popular ? 'border-[var(--picsellia-green)] ring-1 ring-[var(--picsellia-green)]/20' : ''
                }`}
              >
                {module.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[var(--picsellia-green)] text-white text-xs text-center py-1.5 font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 ${module.popular ? 'pt-10' : ''}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `color-mix(in srgb, ${module.color} 15%, transparent)` }}
                  >
                    {module.id === 'data-engine' && (
                      <svg className="w-6 h-6" style={{ color: module.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    )}
                    {module.id === 'visionai-factory' && (
                      <svg className="w-6 h-6" style={{ color: module.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {module.id === 'reliability-engine' && (
                      <svg className="w-6 h-6" style={{ color: module.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2">{module.name}</h3>
                  <p className="text-sm text-[var(--tertiary-label)] mb-6">{module.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[var(--label)]">
                        €{billingCycle === 'monthly' ? module.monthlyPrice.toLocaleString() : (module.annualPrice / 12).toLocaleString()}
                      </span>
                      <span className="text-sm text-[var(--tertiary-label)]">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-xs text-[var(--tertiary-label)] mt-1">
                        €{module.annualPrice.toLocaleString()}/year billed annually
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    {module.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--secondary-label)]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--tertiary-label)]">Included users</span>
                      <span className="font-mono text-[var(--label)]">{module.includedUsers} seats</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[var(--tertiary-label)]">
                      <span>Extra user</span>
                      <span className="font-mono">
                        €{billingCycle === 'monthly' ? module.extraUserMonthly : Math.round(module.extraUserAnnual / 12)}/mo
                      </span>
                    </div>
                    {module.requiresDataEngine && (
                      <div className="flex items-center gap-1.5 text-xs text-[var(--system-blue)] mt-2">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Requires Data Engine</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Labeler seats */}
          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)] mb-1">Labeler Seats</h3>
                <p className="text-sm text-[var(--tertiary-label)]">
                  Add annotation workforce access. Unlimited seats available.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-[var(--label)]">€10</div>
                  <div className="text-xs text-[var(--tertiary-label)]">per labeler/month</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[var(--tertiary-label)]">Annual</div>
                  <div className="text-sm font-mono text-[var(--secondary-label)]">€120/year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage-Based Pricing Section */}
      <section className="py-20 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Usage-Based Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Volume discounts that scale with you
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Pay only for what you use. As your volume grows, your per-unit cost decreases automatically.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* DPU Pricing */}
            <div className="card p-0 overflow-hidden">
              <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Data Processing Units (DPU)</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">For data ingestion & processing</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-[var(--system-blue)]">€0.80</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">base price/DPU</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4 p-3 rounded-lg bg-[var(--tertiary-system-background)]">
                  <div className="text-xs font-medium text-[var(--secondary-label)] mb-2">Conversion rates</div>
                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <div className="text-center">
                      <div className="font-mono text-[var(--label)]">60 imgs</div>
                      <div className="text-[var(--tertiary-label)]">= 1 DPU</div>
                    </div>
                    <div className="text-center border-x border-[var(--border)]">
                      <div className="font-mono text-[var(--label)]">1 video</div>
                      <div className="text-[var(--tertiary-label)]">= 1 DPU</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-[var(--label)]">5 multi-spec</div>
                      <div className="text-[var(--tertiary-label)]">= 1 DPU</div>
                    </div>
                  </div>
                </div>

                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-[var(--tertiary-label)]">
                      <th className="text-left py-2 font-medium">Annual Images</th>
                      <th className="text-right py-2 font-medium">Discount</th>
                      <th className="text-right py-2 font-medium">Price/DPU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dpuTiers.map((tier, i) => (
                      <tr key={i} className="border-t border-[var(--border)]">
                        <td className="py-2 text-[var(--label)]">{tier.range}</td>
                        <td className="py-2 text-right">
                          <span className={`px-1.5 py-0.5 rounded ${
                            tier.discount === '0%'
                              ? 'bg-[var(--tertiary-system-background)] text-[var(--tertiary-label)]'
                              : 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]'
                          }`}>
                            {tier.discount}
                          </span>
                        </td>
                        <td className="py-2 text-right font-mono text-[var(--label)]">{tier.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MU Pricing */}
            <div className="card p-0 overflow-hidden">
              <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Monitoring Units (MU)</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">For production inference monitoring</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-[var(--system-orange)]">€1.00</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">base price/MU</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4 p-3 rounded-lg bg-[var(--tertiary-system-background)]">
                  <div className="text-xs font-medium text-[var(--secondary-label)] mb-2">Conversion rate</div>
                  <div className="text-center">
                    <div className="font-mono text-[var(--label)] text-sm">1,000 predictions = 1 MU</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">Each monitored inference counts as 1 prediction</div>
                  </div>
                </div>

                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-[var(--tertiary-label)]">
                      <th className="text-left py-2 font-medium">Annual Predictions</th>
                      <th className="text-right py-2 font-medium">Discount</th>
                      <th className="text-right py-2 font-medium">Price/MU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {muTiers.map((tier, i) => (
                      <tr key={i} className="border-t border-[var(--border)]">
                        <td className="py-2 text-[var(--label)]">{tier.range}</td>
                        <td className="py-2 text-right">
                          <span className={`px-1.5 py-0.5 rounded ${
                            tier.discount === '0%'
                              ? 'bg-[var(--tertiary-system-background)] text-[var(--tertiary-label)]'
                              : 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]'
                          }`}>
                            {tier.discount}
                          </span>
                        </td>
                        <td className="py-2 text-right font-mono text-[var(--label)]">{tier.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* GPU & Annotation */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[var(--label)]">GPU Compute</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold font-mono text-[var(--system-indigo)]">€3.50</span>
                      <span className="text-xs text-[var(--tertiary-label)]">/hour</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--tertiary-label)] mb-4">
                    Pay-per-use GPU allocation for training and inference. No commitment required.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded text-[10px] bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                      T4 • A10G • A100
                    </span>
                    <span className="px-2 py-1 rounded text-[10px] bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                      Auto-shutdown
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-pink)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--system-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[var(--label)]">Annotation Services</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold font-mono text-[var(--system-pink)]">€9.60</span>
                      <span className="text-xs text-[var(--tertiary-label)]">/hour</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--tertiary-label)] mb-4">
                    Professional labeling services with trained annotators for your projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded text-[10px] bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                      Quality assured
                    </span>
                    <span className="px-2 py-1 rounded text-[10px] bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                      All task types
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--system-indigo) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
                  Enterprise
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Custom pricing for large deployments
                </h2>
                <p className="text-[var(--secondary-label)] mb-8">
                  For organizations with high-volume needs, we offer custom pricing packages
                  with negotiated rates, dedicated support, and enterprise SLAs.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Custom volume commitments',
                    'Dedicated customer success manager',
                    'Priority support & SLAs',
                    'On-premise deployment options',
                    'Custom integrations',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/demo" className="btn-primary px-8 py-3">
                  Contact Sales
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--tertiary-system-background)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--label)]">SOC 2 Type II</div>
                      <div className="text-xs text-[var(--tertiary-label)]">Enterprise security compliance</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--tertiary-system-background)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--label)]">Private Cloud</div>
                      <div className="text-xs text-[var(--tertiary-label)]">Dedicated infrastructure options</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--tertiary-system-background)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--label)]">24/7 Support</div>
                      <div className="text-xs text-[var(--tertiary-label)]">Dedicated technical support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-0 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm font-medium text-[var(--label)]">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[var(--tertiary-label)] transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-[var(--secondary-label)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Ready to get started?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                Start with a free trial or talk to our team to find the right plan for your needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/trial" className="btn-primary px-8 py-3">
                  Start Free Trial
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary px-8 py-3">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

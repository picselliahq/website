'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Types for case study data
export interface CaseStudyMetric {
  value: string;
  label: string;
  description?: string;
}

export interface CaseStudyQuote {
  text: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface CaseStudyChallenge {
  title: string;
  description: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  feature: string;
  featureHref: string;
  icon: string;
}

export interface CaseStudySolution {
  title: string;
  description: string;
  feature: string;
  featureHref: string;
  metrics?: { value: string; label: string };
}

export interface RelatedCaseStudy {
  title: string;
  company: string;
  industry: string;
  href: string;
  logo?: string;
}

export interface CaseStudyData {
  company: {
    name: string;
    logo: string;
    industry: string;
    description: string;
    website?: string;
  };

  headline: string;
  subheadline: string;
  heroImage?: string;

  metrics: CaseStudyMetric[];

  transformation: {
    before: { title: string; items: string[] };
    after: { title: string; items: string[] };
  };

  challengeIntro: string;
  challenges: CaseStudyChallenge[];

  workflow: WorkflowStep[];

  solutionIntro: string;
  solutions: CaseStudySolution[];

  quote: CaseStudyQuote;

  resultsIntro: string;
  results: { title: string; description: string }[];

  featuresUsed: {
    name: string;
    href: string;
    icon: string;
    description: string;
  }[];

  relatedCaseStudies?: RelatedCaseStudy[];
  accentColor?: string;
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  const t = useTranslations('use-cases.caseStudyTemplate');

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-[var(--border)] relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--tertiary-system-background)] rounded-full blur-[100px] opacity-50" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[var(--tertiary-label)] mb-12">
            <Link href="/use-cases" className="hover:text-[var(--label)] transition-colors">
              {t('breadcrumb')}
            </Link>
            <span>/</span>
            <span className="text-[var(--label)]">{data.company.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              {/* Company Logo */}
              <div className="relative h-8 w-24 mb-8 opacity-60">
                <Image src={data.company.logo} alt={data.company.name} fill className="object-contain object-left" />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
                {data.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-[var(--secondary-label)] mb-8">
                {data.subheadline}
              </p>

              {/* CTA */}
              <Link href="/demo" className="btn-primary px-6 py-3">
                {t('ctaHero')}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 gap-4">
              {data.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] ${i === 0 ? '' : ''}`}
                >
                  <div className="flex items-baseline gap-4">
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                      {metric.value}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--label)]">{metric.label}</div>
                      {metric.description && (
                        <div className="text-xs text-[var(--tertiary-label)]">{metric.description}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Context */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-3">
                {t('companyLabel')}
              </div>
              <div className="text-lg font-medium mb-1">{data.company.name}</div>
              <div className="text-sm text-[var(--secondary-label)] mb-3">{data.company.industry}</div>
              {data.company.website && (
                <a
                  href={data.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--picsellia-green)] hover:underline"
                >
                  {data.company.website.replace(/^https?:\/\//, '')} ↗
                </a>
              )}
            </div>
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-3">
                {t('overviewLabel')}
              </div>
              <p className="text-base text-[var(--secondary-label)] leading-relaxed">
                {data.company.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-3">
              {t('challengeSection')}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold max-w-3xl">
              {data.challengeIntro}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.challenges.map((challenge, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                <div className="text-base font-medium mb-2">{challenge.title}</div>
                <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-3">
              {t('transformationSection')}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {t('transformationHeading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
              <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-6">
                {t('beforePicsellia')}
              </div>
              <ul className="space-y-4">
                {data.transformation.before.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--secondary-label)]">
                    <span className="text-[var(--tertiary-label)] mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl border border-[var(--picsellia-green)]/30 bg-[var(--picsellia-green)]/5">
              <div className="text-xs uppercase tracking-wider text-[var(--picsellia-green)] mb-6">
                {t('afterPicsellia')}
              </div>
              <ul className="space-y-4">
                {data.transformation.after.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--label)]">
                    <svg className="w-4 h-4 text-[var(--picsellia-green)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
            &ldquo;{data.quote.text}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--tertiary-system-background)] flex items-center justify-center text-lg font-medium">
              {data.quote.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-medium">{data.quote.author}</div>
              <div className="text-sm text-[var(--tertiary-label)]">
                {data.quote.role}, {data.quote.company}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workflow */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-3">
              {t('workflowSection')}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {t('workflowHeading', { companyName: data.company.name })}
            </h2>
          </div>

          <div className="space-y-4">
            {data.workflow.map((step, index) => (
              <div
                key={step.id}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-1">
                    <div className="w-10 h-10 rounded-xl bg-[var(--tertiary-system-background)] flex items-center justify-center">
                      <span className="text-sm font-medium text-[var(--tertiary-label)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="text-base font-medium">{step.title}</div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm text-[var(--secondary-label)]">{step.description}</p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <Link
                      href={step.featureHref}
                      className="inline-flex items-center gap-2 text-sm text-[var(--picsellia-green)] hover:underline"
                    >
                      {step.feature}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-3">
              {t('solutionSection')}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {t('solutionHeading')}
            </h2>
            <p className="text-base text-[var(--secondary-label)] max-w-2xl">
              {data.solutionIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.solutions.map((solution, index) => (
              <div key={index} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-medium">{solution.title}</h3>
                  <Link
                    href={solution.featureHref}
                    className="text-xs text-[var(--picsellia-green)] hover:underline whitespace-nowrap ml-4"
                  >
                    {solution.feature} →
                  </Link>
                </div>
                <p className="text-sm text-[var(--secondary-label)] leading-relaxed mb-4">
                  {solution.description}
                </p>
                {solution.metrics && (
                  <div className="pt-4 border-t border-[var(--border)]">
                    <div className="text-2xl font-semibold">{solution.metrics.value}</div>
                    <div className="text-xs text-[var(--tertiary-label)] mt-1">
                      {solution.metrics.label}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-3">
              {t('resultsSection')}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {t('resultsHeading')}
            </h2>
            <p className="text-base text-[var(--secondary-label)] max-w-2xl">
              {data.resultsIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.results.map((result, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-medium mb-1">{result.title}</div>
                  <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)] mb-8">
            {t('featuresUsedLabel')}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.featuresUsed.map((feature) => (
              <Link
                key={feature.name}
                href={feature.href}
                className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--picsellia-green)]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--tertiary-system-background)] flex items-center justify-center mb-4 group-hover:bg-[var(--picsellia-green)]/10 transition-colors">
                  <Image src={feature.icon} alt={feature.name} width={24} height={24} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-sm font-medium mb-1 group-hover:text-[var(--picsellia-green)] transition-colors">{feature.name}</div>
                <div className="text-xs text-[var(--tertiary-label)]">{feature.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {data.relatedCaseStudies && data.relatedCaseStudies.length > 0 && (
        <section className="py-20 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xs uppercase tracking-wider text-[var(--tertiary-label)]">
                {t('moreCaseStudies')}
              </div>
              <Link
                href="/use-cases"
                className="text-sm text-[var(--picsellia-green)] hover:underline"
              >
                {t('viewAll')}
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedCaseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.href}
                  href={caseStudy.href}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--picsellia-green)]/50 transition-colors group"
                >
                  {caseStudy.logo && (
                    <div className="relative h-6 w-20 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={caseStudy.logo}
                        alt={caseStudy.company}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  )}
                  <div className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-2">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-sm font-medium leading-snug group-hover:text-[var(--picsellia-green)] transition-colors">
                    {caseStudy.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-12 md:p-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {t('ctaBottomHeading')}
            </h2>
            <p className="text-base text-[var(--secondary-label)] mb-8 max-w-xl mx-auto">
              {t('ctaBottomDescription')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="btn-primary px-8 py-3">
                {t('ctaRequestDemo')}
              </Link>
              <Link href="/trial" className="btn-secondary px-8 py-3">
                {t('ctaStartFreeTrial')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

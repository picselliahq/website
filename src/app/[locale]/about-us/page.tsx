'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Company values
const values = [
  {
    title: 'Engineer-First',
    description: 'Built by ML engineers who understand the daily challenges of production AI. Every feature solves a real problem we faced ourselves.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description: 'Full visibility into your ML pipeline. Reproducible experiments, complete data lineage, and no black boxes. You own your data.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Flexibility',
    description: 'Deploy anywhere—cloud, hybrid, or on-premise. Use your existing tools. Picsellia adapts to your infrastructure, not the other way around.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Simplicity',
    description: 'Powerful features without complexity. Our platform reduces cognitive load so teams can focus on building great AI, not managing tools.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Leadership team
const leadership = [
  {
    name: 'Thibaut Lucas',
    role: 'CEO & Co-founder',
    bio: 'Former AI engineer who experienced firsthand the challenges of deploying computer vision in production. Founded Picsellia to build the tools he wished existed.',
    image: '/images/team/thibaut-lucas.jpg',
    linkedin: 'https://linkedin.com/in/thibaut-lucas',
  },
  {
    name: 'Pierre-Nicolas Tiffreau',
    role: 'CTO & Co-founder',
    bio: 'Deep expertise in ML infrastructure and scalable systems. Leads the technical vision and architecture of the Picsellia platform.',
    image: '/images/team/pierre-nicolas-tiffreau.jpg',
    linkedin: 'https://linkedin.com/in/pierre-nicolas-tiffreau',
  },
];

// Team members
const teamMembers = [
  { name: 'Hicham Bakri', role: 'Full-stack Developer' },
  { name: 'Clément Brunie', role: 'Front-end Engineer' },
  { name: 'Thomas Darget', role: 'Back-end Engineer' },
  { name: 'Lucien Haurat', role: 'DevOps Engineer' },
  { name: 'Guillaume Herlaut', role: 'Account Executive' },
  { name: 'Victor Pery', role: 'Account Executive' },
  { name: 'Valentin Philipp', role: 'Sales Engineer' },
  { name: 'Sonia Garrouch', role: 'Data Scientist' },
];

// Milestones
const milestones = [
  { year: '2019', title: 'Founded', description: 'Picsellia founded in Toulouse, France by two AI engineers' },
  { year: '2021', title: 'First Funding', description: 'Seed funding from Acequia Capital and early backers' },
  { year: '2022', title: 'Series Seed', description: '$1.94M raised led by Axeleo Capital to accelerate growth' },
  { year: '2023', title: 'ISO 27001', description: 'Achieved ISO/IEC 27001:2022 certification' },
  { year: '2024', title: '1K+ Users', description: 'Crossed 1,000 global users and 500+ models trained' },
  { year: '2025', title: 'Atlas Launch', description: 'Launched Atlas, our open-source AI agent for VisionAI' },
];

// Key metrics
const metrics = [
  { value: '500+', label: 'AI Models Trained' },
  { value: '3M+', label: 'Images Annotated' },
  { value: '1K+', label: 'Global Users' },
  { value: '2019', label: 'Founded' },
];

// Investors
const investors = [
  { name: 'Axeleo Capital', type: 'Lead Investor' },
  { name: 'Acequia Capital', type: 'Seed Investor' },
  { name: 'Nubbo', type: 'Strategic Partner' },
  { name: 'OVHcloud', type: 'Startup Program' },
];

export default function AboutPage() {
  const t = useTranslations('about');
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--system-blue)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--picsellia-green)]" />
              <span className="text-sm font-medium text-[var(--picsellia-green)]">{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              {t('hero.title')}
              <span className="text-[var(--picsellia-green)]">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-8">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-3xl md:text-4xl font-semibold text-[var(--label)]">{metric.value}</div>
                  <div className="text-sm text-[var(--tertiary-label)]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                {t('mission.sectionLabel')}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {t('mission.title')}
              </h2>
              <div className="space-y-6 text-[var(--secondary-label)]">
                {(t.raw('mission.paragraphs') as string[]).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="card p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--picsellia-green)] rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--picsellia-green)] rounded-br-lg" />

              <blockquote className="text-xl md:text-2xl font-medium text-[var(--label)] leading-relaxed mb-6">
                &ldquo;{t('mission.quote')}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--picsellia-green)] to-[var(--system-blue)] flex items-center justify-center text-white font-semibold">
                  TL
                </div>
                <div>
                  <div className="font-semibold text-[var(--label)]">Thibaut Lucas</div>
                  <div className="text-sm text-[var(--tertiary-label)]">CEO & Co-founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--picsellia-green) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('values.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('values.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              {t('values.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-8">
                <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-6 text-[var(--picsellia-green)]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--label)] mb-3">{value.title}</h3>
                <p className="text-[var(--secondary-label)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('timeline.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('timeline.title')}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)] hidden lg:block" />

            <div className="space-y-8 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                    <div className="card p-6 inline-block text-left relative">
                      {/* Connector dot */}
                      <div
                        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--system-blue)] border-4 border-[var(--background)] ${
                          index % 2 === 0 ? '-right-[1.875rem]' : '-left-[1.875rem]'
                        }`}
                      />

                      <div className="text-sm font-semibold text-[var(--system-blue)] mb-1">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-[var(--label)] mb-2">{milestone.title}</h3>
                      <p className="text-sm text-[var(--tertiary-label)]">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('leadership.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('leadership.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((person) => (
              <div key={person.name} className="card p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--picsellia-green)] to-[var(--system-blue)] mx-auto mb-6 flex items-center justify-center text-2xl font-semibold text-white">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-[var(--label)] mb-1">{person.name}</h3>
                <div className="text-sm text-[var(--picsellia-green)] mb-4">{person.role}</div>
                <p className="text-sm text-[var(--secondary-label)] mb-6">{person.bio}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('team.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('team.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              {t('team.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--tertiary-system-background)] border border-[var(--border)] mx-auto mb-4 flex items-center justify-center text-lg font-medium text-[var(--secondary-label)]">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-[var(--label)] text-sm mb-1">{member.name}</h3>
                <div className="text-xs text-[var(--tertiary-label)]">{member.role}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-secondary">
              {t('team.joinTeam')}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('investors.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('investors.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              {t('investors.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {investors.map((investor) => (
              <div key={investor.name} className="text-center p-6">
                <div className="text-lg font-semibold text-[var(--label)] mb-1">{investor.name}</div>
                <div className="text-xs text-[var(--tertiary-label)]">{investor.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
                {t('location.sectionLabel')}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {t('location.title')}
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                {t('location.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[var(--label)]">{t('location.address')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--label)]">{t('location.worldwide')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[var(--label)]">{t('location.compliance')}</span>
                </div>
              </div>
            </div>

            <div className="card p-0 overflow-hidden aspect-video relative bg-[var(--tertiary-system-background)]">
              {/* Stylized map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--system-indigo)]/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 rounded-full bg-[var(--system-indigo)] animate-pulse" />
                  </div>
                  <div className="font-semibold text-[var(--label)]">Toulouse</div>
                  <div className="text-sm text-[var(--tertiary-label)]">France</div>
                </div>
              </div>
              {/* Grid background */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(var(--label) 1px, transparent 1px), linear-gradient(90deg, var(--label) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--picsellia-green)]/10 to-[var(--system-blue)]/10" />
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--label) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }} />

            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                {t('cta.description')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/trial" className="btn-primary px-8 py-3">
                  {t('cta.startTrial')}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary px-8 py-3">
                  {t('cta.bookDemo')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

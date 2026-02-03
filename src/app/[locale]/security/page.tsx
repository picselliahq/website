'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Deployment options
const deploymentOptions = [
  {
    id: 'saas',
    name: 'SaaS',
    description: 'Fully managed cloud platform',
    tagline: 'Get started in minutes',
    color: 'var(--picsellia-green)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: [
      'Zero infrastructure management',
      'Automatic updates & patches',
      'Built-in redundancy & backups',
      'ISO 27001:2022 certified',
      'EU & US data centers',
      'Instant provisioning',
    ],
    bestFor: 'Teams who want to focus on ML, not infrastructure',
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    description: 'Your data, our platform',
    tagline: 'Best of both worlds',
    color: 'var(--system-blue)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Connect your own storage (S3, GCS, Azure)',
      'Use your GPU compute resources',
      'Bring your Docker registry',
      'Data never leaves your infrastructure',
      'Picsellia manages the control plane',
      'Seamless integration',
    ],
    bestFor: 'Organizations with existing cloud infrastructure & data residency requirements',
  },
  {
    id: 'on-premise',
    name: 'On-Premise',
    description: 'Full control, your infrastructure',
    tagline: 'Maximum security & compliance',
    color: 'var(--system-indigo)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    features: [
      'Kubernetes (Helm charts)',
      'Docker Compose deployment',
      'Air-gapped environments supported',
      'Deploy on any cloud or bare metal',
      'Full network isolation',
      'Custom security policies',
    ],
    bestFor: 'Enterprises with strict compliance requirements or air-gapped environments',
  },
];

// RBAC roles
const rbacRoles = [
  {
    level: 'Organization',
    color: 'var(--system-indigo)',
    roles: [
      { name: 'Owner', description: 'Full administrative control, billing, user management' },
      { name: 'Admin', description: 'Manage users, workspaces, and organization settings' },
      { name: 'Member', description: 'Access assigned workspaces and projects' },
    ],
  },
  {
    level: 'Workspace',
    color: 'var(--system-blue)',
    roles: [
      { name: 'Manager', description: 'Create projects, manage workspace members' },
      { name: 'Contributor', description: 'Edit projects, datasets, and experiments' },
      { name: 'Viewer', description: 'Read-only access to workspace resources' },
    ],
  },
  {
    level: 'Project',
    color: 'var(--picsellia-green)',
    roles: [
      { name: 'Lead', description: 'Full project control, manage collaborators' },
      { name: 'Editor', description: 'Modify datasets, run experiments, deploy models' },
      { name: 'Annotator', description: 'Label data within assigned campaigns' },
      { name: 'Reviewer', description: 'Review and approve annotations' },
    ],
  },
];

// Certifications
const certifications = [
  {
    name: 'ISO 27001:2022',
    description: 'International standard for information security management',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'GDPR Compliant',
    description: 'EU data protection & privacy standards',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    name: 'Data Encryption',
    description: 'AES-256 at rest, TLS 1.3 in transit',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    name: 'SSO / SAML',
    description: 'Enterprise identity provider integration',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
];

// Security features
const securityFeatures = [
  {
    title: 'Audit Logs',
    description: 'Complete activity tracking for compliance and forensics',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'API Key Management',
    description: 'Scoped tokens with expiration and revocation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: 'IP Allowlisting',
    description: 'Restrict access to trusted networks',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: '2FA / MFA',
    description: 'Multi-factor authentication for all users',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Data Isolation',
    description: 'Tenant separation at storage and compute level',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Backup & Recovery',
    description: 'Automated backups with point-in-time recovery',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function SecurityPage() {
  const t = useTranslations('security');
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--system-indigo)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--picsellia-green)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-indigo)]/10 border border-[var(--system-indigo)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-[var(--system-indigo)]">{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight max-w-4xl mx-auto">
              {t('hero.title')} <span className="text-[var(--system-indigo)]">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary px-8 py-4 text-base">
                {t('hero.talkToSecurity')}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="https://documentation.picsellia.com" className="btn-secondary px-8 py-4 text-base">
                {t('hero.securityDocs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('deployment.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('deployment.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              {t('deployment.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {deploymentOptions.map((option) => (
              <div key={option.id} className="card p-0 overflow-hidden flex flex-col">
                <div className="p-6 border-b border-[var(--border)]">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `color-mix(in srgb, ${option.color} 15%, transparent)`, color: option.color }}
                  >
                    {option.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-[var(--label)]">{option.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--secondary-label)] mb-1">{option.description}</p>
                  <p className="text-xs text-[var(--tertiary-label)]">{option.tagline}</p>
                </div>

                <div className="p-6 flex-1">
                  <div className="space-y-3">
                    {option.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: option.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-[var(--secondary-label)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                  <p className="text-xs text-[var(--tertiary-label)]">
                    <span className="font-medium text-[var(--secondary-label)]">{t('deployment.bestFor')}</span> {option.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Deep Dive */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                {t('hybridArchitecture.sectionLabel')}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {t('hybridArchitecture.title')}
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                {t('hybridArchitecture.description')}
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Cloud Storage', desc: 'AWS S3, Google Cloud Storage, Azure Blob', icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  )},
                  { label: 'GPU Compute', desc: 'Your AWS, GCP, or Azure GPU instances', icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )},
                  { label: 'Docker Registry', desc: 'ECR, GCR, ACR, or private registries', icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  )},
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                    <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center text-[var(--system-blue)] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--label)]">{item.label}</h4>
                      <p className="text-xs text-[var(--tertiary-label)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture diagram */}
            <div className="card p-6">
              <div className="text-xs font-medium text-[var(--tertiary-label)] uppercase tracking-wider mb-6">{t('hybridArchitecture.diagram.title')}</div>

              <div className="space-y-4">
                {/* Your Infrastructure */}
                <div className="p-4 rounded-lg border-2 border-dashed border-[var(--system-blue)]/30 bg-[var(--system-blue)]/5">
                  <div className="text-xs font-semibold text-[var(--system-blue)] mb-3">{t('hybridArchitecture.diagram.yourInfrastructure')}</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Storage', 'Compute', 'Registry'].map((item) => (
                      <div key={item} className="p-3 rounded bg-[var(--secondary-system-background)] border border-[var(--border)] text-center">
                        <div className="text-xs font-medium text-[var(--label)]">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection arrows */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>

                {/* Picsellia Control Plane */}
                <div className="p-4 rounded-lg border border-[var(--picsellia-green)]/30 bg-[var(--picsellia-green)]/5">
                  <div className="text-xs font-semibold text-[var(--picsellia-green)] mb-3">{t('hybridArchitecture.diagram.controlPlane')}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {['UI & API', 'Orchestration', 'Monitoring', 'Metadata'].map((item) => (
                      <div key={item} className="p-2 rounded bg-[var(--secondary-system-background)] border border-[var(--border)] text-center">
                        <div className="text-[10px] font-medium text-[var(--label)]">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 rounded-lg bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-2 text-xs text-[var(--secondary-label)]">
                  <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>{t('hybridArchitecture.diagram.dataNeverLeaves')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Premise Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Deployment options */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Kubernetes</h3>
                  <p className="text-xs text-[var(--tertiary-label)] mb-4">
                    Deploy with Helm charts on any Kubernetes cluster
                  </p>
                  <div className="font-mono text-[10px] bg-[var(--black)] rounded p-2 text-[var(--secondary-label)]">
                    helm install picsellia
                  </div>
                </div>

                <div className="card p-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Docker Compose</h3>
                  <p className="text-xs text-[var(--tertiary-label)] mb-4">
                    Simple deployment for smaller teams
                  </p>
                  <div className="font-mono text-[10px] bg-[var(--black)] rounded p-2 text-[var(--secondary-label)]">
                    docker-compose up -d
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg border border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--system-indigo)] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-[var(--label)] mb-1">Air-gapped support</div>
                    <p className="text-xs text-[var(--tertiary-label)]">
                      Full offline installation available. Container images and charts can be
                      transferred via secure media for isolated environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
                {t('onPremise.sectionLabel')}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {t('onPremise.title')}
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                {t('onPremise.description')}
              </p>

              <div className="space-y-3">
                {[
                  'Deploy on AWS, GCP, Azure, or bare metal',
                  'Full network isolation & firewall control',
                  'Custom SSL certificates',
                  'Integration with internal identity providers',
                  'Your backup & disaster recovery policies',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--label)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('certifications.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('certifications.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              {t('certifications.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert) => (
              <div key={cert.name} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mx-auto mb-4 text-[var(--picsellia-green)]">
                  {cert.icon}
                </div>
                <h3 className="text-sm font-semibold text-[var(--label)] mb-1">{cert.name}</h3>
                <p className="text-xs text-[var(--tertiary-label)]">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Security features grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)]">
                <div className="w-9 h-9 rounded-lg bg-[var(--tertiary-system-background)] flex items-center justify-center flex-shrink-0 text-[var(--secondary-label)]">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--label)]">{feature.title}</h4>
                  <p className="text-xs text-[var(--tertiary-label)]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RBAC Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-indigo) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('rbac.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('rbac.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              {t('rbac.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {rbacRoles.map((level) => (
              <div key={level.level} className="card p-0 overflow-hidden">
                <div
                  className="px-6 py-4 border-b border-[var(--border)]"
                  style={{ backgroundColor: `color-mix(in srgb, ${level.color} 8%, transparent)` }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: level.color }} />
                    <h3 className="text-lg font-semibold text-[var(--label)]">{level.level} Level</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {level.roles.map((role) => (
                    <div key={role.name} className="pb-4 border-b border-[var(--border)] last:border-0 last:pb-0">
                      <div className="text-sm font-semibold text-[var(--label)] mb-1">{role.name}</div>
                      <p className="text-xs text-[var(--tertiary-label)]">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)] mb-1">{t('rbac.customRoles.title')}</h3>
                <p className="text-sm text-[var(--tertiary-label)]">
                  {t('rbac.customRoles.description')}
                </p>
              </div>
              <Link href="/demo" className="btn-secondary whitespace-nowrap">
                {t('rbac.customRoles.requestAccess')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--system-indigo) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                {t('cta.description')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo" className="btn-primary px-8 py-3">
                  {t('cta.talkToSecurity')}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/pricing" className="btn-secondary px-8 py-3">
                  {t('cta.viewPricing')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

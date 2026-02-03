'use client';

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';

const includedFeatures = [
  {
    category: "Data Management",
    color: "var(--picsellia-green)",
    icon: "/images/community/icons/data-management.svg",
    description: "Organize, version, and manage all your visual data in one place.",
    features: [
      "Datalake storage with smart search",
      "Dataset registry & versioning",
      "Data query language",
      "Metadata management",
      "Multi-format support (images, video)",
    ],
  },
  {
    category: "AutoML Training",
    color: "var(--system-indigo)",
    icon: "/images/community/icons/experiment-tracking.svg",
    description: "Train computer vision models with zero infrastructure setup.",
    features: [
      "4 AutoML training runs included",
      "Pre-configured model architectures",
      "Automatic hyperparameter tuning",
      "Training metrics & logging",
    ],
  },
];

const stats = [
  { value: "150", unit: "DPU", label: "Data Processing Units / year" },
  { value: "4", unit: "Runs", label: "AutoML training runs" },
  { value: "3", unit: "Projects", label: "Active projects included" },
  { value: "24/7", unit: "Access", label: "Platform availability" },
];

const comparisonTable = [
  { feature: "Data Processing Units", community: "150 DPU/year", business: "Custom", enterprise: "Unlimited" },
  { feature: "Model Processing Units", community: "—", business: "Custom", enterprise: "Unlimited" },
  { feature: "AutoML Training", community: "4 runs", business: "Unlimited", enterprise: "Unlimited" },
  { feature: "Labeling Tool", community: "✓", business: "✓", enterprise: "✓" },
  { feature: "Model Deployment", community: "—", business: "✓", enterprise: "✓" },
  { feature: "Model Monitoring", community: "—", business: "✓", enterprise: "✓" },
  { feature: "Team members", community: "1 user", business: "Up to 10", enterprise: "Unlimited" },
  { feature: "Projects", community: "3 projects", business: "Unlimited", enterprise: "Unlimited" },
  { feature: "Support", community: "Community", business: "Email", enterprise: "Dedicated" },
  { feature: "SSO / SAML", community: "—", business: "—", enterprise: "✓" },
  { feature: "On-premise deployment", community: "—", business: "—", enterprise: "✓" },
];

const partnerLogos = [
  { name: "PyTorch", src: "/images/community/partners/pytorch.svg" },
  { name: "TensorFlow", src: "/images/community/partners/tensorflow.svg" },
  { name: "Hugging Face", src: "/images/community/partners/huggingface.svg" },
  { name: "Azure", src: "/images/community/partners/azure.svg" },
  { name: "Google Cloud", src: "/images/community/partners/google-cloud.svg" },
  { name: "Amazon S3", src: "/images/community/partners/amazon-s3.svg" },
  { name: "MLflow", src: "/images/community/partners/mlflow.svg" },
  { name: "Jupyter", src: "/images/community/partners/jupyter.svg" },
  { name: "Ultralytics", src: "/images/community/partners/ultralytics.svg" },
  { name: "NVIDIA Jetson", src: "/images/community/partners/nvidia-jetson.svg" },
];

export default function CommunityPage() {
  const t = useTranslations('community');
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--picsellia-green)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--system-indigo)]/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]"></span>
                </span>
                <span className="text-sm font-medium text-[var(--picsellia-green)]">
                  {t('hero.badge')}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                {t('hero.title')}<br />
                <span className="text-[var(--picsellia-green)]">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
                {t('hero.description')}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="https://app.picsellia.com/signup"
                  className="btn-primary px-8 py-4 text-base"
                >
                  {t('hero.startBuilding')}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/pricing" className="btn-secondary px-8 py-4 text-base">
                  {t('hero.comparePlans')}
                </Link>
              </div>

              {/* Quick benefits */}
              <div className="flex flex-wrap gap-6 text-sm text-[var(--secondary-label)]">
                {['No credit card', 'Instant access', '150 DPU free'].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[var(--picsellia-green)]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Terminal */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="card p-0 overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                    <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                    <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                    <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                    <span className="ml-2 text-xs text-[var(--tertiary-label)]">quickstart.py</span>
                  </div>
                  <pre className="p-6 text-sm overflow-x-auto bg-[var(--black)]">
                    <code>
                      <span className="text-[var(--tertiary-label)]"># Install the SDK</span>{'\n'}
                      <span className="text-[var(--system-indigo)]">pip install</span> <span className="text-[var(--label)]">picsellia</span>{'\n\n'}
                      <span className="text-[var(--tertiary-label)]"># Connect to your workspace</span>{'\n'}
                      <span className="text-[var(--system-indigo)]">from</span> <span className="text-[var(--label)]">picsellia</span> <span className="text-[var(--system-indigo)]">import</span> <span className="text-[var(--label)]">Client</span>{'\n\n'}
                      <span className="text-[var(--label)]">client</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">Client(</span>{'\n'}
                      <span className="text-[var(--label)]">    api_token</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;YOUR_API_TOKEN&quot;</span>{'\n'}
                      <span className="text-[var(--label)]">)</span>{'\n\n'}
                      <span className="text-[var(--tertiary-label)]"># Create a project & dataset</span>{'\n'}
                      <span className="text-[var(--label)]">project</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.create_project(</span><span className="text-[var(--picsellia-green)]">&quot;my-cv-project&quot;</span><span className="text-[var(--label)]">)</span>{'\n'}
                      <span className="text-[var(--label)]">dataset</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.create_dataset(</span><span className="text-[var(--picsellia-green)]">&quot;my-dataset&quot;</span><span className="text-[var(--label)]">)</span>{'\n'}
                      <span className="text-[var(--label)]">version</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">dataset.create_version(</span><span className="text-[var(--picsellia-green)]">&quot;v1&quot;</span><span className="text-[var(--label)]">)</span>{'\n\n'}
                      <span className="text-[var(--tertiary-label)]"># Launch an experiment</span>{'\n'}
                      <span className="text-[var(--label)]">exp</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">project.create_experiment(</span>{'\n'}
                      <span className="text-[var(--label)]">    </span><span className="text-[var(--picsellia-green)]">&quot;first-run&quot;</span>{'\n'}
                      <span className="text-[var(--label)]">)</span>{'\n'}
                      <span className="text-[var(--label)]">exp.attach_dataset(</span><span className="text-[var(--picsellia-green)]">&quot;train&quot;</span><span className="text-[var(--label)]">, version)</span>{'\n'}
                      <span className="text-[var(--label)]">exp.launch(gpus</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--system-orange)]">1</span><span className="text-[var(--label)]">)</span>
                    </code>
                  </pre>
                </div>

                <div className="absolute -bottom-8 -left-8 card p-4 shadow-xl bg-[var(--card)] border-[var(--picsellia-green)]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--label)]">Model trained</div>
                      <div className="text-xs text-[var(--picsellia-green)]">mAP: 94.5%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 card px-4 py-2 shadow-xl bg-[var(--card)]">
                  <div className="text-xs text-[var(--tertiary-label)]">AutoML</div>
                  <div className="text-lg font-bold text-[var(--label)] font-mono">4 runs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-[var(--secondary-system-background)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-[var(--label)]">{stat.value}</span>
                  <span className="text-sm text-[var(--picsellia-green)] font-medium">{stat.unit}</span>
                </div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('included.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('included.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              {t('included.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {includedFeatures.map((feature) => (
              <div key={feature.category} className="card p-8 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
                  style={{ backgroundColor: feature.color }}
                />

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${feature.color} 15%, transparent)`,
                    }}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.category}
                      width={32}
                      height={32}
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-[var(--label)] mb-2">
                    {feature.category}
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)] mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `color-mix(in srgb, ${feature.color} 20%, transparent)` }}
                        >
                          <svg
                            className="w-3 h-3"
                            style={{ color: feature.color }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-[var(--label)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* What's not included */}
          <div className="mt-8 card p-6 bg-[var(--tertiary-system-background)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--label)] mb-1">{t('included.needMore.title')}</h4>
                <p className="text-sm text-[var(--secondary-label)]">
                  {t('included.needMore.description')}{' '}
                  <Link href="/pricing" className="text-[var(--system-orange)] hover:underline">
                    {t('included.needMore.plansLink')}
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--label) 1px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('comparison.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('comparison.title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              {t('comparison.description')}
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                    <th className="text-left p-5 text-sm font-medium text-[var(--tertiary-label)]">Feature</th>
                    <th className="text-center p-5 min-w-[140px]">
                      <div className="inline-flex flex-col items-center gap-1">
                        <span className="px-3 py-1 rounded-full bg-[var(--picsellia-green)]/10 text-sm font-semibold text-[var(--picsellia-green)]">Community</span>
                        <span className="text-xs text-[var(--tertiary-label)]">Free</span>
                      </div>
                    </th>
                    <th className="text-center p-5 min-w-[140px]">
                      <div className="inline-flex flex-col items-center gap-1">
                        <span className="text-sm font-semibold text-[var(--label)]">Business</span>
                        <span className="text-xs text-[var(--tertiary-label)]">From $499/mo</span>
                      </div>
                    </th>
                    <th className="text-center p-5 min-w-[140px]">
                      <div className="inline-flex flex-col items-center gap-1">
                        <span className="text-sm font-semibold text-[var(--label)]">Enterprise</span>
                        <span className="text-xs text-[var(--tertiary-label)]">Custom</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`${index !== comparisonTable.length - 1 ? "border-b border-[var(--border)]" : ""} hover:bg-[var(--tertiary-system-background)]/50 transition-colors`}
                    >
                      <td className="p-5 text-sm text-[var(--secondary-label)]">{row.feature}</td>
                      <td className="p-5 text-center text-sm text-[var(--label)] font-medium">{row.community}</td>
                      <td className="p-5 text-center text-sm text-[var(--secondary-label)]">{row.business}</td>
                      <td className="p-5 text-center text-sm text-[var(--secondary-label)]">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('resources.sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('resources.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="https://documentation.picsellia.com" className="group relative">
              <div className="card p-8 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--system-blue)]/5 rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--system-blue)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image src="/images/community/icons/datalake.svg" alt="Documentation" width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--system-blue)] transition-colors">
                    Documentation
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)] mb-6">
                    Comprehensive guides, API references, and best practices.
                  </p>
                  <span className="text-sm text-[var(--system-blue)] flex items-center gap-2 font-medium">
                    Read docs
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group relative">
              <div className="card p-8 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--system-orange)]/5 rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--system-orange)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image src="/images/community/icons/annotation-campaigns.svg" alt="Tutorials" width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--system-orange)] transition-colors">
                    Tutorials
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)] mb-6">
                    Step-by-step guides to build your first CV project.
                  </p>
                  <span className="text-sm text-[var(--system-orange)] flex items-center gap-2 font-medium">
                    Start learning
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="https://github.com/picsellia" className="group relative">
              <div className="card p-8 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--system-indigo)]/5 rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--system-indigo)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image src="/images/community/icons/ci-cd.svg" alt="GitHub" width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--system-indigo)] transition-colors">
                    GitHub
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)] mb-6">
                    Sample projects, SDKs, and open-source tools.
                  </p>
                  <span className="text-sm text-[var(--system-indigo)] flex items-center gap-2 font-medium">
                    View repos
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners / Integrations */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('integrations.sectionLabel')}
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {t('integrations.title')}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="relative w-24 h-12 md:w-32 md:h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image src={partner.src} alt={partner.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--picsellia-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--picsellia-green)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <span className="text-sm font-medium text-[var(--picsellia-green)]">
                  {t('cta.badge')}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                {t('cta.description')}
              </p>
              <Link
                href="https://app.picsellia.com/signup"
                className="btn-primary px-10 py-4 text-base inline-flex items-center gap-2"
              >
                {t('cta.button')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

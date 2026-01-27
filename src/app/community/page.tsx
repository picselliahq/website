import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Edition | Picsellia",
  description: "Get started with Picsellia's free Community Edition. Perfect for individuals and small teams exploring computer vision.",
};

const includedFeatures = [
  {
    category: "Data Management",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
    features: ["Datalake storage", "Dataset registry", "Smart versioning", "Data query language"],
  },
  {
    category: "Model Operations",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
      </svg>
    ),
    features: ["Experiment tracking", "Model evaluation", "Training metrics", "Artifact management"],
  },
  {
    category: "Deployment",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688z" />
      </svg>
    ),
    features: ["Scalable deployment", "Model monitoring", "Basic inference", "API access"],
  },
  {
    category: "Resources",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    features: ["Documentation", "Tutorials", "Community support", "Sample projects"],
  },
];

const comparisonTable = [
  { feature: "Data Processing Units", community: "150 DPU/year", business: "Custom", enterprise: "Unlimited" },
  { feature: "Model Processing Units", community: "—", business: "Custom", enterprise: "Unlimited" },
  { feature: "Team members", community: "1 user", business: "Up to 10", enterprise: "Unlimited" },
  { feature: "Projects", community: "3 projects", business: "Unlimited", enterprise: "Unlimited" },
  { feature: "Support", community: "Community", business: "Email", enterprise: "Dedicated" },
  { feature: "SSO / SAML", community: "—", business: "—", enterprise: "✓" },
  { feature: "On-premise deployment", community: "—", business: "—", enterprise: "✓" },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--picsellia-green) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]"></span>
              </span>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">
                Free Forever
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Community Edition
            </h1>
            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10">
              Start building computer vision applications for free. Perfect for learning,
              prototyping, and individual projects.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="https://app.picsellia.com/signup"
                className="btn-primary px-8 py-3 text-base"
              >
                Get Started Free
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/pricing" className="btn-secondary px-8 py-3 text-base">
                Compare Plans
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--tertiary-label)]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                150 DPU included
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Instant access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              What&apos;s Included
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Everything to get started
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              The Community Edition includes core features to build, train, and deploy computer vision models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedFeatures.map((category) => (
              <div key={category.category} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center text-[var(--picsellia-green)] mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--label)] mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[var(--secondary-label)]">
                      <svg className="w-4 h-4 text-[var(--picsellia-green)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Compare Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Community vs. Paid Plans
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              See how the Community Edition compares to our Business and Enterprise offerings.
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left p-4 text-sm font-medium text-[var(--tertiary-label)]">Feature</th>
                    <th className="text-center p-4">
                      <div className="inline-flex flex-col items-center">
                        <span className="text-sm font-semibold text-[var(--picsellia-green)]">Community</span>
                        <span className="text-xs text-[var(--tertiary-label)]">Free</span>
                      </div>
                    </th>
                    <th className="text-center p-4">
                      <div className="inline-flex flex-col items-center">
                        <span className="text-sm font-semibold text-[var(--label)]">Business</span>
                        <span className="text-xs text-[var(--tertiary-label)]">From $499/mo</span>
                      </div>
                    </th>
                    <th className="text-center p-4">
                      <div className="inline-flex flex-col items-center">
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
                      className={index !== comparisonTable.length - 1 ? "border-b border-[var(--border)]" : ""}
                    >
                      <td className="p-4 text-sm text-[var(--secondary-label)]">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-[var(--label)] font-medium">{row.community}</td>
                      <td className="p-4 text-center text-sm text-[var(--secondary-label)]">{row.business}</td>
                      <td className="p-4 text-center text-sm text-[var(--secondary-label)]">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/pricing" className="text-sm text-[var(--picsellia-green)] hover:underline">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Learn and connect
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              Get help from our documentation, tutorials, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Documentation */}
            <Link href="https://docs.picsellia.com" className="card p-6 group hover:border-[var(--picsellia-green)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center text-[var(--system-blue)] mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                Documentation
              </h3>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                Comprehensive guides and API references to help you get the most out of Picsellia.
              </p>
              <span className="text-sm text-[var(--picsellia-green)] flex items-center gap-1">
                Read docs
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Tutorials */}
            <Link href="/blog" className="card p-6 group hover:border-[var(--picsellia-green)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center text-[var(--system-orange)] mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                Tutorials
              </h3>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                Step-by-step guides to help you build your first computer vision project.
              </p>
              <span className="text-sm text-[var(--picsellia-green)] flex items-center gap-1">
                Start learning
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* GitHub */}
            <Link href="https://github.com/picsellia" className="card p-6 group hover:border-[var(--picsellia-green)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-gray)]/20 flex items-center justify-center text-[var(--label)] mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2 group-hover:text-[var(--picsellia-green)] transition-colors">
                GitHub
              </h3>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                Explore sample projects, SDKs, and contribute to our open-source tools.
              </p>
              <span className="text-sm text-[var(--picsellia-green)] flex items-center gap-1">
                View repos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-[0.05]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, var(--picsellia-green) 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Ready to start building?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-8">
                Join thousands of developers using Picsellia to build computer vision applications.
                No credit card required.
              </p>
              <Link
                href="https://app.picsellia.com/signup"
                className="btn-primary px-8 py-3 text-base inline-flex items-center gap-2"
              >
                Create Free Account
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

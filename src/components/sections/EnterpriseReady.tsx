import { Link as LocaleLink } from "@/i18n/navigation";

const enterpriseFeatures = [
  {
    title: "ISO 27001:2022",
    description: "Certified information security management",
  },
  {
    title: "Deploy Anywhere",
    description: "Cloud, on-premise, or hybrid deployment",
  },
  {
    title: "Role-Based Access",
    description: "SSO/SAML with fine-grained permissions",
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise SLAs with 24/7 support",
  },
  { title: "API-First", description: "Full REST API and Python SDK" },
  {
    title: "Infinite Scale",
    description: "Handle millions of images without breaking",
  },
];

export default function EnterpriseReady() {
  return (
    <section className="py-24 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Enterprise Ready
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Built for teams that can&apos;t afford to fail
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              Security, compliance, and reliability that enterprise teams
              demand.
            </p>
          </div>
          <LocaleLink href="/demo" className="btn-secondary">
            Talk to Sales
          </LocaleLink>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enterpriseFeatures.map((feature) => (
            <div key={feature.title} className="card p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-[var(--system-blue)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="text-base font-medium text-[var(--label)]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--secondary-label)] pl-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

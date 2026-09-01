import { Link as LocaleLink } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const comparisonKeys = [
  { key: "roboflow" as const, href: "/compare/roboflow" as const },
  { key: "labelbox" as const, href: "/compare/labelbox" as const },
  { key: "encord" as const, href: "/compare/encord" as const },
];

const faqKeys = ["q1", "q2", "q3"] as const;

export default function ComparisonFAQSection() {
  const t = useTranslations('labelingTool');
  return (
    <>
      {/* Comparison Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('comparison.title')}
            </h2>
            <p className="text-[var(--secondary-label)]">
              {t('comparison.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {comparisonKeys.map((c) => (
              <LocaleLink key={c.key} href={c.href} className="card p-6 flex flex-col group">
                <p className="text-sm text-[var(--secondary-label)] leading-relaxed mb-6 flex-1">
                  {t(`comparison.cards.${c.key}.desc`)}
                </p>
                <span className="text-sm font-medium text-[var(--picsellia-green)] flex items-center gap-1">
                  {t(`comparison.cards.${c.key}.cta`)}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            {t('faq.title')}
          </h2>
          <div className="space-y-4">
            {faqKeys.map((key) => (
              <div key={key} className="card p-6">
                <h3 className="text-sm font-semibold text-[var(--label)] mb-2">
                  {t(`faq.${key}.question`)}
                </h3>
                <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                  {t(`faq.${key}.answer`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return {
    title: t('privacy.title'),
    description: t('privacy.description'),
  };
}

const sectionKeys = [
  'introduction',
  'dataController',
  'dataCollected',
  'legalBasis',
  'howWeUse',
  'dataSharing',
  'dataRetention',
  'yourRights',
  'security',
  'internationalTransfers',
  'cookies',
  'children',
  'changes',
  'contact',
] as const;

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'legal' });

  const sections = sectionKeys.map((key) => ({
    id: key.replace(/([A-Z])/g, '-$1').toLowerCase(),
    title: t(`privacy.sections.${key}.title`),
    content: t(`privacy.sections.${key}.content`),
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider">
              {t('privacy.sectionLabel')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight">
            {t('privacy.title')}
          </h1>

          <p className="text-lg text-[var(--secondary-label)] mb-8 max-w-2xl">
            {t('privacy.description')}
          </p>

          <div className="flex items-center gap-6 text-sm text-[var(--tertiary-label)]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{t('privacy.lastUpdated')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{t('privacy.gdprCompliant')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-semibold text-[var(--secondary-label)] uppercase tracking-wider mb-4">
            {t('privacy.tableOfContents')}
          </h2>
          <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-[var(--secondary-label)] hover:text-[var(--system-blue)] transition-colors py-1"
              >
                <span className="text-[var(--tertiary-label)] mr-2">{index + 1}.</span>
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--system-blue)]/10 text-[var(--system-blue)] flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-[var(--label)] pt-0.5">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-12 prose prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, i) => {
                    // Handle markdown-style bold text
                    const formattedText = paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-[var(--label)] font-semibold">$1</strong>'
                    );

                    // Handle markdown-style links
                    const withLinks = formattedText.replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" class="text-[var(--system-blue)] hover:underline">$1</a>'
                    );

                    // Handle tables
                    if (paragraph.includes('|--------')) {
                      const lines = paragraph.split('\n');
                      const headers = lines[0].split('|').filter(Boolean).map(h => h.trim());
                      const rows = lines.slice(2).map(line =>
                        line.split('|').filter(Boolean).map(cell => cell.trim())
                      );

                      return (
                        <div key={i} className="overflow-x-auto my-6">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-[var(--border)]">
                                {headers.map((header, hi) => (
                                  <th key={hi} className="text-left py-3 pr-4 font-semibold text-[var(--label)]">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, ri) => (
                                <tr key={ri} className="border-b border-[var(--border)]">
                                  {row.map((cell, ci) => (
                                    <td key={ci} className="py-3 pr-4 text-[var(--secondary-label)]">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }

                    // Handle list items
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').map(line => line.replace(/^- /, ''));
                      return (
                        <ul key={i} className="list-disc list-inside space-y-2 my-4 text-[var(--secondary-label)]">
                          {items.map((item, li) => (
                            <li key={li} dangerouslySetInnerHTML={{ __html: item.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-[var(--label)]">$1</strong>'
                            )}} />
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p
                        key={i}
                        className="text-[var(--secondary-label)] leading-relaxed my-4"
                        dangerouslySetInnerHTML={{ __html: withLinks }}
                      />
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[var(--label)] mb-8">{t('privacy.relatedPolicies.title')}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/cookies"
              className="card p-6 hover:border-[var(--system-blue)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">{t('privacy.relatedPolicies.cookiePolicy.title')}</h3>
              <p className="text-sm text-[var(--tertiary-label)]">{t('privacy.relatedPolicies.cookiePolicy.description')}</p>
            </Link>

            <Link
              href="/security"
              className="card p-6 hover:border-[var(--system-blue)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">{t('privacy.relatedPolicies.security.title')}</h3>
              <p className="text-sm text-[var(--tertiary-label)]">{t('privacy.relatedPolicies.security.description')}</p>
            </Link>

            <Link
              href="/contact"
              className="card p-6 hover:border-[var(--system-blue)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">{t('privacy.relatedPolicies.contactUs.title')}</h3>
              <p className="text-sm text-[var(--tertiary-label)]">{t('privacy.relatedPolicies.contactUs.description')}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

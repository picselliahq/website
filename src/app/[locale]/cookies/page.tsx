'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CookiesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('essential');
  const t = useTranslations('legal.cookies');

  const categoryKeys = ['essential', 'functional', 'analytics', 'marketing'] as const;
  const sectionKeys = ['whatAreCookies', 'howWeUse', 'legalBasis', 'yourChoices', 'thirdParties', 'retention', 'updates', 'contact'] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider">
              {t('sectionLabel')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight">
            {t('title')}
          </h1>

          <p className="text-lg text-[var(--secondary-label)] mb-8 max-w-2xl">
            {t('description')}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--tertiary-label)]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{t('lastUpdated')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{t('compliance')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-[var(--label)] mb-6">{t('quickSummary')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryKeys.map((key) => {
              const isRequired = key === 'essential';
              const cookieCount = (t.raw(`categories.${key}.cookies`) as unknown[]).length;
              return (
                <div key={key} className="card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${isRequired ? 'bg-[var(--system-green)]' : 'bg-[var(--system-blue)]'}`} />
                    <span className="text-sm font-medium text-[var(--label)]">{t(`categories.${key}.name`)}</span>
                  </div>
                  <p className="text-xs text-[var(--tertiary-label)]">
                    {cookieCount} cookie{cookieCount !== 1 ? 's' : ''} · {isRequired ? t('required') : t('optional')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sectionKeys.map((key, index) => (
              <article key={key} id={key.replace(/([A-Z])/g, '-$1').toLowerCase()} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--system-orange)]/10 text-[var(--system-orange)] flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-[var(--label)] pt-0.5">
                    {t(`sections.${key}.title`)}
                  </h2>
                </div>
                <div className="pl-12">
                  {(t(`sections.${key}.content`) as string).split('\n\n').map((paragraph, i) => {
                    const formattedText = paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-[var(--label)] font-semibold">$1</strong>'
                    );
                    const withLinks = formattedText.replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[var(--system-orange)] hover:underline">$1</a>'
                    );

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

      {/* Detailed Cookie Table */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--label)] mb-8">
            {t('cookiesWeUse')}
          </h2>

          <div className="space-y-4">
            {categoryKeys.map((key) => {
              const isRequired = key === 'essential';
              const cookies = t.raw(`categories.${key}.cookies`) as Array<{ name: string; purpose: string; duration: string; provider: string }>;
              return (
                <div key={key} className="card overflow-hidden">
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--tertiary-system-background)] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${isRequired ? 'bg-[var(--system-green)]' : 'bg-[var(--system-blue)]'}`} />
                      <div>
                        <h3 className="font-semibold text-[var(--label)]">{t(`categories.${key}.name`)}</h3>
                        <p className="text-sm text-[var(--tertiary-label)]">{t(`categories.${key}.description`)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {isRequired && (
                        <span className="text-xs px-2 py-1 rounded bg-[var(--system-green)]/10 text-[var(--system-green)]">
                          {t('required')}
                        </span>
                      )}
                      <svg
                        className={`w-5 h-5 text-[var(--tertiary-label)] transition-transform ${expandedCategory === key ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {expandedCategory === key && (
                    <div className="border-t border-[var(--border)]">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-[var(--tertiary-system-background)]">
                              <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">{t('tableHeaders.cookieName')}</th>
                              <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">{t('tableHeaders.purpose')}</th>
                              <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">{t('tableHeaders.duration')}</th>
                              <th className="text-left py-3 px-4 font-semibold text-[var(--label)]">{t('tableHeaders.provider')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cookies.map((cookie, index) => (
                              <tr key={cookie.name} className={index % 2 === 0 ? '' : 'bg-[var(--tertiary-system-background)]/50'}>
                                <td className="py-3 px-4 font-mono text-xs text-[var(--system-orange)]">{cookie.name}</td>
                                <td className="py-3 px-4 text-[var(--secondary-label)]">{cookie.purpose}</td>
                                <td className="py-3 px-4 text-[var(--tertiary-label)]">{cookie.duration}</td>
                                <td className="py-3 px-4 text-[var(--tertiary-label)]">{cookie.provider}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manage Preferences */}
      <section className="py-16 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--system-orange)]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--label)] mb-4">
            {t('managePreferences.title')}
          </h2>
          <p className="text-[var(--secondary-label)] mb-8 max-w-lg mx-auto">
            {t('managePreferences.description')}
          </p>
          <button className="btn-primary px-8 py-3">
            {t('managePreferences.button')}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[var(--label)] mb-8">{t('relatedPolicies.title')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/privacy"
              className="card p-6 hover:border-[var(--system-orange)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">{t('relatedPolicies.privacyPolicy.title')}</h3>
              <p className="text-sm text-[var(--tertiary-label)]">{t('relatedPolicies.privacyPolicy.description')}</p>
            </Link>

            <Link
              href="/security"
              className="card p-6 hover:border-[var(--system-orange)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">{t('relatedPolicies.security.title')}</h3>
              <p className="text-sm text-[var(--tertiary-label)]">{t('relatedPolicies.security.description')}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

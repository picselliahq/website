'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { groupLines, renderInline } from '@/lib/policy-markdown';

// Cookie categories. Names, descriptions, purposes, durations and the policy
// text live in messages (cookies.categories / cookieInfo / policySections).
const cookieCategories = [
  {
    id: 'essential',
    required: true,
    cookies: [
      { name: 'session_id', provider: 'Picsellia' },
      { name: 'csrf_token', provider: 'Picsellia' },
      { name: 'cookie_consent', provider: 'Picsellia' },
      { name: '__cf_bm', provider: 'Cloudflare' },
    ],
  },
  {
    id: 'functional',
    required: false,
    cookies: [
      { name: 'theme_preference', provider: 'Picsellia' },
      { name: 'language', provider: 'Picsellia' },
      { name: 'sidebar_collapsed', provider: 'Picsellia' },
    ],
  },
  {
    id: 'analytics',
    required: false,
    cookies: [
      { name: '_ga', provider: 'Google' },
      { name: '_ga_*', provider: 'Google' },
      { name: '_gid', provider: 'Google' },
      { name: '_gat', provider: 'Google' },
    ],
  },
  {
    id: 'marketing',
    required: false,
    cookies: [
      { name: '_fbp', provider: 'Meta' },
      { name: '_li_fat_id', provider: 'LinkedIn' },
    ],
  },
];

type PolicySection = { id: string; title: string; content: string };
type CookieInfo = Record<string, { purpose: string; duration: string }>;

export default function CookiesPage() {
  const t = useTranslations('cookies');
  const sections = t.raw('policySections') as PolicySection[];
  const cookieInfo = t.raw('cookieInfo') as CookieInfo;
  const [expandedCategory, setExpandedCategory] = useState<string | null>('essential');

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider">
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-lg text-[var(--secondary-label)] mb-8 max-w-2xl">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--tertiary-label)]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{t('hero.lastUpdated')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{t('hero.gdprCompliant')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-[var(--label)] mb-6">{t('quickSummary')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cookieCategories.map((category) => (
              <div key={category.id} className="card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${category.required ? 'bg-[var(--system-green)]' : 'bg-[var(--system-blue)]'}`} />
                  <span className="text-sm font-medium text-[var(--label)]">{t(`categories.${category.id}`)}</span>
                </div>
                <p className="text-xs text-[var(--tertiary-label)]">
                  {category.cookies.length} cookie{category.cookies.length !== 1 ? 's' : ''} · {category.required ? t('required') : t('optional')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--system-orange)]/10 text-[var(--system-orange)] flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-[var(--label)] pt-0.5">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-12">
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <div key={i}>
                      {groupLines(paragraph).map((block, bi) =>
                        block.list ? (
                          <ul key={bi} className="list-disc list-inside space-y-2 my-4 text-[var(--secondary-label)]">
                            {block.lines.map((item, li) => (
                              <li key={li} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
                            ))}
                          </ul>
                        ) : (
                          <p
                            key={bi}
                            className="text-[var(--secondary-label)] leading-relaxed my-4"
                            dangerouslySetInnerHTML={{ __html: block.lines.map((line) => renderInline(line)).join('<br />') }}
                          />
                        )
                      )}
                    </div>
                  ))}
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
            {cookieCategories.map((category) => (
              <div key={category.id} className="card overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--tertiary-system-background)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${category.required ? 'bg-[var(--system-green)]' : 'bg-[var(--system-blue)]'}`} />
                    <div>
                      <h3 className="font-semibold text-[var(--label)]">{t(`categories.${category.id}`)}</h3>
                      <p className="text-sm text-[var(--tertiary-label)]">{t(`categories.${category.id}Desc`)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {category.required && (
                      <span className="text-xs px-2 py-1 rounded bg-[var(--system-green)]/10 text-[var(--system-green)]">
                        {t('required')}
                      </span>
                    )}
                    <svg
                      className={`w-5 h-5 text-[var(--tertiary-label)] transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedCategory === category.id && (
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
                          {category.cookies.map((cookie, index) => (
                            <tr key={cookie.name} className={index % 2 === 0 ? '' : 'bg-[var(--tertiary-system-background)]/50'}>
                              <td className="py-3 px-4 font-mono text-xs text-[var(--system-orange)]">{cookie.name}</td>
                              <td className="py-3 px-4 text-[var(--secondary-label)]">{cookieInfo[cookie.name]?.purpose}</td>
                              <td className="py-3 px-4 text-[var(--tertiary-label)]">{cookieInfo[cookie.name]?.duration}</td>
                              <td className="py-3 px-4 text-[var(--tertiary-label)]">{cookie.provider}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
            {t('managePreferences.subtitle')}
          </p>
          <button className="btn-primary px-8 py-3">
            {t('managePreferences.openSettings')}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[var(--label)] mb-8">{t('relatedPolicies')}</h2>
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
              <h3 className="font-semibold text-[var(--label)] mb-1">{t('privacyPolicy')}</h3>
              <p className="text-sm text-[var(--tertiary-label)]">{t('privacyPolicyDesc')}</p>
            </Link>

            <Link
              href="/enterprise"
              className="card p-6 hover:border-[var(--system-orange)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--label)] mb-1">{t('securityTitle')}</h3>
              <p className="text-sm text-[var(--tertiary-label)]">{t('securityDesc')}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

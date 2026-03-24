import { useTranslations } from 'next-intl';

export default function QualityControlSection() {
  const t = useTranslations('labelingTool.qualityControl');
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t('title')}
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Status flow */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
            <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]" />
            <span className="text-sm font-medium text-[var(--label)]">{t('toReview')}</span>
          </div>
          <svg className="w-6 h-6 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
            <div className="w-3 h-3 rounded-full bg-[var(--picsellia-green)]" />
            <span className="text-sm font-medium text-[var(--picsellia-green)]">{t('accepted')}</span>
          </div>
          <span className="text-sm text-[var(--tertiary-label)]">{t('or')}</span>
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--system-red)]/10 border border-[var(--system-red)]/20">
            <div className="w-3 h-3 rounded-full bg-[var(--system-red)]" />
            <span className="text-sm font-medium text-[var(--system-red)]">{t('rejected')}</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--label)] mb-2">{t('autoLockTitle')}</h3>
            <p className="text-sm text-[var(--tertiary-label)]">{t('autoLockDesc')}</p>
          </div>
          <div className="card p-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-blue)]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--label)] mb-2">{t('returnToEditTitle')}</h3>
            <p className="text-sm text-[var(--tertiary-label)]">{t('returnToEditDesc')}</p>
          </div>
          <div className="card p-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--label)] mb-2">{t('fullTraceabilityTitle')}</h3>
            <p className="text-sm text-[var(--tertiary-label)]">{t('fullTraceabilityDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

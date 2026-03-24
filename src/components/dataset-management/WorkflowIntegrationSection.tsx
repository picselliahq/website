import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function WorkflowIntegrationSection() {
  const t = useTranslations('datasetManagement.workflow');
  return (
    <section className="py-24 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t('title')}
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Workflow diagram */}
        <div className="card p-8">
          <div className="grid md:grid-cols-5 gap-4 items-center">
            {/* Datalake */}
            <Link
              href="/datalake"
              className="p-6 rounded-xl border text-center transition-all bg-[var(--tertiary-system-background)] border-[var(--border)] hover:border-[var(--picsellia-green)]/50"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Image src="/images/community/icons/datalake.svg" alt={t('datalake')} width={40} height={40} />
              </div>
              <div className="text-sm font-medium text-[var(--label)]">{t('datalake')}</div>
            </Link>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <svg className="w-8 h-8 text-[var(--border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>

            {/* Dataset (active) */}
            <div className="p-6 rounded-xl border text-center bg-[var(--system-orange)]/10 border-[var(--system-orange)]/30 scale-105">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Image src="/images/community/icons/data-management.svg" alt={t('dataset')} width={40} height={40} />
              </div>
              <div className="text-sm font-medium text-[var(--system-orange)]">{t('dataset')}</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <svg className="w-8 h-8 text-[var(--border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>

            {/* Experiment */}
            <Link
              href="/experiment-tracking"
              className="p-6 rounded-xl border text-center transition-all bg-[var(--tertiary-system-background)] border-[var(--border)] hover:border-[var(--picsellia-green)]/50"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Image src="/images/community/icons/experiment-tracking.svg" alt={t('experiment')} width={40} height={40} />
              </div>
              <div className="text-sm font-medium text-[var(--label)]">{t('experiment')}</div>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--border)] grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold font-mono text-[var(--picsellia-blue)]">{t('autoSync')}</div>
              <div className="text-sm text-[var(--tertiary-label)]">{t('fromDatalake')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[var(--system-orange)]">{t('version')}</div>
              <div className="text-sm text-[var(--tertiary-label)]">{t('everyChange')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[var(--system-indigo)]">{t('reference')}</div>
              <div className="text-sm text-[var(--tertiary-label)]">{t('inExperiments')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

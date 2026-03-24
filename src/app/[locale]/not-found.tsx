import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-24 text-center">
      <p
        className="text-sm font-semibold uppercase tracking-wider mb-4"
        style={{ color: 'var(--picsellia-green)' }}
      >
        {t('code')}
      </p>
      <h1
        className="text-4xl md:text-5xl font-semibold text-label mb-4"
        style={{ letterSpacing: '-0.02em' }}
      >
        {t('title')}
      </h1>
      <p className="text-secondary text-lg mb-8 max-w-md">
        {t('description')}
      </p>
      <div className="flex gap-4">
        <Link href="/" className="btn-primary">
          {t('goHome')}
        </Link>
        <Link href="/blog" className="btn-secondary">
          {t('readBlog')}
        </Link>
      </div>
    </div>
  );
}

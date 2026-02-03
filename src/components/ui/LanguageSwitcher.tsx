'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const label = otherLocale.toUpperCase();

  return (
    <button
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="px-3 py-1.5 text-xs font-medium text-[var(--secondary-label)] hover:text-[var(--label)] border border-[var(--border)] rounded-full transition-colors"
    >
      {label}
    </button>
  );
}

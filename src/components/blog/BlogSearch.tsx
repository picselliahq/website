'use client';

import { useTranslations } from 'next-intl';

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  const t = useTranslations('blog');

  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--secondary-label)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('search')}
        className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm text-label placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
        style={{
          backgroundColor: 'var(--secondary-system-background)',
          border: '1px solid var(--border)',
        }}
      />
    </div>
  );
}

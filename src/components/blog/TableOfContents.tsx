'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { TableOfContentsItem } from '@/types/blog';

export default function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  const [activeId, setActiveId] = useState<string>('');
  const t = useTranslations('blog');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting heading
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(intersecting[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-24" aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-4">
        {t('onThisPage')}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm py-1 transition-colors ${
                item.level === 3 ? 'pl-4' : ''
              } ${
                activeId === item.id
                  ? 'text-accent font-medium'
                  : 'text-secondary hover:text-label'
              }`}
              style={activeId === item.id ? { color: 'var(--picsellia-green)' } : {}}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

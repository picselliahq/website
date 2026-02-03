import { Metadata } from 'next';
import { getAllPosts, getCategories } from '@/lib/blog';
import BlogListClient from '@/components/blog/BlogListClient';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllPosts(locale);
  const categories = getCategories(locale);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="badge mb-4">{t('title')}</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-label mb-4" style={{ letterSpacing: '-0.02em' }}>
            {t('title')}
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            {t('description')}
          </p>
        </div>

        {/* Posts */}
        <BlogListClient posts={posts} categories={categories} />

        {/* Newsletter */}
        <div className="mt-20 max-w-xl mx-auto">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
}

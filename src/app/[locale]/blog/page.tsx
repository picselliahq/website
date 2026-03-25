import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { getAllPosts, getCategories } from '@/lib/blog-meta';
import BlogListClient from '@/components/blog/BlogListClient';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import { JsonLd, breadcrumbJsonLd } from '@/lib/json-ld';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/blog',
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: '/blog',
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllPosts(locale);
  const categories = getCategories(locale);

  return (
    <>
    <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', url: '/blog' }], locale)} />
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="badge mb-4">{t('badge')}</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-label mb-4" style={{ letterSpacing: '-0.02em' }}>
            {t('title')}
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            {t('subtitle')}
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
    </>
  );
}

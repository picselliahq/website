import { Metadata } from 'next';
import { getAllPosts, getCategories } from '@/lib/blog';
import BlogListClient from '@/components/blog/BlogListClient';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import { JsonLd, breadcrumbJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Computer Vision & MLOps Blog',
  description: 'Practical guides, tutorials, and insights on computer vision, MLOps workflows, and building production AI systems from the Picsellia team.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Computer Vision & MLOps Blog',
    description: 'Practical guides, tutorials, and insights on computer vision, MLOps workflows, and building production AI systems from the Picsellia team.',
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <>
    <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', url: '/blog' }])} />
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="badge mb-4">Blog</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-label mb-4" style={{ letterSpacing: '-0.02em' }}>
            Insights & Tutorials
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Practical guides on computer vision, MLOps workflows, and building production AI — written by the Picsellia team and community.
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

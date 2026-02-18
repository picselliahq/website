import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogHeroImage from '@/components/blog/BlogHeroImage';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug, getAllPosts, extractTableOfContents } from '@/lib/blog';
import { mdxComponents } from '@/components/blog/MDXComponents';
import TableOfContents from '@/components/blog/TableOfContents';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import BlogCard from '@/components/blog/BlogCard';
import BlogCTA from '@/components/blog/BlogCTA';
import { getFeatureCTAs } from '@/lib/blog-cta';
import rehypeShiki from './rehype-shiki';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: {
      canonical: `/post/${slug}`,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author.name],
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = extractTableOfContents(post.content);
  const featureCTAs = getFeatureCTAs({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    category: post.frontmatter.category,
    content: post.content,
  });

  // Get related posts (same category, excluding current)
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.frontmatter.category === post.frontmatter.category)
    .slice(0, 3);

  return (
    <article className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-secondary">
          <Link href="/blog" className="hover:text-label transition-colors">Blog</Link>
          <span className="mx-2 text-tertiary">/</span>
          <span className="text-tertiary">{post.frontmatter.category}</span>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mb-12">
          <span className="badge mb-4">{post.frontmatter.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-label mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}>
            {post.frontmatter.title}
          </h1>
          <p className="text-lg text-secondary mb-6">
            {post.frontmatter.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-secondary">
            {/* Author avatar */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
              style={{ backgroundColor: 'var(--picsellia-green)' }}
            >
              {post.frontmatter.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-label font-medium">{post.frontmatter.author.name}</p>
              <p className="text-xs text-tertiary">
                <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
                <span className="mx-1">·</span>
                {post.readingTime}
              </p>
            </div>
          </div>
        </header>

        {/* Hero image */}
        {post.frontmatter.image && (
          <BlogHeroImage
            src={post.frontmatter.image}
            alt={post.frontmatter.imageAlt || post.frontmatter.title}
          />
        )}

        {/* Content + TOC layout */}
        <div className="flex gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="prose-picsellia">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeShiki],
                  },
                }}
              />
            </div>

            {/* Tags */}
            {post.frontmatter.tags.length > 0 && (
              <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs text-secondary"
                      style={{ backgroundColor: 'var(--tertiary-system-background)', border: '1px solid var(--border)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Feature CTAs */}
            <BlogCTA ctas={featureCTAs} />
          </div>

          {/* Sidebar: TOC */}
          {toc.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0">
              <TableOfContents items={toc} />
            </aside>
          )}
        </div>

        {/* Newsletter */}
        <div className="mt-16 max-w-xl mx-auto">
          <NewsletterSignup />
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-label mb-8">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

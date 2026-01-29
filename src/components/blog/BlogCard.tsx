'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BlogPostMeta } from '@/types/blog';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogCard({ post, featured = false }: { post: BlogPostMeta; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`card group block overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
      {post.frontmatter.image && (
        <div className="relative overflow-hidden" style={{ aspectRatio: featured ? '2/1' : '16/9' }}>
          <Image
            src={post.frontmatter.image}
            alt={post.frontmatter.imageAlt || post.frontmatter.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--card)] to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge">{post.frontmatter.category}</span>
          <span className="text-tertiary text-xs">{post.readingTime}</span>
        </div>
        <h3 className={`text-label font-semibold mb-2 group-hover:text-accent transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
          {post.frontmatter.title}
        </h3>
        <p className="text-secondary text-sm line-clamp-2 mb-4">
          {post.frontmatter.description}
        </p>
        <div className="flex items-center gap-2 text-xs text-tertiary">
          <span>{post.frontmatter.author.name}</span>
          <span>·</span>
          <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
        </div>
      </div>
    </Link>
  );
}

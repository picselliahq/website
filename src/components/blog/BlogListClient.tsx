'use client';

import { useState, useMemo } from 'react';
import type { BlogPostMeta } from '@/types/blog';
import BlogCard from './BlogCard';
import BlogSearch from './BlogSearch';
import CategoryFilter from './CategoryFilter';

export default function BlogListClient({ posts, categories }: { posts: BlogPostMeta[]; categories: string[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = posts;

    if (category) {
      result = result.filter((p) => p.frontmatter.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.frontmatter.title.toLowerCase().includes(q) ||
          p.frontmatter.description.toLowerCase().includes(q) ||
          p.frontmatter.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, search, category]);

  const featured = !search && !category ? filtered[0] : null;
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="sm:w-80">
          <BlogSearch value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="mb-8">
        <CategoryFilter categories={categories} selected={category} onChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-secondary text-lg">No articles found.</p>
          <p className="text-tertiary text-sm mt-2">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured && <BlogCard post={featured} featured />}
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

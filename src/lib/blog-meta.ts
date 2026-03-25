/**
 * Lightweight blog metadata reader — NO heavy dependencies.
 * Uses regex to parse YAML frontmatter instead of gray-matter.
 * Use this for blog list pages, sitemaps, and anywhere that doesn't need full MDX content.
 */
import fs from 'fs';
import path from 'path';
import type { BlogPostMeta, Frontmatter } from '@/types/blog';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

function getContentDir(locale?: string): string {
  if (locale && locale !== 'en') {
    return path.join(CONTENT_DIR, locale);
  }
  return CONTENT_DIR;
}

function extractFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fields: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.+)/);
    if (m) fields[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return fields;
}

function estimateReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function parseTags(raw: string): string[] {
  // Handle YAML array: [tag1, tag2] or multiline
  const match = raw.match(/^tags:\s*\[([^\]]*)\]/m);
  if (match) {
    return match[1].split(',').map((t) => t.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  }
  return [];
}

function parseAuthor(raw: string): { name: string; role?: string } {
  const nameMatch = raw.match(/name:\s*["']?([^"'\n]+)["']?/);
  const roleMatch = raw.match(/role:\s*["']?([^"'\n]+)["']?/);
  return {
    name: nameMatch?.[1]?.trim() || 'Picsellia',
    role: roleMatch?.[1]?.trim(),
  };
}

function readPostMeta(filePath: string, slug: string): BlogPostMeta | null {
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const fields = extractFrontmatter(raw);

  if (fields.published === 'false') return null;
  if (!fields.title || !fields.date) return null;

  const content = raw.replace(/^---\n[\s\S]*?\n---\n?/, '');

  const frontmatter: Frontmatter = {
    title: fields.title,
    description: fields.description || '',
    date: fields.date,
    author: parseAuthor(raw),
    category: fields.category || 'Uncategorized',
    tags: parseTags(raw),
    image: fields.image,
    imageAlt: fields.imageAlt,
    published: fields.published !== 'false',
  };

  return {
    slug,
    frontmatter,
    readingTime: estimateReadingTime(content),
  };
}

export function getAllPosts(locale?: string): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const localeDir = getContentDir(locale);
  const hasLocaleDir = locale && locale !== 'en' && fs.existsSync(localeDir);

  const postsBySlug = new Map<string, BlogPostMeta>();

  // Read default (English) posts
  for (const filename of fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))) {
    const slug = filename.replace(/\.mdx$/, '');
    const post = readPostMeta(path.join(CONTENT_DIR, filename), slug);
    if (post) postsBySlug.set(slug, post);
  }

  // Overlay locale-specific posts
  if (hasLocaleDir) {
    for (const filename of fs.readdirSync(localeDir).filter((f) => f.endsWith('.mdx'))) {
      const slug = filename.replace(/\.mdx$/, '');
      const post = readPostMeta(path.join(localeDir, filename), slug);
      if (post) postsBySlug.set(slug, post);
    }
  }

  return Array.from(postsBySlug.values()).sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getCategories(locale?: string): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map((p) => p.frontmatter.category));
  return Array.from(categories).sort();
}

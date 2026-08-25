import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { FrontmatterSchema, type BlogPost, type BlogPostMeta, type TableOfContentsItem } from '@/types/blog';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

function getContentDir(locale?: string): string {
  if (locale && locale !== 'en') {
    return path.join(CONTENT_DIR, locale);
  }
  return CONTENT_DIR;
}

function ensureContentDir(locale?: string) {
  const dir = getContentDir(locale);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readPost(filePath: string, slug: string): BlogPostMeta | null {
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const parsed = FrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    console.warn(`Invalid frontmatter in ${filePath}:`, parsed.error.format());
    return null;
  }

  if (!parsed.data.published) return null;

  return {
    slug,
    frontmatter: parsed.data,
    readingTime: readingTime(content).text,
  };
}

function readFullPost(filePath: string, slug: string): BlogPost | null {
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const parsed = FrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    console.warn(`Invalid frontmatter in ${filePath}:`, parsed.error.format());
    return null;
  }

  return {
    slug,
    frontmatter: parsed.data,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(locale?: string): BlogPostMeta[] {
  ensureContentDir();
  const localeDir = getContentDir(locale);
  const hasLocaleDir = locale && locale !== 'en' && fs.existsSync(localeDir);

  // Read default (English) posts
  const defaultFiles = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
  const postsBySlug = new Map<string, BlogPostMeta>();

  for (const filename of defaultFiles) {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(CONTENT_DIR, filename);
    const post = readPost(filePath, slug);
    if (post) {
      postsBySlug.set(slug, post);
    }
  }

  // Overlay locale-specific posts (they take priority)
  if (hasLocaleDir) {
    const localeFiles = fs.readdirSync(localeDir).filter((f) => f.endsWith('.mdx'));
    for (const filename of localeFiles) {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(localeDir, filename);
      const post = readPost(filePath, slug);
      if (post) {
        postsBySlug.set(slug, post);
      }
    }
  }

  const posts = Array.from(postsBySlug.values());
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string, locale?: string): BlogPost | null {
  ensureContentDir();

  // Validate slug to prevent path traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;

  // Check locale-specific file first
  if (locale && locale !== 'en') {
    const localeDir = getContentDir(locale);
    if (fs.existsSync(localeDir)) {
      const localePath = path.join(localeDir, `${slug}.mdx`);
      const post = readFullPost(localePath, slug);
      if (post) return post;
    }
  }

  // Fall back to default (English)
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  return readFullPost(filePath, slug);
}

/** True only if this exact locale has its own translated file — no English fallback. */
export function hasLocalePost(slug: string, locale: string): boolean {
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return false;
  const filePath = path.join(getContentDir(locale), `${slug}.mdx`);
  return readPost(filePath, slug) !== null;
}

export function getAllSlugs(locale?: string): string[] {
  ensureContentDir();

  const defaultSlugs = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));

  if (locale && locale !== 'en') {
    const localeDir = getContentDir(locale);
    if (fs.existsSync(localeDir)) {
      const localeSlugs = fs
        .readdirSync(localeDir)
        .filter((f) => f.endsWith('.mdx'))
        .map((f) => f.replace(/\.mdx$/, ''));
      return Array.from(new Set([...defaultSlugs, ...localeSlugs]));
    }
  }

  return defaultSlugs;
}

export function getCategories(locale?: string): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map((p) => p.frontmatter.category));
  return Array.from(categories).sort();
}

/** Strip inline markdown formatting (bold, italic, links, inline code) to get plain text. */
function stripMarkdownInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')   // bold
    .replace(/__(.+?)__/g, '$1')        // bold alt
    .replace(/\*(.+?)\*/g, '$1')        // italic
    .replace(/_(.+?)_/g, '$1')          // italic alt
    .replace(/`(.+?)`/g, '$1')          // inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .trim();
}

export function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    const text = stripMarkdownInline(rawText);
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    items.push({ id, text, level });
  }

  return items;
}

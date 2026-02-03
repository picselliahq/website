import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { FrontmatterSchema, type BlogPost, type BlogPostMeta, type TableOfContentsItem } from '@/types/blog';

const BLOG_ROOT = path.join(process.cwd(), 'content', 'blog');

function getContentDir(locale: string = 'en') {
  return path.join(BLOG_ROOT, locale);
}

function ensureContentDir(locale: string = 'en') {
  const dir = getContentDir(locale);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getAllPosts(locale: string = 'en'): BlogPostMeta[] {
  ensureContentDir('en');
  if (locale !== 'en') ensureContentDir(locale);

  const contentDir = getContentDir(locale);
  const fallbackDir = getContentDir('en');

  // Get posts from the requested locale
  const localeFiles = fs.existsSync(contentDir)
    ? fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))
    : [];

  // Build file list: locale files first, then English fallback for untranslated posts
  let files: { filename: string; dir: string }[] = localeFiles.map((f) => ({ filename: f, dir: contentDir }));

  if (locale !== 'en' && fs.existsSync(fallbackDir)) {
    const enFiles = fs.readdirSync(fallbackDir).filter((f) => f.endsWith('.mdx'));
    const localeFilenames = new Set(localeFiles);
    for (const f of enFiles) {
      if (!localeFilenames.has(f)) {
        files.push({ filename: f, dir: fallbackDir });
      }
    }
  }

  const posts = files
    .map(({ filename, dir }) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const parsed = FrontmatterSchema.safeParse(data);
      if (!parsed.success) {
        console.warn(`Invalid frontmatter in ${filename}:`, parsed.error.format());
        return null;
      }

      if (!parsed.data.published) return null;

      return {
        slug,
        frontmatter: parsed.data,
        readingTime: readingTime(content).text,
      };
    })
    .filter((post): post is BlogPostMeta => post !== null);

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string, locale: string = 'en'): BlogPost | null {
  // Validate slug to prevent path traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;

  // Try locale-specific dir first, then fall back to English
  const localePath = path.join(getContentDir(locale), `${slug}.mdx`);
  const enPath = path.join(getContentDir('en'), `${slug}.mdx`);

  const filePath = fs.existsSync(localePath) ? localePath : fs.existsSync(enPath) ? enPath : null;
  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const parsed = FrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    console.warn(`Invalid frontmatter in ${slug}.mdx:`, parsed.error.format());
    return null;
  }

  return {
    slug,
    frontmatter: parsed.data,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllSlugs(locale: string = 'en'): string[] {
  ensureContentDir('en');

  const enDir = getContentDir('en');
  const enSlugs = fs.readdirSync(enDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));

  if (locale === 'en') return enSlugs;

  // For other locales, also include locale-specific slugs
  const localeDir = getContentDir(locale);
  if (fs.existsSync(localeDir)) {
    const localeSlugs = fs.readdirSync(localeDir)
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => f.replace(/\.mdx$/, ''));
    return Array.from(new Set([...enSlugs, ...localeSlugs]));
  }

  return enSlugs;
}

export function getCategories(locale: string = 'en'): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map((p) => p.frontmatter.category));
  return Array.from(categories).sort();
}

export function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    items.push({ id, text, level });
  }

  return items;
}

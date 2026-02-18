/**
 * Webflow Blog → MDX Migration Script
 *
 * Converts Webflow blog posts to MDX files with frontmatter.
 * Downloads all images (hero + inline) to public/images/blog/.
 *
 * Usage:
 *   npx tsx scripts/migrate-webflow-to-mdx.ts
 *
 * Options:
 *   --limit N     Only migrate N posts (for testing)
 *   --slug SLUG   Migrate a single post by slug
 *   --dry-run     Print output without writing files
 *   --no-images   Skip image downloading
 *
 * Prerequisites:
 *   npm install --save-dev tsx
 */

import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';

const WEBFLOW_BASE = 'https://www.picsellia.com';
const OUTPUT_DIR = path.join(process.cwd(), 'content', 'blog');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'blog');

interface MigratedPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: { name: string; role?: string };
  category: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  content: string;
}

// ---------------------------------------------------------------------------
// Image downloading
// ---------------------------------------------------------------------------

/** Extract a filename from a URL, truncating to avoid ENAMETOOLONG. */
function imageFilename(url: string, slug: string, index: number): string {
  const MAX_FILENAME = 200; // macOS/Linux limit is 255, leave room for the directory

  try {
    const parsed = new URL(url);
    const basename = path.basename(parsed.pathname);
    const ext = path.extname(basename) || '.jpg';

    if (index === -1) {
      return truncateFilename(`${slug}-hero${ext}`, MAX_FILENAME);
    }

    const name = path.basename(basename, ext).replace(/[^a-zA-Z0-9_-]/g, '-');
    // If the original name is too long, use a short numeric suffix instead
    const fullName = `${slug}-${name || index}${ext}`;
    if (fullName.length > MAX_FILENAME) {
      return `${slug}-img-${index}${ext}`;
    }
    return fullName;
  } catch {
    return `${slug}-${index}.jpg`;
  }
}

function truncateFilename(name: string, max: number): string {
  if (name.length <= max) return name;
  const ext = path.extname(name);
  return name.slice(0, max - ext.length) + ext;
}

/** Download a single image and return its local public path. */
async function downloadImage(
  url: string,
  slug: string,
  index: number,
  dryRun: boolean,
): Promise<string> {
  const filename = imageFilename(url, slug, index);
  const localPath = path.join(IMAGES_DIR, filename);
  const publicPath = `/images/blog/${filename}`;

  if (dryRun) {
    console.log(`  [dry-run] would download ${url} → ${publicPath}`);
    return publicPath;
  }

  // Skip if already downloaded
  if (fs.existsSync(localPath)) {
    console.log(`  ✓ Already exists: ${publicPath}`);
    return publicPath;
  }

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'PicselliaBot/1.0 (blog migration)' },
    });

    if (!res.ok || !res.body) {
      console.warn(`  ⚠ Failed to download image (${res.status}): ${url}`);
      return url; // keep the original URL as fallback
    }

    await pipeline(
      Readable.fromWeb(res.body as import('stream/web').ReadableStream),
      fs.createWriteStream(localPath),
    );

    console.log(`  ↓ Downloaded: ${publicPath}`);
    return publicPath;
  } catch (err) {
    console.warn(`  ⚠ Error downloading image: ${url}`, err);
    return url; // keep original URL as fallback
  }
}

/** Find all image URLs in markdown content. */
function findMarkdownImages(md: string): { fullMatch: string; alt: string; url: string }[] {
  const regex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const results: { fullMatch: string; alt: string; url: string }[] = [];
  let match;
  while ((match = regex.exec(md)) !== null) {
    results.push({ fullMatch: match[0], alt: match[1], url: match[2] });
  }
  return results;
}

/** Download all images in a post (hero + inline) and rewrite URLs to local paths. */
async function downloadPostImages(
  post: MigratedPost,
  dryRun: boolean,
): Promise<MigratedPost> {
  const updated = { ...post };

  // 1. Hero image
  if (updated.image && (updated.image.startsWith('http://') || updated.image.startsWith('https://'))) {
    updated.image = await downloadImage(updated.image, post.slug, -1, dryRun);
  }

  // 2. Inline images in content
  const inlineImages = findMarkdownImages(updated.content);
  let imageIndex = 0;

  for (const img of inlineImages) {
    if (img.url.startsWith('http://') || img.url.startsWith('https://')) {
      const localPath = await downloadImage(img.url, post.slug, imageIndex, dryRun);
      updated.content = updated.content.replace(img.fullMatch, `![${img.alt}](${localPath})`);
      imageIndex++;
    }
  }

  if (inlineImages.length > 0) {
    console.log(`  📷 Processed ${inlineImages.length} inline image(s)`);
  }

  return updated;
}

// ---------------------------------------------------------------------------
// HTML entity decoding
// ---------------------------------------------------------------------------

function decodeHtmlEntities(text: string): string {
  let result = text;

  // Named entities
  result = result.replace(/&amp;/g, '&');
  result = result.replace(/&lt;/g, '<');
  result = result.replace(/&gt;/g, '>');
  result = result.replace(/&quot;/g, '"');
  result = result.replace(/&apos;/g, "'");
  result = result.replace(/&nbsp;/g, ' ');
  result = result.replace(/&mdash;/g, '—');
  result = result.replace(/&ndash;/g, '–');
  result = result.replace(/&lsquo;/g, '\u2018');
  result = result.replace(/&rsquo;/g, '\u2019');
  result = result.replace(/&ldquo;/g, '\u201C');
  result = result.replace(/&rdquo;/g, '\u201D');
  result = result.replace(/&hellip;/g, '…');
  result = result.replace(/&trade;/g, '™');
  result = result.replace(/&copy;/g, '©');
  result = result.replace(/&reg;/g, '®');

  // Decimal numeric entities: &#39; &#8217; etc.
  result = result.replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(parseInt(code, 10)));

  // Hex numeric entities: &#x27; &#x2019; etc.
  result = result.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)));

  return result;
}

// ---------------------------------------------------------------------------
// HTML → Markdown conversion
// ---------------------------------------------------------------------------

function htmlToMarkdown(html: string): string {
  let md = html;

  // Remove scripts and styles
  md = md.replace(/<script[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Headers
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n\n');

  // Bold and italic
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Images — handle both src+alt orders
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  md = md.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, '![$1]($2)');
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)');

  // Lists
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  md = md.replace(/<\/?[ou]l[^>]*>/gi, '\n');

  // Code blocks
  md = md.replace(/<pre[^>]*><code[^>]*class="[^"]*language-(\w+)"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```$1\n$2\n```\n\n');
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n\n');
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

  // Blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
    return content.split('\n').map((line: string) => `> ${line}`).join('\n') + '\n\n';
  });

  // Paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n');

  // Line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n');

  // Horizontal rules
  md = md.replace(/<hr[^>]*\/?>/gi, '---\n\n');

  // Remove figure/figcaption wrappers (keep content)
  md = md.replace(/<figure[^>]*>([\s\S]*?)<\/figure>/gi, '$1\n\n');
  md = md.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, '*$1*\n\n');

  // Remove remaining HTML tags
  md = md.replace(/<div[^>]*>/gi, '\n');
  md = md.replace(/<\/div>/gi, '\n');
  md = md.replace(/<[^>]+>/g, '');

  // Decode HTML entities
  md = decodeHtmlEntities(md);

  // Escape bare `<` followed by digits/symbols that MDX would misparse as JSX tags
  md = md.replace(/<(\d)/g, '\\<$1');

  // Clean up whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();

  return md;
}

// ---------------------------------------------------------------------------
// Frontmatter generation
// ---------------------------------------------------------------------------

function generateFrontmatter(post: MigratedPost): string {
  const lines = [
    '---',
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `description: "${post.description.replace(/"/g, '\\"')}"`,
    `date: "${post.date}"`,
    `author:`,
    `  name: "${post.author.name}"`,
  ];

  if (post.author.role) {
    lines.push(`  role: "${post.author.role}"`);
  }

  lines.push(`category: "${post.category}"`);

  if (post.tags.length > 0) {
    lines.push('tags:');
    post.tags.forEach(tag => lines.push(`  - "${tag}"`));
  }

  if (post.image) {
    lines.push(`image: "${post.image}"`);
  }
  if (post.imageAlt) {
    lines.push(`imageAlt: "${post.imageAlt}"`);
  }

  lines.push('published: true');
  lines.push('---');

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Fetching & discovery
// ---------------------------------------------------------------------------

async function fetchPage(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'PicselliaBot/1.0 (blog migration)',
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

async function discoverPostUrls(): Promise<string[]> {
  // Try sitemap first
  try {
    const sitemap = await fetchPage(`${WEBFLOW_BASE}/sitemap.xml`);
    const urlRegex = /<loc>(https?:\/\/[^<]*\/post\/[^<]+)<\/loc>/g;
    const urls: string[] = [];
    let match;
    while ((match = urlRegex.exec(sitemap)) !== null) {
      urls.push(match[1]);
    }
    if (urls.length > 0) {
      console.log(`Found ${urls.length} blog posts in sitemap`);
      return urls;
    }
  } catch {
    console.log('Sitemap not found, trying blog listing page...');
  }

  // Fallback: scrape blog listing
  try {
    const html = await fetchPage(`${WEBFLOW_BASE}/blog`);
    const hrefRegex = /href="(\/post\/[^"]+)"/g;
    const slugs = new Set<string>();
    let match;
    while ((match = hrefRegex.exec(html)) !== null) {
      slugs.add(`${WEBFLOW_BASE}${match[1]}`);
    }
    console.log(`Found ${slugs.size} blog posts on listing page`);
    return Array.from(slugs);
  } catch (e) {
    console.error('Failed to discover blog posts:', e);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Nested-div-safe content extraction
// ---------------------------------------------------------------------------

/**
 * Extract the inner HTML of a <div> whose opening tag matches `attrPattern`,
 * correctly handling arbitrarily nested <div> elements by tracking depth.
 *
 * Returns the inner HTML string, or null if no matching div is found.
 */
function extractDivContent(html: string, attrPattern: RegExp): string | null {
  // Build a regex that finds the opening <div ...> whose attributes match
  const openTagRe = new RegExp(`<div[^>]*${attrPattern.source}[^>]*>`, 'i');
  const openMatch = openTagRe.exec(html);
  if (!openMatch) return null;

  const startIdx = openMatch.index + openMatch[0].length;
  let depth = 1;
  let i = startIdx;

  while (i < html.length && depth > 0) {
    // Find the next <div or </div>
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);

    if (nextClose === -1) break; // malformed HTML, bail

    if (nextOpen !== -1 && nextOpen < nextClose) {
      // Make sure it's actually an opening tag (not e.g. "<divider")
      const charAfter = html[nextOpen + 4];
      if (charAfter === '>' || charAfter === ' ' || charAfter === '\t' || charAfter === '\n' || charAfter === '/') {
        depth++;
      }
      i = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        return html.slice(startIdx, nextClose);
      }
      i = nextClose + 6; // length of '</div>'
    }
  }

  // If we never balanced, return everything we found (best-effort)
  return html.slice(startIdx);
}

// ---------------------------------------------------------------------------
// Post migration
// ---------------------------------------------------------------------------

async function migratePost(url: string, dryRun: boolean, downloadImages: boolean): Promise<void> {
  const slug = url.split('/post/')[1]?.replace(/\/$/, '') || '';
  if (!slug) {
    console.warn(`Could not extract slug from: ${url}`);
    return;
  }

  console.log(`Migrating: ${slug}`);

  const html = await fetchPage(url);

  // Extract metadata from HTML
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const rawTitle = titleMatch?.[1]?.trim() || slug;
  // Strip trailing " | Picsellia", " — Picsellia", " - Picsellia", etc.
  const title = decodeHtmlEntities(
    rawTitle.replace(/\s*[\|\u2014\u2013\-]+\s*Picsellia\s*$/i, '')
  ).trim();

  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)
    || html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  const description = decodeHtmlEntities(descMatch?.[1] || '');

  const dateMatch =
    // <time datetime="...">
    html.match(/<time[^>]*datetime="([^"]*)"[^>]*>/i)
    // JSON-LD datePublished
    || html.match(/"datePublished"\s*:\s*"([^"]*)"/i)
    // JSON-LD dateCreated
    || html.match(/"dateCreated"\s*:\s*"([^"]*)"/i)
    // Webflow CMS date field in meta
    || html.match(/<meta[^>]*property="article:published_time"[^>]*content="([^"]*)"/i)
    || html.match(/<meta[^>]*content="([^"]*)"[^>]*property="article:published_time"/i)
    // Webflow sometimes puts dates in a visible element with a class
    || html.match(/class="[^"]*blog[_-]?date[^"]*"[^>]*>([^<]+)</i)
    || html.match(/class="[^"]*post[_-]?date[^"]*"[^>]*>([^<]+)</i)
    || html.match(/class="[^"]*date[^"]*"[^>]*>\s*(\w+ \d{1,2},?\s*\d{4})/i);

  let date: string;
  if (dateMatch?.[1]) {
    // Try to parse whatever format we got
    const raw = dateMatch[1].trim();
    const parsed = new Date(raw);
    if (!isNaN(parsed.getTime())) {
      date = parsed.toISOString().split('T')[0];
    } else {
      // Already in YYYY-MM-DD or similar
      date = raw.split('T')[0];
    }
  } else {
    console.warn(`  ⚠ No date found, using today`);
    date = new Date().toISOString().split('T')[0];
  }

  const authorMatch = html.match(/"author":\s*\{[^}]*"name":\s*"([^"]*)"/i);
  const authorName = authorMatch?.[1] || 'Picsellia Team';

  // Extract category from breadcrumb or metadata
  const categoryMatch = html.match(/category[^>]*>([^<]+)</i);
  const category = categoryMatch?.[1]?.trim() || 'Uncategorized';

  // Extract hero image
  const ogImageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i)
    || html.match(/<meta\s+content="([^"]*)"\s+property="og:image"/i);
  const image = ogImageMatch?.[1] || undefined;

  // Extract hero image alt from og:image:alt
  const ogImageAltMatch = html.match(/<meta\s+property="og:image:alt"\s+content="([^"]*)"/i)
    || html.match(/<meta\s+content="([^"]*)"\s+property="og:image:alt"/i);
  const imageAlt = ogImageAltMatch?.[1] || undefined;

  // Extract main content — look for common Webflow article content selectors.
  // We use a depth-counting approach instead of regex to handle nested <div>s
  // correctly (regex with lazy quantifiers truncates at the first inner </div>).
  const rawContent = extractDivContent(html, /class="[^"]*rich-text[^"]*"/)
    || extractDivContent(html, /class="[^"]*blog-content[^"]*"/)
    || extractDivContent(html, /class="[^"]*w-richtext[^"]*"/)
    || '';
  const content = htmlToMarkdown(rawContent);

  if (!content) {
    console.warn(`  No content extracted for: ${slug}`);
    return;
  }

  let post: MigratedPost = {
    slug,
    title,
    description,
    date,
    author: { name: authorName },
    category,
    tags: [],
    image,
    imageAlt,
    content,
  };

  // Download images if enabled
  if (downloadImages) {
    post = await downloadPostImages(post, dryRun);
  }

  const mdx = `${generateFrontmatter(post)}\n\n${post.content}\n`;

  if (dryRun) {
    console.log(`\n--- ${slug} ---`);
    console.log(mdx.slice(0, 500));
    console.log('...\n');
  } else {
    const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`);
    fs.writeFileSync(outputPath, mdx, 'utf-8');
    console.log(`  → Wrote ${outputPath}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const noImages = args.includes('--no-images');
  const limitIdx = args.indexOf('--limit');
  const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : Infinity;
  const slugIdx = args.indexOf('--slug');
  const targetSlug = slugIdx !== -1 ? args[slugIdx + 1] : null;

  // Ensure output directories exist
  if (!dryRun) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    if (!noImages) {
      fs.mkdirSync(IMAGES_DIR, { recursive: true });
    }
  }

  console.log(`\nOptions: ${dryRun ? 'DRY RUN' : 'LIVE'} | Images: ${noImages ? 'SKIP' : 'DOWNLOAD'}\n`);

  if (targetSlug) {
    await migratePost(`${WEBFLOW_BASE}/post/${targetSlug}`, dryRun, !noImages);
    return;
  }

  const urls = await discoverPostUrls();
  const toMigrate = urls.slice(0, limit);

  console.log(`Migrating ${toMigrate.length} posts...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const url of toMigrate) {
    try {
      await migratePost(url, dryRun, !noImages);
      successCount++;
    } catch (e) {
      console.error(`  Failed to migrate ${url}:`, e);
      failCount++;
    }
    // Be polite — wait 500ms between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\nDone! ${successCount} migrated, ${failCount} failed.`);
}

main().catch(console.error);

import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";

function getLocalizedPath(pathname: string, locale: Locale): string {
  const pathnames = routing.pathnames as Record<string, string | Record<string, string>>;
  const entry = pathnames[pathname];
  if (!entry) return pathname;
  if (typeof entry === "string") return entry;
  return entry[locale] || pathname;
}

/** Lightweight frontmatter reader — avoids importing heavy MDX deps */
function readPostMeta(filePath: string): { date: string } | null {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  const publishedMatch = content.match(/^published:\s*(false)/m);
  if (publishedMatch) return null;
  const dateMatch = content.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?/m);
  const updatedMatch = content.match(/^updated:\s*["']?(\d{4}-\d{2}-\d{2})["']?/m);
  return { date: updatedMatch?.[1] || dateMatch?.[1] || "2026-01-01" };
}

/** Per-post publish dates, keyed by every locale that has a published translation */
function getBlogPostsByLocale(): { slug: string; dates: Partial<Record<Locale, string>> }[] {
  const dir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const enMeta = readPostMeta(path.join(dir, f));
      if (!enMeta) return null;

      const dates: Partial<Record<Locale, string>> = { [defaultLocale]: enMeta.date };
      for (const locale of locales) {
        if (locale === defaultLocale) continue;
        const localeMeta = readPostMeta(path.join(dir, locale, f));
        if (localeMeta) dates[locale] = localeMeta.date;
      }

      return { slug, dates };
    })
    .filter((p): p is { slug: string; dates: Partial<Record<Locale, string>> } => p !== null);
}

function getLocalizedPostPath(slug: string, locale: Locale): string {
  const entry = routing.pathnames["/post/[slug]"] as Record<string, string>;
  const template = entry[locale] || `/post/${slug}`;
  return template.replace("[slug]", slug);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.picsellia.com";

  const staticPages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    // Core
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/product-overview", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/trial", priority: 0.8, changeFrequency: "monthly" },
    { path: "/enterprise", priority: 0.8, changeFrequency: "monthly" },

    // Platform features
    { path: "/datalake", priority: 0.8, changeFrequency: "monthly" },
    { path: "/dataset-management", priority: 0.8, changeFrequency: "monthly" },
    { path: "/labeling-tool", priority: 0.8, changeFrequency: "monthly" },
    { path: "/annotation-campaigns", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ai-laboratory", priority: 0.8, changeFrequency: "monthly" },
    { path: "/experiment-tracking", priority: 0.8, changeFrequency: "monthly" },
    { path: "/automated-pipelines", priority: 0.8, changeFrequency: "monthly" },
    { path: "/model-deployment", priority: 0.8, changeFrequency: "monthly" },
    { path: "/model-monitoring", priority: 0.8, changeFrequency: "monthly" },

    // Industry
    { path: "/industry/manufacturing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industry/agriculture", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industry/energy", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industry/waste-management", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industry/aerospace", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industry/defense", priority: 0.7, changeFrequency: "monthly" },

    // Use cases
    { path: "/use-cases", priority: 0.7, changeFrequency: "monthly" },
    { path: "/use-cases/abelio", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/altaroad", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/pellencst", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/sgs", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/ficha", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/defects-detection", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/document-processing", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/live-sport-analysis", priority: 0.6, changeFrequency: "yearly" },
    { path: "/use-cases/remote-visual-inspection", priority: 0.6, changeFrequency: "yearly" },

    // Compare
    { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
    { path: "/compare/roboflow", priority: 0.7, changeFrequency: "monthly" },
    { path: "/compare/labelbox", priority: 0.7, changeFrequency: "monthly" },
    { path: "/compare/encord", priority: 0.7, changeFrequency: "monthly" },

    // Supporting
    { path: "/blog", priority: 0.7, changeFrequency: "daily" },
    { path: "/about-us", priority: 0.5, changeFrequency: "monthly" },
    { path: "/community", priority: 0.5, changeFrequency: "monthly" },
    { path: "/white-papers", priority: 0.5, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.4, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => {
      const localizedPath = getLocalizedPath(page.path, locale);
      const prefix = locale === defaultLocale ? "" : `/${locale}`;
      const url = `${baseUrl}${prefix}${localizedPath === "/" ? "" : localizedPath}`;

      const alternates: Record<string, string> = {};
      for (const l of locales) {
        const lPath = getLocalizedPath(page.path, l);
        const lPrefix = l === defaultLocale ? "" : `/${l}`;
        alternates[l] = `${baseUrl}${lPrefix}${lPath === "/" ? "" : lPath}`;
      }

      return {
        url,
        lastModified: new Date("2026-02-01"),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      };
    })
  );

  // Blog posts — lightweight reader to avoid bundling heavy MDX deps.
  // Each translated post gets its own entry with hreflang alternates, same
  // pattern as staticEntries above, so French articles are discoverable.
  const posts = getBlogPostsByLocale();
  const blogEntries: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const availableLocales = locales.filter((l) => post.dates[l]);

    const alternates: Record<string, string> = {};
    for (const l of availableLocales) {
      const lPrefix = l === defaultLocale ? "" : `/${l}`;
      alternates[l] = `${baseUrl}${lPrefix}${getLocalizedPostPath(post.slug, l)}`;
    }

    return availableLocales.map((locale) => {
      const prefix = locale === defaultLocale ? "" : `/${locale}`;
      return {
        url: `${baseUrl}${prefix}${getLocalizedPostPath(post.slug, locale)}`,
        lastModified: new Date(post.dates[locale]!),
        changeFrequency: "yearly" as const,
        priority: locale === defaultLocale ? 0.6 : 0.5,
        alternates: {
          languages: alternates,
        },
      };
    });
  });

  return [...staticEntries, ...blogEntries];
}

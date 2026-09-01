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

/**
 * Real per-page last-significant-edit timestamps, derived from git history
 * (`git log -1 --format=%aI -- src/app/[locale]/<path>`) — not a single
 * hardcoded date reused across every URL. Update a page's entry here when
 * its content meaningfully changes; this is a manual field precisely so it
 * reflects real edits rather than being silently reset to build time.
 */
const LAST_SIGNIFICANT_UPDATE: Record<string, string> = {
  "/": "2026-08-25T16:19:56+02:00",
  "/product-overview": "2026-08-25T16:30:00+02:00",
  "/pricing": "2026-08-25T13:47:15+02:00",
  "/demo": "2026-08-25T13:47:15+02:00",
  "/trial": "2026-08-25T13:47:15+02:00",
  "/enterprise": "2026-08-25T13:47:15+02:00",
  "/datalake": "2026-08-25T15:45:01+02:00",
  "/dataset-management": "2026-08-25T15:45:01+02:00",
  "/labeling-tool": "2026-08-25T16:30:00+02:00",
  "/annotation-campaigns": "2026-08-25T15:45:01+02:00",
  "/ai-laboratory": "2026-08-25T15:45:01+02:00",
  "/experiment-tracking": "2026-08-25T15:45:01+02:00",
  "/automated-pipelines": "2026-08-25T15:45:01+02:00",
  "/model-deployment": "2026-08-25T15:45:01+02:00",
  "/model-monitoring": "2026-08-25T15:45:01+02:00",
  "/industry/manufacturing": "2026-08-25T13:47:15+02:00",
  "/industry/agriculture": "2026-08-25T13:47:15+02:00",
  "/industry/energy": "2026-08-25T13:47:15+02:00",
  "/industry/waste-management": "2026-08-25T13:47:15+02:00",
  "/industry/aerospace": "2026-08-25T13:47:15+02:00",
  "/industry/defense": "2026-08-25T13:47:15+02:00",
  "/use-cases": "2026-08-25T14:10:54+02:00",
  "/use-cases/abelio": "2026-08-25T13:47:15+02:00",
  "/use-cases/altaroad": "2026-08-25T13:47:15+02:00",
  "/use-cases/pellencst": "2026-08-25T13:47:15+02:00",
  "/use-cases/sgs": "2026-08-25T13:47:15+02:00",
  "/use-cases/ficha": "2026-08-25T13:47:15+02:00",
  "/use-cases/defects-detection": "2026-08-25T13:47:15+02:00",
  "/use-cases/document-processing": "2026-08-25T13:47:15+02:00",
  "/use-cases/live-sport-analysis": "2026-08-25T13:47:15+02:00",
  "/use-cases/remote-visual-inspection": "2026-08-25T13:47:15+02:00",
  "/compare": "2026-08-25T14:15:54+02:00",
  "/compare/roboflow": "2026-08-25T14:15:54+02:00",
  "/compare/labelbox": "2026-08-25T13:47:15+02:00",
  "/compare/encord": "2026-08-25T13:47:15+02:00",
  "/blog": "2026-08-25T13:47:15+02:00",
  "/about-us": "2026-08-25T13:47:15+02:00",
  "/community": "2026-08-25T13:47:15+02:00",
  "/white-papers": "2026-08-25T13:47:15+02:00",
  "/faq": "2026-08-25T16:19:56+02:00",
  "/contact": "2026-08-25T11:25:01+02:00",
  "/privacy": "2026-08-25T13:47:15+02:00",
  "/cookies": "2026-08-25T13:47:15+02:00",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.picsellia.com";

  const staticPages: { path: string }[] = [
    // Core
    { path: "/" },
    { path: "/product-overview" },
    { path: "/pricing" },
    { path: "/demo" },
    { path: "/trial" },
    { path: "/enterprise" },

    // Platform features
    { path: "/datalake" },
    { path: "/dataset-management" },
    { path: "/labeling-tool" },
    { path: "/annotation-campaigns" },
    { path: "/ai-laboratory" },
    { path: "/experiment-tracking" },
    { path: "/automated-pipelines" },
    { path: "/model-deployment" },
    { path: "/model-monitoring" },

    // Industry
    { path: "/industry/manufacturing" },
    { path: "/industry/agriculture" },
    { path: "/industry/energy" },
    { path: "/industry/waste-management" },
    { path: "/industry/aerospace" },
    { path: "/industry/defense" },

    // Use cases
    { path: "/use-cases" },
    { path: "/use-cases/abelio" },
    { path: "/use-cases/altaroad" },
    { path: "/use-cases/pellencst" },
    { path: "/use-cases/sgs" },
    { path: "/use-cases/ficha" },
    { path: "/use-cases/defects-detection" },
    { path: "/use-cases/document-processing" },
    { path: "/use-cases/live-sport-analysis" },
    { path: "/use-cases/remote-visual-inspection" },

    // Compare
    { path: "/compare" },
    { path: "/compare/roboflow" },
    { path: "/compare/labelbox" },
    { path: "/compare/encord" },

    // Supporting
    { path: "/blog" },
    { path: "/about-us" },
    { path: "/community" },
    { path: "/white-papers" },
    { path: "/faq" },
    { path: "/contact" },
    { path: "/privacy" },
    { path: "/cookies" },
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

      // priority/changeFrequency are intentionally not emitted — Google has
      // ignored both in sitemaps since 2020, they're dead weight on 277 URLs.
      return {
        url,
        lastModified: new Date(LAST_SIGNIFICANT_UPDATE[page.path] ?? "2026-08-25"),
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
        alternates: {
          languages: alternates,
        },
      };
    });
  });

  return [...staticEntries, ...blogEntries];
}

import { getPathname } from "@/i18n/navigation";
import { locales, defaultLocale, type Locale } from "@/i18n/config";

/**
 * Resolves the locale-specific pathname (including the /fr prefix and any
 * translated slug, e.g. /pricing -> /fr/tarifs) for use in `alternates.canonical`
 * and `openGraph.url`. Every page must self-canonicalize: passing the raw
 * English href straight through here would tell search engines the French
 * page's canonical is the English one.
 */
export function localizedUrl(
  href: Parameters<typeof getPathname>[0]["href"],
  locale: string,
): string {
  return getPathname({ href, locale });
}

/**
 * Builds the `alternates.languages` map (including x-default) for a page,
 * so Next.js renders real <link rel="alternate" hreflang> tags in <head> —
 * the sitemap/HTTP-header hreflang alone is a single point of failure that
 * some crawlers and edge/CDN configs can silently drop.
 *
 * Only call this for pages where EVERY locale in `locales` genuinely has
 * content (true for all static marketing pages). For content that may be
 * untranslated (e.g. a blog post with no French file yet), build the map
 * manually from only the locales that actually have a translation instead —
 * listing an alternate that doesn't exist is worse than omitting it.
 */
export function localizedAlternates(
  href: Parameters<typeof getPathname>[0]["href"],
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const locale of locales) {
    result[locale] = getPathname({ href, locale });
  }
  result["x-default"] = getPathname({ href, locale: defaultLocale });
  return result;
}

export type { Locale };

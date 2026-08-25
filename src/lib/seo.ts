import { getPathname } from "@/i18n/navigation";

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

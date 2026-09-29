// Cal.com events shown on the thank-you pages (demo + trial share one event
// per language). Override per environment with CAL_LINK_EN / CAL_LINK_FR.
const CAL_LINKS: Record<string, { env: string | undefined; fallback: string }> = {
  en: { env: process.env.CAL_LINK_EN, fallback: 'thibaut-lucas-8k2gmk/30-min-intro-meeting' },
  fr: { env: process.env.CAL_LINK_FR, fallback: 'thibaut-lucas-8k2gmk/30min' },
};

export function getCalLink(locale: string): string {
  const link = CAL_LINKS[locale] ?? CAL_LINKS.en;
  return link.env || link.fallback;
}

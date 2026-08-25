import { getTranslations, setRequestLocale } from 'next-intl/server';
import ManufacturingPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "anomaly-detection-manufacturing",
  "manufacturing-datasets",
  "computer-vision-in-production-lines-manufacturing",
  "industrie-4-0-revolutionizing-manufacturing-with-computer-vision",
  "synthetic-data-for-manufacturing-datasets",
  "how-scortex-is-shaping-automated-visual-inspection",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.manufacturing.metadata' });
  const canonical = localizedUrl("/industry/manufacturing", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/industry/manufacturing"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function ManufacturingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Manufacturing', url: '/industry/manufacturing' }], locale)} />
      <ManufacturingPageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}

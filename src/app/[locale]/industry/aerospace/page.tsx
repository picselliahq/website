import { getTranslations, setRequestLocale } from 'next-intl/server';
import AerospacePageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "the-confluence-of-computer-vision-and-drone-technology",
  "optimize-computer-vision-models-on-the-edge",
  "anomaly-detection-computer-vision",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.aerospace.metadata' });
  const canonical = localizedUrl("/industry/aerospace", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function AerospacePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Aerospace', url: '/industry/aerospace' }], locale)} />
      <AerospacePageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}

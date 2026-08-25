import { getTranslations, setRequestLocale } from 'next-intl/server';
import WasteManagementPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "how-computer-vision-is-changing-waste-management",
  "anomaly-detection-computer-vision",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industry.wasteManagement.metadata' });
  const canonical = localizedUrl("/industry/waste-management", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/industry/waste-management"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function WasteManagementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Waste Management', url: '/industry/waste-management' }], locale)} />
      <WasteManagementPageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}

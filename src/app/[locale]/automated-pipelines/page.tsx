import { getTranslations, setRequestLocale } from 'next-intl/server';
import AutomatedPipelinesPageContent from "./PageContent";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "how-to-apply-mlops-to-computer-vision-cvops",
  "creating-a-cvops-platform",
  "end-to-end-repeatable-mlops-for-computer-vision",
  "why-do-classical-mlops-tools-not-fit-computer-vision",
  "cost-of-tools-stitching",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'automatedPipelines.metadata' });
  const canonical = localizedUrl("/automated-pipelines", locale);
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

export default async function AutomatedPipelinesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Automated Pipelines', url: '/automated-pipelines' }], locale)} />
      <AutomatedPipelinesPageContent />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}

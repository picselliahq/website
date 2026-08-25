import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/dataset-management/HeroSection';
import VersionControlSection from '@/components/dataset-management/VersionControlSection';
import CapabilitiesGrid from '@/components/dataset-management/CapabilitiesGrid';
import SDKIntegrationSection from '@/components/dataset-management/SDKIntegrationSection';
import DataOrganizationSection from '@/components/dataset-management/DataOrganizationSection';
import WorkflowIntegrationSection from '@/components/dataset-management/WorkflowIntegrationSection';
import CTASection from '@/components/dataset-management/CTASection';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import RelatedReading from "@/components/blog/RelatedReading";

const relatedSlugs = [
  "image-data-quality-for-image-classification",
  "how-to-ensure-data-quality-best-practices",
  "improve-imbalanced-datasets-in-computer-vision",
  "object-detection-datasets",
  "image-data-augmentation",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'datasetManagement.metadata' });
  const canonical = localizedUrl("/dataset-management", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/dataset-management"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function DatasetManagementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Dataset Management', url: '/dataset-management' }], locale)} />
      <HeroSection />
      <VersionControlSection />
      <CapabilitiesGrid />
      <SDKIntegrationSection />
      <DataOrganizationSection />
      <WorkflowIntegrationSection />
      <CTASection />
      <RelatedReading slugs={relatedSlugs} locale={locale} />
    </>
  );
}

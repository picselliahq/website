import type { Metadata } from 'next';
import DatalakeHero from '@/components/datalake/DatalakeHero';
import DatalakeCapabilities from '@/components/datalake/DatalakeCapabilities';
import DatalakeQueryLanguage from '@/components/datalake/DatalakeQueryLanguage';
import DatalakeVisualSearch from '@/components/datalake/DatalakeVisualSearch';
import DatalakeTagsMetadata from '@/components/datalake/DatalakeTagsMetadata';
import DatalakeCTA from '@/components/datalake/DatalakeCTA';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: 'Datalake - Centralized Data Management',
  description:
    'Centralize and manage all your computer vision data. Visual similarity search, smart curation, CLIP embeddings, and multi-format support.',
  alternates: {
    canonical: '/datalake',
  },
  openGraph: {
    title: 'Datalake - Centralized Data Management',
    description:
      'Centralize and manage all your computer vision data with visual similarity search and smart curation.',
    url: '/datalake',
  },
};

export default function DatalakePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Datalake', url: '/datalake' }])} />
      <DatalakeHero />
      <DatalakeCapabilities />
      <DatalakeQueryLanguage />
      <DatalakeVisualSearch />
      <DatalakeTagsMetadata />
      <DatalakeCTA />
    </>
  );
}

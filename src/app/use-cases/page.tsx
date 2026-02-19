import { Metadata } from 'next';
import PageContent from './PageContent';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: 'Customer Stories - MLOps Success in Production',
  description: "See how companies use Picsellia's MLOps platform for computer vision across manufacturing, agriculture, energy, and waste management.",
  alternates: {
    canonical: '/use-cases',
  },
  openGraph: {
    title: 'Customer Stories - MLOps Success in Production',
    description: "See how companies use Picsellia's MLOps platform for computer vision across manufacturing, agriculture, energy, and waste management.",
    url: '/use-cases',
  },
};

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }])} />
      <PageContent />
    </>
  );
}

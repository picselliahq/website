import type { Metadata } from 'next';
import HeroSection from '@/components/dataset-management/HeroSection';
import VersionControlSection from '@/components/dataset-management/VersionControlSection';
import CapabilitiesGrid from '@/components/dataset-management/CapabilitiesGrid';
import SDKIntegrationSection from '@/components/dataset-management/SDKIntegrationSection';
import DataOrganizationSection from '@/components/dataset-management/DataOrganizationSection';
import WorkflowIntegrationSection from '@/components/dataset-management/WorkflowIntegrationSection';
import CTASection from '@/components/dataset-management/CTASection';

import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
export const metadata: Metadata = {
  title: 'Dataset Management - Version & Organize Data',
  description:
    'Version, organize, and manage datasets for computer vision. Full dataset lineage, smart splitting, SDK integration, and collaborative workflows.',
  alternates: {
    canonical: '/dataset-management',
  },
  openGraph: {
    title: 'Dataset Management - Version & Organize Data',
    description:
      'Version, organize, and manage datasets for computer vision with full lineage and collaborative workflows.',
    url: '/dataset-management',
  },
};

export default function DatasetManagementPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Dataset Management', url: '/dataset-management' }])} />
      <HeroSection />
      <VersionControlSection />
      <CapabilitiesGrid />
      <SDKIntegrationSection />
      <DataOrganizationSection />
      <WorkflowIntegrationSection />
      <CTASection />
    </>
  );
}

import type { Metadata } from 'next';
import HeroSection from '@/components/dataset-management/HeroSection';
import VersionControlSection from '@/components/dataset-management/VersionControlSection';
import CapabilitiesGrid from '@/components/dataset-management/CapabilitiesGrid';
import SDKIntegrationSection from '@/components/dataset-management/SDKIntegrationSection';
import DataOrganizationSection from '@/components/dataset-management/DataOrganizationSection';
import WorkflowIntegrationSection from '@/components/dataset-management/WorkflowIntegrationSection';
import CTASection from '@/components/dataset-management/CTASection';

export const metadata: Metadata = {
  title: 'Dataset Management - Version Control for Datasets',
  description:
    'Version, organize, and manage datasets for computer vision. Full dataset lineage, smart splitting, SDK integration, and collaborative workflows.',
  alternates: {
    canonical: '/dataset-management',
  },
  openGraph: {
    title: 'Dataset Management - Version Control for Datasets',
    description:
      'Version, organize, and manage datasets for computer vision with full lineage and collaborative workflows.',
    url: '/dataset-management',
  },
};

export default function DatasetManagementPage() {
  return (
    <>
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

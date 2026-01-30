import HeroSection from '@/components/dataset-management/HeroSection';
import VersionControlSection from '@/components/dataset-management/VersionControlSection';
import CapabilitiesGrid from '@/components/dataset-management/CapabilitiesGrid';
import SDKIntegrationSection from '@/components/dataset-management/SDKIntegrationSection';
import DataOrganizationSection from '@/components/dataset-management/DataOrganizationSection';
import WorkflowIntegrationSection from '@/components/dataset-management/WorkflowIntegrationSection';
import CTASection from '@/components/dataset-management/CTASection';

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

import DatalakeHero from '@/components/datalake/DatalakeHero';
import DatalakeCapabilities from '@/components/datalake/DatalakeCapabilities';
import DatalakeQueryLanguage from '@/components/datalake/DatalakeQueryLanguage';
import DatalakeVisualSearch from '@/components/datalake/DatalakeVisualSearch';
import DatalakeTagsMetadata from '@/components/datalake/DatalakeTagsMetadata';
import DatalakeCTA from '@/components/datalake/DatalakeCTA';

export default function DatalakePage() {
  return (
    <>
      <DatalakeHero />
      <DatalakeCapabilities />
      <DatalakeQueryLanguage />
      <DatalakeVisualSearch />
      <DatalakeTagsMetadata />
      <DatalakeCTA />
    </>
  );
}

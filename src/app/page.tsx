import Hero from "@/components/sections/Hero";
import PlatformOverview from "@/components/sections/PlatformOverview";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import Integrations from "@/components/sections/Integrations";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <Features />
      <UseCases />
      <Integrations />
      <CTA />
    </>
  );
}

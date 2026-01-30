import Hero from "@/components/sections/Hero";
import PlatformLifecycle from "@/components/sections/PlatformLifecycle";
import UseCases from "@/components/sections/UseCases";
import Integrations from "@/components/sections/Integrations";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformLifecycle />
      <UseCases />
      <Integrations />
      <CTA />
    </>
  );
}

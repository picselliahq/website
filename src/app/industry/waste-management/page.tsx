import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waste Management | Picsellia",
  description: "Computer vision for smart waste sorting. Automate recycling, optimize collection routes, and reduce contamination.",
};

const useCases = [
  {
    title: "Automated Waste Sorting",
    description: "AI-powered systems identify and classify waste materials in real-time on conveyor belts, enabling automated sorting with high accuracy.",
    image: "/images/waste-management-1.jpg",
  },
  {
    title: "Contamination Detection",
    description: "Detect contaminated recyclables before they enter the processing stream, reducing downstream issues and improving material quality.",
    image: "/images/waste-management-2.jpg",
  },
  {
    title: "Fill Level Monitoring",
    description: "Monitor container fill levels using computer vision to optimize collection routes and reduce unnecessary truck deployments.",
    image: "/images/waste-management-3.jpg",
  },
  {
    title: "Material Composition Analysis",
    description: "Analyze waste streams to understand material composition, enabling better recycling strategies and regulatory compliance.",
    image: "/images/waste-management-4.jpg",
  },
];

const stats = [
  { value: "95%+", label: "Sorting Accuracy" },
  { value: "40%", label: "Cost Reduction" },
  { value: "3x", label: "Throughput Increase" },
  { value: "60%", label: "Less Contamination" },
];

export default function WasteManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="badge mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)]"></span>
              Industry Solution
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              AI-Powered Waste Management
            </h1>
            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10">
              Revolutionize waste sorting with computer vision. Automate recycling identification,
              reduce contamination, and optimize collection operations at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary px-6 py-3">
                Request Demo
              </Link>
              <Link href="/trial" className="btn-secondary px-6 py-3">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-[var(--picsellia-green)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--secondary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Computer Vision for Waste Operations
            </h2>
            <p className="text-[var(--secondary-label)]">
              From sorting facilities to collection optimization, Picsellia powers the full spectrum
              of waste management AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[var(--label)] mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)]">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to transform your waste operations?
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-8">
              Join leading waste management companies using Picsellia to build and deploy
              computer vision solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="btn-primary px-8 py-3">
                Talk to an Expert
              </Link>
              <Link href="/use-cases" className="btn-secondary px-8 py-3">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

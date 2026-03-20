import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Picsellia vs Roboflow (2026) - Best Enterprise CV Platform Comparison",
  description:
    "Looking for a Roboflow alternative? Compare Picsellia vs Roboflow for enterprise computer vision: data management, annotation, model training, deployment, monitoring, ISO 27001 compliance, and on-premise options.",
  alternates: {
    canonical: "/compare/roboflow",
  },
  openGraph: {
    title: "Picsellia vs Roboflow (2026) - Enterprise CV Platform Comparison",
    description:
      "Compare Picsellia and Roboflow side by side. See which computer vision platform is best for enterprise MLOps, on-premise deployment, EU AI Act compliance, and production monitoring.",
    url: "/compare/roboflow",
  },
};

// Pipeline stages - visual coverage map
const pipelineStages = [
  {
    name: "Data\nManagement",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    picsellia: "full",
    roboflow: "full",
  },
  {
    name: "Annotation",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    picsellia: "full",
    roboflow: "partial",
  },
  {
    name: "Training",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    picsellia: "full",
    roboflow: "partial",
  },
  {
    name: "Deployment",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    picsellia: "full",
    roboflow: "partial",
  },
  {
    name: "Monitoring",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    picsellia: "full",
    roboflow: "none",
  },
  {
    name: "Compliance",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    picsellia: "full",
    roboflow: "partial",
  },
] as const;

// Feature comparison with status indicators
const comparisonCategories = [
  {
    name: "Data Management",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    color: "var(--system-blue)",
    features: [
      { feature: "Dataset versioning", picsellia: "full", picselliaNote: "Git-like versioning with lineage", roboflow: "partial", roboflowNote: "Basic per-project versioning" },
      { feature: "Visual similarity search", picsellia: "full", picselliaNote: "CLIP-powered embedding search", roboflow: "none", roboflowNote: "Metadata search only" },
      { feature: "Data curation", picsellia: "full", picselliaNote: "Outlier & duplicate detection", roboflow: "none", roboflowNote: "Manual curation" },
      { feature: "Multi-format support", picsellia: "full", picselliaNote: "TIFF, DICOM, multi-spectral", roboflow: "partial", roboflowNote: "Images and video" },
      { feature: "Storage flexibility", picsellia: "full", picselliaNote: "BYO (S3, GCS, Azure) or managed", roboflow: "none", roboflowNote: "Roboflow-hosted only" },
    ],
  },
  {
    name: "Annotation & Labeling",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    color: "var(--picsellia-green)",
    features: [
      { feature: "Annotation types", picsellia: "full", picselliaNote: "Bbox, polygon, polyline, keypoint, mask", roboflow: "partial", roboflowNote: "Bbox, polygon, segmentation" },
      { feature: "Workforce management", picsellia: "full", picselliaNote: "Labeler roles, review, QA metrics", roboflow: "partial", roboflowNote: "Basic collaboration" },
      { feature: "Annotation services", picsellia: "full", picselliaNote: "Professional labeling available", roboflow: "none", roboflowNote: "Not available" },
      { feature: "Smart annotation", picsellia: "full", picselliaNote: "Model-assisted pre-annotation", roboflow: "full", roboflowNote: "Auto-labeling with hosted models" },
    ],
  },
  {
    name: "Training & Experimentation",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    color: "var(--system-orange)",
    features: [
      { feature: "Experiment tracking", picsellia: "full", picselliaNote: "Metrics, artifacts, logs", roboflow: "partial", roboflowNote: "Basic training runs" },
      { feature: "Custom pipelines", picsellia: "full", picselliaNote: "Any framework, Docker pipelines", roboflow: "none", roboflowNote: "AutoML or export externally" },
      { feature: "GPU compute", picsellia: "full", picselliaNote: "T4, A10G, A100 managed allocation", roboflow: "partial", roboflowNote: "Limited GPU options" },
      { feature: "Model registry", picsellia: "full", picselliaNote: "Centralized with versioning & lineage", roboflow: "partial", roboflowNote: "Project-level model versions" },
    ],
  },
  {
    name: "Deployment & Monitoring",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    color: "var(--system-indigo)",
    features: [
      { feature: "Deployment targets", picsellia: "full", picselliaNote: "Cloud, edge, on-prem, air-gapped", roboflow: "partial", roboflowNote: "Cloud & edge via Inference" },
      { feature: "Production monitoring", picsellia: "full", picselliaNote: "Drift & anomaly detection", roboflow: "none", roboflowNote: "Basic inference analytics" },
      { feature: "Continuous training", picsellia: "full", picselliaNote: "Auto-retrain on drift triggers", roboflow: "none", roboflowNote: "Manual retraining" },
      { feature: "Shadow deployments", picsellia: "full", picselliaNote: "A/B testing & model comparison", roboflow: "none", roboflowNote: "Not available" },
    ],
  },
  {
    name: "Enterprise & Compliance",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "var(--system-red)",
    features: [
      { feature: "Security certification", picsellia: "full", picselliaNote: "ISO 27001:2022", roboflow: "partial", roboflowNote: "SOC 2 Type II" },
      { feature: "EU AI Act readiness", picsellia: "full", picselliaNote: "Built-in compliance features", roboflow: "none", roboflowNote: "No AI Act tooling" },
      { feature: "On-premise deployment", picsellia: "full", picselliaNote: "Kubernetes or Docker", roboflow: "partial", roboflowNote: "Enterprise plan only" },
      { feature: "RBAC", picsellia: "full", picselliaNote: "Org, project, dataset-level", roboflow: "partial", roboflowNote: "Workspace-level roles" },
      { feature: "Data residency", picsellia: "full", picselliaNote: "EU/US or your infrastructure", roboflow: "none", roboflowNote: "US-hosted primarily" },
    ],
  },
];

const faqs = [
  {
    question: "What is the main difference between Picsellia and Roboflow?",
    answer:
      "Picsellia is an end-to-end CVOps platform built for enterprise teams that need full control over their computer vision pipeline — from data management and annotation to model training, deployment, and production monitoring. Roboflow focuses on developer experience with a product-led growth model, offering a large public dataset hub and quick prototyping tools. The key difference is scope: Picsellia covers 6 of 6 pipeline stages natively, while Roboflow covers data and basic training, requiring external tools for deployment and monitoring.",
  },
  {
    question: "Is Picsellia a good Roboflow alternative for enterprise teams?",
    answer:
      "Yes. Picsellia is designed as an enterprise-grade Roboflow alternative for teams that have outgrown Roboflow's developer-focused tooling. Picsellia provides ISO 27001:2022 certification, EU AI Act compliance features, full on-premise deployment with Kubernetes or Docker, organization-level RBAC, data residency controls, and production monitoring with drift detection — all capabilities that Roboflow's enterprise tier doesn't fully address.",
  },
  {
    question: "Can I migrate my datasets from Roboflow to Picsellia?",
    answer:
      "Yes. Picsellia supports importing datasets in all common computer vision formats including COCO, PASCAL VOC, YOLO, and custom formats. You can export your Roboflow projects and import them directly into Picsellia with all annotations, labels, and metadata preserved. The Picsellia team also provides migration assistance for large-scale dataset transfers.",
  },
  {
    question: "How does Picsellia pricing compare to Roboflow?",
    answer:
      "Roboflow uses a tiered pricing model (free, starter, enterprise) based on image volume. Picsellia uses modular pricing where you pay only for the capabilities you need — Data Engine, Annotation, Training, or Deployment modules. This means you can start with just dataset management and add modules as your team grows, avoiding paying for unused features. Picsellia also offers a 14-day free trial and a Community Edition for individual developers.",
  },
  {
    question: "Which platform is better for regulated industries like healthcare or defense?",
    answer:
      "Picsellia is purpose-built for regulated industries. With ISO 27001:2022 certification, built-in EU AI Act compliance features, full on-premise deployment options, air-gapped environments, EU and US data residency, and complete audit trails across the ML lifecycle, Picsellia is the preferred choice for healthcare, defense, energy, aerospace, and manufacturing teams that need to meet strict regulatory requirements.",
  },
  {
    question: "Does Picsellia support on-premise deployment?",
    answer:
      "Yes. Picsellia offers full on-premise deployment via Kubernetes or Docker, including air-gapped environments with no internet connectivity required. This is a major differentiator compared to Roboflow, which is primarily cloud-hosted with limited self-hosted options available only on higher-tier enterprise plans.",
  },
  {
    question: "Can Picsellia monitor models in production like MLflow or Weights & Biases?",
    answer:
      "Yes. Picsellia includes built-in production monitoring with drift detection, anomaly detection, and automated feedback loops — capabilities that Roboflow does not offer. Unlike MLflow or W&B, which focus on experiment tracking, Picsellia provides a unified platform covering the full lifecycle from data curation to production monitoring, eliminating the need to stitch together multiple tools.",
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "full") {
    return (
      <div className="w-7 h-7 rounded-full bg-[var(--picsellia-green)]/15 flex items-center justify-center">
        <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === "partial") {
    return (
      <div className="w-7 h-7 rounded-full bg-[var(--system-orange)]/15 flex items-center justify-center">
        <div className="w-2.5 h-0.5 rounded-full bg-[var(--system-orange)]" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-full bg-[var(--system-red)]/10 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-[var(--system-red)]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}

function PipelineStageCard({
  stage,
}: {
  stage: (typeof pipelineStages)[number];
}) {
  const picselliaColor =
    stage.picsellia === "full"
      ? "var(--picsellia-green)"
      : stage.picsellia === "partial"
        ? "var(--system-orange)"
        : "var(--system-red)";
  const roboflowColor =
    stage.roboflow === "full"
      ? "var(--picsellia-green)"
      : stage.roboflow === "partial"
        ? "var(--system-orange)"
        : "var(--system-red)";

  return (
    <div className="card p-4 text-center group hover:border-[var(--picsellia-green)]/30 transition-all">
      <div className="w-10 h-10 rounded-xl bg-[var(--tertiary-system-background)] flex items-center justify-center mx-auto mb-3">
        <svg className="w-5 h-5 text-[var(--secondary-label)] group-hover:text-[var(--picsellia-green)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stage.icon} />
        </svg>
      </div>
      <div className="text-xs font-medium text-[var(--label)] mb-3 whitespace-pre-line leading-tight min-h-[2rem] flex items-center justify-center">
        {stage.name}
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: picselliaColor }} />
          <span className="text-[10px] text-[var(--tertiary-label)]">P</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: roboflowColor }} />
          <span className="text-[10px] text-[var(--tertiary-label)]">R</span>
        </div>
      </div>
    </div>
  );
}

export default function CompareRoboflowPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Picsellia vs Roboflow", url: "/compare/roboflow" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--system-blue)]/8 rounded-full blur-[130px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--label) 1px, transparent 1px), linear-gradient(90deg, var(--label) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-10">
              <span className="text-sm font-medium text-[var(--picsellia-green)]">
                Platform Comparison
              </span>
            </div>

            {/* VS Graphic */}
            <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mb-3 shadow-lg shadow-[var(--picsellia-green)]/10">
                  <Image
                    src="/images/Icon_white.svg"
                    alt="Picsellia"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-sm font-semibold text-[var(--label)]">Picsellia</span>
                <span className="text-[11px] text-[var(--tertiary-label)]">CVOps Platform</span>
              </div>

              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold text-[var(--tertiary-label)]">VS</span>
                </div>
                <div className="absolute top-1/2 -left-6 md:-left-10 w-6 md:w-10 h-px bg-gradient-to-r from-[var(--picsellia-green)]/40 to-transparent" />
                <div className="absolute top-1/2 -right-6 md:-right-10 w-6 md:w-10 h-px bg-gradient-to-l from-[var(--system-blue)]/40 to-transparent" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mb-3 shadow-lg shadow-[var(--system-blue)]/10">
                  <Image
                    src="/images/compare/roboflow.svg"
                    alt="Roboflow"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-sm font-semibold text-[var(--label)]">Roboflow</span>
                <span className="text-[11px] text-[var(--tertiary-label)]">Developer Toolkit</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Picsellia vs Roboflow:{" "}
              <span className="text-[var(--system-blue)]">which CV platform fits your team?</span>
            </h1>

            <p className="text-lg text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              Roboflow is great for prototyping and developer communities.
              Picsellia is built for enterprise teams that need end-to-end
              MLOps — from data curation to production monitoring — with
              ISO 27001 compliance and on-premise deployment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="btn-primary px-8 py-3">
                Book a Demo
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/trial" className="btn-secondary px-8 py-3">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Coverage */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Pipeline Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Computer vision pipeline coverage
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              Picsellia covers the full CV lifecycle end to end. Roboflow focuses on data preparation and quick prototyping.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--picsellia-green)]" />
              <span className="text-xs text-[var(--secondary-label)]">Full support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--system-orange)]" />
              <span className="text-xs text-[var(--secondary-label)]">Partial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--system-red)]" />
              <span className="text-xs text-[var(--secondary-label)]">Not available</span>
            </div>
          </div>

          {/* Pipeline stages grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {pipelineStages.map((stage) => (
              <PipelineStageCard key={stage.name} stage={stage} />
            ))}
          </div>

          {/* Summary bars */}
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded overflow-hidden">
                    <Image src="/images/Icon_white.svg" alt="Picsellia" width={20} height={20} className="w-full h-full" />
                  </div>
                  <span className="text-sm font-medium text-[var(--label)]">Picsellia</span>
                </div>
                <span className="text-sm font-semibold text-[var(--picsellia-green)]">6/6 stages</span>
              </div>
              <div className="h-3 rounded-full bg-[var(--tertiary-system-background)] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--picsellia-green)] to-[var(--picsellia-green)]/70" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded overflow-hidden">
                    <Image src="/images/compare/roboflow.svg" alt="Roboflow" width={20} height={20} className="w-full h-full" />
                  </div>
                  <span className="text-sm font-medium text-[var(--label)]">Roboflow</span>
                </div>
                <span className="text-sm font-semibold text-[var(--system-blue)]">2/6 stages</span>
              </div>
              <div className="h-3 rounded-full bg-[var(--tertiary-system-background)] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--system-blue)] to-[var(--system-blue)]/70" style={{ width: "33%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section className="py-16 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "ISO 27001", label: "Security certified", sublabel: "vs SOC 2 only" },
              { value: "6/6", label: "Pipeline stages", sublabel: "End-to-end" },
              { value: "EU + US", label: "Data residency", sublabel: "Or your own infra" },
              { value: "Any GPU", label: "T4 to A100", sublabel: "Managed allocation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--picsellia-green)] mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-[var(--label)]">{stat.label}</div>
                <div className="text-xs text-[var(--tertiary-label)]">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed comparisons */}
      {comparisonCategories.map((category) => (
        <section key={category.name} className="py-20 border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)` }}
              >
                <svg className="w-5 h-5" style={{ color: category.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--label)]">{category.name}</h2>
            </div>

            {/* Feature rows */}
            <div className="space-y-3">
              {/* Header row - desktop */}
              <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-4 px-4 pb-2">
                <div className="text-xs font-medium text-[var(--tertiary-label)] uppercase tracking-wider">Feature</div>
                <div className="text-xs font-medium text-[var(--picsellia-green)] uppercase tracking-wider">Picsellia</div>
                <div className="text-xs font-medium text-[var(--system-blue)] uppercase tracking-wider">Roboflow</div>
              </div>

              {category.features.map((row) => (
                <div
                  key={row.feature}
                  className="card-static p-4 md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-4 md:items-center"
                >
                  <div className="text-sm font-semibold text-[var(--label)] mb-3 md:mb-0">
                    {row.feature}
                  </div>
                  <div className="flex items-center gap-2.5 mb-2 md:mb-0">
                    <StatusIcon status={row.picsellia} />
                    <span className="text-sm text-[var(--secondary-label)]">{row.picselliaNote}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <StatusIcon status={row.roboflow} />
                    <span className="text-sm text-[var(--tertiary-label)]">{row.roboflowNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Recommendation */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Recommendation
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Which platform is right for you?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Picsellia */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--picsellia-green)]/10 to-transparent" />
              <div className="card p-8 border-[var(--picsellia-green)]/30 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl overflow-hidden">
                    <Image src="/images/Icon_white.svg" alt="Picsellia" width={40} height={40} className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Choose Picsellia</h3>
                    <p className="text-xs text-[var(--picsellia-green)]">Best for enterprise & production</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "End-to-end MLOps for production CV systems",
                    "ISO 27001 compliance and EU data residency",
                    "On-premise or hybrid deployment",
                    "Production monitoring with drift detection",
                    "Enterprise RBAC and audit trails",
                    "Custom training pipelines with any framework",
                    "Professional annotation services",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[var(--picsellia-green)]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--secondary-label)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Roboflow */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <Image src="/images/compare/roboflow.svg" alt="Roboflow" width={40} height={40} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">Consider Roboflow</h3>
                  <p className="text-xs text-[var(--system-blue)]">Best for prototyping & learning</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Quick prototyping for individual projects",
                  "Access to a large public dataset hub",
                  "A generous free tier for hobby or learning",
                  "A strong developer community and tutorials",
                  "Simple AutoML training without pipeline setup",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[var(--system-blue)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--secondary-label)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="text-sm font-semibold text-[var(--label)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--picsellia-green)]/10 via-transparent to-[var(--system-blue)]/10" />
            <div className="absolute inset-0 opacity-[0.04]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle, var(--label) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <div className="card p-0 border-[var(--picsellia-green)]/20 relative">
              <div className="relative z-10 p-12 md:p-16 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[var(--picsellia-green)]/15 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Ready to see the difference?
                </h2>
                <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                  See how Picsellia compares to Roboflow for your specific use
                  case. Get a personalized demo from our team.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/demo" className="btn-primary px-8 py-3">
                    Book a Demo
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/trial" className="btn-secondary px-8 py-3">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

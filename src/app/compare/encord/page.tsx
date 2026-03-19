import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Picsellia vs Encord (2026) - End-to-End CVOps vs Data-Centric Annotation",
  description:
    "Looking for an Encord alternative? Compare Picsellia vs Encord for computer vision: annotation, data curation, model training, deployment, monitoring, ISO 27001 compliance, and on-premise options. See why teams choose full CVOps over annotation-only platforms.",
  alternates: {
    canonical: "/compare/encord",
  },
  openGraph: {
    title: "Picsellia vs Encord (2026) - Full CV Platform vs Annotation & Curation Tool",
    description:
      "Compare Picsellia and Encord side by side. See which platform is best for enterprise computer vision — full MLOps lifecycle vs data-centric annotation tooling.",
    url: "/compare/encord",
  },
};

// Pipeline stages - the key visual differentiator
const pipelineStages = [
  { name: "Data\nManagement", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", picsellia: true, encord: true },
  { name: "Annotation", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", picsellia: true, encord: true },
  { name: "Training", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", picsellia: true, encord: false },
  { name: "Deployment", icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12", picsellia: true, encord: false },
  { name: "Monitoring", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", picsellia: true, encord: false },
  { name: "Compliance", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", picsellia: true, encord: false },
];

const comparisonCategories = [
  {
    name: "Data Management & Curation",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    color: "var(--system-blue)",
    features: [
      { feature: "Dataset versioning", picsellia: "full", picselliaNote: "Git-like versioning with lineage", encord: "partial", encordNote: "Basic dataset snapshots" },
      { feature: "Visual similarity search", picsellia: "full", picselliaNote: "CLIP-powered embedding search", encord: "full", encordNote: "Embedding-based natural language search" },
      { feature: "Data curation & quality", picsellia: "full", picselliaNote: "Outlier & duplicate detection", encord: "full", encordNote: "Active learning & quality metrics" },
      { feature: "Multi-format support", picsellia: "full", picselliaNote: "TIFF, DICOM, multi-spectral", encord: "full", encordNote: "Images, video, DICOM sequences" },
      { feature: "Storage flexibility", picsellia: "full", picselliaNote: "BYO (S3, GCS, Azure) or managed", encord: "full", encordNote: "Cloud storage integration" },
    ],
  },
  {
    name: "Annotation & Labeling",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    color: "var(--picsellia-green)",
    features: [
      { feature: "Annotation types", picsellia: "full", picselliaNote: "Bbox, polygon, polyline, keypoint, mask", encord: "full", encordNote: "Bbox, polygon, polyline, keypoint, mask" },
      { feature: "Video annotation", picsellia: "full", picselliaNote: "Frame-level annotation with tracking", encord: "full", encordNote: "Frame-by-frame with object tracking" },
      { feature: "Workforce management", picsellia: "full", picselliaNote: "Labeler roles, review, QA metrics", encord: "full", encordNote: "Workflow stages & review routing" },
      { feature: "Annotation services", picsellia: "full", picselliaNote: "Professional labeling available", encord: "none", encordNote: "Not available" },
      { feature: "Smart annotation", picsellia: "full", picselliaNote: "Model-assisted pre-annotation", encord: "full", encordNote: "Auto-labeling with foundation models" },
    ],
  },
  {
    name: "Training & Experimentation",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    color: "var(--system-orange)",
    features: [
      { feature: "Experiment tracking", picsellia: "full", picselliaNote: "Metrics, artifacts, logs", encord: "none", encordNote: "Not available" },
      { feature: "Custom pipelines", picsellia: "full", picselliaNote: "Any framework, Docker pipelines", encord: "none", encordNote: "Export to external tools" },
      { feature: "GPU compute", picsellia: "full", picselliaNote: "T4, A10G, A100 managed", encord: "none", encordNote: "Not available" },
      { feature: "Model registry", picsellia: "full", picselliaNote: "Centralized with versioning & lineage", encord: "partial", encordNote: "Model evaluation only" },
      { feature: "Model evaluation", picsellia: "full", picselliaNote: "Built-in metrics, visual analysis", encord: "full", encordNote: "Evaluation & error analysis tools" },
    ],
  },
  {
    name: "Deployment & Monitoring",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    color: "var(--system-indigo)",
    features: [
      { feature: "Deployment targets", picsellia: "full", picselliaNote: "Cloud, edge, on-prem, air-gapped", encord: "none", encordNote: "Not available" },
      { feature: "Production monitoring", picsellia: "full", picselliaNote: "Drift & anomaly detection", encord: "none", encordNote: "Not available" },
      { feature: "Continuous training", picsellia: "full", picselliaNote: "Auto-retrain on drift triggers", encord: "none", encordNote: "Not available" },
      { feature: "Shadow deployments", picsellia: "full", picselliaNote: "A/B testing & model comparison", encord: "none", encordNote: "Not available" },
      { feature: "Model serving", picsellia: "full", picselliaNote: "Inference endpoints with autoscaling", encord: "none", encordNote: "Requires external infra" },
    ],
  },
  {
    name: "Enterprise & Compliance",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "var(--system-red)",
    features: [
      { feature: "Security certification", picsellia: "full", picselliaNote: "ISO 27001:2022", encord: "partial", encordNote: "SOC 2 Type II" },
      { feature: "EU AI Act readiness", picsellia: "full", picselliaNote: "Built-in compliance features", encord: "none", encordNote: "No AI Act tooling" },
      { feature: "On-premise deployment", picsellia: "full", picselliaNote: "Kubernetes or Docker", encord: "partial", encordNote: "VPC deployment option" },
      { feature: "RBAC", picsellia: "full", picselliaNote: "Org, project, dataset-level", encord: "partial", encordNote: "Org and project-level" },
      { feature: "Data residency", picsellia: "full", picselliaNote: "EU/US or your infrastructure", encord: "partial", encordNote: "US and EU regions" },
    ],
  },
];

const faqs = [
  {
    question: "What is the main difference between Picsellia and Encord?",
    answer:
      "Encord is a data-centric AI platform focused on annotation, data curation, and active learning — it helps teams label and curate training data efficiently but stops before model training. Picsellia is an end-to-end CVOps platform that covers the entire computer vision lifecycle: data management, annotation, model training, deployment, and production monitoring. Encord covers 2 of 6 pipeline stages natively, while Picsellia covers all 6 — eliminating the need to integrate separate tools like W&B, MLflow, SageMaker, or custom monitoring solutions.",
  },
  {
    question: "Is Picsellia a good Encord alternative for computer vision teams?",
    answer:
      "Yes. Picsellia is a comprehensive Encord alternative for any team building production computer vision systems. It includes everything Encord offers for CV annotation — bounding boxes, polygons, segmentation masks, video annotation, and active learning — plus built-in training pipelines, experiment tracking, model deployment (cloud, edge, and on-premise), and production monitoring with drift detection. Teams switch from Encord to Picsellia to consolidate their entire ML toolchain into a single platform with unified data lineage.",
  },
  {
    question: "Can I migrate my annotations from Encord to Picsellia?",
    answer:
      "Yes. Picsellia supports importing datasets in all standard computer vision formats including COCO, PASCAL VOC, YOLO, and custom formats. You can export your Encord projects and import them into Picsellia with all annotations, labels, and metadata preserved. The Picsellia team also provides hands-on migration assistance for large-scale transfers involving thousands of annotated assets.",
  },
  {
    question: "How does Encord compare to Picsellia for active learning and data curation?",
    answer:
      "Both platforms offer strong data curation capabilities. Encord provides active learning workflows, quality metrics, and embedding-based data exploration. Picsellia offers CLIP-powered visual similarity search, automated outlier and duplicate detection, and dataset versioning with full lineage. The key difference is that Picsellia connects curation directly to your training pipelines and production monitoring — so when you curate better data, you can immediately retrain and redeploy without leaving the platform.",
  },
  {
    question: "How does Picsellia pricing compare to Encord?",
    answer:
      "Encord prices by annotation volume and platform access, which can scale quickly for large teams with many data rows. Picsellia uses modular pricing — you pay only for the modules you need: Data Engine, Annotation, Training, or Deployment. This means you can start with just data management and annotation, then add training and deployment as your needs grow. Picsellia also offers a 14-day free trial and a Community Edition for individual developers.",
  },
  {
    question: "Which platform is better for regulated industries like healthcare or defense?",
    answer:
      "Picsellia is purpose-built for regulated industries. With ISO 27001:2022 certification, built-in EU AI Act compliance features, full on-premise deployment (Kubernetes or Docker, including air-gapped environments), EU and US data residency options, and complete audit trails across the entire ML lifecycle, Picsellia is the preferred choice for healthcare, defense, energy, aerospace, and manufacturing teams. Encord offers SOC 2 Type II certification and VPC deployment options, but lacks AI Act tooling and full on-premise flexibility.",
  },
  {
    question: "What is the hidden cost of using Encord for computer vision projects?",
    answer:
      "Encord covers annotation and data curation but requires you to build or buy the rest of the pipeline separately. A typical Encord-based stack needs DVC or LakeFS for advanced data versioning, W&B or MLflow for experiment tracking, custom scripts or managed services for training pipelines, SageMaker or Vertex AI for deployment, and Grafana or custom tooling for monitoring. That means 5 or more vendors, fragmented data lineage, and no single view of your entire ML operation. Picsellia consolidates all of this into one platform with unified traceability from data to production.",
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

export default function CompareEncordPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Picsellia vs Encord", url: "/compare/encord" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--system-indigo)]/8 rounded-full blur-[130px]" />
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
                <div className="absolute top-1/2 -right-6 md:-right-10 w-6 md:w-10 h-px bg-gradient-to-l from-[var(--system-indigo)]/40 to-transparent" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mb-3 shadow-lg shadow-[var(--system-indigo)]/10">
                  <Image
                    src="/images/compare/encord.png"
                    alt="Encord"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-sm font-semibold text-[var(--label)]">Encord</span>
                <span className="text-[11px] text-[var(--tertiary-label)]">Data-Centric AI Platform</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Picsellia vs Encord:{" "}
              <span className="text-[var(--system-indigo)]">full CVOps vs data-centric annotation</span>
            </h1>

            <p className="text-lg text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              Encord excels at annotation and data curation for AI teams.
              Picsellia goes further — covering annotation, training, deployment,
              and production monitoring in a single platform with ISO 27001
              compliance and on-premise deployment.
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

      {/* The Gap — visual pipeline comparison */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
              The Key Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Annotation & curation vs. full CV platform
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto">
              Encord covers 2 of 6 pipeline stages. For training, deployment, and monitoring, you need to bring your own tools.
            </p>
          </div>

          {/* Pipeline visualization */}
          <div className="mt-12 max-w-4xl mx-auto">
            {/* Picsellia row */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg overflow-hidden">
                  <Image src="/images/Icon_white.svg" alt="Picsellia" width={28} height={28} className="w-full h-full" />
                </div>
                <span className="text-sm font-semibold text-[var(--label)]">Picsellia</span>
                <span className="text-xs text-[var(--picsellia-green)] ml-auto font-medium">6/6 stages covered</span>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {pipelineStages.map((stage) => (
                  <div
                    key={stage.name}
                    className="relative rounded-xl p-3 text-center bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20"
                  >
                    <svg className="w-5 h-5 mx-auto mb-1.5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stage.icon} />
                    </svg>
                    <span className="text-[10px] font-medium text-[var(--picsellia-green)] whitespace-pre-line leading-tight block">{stage.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Encord row */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg overflow-hidden">
                  <Image src="/images/compare/encord.png" alt="Encord" width={28} height={28} className="w-full h-full" />
                </div>
                <span className="text-sm font-semibold text-[var(--label)]">Encord</span>
                <span className="text-xs text-[var(--system-indigo)] ml-auto font-medium">2/6 stages covered</span>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {pipelineStages.map((stage) => (
                  <div
                    key={stage.name}
                    className={`relative rounded-xl p-3 text-center ${
                      stage.encord
                        ? "bg-[var(--system-indigo)]/10 border border-[var(--system-indigo)]/20"
                        : "bg-[var(--tertiary-system-background)]/50 border border-dashed border-[var(--border)]"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 mx-auto mb-1.5 ${
                        stage.encord ? "text-[var(--system-indigo)]" : "text-[var(--tertiary-label)]/30"
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stage.icon} />
                    </svg>
                    <span className={`text-[10px] font-medium whitespace-pre-line leading-tight block ${
                      stage.encord ? "text-[var(--system-indigo)]" : "text-[var(--tertiary-label)]/40"
                    }`}>{stage.name}</span>
                    {!stage.encord && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[9px] font-medium text-[var(--tertiary-label)] bg-[var(--tertiary-system-background)] px-1.5 py-0.5 rounded">
                          needs extra tool
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tool sprawl callout */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="card p-6 bg-[var(--system-orange)]/[0.03] border-[var(--system-orange)]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--system-orange)]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--label)] mb-1">The hidden cost of tool sprawl</h3>
                  <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                    Using Encord for annotation and curation means you still need <strong>DVC</strong> or <strong>LakeFS</strong> for data versioning,{" "}
                    <strong>W&B</strong> or <strong>MLflow</strong> for experiment tracking, <strong>SageMaker</strong> or <strong>Vertex AI</strong> for
                    deployment, and <strong>custom tooling</strong> for monitoring. That&apos;s 5+ vendors, fragmented lineage, and no single pane of glass.
                  </p>
                </div>
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
              { value: "1", label: "Platform", sublabel: "vs 5+ tools stitched together" },
              { value: "6/6", label: "Pipeline stages", sublabel: "End-to-end coverage" },
              { value: "100%", label: "Data lineage", sublabel: "From curation to production" },
              { value: "ISO 27001", label: "Certified", sublabel: "Full lifecycle compliance" },
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

            <div className="space-y-3">
              <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-4 px-4 pb-2">
                <div className="text-xs font-medium text-[var(--tertiary-label)] uppercase tracking-wider">Feature</div>
                <div className="text-xs font-medium text-[var(--picsellia-green)] uppercase tracking-wider">Picsellia</div>
                <div className="text-xs font-medium text-[var(--system-indigo)] uppercase tracking-wider">Encord</div>
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
                    <StatusIcon status={row.encord} />
                    <span className="text-sm text-[var(--tertiary-label)]">{row.encordNote}</span>
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
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--picsellia-green)]/10 to-transparent" />
              <div className="card p-8 border-[var(--picsellia-green)]/30 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl overflow-hidden">
                    <Image src="/images/Icon_white.svg" alt="Picsellia" width={40} height={40} className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)]">Choose Picsellia</h3>
                    <p className="text-xs text-[var(--picsellia-green)]">Best for end-to-end CV workflows</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "An end-to-end platform from curation to production",
                    "Built-in training pipelines and experiment tracking",
                    "Model deployment with monitoring and drift detection",
                    "ISO 27001 compliance and EU AI Act readiness",
                    "On-premise or air-gapped deployment",
                    "Full data lineage across the ML lifecycle",
                    "A single vendor for your entire CV stack",
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

            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <Image src="/images/compare/encord.png" alt="Encord" width={40} height={40} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">Consider Encord</h3>
                  <p className="text-xs text-[var(--system-indigo)]">Best for annotation & data curation</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Annotation-focused with strong data curation tools",
                  "Active learning for data selection and quality scoring",
                  "You already have training & deployment infrastructure",
                  "Embedding-based data exploration and search",
                  "Model evaluation and error analysis workflows",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[var(--system-indigo)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--picsellia-green)]/10 via-transparent to-[var(--system-indigo)]/10" />
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
                  Go beyond annotation and curation
                </h2>
                <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                  See how Picsellia gives you data curation plus training,
                  deployment, and monitoring — all in one platform.
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

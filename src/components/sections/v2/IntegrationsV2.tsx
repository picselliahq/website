"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const integrationItems = [
  {
    categoryKey: "categoryTrain" as const,
    tag: "ML_FRAMEWORKS",
    color: "#ff9f0a",
    items: [
      { name: "PyTorch", logo: "/images/community/partners/pytorch.svg" },
      { name: "TensorFlow", logo: "/images/community/partners/tensorflow.svg" },
      { name: "Keras", logo: "/images/community/partners/keras.svg" },
      { name: "Ultralytics", logo: "/images/community/partners/ultralytics.svg" },
      { name: "Hugging Face", logo: "/images/community/partners/huggingface.svg" },
    ],
  },
  {
    categoryKey: "categoryDeploy" as const,
    tag: "INFRASTRUCTURE",
    color: "#33ab68",
    items: [
      { name: "Amazon S3", logo: "/images/community/partners/amazon-s3.svg" },
      { name: "Google Cloud", logo: "/images/community/partners/google-cloud.svg" },
      { name: "Azure", logo: "/images/community/partners/azure.svg" },
      { name: "NVIDIA Jetson", logo: "/images/community/partners/nvidia-jetson.svg" },
      { name: "SageMaker", logo: "/images/community/partners/sagemaker.svg" },
    ],
  },
  {
    categoryKey: "categoryConnect" as const,
    tag: "ECOSYSTEM",
    color: "#7775ef",
    items: [
      { name: "Snowflake", logo: "/images/community/partners/snowflake.svg" },
      { name: "Databricks", logo: "/images/community/partners/databricks.svg" },
      { name: "MLflow", logo: "/images/community/partners/mlflow.svg" },
      { name: "Weights & Biases", logo: "/images/community/partners/weights-biases.svg" },
      { name: "Jupyter", logo: "/images/community/partners/jupyter.svg" },
    ],
  },
];

export default function IntegrationsV2() {
  const t = useTranslations("home.integrations");

  return (
    <section className="py-28 border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
            {t("sectionLabel")}
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            {t("headlinePart1")}
            <br />
            <span className="text-[var(--secondary-label)]">{t("headlinePart2")}</span>
          </h2>
          <div className="flex items-center gap-6 text-sm">
            <div>
              <span className="text-2xl font-bold font-mono text-[var(--label)]">
                {t("integrationsCount")}
              </span>
              <span className="text-xs text-[var(--tertiary-label)] font-mono uppercase tracking-wider ml-2">
                {t("integrationsLabel")}
              </span>
            </div>
            <div className="w-px h-8 bg-[var(--border)]" />
            <div>
              <span className="text-2xl font-bold font-mono text-[var(--label)]">
                {t("apiFirst")}
              </span>
              <span className="text-xs text-[var(--tertiary-label)] font-mono uppercase tracking-wider ml-2">
                {t("apiFirstLabel")}
              </span>
            </div>
          </div>
        </div>

        {/* Integration groups — table-like rows */}
        <div className="space-y-6 mb-16">
          {integrationItems.map((group) => (
            <div
              key={group.categoryKey}
              className="border border-[var(--border)] rounded-xl overflow-hidden"
            >
              {/* Group header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: group.color }}
                  />
                  <h3
                    className="text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: group.color }}
                  >
                    {t(group.categoryKey)}
                  </h3>
                </div>
                <span className="text-[9px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
                  {group.tag}
                </span>
              </div>

              {/* Items row */}
              <div className="flex divide-x divide-[var(--border)]">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex-1 flex flex-col items-center gap-2.5 py-5 px-3 hover:bg-[var(--secondary-system-background)] transition-colors cursor-default"
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-[11px] font-mono text-[var(--tertiary-label)] text-center leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SDK Section */}
        <div className="border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left — SDK info */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider px-2 py-1 rounded bg-[var(--picsellia-green)]/10">
                  SDK
                </span>
                <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
                  pip install picsellia
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[var(--label)] mb-4">
                {t("sdkTitle")}
              </h3>

              <p className="text-sm text-[var(--secondary-label)] mb-6 leading-relaxed">
                {t("sdkDescription")}
              </p>

              <div className="space-y-3">
                {[
                  { label: t("sdkTypeSafety"), detail: t("sdkTypeSafetyDetail") },
                  { label: t("sdkAsync"), detail: t("sdkAsyncDetail") },
                  { label: t("sdkJupyter"), detail: t("sdkJupyterDetail") },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0"
                  >
                    <span className="text-sm text-[var(--label)]">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-[var(--picsellia-green)]">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Code */}
            <div className="border-t md:border-t-0 md:border-l border-[var(--border)] bg-[#0c0c0e]">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-white/20 font-mono">
                  quickstart.py
                </span>
              </div>
              <pre className="p-5 text-[13px] overflow-x-auto leading-[1.7] font-mono">
                <code>
                  <span className="text-[#c792ea]">from</span>{" "}
                  <span className="text-white/80">picsellia</span>{" "}
                  <span className="text-[#c792ea]">import</span>{" "}
                  <span className="text-white/80">Client</span>
                  {"\n\n"}
                  <span className="text-white/20">
                    # Connect to your workspace
                  </span>
                  {"\n"}
                  <span className="text-white/60">client</span>{" "}
                  <span className="text-[#89ddff]">=</span>{" "}
                  <span className="text-[#82aaff]">Client</span>
                  <span className="text-white/40">()</span>
                  {"\n"}
                  <span className="text-white/60">project</span>{" "}
                  <span className="text-[#89ddff]">=</span>{" "}
                  <span className="text-white/60">client</span>
                  <span className="text-white/40">.</span>
                  <span className="text-[#82aaff]">get_project</span>
                  <span className="text-white/40">(</span>
                  <span className="text-[#c3e88d]">
                    &quot;defect-detection&quot;
                  </span>
                  <span className="text-white/40">)</span>
                  {"\n\n"}
                  <span className="text-white/20">
                    # Create experiment and train
                  </span>
                  {"\n"}
                  <span className="text-white/60">exp</span>{" "}
                  <span className="text-[#89ddff]">=</span>{" "}
                  <span className="text-white/60">project</span>
                  <span className="text-white/40">.</span>
                  <span className="text-[#82aaff]">create_experiment</span>
                  <span className="text-white/40">(</span>
                  <span className="text-[#c3e88d]">
                    &quot;yolov8-run&quot;
                  </span>
                  <span className="text-white/40">)</span>
                  {"\n"}
                  <span className="text-white/60">exp</span>
                  <span className="text-white/40">.</span>
                  <span className="text-[#82aaff]">attach_dataset</span>
                  <span className="text-white/40">(</span>
                  <span className="text-[#c3e88d]">&quot;train&quot;</span>
                  <span className="text-white/40">,</span>{" "}
                  <span className="text-white/60">dataset_version</span>
                  <span className="text-white/40">)</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

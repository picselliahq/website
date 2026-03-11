"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const specs = [
  { value: "ViT-B/16", label: "Default Model" },
  { value: "512-dim", label: "Vector Size" },
  { value: "QDrant", label: "Vector DB" },
  { value: "<10ms", label: "Search Latency" },
];

const searchMethods = [
  {
    tag: "IMG_SEARCH",
    name: "Similarity Search",
    direction: "Image → Images",
    detail: "cosine similarity > 0.85",
    stat: "847",
    statLabel: "matches",
  },
  {
    tag: "TXT_SEARCH",
    name: "Text-to-Image",
    direction: "Text → Images",
    detail: "CLIP text encoder",
    stat: "156",
    statLabel: "results • 8ms",
  },
  {
    tag: "ANOMALY",
    name: "Anomaly Detection",
    direction: "Isolation Forest",
    detail: "contamination: 0.01",
    stat: "23",
    statLabel: "corrupted",
  },
];

export default function DatalakeVisualSearchV2() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--system-indigo)] uppercase tracking-wider">
            Visual Search
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            Find similar images
            <br />
            <span className="text-[var(--secondary-label)]">instantly</span>
          </h2>
          <p className="text-sm text-[var(--secondary-label)] max-w-sm">
            OpenCLIP embeddings turn your images into vectors. Search by
            similarity, cluster by content, and spot outliers.
          </p>
        </div>

        {/* Tech Specs — horizontal row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-[var(--border)] rounded-xl overflow-hidden mb-8"
        >
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`p-5 text-center ${i < specs.length - 1 ? "border-r border-[var(--border)]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[var(--border)]" : ""}`}
            >
              <div className="text-xl font-bold font-mono text-[var(--label)]">
                {s.value}
              </div>
              <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main content: video + search methods */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Embeddings Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-[var(--border)] rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
                fig.03 — Embeddings Viewer
              </span>
              <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--tertiary-label)]">
                <span>UMAP</span>
                <span className="text-[var(--border)]">|</span>
                <span>DBSCAN</span>
              </div>
            </div>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
              src="/videos/embeddings viewer.webm"
            />
          </motion.div>

          {/* Search Methods — stacked rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-[var(--border)] rounded-xl overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--system-indigo)] uppercase tracking-wider">
                Search Methods
              </span>
            </div>
            <div className="divide-y divide-[var(--border)]">
              {searchMethods.map((m) => (
                <div key={m.tag} className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[var(--system-indigo)]/10 text-[var(--system-indigo)] uppercase">
                        {m.tag}
                      </span>
                      <span className="text-sm font-medium text-[var(--label)]">
                        {m.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
                      {m.direction}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--tertiary-label)]">
                      {m.detail}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-bold font-mono text-[var(--system-indigo)]">
                        {m.stat}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
                        {m.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CLIP Fine-tuning callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border border-[var(--system-indigo)]/30 rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--system-indigo)]/20 bg-[var(--system-indigo)]/5">
            <svg
              className="w-4 h-4 text-[var(--system-indigo)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-[10px] font-mono text-[var(--system-indigo)] uppercase tracking-wider">
              Custom CLIP Fine-tuning
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">
                Fine-tune your own CLIP model
              </h3>
              <p className="text-sm text-[var(--secondary-label)] max-w-lg">
                Generic embeddings not cutting it? Fine-tune a CLIP model on
                your own data. Search and clustering get much better when the
                model knows your domain.
              </p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-center">
                <div className="text-2xl font-bold font-mono text-[var(--system-indigo)]">
                  +40%
                </div>
                <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase">
                  Better accuracy
                </div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <a
                href="/demo"
                className="text-sm font-mono text-[var(--system-indigo)] hover:underline whitespace-nowrap"
              >
                Learn more →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

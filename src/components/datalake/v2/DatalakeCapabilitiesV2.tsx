"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sources = [
  {
    name: "AWS S3",
    icon: "/images/community/partners/amazon-s3.svg",
    status: "connected",
  },
  {
    name: "GCP",
    icon: "/images/community/partners/google-cloud.svg",
    status: "connected",
  },
  {
    name: "Azure",
    icon: "/images/community/partners/azure.svg",
    status: "idle",
  },
];

const outputs = [
  { name: "Datasets", count: "24", color: "var(--picsellia-green)" },
  { name: "Experiments", count: "156", color: "var(--system-orange)" },
  { name: "Deployments", count: "8", color: "var(--system-indigo)" },
];

const formats = [
  { ext: "JPG", type: "IMAGE" },
  { ext: "PNG", type: "IMAGE" },
  { ext: "TIFF", type: "IMAGE" },
  { ext: "WebP", type: "IMAGE" },
  { ext: "BMP", type: "IMAGE" },
  { ext: "GIF", type: "IMAGE" },
  { ext: "MP4", type: "VIDEO" },
  { ext: "MOV", type: "VIDEO" },
];

const pipeline = [
  { label: "Embedding Generation", value: "156", unit: "vec/sec", percent: 72 },
  { label: "DB Indexing", value: "12", unit: "ms/img", percent: 95 },
  { label: "Ingestion Rate", value: "2,847", unit: "img/min", percent: 85 },
  { label: "Storage Sync", value: "99.9", unit: "%", percent: 99 },
];

export default function DatalakeCapabilitiesV2() {
  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--picsellia-blue)] uppercase tracking-wider">
            Architecture
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            How it works
            <br />
            <span className="text-[var(--secondary-label)]">under the hood</span>
          </h2>
          <p className="text-sm text-[var(--secondary-label)] max-w-sm">
            Connects to S3, GCP, or Azure. Ingests any image or video format.
            Indexes everything so you can query it later.
          </p>
        </div>

        {/* Data Flow — table-like architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-[var(--border)] rounded-xl overflow-hidden mb-8"
        >
          {/* Header row */}
          <div className="grid grid-cols-5 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
            <div className="px-5 py-3 text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
              Sources
            </div>
            <div className="px-5 py-3 text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider text-center border-x border-[var(--border)]">
              Ingest
            </div>
            <div className="px-5 py-3 text-[10px] font-mono text-[var(--picsellia-blue)] uppercase tracking-wider text-center border-r border-[var(--border)]">
              Datalake Core
            </div>
            <div className="px-5 py-3 text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider text-center border-r border-[var(--border)]">
              Process
            </div>
            <div className="px-5 py-3 text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
              Outputs
            </div>
          </div>

          {/* Content row */}
          <div className="grid grid-cols-5">
            {/* Sources */}
            <div className="p-5 space-y-2">
              {sources.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 py-1.5"
                >
                  <Image src={s.icon} alt={s.name} width={16} height={16} />
                  <span className="text-xs text-[var(--label)] flex-1 font-mono">
                    {s.name}
                  </span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${s.status === "connected" ? "bg-[var(--picsellia-green)]" : "bg-[var(--system-gray)]"}`}
                  />
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center border-x border-[var(--border)]">
              <div className="flex items-center gap-1 text-[var(--picsellia-blue)]">
                <div className="h-px w-6 bg-[var(--picsellia-blue)]/40" />
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Datalake Core */}
            <div className="p-5 border-r border-[var(--border)] text-center">
              <div className="text-3xl font-bold text-[var(--label)] font-mono tracking-tight">
                2.4M
              </div>
              <div className="text-[10px] text-[var(--tertiary-label)] font-mono uppercase tracking-wider mt-1">
                assets indexed
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="p-2 rounded-lg border border-[var(--border)]">
                  <div className="text-xs font-mono text-[var(--picsellia-blue)]">847GB</div>
                  <div className="text-[9px] text-[var(--tertiary-label)]">storage</div>
                </div>
                <div className="p-2 rounded-lg border border-[var(--border)]">
                  <div className="text-xs font-mono text-[var(--picsellia-green)]">12ms</div>
                  <div className="text-[9px] text-[var(--tertiary-label)]">latency</div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center border-r border-[var(--border)]">
              <div className="flex items-center gap-1 text-[var(--picsellia-blue)]">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="h-px w-6 bg-[var(--picsellia-blue)]/40" />
              </div>
            </div>

            {/* Outputs */}
            <div className="p-5 space-y-2">
              {outputs.map((o) => (
                <div key={o.name} className="flex items-center gap-2 py-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: o.color }}
                  />
                  <span className="text-xs text-[var(--label)] flex-1">
                    {o.name}
                  </span>
                  <span className="text-xs font-mono text-[var(--tertiary-label)]">
                    {o.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom row: Format support + Pipeline metrics */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Format Support — table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-[var(--border)] rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--picsellia-blue)] uppercase tracking-wider">
                Supported Formats
              </span>
              <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
                8 TYPES
              </span>
            </div>
            <div className="grid grid-cols-4 gap-px bg-[var(--border)]">
              {formats.map((f) => (
                <div
                  key={f.ext}
                  className="bg-[var(--background)] p-4 text-center"
                >
                  <div className="text-sm font-mono font-bold text-[var(--label)]">
                    .{f.ext.toLowerCase()}
                  </div>
                  <div className={`text-[9px] font-mono mt-1 ${f.type === "VIDEO" ? "text-[var(--system-orange)]" : "text-[var(--picsellia-blue)]"}`}>
                    {f.type}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pipeline Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-[var(--border)] rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
                Processing Pipeline
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--picsellia-green)]" />
                </span>
                <span className="text-[10px] font-mono text-[var(--picsellia-green)]">
                  LIVE
                </span>
              </div>
            </div>
            <div className="p-5 space-y-4">
              {pipeline.map((m) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-[var(--secondary-label)]">
                      {m.label}
                    </span>
                    <span className="text-xs font-mono text-[var(--label)]">
                      {m.value}{" "}
                      <span className="text-[var(--tertiary-label)]">
                        {m.unit}
                      </span>
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--picsellia-blue)]"
                      style={{ width: `${m.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SDK Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 border border-[var(--border)] rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#0c0c0e]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] text-white/20 font-mono">
                upload.py
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/20">
              fig.02 — SDK Integration
            </span>
          </div>
          <pre className="p-5 text-[13px] overflow-x-auto leading-[1.7] font-mono bg-[#0c0c0e]">
            <code>
              <span className="text-[#c792ea]">from</span>{" "}
              <span className="text-white/80">picsellia</span>{" "}
              <span className="text-[#c792ea]">import</span>{" "}
              <span className="text-white/80">Client</span>
              {"\n\n"}
              <span className="text-white/20"># Connect and get datalake</span>
              {"\n"}
              <span className="text-white/60">client</span>{" "}
              <span className="text-[#89ddff]">=</span>{" "}
              <span className="text-[#82aaff]">Client</span>
              <span className="text-white/40">()</span>
              {"\n"}
              <span className="text-white/60">datalake</span>{" "}
              <span className="text-[#89ddff]">=</span>{" "}
              <span className="text-white/60">client</span>
              <span className="text-white/40">.</span>
              <span className="text-[#82aaff]">get_datalake</span>
              <span className="text-white/40">()</span>
              {"\n\n"}
              <span className="text-white/20"># Upload with metadata</span>
              {"\n"}
              <span className="text-white/60">datalake</span>
              <span className="text-white/40">.</span>
              <span className="text-[#82aaff]">upload_data</span>
              <span className="text-white/40">(</span>
              {"\n"}
              {"  "}
              <span className="text-white/60">filepaths</span>
              <span className="text-[#89ddff]">=</span>
              <span className="text-[#c3e88d]">&quot;./images/*.jpg&quot;</span>
              <span className="text-white/40">,</span>
              {"\n"}
              {"  "}
              <span className="text-white/60">tags</span>
              <span className="text-[#89ddff]">=</span>
              <span className="text-white/40">[</span>
              <span className="text-[#c3e88d]">&quot;production&quot;</span>
              <span className="text-white/40">,</span>{" "}
              <span className="text-[#c3e88d]">&quot;batch-42&quot;</span>
              <span className="text-white/40">],</span>
              {"\n"}
              {"  "}
              <span className="text-white/60">metadata</span>
              <span className="text-[#89ddff]">=</span>
              <span className="text-white/40">{"{"}</span>
              <span className="text-[#c3e88d]">&quot;reference&quot;</span>
              <span className="text-white/40">:</span>{" "}
              <span className="text-[#c3e88d]">&quot;factory-A&quot;</span>
              <span className="text-white/40">{"}"}</span>
              {"\n"}
              <span className="text-white/40">)</span>
            </code>
          </pre>
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-[#0c0c0e]">
            <span className="text-[10px] font-mono text-white/20">
              Python SDK v6.9.0
            </span>
            <div className="flex gap-3 text-[10px] font-mono">
              <span className="text-[var(--picsellia-green)]">Auto EXIF extraction</span>
              <span className="text-[var(--picsellia-blue)]">Batch upload</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

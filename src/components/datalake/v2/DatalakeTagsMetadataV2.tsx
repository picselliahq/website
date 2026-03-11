"use client";

import { motion } from "framer-motion";

const tags = [
  { name: "factory-A", count: "1,245", color: "var(--picsellia-blue)" },
  { name: "factory-B", count: "892", color: "var(--picsellia-blue)" },
  { name: "production", count: "1,892", color: "var(--picsellia-green)" },
  { name: "training", count: "3,456", color: "var(--picsellia-green)" },
  { name: "edge-case", count: "234", color: "var(--system-orange)" },
  { name: "validated", count: "2,103", color: "var(--system-indigo)" },
];

export default function DatalakeTagsMetadataV2() {
  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
            Organization
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            DataTags &
            <br />
            <span className="text-[var(--secondary-label)]">Metadata Schema</span>
          </h2>
          <p className="text-sm text-[var(--secondary-label)] max-w-sm">
            Multi-dimensional organization with flexible tagging and
            comprehensive metadata support. Structure your data without moving
            files.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* DataTags System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[var(--border)] rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
                DataTags System
              </span>
              <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
                ORGANIZATION
              </span>
            </div>

            {/* Tag table */}
            <div className="divide-y divide-[var(--border)]">
              <div className="grid grid-cols-3 px-5 py-2 bg-[var(--secondary-system-background)]">
                <span className="text-[9px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
                  Tag
                </span>
                <span className="text-[9px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider text-right">
                  Count
                </span>
                <span className="text-[9px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider text-right">
                  Category
                </span>
              </div>
              {tags.map((t) => (
                <div
                  key={t.name}
                  className="grid grid-cols-3 px-5 py-3 hover:bg-[var(--secondary-system-background)] transition-colors"
                >
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded w-fit"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${t.color} 10%, transparent)`,
                      color: t.color,
                    }}
                  >
                    {t.name}
                  </span>
                  <span className="text-xs font-mono text-[var(--label)] text-right self-center">
                    {t.count}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--tertiary-label)] text-right self-center">
                    {t.color.includes("blue")
                      ? "location"
                      : t.color.includes("green")
                        ? "workflow"
                        : t.color.includes("orange")
                          ? "quality"
                          : "status"}
                  </span>
                </div>
              ))}
            </div>

            {/* Multi-tag example */}
            <div className="p-5 border-t border-[var(--border)] bg-[var(--secondary-system-background)]">
              <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider mb-3">
                Multi-tag example
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[var(--label)]">
                  inspection_042.tiff
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["factory-A", "production", "validated", "Q1-2024"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metadata Schema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-[var(--border)] rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#0c0c0e]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-white/20 font-mono">
                  metadata_schema.json
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/20">
                fig.04 — Schema
              </span>
            </div>
            <pre className="p-5 text-[12px] overflow-x-auto leading-[1.8] font-mono bg-[#0c0c0e]">
              <code>
                <span className="text-white/40">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-white/20">// Location & Acquisition</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;latitude&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#f78c6c]">48.8566</span>
                <span className="text-white/40">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;longitude&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#f78c6c]">2.3522</span>
                <span className="text-white/40">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;acquired_at&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#c3e88d]">&quot;2024-03-15T14:32:00Z&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;acquired_by&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#c3e88d]">&quot;drone-unit-7&quot;</span>
                <span className="text-white/40">,</span>
                {"\n\n"}
                {"  "}
                <span className="text-white/20">// Camera & Sensor</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;focal_length&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#f78c6c]">24.0</span>
                <span className="text-white/40">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;sensor_width&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#f78c6c]">36.0</span>
                <span className="text-white/40">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;manufacturer&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#c3e88d]">&quot;DJI&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;yaw&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#f78c6c]">127.5</span>
                <span className="text-white/40">,</span>
                {"\n\n"}
                {"  "}
                <span className="text-white/20">// Reference Fields</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;reference&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#c3e88d]">&quot;INS-2024-0042&quot;</span>
                <span className="text-white/40">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#c3e88d]">&quot;custom_id&quot;</span>
                <span className="text-white/40">: </span>
                <span className="text-[#c3e88d]">&quot;B-789&quot;</span>
                {"\n"}
                <span className="text-white/40">{"}"}</span>
              </code>
            </pre>
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-[#0c0c0e]">
              <span className="text-[10px] font-mono text-white/20">
                Auto-extracted from EXIF with fill_metadata=True
              </span>
              <div className="flex gap-2 text-[9px] font-mono">
                <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">
                  EXIF
                </span>
                <span className="px-2 py-0.5 rounded bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">
                  GPS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

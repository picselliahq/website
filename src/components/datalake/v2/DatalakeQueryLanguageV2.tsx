"use client";

import { motion } from "framer-motion";

const params = [
  { name: "tags", type: "List[str]" },
  { name: "custom_metadata", type: "Dict[str, Any]" },
  { name: "limit", type: "int" },
  { name: "offset", type: "int" },
  { name: "order_by", type: "str" },
];

const tagOps = [
  { name: "add_tags()", desc: "add to data" },
  { name: "remove_tags()", desc: "remove from data" },
  { name: "list_tags()", desc: "get all tags" },
  { name: "create_tag()", desc: "create new tag" },
];

const filterable = [
  { name: "tags", desc: "DataTags" },
  { name: "custom_metadata", desc: "custom fields" },
  { name: "filename", desc: "asset name" },
  { name: "created_at", desc: "timestamps" },
  { name: "type", desc: "image/video" },
];

export default function DatalakeQueryLanguageV2() {
  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-8 mb-4">
          <span className="text-[10px] font-mono text-[var(--system-indigo)] uppercase tracking-wider">
            Python SDK
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            Powerful data
            <br />
            <span className="text-[var(--secondary-label)]">querying</span>
          </h2>
          <p className="text-sm text-[var(--secondary-label)] max-w-sm">
            Query your datalake programmatically with the Python SDK. Filter by
            tags, metadata, and more with full type hints and auto-completion.
          </p>
        </div>

        {/* API Reference — 3 column table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden mb-8"
        >
          {/* list_data params */}
          <div className="bg-[var(--background)]">
            <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--system-indigo)] uppercase tracking-wider">
                list_data() Params
              </span>
            </div>
            <div className="p-5 space-y-3">
              {params.map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--label)]">{p.name}</span>
                  <span className="text-[10px] font-mono text-[var(--tertiary-label)]">{p.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tag Operations */}
          <div className="bg-[var(--background)]">
            <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--system-orange)] uppercase tracking-wider">
                Tag Operations
              </span>
            </div>
            <div className="p-5 space-y-3">
              {tagOps.map((t) => (
                <div key={t.name} className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--label)]">{t.name}</span>
                  <span className="text-[10px] font-mono text-[var(--tertiary-label)]">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filterable */}
          <div className="bg-[var(--background)]">
            <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--secondary-system-background)]">
              <span className="text-[10px] font-mono text-[var(--picsellia-green)] uppercase tracking-wider">
                Filterable
              </span>
            </div>
            <div className="p-5 space-y-3">
              {filterable.map((f) => (
                <div key={f.name} className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--label)]">{f.name}</span>
                  <span className="text-[10px] font-mono text-[var(--tertiary-label)]">{f.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Query — code + results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-[var(--border)] rounded-xl overflow-hidden"
        >
          {/* Editor header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#0c0c0e]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] text-white/20 font-mono">
                advanced_query.py
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">
                auto-complete
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">
                type hints
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
            {/* Code */}
            <div className="bg-[#0c0c0e]">
              <pre className="p-5 text-[13px] overflow-x-auto leading-[1.7] font-mono">
                <code>
                  <span className="text-white/20"># Advanced data query</span>
                  {"\n"}
                  <span className="text-white/60">data</span>{" "}
                  <span className="text-[#89ddff]">=</span>{" "}
                  <span className="text-white/60">datalake</span>
                  <span className="text-white/40">.</span>
                  <span className="text-[#82aaff]">list_data</span>
                  <span className="text-white/40">(</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/20"># Filter by tags</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/60">tags</span>
                  <span className="text-[#89ddff]">=</span>
                  <span className="text-white/40">[</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#c3e88d]">&quot;production&quot;</span>
                  <span className="text-white/40">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#c3e88d]">&quot;validated&quot;</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/40">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/20"># Filter by metadata</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/60">custom_metadata</span>
                  <span className="text-[#89ddff]">=</span>
                  <span className="text-white/40">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#c3e88d]">&quot;location&quot;</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#c3e88d]">&quot;factory-A&quot;</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/40">{"}"},</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/60">limit</span>
                  <span className="text-[#89ddff]">=</span>
                  <span className="text-[#f78c6c]">1000</span>
                  {"\n"}
                  <span className="text-white/40">)</span>
                  {"\n\n"}
                  <span className="text-[#c792ea]">for</span>{" "}
                  <span className="text-white/60">item</span>{" "}
                  <span className="text-[#c792ea]">in</span>{" "}
                  <span className="text-white/60">data</span>
                  <span className="text-white/40">:</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#82aaff]">print</span>
                  <span className="text-white/40">(</span>
                  <span className="text-white/60">item</span>
                  <span className="text-white/40">.</span>
                  <span className="text-white/60">filename</span>
                  <span className="text-white/40">)</span>
                </code>
              </pre>
            </div>

            {/* Results */}
            <div className="p-5 bg-[var(--secondary-system-background)]">
              <div className="mb-5">
                <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider mb-3">
                  Execution
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xl font-bold font-mono text-[var(--picsellia-green)]">
                      2,847
                    </div>
                    <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase">
                      results
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-[var(--picsellia-blue)]">
                      23ms
                    </div>
                    <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase">
                      query time
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-[var(--system-orange)]">
                      847MB
                    </div>
                    <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase">
                      scanned
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--border)] pt-4">
                <div className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider mb-2">
                  Matched Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { tag: "production", count: "1,892", color: "var(--picsellia-green)" },
                    { tag: "validated", count: "2,103", color: "var(--picsellia-green)" },
                    { tag: "factory-A", count: "1,245", color: "var(--picsellia-blue)" },
                  ].map((t) => (
                    <span
                      key={t.tag}
                      className="px-2 py-1 rounded text-[10px] font-mono"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${t.color} 10%, transparent)`,
                        color: t.color,
                      }}
                    >
                      {t.tag} ({t.count})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

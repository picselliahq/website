import Image from "next/image";

export default function DatalakeCapabilities() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--picsellia-blue) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-blue) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[var(--picsellia-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How it works under the hood
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Connects to S3, GCP, or Azure. Ingests any image or video format.
            Indexes everything so you can query it later.
          </p>
        </div>

        {/* Data Flow Architecture */}
        <div className="mb-20">
          <div className="card p-8 relative overflow-hidden">
            {/* Animated connection lines background */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--picsellia-blue)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="50%"
                    stopColor="var(--picsellia-blue)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--picsellia-blue)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <line
                x1="20%"
                y1="30%"
                x2="40%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
              />
              <line
                x1="20%"
                y1="70%"
                x2="40%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
              />
              <line
                x1="60%"
                y1="50%"
                x2="80%"
                y2="30%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
              />
              <line
                x1="60%"
                y1="50%"
                x2="80%"
                y2="70%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
              />
            </svg>

            <div className="relative grid md:grid-cols-5 gap-4 items-center">
              {/* Sources */}
              <div className="space-y-3">
                <div className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-4">
                  Sources
                </div>
                {[
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
                ].map((source) => (
                  <div
                    key={source.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[var(--black)] border border-[var(--border)]"
                  >
                    <Image
                      src={source.icon}
                      alt={source.name}
                      width={20}
                      height={20}
                    />
                    <span className="text-xs text-[var(--label)] flex-1">
                      {source.name}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${source.status === "connected" ? "bg-[var(--picsellia-green)]" : "bg-[var(--system-gray)]"}`}
                    />
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <div className="flex items-center gap-2 text-[var(--picsellia-blue)]">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--picsellia-blue)]" />
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>

              {/* Datalake Core */}
              <div className="md:col-span-1">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--picsellia-blue)]/20 to-[var(--picsellia-blue)]/5 border border-[var(--picsellia-blue)]/30 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--picsellia-blue)] text-[10px] font-medium text-white">
                    DATALAKE
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bold text-[var(--label)] font-mono">
                      2.4M
                    </div>
                    <div className="text-xs text-[var(--tertiary-label)]">
                      assets indexed
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-[var(--black)]/50">
                        <div className="text-[var(--picsellia-blue)] font-mono">
                          847GB
                        </div>
                        <div className="text-[var(--tertiary-label)]">
                          storage
                        </div>
                      </div>
                      <div className="p-2 rounded bg-[var(--black)]/50">
                        <div className="text-[var(--picsellia-green)] font-mono">
                          12ms
                        </div>
                        <div className="text-[var(--tertiary-label)]">
                          latency
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <div className="flex items-center gap-2 text-[var(--picsellia-blue)]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <div className="h-px w-8 bg-gradient-to-r from-[var(--picsellia-blue)] to-transparent" />
                </div>
              </div>

              {/* Outputs */}
              <div className="space-y-3">
                <div className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-4">
                  Outputs
                </div>
                {[
                  {
                    name: "Datasets",
                    count: "24",
                    color: "var(--picsellia-green)",
                  },
                  {
                    name: "Experiments",
                    count: "156",
                    color: "var(--system-orange)",
                  },
                  {
                    name: "Deployments",
                    count: "8",
                    color: "var(--system-indigo)",
                  },
                ].map((output) => (
                  <div
                    key={output.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[var(--black)] border border-[var(--border)]"
                  >
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${output.color} 20%, transparent)`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: output.color }}
                      />
                    </div>
                    <span className="text-xs text-[var(--label)] flex-1">
                      {output.name}
                    </span>
                    <span className="text-xs font-mono text-[var(--secondary-label)]">
                      {output.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* SDK Integration */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
              </div>
              <span className="text-xs text-[var(--tertiary-label)]">
                upload.py
              </span>
            </div>
            <pre className="p-5 text-xs overflow-x-auto bg-[var(--black)] font-mono leading-relaxed">
              <code>
                <span className="text-[var(--system-indigo)]">from</span>{" "}
                <span className="text-[var(--label)]">picsellia</span>{" "}
                <span className="text-[var(--system-indigo)]">import</span>{" "}
                <span className="text-[var(--label)]">Client</span>
                {"\n\n"}
                <span className="text-[var(--label)]">client</span>{" "}
                <span className="text-[var(--system-indigo)]">=</span>{" "}
                <span className="text-[var(--label)]">Client()</span>
                {"\n"}
                <span className="text-[var(--label)]">datalake</span>{" "}
                <span className="text-[var(--system-indigo)]">=</span>{" "}
                <span className="text-[var(--label)]">
                  client.get_datalake()
                </span>
                {"\n\n"}
                <span className="text-[var(--tertiary-label)]">
                  # Upload with metadata
                </span>
                {"\n"}
                <span className="text-[var(--label)]">
                  datalake.upload_data(
                </span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">filepaths</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;./images/*.jpg&quot;
                </span>
                <span className="text-[var(--label)]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">tags</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--label)]">[</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;production&quot;
                </span>
                <span className="text-[var(--label)]">,</span>{" "}
                <span className="text-[var(--picsellia-green)]">
                  &quot;batch-42&quot;
                </span>
                <span className="text-[var(--label)]">],</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">metadata</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--label)]">{"{"}</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;reference&quot;
                </span>
                <span className="text-[var(--label)]">:</span>{" "}
                <span className="text-[var(--picsellia-green)]">
                  &quot;factory-A&quot;
                </span>
                <span className="text-[var(--label)]">{"}"}</span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
                {"\n\n"}
                <span className="text-[var(--tertiary-label)]">
                  # Query with filters
                </span>
                {"\n"}
                <span className="text-[var(--label)]">data</span>{" "}
                <span className="text-[var(--system-indigo)]">=</span>{" "}
                <span className="text-[var(--label)]">datalake.list_data(</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">tags</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--label)]">[</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;production&quot;
                </span>
                <span className="text-[var(--label)]">]</span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
              </code>
            </pre>
            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[var(--tertiary-label)]">
                  Python SDK v6.9.0
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-[var(--picsellia-green)]">
                    Auto EXIF extraction
                  </span>
                  <span className="text-[10px] text-[var(--picsellia-blue)]">
                    Batch upload
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Query Terminal */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
              </div>
              <span className="text-xs text-[var(--tertiary-label)]">
                query.py
              </span>
            </div>
            <pre className="p-5 bg-[var(--black)] font-mono text-xs overflow-x-auto leading-relaxed">
              <code>
                <span className="text-[var(--tertiary-label)]">
                  # Query with tags
                </span>
                {"\n"}
                <span className="text-[var(--label)]">data</span>{" "}
                <span className="text-[var(--system-indigo)]">=</span>{" "}
                <span className="text-[var(--label)]">datalake.list_data(</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">tags</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--label)]">[</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;defects&quot;
                </span>
                <span className="text-[var(--label)]">]</span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
                {"\n"}
                <span className="text-[var(--picsellia-green)]">
                  # ✓ 2,847 results
                </span>
                {"\n\n"}
                <span className="text-[var(--tertiary-label)]">
                  # Query with custom_metadata filter
                </span>
                {"\n"}
                <span className="text-[var(--label)]">data</span>{" "}
                <span className="text-[var(--system-indigo)]">=</span>{" "}
                <span className="text-[var(--label)]">datalake.list_data(</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">custom_metadata</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--label)]">{"{"}</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;location&quot;
                </span>
                <span className="text-[var(--label)]">:</span>{" "}
                <span className="text-[var(--picsellia-green)]">
                  &quot;factory-A&quot;
                </span>
                <span className="text-[var(--label)]">{"}"}</span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
                {"\n"}
                <span className="text-[var(--picsellia-green)]">
                  # ✓ 1,245 results
                </span>
                {"\n\n"}
                <span className="text-[var(--tertiary-label)]">
                  # Combine tags and dimensions
                </span>
                {"\n"}
                <span className="text-[var(--label)]">data</span>{" "}
                <span className="text-[var(--system-indigo)]">=</span>{" "}
                <span className="text-[var(--label)]">datalake.list_data(</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">tags</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--label)]">[</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;production&quot;
                </span>
                <span className="text-[var(--label)]">,</span>{" "}
                <span className="text-[var(--picsellia-green)]">
                  &quot;validated&quot;
                </span>
                <span className="text-[var(--label)]">],</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">limit</span>
                <span className="text-[var(--system-indigo)]">=</span>
                <span className="text-[var(--system-orange)]">1000</span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
              </code>
            </pre>
            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-[var(--tertiary-label)]">Python SDK</span>
                <div className="flex gap-3">
                  <span className="px-2 py-0.5 rounded bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">
                    tags
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[var(--system-orange)]/10 text-[var(--system-orange)]">
                    metadata
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">
                    filters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Format Support */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)]">
                  Image & Video Format Support
                </h3>
                <p className="text-sm text-[var(--tertiary-label)]">
                  Ingest standard visual data formats
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { ext: "JPG", type: "image", color: "var(--picsellia-blue)" },
                { ext: "PNG", type: "image", color: "var(--picsellia-blue)" },
                { ext: "TIFF", type: "image", color: "var(--picsellia-blue)" },
                { ext: "WebP", type: "image", color: "var(--picsellia-blue)" },
                { ext: "BMP", type: "image", color: "var(--picsellia-blue)" },
                { ext: "GIF", type: "image", color: "var(--picsellia-blue)" },
                { ext: "MP4", type: "video", color: "var(--system-orange)" },
                { ext: "MOV", type: "video", color: "var(--system-orange)" },
              ].map((format) => (
                <div
                  key={format.ext}
                  className="p-3 rounded-lg bg-[var(--black)] border border-[var(--border)] text-center group hover:border-[var(--picsellia-blue)]/50 transition-colors"
                >
                  <div className="text-sm font-mono font-bold text-[var(--label)]">
                    .{format.ext.toLowerCase()}
                  </div>
                  <div
                    className="text-[9px] mt-1"
                    style={{ color: format.color }}
                  >
                    {format.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)]">
                  Processing Pipeline
                </h3>
                <p className="text-sm text-[var(--tertiary-label)]">
                  Embeddings generation & database indexing
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                <span className="text-xs text-[var(--picsellia-green)]">
                  Live
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "Embedding Generation",
                  value: "156",
                  unit: "vec/sec",
                  percent: 72,
                  color: "var(--system-indigo)",
                },
                {
                  label: "DB Indexing",
                  value: "12",
                  unit: "ms/img",
                  percent: 95,
                  color: "var(--picsellia-green)",
                },
                {
                  label: "Ingestion Rate",
                  value: "2,847",
                  unit: "img/min",
                  percent: 85,
                  color: "var(--picsellia-blue)",
                },
                {
                  label: "Storage Sync",
                  value: "99.9",
                  unit: "%",
                  percent: 99,
                  color: "var(--system-orange)",
                },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[var(--secondary-label)]">
                      {metric.label}
                    </span>
                    <span className="text-sm font-mono text-[var(--label)]">
                      {metric.value}{" "}
                      <span className="text-[var(--tertiary-label)] text-xs">
                        {metric.unit}
                      </span>
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--black)] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${metric.percent}%`,
                        backgroundColor: metric.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

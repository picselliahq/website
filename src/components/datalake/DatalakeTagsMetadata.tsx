export default function DatalakeTagsMetadata() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--picsellia-green) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Organization
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            DataTags & Metadata Schema
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Multi-dimensional organization with flexible tagging and comprehensive metadata support.
            Structure your data without moving files.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* DataTags System */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--picsellia-green)]">DATATAGS SYSTEM</span>
              <span className="text-xs text-[var(--tertiary-label)]">organization ≠ annotation</span>
            </div>
            <div className="p-6">
              {/* Tag hierarchy visualization */}
              <div className="mb-6">
                <div className="text-xs text-[var(--tertiary-label)] mb-3">TAG HIERARCHY</div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--tertiary-label)]">├──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">source</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-[var(--tertiary-label)]">├──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">factory-A</span>
                    <span className="text-[var(--tertiary-label)]">(1,245)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-[var(--tertiary-label)]">└──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">factory-B</span>
                    <span className="text-[var(--tertiary-label)]">(892)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--tertiary-label)]">├──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">status</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-[var(--tertiary-label)]">├──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">production</span>
                    <span className="text-[var(--tertiary-label)]">(1,892)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-[var(--tertiary-label)]">├──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">training</span>
                    <span className="text-[var(--tertiary-label)]">(3,456)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-[var(--tertiary-label)]">└──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--system-orange)]/10 text-[var(--system-orange)]">edge-case</span>
                    <span className="text-[var(--tertiary-label)]">(234)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--tertiary-label)]">└──</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">validated</span>
                    <span className="text-[var(--tertiary-label)]">(2,103)</span>
                  </div>
                </div>
              </div>

              {/* Multi-tag example */}
              <div className="p-4 rounded-lg bg-[var(--black)] border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded bg-[var(--picsellia-blue)]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-mono text-[var(--label)]">inspection_042.tiff</div>
                    <div className="text-xs text-[var(--tertiary-label)]">4032×3024 • 12.4MB</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">factory-A</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">production</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">validated</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--system-orange)]/10 text-[var(--system-orange)]">Q1-2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Schema */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-teal)]">METADATA SCHEMA</span>
              <span className="text-xs text-[var(--tertiary-label)]">SDK v6.9.0+ auto-EXIF</span>
            </div>
            <div className="p-4 bg-[var(--black)] font-mono text-xs overflow-x-auto">
              <pre className="text-[var(--label)]">
{`{
  `}<span className="text-[var(--system-teal)]">&quot;geolocation&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;latitude&quot;</span>{`: `}<span className="text-[var(--system-orange)]">48.8566</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;longitude&quot;</span>{`: `}<span className="text-[var(--system-orange)]">2.3522</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;altitude&quot;</span>{`: `}<span className="text-[var(--system-orange)]">35.2</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;acquisition&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;acquired_at&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;2024-03-15T14:32:00Z&quot;</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;acquired_by&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;drone-unit-7&quot;</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;weather&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;clear, 18°C&quot;</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;imaging&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;focal_length&quot;</span>{`: `}<span className="text-[var(--system-orange)]">24.0</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;sensor_width&quot;</span>{`: `}<span className="text-[var(--system-orange)]">36.0</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;manufacturer&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;DJI&quot;</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;orientation&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;yaw&quot;</span>{`: `}<span className="text-[var(--system-orange)]">127.5</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;pitch&quot;</span>{`: `}<span className="text-[var(--system-orange)]">-45.0</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;roll&quot;</span>{`: `}<span className="text-[var(--system-orange)]">0.0</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;custom&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;inspection_id&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;INS-2024-0042&quot;</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;batch_ref&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;B-789&quot;</span>{`
  }
}`}
              </pre>
            </div>
            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--tertiary-label)]">All fields queryable via PQL</span>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">EXIF</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">GPS</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--system-orange)]/10 text-[var(--system-orange)]">XMP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

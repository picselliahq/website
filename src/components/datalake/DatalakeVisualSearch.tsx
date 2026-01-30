import Link from 'next/link';

export default function DatalakeVisualSearch() {
  return (
    <section className="py-24 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Visual Search
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Find similar images instantly
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            OpenCLIP embeddings turn your images into vectors. Search by similarity,
            cluster by content, and spot outliers without writing a single query.
          </p>
        </div>

        {/* Technical Specs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { value: 'ViT-B/16', label: 'Default Model' },
            { value: '512-dim', label: 'Vector Size' },
            { value: 'QDrant', label: 'Vector DB' },
            { value: '<10ms', label: 'Search Latency' },
          ].map((spec) => (
            <div key={spec.label} className="p-4 border border-[var(--border)] rounded-xl text-center">
              <div className="text-xl font-bold font-mono text-[var(--label)]">{spec.value}</div>
              <div className="text-xs text-[var(--tertiary-label)] mt-1">{spec.label}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Embeddings Viewer Video */}
          <div className="border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
              <span className="text-sm font-medium text-[var(--label)]">Embeddings Viewer</span>
              <div className="flex items-center gap-2 text-xs text-[var(--tertiary-label)]">
                <span>UMAP</span>
                <span>•</span>
                <span>DBSCAN</span>
              </div>
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              src="/videos/embeddings viewer.webm"
            />
          </div>

          {/* Search Methods */}
          <div className="space-y-4">
            {/* Similarity Search */}
            <div className="p-5 border border-[var(--border)] rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--label)]">Similarity Search</h3>
                <span className="text-xs text-[var(--system-indigo)]">Image → Images</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg border border-[var(--border)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[var(--label)] font-mono">IMG_4521.jpg</div>
                  <div className="text-xs text-[var(--tertiary-label)] mt-0.5">cosine similarity &gt; 0.85</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold font-mono text-[var(--system-indigo)]">847</div>
                  <div className="text-xs text-[var(--tertiary-label)]">matches</div>
                </div>
              </div>
            </div>

            {/* Text-to-Image */}
            <div className="p-5 border border-[var(--border)] rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--label)]">Text-to-Image Search</h3>
                <span className="text-xs text-[var(--system-indigo)]">Text → Images</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[var(--border)] mb-3">
                <svg className="w-4 h-4 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm text-[var(--label)]">&quot;damaged surface with rust&quot;</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--tertiary-label)]">
                <span>CLIP text encoder</span>
                <span className="font-mono text-[var(--system-indigo)]">156 results • 8ms</span>
              </div>
            </div>

            {/* Anomaly Detection */}
            <div className="p-5 border border-[var(--border)] rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--label)]">Anomaly Detection</h3>
                <span className="text-xs text-[var(--system-indigo)]">Isolation Forest</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-[var(--tertiary-label)]">contamination: 0.01</div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold font-mono text-[var(--label)]">23</div>
                    <div className="text-xs text-[var(--tertiary-label)]">corrupted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold font-mono text-[var(--label)]">89</div>
                    <div className="text-xs text-[var(--tertiary-label)]">outliers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CLIP Fine-tuning */}
        <div className="p-6 border border-[var(--system-indigo)]/30 rounded-xl bg-[var(--system-indigo)]/5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg font-semibold text-[var(--label)]">Fine-tune Your Own CLIP Model</h3>
              </div>
              <p className="text-sm text-[var(--secondary-label)]">
                Generic embeddings not cutting it? Fine-tune a CLIP model on your own data.
                Search and clustering get much better when the model knows your domain.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-4">
                <div className="text-2xl font-bold font-mono text-[var(--system-indigo)]">+40%</div>
                <div className="text-xs text-[var(--tertiary-label)]">Better accuracy</div>
              </div>
              <Link href="/demo" className="btn-secondary whitespace-nowrap">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AIAssistedSection() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-indigo) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
            AI-Assisted & Processings
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            10x your labeling with AI
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Use SAM, DINOv2, and Grounding DINO for pre-labeling. Run automated
            processings to speed up annotation.
          </p>
        </div>

        {/* Models */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--system-indigo)] to-[var(--system-pink)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">SAM</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)]">Segment Anything Model</h3>
                <p className="text-sm text-[var(--tertiary-label)]">Meta AI</p>
              </div>
            </div>
            <p className="text-sm text-[var(--secondary-label)] mb-4">
              One-click segmentation for any object. Point, box, or text prompts
              generate precise masks instantly.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded text-xs bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">Segmentation</span>
              <span className="px-2 py-1 rounded text-xs bg-[var(--system-pink)]/10 text-[var(--system-pink)]">Interactive</span>
              <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">Zero-shot</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--picsellia-blue)] to-[var(--system-teal)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">DINOv2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)]">DINOv2</h3>
                <p className="text-sm text-[var(--tertiary-label)]">Meta AI</p>
              </div>
            </div>
            <p className="text-sm text-[var(--secondary-label)] mb-4">
              Self-supervised visual features for similarity search, clustering,
              and transfer learning without labels.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">Embeddings</span>
              <span className="px-2 py-1 rounded text-xs bg-[var(--system-teal)]/10 text-[var(--system-teal)]">Clustering</span>
              <span className="px-2 py-1 rounded text-xs bg-[var(--system-orange)]/10 text-[var(--system-orange)]">Self-supervised</span>
            </div>
          </div>
        </div>

        {/* Processings */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[var(--label)] mb-6 text-center">Automated Processings</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-5 text-center group hover:border-[var(--system-indigo)]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Pre-Annotation</h4>
              <p className="text-xs text-[var(--tertiary-label)]">Auto-generate initial labels using your trained models</p>
            </div>

            <div className="card p-5 text-center group hover:border-[var(--system-orange)]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Auto-Annotation</h4>
              <p className="text-xs text-[var(--tertiary-label)]">Fully automated annotation with confidence thresholds</p>
            </div>

            <div className="card p-5 text-center group hover:border-[var(--system-pink)]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-pink)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--system-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Data Augmentation</h4>
              <p className="text-xs text-[var(--tertiary-label)]">Expand datasets with transforms and variations</p>
            </div>

            <div className="card p-5 text-center group hover:border-[var(--picsellia-green)]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Auto-Tagging</h4>
              <p className="text-xs text-[var(--tertiary-label)]">Automatically tag data in your datalake</p>
            </div>
          </div>
        </div>

        {/* Speed comparison and processing flow */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Speed comparison */}
          <div className="card p-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-[var(--system-indigo)] font-mono mb-2">10x</div>
              <div className="text-sm text-[var(--tertiary-label)]">Faster annotation with AI assistance</div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[var(--secondary-label)]">Manual labeling</span>
                  <span className="text-xs font-mono text-[var(--tertiary-label)]">~2 min/image</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--black)] overflow-hidden">
                  <div className="h-full rounded-full bg-[var(--system-gray)]" style={{ width: '100%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[var(--secondary-label)]">AI-assisted</span>
                  <span className="text-xs font-mono text-[var(--system-indigo)]">~12 sec/image</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--black)] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[var(--system-indigo)] to-[var(--system-pink)]" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--picsellia-green)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Human validation for accuracy
              </div>
            </div>
          </div>

          {/* Processing pipeline */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-indigo)]">PROCESSING PIPELINE</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">Docker-based</span>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--picsellia-blue)] flex items-center justify-center text-white text-xs font-bold">1</div>
                  <div className="flex-1 p-3 rounded-lg bg-[var(--picsellia-blue)]/10 border border-[var(--picsellia-blue)]/20">
                    <span className="text-sm text-[var(--picsellia-blue)]">Select processing type</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--system-orange)] flex items-center justify-center text-white text-xs font-bold">2</div>
                  <div className="flex-1 p-3 rounded-lg bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20">
                    <span className="text-sm text-[var(--system-orange)]">Configure inputs & model</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--picsellia-green)] flex items-center justify-center text-white text-xs font-bold">3</div>
                  <div className="flex-1 p-3 rounded-lg bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
                    <span className="text-sm text-[var(--picsellia-green)]">Run & review results</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--tertiary-label)]">GPU/CPU configurable</span>
                  <span className="text-[var(--secondary-label)]">Scalable infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

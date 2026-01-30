const splits = [
  { name: 'train', count: 8400, percent: 70, color: 'var(--picsellia-blue)' },
  { name: 'validation', count: 1800, percent: 15, color: 'var(--system-orange)' },
  { name: 'test', count: 1800, percent: 15, color: 'var(--picsellia-green)' },
];

const features = [
  'Automatic stratified splits by class distribution',
  'Custom split ratios with reproducible seeds',
  'No overlap guarantee between splits',
  'Re-split without losing annotations',
];

export default function DataOrganizationSection() {
  return (
    <section className="py-24 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Interactive Demo */}
          <div className="order-2 lg:order-1">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--label)]">Dataset Browser</h3>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg text-xs bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                    Grid
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-xs bg-[var(--system-orange)]/10 text-[var(--system-orange)]">
                    Split
                  </button>
                </div>
              </div>

              {/* Split visualization */}
              <div className="space-y-3">
                {splits.map((split) => (
                  <div key={split.name} className="p-4 rounded-lg bg-[var(--black)] border border-[var(--border)]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: split.color }} />
                        <span className="text-sm font-medium text-[var(--label)]">{split.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-mono text-[var(--label)]">{split.count.toLocaleString()}</span>
                        <span className="text-xs text-[var(--tertiary-label)] ml-2">{split.percent}%</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--tertiary-system-background)] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${split.percent}%`, backgroundColor: split.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats footer */}
              <div className="mt-6 pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold font-mono text-[var(--label)]">12K</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Total images</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-[var(--label)]">48K</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Annotations</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-[var(--picsellia-green)]">Balanced</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Class dist.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Data Organization
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Structure your data the right way
            </h2>
            <p className="text-[var(--secondary-label)] mb-8">
              Proper data splits are crucial for model performance. Create reproducible train/val/test splits, stratify by class, and ensure no data leakage.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[var(--label)]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

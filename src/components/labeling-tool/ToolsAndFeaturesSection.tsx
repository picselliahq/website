import { shortcuts } from './data';

export default function ToolsAndFeaturesSection() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--picsellia-green)]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Tooling
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Built for speed and precision
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Keyboard shortcuts, smart selection, and intuitive controls
            designed to maximize annotation throughput.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Keyboard Shortcuts */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--picsellia-green)]">KEYBOARD SHORTCUTS</span>
              <svg className="w-4 h-4 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            </div>
            <div className="p-4 space-y-2">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.action} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[var(--quaternary-system-fill)] transition-colors">
                  <span className="text-sm text-[var(--label)]">{shortcut.action}</span>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, i) => (
                      <span key={i}>
                        <kbd className="px-2 py-1 rounded bg-[var(--black)] border border-[var(--border)] text-xs font-mono text-[var(--secondary-label)]">
                          {key}
                        </kbd>
                        {i < shortcut.keys.length - 1 && <span className="text-[var(--tertiary-label)] mx-1">+</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation & Controls */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-indigo)]">NAVIGATION</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Scroll to Zoom</h4>
                  <p className="text-xs text-[var(--tertiary-label)]">Use scroll wheel to zoom in/out. Press spacebar to drag and pan around the canvas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Asset Gallery</h4>
                  <p className="text-xs text-[var(--tertiary-label)]">Browse your dataset queue at the bottom. Navigate with O/P keys or click thumbnails.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--system-pink)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--system-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Group Selection</h4>
                  <p className="text-xs text-[var(--tertiary-label)]">Draw rectangle to select multiple shapes. Select by label for batch operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

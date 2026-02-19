'use client';

export default function DeploymentArchitecture() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--system-red) 1px, transparent 1px), linear-gradient(90deg, var(--system-red) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--system-red)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Serverless model serving
            </h2>
            <p className="text-[var(--secondary-label)] mb-8">
              Deploy models without managing servers. Picsellia handles container orchestration,
              GPU allocation, load balancing, and auto-scaling automatically.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--system-red)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--label)] mb-1">GPU & CPU Inference</h4>
                  <p className="text-xs text-[var(--tertiary-label)]">Choose the right compute for your model — from T4 GPUs to cost-efficient CPU instances</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Container Orchestration</h4>
                  <p className="text-xs text-[var(--tertiary-label)]">Automatic containerization with optimized runtimes for ONNX, TensorRT, and PyTorch</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Secure Endpoints</h4>
                  <p className="text-xs text-[var(--tertiary-label)]">API key authentication, rate limiting, and encrypted traffic by default</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture diagram */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-medium text-[var(--system-red)]">DEPLOYMENT ARCHITECTURE</span>
              <span className="text-xs text-[var(--tertiary-label)]">Managed infrastructure</span>
            </div>

            <div className="space-y-4">
              {/* Ingress layer */}
              <div className="p-4 rounded-lg border border-[var(--system-orange)]/30 bg-[var(--system-orange)]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[var(--label)]">API Gateway</span>
                    <span className="text-xs text-[var(--tertiary-label)] ml-2">Load balancer + Auth</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[var(--tertiary-label)]">
                  <span className="px-1.5 py-0.5 rounded bg-[var(--system-orange)]/10">HTTPS</span>
                  <span className="px-1.5 py-0.5 rounded bg-[var(--system-orange)]/10">API Keys</span>
                  <span className="px-1.5 py-0.5 rounded bg-[var(--system-orange)]/10">Rate Limiting</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-5 h-5 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Serving layer */}
              <div className="p-4 rounded-lg border border-[var(--system-red)]/30 bg-[var(--system-red)]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--system-red)]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[var(--label)]">Inference Servers</span>
                    <span className="text-xs text-[var(--tertiary-label)] ml-2">Auto-scaled replicas</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-2 rounded bg-[var(--system-red)]/10 text-center">
                      <div className="text-[10px] font-mono text-[var(--system-red)]">replica-{i}</div>
                      <div className="w-full h-1 bg-[var(--border)] rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-[var(--system-red)] rounded-full"
                          style={{ width: `${50 + i * 15}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-5 h-5 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Model + Monitoring layer */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border border-[var(--picsellia-green)]/30 bg-[var(--picsellia-green)]/5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)]" />
                    <span className="text-xs font-medium text-[var(--label)]">Model Registry</span>
                  </div>
                  <span className="text-[10px] text-[var(--tertiary-label)]">Versioned artifacts</span>
                </div>
                <div className="p-3 rounded-lg border border-[var(--system-orange)]/30 bg-[var(--system-orange)]/5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--system-orange)]" />
                    <span className="text-xs font-medium text-[var(--label)]">Monitoring</span>
                  </div>
                  <span className="text-[10px] text-[var(--tertiary-label)]">Predictions logged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

const ScalingTimeline = () => {
  const events = [
    { time: '06:00', replicas: 1, load: 'Low', color: 'var(--picsellia-green)' },
    { time: '09:00', replicas: 3, load: 'Medium', color: 'var(--system-blue)' },
    { time: '12:00', replicas: 6, load: 'Peak', color: 'var(--system-orange)' },
    { time: '15:00', replicas: 4, load: 'High', color: 'var(--system-blue)' },
    { time: '18:00', replicas: 2, load: 'Medium', color: 'var(--system-blue)' },
    { time: '22:00', replicas: 1, load: 'Low', color: 'var(--picsellia-green)' },
  ];

  const maxReplicas = Math.max(...events.map((e) => e.replicas));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs">
        <span className="text-[var(--tertiary-label)]">Replica count over 24h</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[var(--system-indigo)]" />
            <span className="text-[var(--tertiary-label)]">Replicas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[var(--system-orange)]" />
            <span className="text-[var(--tertiary-label)]">Traffic</span>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-3 h-32">
        {events.map((event) => (
          <div key={event.time} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono" style={{ color: event.color }}>{event.replicas}</span>
            <div
              className="w-full rounded-t transition-all"
              style={{
                height: `${(event.replicas / maxReplicas) * 100}%`,
                backgroundColor: 'var(--system-indigo)',
                opacity: 0.3 + (event.replicas / maxReplicas) * 0.7,
              }}
            />
            <span className="text-[9px] text-[var(--tertiary-label)]">{event.time}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs pt-2 border-t border-[var(--border)]">
        <span className="text-[var(--tertiary-label)]">Min: 1 replica</span>
        <span className="text-[var(--tertiary-label)]">Max: 6 replicas</span>
        <span className="text-[var(--picsellia-green)]">Cost optimized</span>
      </div>
    </div>
  );
};

export default function DeploymentScaling() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-indigo) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Scaling visualization */}
          <div className="card p-6 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-medium text-[var(--system-indigo)]">AUTO-SCALING</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                <span className="text-xs text-[var(--picsellia-green)]">Active</span>
              </div>
            </div>

            <ScalingTimeline />

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)] text-center">
                <div className="text-sm font-bold font-mono text-[var(--label)]">1-10</div>
                <div className="text-[10px] text-[var(--tertiary-label)]">Replica range</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)] text-center">
                <div className="text-sm font-bold font-mono text-[var(--system-indigo)]">&lt;30s</div>
                <div className="text-[10px] text-[var(--tertiary-label)]">Scale-up time</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)] text-center">
                <div className="text-sm font-bold font-mono text-[var(--picsellia-green)]">70%</div>
                <div className="text-[10px] text-[var(--tertiary-label)]">CPU threshold</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Auto-Scaling
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Scale to match demand
            </h2>
            <p className="text-[var(--secondary-label)] mb-8">
              Automatically scale from zero to thousands of requests per second.
              Pay only for the compute you use, with intelligent scaling policies.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--label)]">Scale-to-zero for cost efficiency</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--label)]">CPU and request-based scaling policies</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--label)]">Configurable min/max replica bounds</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--label)]">Cold-start optimization with warm pools</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--label)]">Multi-region deployment support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

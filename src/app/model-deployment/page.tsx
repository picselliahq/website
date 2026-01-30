'use client';

import Link from 'next/link';

// Deployment pipeline visualization
const DeploymentPipeline = () => {
  const stages = [
    { name: 'Build', status: 'complete', duration: '12s' },
    { name: 'Test', status: 'complete', duration: '34s' },
    { name: 'Package', status: 'complete', duration: '8s' },
    { name: 'Deploy', status: 'active', duration: '...' },
    { name: 'Verify', status: 'pending', duration: '—' },
  ];

  return (
    <div className="relative w-full bg-[var(--black)] rounded-lg overflow-hidden p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--system-red)] animate-pulse" />
          <span className="text-xs text-[var(--system-red)]">Deploying</span>
        </div>
        <span className="text-[10px] text-[var(--tertiary-label)] font-mono">v2.4.1 → production</span>
      </div>

      {/* Pipeline stages */}
      <div className="space-y-2">
        {stages.map((stage) => (
          <div key={stage.name} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              stage.status === 'complete'
                ? 'bg-[var(--picsellia-green)]'
                : stage.status === 'active'
                ? 'bg-[var(--system-red)] animate-pulse'
                : 'bg-[var(--tertiary-system-background)] border border-[var(--border)]'
            }`}>
              {stage.status === 'complete' && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {stage.status === 'active' && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className={`text-xs ${
              stage.status === 'active' ? 'text-[var(--system-red)] font-medium' : 'text-[var(--tertiary-label)]'
            }`}>
              {stage.name}
            </span>
            <span className="text-[10px] text-[var(--tertiary-label)] font-mono w-8 text-right">{stage.duration}</span>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[10px]">
        <span className="text-[var(--tertiary-label)]">3 of 5 stages complete</span>
        <span className="text-[var(--system-red)] font-mono">~54s remaining</span>
      </div>
    </div>
  );
};

// Scaling visualization
const ScalingChart = () => {
  const bars = [2, 3, 5, 8, 12, 10, 7, 4, 3, 2, 4, 6, 9, 14, 11, 8, 5, 3, 2, 2];
  const max = Math.max(...bars);

  return (
    <div className="flex items-end gap-0.5 h-20">
      {bars.map((val, i) => (
        <div
          key={i}
          className="flex-1 rounded-t transition-all"
          style={{
            height: `${(val / max) * 100}%`,
            backgroundColor: val >= 10 ? 'var(--system-red)' : val >= 6 ? 'var(--system-orange)' : 'var(--picsellia-green)',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

// Endpoint row component
const EndpointRow = ({ name, method, latency, status }: { name: string; method: string; latency: string; status: 'healthy' | 'degraded' | 'down' }) => (
  <div className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-0">
    <div className="flex items-center gap-3">
      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
        method === 'POST' ? 'bg-[var(--system-red)]/10 text-[var(--system-red)]' : 'bg-[var(--system-blue)]/10 text-[var(--system-blue)]'
      }`}>
        {method}
      </span>
      <span className="text-sm font-mono text-[var(--label)]">{name}</span>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-xs font-mono text-[var(--secondary-label)]">{latency}</span>
      <div className={`w-2 h-2 rounded-full ${
        status === 'healthy' ? 'bg-[var(--picsellia-green)]' : status === 'degraded' ? 'bg-[var(--system-orange)]' : 'bg-[var(--system-red)]'
      }`} />
    </div>
  </div>
);

export default function ModelDeploymentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[var(--system-red)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-orange)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-red)]/10 border border-[var(--system-red)]/20 mb-8">
                <svg className="w-4 h-4 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="text-sm font-medium text-[var(--system-red)]">Deployment</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Deploy Models<br />
                <span className="text-[var(--system-red)]">To Production</span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
                Ship computer vision models to cloud or edge.
                Auto-scaling serverless infrastructure with 99.9% uptime.
              </p>

              {/* Key metrics preview */}
              <div className="flex items-center gap-6 mb-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--label)] font-mono">99.9%</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Uptime SLA</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--system-red)] font-mono">&lt;50ms</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Cold Start</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--picsellia-green)] font-mono">Auto</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Scaling</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="btn-primary px-8 py-4 text-base">
                  Deploy Your First Model
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="https://documentation.picsellia.com/docs/deployment" className="btn-secondary px-8 py-4 text-base">
                  Documentation
                </Link>
              </div>
            </div>

            {/* Right - Pipeline Demo */}
            <div className="relative hidden lg:block">
              <div className="rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl">
                <DeploymentPipeline />
              </div>

              {/* Floating status card */}
              <div className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-xl border-[var(--system-red)]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-red)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[var(--system-red)]">Deploying v2.4.1</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">Scaling to 4 replicas</div>
                  </div>
                </div>
              </div>

              {/* Floating uptime card */}
              <div className="absolute -top-4 -right-4 card px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[var(--tertiary-label)]">Uptime:</span>
                  <span className="text-[var(--picsellia-green)] font-mono">99.97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serverless Infrastructure Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-red) 1px, transparent 1px), linear-gradient(90deg, var(--system-red) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-red)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Serverless Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Zero infrastructure management
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Deploy models as serverless endpoints. No Docker, no Kubernetes, no
                infrastructure headaches. Just push your model and get a production-ready API.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-red)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">One-Click Deploy</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Deploy any model from your registry with a single click or API call</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">GPU & CPU Support</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Choose the right compute for your model — from lightweight CPUs to powerful GPUs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-yellow)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-yellow)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Secure by Default</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">API key authentication, TLS encryption, and isolated runtime environments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Endpoints card */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-red)]">ENDPOINTS</span>
                <span className="text-xs text-[var(--tertiary-label)]">3 active</span>
              </div>
              <div className="p-4">
                <EndpointRow name="/predict" method="POST" latency="23ms" status="healthy" />
                <EndpointRow name="/batch" method="POST" latency="145ms" status="healthy" />
                <EndpointRow name="/health" method="GET" latency="2ms" status="healthy" />
              </div>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)]" />
                    <span className="text-[var(--picsellia-green)]">All endpoints healthy</span>
                  </div>
                  <span className="text-[var(--tertiary-label)]">Last checked 12s ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Scaling Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--system-red)]/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-red)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Auto-Scaling
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Scale to zero, scale to thousands
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Automatically scale replicas based on incoming traffic. Pay only for what
              you use with scale-to-zero support and instant cold starts.
            </p>
          </div>

          {/* Scaling dashboard */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-red)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-3xl font-bold font-mono text-[var(--label)]">14</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Active Replicas</h3>
              <p className="text-xs text-[var(--tertiary-label)]">Peak traffic right now</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold font-mono text-[var(--label)]">&lt;50ms</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Cold Start</h3>
              <p className="text-xs text-[var(--tertiary-label)]">Scale from zero latency</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold font-mono text-[var(--label)]">$0</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Idle Cost</h3>
              <p className="text-xs text-[var(--tertiary-label)]">Scale to zero when quiet</p>
            </div>
          </div>

          {/* Scaling chart */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-red)]">REPLICA COUNT</span>
              <span className="text-xs text-[var(--tertiary-label)]">Last 24 hours</span>
            </div>
            <div className="p-6">
              <ScalingChart />
              <div className="mt-3 flex items-center justify-between text-[10px] text-[var(--tertiary-label)]">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>Now</span>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center gap-4 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)]" />
                  <span className="text-[var(--tertiary-label)]">Low (0–5)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--system-orange)]" />
                  <span className="text-[var(--tertiary-label)]">Medium (6–9)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--system-red)]" />
                  <span className="text-[var(--tertiary-label)]">High (10+)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version Management Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-orange) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* SDK card */}
            <div className="card p-0 overflow-hidden order-2 lg:order-1">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-orange)]">DEPLOYMENT SDK</span>
                <span className="text-xs text-[var(--tertiary-label)]">Python</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
                <div className="p-5">
                  <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-[var(--tertiary-label)]"># Deploy a model</span>{'\n'}
                      <span className="text-[var(--label)]">deployment</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">model.deploy(</span>{'\n'}
                      {'  '}<span className="text-[var(--label)]">name</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;prod-v2&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                      {'  '}<span className="text-[var(--label)]">replicas</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--system-red)]">2</span><span className="text-[var(--label)]">,</span>{'\n'}
                      {'  '}<span className="text-[var(--label)]">gpu</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--system-red)]">True</span>{'\n'}
                      <span className="text-[var(--label)]">)</span>
                    </code>
                  </pre>
                </div>
                <div className="p-5">
                  <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-[var(--tertiary-label)]"># Run inference</span>{'\n'}
                      <span className="text-[var(--label)]">result</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">deployment.predict(</span>{'\n'}
                      {'  '}<span className="text-[var(--picsellia-green)]">&quot;image.jpg&quot;</span>{'\n'}
                      <span className="text-[var(--label)]">)</span>{'\n\n'}
                      <span className="text-[var(--tertiary-label)]"># Batch predict</span>{'\n'}
                      <span className="text-[var(--label)]">results</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">deployment.predict(</span>{'\n'}
                      {'  '}<span className="text-[var(--label)]">images</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">batch</span>{'\n'}
                      <span className="text-[var(--label)]">)</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Version Management
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Roll out with confidence
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Manage model versions with canary deployments, blue-green rollouts,
                and instant rollback. Never break production again.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Canary deployments with traffic splitting</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Shadow model support for A/B testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">One-click rollback to any previous version</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Automatic health checks and rollback triggers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edge Deployment Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Edge & Cloud
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Deploy anywhere
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              From cloud endpoints to edge devices, deploy models where your data lives.
              Consistent SDK experience across all targets.
            </p>
          </div>

          {/* Deployment targets */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-red)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Cloud Endpoints</h3>
                  <p className="text-sm text-[var(--tertiary-label)] mb-4">
                    Managed serverless inference with auto-scaling. REST API endpoints
                    with built-in load balancing and redundancy.
                  </p>
                  <code className="text-xs font-mono text-[var(--secondary-label)] bg-[var(--black)] px-2 py-1 rounded">
                    model.deploy(target=&quot;cloud&quot;)
                  </code>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Edge Devices</h3>
                  <p className="text-sm text-[var(--tertiary-label)] mb-4">
                    Export optimized models for NVIDIA Jetson, Raspberry Pi, and other
                    edge hardware. ONNX and TensorRT support included.
                  </p>
                  <code className="text-xs font-mono text-[var(--secondary-label)] bg-[var(--black)] px-2 py-1 rounded">
                    model.export(format=&quot;onnx&quot;)
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--system-red)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--system-red)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-red) 1px, transparent 1px), linear-gradient(90deg, var(--system-red) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Ready to deploy your models?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                Ship models to production in minutes. Auto-scaling, versioning,
                and monitoring built in.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/trial" className="btn-primary px-10 py-4 text-base">
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary px-10 py-4 text-base">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

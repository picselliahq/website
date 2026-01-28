'use client';

import Link from 'next/link';

// Workflow steps
const workflowSteps = [
  { id: 1, name: 'Annotation', type: 'annotation', workers: 3, progress: 75, color: 'var(--system-blue)' },
  { id: 2, name: 'Review', type: 'review', workers: 2, progress: 45, color: 'var(--system-orange)' },
  { id: 3, name: 'Final Check', type: 'review', workers: 1, progress: 20, color: 'var(--picsellia-green)' },
];

// Task statuses
const taskStatuses = [
  { name: 'In Progress', count: 234, color: 'var(--system-blue)', icon: 'progress' },
  { name: 'To Rework', count: 12, color: 'var(--system-orange)', icon: 'rework' },
  { name: 'Done', count: 1847, color: 'var(--picsellia-green)', icon: 'done' },
  { name: 'Skipped', count: 8, color: 'var(--system-gray)', icon: 'skip' },
];

// Workflow visualization component
const WorkflowVisualization = () => {
  return (
    <div className="relative">
      {/* Steps */}
      <div className="flex items-start gap-4">
        {workflowSteps.map((step, index) => (
          <div key={step.id} className="flex-1 relative">
            {/* Connection line */}
            {index < workflowSteps.length - 1 && (
              <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[var(--border)] to-transparent z-0" />
            )}

            {/* Step card */}
            <div className="relative z-10 card p-4 bg-[var(--card)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.id}
                  </div>
                  <span className="text-sm font-medium text-[var(--label)]">{step.name}</span>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-medium"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${step.color} 15%, transparent)`,
                    color: step.color,
                  }}
                >
                  {step.type}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-2">
                <div className="h-1.5 rounded-full bg-[var(--black)] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${step.progress}%`, backgroundColor: step.color }}
                  />
                </div>
              </div>

              {/* Workers */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--tertiary-label)]">{step.progress}% complete</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-[var(--secondary-label)]">{step.workers}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sample rate indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--tertiary-system-background)] border border-[var(--border)]">
          <span className="text-[10px] text-[var(--tertiary-label)]">Sample rate:</span>
          <span className="text-xs font-mono text-[var(--label)]">100%</span>
          <svg className="w-3 h-3 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="text-xs font-mono text-[var(--label)]">50%</span>
          <svg className="w-3 h-3 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="text-xs font-mono text-[var(--label)]">25%</span>
        </div>
      </div>
    </div>
  );
};

// Issues visualization
const IssuesPanel = () => {
  const issues = [
    { id: 1, type: 'zone', title: 'Unclear boundary', status: 'open', asset: 'IMG_0042.jpg' },
    { id: 2, type: 'image', title: 'Wrong classification', status: 'resolved', asset: 'IMG_0156.jpg' },
    { id: 3, type: 'zone', title: 'Missing annotation', status: 'open', asset: 'IMG_0089.jpg' },
  ];

  return (
    <div className="card p-0 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <span className="text-xs font-medium text-[var(--system-red)]">ISSUES</span>
        <span className="text-xs text-[var(--tertiary-label)]">2 open</span>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {issues.map((issue) => (
          <div key={issue.id} className="p-3 flex items-start gap-3 hover:bg-[var(--quaternary-system-fill)] transition-colors">
            <div
              className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${
                issue.type === 'zone' ? 'bg-[var(--system-orange)]/10' : 'bg-[var(--system-blue)]/10'
              }`}
            >
              {issue.type === 'zone' ? (
                <svg className="w-3 h-3 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} strokeDasharray="4 2" />
                </svg>
              ) : (
                <svg className="w-3 h-3 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-[var(--label)] truncate">{issue.title}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${
                    issue.status === 'open'
                      ? 'bg-[var(--system-red)]/10 text-[var(--system-red)]'
                      : 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]'
                  }`}
                >
                  {issue.status}
                </span>
              </div>
              <span className="text-[10px] text-[var(--tertiary-label)] font-mono">{issue.asset}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AnnotationCampaignsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--system-orange)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-indigo)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-sm font-medium text-[var(--system-orange)]">Workflow</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Human-In-The-Loop<br />
              <span className="text-[var(--system-orange)]">At Scale</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              Orchestrate annotation workflows with multi-step pipelines, team management,
              and quality control. Scale your labeling operations without sacrificing quality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="btn-primary px-8 py-4 text-base">
                See It In Action
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link href="https://documentation.picsellia.com/docs/campaign" className="btn-secondary px-8 py-4 text-base">
                Documentation
              </Link>
            </div>
          </div>

          {/* Video Demo */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                src="/videos/annotation campaign management.webm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Step Workflows Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-orange) 1px, transparent 1px), linear-gradient(90deg, var(--system-orange) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Workflows
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Custom multi-step pipelines
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Design annotation workflows that match your quality requirements.
                Chain annotation and review steps with configurable sample rates.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Annotation Steps</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Workers create initial annotations on assigned assets</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Review Steps</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Team members validate and accept/reject previous work</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Sample Rates</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Control what percentage of assets proceed to each step</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual example */}
            <div className="card p-6">
              <div className="text-xs text-[var(--tertiary-label)] mb-4 uppercase tracking-wider">Example Pipeline</div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--system-blue)] flex items-center justify-center text-white text-xs font-bold">1</div>
                  <div className="flex-1 h-12 rounded-lg bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20 flex items-center px-4">
                    <span className="text-sm text-[var(--system-blue)]">Initial Annotation</span>
                  </div>
                  <span className="text-xs text-[var(--tertiary-label)] font-mono">100%</span>
                </div>
                <div className="flex justify-center">
                  <svg className="w-5 h-5 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--system-orange)] flex items-center justify-center text-white text-xs font-bold">2</div>
                  <div className="flex-1 h-12 rounded-lg bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20 flex items-center px-4">
                    <span className="text-sm text-[var(--system-orange)]">First Review</span>
                  </div>
                  <span className="text-xs text-[var(--tertiary-label)] font-mono">50%</span>
                </div>
                <div className="flex justify-center">
                  <svg className="w-5 h-5 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--picsellia-green)] flex items-center justify-center text-white text-xs font-bold">3</div>
                  <div className="flex-1 h-12 rounded-lg bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 flex items-center px-4">
                    <span className="text-sm text-[var(--picsellia-green)]">Final Validation</span>
                  </div>
                  <span className="text-xs text-[var(--tertiary-label)] font-mono">25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Management Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--system-indigo)]/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Task Management
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Full visibility on progress
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Track every task through its lifecycle. Reassign work, manage priorities,
              and ensure nothing falls through the cracks.
            </p>
          </div>

          {/* Task status cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {taskStatuses.map((status) => (
              <div key={status.name} className="card p-5">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `color-mix(in srgb, ${status.color} 15%, transparent)` }}
                  >
                    {status.icon === 'progress' && (
                      <svg className="w-5 h-5" style={{ color: status.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {status.icon === 'rework' && (
                      <svg className="w-5 h-5" style={{ color: status.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )}
                    {status.icon === 'done' && (
                      <svg className="w-5 h-5" style={{ color: status.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {status.icon === 'skip' && (
                      <svg className="w-5 h-5" style={{ color: status.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                  <div className="text-2xl font-bold font-mono" style={{ color: status.color }}>
                    {status.count.toLocaleString()}
                  </div>
                </div>
                <div className="text-sm text-[var(--label)]">{status.name}</div>
              </div>
            ))}
          </div>

          {/* Task lifecycle diagram */}
          <div className="card p-6">
            <div className="text-xs text-[var(--tertiary-label)] mb-6 uppercase tracking-wider">Task Lifecycle</div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20">
                <div className="w-2 h-2 rounded-full bg-[var(--system-blue)]" />
                <span className="text-sm text-[var(--system-blue)]">In Progress</span>
              </div>
              <svg className="w-5 h-5 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--system-yellow)]/10 border border-[var(--system-yellow)]/20">
                <div className="w-2 h-2 rounded-full bg-[var(--system-yellow)]" />
                <span className="text-sm text-[var(--system-yellow)]">Submitted</span>
              </div>
              <svg className="w-5 h-5 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)]" />
                  <span className="text-sm text-[var(--picsellia-green)]">Done</span>
                </div>
                <span className="text-[10px] text-[var(--tertiary-label)]">or</span>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--system-orange)]" />
                  <span className="text-sm text-[var(--system-orange)]">To Rework</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Management Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-pink) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Team distribution visual */}
            <div className="card p-6 order-2 lg:order-1">
              <div className="text-xs text-[var(--tertiary-label)] mb-4 uppercase tracking-wider">Worker Distribution</div>

              {/* Distribution type toggle */}
              <div className="flex gap-2 mb-6">
                <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--system-pink)] text-white">
                  Equal
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                  Custom weights
                </button>
              </div>

              {/* Workers */}
              <div className="space-y-3">
                {[
                  { name: 'Alice Chen', tasks: 156, percent: 33 },
                  { name: 'Bob Smith', tasks: 156, percent: 33 },
                  { name: 'Carol Davis', tasks: 156, percent: 34 },
                ].map((worker, i) => (
                  <div key={worker.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--system-pink)] to-[var(--system-indigo)] flex items-center justify-center text-white text-xs font-bold">
                      {worker.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[var(--label)]">{worker.name}</span>
                        <span className="text-xs font-mono text-[var(--tertiary-label)]">{worker.tasks} tasks</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[var(--black)] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${worker.percent}%`,
                            backgroundColor: i === 0 ? 'var(--system-pink)' : i === 1 ? 'var(--system-indigo)' : 'var(--system-blue)',
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[var(--secondary-label)] w-10 text-right">{worker.percent}%</span>
                  </div>
                ))}
              </div>

              {/* Labeler role info */}
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--system-yellow)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[var(--system-yellow)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[var(--label)]">Unprivileged Workers</span>
                    <p className="text-[10px] text-[var(--tertiary-label)] mt-0.5">Restrict access to only assigned tasks within campaigns</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--system-pink)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Team Management
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Scale with external teams
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Onboard external annotators quickly with clear guidelines.
                Control access, distribute work evenly, and maintain quality standards.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Equal or weighted task distribution</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Instruction PDFs for annotators</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Role-based access controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Bulk task reassignment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control / Issues Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-red)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Quality Control
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Collaborative issue tracking
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Flag problems, discuss solutions, and ensure quality before assets leave the pipeline.
              No asset can be marked done with open issues.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Issue types */}
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} strokeDasharray="4 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Zone Issues</h3>
                    <p className="text-sm text-[var(--tertiary-label)]">
                      Flag specific areas with rectangular markers. Perfect for pointing out
                      boundary errors, missing annotations, or unclear regions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Image Issues</h3>
                    <p className="text-sm text-[var(--tertiary-label)]">
                      Flag concerns about the entire asset. Use for classification errors,
                      image quality problems, or incorrect labeling approach.
                    </p>
                  </div>
                </div>
              </div>

              {/* Blocking rule */}
              <div className="p-4 rounded-lg bg-[var(--system-red)]/5 border border-[var(--system-red)]/20">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-sm text-[var(--system-red)]">
                    Assets cannot be marked Done with open issues
                  </span>
                </div>
              </div>
            </div>

            {/* Issues panel */}
            <IssuesPanel />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-teal) 1px, transparent 1px), linear-gradient(90deg, var(--system-teal) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-teal)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Analytics
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Real-time performance insights
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Track time spent, monitor productivity, and identify bottlenecks.
              Make data-driven decisions to optimize your annotation operations.
            </p>
          </div>

          {/* Analytics cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--system-teal)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--system-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold font-mono text-[var(--label)]">2.4min</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Avg. Time per Asset</h3>
              <p className="text-xs text-[var(--tertiary-label)]">Detailed time tracking for each task</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold font-mono text-[var(--label)]">847/day</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Team Throughput</h3>
              <p className="text-xs text-[var(--tertiary-label)]">Assets completed by all workers</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold font-mono text-[var(--label)]">98.2%</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Acceptance Rate</h3>
              <p className="text-xs text-[var(--tertiary-label)]">First-pass review approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--system-orange)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--system-orange)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-orange) 1px, transparent 1px), linear-gradient(90deg, var(--system-orange) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Ready to scale your annotation?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                Start orchestrating annotation campaigns with enterprise-grade
                workflow management and quality control.
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

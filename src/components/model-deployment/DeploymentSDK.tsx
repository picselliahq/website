'use client';

export default function DeploymentSDK() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--system-blue)]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Developer Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Deploy in a few lines of code
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Use the Python SDK to deploy, update, and manage models programmatically.
            Full API access for CI/CD integration.
          </p>
        </div>

        {/* SDK Code blocks */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-indigo)]">DEPLOY A MODEL</span>
              <span className="text-xs text-[var(--tertiary-label)]">Python SDK</span>
            </div>
            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto bg-[var(--black)]">
              <code>
                <span className="text-[var(--tertiary-label)]"># Connect to your project</span>{'\n'}
                <span className="text-[var(--system-indigo)]">from</span> <span className="text-[var(--label)]">picsellia</span> <span className="text-[var(--system-indigo)]">import</span> <span className="text-[var(--label)]">Client</span>{'\n\n'}
                <span className="text-[var(--label)]">client</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">Client()</span>{'\n'}
                <span className="text-[var(--label)]">project</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.get_project(</span>{'\n'}
                {'  '}<span className="text-[var(--picsellia-green)]">&quot;defect-detection&quot;</span>{'\n'}
                <span className="text-[var(--label)]">)</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Create deployment</span>{'\n'}
                <span className="text-[var(--label)]">deployment</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">project.create_deployment(</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">name</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;prod-v3&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">model_version</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">best_model</span>{'\n'}
                <span className="text-[var(--label)]">)</span>
              </code>
            </pre>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-indigo)]">RUN INFERENCE</span>
              <span className="text-xs text-[var(--tertiary-label)]">Python SDK</span>
            </div>
            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto bg-[var(--black)]">
              <code>
                <span className="text-[var(--tertiary-label)]"># Get prediction from file</span>{'\n'}
                <span className="text-[var(--label)]">prediction</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">deployment.predict(</span>{'\n'}
                {'  '}<span className="text-[var(--picsellia-green)]">&quot;image.jpg&quot;</span>{'\n'}
                <span className="text-[var(--label)]">)</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Get prediction from bytes</span>{'\n'}
                <span className="text-[var(--label)]">prediction</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">deployment.predict_from_bytes(</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">raw_bytes</span><span className="text-[var(--label)]">,</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;production&quot;</span><span className="text-[var(--label)]">]</span>{'\n'}
                <span className="text-[var(--label)]">)</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Access results</span>{'\n'}
                <span className="text-[var(--label)]">print(prediction.boxes)</span>{'\n'}
                <span className="text-[var(--label)]">print(prediction.confidences)</span>
              </code>
            </pre>
          </div>
        </div>

        {/* API endpoint preview */}
        <div className="card p-0 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
            <span className="text-xs font-medium text-[var(--picsellia-green)]">REST API</span>
            <span className="text-xs text-[var(--tertiary-label)]">cURL</span>
          </div>
          <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto bg-[var(--black)]">
            <code>
              <span className="text-[var(--tertiary-label)]"># Direct API call</span>{'\n'}
              <span className="text-[var(--system-indigo)]">curl</span> <span className="text-[var(--label)]">-X POST</span> <span className="text-[var(--picsellia-green)]">&quot;https://serving.picsellia.com/v1/predict&quot;</span> <span className="text-[var(--label)]">\</span>{'\n'}
              {'  '}<span className="text-[var(--label)]">-H</span> <span className="text-[var(--picsellia-green)]">&quot;Authorization: Bearer $API_KEY&quot;</span> <span className="text-[var(--label)]">\</span>{'\n'}
              {'  '}<span className="text-[var(--label)]">-F</span> <span className="text-[var(--picsellia-green)]">&quot;image=@photo.jpg&quot;</span> <span className="text-[var(--label)]">\</span>{'\n'}
              {'  '}<span className="text-[var(--label)]">-F</span> <span className="text-[var(--picsellia-green)]">&quot;deployment_id=dep_abc123&quot;</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

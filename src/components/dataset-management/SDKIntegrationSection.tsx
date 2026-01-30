const exportFormats = [
  { name: 'COCO', description: 'Object detection & segmentation' },
  { name: 'YOLO', description: 'YOLOv5/v8 format' },
  { name: 'Pascal VOC', description: 'XML annotations' },
  { name: 'Custom', description: 'JSON/CSV exports' },
];

export default function SDKIntegrationSection() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--system-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--system-indigo) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Developer Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Programmatic dataset management
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Full Python SDK with type hints, auto-completion, and comprehensive documentation. Integrate datasets directly into your ML pipelines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Create & Version */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
              </div>
              <span className="text-xs text-[var(--tertiary-label)]">dataset_management.py</span>
            </div>
            <pre className="p-5 text-xs overflow-x-auto bg-[var(--black)] font-mono leading-relaxed">
              <code>
                <span className="text-[var(--system-indigo)]">from</span> <span className="text-[var(--label)]">picsellia</span> <span className="text-[var(--system-indigo)]">import</span> <span className="text-[var(--label)]">Client</span>{'\n\n'}
                <span className="text-[var(--label)]">client</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">Client()</span>{'\n'}
                <span className="text-[var(--label)]">datalake</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.get_datalake()</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Get or create dataset</span>{'\n'}
                <span className="text-[var(--label)]">dataset</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.get_dataset(</span><span className="text-[var(--picsellia-green)]">&quot;defect-detection&quot;</span><span className="text-[var(--label)]">)</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Create a new version</span>{'\n'}
                <span className="text-[var(--label)]">version</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">dataset.create_version(</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">version</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;v3&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">description</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;Added edge cases&quot;</span>{'\n'}
                <span className="text-[var(--label)]">)</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Add data from datalake</span>{'\n'}
                <span className="text-[var(--label)]">data</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">datalake.list_data(</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;edge-case&quot;</span><span className="text-[var(--label)]">,</span> <span className="text-[var(--picsellia-green)]">&quot;validated&quot;</span><span className="text-[var(--label)]">]</span>{'\n'}
                <span className="text-[var(--label)]">)</span>{'\n'}
                <span className="text-[var(--label)]">version.add_data(data)</span>
              </code>
            </pre>
            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[var(--tertiary-label)]">Python SDK</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">create_version()</span>
                </div>
              </div>
            </div>
          </div>

          {/* Labels & Export */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
              </div>
              <span className="text-xs text-[var(--tertiary-label)]">labels_export.py</span>
            </div>
            <pre className="p-5 text-xs overflow-x-auto bg-[var(--black)] font-mono leading-relaxed">
              <code>
                <span className="text-[var(--tertiary-label)]"># Label manipulation</span>{'\n'}
                <span className="text-[var(--label)]">labels</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">version.list_labels()</span>{'\n'}
                <span className="text-[var(--label)]">version.create_label(</span><span className="text-[var(--picsellia-green)]">&quot;scratch&quot;</span><span className="text-[var(--label)]">)</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Rename a label</span>{'\n'}
                <span className="text-[var(--label)]">label</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">version.get_label(</span><span className="text-[var(--picsellia-green)]">&quot;defect&quot;</span><span className="text-[var(--label)]">)</span>{'\n'}
                <span className="text-[var(--label)]">label.update(name</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;surface_defect&quot;</span><span className="text-[var(--label)]">)</span>{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Export annotations in COCO format</span>{'\n'}
                <span className="text-[var(--label)]">version.export_annotation_file(</span>{'\n'}
                {'  '}<span className="text-[var(--label)]">AnnotationFileType.COCO,</span>{'\n'}
                {'  '}<span className="text-[var(--picsellia-green)]">&quot;./training_data&quot;</span>{'\n'}
                <span className="text-[var(--label)]">)</span>
              </code>
            </pre>
            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[var(--tertiary-label)]">Supports COCO, YOLO, Pascal VOC</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">label.update()</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Export Formats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {exportFormats.map((format) => (
            <div key={format.name} className="card p-4 text-center">
              <div className="text-lg font-mono font-bold text-[var(--label)]">{format.name}</div>
              <div className="text-xs text-[var(--tertiary-label)] mt-1">{format.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

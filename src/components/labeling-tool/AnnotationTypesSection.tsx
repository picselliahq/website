import { annotationTypes } from './data';

export default function AnnotationTypesSection() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--picsellia-blue) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-blue) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--picsellia-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Annotation Types
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Every shape you need
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            From simple bounding boxes to complex polygon masks, annotate any type
            of visual data with precision tools built for computer vision.
          </p>
        </div>

        {/* Annotation types grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {annotationTypes.map((type) => (
            <div
              key={type.name}
              className="card p-6 text-center group hover:border-[var(--picsellia-blue)]/30 transition-all"
            >
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: `color-mix(in srgb, ${type.color} 15%, transparent)`, color: type.color }}
              >
                {type.icon}
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">{type.name}</h3>
              <p className="text-xs text-[var(--tertiary-label)]">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Data formats */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--tertiary-label)] mb-4">Supports diverse data formats</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Images', 'Videos', 'Satellite Imagery', 'Medical Scans', 'Multispectral'].map((format) => (
              <span
                key={format}
                className="px-4 py-2 rounded-full text-sm bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--secondary-label)]"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

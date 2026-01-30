'use client';

import { useState } from 'react';

const versions = [
  { id: 0, name: 'v1.0', images: 1200, annotations: 4800, date: 'Jan 15', status: 'archived' },
  { id: 1, name: 'v1.1', images: 1450, annotations: 5800, date: 'Feb 02', status: 'archived' },
  { id: 2, name: 'v2.0', images: 2100, annotations: 8400, date: 'Feb 28', status: 'production' },
  { id: 3, name: 'v2.1', images: 2350, annotations: 9400, date: 'Mar 15', status: 'staging' },
];

export default function VersionTimeline() {
  const [activeVersion, setActiveVersion] = useState(2);

  return (
    <div className="relative">
      {/* Timeline track */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-[var(--border)]" />
      <div
        className="absolute top-5 left-0 h-0.5 bg-[var(--picsellia-blue)] transition-all duration-500"
        style={{ width: `${(activeVersion / (versions.length - 1)) * 100}%` }}
      />

      <div className="relative flex justify-between">
        {versions.map((version) => (
          <button
            key={version.id}
            onClick={() => setActiveVersion(version.id)}
            className={`relative flex flex-col items-center group ${version.id <= activeVersion ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                version.id === activeVersion
                  ? 'bg-[var(--picsellia-blue)] border-[var(--picsellia-blue)] text-white scale-110'
                  : version.id < activeVersion
                  ? 'bg-[var(--picsellia-blue)]/20 border-[var(--picsellia-blue)] text-[var(--picsellia-blue)]'
                  : 'bg-[var(--card)] border-[var(--border)] text-[var(--tertiary-label)]'
              }`}
            >
              <span className="text-xs font-mono font-bold">{version.name}</span>
            </div>
            <div className="mt-3 text-center">
              <div className={`text-xs font-medium ${version.id === activeVersion ? 'text-[var(--label)]' : 'text-[var(--tertiary-label)]'}`}>
                {version.date}
              </div>
              {version.id === activeVersion && (
                <div className={`mt-1 px-2 py-0.5 rounded text-[9px] font-medium ${
                  version.status === 'production' ? 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]' :
                  version.status === 'staging' ? 'bg-[var(--system-orange)]/10 text-[var(--system-orange)]' :
                  'bg-[var(--system-gray)]/10 text-[var(--tertiary-label)]'
                }`}>
                  {version.status}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Version details */}
      <div className="mt-8 p-4 rounded-xl bg-[var(--black)] border border-[var(--border)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--picsellia-blue)]/20 flex items-center justify-center">
              <span className="text-xs font-mono text-[var(--picsellia-blue)] font-bold">{versions[activeVersion].name}</span>
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--label)]">Dataset: defect-detection</div>
              <div className="text-xs text-[var(--tertiary-label)]">Last modified {versions[activeVersion].date}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] hover:bg-[var(--picsellia-blue)]/10 hover:text-[var(--picsellia-blue)] transition-colors">
              Compare
            </button>
            <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--picsellia-blue)] text-white">
              Checkout
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)]">
            <div className="text-xs text-[var(--tertiary-label)] mb-1">Images</div>
            <div className="text-xl font-bold font-mono text-[var(--label)]">{versions[activeVersion].images.toLocaleString()}</div>
          </div>
          <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)]">
            <div className="text-xs text-[var(--tertiary-label)] mb-1">Annotations</div>
            <div className="text-xl font-bold font-mono text-[var(--label)]">{versions[activeVersion].annotations.toLocaleString()}</div>
          </div>
          <div className="p-3 rounded-lg bg-[var(--tertiary-system-background)]">
            <div className="text-xs text-[var(--tertiary-label)] mb-1">Change</div>
            <div className="text-xl font-bold font-mono text-[var(--picsellia-green)]">
              +{activeVersion > 0 ? versions[activeVersion].images - versions[activeVersion - 1].images : versions[activeVersion].images}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

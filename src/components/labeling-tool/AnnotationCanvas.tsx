'use client';

import { useState } from 'react';

const shapes: Array<
  | { id: number; type: 'box'; x: number; y: number; w: number; h: number; label: string; color: string }
  | { id: number; type: 'polygon'; points: string; label: string; color: string }
> = [
  { id: 0, type: 'box', x: 15, y: 20, w: 25, h: 30, label: 'person', color: 'var(--picsellia-blue)' },
  { id: 1, type: 'box', x: 55, y: 35, w: 20, h: 25, label: 'car', color: 'var(--system-orange)' },
  { id: 2, type: 'polygon', points: '82,15 95,15 95,40 88,45 82,40', label: 'sign', color: 'var(--picsellia-green)' },
];

export default function AnnotationCanvas() {
  const [activeShape, setActiveShape] = useState<number | null>(1);

  return (
    <div className="relative w-full h-full bg-[var(--black)] rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="absolute top-3 left-3 flex items-center gap-1 z-10">
        {['cursor', 'box', 'polygon', 'point'].map((tool, i) => (
          <button
            key={tool}
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              i === 1 ? 'bg-[var(--picsellia-blue)] text-white' : 'bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] hover:bg-[var(--quaternary-system-fill)]'
            }`}
          >
            {tool === 'cursor' && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            )}
            {tool === 'box' && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="1" strokeWidth={2} />
              </svg>
            )}
            {tool === 'polygon' && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8l4-4 8 4 4-4v16l-4-4-8 4-4-4V8z" />
              </svg>
            )}
            {tool === 'point' && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Zoom controls */}
      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
        <span className="text-[10px] text-[var(--tertiary-label)] font-mono">125%</span>
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 rounded bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] flex items-center justify-center text-xs">−</button>
          <button className="w-6 h-6 rounded bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] flex items-center justify-center text-xs">+</button>
        </div>
      </div>

      {/* Canvas with shapes */}
      <svg className="w-full h-full" viewBox="0 0 100 70">
        {/* Grid background */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--border)" strokeWidth="0.2" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="70" fill="url(#grid)" />

        {/* Simulated image area */}
        <rect x="5" y="5" width="90" height="60" fill="var(--tertiary-system-background)" rx="2" opacity="0.5" />

        {/* Annotation shapes */}
        {shapes.map((shape) => (
          <g key={shape.id} onClick={() => setActiveShape(shape.id)} style={{ cursor: 'pointer' }}>
            {shape.type === 'box' ? (
              <>
                <rect
                  x={shape.x}
                  y={shape.y}
                  width={shape.w}
                  height={shape.h}
                  fill={shape.color}
                  fillOpacity={activeShape === shape.id ? 0.3 : 0.15}
                  stroke={shape.color}
                  strokeWidth={activeShape === shape.id ? 1 : 0.5}
                />
                {activeShape === shape.id && (
                  <>
                    <circle cx={shape.x} cy={shape.y} r="1.5" fill="white" stroke={shape.color} strokeWidth="0.5" />
                    <circle cx={shape.x + shape.w} cy={shape.y} r="1.5" fill="white" stroke={shape.color} strokeWidth="0.5" />
                    <circle cx={shape.x} cy={shape.y + shape.h} r="1.5" fill="white" stroke={shape.color} strokeWidth="0.5" />
                    <circle cx={shape.x + shape.w} cy={shape.y + shape.h} r="1.5" fill="white" stroke={shape.color} strokeWidth="0.5" />
                  </>
                )}
              </>
            ) : (
              <polygon
                points={shape.points}
                fill={shape.color}
                fillOpacity={activeShape === shape.id ? 0.3 : 0.15}
                stroke={shape.color}
                strokeWidth={activeShape === shape.id ? 1 : 0.5}
              />
            )}
            {/* Label */}
            <text
              x={shape.type === 'box' ? shape.x + 1 : 83}
              y={shape.type === 'box' ? shape.y - 1 : 13}
              fill={shape.color}
              fontSize="3"
              fontFamily="monospace"
            >
              {shape.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Shape list panel */}
      <div className="absolute bottom-3 right-3 w-32 bg-[var(--card)] border border-[var(--border)] rounded-lg overflow-hidden">
        <div className="px-2 py-1.5 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
          <span className="text-[9px] text-[var(--tertiary-label)] uppercase tracking-wider">Shapes</span>
        </div>
        <div className="p-1.5 space-y-1">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              onClick={() => setActiveShape(shape.id)}
              className={`flex items-center gap-1.5 px-1.5 py-1 rounded text-[10px] cursor-pointer transition-colors ${
                activeShape === shape.id ? 'bg-[var(--quaternary-system-fill)]' : 'hover:bg-[var(--quaternary-system-fill)]'
              }`}
            >
              <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: shape.color }} />
              <span className="text-[var(--label)]">{shape.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <span className="px-2 py-0.5 rounded text-[9px] font-medium bg-[var(--system-yellow)]/10 text-[var(--system-yellow)]">
          To Review
        </span>
      </div>
    </div>
  );
}

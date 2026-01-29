'use client';

import Link from 'next/link';
import { useState } from 'react';

// Annotation types supported
const annotationTypes = [
  {
    name: 'Object Detection',
    description: 'Bounding boxes with two clicks',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} strokeDasharray="4 2" />
        <rect x="6" y="8" width="8" height="6" rx="1" strokeWidth={2} />
      </svg>
    ),
    color: 'var(--system-blue)',
  },
  {
    name: 'Segmentation',
    description: 'Precise polygon masks',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8l4-4 6 3 6-3v16l-6 3-6-3-4 4V8z" />
      </svg>
    ),
    color: 'var(--picsellia-green)',
  },
  {
    name: 'Classification',
    description: 'Whole-image labels',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    color: 'var(--system-orange)',
  },
  {
    name: 'Keypoints',
    description: 'Point-based annotations',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
        <circle cx="6" cy="6" r="2" strokeWidth={2} />
        <circle cx="18" cy="6" r="2" strokeWidth={2} />
        <circle cx="6" cy="18" r="2" strokeWidth={2} />
        <circle cx="18" cy="18" r="2" strokeWidth={2} />
      </svg>
    ),
    color: 'var(--system-pink)',
  },
  {
    name: 'Polyline',
    description: 'Connected line segments',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20l5-8 4 4 7-12" />
      </svg>
    ),
    color: 'var(--system-indigo)',
  },
];

// Keyboard shortcuts
const shortcuts = [
  { keys: ['D'], action: 'Draw mode' },
  { keys: ['Esc'], action: 'Selection mode' },
  { keys: ['R'], action: 'Reset zoom' },
  { keys: ['O', 'P'], action: 'Navigate assets' },
  { keys: ['⌘', 'S'], action: 'Save annotations' },
  { keys: ['Del'], action: 'Delete shape' },
];

// Interactive canvas visualization
const AnnotationCanvas = () => {
  const [activeShape, setActiveShape] = useState<number | null>(1);

  const shapes: Array<
    | { id: number; type: 'box'; x: number; y: number; w: number; h: number; label: string; color: string }
    | { id: number; type: 'polygon'; points: string; label: string; color: string }
  > = [
    { id: 0, type: 'box', x: 15, y: 20, w: 25, h: 30, label: 'person', color: 'var(--system-blue)' },
    { id: 1, type: 'box', x: 55, y: 35, w: 20, h: 25, label: 'car', color: 'var(--system-orange)' },
    { id: 2, type: 'polygon', points: '82,15 95,15 95,40 88,45 82,40', label: 'sign', color: 'var(--picsellia-green)' },
  ];

  return (
    <div className="relative w-full h-full bg-[var(--black)] rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="absolute top-3 left-3 flex items-center gap-1 z-10">
        {['cursor', 'box', 'polygon', 'point'].map((tool, i) => (
          <button
            key={tool}
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              i === 1 ? 'bg-[var(--system-blue)] text-white' : 'bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] hover:bg-[var(--quaternary-system-fill)]'
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
                    {/* Control points */}
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
};

export default function LabelingToolPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--system-blue)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--picsellia-green)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20 mb-8">
                <svg className="w-4 h-4 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="text-sm font-medium text-[var(--system-blue)]">Annotation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Precision Labeling<br />
                <span className="text-[var(--system-blue)]">AI-Assisted</span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
                Turn your data into annotated datasets with precision and speed.
                Support for bounding boxes, polygons, segmentation, keypoints, and more.
              </p>

              {/* Annotation types mini preview */}
              <div className="flex items-center gap-3 mb-10">
                {annotationTypes.slice(0, 4).map((type) => (
                  <div
                    key={type.name}
                    className="w-10 h-10 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center transition-colors hover:border-[var(--system-blue)]/50"
                    style={{ color: type.color }}
                    title={type.name}
                  >
                    {type.icon}
                  </div>
                ))}
                <div className="text-xs text-[var(--tertiary-label)]">+{annotationTypes.length - 4} more</div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="btn-primary px-8 py-4 text-base">
                  See It In Action
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
                <Link href="https://documentation.picsellia.com/docs/dataset-annotation-tool" className="btn-secondary px-8 py-4 text-base">
                  Documentation
                </Link>
              </div>
            </div>

            {/* Right - Video Demo */}
            <div className="relative hidden lg:block">
              <div className="rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  src="/videos/labeling tool animation.webm"
                />
              </div>

              {/* Floating AI assist badge */}
              <div className="absolute -top-4 -right-4 card px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--system-indigo)] to-[var(--system-pink)] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[var(--label)]">SAM + DINOv2</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">AI-assisted labeling</div>
                  </div>
                </div>
              </div>

              {/* Floating shortcut hint */}
              <div className="absolute -bottom-4 -left-4 card px-3 py-2 shadow-xl">
                <div className="flex items-center gap-3 text-xs">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] font-mono text-[10px]">D</kbd>
                  <span className="text-[var(--tertiary-label)]">Draw mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annotation Types Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
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
                className="card p-6 text-center group hover:border-[var(--system-blue)]/30 transition-all"
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

      {/* Tools & Features Section */}
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

      {/* AI-Assisted Labeling Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-indigo) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              AI-Assisted & Processings
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              10x your labeling with AI
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Use SAM, DINOv2, and Grounding DINO for pre-labeling. Run automated
              processings to speed up annotation.
            </p>
          </div>

          {/* Models */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--system-indigo)] to-[var(--system-pink)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SAM</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">Segment Anything Model</h3>
                  <p className="text-sm text-[var(--tertiary-label)]">Meta AI</p>
                </div>
              </div>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                One-click segmentation for any object. Point, box, or text prompts
                generate precise masks instantly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">Segmentation</span>
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-pink)]/10 text-[var(--system-pink)]">Interactive</span>
                <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">Zero-shot</span>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--system-blue)] to-[var(--system-teal)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DINOv2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">DINOv2</h3>
                  <p className="text-sm text-[var(--tertiary-label)]">Meta AI</p>
                </div>
              </div>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                Self-supervised visual features for similarity search, clustering,
                and transfer learning without labels.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-blue)]/10 text-[var(--system-blue)]">Embeddings</span>
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-teal)]/10 text-[var(--system-teal)]">Clustering</span>
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-orange)]/10 text-[var(--system-orange)]">Self-supervised</span>
              </div>
            </div>
          </div>

          {/* Processings */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[var(--label)] mb-6 text-center">Automated Processings</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card p-5 text-center group hover:border-[var(--system-indigo)]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Pre-Annotation</h4>
                <p className="text-xs text-[var(--tertiary-label)]">Auto-generate initial labels using your trained models</p>
              </div>

              <div className="card p-5 text-center group hover:border-[var(--system-orange)]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Auto-Annotation</h4>
                <p className="text-xs text-[var(--tertiary-label)]">Fully automated annotation with confidence thresholds</p>
              </div>

              <div className="card p-5 text-center group hover:border-[var(--system-pink)]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-pink)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[var(--system-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Data Augmentation</h4>
                <p className="text-xs text-[var(--tertiary-label)]">Expand datasets with transforms and variations</p>
              </div>

              <div className="card p-5 text-center group hover:border-[var(--picsellia-green)]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Auto-Tagging</h4>
                <p className="text-xs text-[var(--tertiary-label)]">Automatically tag data in your datalake</p>
              </div>
            </div>
          </div>

          {/* Speed comparison and processing flow */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Speed comparison */}
            <div className="card p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-[var(--system-indigo)] font-mono mb-2">10x</div>
                <div className="text-sm text-[var(--tertiary-label)]">Faster annotation with AI assistance</div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[var(--secondary-label)]">Manual labeling</span>
                    <span className="text-xs font-mono text-[var(--tertiary-label)]">~2 min/image</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--black)] overflow-hidden">
                    <div className="h-full rounded-full bg-[var(--system-gray)]" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[var(--secondary-label)]">AI-assisted</span>
                    <span className="text-xs font-mono text-[var(--system-indigo)]">~12 sec/image</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--black)] overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[var(--system-indigo)] to-[var(--system-pink)]" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="flex items-center justify-center gap-2 text-sm text-[var(--picsellia-green)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Human validation for accuracy
                </div>
              </div>
            </div>

            {/* Processing pipeline */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-indigo)]">PROCESSING PIPELINE</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">Docker-based</span>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--system-blue)] flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div className="flex-1 p-3 rounded-lg bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20">
                      <span className="text-sm text-[var(--system-blue)]">Select processing type</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-4 h-4 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--system-orange)] flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div className="flex-1 p-3 rounded-lg bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20">
                      <span className="text-sm text-[var(--system-orange)]">Configure inputs & model</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-4 h-4 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--picsellia-green)] flex items-center justify-center text-white text-xs font-bold">3</div>
                    <div className="flex-1 p-3 rounded-lg bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
                      <span className="text-sm text-[var(--picsellia-green)]">Run & review results</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--tertiary-label)]">GPU/CPU configurable</span>
                    <span className="text-[var(--secondary-label)]">Scalable infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Quality Control
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Built-in review workflow
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Every annotation goes through a structured review process.
              Accept, reject, or send back for revision with full traceability.
            </p>
          </div>

          {/* Status flow */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
              <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]" />
              <span className="text-sm font-medium text-[var(--label)]">To Review</span>
            </div>
            <svg className="w-6 h-6 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20">
              <div className="w-3 h-3 rounded-full bg-[var(--picsellia-green)]" />
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Accepted</span>
            </div>
            <span className="text-sm text-[var(--tertiary-label)]">or</span>
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--system-red)]/10 border border-[var(--system-red)]/20">
              <div className="w-3 h-3 rounded-full bg-[var(--system-red)]" />
              <span className="text-sm font-medium text-[var(--system-red)]">Rejected</span>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Auto-lock on review</h3>
              <p className="text-sm text-[var(--tertiary-label)]">Reviewed annotations are automatically locked to prevent accidental modifications.</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Return to edit mode</h3>
              <p className="text-sm text-[var(--tertiary-label)]">Clear review status to unlock and continue editing when needed.</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Full traceability</h3>
              <p className="text-sm text-[var(--tertiary-label)]">Track who annotated what and when with complete audit history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--system-blue)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--system-blue)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Ready to accelerate labeling?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                Start annotating with AI-assisted tools and built-in
                review workflows. Free trial, no credit card.
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

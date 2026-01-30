import React from 'react';

export const annotationTypes = [
  {
    name: 'Object Detection',
    description: 'Bounding boxes with two clicks',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} strokeDasharray="4 2" />
        <rect x="6" y="8" width="8" height="6" rx="1" strokeWidth={2} />
      </svg>
    ),
    color: 'var(--picsellia-blue)',
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

export const shortcuts = [
  { keys: ['D'], action: 'Draw mode' },
  { keys: ['Esc'], action: 'Selection mode' },
  { keys: ['R'], action: 'Reset zoom' },
  { keys: ['O', 'P'], action: 'Navigate assets' },
  { keys: ['⌘', 'S'], action: 'Save annotations' },
  { keys: ['Del'], action: 'Delete shape' },
];

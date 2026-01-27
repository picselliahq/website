'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Simulated detection boxes that animate
const detections = [
  { id: 1, label: 'model', confidence: 98.5, x: 8, y: 15, w: 25, h: 30 },
  { id: 2, label: 'dataset', confidence: 95.2, x: 65, y: 10, w: 28, h: 25 },
  { id: 3, label: 'pipeline', confidence: 97.8, x: 38, y: 55, w: 24, h: 35 },
  { id: 4, label: 'deploy', confidence: 99.1, x: 70, y: 50, w: 22, h: 28 },
];

export default function CTA() {
  const [activeDetection, setActiveDetection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetection((prev) => (prev + 1) % detections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="card p-0 overflow-hidden relative">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(var(--picsellia-green) 1px, transparent 1px),
                  linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Scanning Line Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--picsellia-green)] to-transparent opacity-50"
              style={{
                animation: 'scan 3s ease-in-out infinite',
                top: '0%',
              }}
            />
          </div>

          {/* Detection Boxes */}
          <div className="absolute inset-0 pointer-events-none">
            {detections.map((det, index) => (
              <div
                key={det.id}
                className={`absolute transition-all duration-500 ${
                  index === activeDetection ? 'opacity-100' : 'opacity-30'
                }`}
                style={{
                  left: `${det.x}%`,
                  top: `${det.y}%`,
                  width: `${det.w}%`,
                  height: `${det.h}%`,
                }}
              >
                {/* Bounding Box */}
                <div className="absolute inset-0 border border-[var(--picsellia-green)]">
                  {/* Corner Brackets */}
                  <div className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[var(--picsellia-green)]" />
                  <div className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[var(--picsellia-green)]" />
                  <div className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[var(--picsellia-green)]" />
                  <div className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[var(--picsellia-green)]" />
                </div>

                {/* Label */}
                <div
                  className={`absolute -top-6 left-0 flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded transition-all duration-500 ${
                    index === activeDetection
                      ? 'bg-[var(--picsellia-green)] text-[var(--black)]'
                      : 'bg-[var(--picsellia-green)]/20 text-[var(--picsellia-green)]'
                  }`}
                >
                  <span>{det.label}</span>
                  <span className="opacity-70">{det.confidence}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Crosshair Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
            <div className="w-32 h-32 relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--picsellia-green)]" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--picsellia-green)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-[var(--picsellia-green)] rounded-full" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20 text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]"></span>
              </span>
              <span className="text-xs font-mono text-[var(--picsellia-green)]">
                SYSTEM_READY
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
              Start detecting in minutes
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
              From raw images to production inference. Build, train, and deploy
              computer vision models with enterprise-grade infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/trial" className="btn-primary px-8 py-3 text-base relative group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/demo" className="btn-secondary px-8 py-3 text-base">
                Schedule Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--tertiary-label)]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>SOC2 & ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
              {[
                { value: '50M+', label: 'Images processed' },
                { value: '<100ms', label: 'Inference latency' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 md:p-6 text-center">
                  <div className="text-lg md:text-xl font-bold text-[var(--label)] font-mono">{stat.value}</div>
                  <div className="text-xs text-[var(--tertiary-label)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          50% { top: 100%; opacity: 0.5; }
          60% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

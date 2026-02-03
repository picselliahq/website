'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

interface PricingCalculatorProps {
  billingCycle: 'monthly' | 'annual';
}

const modules = [
  {
    id: 'data-engine' as const,
    name: 'Data Engine',
    description: 'Data management & versioning',
    monthlyPrice: 1000,
    annualPrice: 12000,
    extraUserMonthly: 500,
    extraUserAnnual: 6000,
    color: 'var(--system-blue)',
    standalone: true,
  },
  {
    id: 'visionai-factory' as const,
    name: 'VisionAI Factory',
    description: 'Model training & deployment',
    monthlyPrice: 250,
    annualPrice: 3000,
    extraUserMonthly: 75,
    extraUserAnnual: 900,
    color: 'var(--picsellia-green)',
    requiresDataEngine: true,
  },
  {
    id: 'reliability-engine' as const,
    name: 'Reliability Engine',
    description: 'Monitoring & drift detection',
    monthlyPrice: 500,
    annualPrice: 6000,
    extraUserMonthly: 150,
    extraUserAnnual: 1800,
    color: 'var(--system-orange)',
    requiresDataEngine: true,
  },
];

type ModuleId = 'data-engine' | 'visionai-factory' | 'reliability-engine';

const dpuTiersNumeric = [
  { max: 16667, price: 0.80 },
  { max: 41667, price: 0.72 },
  { max: 83333, price: 0.656 },
  { max: 166667, price: 0.568 },
  { max: 333333, price: 0.48 },
  { max: 1666667, price: 0.32 },
];

const muTiersNumeric = [
  { max: 1000, price: 1.00 },
  { max: 2500, price: 0.72 },
  { max: 5000, price: 0.656 },
  { max: 10000, price: 0.568 },
  { max: 20000, price: 0.48 },
  { max: 100000, price: 0.40 },
];

function getTierPrice(volume: number, tiers: { max: number; price: number }[]): number {
  for (const tier of tiers) {
    if (volume <= tier.max) return tier.price;
  }
  return tiers[tiers.length - 1].price;
}


function formatCurrency(value: number): string {
  const rounded = Math.round(value);
  const parts: string[] = [];
  let n = Math.abs(rounded);
  if (n === 0) return '€0';
  while (n > 0) {
    parts.unshift(String(n % 1000));
    n = Math.floor(n / 1000);
    if (n > 0) parts[0] = parts[0].padStart(3, '0');
  }
  return `${rounded < 0 ? '-' : ''}€${parts.join(',')}`;
}

function formatNumber(value: number): string {
  const parts: string[] = [];
  let n = Math.abs(Math.round(value));
  if (n === 0) return '0';
  while (n > 0) {
    parts.unshift(String(n % 1000));
    n = Math.floor(n / 1000);
    if (n > 0) parts[0] = parts[0].padStart(3, '0');
  }
  return parts.join(',');
}

export default function PricingCalculator({ billingCycle }: PricingCalculatorProps) {
  const [selectedModules, setSelectedModules] = useState<Record<ModuleId, boolean>>({
    'data-engine': true,
    'visionai-factory': false,
    'reliability-engine': false,
  });
  const [extraUsers, setExtraUsers] = useState<Record<ModuleId, number>>({
    'data-engine': 0,
    'visionai-factory': 0,
    'reliability-engine': 0,
  });
  const [labelerSeats, setLabelerSeats] = useState(0);
  const [dpuVolume, setDpuVolume] = useState(0);
  const [muVolume, setMuVolume] = useState(0);
  const [gpuHours, setGpuHours] = useState(0);

  function toggleModule(id: ModuleId) {
    setSelectedModules((prev) => {
      const next = { ...prev };
      if (id === 'data-engine') {
        // Can't deselect if other modules depend on it
        if (prev['data-engine'] && (prev['visionai-factory'] || prev['reliability-engine'])) return prev;
        next['data-engine'] = !prev['data-engine'];
      } else {
        next[id] = !prev[id];
        // Auto-enable Data Engine
        if (next[id]) next['data-engine'] = true;
      }
      return next;
    });
  }

  const estimate = useMemo(() => {
    const items: { label: string; amount: number; color: string }[] = [];

    for (const mod of modules) {
      if (!selectedModules[mod.id]) continue;
      const base = billingCycle === 'monthly' ? mod.monthlyPrice : mod.annualPrice / 12;
      items.push({ label: mod.name, amount: base, color: mod.color });

      const users = extraUsers[mod.id];
      if (users > 0) {
        const userCost = billingCycle === 'monthly' ? mod.extraUserMonthly * users : (mod.extraUserAnnual / 12) * users;
        items.push({ label: `${mod.name} extra users (${users})`, amount: userCost, color: mod.color });
      }
    }

    if (labelerSeats > 0) {
      const labelerCost = billingCycle === 'monthly' ? labelerSeats * 10 : labelerSeats * 10;
      items.push({ label: `Labeler seats (${labelerSeats})`, amount: labelerCost, color: 'var(--secondary-label)' });
    }

    if (dpuVolume > 0 && selectedModules['data-engine']) {
      const annualDpu = dpuVolume * 12;
      const unitPrice = getTierPrice(annualDpu, dpuTiersNumeric);
      items.push({ label: `DPU usage (${formatNumber(dpuVolume)}/mo)`, amount: dpuVolume * unitPrice, color: 'var(--system-blue)' });
    }

    if (muVolume > 0 && selectedModules['reliability-engine']) {
      const annualMu = muVolume * 12;
      const unitPrice = getTierPrice(annualMu, muTiersNumeric);
      items.push({ label: `MU usage (${formatNumber(muVolume)}/mo)`, amount: muVolume * unitPrice, color: 'var(--system-orange)' });
    }

    if (gpuHours > 0) {
      items.push({ label: `GPU compute (${gpuHours}h)`, amount: gpuHours * 3.5, color: 'var(--system-indigo)' });
    }

    const total = items.reduce((sum, item) => sum + item.amount, 0);
    return { items, total };
  }, [selectedModules, extraUsers, labelerSeats, dpuVolume, muVolume, gpuHours, billingCycle]);

  return (
    <section className="py-20 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-blue) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Cost Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Estimate your monthly cost
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Configure your platform setup and usage to get an instant cost estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-6">
            {/* Module Selection */}
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-[var(--label)] mb-4 uppercase tracking-wider">Select Modules</h3>
              <div className="space-y-3">
                {modules.map((mod) => {
                  const selected = selectedModules[mod.id];
                  return (
                    <button
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`w-full text-left p-4 rounded-lg border-l-[3px] border transition-all ${
                        selected
                          ? 'bg-[var(--tertiary-system-background)] border-[var(--border)]'
                          : 'border-transparent border-r border-t border-b border-r-[var(--border)] border-t-[var(--border)] border-b-[var(--border)] opacity-60 hover:opacity-80'
                      }`}
                      style={{ borderLeftColor: selected ? mod.color : 'var(--border)' }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-[var(--label)]">{mod.name}</div>
                          <div className="text-xs text-[var(--tertiary-label)]">{mod.description}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-sm font-mono font-semibold text-[var(--label)]">
                              {formatCurrency(billingCycle === 'monthly' ? mod.monthlyPrice : mod.annualPrice / 12)}
                            </div>
                            <div className="text-[10px] text-[var(--tertiary-label)]">/month</div>
                          </div>
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            selected ? 'border-current' : 'border-[var(--border)]'
                          }`} style={{ color: selected ? mod.color : undefined }}>
                            {selected && (
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Extra Users */}
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-[var(--label)] mb-4 uppercase tracking-wider">Additional Users</h3>
              <p className="text-xs text-[var(--tertiary-label)] mb-4">Each module includes 3 seats. Add more users below.</p>
              <div className="space-y-4">
                {modules.map((mod) => {
                  if (!selectedModules[mod.id]) return null;
                  const userCost = billingCycle === 'monthly' ? mod.extraUserMonthly : Math.round(mod.extraUserAnnual / 12);
                  return (
                    <div key={mod.id} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-[var(--label)]">{mod.name}</div>
                        <div className="text-[10px] text-[var(--tertiary-label)]">{formatCurrency(userCost)}/user/mo</div>
                      </div>
                      <Stepper value={extraUsers[mod.id]} onChange={(v) => setExtraUsers((prev) => ({ ...prev, [mod.id]: v }))} max={50} />
                    </div>
                  );
                })}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[var(--label)]">Labeler Seats</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">{formatCurrency(10)}/seat/mo</div>
                  </div>
                  <Stepper value={labelerSeats} onChange={setLabelerSeats} max={100} />
                </div>
              </div>
            </div>

            {/* Usage Volumes */}
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-[var(--label)] mb-4 uppercase tracking-wider">Estimated Usage</h3>

              {selectedModules['data-engine'] && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm text-[var(--label)]">Data Processing Units (DPU)</label>
                    <span className="text-xs text-[var(--tertiary-label)]">60 imgs = 1 DPU</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    step={100}
                    value={Math.min(dpuVolume, 20000)}
                    onChange={(e) => setDpuVolume(Number(e.target.value))}
                    className="w-full mb-2 accent-[var(--system-blue)]"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={1666667}
                      value={dpuVolume}
                      onChange={(e) => setDpuVolume(Math.max(0, Number(e.target.value)))}
                      className="w-32 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--tertiary-system-background)] text-sm font-mono text-[var(--label)] focus:outline-none focus:border-[var(--system-blue)]"
                    />
                    <span className="text-xs text-[var(--tertiary-label)]">DPUs/month</span>
                    {dpuVolume > 0 && (
                      <span className="ml-auto text-xs font-mono text-[var(--system-blue)]">
                        @ €{getTierPrice(dpuVolume * 12, dpuTiersNumeric).toFixed(3)}/DPU
                      </span>
                    )}
                  </div>
                  {dpuVolume > 0 && (
                    <p className="text-xs text-[var(--tertiary-label)] mt-2">
                      Corresponds to <span className="font-mono text-[var(--secondary-label)]">{formatNumber(dpuVolume * 60)}</span> new images every month
                    </p>
                  )}
                </div>
              )}

              {selectedModules['reliability-engine'] && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm text-[var(--label)]">Monitoring Units (MU)</label>
                    <span className="text-xs text-[var(--tertiary-label)]">1,000 predictions = 1 MU</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    step={100}
                    value={Math.min(muVolume, 20000)}
                    onChange={(e) => setMuVolume(Number(e.target.value))}
                    className="w-full mb-2 accent-[var(--system-orange)]"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={100000}
                      value={muVolume}
                      onChange={(e) => setMuVolume(Math.max(0, Number(e.target.value)))}
                      className="w-32 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--tertiary-system-background)] text-sm font-mono text-[var(--label)] focus:outline-none focus:border-[var(--system-orange)]"
                    />
                    <span className="text-xs text-[var(--tertiary-label)]">MUs/month</span>
                  </div>
                  {muVolume > 0 && (
                    <p className="text-xs text-[var(--tertiary-label)] mt-2">
                      Corresponds to <span className="font-mono text-[var(--secondary-label)]">{formatNumber(muVolume * 1000)}</span> monitored predictions every month
                    </p>
                  )}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-[var(--label)]">GPU Compute Hours</label>
                  <span className="text-xs text-[var(--tertiary-label)]">{formatCurrency(3.5)}/hour</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    max={10000}
                    value={gpuHours}
                    onChange={(e) => setGpuHours(Math.max(0, Number(e.target.value)))}
                    className="w-32 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--tertiary-system-background)] text-sm font-mono text-[var(--label)] focus:outline-none focus:border-[var(--system-indigo)]"
                  />
                  <span className="text-xs text-[var(--tertiary-label)]">hours/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="card p-6 sticky top-28">
              <h3 className="text-sm font-semibold text-[var(--label)] mb-6 uppercase tracking-wider">Monthly Estimate</h3>

              {estimate.items.length === 0 ? (
                <p className="text-sm text-[var(--tertiary-label)] py-8 text-center">Select at least one module to see your estimate.</p>
              ) : (
                <>
                  <div className="space-y-3 mb-6">
                    {estimate.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-[var(--secondary-label)]">{item.label}</span>
                        </div>
                        <span className="font-mono text-[var(--label)]">{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[var(--border)] pt-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--label)]">Estimated Total</span>
                      <span className="text-2xl font-bold font-mono text-[var(--label)]">{formatCurrency(estimate.total)}</span>
                    </div>
                    <div className="text-xs text-[var(--tertiary-label)] text-right mt-1">per month</div>
                    {billingCycle === 'annual' && (
                      <div className="text-xs text-[var(--picsellia-green)] text-right mt-1">
                        {formatCurrency(estimate.total * 12)}/year billed annually
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className="space-y-3">
                <Link href="/trial" className="btn-primary w-full justify-center px-6 py-3 text-sm">
                  Start Free Trial
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary w-full justify-center px-6 py-3 text-sm">
                  Contact Sales
                </Link>
              </div>

              <p className="text-[10px] text-[var(--tertiary-label)] mt-4 text-center">
                Estimates are approximate. Final pricing may vary based on specific usage patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stepper({ value, onChange, max }: { value: number; onChange: (v: number) => void; max: number }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        className="w-8 h-8 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors"
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </button>
      <span className="font-mono text-sm w-8 text-center text-[var(--label)]">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-8 h-8 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center text-[var(--secondary-label)] hover:text-[var(--label)] transition-colors"
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}

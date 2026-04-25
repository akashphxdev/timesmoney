'use client';
import { useState, useCallback } from 'react';

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

const calcOldRegime = (income: number, ded80C: number, ded80D: number, hra: number, stdDed: number) => {
  const taxable = Math.max(0, income - stdDed - ded80C - ded80D - hra);
  let tax = 0;
  if (taxable > 1000000) tax += (taxable - 1000000) * 0.3;
  if (taxable > 500000) tax += (Math.min(taxable, 1000000) - 500000) * 0.2;
  if (taxable > 250000) tax += (Math.min(taxable, 500000) - 250000) * 0.05;
  if (taxable <= 500000) tax = 0; // rebate 87A
  const cess = tax * 0.04;
  return { tax, cess, total: tax + cess, taxable };
};

const calcNewRegime = (income: number) => {
  const stdDed = 75000;
  const taxable = Math.max(0, income - stdDed);
  let tax = 0;
  if (taxable > 1500000) tax += (taxable - 1500000) * 0.3;
  if (taxable > 1200000) tax += (Math.min(taxable, 1500000) - 1200000) * 0.2;
  if (taxable > 1000000) tax += (Math.min(taxable, 1200000) - 1000000) * 0.15;
  if (taxable > 700000) tax += (Math.min(taxable, 1000000) - 700000) * 0.1;
  if (taxable > 400000) tax += (Math.min(taxable, 700000) - 400000) * 0.05;
  if (taxable <= 700000) tax = 0; // rebate 87A new
  const cess = tax * 0.04;
  return { tax, cess, total: tax + cess, taxable };
};

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1200000);
  const [ded80C, setDed80C] = useState(150000);
  const [ded80D, setDed80D] = useState(25000);
  const [hraExemption, setHraExemption] = useState(60000);

  const old = calcOldRegime(income, ded80C, ded80D, hraExemption, 50000);
  const newR = calcNewRegime(income);
  const better = old.total <= newR.total ? 'old' : 'new';
  const savings = Math.abs(old.total - newR.total);

  return (
    <div className="font-sans">
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Income Tax Calculator</h1>
              <p className="text-xs text-white/70">FY 2024–25 · Old vs New Regime</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Compare Old and New Tax Regimes and find which saves you more tax for FY 2024–25.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(old.total), label: 'Old Regime Tax' }, { val: formatINR(newR.total), label: 'New Regime Tax' }, { val: formatINR(savings), label: `Save with ${better === 'old' ? 'Old' : 'New'}` }].map(s => (
              <div key={s.label} className="bg-white/15 rounded-xl px-4 py-3">
                <p className="text-base font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>{s.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/65 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6 items-start">
          <div>
            {/* Recommendation banner */}
            <div className={`flex items-center gap-3 rounded-xl p-4 mb-5 ${better === 'new' ? 'bg-brand-teal/10 border border-brand-teal/30' : 'bg-amber-50 border border-amber-200'}`}>
              <svg width="18" height="18" fill="none" stroke={better === 'new' ? '#0d9488' : '#d97706'} viewBox="0 0 24 24" strokeWidth={2} className="flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className={`text-sm font-medium ${better === 'new' ? 'text-brand-teal' : 'text-amber-700'}`}>
                <strong>{better === 'new' ? 'New Regime' : 'Old Regime'}</strong> saves you <strong>{formatINR(savings)}</strong> more this year.
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Income & Deductions</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Annual Income (CTC)', value: income, min: 250000, max: 10000000, step: 50000, prefix: '₹', onChange: setIncome, minLabel: '₹2.5L', maxLabel: '₹1 Cr' },
                { label: 'Section 80C (PF, LIC, ELSS)', value: ded80C, min: 0, max: 150000, step: 5000, prefix: '₹', onChange: setDed80C, minLabel: '₹0', maxLabel: '₹1.5L' },
                { label: 'Section 80D (Health Insurance)', value: ded80D, min: 0, max: 100000, step: 5000, prefix: '₹', onChange: setDed80D, minLabel: '₹0', maxLabel: '₹1L' },
                { label: 'HRA Exemption (Annual)', value: hraExemption, min: 0, max: 600000, step: 5000, prefix: '₹', onChange: setHraExemption, minLabel: '₹0', maxLabel: '₹6L' },
              ].map(({ label, value, min, max, step, prefix, onChange, minLabel, maxLabel }) => (
                <div key={label} className="py-5 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      <span className="text-xs text-slate-400">{prefix}</span>
                      <input type="number" value={value} min={min} max={max} step={step} onChange={(e) => onChange(Number(e.target.value))} className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-24" />
                    </div>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-brand-teal cursor-pointer" />
                  <div className="flex justify-between mt-2"><span className="text-[11px] text-slate-400">{minLabel}</span><span className="text-[11px] text-slate-400">{maxLabel}</span></div>
                </div>
              ))}
            </div>

            {/* Side-by-side comparison */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Regime Comparison</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: 'Old Regime', data: old, isBetter: better === 'old' }, { label: 'New Regime', data: newR, isBetter: better === 'new' }].map(({ label, data, isBetter }) => (
                  <div key={label} className={`rounded-xl p-4 border ${isBetter ? 'border-brand-teal bg-brand-teal/5' : 'border-gray-100 bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <p className={`text-sm font-semibold ${isBetter ? 'text-brand-teal' : 'text-slate-700'}`}>{label}</p>
                      {isBetter && <span className="text-[10px] bg-brand-teal text-white px-2 py-0.5 rounded-full font-medium">Better</span>}
                    </div>
                    {[{ k: 'Taxable Income', v: formatINR(data.taxable) }, { k: 'Tax Amount', v: formatINR(data.tax) }, { k: 'Health & Ed. Cess', v: formatINR(data.cess) }, { k: 'Total Tax', v: formatINR(data.total) }].map(r => (
                      <div key={r.k} className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
                        <span className="text-xs text-slate-500">{r.k}</span>
                        <span className={`text-xs font-semibold ${r.k === 'Total Tax' ? (isBetter ? 'text-brand-teal' : 'text-slate-800') : 'text-slate-700'}`}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Old vs <span className="text-brand-teal">New Regime</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">The New Regime (introduced in FY21) offers lower tax rates but no deductions. The Old Regime allows deductions under 80C, 80D, HRA etc. If your total deductions exceed ~₹3.75L, the Old Regime is typically better.</p>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> This is an approximate calculator for FY 2024-25. Surcharge, professional tax, and other specific deductions are not included. Consult a CA for accurate filing.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className={`rounded-2xl p-6 ${better === 'new' ? 'bg-brand-teal' : 'bg-amber-500'}`}>
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Recommended Regime</p>
              <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{better === 'new' ? 'New Regime' : 'Old Regime'}</p>
              <p className="text-sm text-white/75 mt-1">saves {formatINR(savings)} more</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Old Regime</p>
              {[{ label: 'Gross Income', value: formatINR(income) }, { label: 'Total Deductions', value: formatINR(50000 + ded80C + ded80D + hraExemption) }, { label: 'Taxable Income', value: formatINR(old.taxable) }, { label: 'Net Tax + Cess', value: formatINR(old.total) }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm text-slate-500">{row.label}</span>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3">New Regime</p>
                {[{ label: 'Taxable Income', value: formatINR(newR.taxable) }, { label: 'Net Tax + Cess', value: formatINR(newR.total) }].map(row => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-sm text-slate-500">{row.label}</span>
                    <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                  </div>
                ))}
              </div>
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                File ITR Now <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
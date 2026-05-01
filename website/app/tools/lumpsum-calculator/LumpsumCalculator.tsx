'use client';
import { useState, useCallback } from 'react';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/dist/client/link';
const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function LumpsumCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const calc = useCallback(() => {
    const fv = principal * Math.pow(1 + rate / 100, years);
    const gains = fv - principal;
    const cagr = rate;
    return { fv, gains, cagr };
  }, [principal, rate, years]);

  const { fv, gains } = calc();

  return (
    <div className="font-sans">
      <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Lumpsum Calculator</h1>
              <p className="text-xs text-white/70">One-time Mutual Fund Investment</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Calculate returns on a one-time investment in mutual funds. See how a single investment grows with compounding over time.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(fv), label: 'Future Value' }, { val: formatINR(gains), label: 'Total Gains' }, { val: rate + '% CAGR', label: 'Return Rate' }].map(s => (
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
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Investment Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Investment Amount', value: principal, min: 1000, max: 10000000, step: 1000, prefix: '₹', onChange: setPrincipal, minLabel: '₹1,000', maxLabel: '₹1 Cr' },
                { label: 'Expected Return (CAGR)', value: rate, min: 1, max: 30, step: 0.5, suffix: '%', onChange: setRate, minLabel: '1%', maxLabel: '30%' },
                { label: 'Time Period', value: years, min: 1, max: 40, step: 1, suffix: 'Yr', onChange: setYears, minLabel: '1 Year', maxLabel: '40 Years' },
              ].map(({ label, value, min, max, step, prefix, suffix, onChange, minLabel, maxLabel }) => (
                <div key={label} className="py-5 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      {prefix && <span className="text-xs text-slate-400">{prefix}</span>}
                      <input type="number" value={value} min={min} max={max} step={step} onChange={(e) => onChange(Number(e.target.value))} className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-20" />
                      {suffix && <span className="text-xs text-slate-400">{suffix}</span>}
                    </div>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-brand-teal cursor-pointer" />
                  <div className="flex justify-between mt-2"><span className="text-[11px] text-slate-400">{minLabel}</span><span className="text-[11px] text-slate-400">{maxLabel}</span></div>
                </div>
              ))}
            </div>

            {/* Growth timeline */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Investment Growth Timeline</p>
              <div className="space-y-3">
                {[1, 3, 5, 10, 15, 20].filter(y => y <= years).concat(years % 5 !== 0 && years > 1 ? [years] : []).filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b).map(y => {
                  const val = principal * Math.pow(1 + rate / 100, y);
                  const pct = Math.round(((val - principal) / (fv - principal || 1)) * 100);
                  return (
                    <div key={y}>
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Year {y}</span>
                        <span className="font-semibold text-slate-700">{formatINR(val)} <span className="text-brand-teal font-normal">({((val / principal - 1) * 100).toFixed(0)}% gain)</span></span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-teal rounded-full transition-all" style={{ width: `${Math.max(pct, 3)}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Lumpsum vs <span className="text-brand-teal">SIP</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">A lumpsum investment is ideal when you have a large sum available and expect markets to rise. SIP is better for regular investing without timing the market.</p>
              <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4 mb-6">
                <p className="font-mono text-sm text-slate-800 mb-2">FV = P × (1 + r)ⁿ</p>
                <p className="text-[11px] text-slate-400">FV = Future Value · P = Principal · r = Annual rate · n = Years</p>
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> Mutual fund investments are subject to market risks. Past returns do not guarantee future performance.</p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
             <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Future Value</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(fv)}</p>
              <p className="text-xs text-white/60 mt-1">after {years} year{years > 1 ? 's' : ''}</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Breakdown</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-brand-teal rounded-full transition-all duration-500" style={{ width: `${Math.round((principal / fv) * 100)}%` }} />
              </div>
              {[{ label: 'Invested Amount', value: formatINR(principal), color: 'bg-brand-teal' }, { label: 'Total Gains', value: formatINR(gains), color: 'bg-gray-300' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Future Value</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(fv)}</span>
              </div>
              <Link href="/apply">
                <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn cursor-pointer">
                  Invest Now
                  <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">Invest during <span className="font-semibold text-slate-700">market corrections</span> to maximize lumpsum returns over the long term.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
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

export default function RDCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(3);

  const calc = useCallback(() => {
    const n = years * 12;
    const r = rate / 400;
    const maturity = monthly * (Math.pow(1 + r, n) - 1) / (1 - Math.pow(1 + r, -1 / 3));
    const invested = monthly * n;
    const interest = maturity - invested;
    return { maturity, invested, interest };
  }, [monthly, rate, years]);

  const { maturity, invested, interest } = calc();

  return (
    <div className="font-sans">
       <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>RD Calculator</h1>
              <p className="text-xs text-white/70">Recurring Deposit Returns</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Calculate the maturity value of your Recurring Deposit with monthly contributions over time.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(maturity), label: 'Maturity Value' }, { val: formatINR(invested), label: 'Total Invested' }, { val: formatINR(interest), label: 'Interest Earned' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">RD Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Monthly Deposit', value: monthly, min: 100, max: 100000, step: 100, prefix: '₹', onChange: setMonthly, minLabel: '₹100', maxLabel: '₹1,00,000' },
                { label: 'Interest Rate (p.a.)', value: rate, min: 1, max: 15, step: 0.1, suffix: '%', onChange: setRate, minLabel: '1%', maxLabel: '15%' },
                { label: 'Time Period (Years)', value: years, min: 1, max: 10, step: 1, suffix: 'Yr', onChange: setYears, minLabel: '1 Year', maxLabel: '10 Years' },
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
            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>What is <span className="text-brand-teal">RD?</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">A Recurring Deposit allows you to deposit a fixed amount every month and earn interest on it. It's ideal for salaried individuals who want to save systematically.</p>
              <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4 mb-6">
                <p className="font-mono text-sm text-slate-800 mb-2">M = R × [(1+r)ⁿ - 1] / (1-(1+r)^(-1/3))</p>
                <p className="text-[11px] text-slate-400">M = Maturity · R = Monthly deposit · r = Quarterly rate · n = Quarters</p>
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> RD interest is taxable as per your income tax slab. TDS applies if interest exceeds ₹40,000/year.</p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Maturity Amount</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(maturity)}</p>
              <p className="text-xs text-white/60 mt-1">after {years} year{years > 1 ? 's' : ''}</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Breakdown</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-brand-teal rounded-full transition-all duration-500" style={{ width: `${Math.round((invested / maturity) * 100)}%` }} />
              </div>
              {[{ label: 'Total Invested', value: formatINR(invested), color: 'bg-brand-teal' }, { label: 'Interest Earned', value: formatINR(interest), color: 'bg-gray-300' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Total Value</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(maturity)}</span>
              </div>
             <Link href="/apply">
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn cursor-pointer">
                Open RD Account
                <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
            </div>
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">RD interest is compounded <span className="font-semibold text-slate-700">quarterly</span> in India, making it more rewarding than simple interest savings.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
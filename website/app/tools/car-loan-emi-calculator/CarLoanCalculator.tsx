'use client';
import { useState, useCallback } from 'react';

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState(800000);
  const [downPayment, setDownPayment] = useState(200000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(5);

  const calc = useCallback(() => {
    const principal = carPrice - downPayment;
    const months = tenure * 12;
    const r = rate / 12 / 100;
    const emi = principal > 0 ? (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1) : 0;
    const total = emi * months;
    const interest = total - principal;
    const downPct = Math.round((downPayment / carPrice) * 100);
    return { principal, emi, total, interest, downPct, months };
  }, [carPrice, downPayment, rate, tenure]);

  const { principal, emi, total, interest, downPct, months } = calc();

  return (
    <div className="font-sans">
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-.001M13 16H5m8 0l2-8h3l2 5.5M13 16h4" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Car Loan Calculator</h1>
              <p className="text-xs text-white/70">Plan Your Dream Car Purchase</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Calculate your monthly EMI for a car loan. Enter the car price, down payment and loan details to plan your purchase.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(emi) + '/mo', label: 'Monthly EMI' }, { val: formatINR(principal), label: 'Loan Amount' }, { val: formatINR(interest), label: 'Total Interest' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Car Loan Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Car Price (On-road)', value: carPrice, min: 100000, max: 10000000, step: 10000, prefix: '₹', onChange: setCarPrice, minLabel: '₹1L', maxLabel: '₹1 Cr' },
                { label: 'Down Payment', value: downPayment, min: 0, max: carPrice * 0.9, step: 10000, prefix: '₹', onChange: setDownPayment, minLabel: '₹0', maxLabel: formatINR(carPrice * 0.9) },
                { label: 'Interest Rate (p.a.)', value: rate, min: 6, max: 20, step: 0.1, suffix: '%', onChange: setRate, minLabel: '6%', maxLabel: '20%' },
                { label: 'Loan Tenure', value: tenure, min: 1, max: 7, step: 1, suffix: 'Yr', onChange: setTenure, minLabel: '1 Year', maxLabel: '7 Years' },
              ].map(({ label, value, min, max, step, prefix, suffix, onChange, minLabel, maxLabel }) => (
                <div key={label} className="py-5 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      {prefix && <span className="text-xs text-slate-400">{prefix}</span>}
                      <input type="number" value={value} min={min} max={max} step={step} onChange={(e) => onChange(Number(e.target.value))} className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-24" />
                      {suffix && <span className="text-xs text-slate-400">{suffix}</span>}
                    </div>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-brand-teal cursor-pointer" />
                  <div className="flex justify-between mt-2"><span className="text-[11px] text-slate-400">{minLabel}</span><span className="text-[11px] text-slate-400">{maxLabel}</span></div>
                </div>
              ))}
            </div>

            {/* Down payment insight */}
            <div className="mt-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3">Down Payment Analysis</p>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-teal rounded-full transition-all" style={{ width: `${downPct}%` }} />
                </div>
                <span className="text-sm font-semibold text-slate-700 w-12 text-right">{downPct}%</span>
              </div>
              <p className="text-xs text-slate-500">You're paying <span className="font-semibold text-slate-700">{downPct}%</span> ({formatINR(downPayment)}) upfront. Higher down payment = lower EMI and less interest.</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Car Loan <span className="text-brand-teal">Tips</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[{ title: 'Down Payment', desc: 'Pay at least 20% down to keep EMI affordable and reduce total interest.' }, { title: 'Loan Tenure', desc: 'Shorter tenure = higher EMI but much less interest paid overall.' }, { title: 'Compare Banks', desc: 'Rate can vary 2–4% across lenders. Compare before applying.' }, { title: 'Prepayment', desc: 'Prepay whenever possible — even 1 extra EMI/year saves significantly.' }].map(b => (
                  <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> Actual loan terms may vary. Insurance, RTO charges, and processing fees are not included.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(emi)}</p>
              <p className="text-xs text-white/60 mt-1">for {months} months</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Cost Breakdown</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-brand-teal rounded-full transition-all duration-500" style={{ width: `${Math.round((principal / total) * 100)}%` }} />
              </div>
              {[{ label: 'Down Payment', value: formatINR(downPayment), color: 'bg-emerald-400' }, { label: 'Loan Amount', value: formatINR(principal), color: 'bg-brand-teal' }, { label: 'Total Interest', value: formatINR(interest), color: 'bg-gray-300' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Total Cost</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(total + downPayment)}</span>
              </div>
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                Apply for Car Loan <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
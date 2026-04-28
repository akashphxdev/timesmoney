'use client';
import { useState, useCallback } from 'react';
import AdBanner from '@/components/ads/AdBanner';

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function HomeLoanCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [downPayment, setDownPayment] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calc = useCallback(() => {
    const principal = propertyValue - downPayment;
    const months = tenure * 12;
    const r = rate / 12 / 100;
    const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    const total = emi * months;
    const interest = total - principal;
    const ltv = Math.round((principal / propertyValue) * 100);
    return { principal, emi, total, interest, ltv, months };
  }, [propertyValue, downPayment, rate, tenure]);

  const { principal, emi, total, interest, ltv, months } = calc();

  return (
    <div className="font-sans">
      <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Home Loan Calculator</h1>
              <p className="text-xs text-white/70">Plan Your Dream Home Purchase</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Calculate your home loan EMI, check eligibility and understand total cost of ownership for your dream home.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(emi) + '/mo', label: 'Monthly EMI' }, { val: formatINR(principal), label: 'Loan Amount' }, { val: ltv + '% LTV', label: 'Loan-to-Value' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Property & Loan Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Property Value', value: propertyValue, min: 500000, max: 100000000, step: 100000, prefix: '₹', onChange: setPropertyValue, minLabel: '₹5L', maxLabel: '₹10 Cr' },
                { label: 'Down Payment', value: downPayment, min: 0, max: propertyValue * 0.8, step: 50000, prefix: '₹', onChange: setDownPayment, minLabel: '₹0', maxLabel: formatINR(propertyValue * 0.8) },
                { label: 'Interest Rate (p.a.)', value: rate, min: 6.5, max: 15, step: 0.1, suffix: '%', onChange: setRate, minLabel: '6.5%', maxLabel: '15%' },
                { label: 'Loan Tenure', value: tenure, min: 5, max: 30, step: 1, suffix: 'Yr', onChange: setTenure, minLabel: '5 Years', maxLabel: '30 Years' },
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

            {/* Tax benefits */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[{ title: 'Section 80C', desc: 'Principal repayment up to ₹1.5L deductible' }, { title: 'Section 24(b)', desc: 'Interest up to ₹2L/year deductible (self-occupied)' }, { title: 'Section 80EEA', desc: 'Extra ₹1.5L for first-time buyers (affordable housing)' }, { title: 'PMAY Subsidy', desc: 'Credit-linked subsidy up to ₹2.67L for eligible buyers' }].map(b => (
                <div key={b.title} className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                  <p className="text-xs text-slate-500">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Home Loan <span className="text-brand-teal">Tax Benefits</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Home loans offer significant tax deductions — up to ₹3.5L per year when combining 80C (principal), 24(b) (interest), and 80EEA (first-time buyer). This makes home loans one of the most tax-efficient borrowings available.</p>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> Tax benefits are subject to IT Act provisions and may vary. Consult a financial advisor for accurate guidance.</p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
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
                Apply for Home Loan <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">Making just <span className="font-semibold text-slate-700">one extra EMI per year</span> can reduce your home loan by 3–4 years.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
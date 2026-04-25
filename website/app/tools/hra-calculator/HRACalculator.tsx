'use client';
import { useState, useCallback } from 'react';

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState(50000);
  const [hraReceived, setHraReceived] = useState(20000);
  const [rentPaid, setRentPaid] = useState(18000);
  const [isMetro, setIsMetro] = useState(true);

  const calc = useCallback(() => {
    const annual = { basic: basicSalary * 12, hra: hraReceived * 12, rent: rentPaid * 12 };
    const metroPct = isMetro ? 0.5 : 0.4;
    const exemption = Math.min(
      annual.hra,
      annual.rent - 0.1 * annual.basic,
      metroPct * annual.basic
    );
    const taxableHRA = annual.hra - Math.max(0, exemption);
    return {
      exemption: Math.max(0, exemption),
      taxableHRA: Math.max(0, taxableHRA),
      annualHRA: annual.hra,
      monthly: {
        exemption: Math.max(0, Math.round(exemption / 12)),
        taxable: Math.max(0, Math.round(taxableHRA / 12)),
      }
    };
  }, [basicSalary, hraReceived, rentPaid, isMetro]);

  const { exemption, taxableHRA, annualHRA, monthly } = calc();

  return (
    <div className="font-sans">
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>HRA Calculator</h1>
              <p className="text-xs text-white/70">House Rent Allowance Exemption</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Calculate your HRA exemption under Section 10(13A) and reduce your taxable income effectively.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(exemption), label: 'Annual Exemption' }, { val: formatINR(monthly.exemption), label: 'Monthly Exempt' }, { val: formatINR(taxableHRA), label: 'Taxable HRA' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Salary Details</span>
            </div>

            {/* Metro toggle */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-4">
              <p className="text-sm font-medium text-slate-700 mb-3">City Type</p>
              <div className="grid grid-cols-2 gap-2">
                {[{ label: 'Metro City', sub: 'Delhi, Mumbai, Kolkata, Chennai', val: true }, { label: 'Non-Metro', sub: 'All other cities', val: false }].map(c => (
                  <button key={String(c.val)} onClick={() => setIsMetro(c.val)}
                    className={`p-3 rounded-xl border text-left transition-all ${isMetro === c.val ? 'border-brand-teal bg-brand-teal/5' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
                    <p className={`text-sm font-semibold ${isMetro === c.val ? 'text-brand-teal' : 'text-slate-700'}`}>{c.label}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{isMetro === c.val ? (c.val ? '50% of Basic' : '40% of Basic') : c.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Basic Salary (Monthly)', value: basicSalary, min: 5000, max: 500000, step: 1000, prefix: '₹', onChange: setBasicSalary, minLabel: '₹5,000', maxLabel: '₹5,00,000' },
                { label: 'HRA Received (Monthly)', value: hraReceived, min: 1000, max: 300000, step: 500, prefix: '₹', onChange: setHraReceived, minLabel: '₹1,000', maxLabel: '₹3,00,000' },
                { label: 'Rent Paid (Monthly)', value: rentPaid, min: 0, max: 300000, step: 500, prefix: '₹', onChange: setRentPaid, minLabel: '₹0', maxLabel: '₹3,00,000' },
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

            {/* Exemption logic breakdown */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">HRA Exemption Calculation (Least of 3)</p>
              {[
                { label: 'Actual HRA Received', value: annualHRA },
                { label: `${isMetro ? '50%' : '40%'} of Annual Basic`, value: Math.round((isMetro ? 0.5 : 0.4) * basicSalary * 12) },
                { label: 'Rent Paid − 10% of Basic', value: Math.max(0, rentPaid * 12 - 0.1 * basicSalary * 12) },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between items-center py-3 border-b border-gray-50 ${exemption === item.value ? 'text-brand-teal' : ''}`}>
                  <span className={`text-sm ${exemption === item.value ? 'font-semibold text-brand-teal' : 'text-slate-500'}`}>
                    {exemption === item.value && '✓ '}{item.label}
                  </span>
                  <span className={`text-sm font-semibold ${exemption === item.value ? 'text-brand-teal' : 'text-slate-700'}`}>{formatINR(item.value)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">HRA Exemption (Least)</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(exemption)}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About <span className="text-brand-teal">HRA Exemption</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">HRA exemption under Section 10(13A) is calculated as the minimum of: actual HRA received, rent paid minus 10% of basic, and 50%/40% of basic salary for metro/non-metro cities.</p>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Note:</span> HRA exemption is not available under the New Tax Regime. Rent receipts and landlord PAN (if rent &gt;₹1L/yr) are required.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Annual HRA Exemption</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(exemption)}</p>
              <p className="text-xs text-white/60 mt-1">{formatINR(monthly.exemption)}/month tax-free</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">HRA Summary</p>
              {[{ label: 'HRA Received (Annual)', value: formatINR(annualHRA), color: 'bg-brand-teal' }, { label: 'HRA Exempt', value: formatINR(exemption), color: 'bg-emerald-300' }, { label: 'Taxable HRA', value: formatINR(taxableHRA), color: 'bg-gray-300' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                File ITR with HRA <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
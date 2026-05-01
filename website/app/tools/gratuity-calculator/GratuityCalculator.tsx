'use client';
import { useState, useCallback } from 'react';
import AdBanner from '@/components/ads/AdBanner';
import Link from "next/link";

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function GratuityCalculator() {
  const [basicSalary, setBasicSalary] = useState(50000);
  const [yearsOfService, setYearsOfService] = useState(10);
  const [isGovtAct, setIsGovtAct] = useState(true); // covered under Gratuity Act or not

  const calc = useCallback(() => {
    // Formula under Payment of Gratuity Act: (Basic + DA) × 15/26 × Years
    // For non-covered: Basic × 15/30 × Years
    const gratuityActFormula = (basicSalary * 15 * yearsOfService) / 26;
    const nonActFormula = (basicSalary * 15 * yearsOfService) / 30;
    const gratuity = isGovtAct ? gratuityActFormula : nonActFormula;
    const taxFreeLimit = 2000000; // ₹20L tax free limit
    const taxableGratuity = Math.max(0, gratuity - taxFreeLimit);
    const isEligible = yearsOfService >= 5;
    return { gratuity, taxableGratuity, taxFreeLimit, isEligible, gratuityActFormula, nonActFormula };
  }, [basicSalary, yearsOfService, isGovtAct]);

  const { gratuity, taxableGratuity, taxFreeLimit, isEligible } = calc();

  return (
    <div className="font-sans">
      <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Gratuity Calculator</h1>
              <p className="text-xs text-white/70">Payment of Gratuity Act, 1972</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">
            Calculate your gratuity amount based on your last drawn basic salary and years of service. Gratuity is payable after 5 years of continuous service.
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[
              { val: isEligible ? formatINR(gratuity) : 'Not Eligible', label: 'Gratuity Amount' },
              { val: formatINR(Math.min(gratuity, taxFreeLimit)), label: 'Tax-Free Amount' },
              { val: formatINR(taxableGratuity), label: 'Taxable Gratuity' },
            ].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Employment Details</span>
            </div>

            {/* Employee type toggle */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-4">
              <p className="text-sm font-medium text-slate-700 mb-3">Employment Type</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Covered under Act', sub: 'Orgs with 10+ employees', val: true },
                  { label: 'Not Covered', sub: 'Smaller organisations', val: false },
                ].map(c => (
                  <button key={String(c.val)} onClick={() => setIsGovtAct(c.val)}
                    className={`p-3 rounded-xl border text-left transition-all ${isGovtAct === c.val ? 'border-brand-teal bg-brand-teal/5' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
                    <p className={`text-sm font-semibold ${isGovtAct === c.val ? 'text-brand-teal' : 'text-slate-700'}`}>{c.label}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{isGovtAct === c.val ? (c.val ? '15/26 × Basic × Years' : '15/30 × Basic × Years') : c.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Last Drawn Basic Salary (Monthly)', value: basicSalary, min: 5000, max: 500000, step: 1000, prefix: '₹', onChange: setBasicSalary, minLabel: '₹5,000', maxLabel: '₹5,00,000' },
                { label: 'Years of Service', value: yearsOfService, min: 1, max: 40, step: 1, suffix: 'Yr', onChange: setYearsOfService, minLabel: '1 Year', maxLabel: '40 Years' },
              ].map(({ label, value, min, max, step, prefix, suffix, onChange, minLabel, maxLabel }) => (
                <div key={label} className="py-5 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      {prefix && <span className="text-xs text-slate-400">{prefix}</span>}
                      <input type="number" value={value} min={min} max={max} step={step}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-24" />
                      {suffix && <span className="text-xs text-slate-400">{suffix}</span>}
                    </div>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full accent-brand-teal cursor-pointer" />
                  <div className="flex justify-between mt-2">
                    <span className="text-[11px] text-slate-400">{minLabel}</span>
                    <span className="text-[11px] text-slate-400">{maxLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Eligibility alert */}
            {!isEligible && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="text-[11px] uppercase tracking-widest text-red-600 font-semibold mb-1">Not Eligible</p>
                <p className="text-sm text-red-700">Gratuity requires a minimum of <strong>5 years of continuous service</strong>. You need {5 - yearsOfService} more year(s).</p>
              </div>
            )}

            {/* Formula Breakdown */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Gratuity Formula Breakdown</p>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-slate-500">Last Basic Salary (Monthly)</span>
                <span className="text-sm font-semibold text-slate-700">{formatINR(basicSalary)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-slate-500">Years of Service</span>
                <span className="text-sm font-semibold text-slate-700">{yearsOfService} Years</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-slate-500">Formula Used</span>
                <span className="text-sm font-semibold text-slate-700">Basic × 15/{isGovtAct ? '26' : '30'} × Years</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Gratuity Amount</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(gratuity)}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About <span className="text-brand-teal">Gratuity</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Gratuity is a lump sum amount paid by an employer to an employee as a token of appreciation for the services rendered. Under the Payment of Gratuity Act, 1972, it is mandatory for companies with 10 or more employees.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  { title: '5 Year Rule', desc: 'Minimum 5 years of continuous service required to claim gratuity.' },
                  { title: '₹20L Tax Free', desc: 'Up to ₹20 lakhs of gratuity is completely tax-free for private sector employees.' },
                  { title: 'Death / Disability', desc: 'Gratuity is payable even before 5 years in case of death or disability.' },
                  { title: 'DA Included', desc: 'Basic salary + Dearness Allowance (DA) is the base for gratuity calculation.' },
                ].map(b => (
                  <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed">
                <span className="font-semibold text-slate-500">Disclaimer:</span> This calculator provides an estimate. Actual gratuity may vary based on company policy, DA components, and applicable laws. Consult HR or a legal advisor for exact figures.
              </p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
             <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Gratuity Amount</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{isEligible ? formatINR(gratuity) : '—'}</p>
              <p className="text-xs text-white/60 mt-1">{isEligible ? `After ${yearsOfService} years of service` : 'Min. 5 years required'}</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Gratuity Summary</p>
              {[
                { label: 'Total Gratuity', value: formatINR(gratuity), color: 'bg-brand-teal' },
                { label: 'Tax-Free Portion', value: formatINR(Math.min(gratuity, taxFreeLimit)), color: 'bg-emerald-300' },
                { label: 'Taxable Amount', value: formatINR(taxableGratuity), color: 'bg-gray-300' },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} />
                    <span className="text-sm text-slate-500">{row.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              {/* <Link href="/apply">
                <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn cursor-pointer">
                  Claim Gratuity
                  <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
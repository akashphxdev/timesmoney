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

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');

  const calc = useCallback(() => {
    const months = tenureType === 'years' ? tenure * 12 : tenure;
    const r = rate / 12 / 100;
    const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    const total = emi * months;
    const interest = total - principal;
    const principalPct = Math.round((principal / total) * 100);
    return { emi, total, interest, principalPct, months };
  }, [principal, rate, tenure, tenureType]);

  const { emi, total, interest, principalPct, months } = calc();

  const SliderRow = ({ label, icon, value, min, max, step, prefix, suffix, onChange, minLabel, maxLabel }: any) => (
    <div className="py-5 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-slate-700" style={{ fontFamily: 'var(--font-body)' }}>{label}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-shrink-0">
          {prefix && <span className="text-xs text-slate-400 font-medium">{prefix}</span>}
          <input type="number" value={value} min={min} max={max} step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-20"
            style={{ fontFamily: 'var(--font-display)' }} />
          {suffix && <span className="text-xs text-slate-400 font-medium">{suffix}</span>}
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
  );

  return (
    <div className="font-sans">
      <AdBanner page="CALCULATOR" position="TOP" />
      {/* Hero */}
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>EMI Calculator</h1>
              <p className="text-xs text-white/70" style={{ fontFamily: 'var(--font-body)' }}>Equated Monthly Instalment</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
            Calculate your monthly loan repayment amount. Know your EMI before you apply for any loan.
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(emi) + '/mo', label: 'Your EMI' }, { val: formatINR(total), label: 'Total Payment' }, { val: formatINR(interest), label: 'Total Interest' }].map(s => (
              <div key={s.label} className="bg-white/15 rounded-xl px-4 py-3">
                <p className="text-base font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>{s.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/65 font-medium mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Loan Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              <SliderRow label="Loan Amount" icon={<svg width="16" height="16" fill="none" stroke="#0d9488" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>}
                value={principal} min={50000} max={10000000} step={50000} prefix="₹"
                onChange={setPrincipal} minLabel="₹50,000" maxLabel="₹1 Cr" />
              <SliderRow label="Interest Rate (p.a.)" icon={<svg width="16" height="16" fill="none" stroke="#0d9488" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10" /></svg>}
                value={rate} min={1} max={30} step={0.1} suffix="%"
                onChange={setRate} minLabel="1%" maxLabel="30%" />

              {/* Tenure with toggle */}
              <div className="py-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" fill="none" stroke="#0d9488" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                    <span className="text-sm font-medium text-slate-700" style={{ fontFamily: 'var(--font-body)' }}>Loan Tenure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      <input type="number" value={tenure} min={1} max={tenureType === 'years' ? 30 : 360} step={1}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-14" />
                    </div>
                    <div className="flex rounded-lg overflow-hidden border border-gray-200">
                      {(['years', 'months'] as const).map(t => (
                        <button key={t} onClick={() => { setTenureType(t); setTenure(t === 'years' ? 20 : 240); }}
                          className={`px-3 py-1.5 text-xs font-medium transition-all ${tenureType === t ? 'bg-brand-teal text-white' : 'bg-gray-50 text-slate-500 hover:bg-gray-100'}`}>
                          {t === 'years' ? 'Yr' : 'Mo'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <input type="range" min={1} max={tenureType === 'years' ? 30 : 360} step={1} value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-brand-teal cursor-pointer" />
                <div className="flex justify-between mt-2">
                  <span className="text-[11px] text-slate-400">1 {tenureType === 'years' ? 'Year' : 'Month'}</span>
                  <span className="text-[11px] text-slate-400">{tenureType === 'years' ? '30 Years' : '360 Months'}</span>
                </div>
              </div>
            </div>

            {/* Amortization preview */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4" style={{ fontFamily: 'var(--font-body)' }}>Year-wise Interest vs Principal</p>
              <div className="space-y-2">
                {Array.from({ length: Math.min(tenureType === 'years' ? tenure : Math.ceil(tenure / 12), 5) }).map((_, i) => {
                  const yr = i + 1;
                  const r = rate / 12 / 100;
                  const n = months;
                  const emiVal = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                  const start = yr === 1 ? 0 : (yr - 1) * 12;
                  let bal = principal;
                  for (let m = 0; m < start; m++) { const intM = bal * r; bal -= (emiVal - intM); }
                  let yrInt = 0, yrPrin = 0;
                  for (let m = 0; m < 12 && (start + m) < n; m++) { const intM = bal * r; yrInt += intM; yrPrin += (emiVal - intM); bal -= (emiVal - intM); }
                  const total = yrInt + yrPrin;
                  const pPct = Math.round((yrPrin / total) * 100);
                  return (
                    <div key={yr}>
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Year {yr}</span>
                        <span className="text-slate-400">{formatINR(yrPrin)} principal · {formatINR(yrInt)} interest</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-teal rounded-full" style={{ width: `${pPct}%` }} />
                      </div>
                    </div>
                  );
                })}
                {(tenureType === 'years' ? tenure : Math.ceil(tenure / 12)) > 5 && (
                  <p className="text-[11px] text-slate-400 pt-1">... and {(tenureType === 'years' ? tenure : Math.ceil(tenure / 12)) - 5} more years</p>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>What is <span className="text-brand-teal">EMI?</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)' }}>
                EMI (Equated Monthly Instalment) is a fixed payment made by a borrower to a lender on a specified date every month. It covers both the principal and interest, structured so the loan is fully repaid over the tenure.
              </p>
              <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4 mb-6">
                <p className="font-mono text-sm text-slate-800 mb-2">EMI = P × r × (1+r)ⁿ / [(1+r)ⁿ - 1]</p>
                <p className="text-[11px] text-slate-400">P = Principal · r = Monthly rate · n = Months</p>
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed">
                <span className="font-semibold text-slate-500">Disclaimer:</span> Results are indicative only. Actual EMI may vary based on lender terms and processing fees.
              </p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          {/* Right sticky */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
             <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(emi)}</p>
              <p className="text-xs text-white/60 mt-1">per month for {months} months</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Loan Breakdown</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-brand-teal rounded-full transition-all duration-500" style={{ width: `${principalPct}%` }} />
              </div>
              {[
                { label: 'Principal Amount', value: formatINR(principal), color: 'bg-brand-teal' },
                { label: 'Total Interest', value: formatINR(interest), color: 'bg-gray-300' },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} />
                    <span className="text-sm text-slate-500">{row.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Total Payment</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(total)}</span>
              </div>
           <Link href="/apply">
            <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn cursor-pointer">
              Apply for Loan
              <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
            </div>
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">Making a <span className="font-semibold text-slate-700">larger down payment</span> reduces your principal and can save you significantly on total interest paid.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
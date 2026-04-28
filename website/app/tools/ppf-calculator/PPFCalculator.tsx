'use client';
import { useState, useCallback } from 'react';
import AdBanner from '@/components/ads/AdBanner';
const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

const PPF_RATE = 7.1;

export default function PPFCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [years, setYears] = useState(15);

  const calc = useCallback(() => {
    const r = PPF_RATE / 100;
    let balance = 0;
    let totalInvested = 0;
    const yearData: { yr: number; balance: number }[] = [];
    for (let i = 1; i <= years; i++) {
      balance = (balance + yearly) * (1 + r);
      totalInvested += yearly;
      yearData.push({ yr: i, balance: Math.round(balance) });
    }
    return { maturity: balance, invested: totalInvested, interest: balance - totalInvested, yearData };
  }, [yearly, years]);

  const { maturity, invested, interest, yearData } = calc();

  return (
    <div className="font-sans">
       <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>PPF Calculator</h1>
              <p className="text-xs text-white/70">Public Provident Fund · {PPF_RATE}% p.a. (Govt. Rate)</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Plan your long-term tax-free savings with India's most trusted government-backed scheme — PPF.</p>
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">PPF Details</span>
            </div>

            {/* PPF Rate badge */}
            <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <svg width="18" height="18" fill="none" stroke="#d97706" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-xs text-amber-700">Current PPF rate is <strong>{PPF_RATE}%</strong> p.a. (set by Govt. of India, revised quarterly)</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Yearly Investment', value: yearly, min: 500, max: 150000, step: 500, prefix: '₹', onChange: setYearly, minLabel: '₹500', maxLabel: '₹1,50,000' },
                { label: 'Investment Period', value: years, min: 15, max: 50, step: 1, suffix: 'Yr', onChange: setYears, minLabel: '15 Years', maxLabel: '50 Years' },
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

            {/* Year-wise table */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm overflow-x-auto">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Year-wise Balance</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-[11px] text-slate-400 font-medium pb-2">Year</th>
                    <th className="text-right text-[11px] text-slate-400 font-medium pb-2">Balance</th>
                    <th className="text-right text-[11px] text-slate-400 font-medium pb-2">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {yearData.filter((_, i) => i % Math.max(1, Math.floor(years / 10)) === 0 || i === yearData.length - 1).map(({ yr, balance }) => (
                    <tr key={yr} className="border-b border-gray-50">
                      <td className="py-2 text-slate-600">Year {yr}</td>
                      <td className="py-2 text-right font-semibold text-slate-800">{formatINR(balance)}</td>
                      <td className="py-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <div className="h-1.5 bg-brand-teal rounded-full" style={{ width: `${Math.round((balance / maturity) * 60)}px` }} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>What is <span className="text-brand-teal">PPF?</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Public Provident Fund is a long-term savings scheme backed by the Government of India. It offers tax-free returns under EEE status — contributions, interest and maturity all exempt from tax.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[{ title: 'EEE Tax Status', desc: 'Exempt at investment, interest & maturity' }, { title: 'Lock-in 15 Years', desc: 'Partial withdrawal allowed from year 7' }, { title: '₹1.5L Limit', desc: 'Max ₹1,50,000 can be invested per year' }].map(b => (
                  <div key={b.title} className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> PPF interest rate is subject to revision by the Government of India every quarter.</p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Maturity Amount</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(maturity)}</p>
              <p className="text-xs text-white/60 mt-1">after {years} years · 100% Tax Free</p>
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
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                Open PPF Account <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
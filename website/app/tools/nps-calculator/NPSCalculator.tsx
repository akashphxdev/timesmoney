'use client';
import { useState, useCallback } from 'react';

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function NPSCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [currentAge, setCurrentAge] = useState(30);
  const [returnRate, setReturnRate] = useState(10);
  const [annuityRate, setAnnuityRate] = useState(6);
  const [annuityPct, setAnnuityPct] = useState(40);

  const calc = useCallback(() => {
    const years = 60 - currentAge;
    const n = years * 12;
    const r = returnRate / 12 / 100;
    const corpus = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = monthly * n;
    const annuityCorpus = corpus * (annuityPct / 100);
    const lumpsum = corpus - annuityCorpus;
    const monthlyPension = (annuityCorpus * annuityRate / 100) / 12;
    return { corpus, invested, lumpsum, monthlyPension, years };
  }, [monthly, currentAge, returnRate, annuityRate, annuityPct]);

  const { corpus, invested, lumpsum, monthlyPension, years } = calc();

  return (
    <div className="font-sans">
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>NPS Calculator</h1>
              <p className="text-xs text-white/70">National Pension System</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Estimate your NPS corpus and monthly pension at retirement. Plan your golden years with India's national pension scheme.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(corpus), label: 'Total Corpus' }, { val: formatINR(monthlyPension) + '/mo', label: 'Monthly Pension' }, { val: years + ' Yrs', label: 'To Retirement' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">NPS Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Monthly Contribution', value: monthly, min: 500, max: 100000, step: 500, prefix: '₹', onChange: setMonthly, minLabel: '₹500', maxLabel: '₹1,00,000' },
                { label: 'Current Age', value: currentAge, min: 18, max: 55, step: 1, suffix: 'Yr', onChange: setCurrentAge, minLabel: '18', maxLabel: '55' },
                { label: 'Expected Return Rate', value: returnRate, min: 6, max: 15, step: 0.5, suffix: '%', onChange: setReturnRate, minLabel: '6%', maxLabel: '15%' },
                { label: 'Annuity Rate', value: annuityRate, min: 4, max: 10, step: 0.5, suffix: '%', onChange: setAnnuityRate, minLabel: '4%', maxLabel: '10%' },
                { label: 'Annuity Purchase (%)', value: annuityPct, min: 40, max: 100, step: 5, suffix: '%', onChange: setAnnuityPct, minLabel: '40%', maxLabel: '100%' },
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
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About <span className="text-brand-teal">NPS</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">National Pension System is a government-sponsored pension scheme that allows you to build a retirement corpus through market-linked investments. At retirement (age 60), at least 40% must be used to purchase an annuity for monthly pension.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[{ title: 'Tax Benefits', desc: 'Up to ₹2L deduction under 80C + additional ₹50K under 80CCD(1B)' }, { title: 'Market-linked', desc: 'Choose equity, corporate bonds, or govt. securities allocation' }, { title: 'Low Cost', desc: "One of India's lowest fund management charges at 0.01%" }, { title: 'Flexibility', desc: 'Partial withdrawal allowed for specific purposes after 3 years' }].map(b => (
                  <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> NPS returns are market-linked and not guaranteed. Results are illustrative only.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Total Corpus at 60</p>
              <p className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(corpus)}</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Retirement Breakdown</p>
              {[{ label: 'Total Invested', value: formatINR(invested), color: 'bg-brand-teal' }, { label: 'Lumpsum (Tax-free)', value: formatINR(lumpsum), color: 'bg-emerald-300' }, { label: 'Annuity Corpus', value: formatINR(corpus * annuityPct / 100), color: 'bg-gray-300' }, { label: 'Monthly Pension', value: formatINR(monthlyPension) + '/mo', color: 'bg-amber-300' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                Open NPS Account <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">Invest an extra <span className="font-semibold text-slate-700">₹50,000/year</span> under 80CCD(1B) for additional tax savings beyond the 80C limit.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
'use client';
import { useState, useCallback } from 'react';
import AdBanner from '@/components/ads/AdBanner';
const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

const SSY_RATE = 8.2;

export default function SSYCalculator() {
  const [yearly, setYearly] = useState(50000);
  const [girlAge, setGirlAge] = useState(5);

  const calc = useCallback(() => {
    const r = SSY_RATE / 100;
    const depositYears = 15;
    const maturityAge = 21;
    const totalYears = maturityAge - girlAge;
    let balance = 0;
    let invested = 0;
    for (let i = 1; i <= totalYears; i++) {
      if (i <= depositYears) { balance += yearly; invested += yearly; }
      balance *= (1 + r);
    }
    return { maturity: balance, invested, interest: balance - invested, maturityYear: new Date().getFullYear() + totalYears };
  }, [yearly, girlAge]);

  const { maturity, invested, interest, maturityYear } = calc();

  return (
    <div className="font-sans">
       <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>SSY Calculator</h1>
              <p className="text-xs text-white/70">Sukanya Samriddhi Yojana · {SSY_RATE}% p.a.</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Plan your daughter's future with India's highest-interest government scheme exclusively for the girl child.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(maturity), label: 'Maturity Value' }, { val: formatINR(invested), label: 'Total Invested' }, { val: maturityYear.toString(), label: 'Matures In' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">SSY Details</span>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3">
              <svg width="18" height="18" fill="none" stroke="#d97706" viewBox="0 0 24 24" strokeWidth={2} className="flex-shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-xs text-amber-700">Deposits are made for <strong>15 years</strong>. Account matures when girl turns <strong>21 years</strong>. Max deposit: ₹1.5L/year.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: "Yearly Investment", value: yearly, min: 250, max: 150000, step: 250, prefix: '₹', onChange: setYearly, minLabel: '₹250', maxLabel: '₹1,50,000' },
                { label: "Girl's Current Age", value: girlAge, min: 1, max: 10, step: 1, suffix: 'Yr', onChange: setGirlAge, minLabel: '1 Year', maxLabel: '10 Years' },
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

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[{ title: 'EEE Tax Status', desc: 'Fully exempt — invest, interest & maturity' }, { title: 'Highest Rate', desc: `${SSY_RATE}% p.a. — highest among govt. small savings` }, { title: 'Girl Child Only', desc: 'For girls below age 10 at account opening' }].map(b => (
                <div key={b.title} className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                  <p className="text-xs text-slate-500">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About <span className="text-brand-teal">SSY</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Sukanya Samriddhi Yojana is a government-backed savings scheme for girl children, offering the highest interest among all small savings schemes. It has EEE tax status and is ideal for planning education and marriage expenses.</p>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> SSY interest rate is revised by the Govt. quarterly. Account can be opened in post offices and authorized banks.</p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Maturity Amount</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(maturity)}</p>
              <p className="text-xs text-white/60 mt-1">in {maturityYear} · 100% Tax Free</p>
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
                Open SSY Account <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
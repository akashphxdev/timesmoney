'use client';
import { useState, useCallback } from 'react';

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

const FREQ_OPTIONS = [
  { label: 'Monthly', value: 12 },
  { label: 'Quarterly', value: 4 },
  { label: 'Half-yearly', value: 2 },
  { label: 'Yearly', value: 1 },
];

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7.5);
  const [years, setYears] = useState(3);
  const [freq, setFreq] = useState(4);

  const calc = useCallback(() => {
    const maturity = principal * Math.pow(1 + rate / (freq * 100), freq * years);
    const interest = maturity - principal;
    return { maturity, interest };
  }, [principal, rate, years, freq]);

  const { maturity, interest } = calc();

  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>FD Calculator</h1>
              <p className="text-xs text-white/70">Fixed Deposit Returns</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">
            Calculate maturity amount and interest earned on your Fixed Deposit across different compounding frequencies.
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(maturity), label: 'Maturity Value' }, { val: formatINR(interest), label: 'Interest Earned' }, { val: rate + '%', label: 'Interest Rate' }].map(s => (
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
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">FD Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Deposit Amount', value: principal, min: 1000, max: 10000000, step: 1000, prefix: '₹', onChange: setPrincipal, minLabel: '₹1,000', maxLabel: '₹1 Cr' },
                { label: 'Interest Rate (p.a.)', value: rate, min: 1, max: 15, step: 0.1, suffix: '%', onChange: setRate, minLabel: '1%', maxLabel: '15%' },
                { label: 'Time Period (Years)', value: years, min: 1, max: 10, step: 1, suffix: 'Yr', onChange: setYears, minLabel: '1 Year', maxLabel: '10 Years' },
              ].map(({ label, value, min, max, step, prefix, suffix, onChange, minLabel, maxLabel }) => (
                <div key={label} className="py-5 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      {prefix && <span className="text-xs text-slate-400">{prefix}</span>}
                      <input type="number" value={value} min={min} max={max} step={step}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-20" />
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

              {/* Compounding Frequency */}
              <div className="py-5">
                <p className="text-sm font-medium text-slate-700 mb-3">Compounding Frequency</p>
                <div className="grid grid-cols-4 gap-2">
                  {FREQ_OPTIONS.map(f => (
                    <button key={f.value} onClick={() => setFreq(f.value)}
                      className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${freq === f.value ? 'bg-brand-teal text-white shadow-sm' : 'bg-gray-50 text-slate-500 border border-gray-200 hover:bg-gray-100'}`}>
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Year-wise growth */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Year-wise Growth</p>
              <div className="space-y-3">
                {Array.from({ length: years }).map((_, i) => {
                  const yr = i + 1;
                  const val = principal * Math.pow(1 + rate / (freq * 100), freq * yr);
                  const pct = Math.round(((val - principal) / (maturity - principal)) * 100);
                  return (
                    <div key={yr}>
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Year {yr}</span>
                        <span className="font-medium text-slate-700">{formatINR(val)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-teal rounded-full transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>What is <span className="text-brand-teal">Fixed Deposit?</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                A Fixed Deposit (FD) is a financial instrument offered by banks that provides a higher interest rate than a regular savings account, with a fixed maturity date. It is one of the safest investment options in India.
              </p>
              <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4 mb-6">
                <p className="font-mono text-sm text-slate-800 mb-2">A = P × (1 + r/n)^(n×t)</p>
                <p className="text-[11px] text-slate-400">A = Maturity Amount · P = Principal · r = Annual Rate · n = Compounding freq · t = Time in years</p>
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed">
                <span className="font-semibold text-slate-500">Disclaimer:</span> Interest rates vary by bank and tenure. TDS is applicable on FD interest above ₹40,000 per year.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Maturity Amount</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(maturity)}</p>
              <p className="text-xs text-white/60 mt-1">after {years} year{years > 1 ? 's' : ''}</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Breakdown</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-brand-teal rounded-full transition-all duration-500" style={{ width: `${Math.round((principal / maturity) * 100)}%` }} />
              </div>
              {[{ label: 'Principal Amount', value: formatINR(principal), color: 'bg-brand-teal' }, { label: 'Interest Earned', value: formatINR(interest), color: 'bg-gray-300' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} />
                    <span className="text-sm text-slate-500">{row.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Total Value</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(maturity)}</span>
              </div>
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                Open FD Now
                <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">Senior citizens get an additional <span className="font-semibold text-slate-700">0.25–0.50%</span> interest on FDs at most banks.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
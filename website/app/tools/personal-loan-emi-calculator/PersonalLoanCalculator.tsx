'use client';
import { useState, useCallback } from 'react';

const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function PersonalLoanCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(3);

  const calc = useCallback(() => {
    const months = tenure * 12;
    const r = rate / 12 / 100;
    const emi = (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    const total = emi * months;
    const interest = total - amount;
    return { emi, total, interest, months };
  }, [amount, rate, tenure]);

  const { emi, total, interest, months } = calc();

  const eligibility = [
    { label: 'Salaried (₹30K salary)', rate: '10.5%', amount: '₹5–20L', tenure: '1–5 yr' },
    { label: 'Self-Employed', rate: '12–16%', amount: '₹2–15L', tenure: '1–3 yr' },
    { label: 'Salaried (₹50K+ salary)', rate: '9.99%', amount: '₹10–40L', tenure: '1–5 yr' },
  ];

  return (
    <div className="font-sans">
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Personal Loan Calculator</h1>
              <p className="text-xs text-white/70">Instant Unsecured Loan</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Calculate EMI for your personal loan. No collateral required — get funds for any purpose instantly.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(emi) + '/mo', label: 'Monthly EMI' }, { val: formatINR(total), label: 'Total Payment' }, { val: formatINR(interest), label: 'Total Interest' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Loan Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Loan Amount', value: amount, min: 10000, max: 4000000, step: 10000, prefix: '₹', onChange: setAmount, minLabel: '₹10,000', maxLabel: '₹40L' },
                { label: 'Interest Rate (p.a.)', value: rate, min: 8, max: 30, step: 0.5, suffix: '%', onChange: setRate, minLabel: '8%', maxLabel: '30%' },
                { label: 'Loan Tenure', value: tenure, min: 1, max: 7, step: 1, suffix: 'Yr', onChange: setTenure, minLabel: '1 Year', maxLabel: '7 Years' },
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

            {/* Eligibility guide */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Typical Eligibility Guide</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-gray-100">{['Profile', 'Rate', 'Loan Amount', 'Tenure'].map(h => <th key={h} className="text-left text-[11px] text-slate-400 font-medium pb-2 pr-4">{h}</th>)}</tr></thead>
                  <tbody>{eligibility.map(e => (<tr key={e.label} className="border-b border-gray-50"><td className="py-2.5 text-slate-600 pr-4">{e.label}</td><td className="py-2.5 text-brand-teal font-semibold pr-4">{e.rate}</td><td className="py-2.5 text-slate-700 pr-4">{e.amount}</td><td className="py-2.5 text-slate-700">{e.tenure}</td></tr>))}</tbody>
                </table>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Personal Loan <span className="text-brand-teal">Guide</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Personal loans are unsecured loans available instantly for any purpose — medical emergencies, travel, weddings, home renovation, or debt consolidation. Rates vary from 9.99% to 30% based on your credit score and income.</p>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> Interest rates are indicative. Actual rate depends on credit score, income, and lender policies.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(emi)}</p>
              <p className="text-xs text-white/60 mt-1">for {months} months</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Loan Breakdown</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-brand-teal rounded-full transition-all duration-500" style={{ width: `${Math.round((amount / total) * 100)}%` }} />
              </div>
              {[{ label: 'Principal Amount', value: formatINR(amount), color: 'bg-brand-teal' }, { label: 'Total Interest', value: formatINR(interest), color: 'bg-gray-300' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Total Payment</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(total)}</span>
              </div>
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                Check Eligibility <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">A <span className="font-semibold text-slate-700">CIBIL score above 750</span> can get you rates as low as 9.99% from top banks.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
'use client';
import { useState, useCallback } from 'react';
import AdBanner from '@/components/ads/AdBanner';
const formatINR = (n: number) => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);

  const calc = useCallback(() => {
    const yearsToRetire = retirementAge - currentAge;
    const retirementYears = lifeExpectancy - retirementAge;
    const inflatedExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);
    const annualExpenseAtRetirement = inflatedExpense * 12;
    const r = returnRate / 100;
    const inf = inflation / 100;
    const realRate = (r - inf) / (1 + inf);
    const corpusNeeded = realRate > 0
      ? annualExpenseAtRetirement * (1 - Math.pow(1 + realRate, -retirementYears)) / realRate
      : annualExpenseAtRetirement * retirementYears;
    const existingGrowth = currentSavings * Math.pow(1 + r, yearsToRetire);
    const additionalNeeded = Math.max(0, corpusNeeded - existingGrowth);
    const r2 = returnRate / 12 / 100;
    const n = yearsToRetire * 12;
    const monthlySIP = additionalNeeded > 0
      ? additionalNeeded * r2 / ((Math.pow(1 + r2, n) - 1) * (1 + r2))
      : 0;
    return { corpusNeeded, existingGrowth, additionalNeeded, monthlySIP, inflatedExpense, yearsToRetire, retirementYears };
  }, [currentAge, retirementAge, monthlyExpense, inflation, returnRate, currentSavings, lifeExpectancy]);

  const { corpusNeeded, existingGrowth, additionalNeeded, monthlySIP, inflatedExpense, yearsToRetire } = calc();

  return (
    <div className="font-sans">
       <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Retirement Calculator</h1>
              <p className="text-xs text-white/70">Plan Your Financial Independence</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">Calculate how much corpus you need for a comfortable retirement and how much to invest monthly to achieve it.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(corpusNeeded), label: 'Corpus Needed' }, { val: formatINR(monthlySIP) + '/mo', label: 'Monthly SIP Required' }, { val: yearsToRetire + ' Yrs', label: 'Years to Retire' }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Retirement Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Current Age', value: currentAge, min: 20, max: 55, step: 1, suffix: 'Yr', onChange: setCurrentAge, minLabel: '20', maxLabel: '55' },
                { label: 'Retirement Age', value: retirementAge, min: 45, max: 70, step: 1, suffix: 'Yr', onChange: setRetirementAge, minLabel: '45', maxLabel: '70' },
                { label: 'Life Expectancy', value: lifeExpectancy, min: 70, max: 100, step: 1, suffix: 'Yr', onChange: setLifeExpectancy, minLabel: '70', maxLabel: '100' },
                { label: 'Monthly Expenses (Today)', value: monthlyExpense, min: 10000, max: 500000, step: 5000, prefix: '₹', onChange: setMonthlyExpense, minLabel: '₹10K', maxLabel: '₹5L' },
                { label: 'Current Savings', value: currentSavings, min: 0, max: 10000000, step: 10000, prefix: '₹', onChange: setCurrentSavings, minLabel: '₹0', maxLabel: '₹1 Cr' },
                { label: 'Expected Inflation', value: inflation, min: 3, max: 12, step: 0.5, suffix: '%', onChange: setInflation, minLabel: '3%', maxLabel: '12%' },
                { label: 'Expected Return Rate', value: returnRate, min: 6, max: 18, step: 0.5, suffix: '%', onChange: setReturnRate, minLabel: '6%', maxLabel: '18%' },
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

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-[11px] uppercase tracking-widest text-amber-600 font-semibold mb-2">Inflation Impact</p>
              <p className="text-sm text-amber-800">Your current ₹{monthlyExpense.toLocaleString('en-IN')}/month expense will become <strong>{formatINR(inflatedExpense)}/month</strong> at retirement due to {inflation}% annual inflation.</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Retirement <span className="text-brand-teal">Planning</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Retirement planning is about building a corpus large enough to sustain your lifestyle without active income. The key factors are: years to retirement, inflation, your expected lifestyle cost, and investment returns.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[{ title: '4% Rule', desc: 'Withdraw 4% of corpus annually — a globally accepted safe withdrawal rate.' }, { title: 'Start Early', desc: 'Starting at 25 vs 35 can double your retirement corpus.' }, { title: 'Beat Inflation', desc: 'Ensure portfolio returns exceed inflation for real wealth growth.' }, { title: 'Diversify', desc: 'Mix equity, debt, and real estate for a balanced retirement portfolio.' }].map(b => (
                  <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> Projections are illustrative. Actual returns, inflation, and expenses may vary. Consult a financial planner for personalized advice.</p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Corpus Required</p>
              <p className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(corpusNeeded)}</p>
              <p className="text-xs text-white/60 mt-1">at age {retirementAge}</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Retirement Plan</p>
              {[{ label: 'Corpus Needed', value: formatINR(corpusNeeded), color: 'bg-brand-teal' }, { label: 'From Existing Savings', value: formatINR(existingGrowth), color: 'bg-emerald-400' }, { label: 'Additional Needed', value: formatINR(additionalNeeded), color: 'bg-gray-300' }, { label: 'Monthly SIP Required', value: formatINR(monthlySIP), color: 'bg-amber-400' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn">
                Start Retirement SIP <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
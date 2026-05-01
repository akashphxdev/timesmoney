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

export default function MonthlySavingsCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(75000);
  const [rent, setRent] = useState(15000);
  const [food, setFood] = useState(8000);
  const [transport, setTransport] = useState(3000);
  const [utilities, setUtilities] = useState(2000);
  const [entertainment, setEntertainment] = useState(3000);
  const [emi, setEmi] = useState(10000);
  const [otherExpenses, setOtherExpenses] = useState(4000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  const calc = useCallback(() => {
    const totalExpenses = rent + food + transport + utilities + entertainment + emi + otherExpenses;
    const monthlySavings = Math.max(0, monthlyIncome - totalExpenses);
    const savingsRate = monthlyIncome > 0 ? (monthlySavings / monthlyIncome) * 100 : 0;
    const r = returnRate / 12 / 100;
    const n = years * 12;
    const futureValue = monthlySavings > 0
      ? monthlySavings * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      : 0;
    const totalInvested = monthlySavings * n;
    const wealthGain = futureValue - totalInvested;
    return { totalExpenses, monthlySavings, savingsRate, futureValue, totalInvested, wealthGain };
  }, [monthlyIncome, rent, food, transport, utilities, entertainment, emi, otherExpenses, returnRate, years]);

  const { totalExpenses, monthlySavings, savingsRate, futureValue, totalInvested, wealthGain } = calc();

  const expenseItems = [
    { label: 'Rent / Home Loan EMI', value: rent, min: 0, max: 100000, step: 500, onChange: setRent },
    { label: 'Food & Groceries', value: food, min: 0, max: 50000, step: 500, onChange: setFood },
    { label: 'Transport / Fuel', value: transport, min: 0, max: 30000, step: 500, onChange: setTransport },
    { label: 'Utilities & Bills', value: utilities, min: 0, max: 20000, step: 500, onChange: setUtilities },
    { label: 'Entertainment', value: entertainment, min: 0, max: 30000, step: 500, onChange: setEntertainment },
    { label: 'Other EMIs / Loans', value: emi, min: 0, max: 100000, step: 500, onChange: setEmi },
    { label: 'Other Expenses', value: otherExpenses, min: 0, max: 50000, step: 500, onChange: setOtherExpenses },
  ];

  const getSavingsColor = (rate: number) => {
    if (rate >= 30) return 'text-emerald-600';
    if (rate >= 20) return 'text-brand-teal';
    if (rate >= 10) return 'text-amber-600';
    return 'text-red-500';
  };

  const getSavingsLabel = (rate: number) => {
    if (rate >= 30) return 'Excellent Saver! 🎉';
    if (rate >= 20) return 'Good Savings Rate';
    if (rate >= 10) return 'Moderate — Room to Improve';
    return 'Low Savings — Needs Attention';
  };

  return (
    <div className="font-sans">
      <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Monthly Savings Calculator</h1>
              <p className="text-xs text-white/70">Track Income, Expenses & Wealth Growth</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">
            Enter your monthly income and expenses to find out how much you save and how much wealth you can build by investing those savings.
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[
              { val: formatINR(monthlySavings) + '/mo', label: 'Monthly Savings' },
              { val: savingsRate.toFixed(1) + '%', label: 'Savings Rate' },
              { val: formatINR(futureValue), label: `Wealth in ${years} Yrs` },
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
            {/* Monthly Income */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Income & Expenses</span>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm mb-4">
              <div className="py-5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-slate-700">Monthly Income (Take-home)</span>
                  <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                    <span className="text-xs text-slate-400">₹</span>
                    <input type="number" value={monthlyIncome} min={5000} max={2000000} step={1000}
                      onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                      className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-24" />
                  </div>
                </div>
                <input type="range" min={5000} max={2000000} step={1000} value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full accent-brand-teal cursor-pointer" />
                <div className="flex justify-between mt-2">
                  <span className="text-[11px] text-slate-400">₹5,000</span>
                  <span className="text-[11px] text-slate-400">₹20,00,000</span>
                </div>
              </div>
            </div>

            {/* Expenses */}
            <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3 px-1">Monthly Expenses</p>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm mb-4">
              {expenseItems.map(({ label, value, min, max, step, onChange }) => (
                <div key={label} className="py-5 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      <span className="text-xs text-slate-400">₹</span>
                      <input type="number" value={value} min={min} max={max} step={step}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-24" />
                    </div>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full accent-brand-teal cursor-pointer" />
                </div>
              ))}
            </div>

            {/* Savings Rate Indicator */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-[11px] uppercase tracking-widest text-slate-400">Savings Health</p>
                <span className={`text-sm font-semibold ${getSavingsColor(savingsRate)}`}>{getSavingsLabel(savingsRate)}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${savingsRate >= 30 ? 'bg-emerald-400' : savingsRate >= 20 ? 'bg-brand-teal' : savingsRate >= 10 ? 'bg-amber-400' : 'bg-red-400'}`}
                  style={{ width: `${Math.min(savingsRate, 100)}%` }} />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[11px] text-slate-400">0%</span>
                <span className="text-[11px] text-slate-400">Savings Rate: <span className="font-semibold text-slate-600">{savingsRate.toFixed(1)}%</span></span>
                <span className="text-[11px] text-slate-400">50%+</span>
              </div>
            </div>

            {/* Wealth projection settings */}
            <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-3 px-1">Wealth Projection</p>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Expected Return Rate (p.a.)', value: returnRate, min: 4, max: 20, step: 0.5, suffix: '%', onChange: setReturnRate, minLabel: '4%', maxLabel: '20%' },
                { label: 'Investment Horizon', value: years, min: 1, max: 30, step: 1, suffix: 'Yr', onChange: setYears, minLabel: '1 Year', maxLabel: '30 Years' },
              ].map(({ label, value, min, max, step, suffix, onChange, minLabel, maxLabel }) => (
                <div key={label} className="py-5 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      <input type="number" value={value} min={min} max={max} step={step}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-16" />
                      <span className="text-xs text-slate-400">{suffix}</span>
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

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Savings <span className="text-brand-teal">Tips</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  { title: '50-30-20 Rule', desc: '50% Needs, 30% Wants, 20% Savings — a balanced budgeting approach.' },
                  { title: 'Pay Yourself First', desc: 'Auto-debit savings on salary day before spending on anything else.' },
                  { title: 'Cut Hidden Leaks', desc: 'Unused subscriptions, impulse buys, and eating out add up fast.' },
                  { title: 'Invest Don\'t Hoard', desc: 'Idle savings lose to inflation. Put savings in SIP or FD immediately.' },
                ].map(b => (
                  <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed">
                <span className="font-semibold text-slate-500">Disclaimer:</span> Projections assume consistent monthly savings and fixed return rate. Actual results may vary based on market conditions and personal circumstances.
                <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
             <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Monthly Savings</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(monthlySavings)}</p>
              <p className="text-xs text-white/60 mt-1">{savingsRate.toFixed(1)}% of income saved</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Financial Snapshot</p>
              {[
                { label: 'Monthly Income', value: formatINR(monthlyIncome), color: 'bg-brand-teal' },
                { label: 'Total Expenses', value: formatINR(totalExpenses), color: 'bg-red-300' },
                { label: 'Monthly Savings', value: formatINR(monthlySavings), color: 'bg-emerald-400' },
                { label: `Wealth in ${years} Yrs`, value: formatINR(futureValue), color: 'bg-amber-400' },
                { label: 'Total Invested', value: formatINR(totalInvested), color: 'bg-slate-300' },
                { label: 'Wealth Gain', value: formatINR(wealthGain), color: 'bg-purple-300' },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} />
                    <span className="text-sm text-slate-500">{row.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <Link href="/apply">
                <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn cursor-pointer">
                  Start Saving Today
                  <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`.shimmer-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:shimmer 2.2s infinite}@keyframes shimmer{0%{left:-60%}100%{left:130%}}`}</style>
    </div>
  );
}
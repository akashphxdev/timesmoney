'use client';

import { useState, useCallback } from 'react';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/dist/client/link';
const formatINR = (n: number): string => {
  n = Math.round(n);
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
};

const SliderField = ({
  label, icon, value, min, max, step, unit, prefix, onChange, minLabel, maxLabel,
}: {
  label: string; icon: React.ReactNode; value: number; min: number; max: number;
  step: number; unit?: string; prefix?: string; onChange: (v: number) => void;
  minLabel: string; maxLabel: string;
}) => (
  <div className="py-5 border-b border-gray-100 last:border-0">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-medium text-slate-700" style={{ fontFamily: 'var(--font-body)' }}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-shrink-0">
        {prefix && <span className="text-xs text-slate-400 font-medium">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={min} max={max} step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="bg-transparent border-none outline-none text-sm font-semibold text-slate-800 text-right w-20"
          style={{ fontFamily: 'var(--font-display)' }}
        />
        {unit && <span className="text-xs text-slate-400 font-medium">{unit}</span>}
      </div>
    </div>
    <input
      type="range" min={min} max={max} step={step} value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-brand-teal h-1.5 cursor-pointer"
    />
    <div className="flex justify-between mt-2">
      <span className="text-[11px] text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>{minLabel}</span>
      <span className="text-[11px] text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>{maxLabel}</span>
    </div>
  </div>
);

export default function SIPCalculator() {
  const [monthlyAmt, setMonthlyAmt] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  const calcSIP = useCallback(() => {
    const r = returnRate / 12 / 100;
    const n = years * 12;
    const fv = monthlyAmt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = monthlyAmt * n;
    const returns = fv - invested;
    const investedPct = Math.min(Math.round((invested / fv) * 100), 100);
    return { fv, invested, returns, investedPct };
  }, [monthlyAmt, returnRate, years]);

  const { fv, invested, returns, investedPct } = calcSIP();

  return (
    <div className="font-sans">
       <AdBanner page="CALCULATOR" position="TOP" />

      {/* ── Hero Banner ── */}
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h1
                className="text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SIP Calculator
              </h1>
              <p className="text-xs text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                Plan your Systematic Investment
              </p>
            </div>
          </div>

          <p
            className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Estimate the future value of your monthly investments. See how regular investing builds long-term wealth through the power of compounding.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[
              { val: '8.5%', label: 'Starting Rate' },
              { val: '₹50L', label: 'Max Loan' },
              { val: '2 Min', label: 'Approval' },
            ].map((s) => (
              <div key={s.label} className="bg-white/15 rounded-xl px-4 py-3">
                <p className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.val}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/65 font-medium mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6 items-start">

          {/* ── Left: Sliders ── */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Adjust Parameters
              </span>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">

              <SliderField
                label="Monthly Investment"
                icon={
                  <svg width="16" height="16" fill="none" stroke="#0d9488" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                }
                value={monthlyAmt} min={500} max={100000} step={500}
                prefix="₹" onChange={setMonthlyAmt}
                minLabel="₹500" maxLabel="₹1,00,000"
              />

              <SliderField
                label="Expected Return Rate (p.a.)"
                icon={
                  <svg width="16" height="16" fill="none" stroke="#0d9488" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                value={returnRate} min={1} max={30} step={0.5}
                unit="%" onChange={setReturnRate}
                minLabel="1%" maxLabel="30%"
              />

              <SliderField
                label="Investment Period"
                icon={
                  <svg width="16" height="16" fill="none" stroke="#0d9488" viewBox="0 0 24 24" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                }
                value={years} min={1} max={40} step={1}
                unit="Yr" onChange={setYears}
                minLabel="1 Year" maxLabel="40 Years"
              />

            </div>

            {/* ── Info Section ── */}
            <div className="mt-10">
              <h2
                className="text-2xl text-slate-900 mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                What is <span className="text-brand-teal">SIP?</span>
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                SIP — Systematic Investment Plan — is a disciplined approach to investing a fixed amount at regular intervals in mutual funds. It leverages rupee cost averaging and compounding to steadily grow your wealth without requiring market timing expertise.
              </p>

              {/* Formula box */}
              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Formula
                </p>
                <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4">
                  <p className="font-mono text-sm text-slate-800 mb-2">
                    FV = P × [(1 + r)ⁿ − 1] / r × (1 + r)
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    P = Monthly investment &nbsp;·&nbsp; r = Monthly return rate &nbsp;·&nbsp; n = Number of months
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                Key Benefits
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { title: 'Rupee Cost Averaging', desc: 'Buy more units when prices are low, fewer when high — smoothing out market volatility.' },
                  { title: 'Power of Compounding', desc: 'Returns compound over time, creating exponential growth on your invested capital.' },
                  { title: 'Disciplined Investing', desc: 'Automated monthly contributions build strong saving habits effortlessly.' },
                  { title: 'Flexibility', desc: 'Start small and scale up as your income grows — no lock-in on amount.' },
                ].map((b) => (
                  <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                      <p className="text-sm font-semibold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>
                        {b.title}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-3.5" style={{ fontFamily: 'var(--font-body)' }}>
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                <span className="font-semibold text-slate-500">Disclaimer:</span> Results are illustrative only. Actual returns vary with market conditions. Mutual fund investments are subject to market risks — read all scheme-related documents carefully.

              </p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          {/* ── Right: Results (sticky) ── */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />

            {/* Total Value card */}
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                Total Value
              </p>
              <p
                className="text-4xl font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {formatINR(fv)}
              </p>
            </div>

            {/* Breakdown card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Investment Breakdown
              </p>

              {/* Progress bar */}
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-brand-teal rounded-full transition-all duration-500"
                  style={{ width: `${investedPct}%` }}
                />
              </div>

              {[
                { label: 'Total Invested', value: formatINR(invested), color: 'bg-brand-teal' },
                { label: 'Expected Returns', value: formatINR(returns), color: 'bg-gray-300' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} />
                    <span className="text-sm text-slate-500" style={{ fontFamily: 'var(--font-body)' }}>
                      {row.label}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>
                    {row.value}
                  </span>
                </div>
              ))}

              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                  Total Value
                </span>
                <span className="text-sm font-semibold text-brand-teal" style={{ fontFamily: 'var(--font-display)' }}>
                  {formatINR(fv)}
                </span>
              </div>

              <Link href="/apply">
                <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn cursor-pointer">
                  Explore Investment Options
                  <svg width="14" height="14" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Quick tip card */}
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-widest text-brand-teal font-semibold mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                Pro Tip
              </p>
              <p className="text-xs text-slate-500 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Increasing your SIP by just <span className="font-semibold text-slate-700">10% annually</span> (Step-Up SIP) can nearly double your corpus over a 15-year period.
              </p>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2.2s infinite;
        }
        @keyframes shimmer {
          0% { left: -60%; }
          100% { left: 130%; }
        }
      `}</style>
    </div>
  );
}
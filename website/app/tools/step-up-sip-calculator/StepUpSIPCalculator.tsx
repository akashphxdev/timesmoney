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

export default function StepUpSIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [stepUpPct, setStepUpPct] = useState(10);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  const calc = useCallback(() => {
    const r = returnRate / 12 / 100;
    const g = stepUpPct / 100;
    let corpus = 0;
    let invested = 0;
    let currentSIP = monthly;
    let regularCorpus = 0;
    const yearData: { yr: number; stepUp: number; regular: number; sip: number }[] = [];

    for (let yr = 1; yr <= years; yr++) {
      for (let m = 0; m < 12; m++) {
        corpus = (corpus + currentSIP) * (1 + r);
        invested += currentSIP;
        regularCorpus = (regularCorpus + monthly) * (1 + r);
      }
      yearData.push({ yr, stepUp: Math.round(corpus), regular: Math.round(regularCorpus), sip: Math.round(currentSIP) });
      currentSIP = Math.round(currentSIP * (1 + g));
    }

    const regularInvested = monthly * years * 12;
    return { corpus, invested, gains: corpus - invested, regularCorpus, regularInvested, extraGain: corpus - regularCorpus, yearData, finalSIP: currentSIP };
  }, [monthly, stepUpPct, returnRate, years]);

  const { corpus, invested, gains, regularCorpus, extraGain, yearData, finalSIP } = calc();

  return (
    <div className="font-sans">
       <AdBanner page="CALCULATOR" position="TOP" />
      <div className="bg-brand-teal py-8 px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Step-Up SIP Calculator</h1>
              <p className="text-xs text-white/70">Increase SIP Amount Every Year</p>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">A Step-Up SIP increases your monthly investment by a fixed % each year — aligning with your income growth to dramatically boost your corpus.</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            {[{ val: formatINR(corpus), label: 'Step-Up Corpus' }, { val: formatINR(extraGain), label: 'Extra vs Regular SIP' }, { val: formatINR(finalSIP) + '/mo', label: `SIP in Year ${years}` }].map(s => (
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
              <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">Investment Details</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm">
              {[
                { label: 'Initial Monthly SIP', value: monthly, min: 500, max: 100000, step: 500, prefix: '₹', onChange: setMonthly, minLabel: '₹500', maxLabel: '₹1,00,000' },
                { label: 'Annual Step-Up %', value: stepUpPct, min: 5, max: 50, step: 5, suffix: '%', onChange: setStepUpPct, minLabel: '5%', maxLabel: '50%' },
                { label: 'Expected Return Rate', value: returnRate, min: 1, max: 30, step: 0.5, suffix: '%', onChange: setReturnRate, minLabel: '1%', maxLabel: '30%' },
                { label: 'Investment Period', value: years, min: 1, max: 40, step: 1, suffix: 'Yr', onChange: setYears, minLabel: '1 Year', maxLabel: '40 Years' },
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

            {/* Year comparison */}
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Step-Up vs Regular SIP Comparison</p>
              <div className="space-y-3">
                {yearData.filter((_, i) => i % Math.max(1, Math.floor(years / 6)) === 0 || i === yearData.length - 1).map(({ yr, stepUp, regular, sip }) => (
                  <div key={yr}>
                    <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                      <span>Year {yr} <span className="text-slate-400">(SIP: {formatINR(sip)}/mo)</span></span>
                      <span className="text-brand-teal font-medium">+{formatINR(stepUp - regular)} extra</span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute h-full bg-gray-300 rounded-full" style={{ width: `${Math.round((regular / stepUp) * 100)}%` }} />
                      <div className="absolute h-full bg-brand-teal/40 rounded-full" style={{ width: '100%' }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>Regular: {formatINR(regular)}</span>
                      <span>Step-Up: {formatINR(stepUp)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Why <span className="text-brand-teal">Step-Up SIP?</span></h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">A Step-Up SIP (also called Top-Up SIP) lets you increase your monthly investment by a fixed percentage every year. As your income grows, so does your SIP — maximizing the power of compounding.</p>
              <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-4 mb-5">
                <p className="text-sm font-semibold text-slate-800 mb-1">Example</p>
                <p className="text-xs text-slate-500">₹5,000/month SIP at 12% for 20 years = <strong className="text-slate-700">{formatINR(monthly * ((Math.pow(1 + 12/1200, 240) - 1) / (12/1200)) * (1 + 12/1200))}</strong> corpus. With 10% annual step-up, the same grows to significantly more.</p>
              </div>
              <p className="text-[11px] text-slate-400 border-t border-gray-100 pt-4 leading-relaxed"><span className="font-semibold text-slate-500">Disclaimer:</span> Returns are illustrative. Mutual fund investments are subject to market risks.</p>
              <AdBanner page="CALCULATOR" position="BOTTOM" className="mt-4" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <AdBanner page="CALCULATOR" position="SIDEBAR" className="mb-2" />
            <div className="bg-brand-teal rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/65 mb-1">Step-Up Corpus</p>
              <p className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{formatINR(corpus)}</p>
              <p className="text-xs text-white/60 mt-1">vs {formatINR(regularCorpus)} regular SIP</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Step-Up Breakdown</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-brand-teal rounded-full transition-all duration-500" style={{ width: `${Math.round((invested / corpus) * 100)}%` }} />
              </div>
              {[{ label: 'Total Invested', value: formatINR(invested), color: 'bg-brand-teal' }, { label: 'Total Gains', value: formatINR(gains), color: 'bg-gray-300' }, { label: 'Extra vs Regular SIP', value: formatINR(extraGain), color: 'bg-emerald-400' }].map(row => (
                <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${row.color} flex-shrink-0`} /><span className="text-sm text-slate-500">{row.label}</span></div>
                  <span className="text-sm font-semibold text-slate-800">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-semibold text-slate-900">Final Corpus</span>
                <span className="text-sm font-semibold text-brand-teal">{formatINR(corpus)}</span>
              </div>
              <Link href="/apply">
              <button className="relative w-full overflow-hidden mt-5 bg-brand-teal hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-md shadow-green-500/20 flex items-center justify-center gap-2 shimmer-btn cursor-pointer">
                Start Step-Up SIP
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
'use client';

import { useState } from 'react';

interface FormField {
  type: string;
  label: string;
  required?: boolean;
  options?: string[];
}

interface Props {
  productId: string;           // ✅ ADDED
  productName: string;
  productSlug: string;
  formFields?: FormField[] | null;
}

const EMPLOYMENT_TYPES = ['Salaried', 'Self Employed', 'Business Owner', 'Student', 'Retired'];

export default function ConsultationForm({ productId, productName, productSlug, formFields }: Props) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [step1, setStep1] = useState({ name: '', phone: '', employmentType: '' });
  const [step2, setStep2] = useState<Record<string, string>>({});

  const hasStep2 = formFields && formFields.length > 0;

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!step1.name.trim()) { setError('Please enter your name'); return; }
    if (!/^[6-9]\d{9}$/.test(step1.phone)) { setError('Enter a valid 10-digit phone number'); return; }
    if (!step1.employmentType) { setError('Please select employment type'); return; }
    setError('');
    if (!hasStep2) { handleFinalSubmit(); return; }
    setStep(2);
  };

  const handleFinalSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setError('');
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
      const res = await fetch(`${API_URL}/public/leads/product`, {   // ✅ FIXED endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: step1.name,
          phone: step1.phone,
          productId,                                                   // ✅ ADDED
          customData: {
            employmentType: step1.employmentType,
            ...step2,                                                  // ✅ dynamic fields
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? 'Failed');
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-brand-teal/5 border border-brand-teal/20 flex items-center justify-center mx-auto mb-5">
          <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
            <path d="M3 11l5.5 5.5L19 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--color-brand-teal, #059669)' }}/>
          </svg>
        </div>
        <h3 className="text-base font-black text-slate-900 mb-2">Request Submitted!</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Our expert will call you shortly regarding{' '}
          <span className="font-semibold text-slate-700">{productName}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

      {/* Header */}
      <div className="bg-brand-teal px-5 py-6">
        <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">
          Free Consultation
        </p>
        <h3 className="text-white text-[15px] font-black leading-snug m-0">
          Get Expert Advice on{' '}
          <span className="text-white/80">{productName}</span>
        </h3>
      </div>

      {/* Step Tabs */}
      {hasStep2 && (
        <div className="grid grid-cols-2 border-b border-gray-100">
          {['Basic Info', 'Product Details'].map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => i === 0 && setStep(1)}
              className={`py-3 text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 ${
                step === i + 1
                  ? 'text-brand-teal border-b-2 border-brand-teal'
                  : step > i + 1
                  ? 'text-brand-teal/60'
                  : 'text-slate-300'
              }`}
            >
              <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px] font-bold ${
                step === i + 1 ? 'bg-brand-teal text-white' :
                step > i + 1 ? 'bg-brand-teal/10 text-brand-teal' :
                'bg-gray-100 text-slate-400'
              }`}>
                {step > i + 1 ? '✓' : i + 1}
              </span>
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="p-6">   {/* ✅ increased from p-5 to p-6 */}

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-5">  {/* ✅ space-y-4 → space-y-5 */}

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={step1.name}
                onChange={(e) => setStep1({ ...step1, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <div className="flex gap-2">
                <span className="px-3 py-3 rounded-xl border border-gray-200 text-sm text-slate-500 bg-gray-50 font-semibold">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="10-digit number"
                  maxLength={10}
                  value={step1.phone}
                  onChange={(e) => setStep1({ ...step1, phone: e.target.value.replace(/\D/g, '') })}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Employment Type *
              </label>
              <div className="flex flex-wrap gap-2">
                {EMPLOYMENT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setStep1({ ...step1, employmentType: type })}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-colors ${
                      step1.employmentType === type
                        ? 'bg-brand-teal text-white border-brand-teal'
                        : 'bg-white text-slate-600 border-gray-200 hover:border-brand-teal hover:text-brand-teal'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="text-xs text-red-500 font-semibold">{error}</p>}

            <button
              type="submit"
              className="relative w-full overflow-hidden bg-brand-teal hover:bg-green-700 text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-md shadow-green-500/20 active:scale-[0.98] shimmer-btn flex items-center justify-center gap-2"
            >
              {hasStep2 ? 'Next Step' : 'Get Free Consultation'}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        )}

        {/* STEP 2 — Dynamic Fields */}
        {step === 2 && formFields && (
          <form onSubmit={handleFinalSubmit} className="space-y-5">
            {formFields.map((field, i) => (
              <div key={i}>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {field.label} {field.required && '*'}
                </label>
                {field.type === 'select' && field.options ? (
                  <select
                    required={field.required}
                    value={step2[field.label] ?? ''}
                    onChange={(e) => setStep2({ ...step2, [field.label]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-slate-800 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    required={field.required}
                    placeholder={`Enter ${field.label}`}
                    value={step2[field.label] ?? ''}
                    onChange={(e) => setStep2({ ...step2, [field.label]: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors resize-none"
                  />
                ) : (
                  <input
                    type={field.type === 'number' ? 'number' : 'text'}
                    required={field.required}
                    placeholder={`Enter ${field.label}`}
                    value={step2[field.label] ?? ''}
                    onChange={(e) => setStep2({ ...step2, [field.label]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-colors"
                  />
                )}
              </div>
            ))}

            {error && <p className="text-xs text-red-500 font-semibold">{error}</p>}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl border border-gray-200 text-sm font-bold text-slate-500 hover:border-brand-teal hover:text-brand-teal transition-colors flex items-center gap-1.5"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 7H1M7 13L1 7l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="relative flex-1 overflow-hidden bg-brand-teal hover:bg-green-700 text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-md shadow-green-500/20 active:scale-[0.98] shimmer-btn disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? 'Submitting...' : 'Get Consultation'}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Security */}
        <div className="flex items-center justify-center gap-1.5 mt-5 text-slate-300">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1L1 3v2.75C1 8.1 3 10.1 5.5 10.5 8 10.1 10 8.1 10 5.75V3L5.5 1z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
            <path d="M3.5 5.5l1.5 1.5 2.5-2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[10px]">100% secure & confidential</span>
        </div>
      </div>

      <style jsx>{`
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
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
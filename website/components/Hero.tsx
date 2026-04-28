"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdBanner from '@/components/ads/AdBanner';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
}

interface HeroProps {
  categories: Category[];
  subCategories: SubCategory[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

const EMPLOYMENT_TYPES = ['Salaried', 'Self-Employed', 'Business', 'Student', 'Others'];

export const Hero = ({ categories, subCategories }: HeroProps) => {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);

  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [subCategoryId, setSubCategoryId] = useState('');
  const [employmentType, setEmploymentType] = useState('');

  const [email, setEmail] = useState('');
  const [leadId, setLeadId] = useState('');
  const [redirectSlugs, setRedirectSlugs] = useState({ category: '', subCategory: '' });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>([]);

  const [savedName, setSavedName] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('tm_user_name');
    if (stored) setSavedName(stored);
  }, []);

  const filteredSubs = subCategories.filter((s) => s.categoryId === categoryId);

  useEffect(() => { setSubCategoryId(''); }, [categoryId]);

  const fieldError = (field: string) => errors.find((e) => e.field === field)?.message;

  const selectedCategoryName = categories.find((c) => c.id === categoryId)?.name ?? '';

  const cards = [
    { badge: "PERSONAL LOAN", title: "Get instant funds up to", amount: "₹50,00,000", features: ["Starting 9.98%*", "Instant Approval"], color: "from-blue-600 to-blue-800", type: "VISA" },
    { badge: "CREDIT CARD", title: "Limit approved up to", amount: "₹10,00,000", features: ["5% Cashback", "0 Joining Fee"], color: "from-[#10B981] to-[#065F46]", type: "Mastercard" },
    { badge: "HOME LOAN", title: "Low interest starting", amount: "8.40% P.A.*", features: ["Easy Top-up", "Balance Transfer"], color: "from-[#F59E0B] to-[#B45309]", type: "Rupay" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentIdx((prev) => (prev + 1) % cards.length), 3500);
    return () => clearInterval(timer);
  }, [cards.length]);

  const handleStep1 = async () => {
    setErrors([]);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/public/home/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          categoryId,
          subCategoryId: subCategoryId || undefined,
          employmentType: employmentType || undefined,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrors(json.errors ?? [{ field: 'general', message: json.message ?? 'Something went wrong' }]);
        return;
      }

      const selectedCategory = categories.find((c) => c.id === categoryId);
      const selectedSub = subCategories.find((s) => s.id === subCategoryId);

      setLeadId(json.data.id);
      setRedirectSlugs({
        category: selectedCategory?.slug ?? '',
        subCategory: json.data.subCategorySlug ?? selectedSub?.slug ?? '',
      });

      localStorage.setItem('tm_user_name', name.trim());
      localStorage.setItem('tm_user_phone', phone.trim());
      setSavedName(name.trim());

      setStep(2);
    } catch {
      setErrors([{ field: 'general', message: 'Network error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleStep2 = async () => {
    setErrors([]);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/public/home/lead/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrors(json.errors ?? [{ field: 'general', message: json.message ?? 'Something went wrong' }]);
        return;
      }

      if (email.trim()) {
        localStorage.setItem('tm_user_email', email.trim());
      }

      const { category, subCategory } = redirectSlugs;
      const path = subCategory ? `/${category}/${subCategory}` : `/${category}`;
      router.push(path);

    } catch {
      setErrors([{ field: 'general', message: 'Network error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-3 md:py-5 overflow-hidden">
      <AdBanner page="HOME" position="TOP" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* ── Left: Text + Card Slider ── */}
          <div className="flex flex-col gap-3">

            {/* Returning user greeting */}
            {savedName && (
              <div className="inline-flex items-center gap-2 w-fit bg-brand-teal/10 border border-brand-teal/20 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-brand-teal">
                  Welcome back, {savedName}!
                </span>
              </div>
            )}

            {/* Trust badge */}
            {!savedName && (
              <div className="inline-flex items-center gap-2 w-fit">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full">
                  🇮🇳 Trusted by 10L+ Indians
                </span>
              </div>
            )}

            {/* Heading */}
            <div>
              <h1
                className="text-3xl md:text-4xl text-slate-900 leading-[1.15]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Instant Loans &amp; <br />
                <span className="text-brand-teal">Best Offers,</span>{' '}
                <span className="text-slate-400 font-light">Right Here.</span>
              </h1>
              <p
                className="mt-2 text-sm text-slate-500 max-w-md leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Compare and apply for Loans, Credit Cards &amp; Investments from India&apos;s top banks — in minutes.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-4 sm:gap-6 py-2 border-y border-gray-100">
              {[
                { val: '8.5%', label: 'Starting Rate' },
                { val: '₹50L', label: 'Max Loan' },
                { val: '2 Min', label: 'Approval' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-base sm:text-lg font-semibold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>
                    {s.val}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Slider — full width on mobile, max-xs on larger */}
            <div className="relative w-full sm:max-w-xs h-[190px] sm:h-[200px] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 flex items-start justify-center p-3">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`absolute w-full h-44 rounded-xl bg-gradient-to-br ${card.color} p-5 sm:p-6 text-white shadow-xl transition-all duration-700 ease-in-out transform overflow-hidden ${
                      idx === currentIdx
                        ? 'opacity-100 translate-x-0 scale-100 z-20'
                        : idx === (currentIdx + 1) % cards.length
                        ? 'opacity-0 translate-x-full scale-95 z-10 pointer-events-none'
                        : 'opacity-0 -translate-x-full scale-95 z-0 pointer-events-none'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-10 h-8 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 rounded-md relative overflow-hidden shadow-inner border border-black/10">
                        <div className="absolute inset-0 grid grid-cols-3 gap-px">
                          {[...Array(9)].map((_, i) => <div key={i} className="border-[0.5px] border-black/20" />)}
                        </div>
                      </div>
                      <span className="text-[9px] font-black bg-white/20 px-2.5 py-0.5 rounded-full uppercase tracking-widest">{card.badge}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest mb-0.5">{card.title}</p>
                        <div className="text-xl sm:text-2xl font-mono font-black tracking-tight text-white drop-shadow">{card.amount}</div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="space-y-0.5">
                          <p className="text-[8px] uppercase tracking-widest opacity-70 font-bold">Features</p>
                          <div className="flex space-x-2">
                            {card.features.map(f => <span key={f} className="text-[10px] font-bold">✓ {f}</span>)}
                          </div>
                        </div>
                        <span className="text-lg sm:text-xl font-black italic tracking-tighter drop-shadow">{card.type}</span>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full -mr-14 -mt-14 blur-2xl opacity-50" />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex space-x-1.5 z-30">
                {cards.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${i === currentIdx ? 'w-5 bg-brand-teal' : 'w-1 bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Lead Form ── */}
          {/* Mobile pe top margin add, desktop pe justify-end */}
          <div className="flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 w-full max-w-md">

              {/* Form header */}
              <div className="mb-4">
                <h3
                  className="text-lg text-slate-800"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step === 1
                    ? savedName
                      ? `Check new offers, ${savedName}!`
                      : 'Get Your Best Offers'
                    : 'One Last Step!'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                  {step === 1 ? 'Fill in your details to see personalised offers' : 'Enter your email to receive offers'}
                </p>
              </div>

              {/* General Error */}
              {fieldError('general') && (
                <p className="text-red-500 text-xs font-medium bg-red-50 px-3 py-2 rounded-lg mb-3">
                  {fieldError('general')}
                </p>
              )}

              {/* ── STEP 1 ── */}
              {step === 1 && (
                <div className="space-y-3">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all text-slate-800 text-sm"
                    />
                    {fieldError('name') && <p className="text-red-500 text-[10px] mt-1">{fieldError('name')}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Mobile Number</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium border-r border-gray-200 pr-2.5">+91</span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="000 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full pl-14 pr-3.5 py-2.5 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all text-slate-800 text-sm"
                      />
                    </div>
                    {fieldError('phone') && <p className="text-red-500 text-[10px] mt-1">{fieldError('phone')}</p>}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      What are you looking for?
                    </label>
                    <select
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all text-slate-600 text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      {categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                    </select>
                    {fieldError('categoryId') && <p className="text-red-500 text-[10px] mt-1">{fieldError('categoryId')}</p>}
                  </div>

                  {/* SubCategory */}
                  {categoryId && filteredSubs.length > 0 && (
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {selectedCategoryName} Type
                      </label>
                      <select
                        value={subCategoryId}
                        onChange={(e) => setSubCategoryId(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all text-slate-600 text-sm appearance-none cursor-pointer"
                      >
                        <option value="">Select</option>
                        {filteredSubs.map((sub) => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Employment Type */}
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Employment Type</label>
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all text-slate-600 text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      {EMPLOYMENT_TYPES.map((et) => <option key={et} value={et}>{et}</option>)}
                    </select>
                    {fieldError('employmentType') && <p className="text-red-500 text-[10px] mt-1">{fieldError('employmentType')}</p>}
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      onClick={handleStep1}
                      disabled={loading}
                      className="relative w-full overflow-hidden bg-brand-teal hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md shadow-green-500/20 active:scale-[0.98] shimmer-btn disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
                    >
                      {loading ? 'Please wait...' : 'Check Best Offers →'}
                    </button>
                  </div>

                  <p className="text-center text-[10px] text-slate-400">By clicking, you agree to our Terms &amp; Conditions</p>
                </div>
              )}

              {/* ── STEP 2 ── */}
              {step === 2 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      inputMode="email"
                      placeholder="yourname@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all text-slate-800 text-sm"
                    />
                    {fieldError('email') && <p className="text-red-500 text-[10px] mt-1">{fieldError('email')}</p>}
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={handleStep2}
                      disabled={loading}
                      className="relative w-full overflow-hidden bg-brand-teal hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md shadow-green-500/20 active:scale-[0.98] shimmer-btn disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
                    >
                      {loading ? 'Redirecting...' : 'View My Offers →'}
                    </button>
                  </div>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full text-center text-xs text-slate-400 hover:text-brand-teal transition-colors py-1"
                  >
                    ← Go back
                  </button>

                  <p className="text-center text-[10px] text-slate-400">By clicking, you agree to our Terms &amp; Conditions</p>
                </div>
              )}

            </div>
          </div>

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
    </section>
  );
};
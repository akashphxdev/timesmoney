'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const EMPLOYMENT_TYPES = ['Salaried', 'Self-Employed', 'Business', 'Student', 'Others'];

export const WelcomeModal = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [subCategoryId, setSubCategoryId] = useState('');
  const [employmentType, setEmploymentType] = useState('');

  // Step 2
  const [email, setEmail] = useState('');
  const [leadId, setLeadId] = useState('');
  const [redirectSlugs, setRedirectSlugs] = useState({ category: '', subCategory: '' });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>([]);

  const filteredSubs = subCategories.filter((s) => s.categoryId === categoryId);
  useEffect(() => { setSubCategoryId(''); }, [categoryId]);

  const fieldError = (field: string) => errors.find((e) => e.field === field)?.message;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/public/home');
        setCategories(res.data.data.categories ?? []);
        setSubCategories(res.data.data.subCategories ?? []);
      } catch (err) {
        console.error('Fetch failed:', err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const seen = localStorage.getItem('welcome_modal_seen');
    if (seen) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    localStorage.setItem('welcome_modal_seen', 'true');
    setShow(false);
  };

  // ── Step 1 ──
  const handleStep1 = async () => {
    if (!name || !phone || !categoryId) {
      setErrors([{ field: 'general', message: 'Name, phone and category are required' }]);
      return;
    }
    setErrors([]);
    setLoading(true);
    try {
      const res = await api.post('/public/home/lead', {
        name: name.trim(),
        phone: phone.trim(),
        categoryId,
        subCategoryId: subCategoryId || undefined,
        employmentType: employmentType || undefined,
      });

      const selectedCategory = categories.find((c) => c.id === categoryId);
      const selectedSub = subCategories.find((s) => s.id === subCategoryId);

      setLeadId(res.data.data.id);
      setRedirectSlugs({
        category: selectedCategory?.slug ?? '',
        subCategory: res.data.data.subCategorySlug ?? selectedSub?.slug ?? '',
      });

      setStep(2);
    } catch (err: unknown) {
      const apiErr = err as { response?: { data?: { errors?: { field: string; message: string }[]; message?: string } } };
      const json = apiErr?.response?.data;
      setErrors(json?.errors ?? [{ field: 'general', message: json?.message ?? 'Something went wrong' }]);
    } finally {
      setLoading(false);
    }
  };

  // ── Step 2 ──
  const handleStep2 = async () => {
    if (!email) {
      setErrors([{ field: 'email', message: 'Email is required' }]);
      return;
    }
    setErrors([]);
    setLoading(true);
    try {
      await api.patch(`/public/home/lead/${leadId}`, { email: email.trim() });

      handleClose();
      const { category, subCategory } = redirectSlugs;
      const path = subCategory ? `/${category}/${subCategory}` : `/${category}`;
      router.push(path);
    } catch (err: unknown) {
      const apiErr = err as { response?: { data?: { errors?: { field: string; message: string }[]; message?: string } } };
      const json = apiErr?.response?.data;
      setErrors(json?.errors ?? [{ field: 'general', message: json?.message ?? 'Something went wrong' }]);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.55)' }}
    >
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">

        {/* ── Header ── */}
        <div className="px-8 py-6 relative bg-brand-teal">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
            style={{ background: 'rgba(255,255,255,0.15)' }}
          >
            <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 12 12">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M1 1l10 10M11 1L1 11" />
            </svg>
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              {step === 1 ? (
                <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              )}
            </div>
            <div>
              <p className="text-xs mb-0.5 text-white/60 uppercase tracking-widest">
                Step {step} of 2
              </p>
              <h2 className="text-white font-semibold text-lg leading-tight">
                {step === 1 ? 'Tell us about yourself' : 'Almost there!'}
              </h2>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex gap-1.5">
            <div className="h-1 flex-1 rounded-full bg-white" />
            <div
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                step === 2 ? 'bg-white' : 'bg-white/25'
              }`}
            />
          </div>
        </div>

        {/* ── Form body ── */}
        <div className="px-8 py-7 flex flex-col gap-4">

          {fieldError('general') && (
            <p className="text-red-500 text-xs font-medium bg-red-50 px-4 py-2.5 rounded-xl border border-red-100">
              {fieldError('general')}
            </p>
          )}

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <>
              <div>
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-brand-teal transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Mobile Number</label>
                <div className="flex border border-slate-200 rounded-xl overflow-hidden focus-within:border-brand-teal transition-colors">
                  <span className="flex items-center gap-1.5 px-3 text-sm text-slate-500 bg-slate-50 border-r border-slate-200 whitespace-nowrap">
                    🇮🇳 <span className="font-medium">+91</span>
                  </span>
                  <input
                    type="tel"
                    placeholder="000 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="flex-1 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Category</label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-teal transition-colors appearance-none bg-white"
                  >
                    <option value="">Select</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Sub Category</label>
                  <select
                    value={subCategoryId}
                    onChange={(e) => setSubCategoryId(e.target.value)}
                    disabled={!categoryId || filteredSubs.length === 0}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-teal transition-colors appearance-none bg-white disabled:opacity-40 disabled:bg-slate-50"
                  >
                    <option value="">Select</option>
                    {filteredSubs.map((sub) => (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Employment Type</label>
                <div className="flex flex-wrap gap-2">
                  {EMPLOYMENT_TYPES.map((et) => (
                    <button
                      key={et}
                      type="button"
                      onClick={() => setEmploymentType(et === employmentType ? '' : et)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                        employmentType === et
                          ? 'bg-brand-teal/10 text-brand-teal border-brand-teal'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-brand-teal hover:text-brand-teal'
                      }`}
                    >
                      {et}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleStep1}
                disabled={loading}
                className="w-full bg-brand-teal hover:bg-teal-600 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 mt-1 disabled:opacity-50 active:scale-95"
              >
                {loading ? 'Please wait...' : 'Continue →'}
              </button>

              <p className="text-center text-[11px] text-slate-400">Your data is safe with us. We don't spam.</p>
            </>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <>
              <div>
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-brand-teal transition-colors"
                />
                {fieldError('email') && (
                  <p className="text-red-500 text-[11px] mt-1.5 ml-1">{fieldError('email')}</p>
                )}
              </div>

              <button
                onClick={handleStep2}
                disabled={loading}
                className="w-full bg-brand-teal hover:bg-teal-600 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 mt-1 disabled:opacity-50 active:scale-95"
              >
                {loading ? 'Redirecting...' : 'View My Offers →'}
              </button>

              <button
                onClick={() => setStep(1)}
                className="w-full text-center text-xs text-slate-400 hover:text-brand-teal transition-colors"
              >
                ← Go back
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};
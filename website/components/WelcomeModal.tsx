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

// ── SVG Icons ──────────────────────────────────────────────────────────────
const IconClose = () => (
  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" viewBox="0 0 11 11">
    <path d="M1 1l9 9M10 1L1 10" />
  </svg>
);

const IconStar = () => (
  <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const IconPhone = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
  </svg>
);

const IconLock = () => (
  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const IconMail = () => (
  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconWarning = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
// ───────────────────────────────────────────────────────────────────────────

export const WelcomeModal = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [subCategoryId, setSubCategoryId] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>([]);

  // touched — jinhe user ne chua ho unhi pe field error dikhao
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const filteredSubs = subCategories.filter((s) => s.categoryId === categoryId);
  const selectedCategoryName = categories.find((c) => c.id === categoryId)?.name ?? '';

  useEffect(() => { setSubCategoryId(''); }, [categoryId]);

  const fieldError = (field: string) => errors.find((e) => e.field === field)?.message;
  const showFieldError = (field: string) => touched[field] ? fieldError(field) : undefined;

  const touch = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

  // General errors = woh jo kisi specific field se linked nahi
  const generalErrors = errors.filter(
    (e) => !['name', 'phone', 'categoryId', 'subCategoryId', 'employmentType', 'email'].includes(e.field)
  );

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

  const handleSubmit = async () => {
    // Sabhi fields ko touched mark karo taaki saare errors dikhe
    setTouched({ name: true, phone: true, categoryId: true, subCategoryId: true, employmentType: true, email: true });

    if (!name || !phone || !categoryId) {
      setErrors([
        ...(!name ? [{ field: 'name', message: 'Name required hai' }] : []),
        ...(!phone ? [{ field: 'phone', message: 'Phone required hai' }] : []),
        ...(!categoryId ? [{ field: 'categoryId', message: 'Category select karo' }] : []),
      ]);
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

      const leadId = res.data.data.id;
      localStorage.setItem('tm_user_name', name.trim());
      localStorage.setItem('tm_user_phone', phone.trim());

      if (email.trim()) {
        await api.patch(`/public/home/lead/${leadId}`, { email: email.trim() });
        localStorage.setItem('tm_user_email', email.trim());
      }

      const selectedCategory = categories.find((c) => c.id === categoryId);
      const selectedSub = subCategories.find((s) => s.id === subCategoryId);
      const catSlug = selectedCategory?.slug ?? '';
      const subSlug = res.data.data.subCategorySlug ?? selectedSub?.slug ?? '';

      handleClose();
      router.push(subSlug ? `/${catSlug}/${subSlug}` : `/${catSlug}`);
    } catch (err: unknown) {
      const apiErr = err as { response?: { data?: { errors?: { field: string; message: string }[]; message?: string } } };
      const json = apiErr?.response?.data;
      const backendErrors = json?.errors ?? [{ field: 'general', message: json?.message ?? 'Something went wrong' }];
      setErrors(backendErrors);
      // Backend se jo bhi errors aaye unhe sab touched mark karo
      setTouched((prev) => {
        const next = { ...prev };
        backendErrors.forEach((e) => { next[e.field] = true; });
        return next;
      });
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <>
      <style>{`
        .wm-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(3px);
          animation: wmFadeIn 0.25s ease;
        }
        @media (min-width: 640px) {
          .wm-overlay { align-items: center; padding: 16px; }
        }
        @keyframes wmFadeIn { from { opacity:0 } to { opacity:1 } }

        .wm-card {
          background: #fff;
          width: 100%;
          max-width: 460px;
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          animation: wmSlideUp 0.35s cubic-bezier(0.32, 1.2, 0.64, 1);
          max-height: 96vh;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .wm-card::-webkit-scrollbar { display: none; }
        @media (min-width: 640px) {
          .wm-card { border-radius: 20px; max-height: 92vh; }
        }
        @keyframes wmSlideUp {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        /* ── Header ── */
        .wm-header {
          background: var(--brand-teal, #0d9488);
          padding: 18px 22px 16px;
          position: relative;
          overflow: hidden;
        }
        .wm-header::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 130px; height: 130px;
          background: rgba(255,255,255,0.07);
          border-radius: 50%;
        }
        .wm-close {
          position: absolute;
          top: 12px; right: 12px;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: background 0.2s;
          z-index: 2;
        }
        .wm-close:hover { background: rgba(255,255,255,0.28); }
        .wm-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.22);
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.92);
          margin-bottom: 8px;
        }
        .wm-title {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 2px;
          line-height: 1.25;
          letter-spacing: -0.3px;
        }
        .wm-subtitle {
          font-size: 12px;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        /* ── Body ── */
        .wm-body {
          padding: 16px 22px 20px;
        }

        /* ── General error banner ── */
        .wm-error-banner {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: #fef2f2;
          border: 1.5px solid #fca5a5;
          border-radius: 10px;
          padding: 10px 12px;
          margin-bottom: 14px;
          animation: wmShake 0.35s ease;
        }
        .wm-error-banner-icon { color: #dc2626; flex-shrink: 0; margin-top: 1px; }
        .wm-error-banner-text { font-size: 12px; color: #dc2626; font-weight: 500; line-height: 1.4; }

        @keyframes wmShake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-4px); }
          40%      { transform: translateX(4px); }
          60%      { transform: translateX(-3px); }
          80%      { transform: translateX(3px); }
        }

        .wm-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .wm-field { margin-bottom: 10px; }
        .wm-label {
          display: block;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 5px;
        }

        /* ── Input base ── */
        .wm-input {
          width: 100%;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 13px;
          color: #1e293b;
          background: #f8fafc;
          outline: none;
          transition: all 0.18s;
          box-sizing: border-box;
        }
        .wm-input:focus {
          border-color: var(--brand-teal, #0d9488);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(13,148,136,0.08);
        }
        .wm-input.wm-input-err {
          border-color: #f87171;
          background: #fff5f5;
        }
        .wm-input.wm-input-err:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }
        .wm-input::placeholder { color: #cbd5e1; font-size: 12px; }

        /* ── Phone ── */
        .wm-phone-wrap {
          display: flex;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          background: #f8fafc;
          transition: all 0.18s;
        }
        .wm-phone-wrap:focus-within {
          border-color: var(--brand-teal, #0d9488);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(13,148,136,0.08);
        }
        .wm-phone-wrap.wm-input-err {
          border-color: #f87171;
          background: #fff5f5;
        }
        .wm-phone-wrap.wm-input-err:focus-within {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }
        .wm-phone-prefix {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 10px;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          border-right: 1.5px solid #e2e8f0;
          white-space: nowrap;
        }
        .wm-phone-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 8px 10px;
          font-size: 13px;
          color: #1e293b;
          background: transparent;
          min-width: 0;
        }
        .wm-phone-input::placeholder { color: #cbd5e1; font-size: 12px; }

        /* ── Select ── */
        .wm-select {
          width: 100%;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 13px;
          color: #1e293b;
          background: #f8fafc;
          outline: none;
          transition: all 0.18s;
          appearance: none;
          cursor: pointer;
          box-sizing: border-box;
        }
        .wm-select:focus {
          border-color: var(--brand-teal, #0d9488);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(13,148,136,0.08);
        }
        .wm-select.wm-input-err {
          border-color: #f87171;
          background: #fff5f5;
        }

        /* ── Field error text ── */
        .wm-field-err {
          font-size: 10px;
          color: #ef4444;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 3px;
          font-weight: 500;
          animation: wmFadeIn 0.2s ease;
        }

        /* ── Chips ── */
        .wm-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .wm-chip {
          padding: 5px 11px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          color: #64748b;
          cursor: pointer;
          transition: all 0.15s;
        }
        .wm-chip:hover { border-color: var(--brand-teal, #0d9488); color: var(--brand-teal, #0d9488); }
        .wm-chip.active {
          background: rgba(13,148,136,0.07);
          border-color: var(--brand-teal, #0d9488);
          color: var(--brand-teal, #0d9488);
          font-weight: 600;
        }

        /* ── Divider ── */
        .wm-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 8px 0 10px;
        }
        .wm-divider-line { flex: 1; height: 1px; background: #f1f5f9; }
        .wm-divider-text {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: #94a3b8;
          font-weight: 500;
          white-space: nowrap;
        }

        /* ── Submit button ── */
        .wm-btn {
          width: 100%;
          background: var(--brand-teal, #0d9488);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 12px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 4px;
          position: relative;
          overflow: hidden;
          letter-spacing: 0.2px;
        }
        .wm-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-100%);
          animation: wmShimmer 2.5s infinite;
        }
        @keyframes wmShimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%);  }
        }
        .wm-btn:hover { background: #0f766e; box-shadow: 0 6px 20px rgba(13,148,136,0.28); transform: translateY(-1px); }
        .wm-btn:active { transform: scale(0.98); }
        .wm-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }

        /* ── Footer ── */
        .wm-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          text-align: center;
          font-size: 10px;
          color: #94a3b8;
          margin-top: 10px;
        }
      `}</style>

      <div className="wm-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
        <div className="wm-card">

          {/* ── Header ── */}
          <div className="wm-header">
            <button className="wm-close" onClick={handleClose}><IconClose /></button>
            <div className="wm-badge"><IconStar /> Exclusive Offers</div>
            <h2 className="wm-title">Get Your Best Financial Offer</h2>
            <p className="wm-subtitle">Quick form — less than 60 seconds</p>
          </div>

          {/* ── Body ── */}
          <div className="wm-body">

            {/* General / backend error banner */}
            {generalErrors.length > 0 && (
              <div className="wm-error-banner">
                <span className="wm-error-banner-icon"><IconWarning /></span>
                <div className="wm-error-banner-text">
                  {generalErrors.map((e, i) => <div key={i}>{e.message}</div>)}
                </div>
              </div>
            )}

            {/* Name + Phone */}
            <div className="wm-row">
              <div className="wm-field">
                <label className="wm-label">Full Name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((prev) => prev.filter((err) => err.field !== 'name')); }}
                  onBlur={() => touch('name')}
                  className={`wm-input${showFieldError('name') ? ' wm-input-err' : ''}`}
                />
                {showFieldError('name') && (
                  <p className="wm-field-err"> {showFieldError('name')}</p>
                )}
              </div>

              <div className="wm-field">
                <label className="wm-label">Mobile</label>
                <div className={`wm-phone-wrap${showFieldError('phone') ? ' wm-input-err' : ''}`}>
                  <span className="wm-phone-prefix">
                    <IconPhone /> +91
                  </span>
                  <input
                    type="tel"
                    placeholder="0000000000"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '').slice(0, 10)); setErrors((prev) => prev.filter((err) => err.field !== 'phone')); }}
                    onBlur={() => touch('phone')}
                    className="wm-phone-input"
                  />
                </div>
                {showFieldError('phone') && (
                  <p className="wm-field-err"> {showFieldError('phone')}</p>
                )}
              </div>
            </div>

            {/* Category + SubCategory */}
            <div className="wm-row" style={{ marginBottom: 10 }}>
              <div>
                <label className="wm-label">Looking for?</label>
                <select
                  value={categoryId}
                  onChange={(e) => { setCategoryId(e.target.value); setErrors((prev) => prev.filter((err) => err.field !== 'categoryId')); }}
                  onBlur={() => touch('categoryId')}
                  className={`wm-select${showFieldError('categoryId') ? ' wm-input-err' : ''}`}
                >
                  <option value="">Select</option>
                  {categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
                {showFieldError('categoryId') && (
                  <p className="wm-field-err"> {showFieldError('categoryId')}</p>
                )}
              </div>

              {categoryId && filteredSubs.length > 0 && (
                <div>
                  <label className="wm-label">{selectedCategoryName} Type</label>
                  <select
                    value={subCategoryId}
                    onChange={(e) => setSubCategoryId(e.target.value)}
                    className="wm-select"
                  >
                    <option value="">Select</option>
                    {filteredSubs.map((sub) => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
                  </select>
                </div>
              )}
            </div>

            {/* Employment Type */}
            <div className="wm-field">
              <label className="wm-label">Employment Type</label>
              <div className="wm-chips">
                {EMPLOYMENT_TYPES.map((et) => (
                  <button
                    key={et}
                    type="button"
                    onClick={() => setEmploymentType(et === employmentType ? '' : et)}
                    className={`wm-chip${employmentType === et ? ' active' : ''}`}
                  >
                    {et}
                  </button>
                ))}
              </div>
              {showFieldError('employmentType') && (
                <p className="wm-field-err" style={{ marginTop: 6 }}> {showFieldError('employmentType')}</p>
              )}
            </div>

            {/* Email divider */}
            <div className="wm-divider">
              <div className="wm-divider-line" />
              <span className="wm-divider-text"><IconMail /> Optional — get offers on email</span>
              <div className="wm-divider-line" />
            </div>

            {/* Email */}
            <div className="wm-field">
              <label className="wm-label">Email Address</label>
              <input
                type="email"
                placeholder="rahul@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((prev) => prev.filter((err) => err.field !== 'email')); }}
                onBlur={() => touch('email')}
                className={`wm-input${showFieldError('email') ? ' wm-input-err' : ''}`}
              />
              {showFieldError('email') && (
                <p className="wm-field-err"> {showFieldError('email')}</p>
              )}
            </div>

            {/* Submit */}
            <button onClick={handleSubmit} disabled={loading} className="wm-btn">
              {loading ? 'Please wait...' : 'Check My Offers →'}
            </button>

            <p className="wm-footer">
              <IconLock /> Your data is 100% safe. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
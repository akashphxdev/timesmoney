'use client';

// Path: website/app/apply/ApplyWizard.tsx

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const IMG_URL = process.env.NEXT_PUBLIC_API_URL_IMG ?? '';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  subCategories: SubCategory[];
}

// ─── Arrow icons ──────────────────────────────────────────────────────────────

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

// ─── Main Wizard ──────────────────────────────────────────────────────────────

export default function ApplyWizard({
  categories,
}: {
  categories: Category[];
  initialCategory?: string | null;
  initialSubCategory?: string | null;
}) {
  const router = useRouter();

  const [step, setStep] = useState<0 | 1>(0);
  const [selectedCat, setSelectedCat] = useState<Category | null>(null);

  function handleCategorySelect(cat: Category) {
    setSelectedCat(cat);
    setStep(1);
  }

  function handleSubCategorySelect(sub: SubCategory) {
    router.push(`/${selectedCat!.slug}/${sub.slug}`);
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-brand-teal px-6 pt-8 pb-10">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-white/60 mb-1">TimesMoney</p>
          <h1 className="text-[22px] font-extrabold text-white leading-tight">Check Your Eligibility</h1>
          <p className="text-[13px] text-white/70 mt-2 leading-relaxed">
            Select a product and check your approval chances instantly.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="max-w-2xl mx-auto px-4 -mt-5 mb-10">
        <div className="bg-white rounded-2xl p-7 shadow-[0_4px_40px_rgba(0,0,0,0.08)]">

          {/* ── Step 0: Category ── */}
          {step === 0 && (
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-1.5">What are you looking for?</h2>
              <p className="text-[13px] text-gray-500 mb-7">Select a category to get started.</p>

              {categories.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  <p className="text-sm">No categories found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat)}
                      className="flex flex-col items-center gap-2.5 px-3 py-5 rounded-2xl border border-gray-200 bg-gray-50 hover:border-brand-teal hover:bg-brand-teal/5 hover:text-brand-teal transition-all duration-200 text-center cursor-pointer"
                    >
                      {cat.imageUrl && (
                        <img src={`${IMG_URL}${cat.imageUrl}`} alt={cat.name} className="w-10 h-10 object-contain" />
                      )}
                      <span className="text-[13px] font-bold text-gray-700 leading-snug">{cat.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Step 1: SubCategory ── */}
          {step === 1 && selectedCat && (
            <div>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 hover:text-brand-teal transition-colors mb-5 bg-transparent border-none p-0 cursor-pointer"
              >
                <ArrowLeft /> Back
              </button>

              <h2 className="text-xl font-extrabold text-gray-900 mb-1.5">
                Which {selectedCat.name} product?
              </h2>
              <p className="text-[13px] text-gray-500 mb-7">Choose the product you want to check eligibility for.</p>

              {selectedCat.subCategories.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <p className="text-sm">No products found in this category.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-2.5">
                  {selectedCat.subCategories.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => handleSubCategorySelect(sub)}
                      className="flex items-center justify-between px-4 py-4 rounded-xl border border-gray-200 bg-white hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-200 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        {sub.imageUrl && (
                          <img src={`${IMG_URL}${sub.imageUrl}`} alt={sub.name} className="w-7 h-7 object-contain" />
                        )}
                        <span className="text-[14px] font-semibold text-gray-900">{sub.name}</span>
                      </div>
                      <span className="text-gray-400"><ArrowRight /></span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
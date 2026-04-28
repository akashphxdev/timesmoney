// Path: website/app/products/[slug]/ProductDetail.tsx

import Link from 'next/link';
import ConsultationForm from '@/components/ConsultationForm';
import AdBanner from '@/components/ads/AdBanner';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  description: string | null;
  image: string | null;
  provider: string | null;
  providerLogo: string | null;
  interestRate: string | null;
  processingFee: string | null;
  minAmount: string | null;
  maxAmount: string | null;
  tenure: string | null;
  features: string[] | null;
  benefits: string[] | null;
  eligibility: string[] | null;
  formFields: { type: string; label: string; required?: boolean; options?: string[] }[] | null;
  applyUrl: string | null;
  featured: boolean;
  isBestSeller: boolean;
  badge: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  category: { id: string; name: string; slug: string } | null;
  subCategory: { id: string; name: string; slug: string } | null;
}

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-400 flex-wrap">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            {product.category && (
              <>
                <Link href={`/${product.category.slug}`} className="hover:text-brand-teal transition-colors truncate max-w-[80px] sm:max-w-none">
                  {product.category.name}
                </Link>
                <span>/</span>
              </>
            )}
            {product.subCategory && (
              <>
                <Link href={`/${product.category?.slug}/${product.subCategory.slug}`} className="hover:text-brand-teal transition-colors truncate max-w-[80px] sm:max-w-none">
                  {product.subCategory.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-slate-600 font-medium truncate max-w-[120px] sm:max-w-none">{product.name}</span>
          </div>
        </div>
      </div>

      <AdBanner page="PRODUCT_DETAIL" position="TOP" className="mb-1" />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-8 flex flex-col gap-5 sm:gap-6">

          {/* ── LEFT ── */}
          <div className="min-w-0 space-y-4 sm:space-y-5">

            {/* Header Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-teal/5 flex items-center justify-center overflow-hidden flex-shrink-0 border border-brand-teal/20">
                  {product.providerLogo ? (
                    <img
                      src={`${BACKEND_URL}${product.providerLogo}`}
                      alt={product.provider ?? ''}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <span className="text-base font-bold text-brand-teal">
                      {product.provider?.slice(0, 2) ?? product.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  {product.provider && (
                    <p className="text-xs text-slate-400 mb-0.5">{product.provider}</p>
                  )}
                  <h1 className="text-lg sm:text-xl md:text-3xl font-black text-slate-900 leading-tight mb-2">
                    {product.name}
                  </h1>
                  <div className="flex flex-wrap gap-1.5">
                    {product.category && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-teal/5 text-brand-teal border border-brand-teal/20">
                        {product.category.name}
                      </span>
                    )}
                    {product.subCategory && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                        {product.subCategory.name}
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                        Best Seller
                      </span>
                    )}
                    {product.badge && !product.isBestSeller && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {product.shortDescription && (
                <p className="text-slate-500 text-sm leading-relaxed mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-100">
                  {product.shortDescription}
                </p>
              )}

              {/* Stats */}
              {(product.interestRate || product.minAmount || product.maxAmount || product.tenure || product.processingFee) && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
                  {product.interestRate && (
                    <div className="bg-brand-teal/5 rounded-xl p-2.5 sm:p-3 border border-brand-teal/20">
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mb-1">Interest Rate</p>
                      <p className="text-sm sm:text-base font-black text-brand-teal">{product.interestRate}</p>
                    </div>
                  )}
                  {product.minAmount && (
                    <div className="bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-gray-100">
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mb-1">Min Amount</p>
                      <p className="text-sm sm:text-base font-black text-slate-800">₹{product.minAmount}</p>
                    </div>
                  )}
                  {product.maxAmount && (
                    <div className="bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-gray-100">
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mb-1">Max Amount</p>
                      <p className="text-sm sm:text-base font-black text-slate-800">₹{product.maxAmount}</p>
                    </div>
                  )}
                  {product.tenure && (
                    <div className="bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-gray-100">
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mb-1">Tenure</p>
                      <p className="text-sm sm:text-base font-black text-slate-800">{product.tenure}</p>
                    </div>
                  )}
                  {product.processingFee && (
                    <div className="bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-gray-100">
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mb-1">Processing Fee</p>
                      <p className="text-sm sm:text-base font-black text-slate-800">{product.processingFee}</p>
                    </div>
                  )}
                </div>
              )}

              {product.applyUrl && (
                <a
                  href={product.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-teal text-white text-sm font-bold px-6 sm:px-7 py-2.5 rounded-full hover:bg-green-700 transition-colors shadow-md shadow-green-500/20"
                >
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>

            {/* ── FORM — mobile & tablet only (shows between header and about) ── */}
            <div className="lg:hidden">
              <ConsultationForm
                productId={product.id}
                productName={product.name}
                productSlug={product.slug}
                formFields={product.formFields}
              />
            </div>

            {/* About */}
            {product.description && (
              <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8">
                <h2 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-brand-teal">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  About this Product
                </h2>
                <div
                  className="prose prose-sm max-w-none text-slate-600 prose-headings:text-slate-800 prose-a:text-brand-teal"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}

            <AdBanner page="PRODUCT_DETAIL" position="BETWEEN_CONTENT" className="mb-1" />

            {/* Features / Benefits / Eligibility */}
            {(product.features || product.benefits || product.eligibility) && (
              <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">

                {product.features && (
                  <div>
                    <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2 tracking-wide">
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-brand-teal flex-shrink-0">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Features
                    </h3>
                    <ul className="space-y-3">
                      {(product.features as string[]).map((f: string, i: number) => (
                        <li key={i} className="text-sm sm:text-[15px] leading-relaxed tracking-wide text-slate-600 flex gap-3">
                          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="text-brand-teal mt-1 flex-shrink-0">
                            <path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.benefits && (
                  <div className={product.features ? 'pt-5 sm:pt-6 border-t border-gray-100' : ''}>
                    <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2 tracking-wide">
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-brand-teal flex-shrink-0">
                        <path d="M7 1l1.5 4h4l-3.5 2.5 1.5 4L7 9 3.5 11.5l1.5-4L1.5 5h4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {(product.benefits as string[]).map((b: string, i: number) => (
                        <li key={i} className="text-sm sm:text-[15px] leading-relaxed tracking-wide text-slate-600 flex gap-3">
                          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="text-brand-teal mt-1 flex-shrink-0">
                            <path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.eligibility && (
                  <div className={(product.features || product.benefits) ? 'pt-5 sm:pt-6 border-t border-gray-100' : ''}>
                    <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2 tracking-wide">
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-brand-teal flex-shrink-0">
                        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Eligibility
                    </h3>
                    <ul className="space-y-3">
                      {(product.eligibility as string[]).map((e: string, i: number) => (
                        <li key={i} className="text-sm sm:text-[15px] leading-relaxed tracking-wide text-slate-600 flex gap-3">
                          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="text-brand-teal mt-1 flex-shrink-0">
                            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* ── RIGHT — Sticky Form (desktop only) ── */}
          <div className="hidden lg:block self-start sticky top-20">
            <ConsultationForm
              productId={product.id}
              productName={product.name}
              productSlug={product.slug}
              formFields={product.formFields}
            />
          </div>

        </div>
      </div>

      <AdBanner page="PRODUCT_DETAIL" position="BOTTOM" className="mb-1" />
    </main>
  );
}
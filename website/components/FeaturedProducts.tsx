// Path: website/components/FeaturedProducts.tsx

import React from 'react';
import Link from 'next/link';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

// ==================== TYPES ====================

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  image: string | null;
  provider: string | null;
  providerLogo: string | null;
  interestRate: string | null;
  minAmount: string | null;
  maxAmount: string | null;
  tenure: string | null;
  featured: boolean;
  isBestSeller: boolean;
  badge: string | null;
  category: { id: string; name: string; slug: string } | null;
  subCategory: { id: string; name: string; slug: string } | null;
}

interface FeaturedProductsProps {
  products: Product[];
}

// ==================== HELPERS ====================

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// Returns an array of up to 4 key stats depending on what data is available
const getStats = (product: Product): { label: string; value: string; unit?: string }[] => {
  const stats: { label: string; value: string; unit?: string }[] = [];

  if (product.interestRate) {
    stats.push({ label: 'Interest Rate', value: product.interestRate, unit: 'p.a.' });
  }

  if (product.minAmount && product.maxAmount) {
    stats.push({ label: 'Loan Amount', value: `₹${product.maxAmount}`, unit: 'max' });
  } else if (product.maxAmount) {
    stats.push({ label: 'Amount', value: `₹${product.maxAmount}`, unit: 'max' });
  }

  if (product.tenure) {
    stats.push({ label: 'Tenure', value: product.tenure });
  }

  if (product.category?.name) {
    stats.push({ label: 'Category', value: product.category.name });
  }

  return stats.slice(0, 4);
};

// ==================== PRODUCT CARD ====================

const ProductCard = ({ product }: { product: Product }) => {
  const stats = getStats(product);

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group bg-white flex flex-col rounded-2xl overflow-hidden border transition-shadow hover:shadow-md ${
        product.isBestSeller
          ? 'border-brand-teal border-2'
          : 'border-gray-100 border'
      }`}
    >
      {/* Best Seller Tag */}
      {product.isBestSeller && (
        <div className="bg-brand-teal text-white text-[10px] font-bold uppercase tracking-widest text-center py-1.5">
          Best Seller
        </div>
      )}

      {/* Card Top — Provider + Name + Badge */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5 mb-2.5">
          {/* Provider Logo */}
          <div className="w-9 h-9 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
            {product.providerLogo ? (
              <img
                src={`${BACKEND_URL}${product.providerLogo}`}
                alt={product.provider ?? ''}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                {product.provider?.slice(0, 4) ?? '—'}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400 font-medium">{product.provider ?? 'Provider'}</span>
        </div>

        {/* Product Name */}
        <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-brand-teal transition-colors">
          {product.name}
        </h4>

        {/* Badge */}
        {product.badge && (
          <span className="mt-2 inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            {product.badge}
          </span>
        )}
      </div>

      {/* Stats Grid */}
      {stats.length > 0 && (
        <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 border-b border-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="px-4 py-3">
              <p className="text-[10px] text-slate-400 mb-0.5">{stat.label}</p>
              <p className="text-sm font-bold text-slate-800">
                {stat.value}{' '}
                {stat.unit && (
                  <span className="text-[10px] font-normal text-slate-400">{stat.unit}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Short Description */}
      {product.shortDescription && (
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      )}

      {/* Footer — CTA */}
      <div className="px-4 py-3 mt-auto flex items-center justify-between">
        <span className="text-[10px] text-slate-400">
          {product.subCategory?.name ?? product.category?.name ?? ''}
        </span>
        <span className="flex items-center gap-1.5 text-brand-teal font-bold text-[11px] uppercase tracking-widest group-hover:gap-2.5 transition-all">
          Apply Now
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
};

// ==================== FEATURED PRODUCTS SECTION ====================

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-xl">
            <p className="text-brand-teal text-xs font-black uppercase tracking-[0.2em] mb-3">
              Our Products
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">
              Featured Products
            </h2>
            <p className="text-slate-500 text-sm">
              Top-rated financial products from India's leading banks — all in one place.
            </p>
          </div>
          <Link
            href="/products"
            className="self-start md:self-auto flex items-center gap-2 text-brand-teal font-black text-xs uppercase tracking-widest border-b-2 border-brand-teal pb-1 hover:text-slate-900 hover:border-slate-900 transition-all"
          >
            View All
            <ArrowIcon />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
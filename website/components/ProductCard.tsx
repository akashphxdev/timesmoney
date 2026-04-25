// Path: website/components/ProductCard.tsx

import Link from 'next/link';

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

export default function ProductCard({
  product,
  backendUrl,
}: {
  product: Product;
  backendUrl: string;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
    >
      {/* Top — Provider + Badge */}
      <div className="flex items-start justify-between gap-3 p-[18px] pb-[14px]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[10px] bg-teal-50 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {product.providerLogo ? (
              <img
                src={`${backendUrl}${product.providerLogo}`}
                alt={product.provider ?? ''}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-[13px] font-medium text-teal-700">
                {product.provider?.slice(0, 3) ?? product.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            {product.provider && (
              <p className="text-[11px] text-slate-400">{product.provider}</p>
            )}
            <p className="text-[14px] font-medium text-slate-800 group-hover:text-brand-teal transition-colors leading-snug">
              {product.name}
            </p>
          </div>
        </div>

        {(product.badge || product.isBestSeller) && (
          <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-amber-50 text-amber-800 whitespace-nowrap flex-shrink-0">
            {product.isBestSeller ? 'Best Seller' : product.badge}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mx-[18px]" />

      {/* Stats Row */}
      <div className="grid grid-cols-2">
        <div className="p-[14px] px-[18px] border-r border-gray-100">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">
            {product.interestRate ? 'Interest Rate' : product.minAmount ? 'Min Amount' : 'Tenure'}
          </p>
          <p className="text-[15px] font-medium text-brand-teal">
            {product.interestRate ?? (product.minAmount ? `₹${product.minAmount}` : product.tenure ?? '—')}
          </p>
        </div>
        <div className="p-[14px] px-[18px]">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">
            {product.maxAmount ? 'Max Amount' : 'Category'}
          </p>
          <p className="text-[15px] font-medium text-slate-800">
            {product.maxAmount ? `₹${product.maxAmount}` : product.category?.name ?? '—'}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mx-[18px]" />

      {/* Description */}
      {product.shortDescription && (
        <div className="px-[18px] pt-3 pb-[14px]">
          <p className="text-[12px] text-slate-400 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto px-[18px] py-3 border-t border-gray-100 flex items-center justify-between">
        {product.category && (
          <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-gray-50 text-slate-500">
            {product.subCategory ? product.subCategory.name : product.category.name}
          </span>
        )}
        <span className="text-[12px] font-medium text-brand-teal flex items-center gap-1 ml-auto">
          View Details →
        </span>
      </div>
    </Link>
  );
}
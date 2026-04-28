// Path: website/app/[categorySlug]/[subCategorySlug]/SubCategoryPageUI.tsx

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import AdBanner from '@/components/ads/AdBanner';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  category: { id: string; name: string; slug: string };
}

interface CategoryWithSubs {
  id: string;
  name: string;
  slug: string;
  subCategories: { id: string; name: string; slug: string }[];
}

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

interface Props {
  subCategory: SubCategory;
  category: CategoryWithSubs | null;
  products: Product[];
  categorySlug: string;
  subCategorySlug: string;
}

export default function SubCategoryPageUI({
  subCategory,
  category,
  products,
  categorySlug,
  subCategorySlug,
}: Props) {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-8 sm:py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-400 mb-3 sm:mb-4 flex-wrap">
            <Link href="/" className="hover:text-brand-teal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/${categorySlug}`}
              className="hover:text-brand-teal transition-colors truncate max-w-[100px] sm:max-w-none"
            >
              {subCategory.category.name}
            </Link>
            <span>/</span>
            <span className="text-slate-600 font-medium truncate max-w-[100px] sm:max-w-none">
              {subCategory.name}
            </span>
          </div>

          <AdBanner page="SUB_CATEGORY" position="TOP" className="mb-3 sm:mb-4" />

          <p className="text-brand-teal text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-2 sm:mb-3 truncate">
            {subCategory.category.name} → {subCategory.name}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-2 sm:mb-3">
            {subCategory.name} <span className="text-brand-teal">Products</span>
          </h1>

          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed mb-5 sm:mb-6">
            Explore all {subCategory.name.toLowerCase()} options under{' '}
            {subCategory.category.name.toLowerCase()}.
          </p>

          {/* Sub-category tabs — horizontally scrollable on mobile */}
          {category && category.subCategories.length > 0 && (
            <div className="flex gap-2 mt-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-x-visible scrollbar-hide">
              <Link
                href={`/${categorySlug}`}
                className="flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-gray-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal transition-colors whitespace-nowrap"
              >
                All
              </Link>
              {category.subCategories.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/${categorySlug}/${sub.slug}`}
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
                    sub.slug === subCategorySlug
                      ? 'bg-brand-teal text-white cursor-default pointer-events-none'
                      : 'bg-white border border-gray-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal'
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <p className="text-slate-400 text-base sm:text-lg font-medium">
                No products in {subCategory.name} yet.
              </p>
              <Link
                href={`/${categorySlug}`}
                className="text-brand-teal text-sm font-bold mt-2 inline-block hover:underline"
              >
                View all {subCategory.category.name} products →
              </Link>
            </div>
          ) : (
            <>
              <p className="text-xs text-slate-400 font-medium mb-4 sm:mb-6">
                {products.length} product{products.length !== 1 ? 's' : ''} found
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} backendUrl={BACKEND_URL} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <AdBanner page="SUB_CATEGORY" position="BOTTOM" className="mb-1" />
    </main>
  );
}
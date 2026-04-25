// Path: website/app/[categorySlug]/CategoryPageUI.tsx

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  subCategories: SubCategory[];
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
  category: Category;
  products: Product[];
  categorySlug: string;
}

export default function CategoryPageUI({ category, products, categorySlug }: Props) {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-brand-teal transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">{category.name}</span>
          </div>

          <p className="text-brand-teal text-xs font-black uppercase tracking-[0.2em] mb-3">
            {category.name}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-3">
            {category.name} <span className="text-brand-teal">Products</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed mb-8">
            Explore all {category.name.toLowerCase()} products. Compare options and apply with
            confidence.
          </p>

          {/* Sub-category filter tabs */}
          {category.subCategories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-teal text-white cursor-default">
                All
              </span>
              {category.subCategories.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/${categorySlug}/${sub.slug}`}
                  className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-gray-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg font-medium">
                No products in {category.name} yet.
              </p>
              <Link
                href="/products"
                className="text-brand-teal text-sm font-bold mt-2 inline-block hover:underline"
              >
                View all products →
              </Link>
            </div>
          ) : (
            <>
              <p className="text-xs text-slate-400 font-medium mb-6">
                {products.length} product{products.length !== 1 ? 's' : ''} found
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} backendUrl={BACKEND_URL} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
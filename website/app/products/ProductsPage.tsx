// Path: website/app/products/ProductsPageUI.tsx

import AdBanner from '@/components/ads/AdBanner';
import ProductCard from '@/components/ProductCard';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

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
  products: Product[];
}

export default function ProductsPageUI({ products }: Props) {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdBanner page="PRODUCT" position="TOP" className="mb-1" />
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-teal text-xs font-black uppercase tracking-[0.2em] mb-3">
            All Products
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-3">
            Find the Right <span className="text-brand-teal">Financial Product</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Whether you're looking for a home loan, personal loan, business finance,
            credit card, or the right insurance plan — we bring every option to one
            place so you can compare, choose, and apply with confidence.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <p className="text-slate-400 text-center py-20">No products available right now.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} backendUrl={BACKEND_URL} />
              ))}
            </div>
          )}
        </div>
      </section>
      <AdBanner page="PRODUCT" position="BOTTOM" className="mb-1" />
    </main>
  );
}
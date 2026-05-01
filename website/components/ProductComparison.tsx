'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// ==================== TYPES ====================

interface Product {
  id: string;
  name: string;
  slug: string;
  provider: string | null;
  providerLogo: string | null;
  interestRate: string | null;
  processingFee: string | null;
  minAmount: string | null;
  maxAmount: string | null;
  tenure: string | null;
  applyUrl: string | null;
  featured: boolean;
  isBestSeller: boolean;
  badge: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  products: Product[];
}

// ==================== COLUMNS ====================

const COLUMNS: { key: keyof Product; label: string }[] = [
  { key: 'provider',      label: 'Provider'       },
  { key: 'interestRate',  label: 'Interest Rate'  },
  { key: 'minAmount',     label: 'Min Amount'     },
  { key: 'maxAmount',     label: 'Max Amount'     },
  { key: 'tenure',        label: 'Tenure'         },
  { key: 'processingFee', label: 'Processing Fee' },
];

// ==================== HELPERS ====================

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 whitespace-nowrap">
      {label}
    </span>
  );
}

// Mobile/Tablet card view for product comparison
function ProductCard({ product, index }: { product: Product; index: number }) {
  const isTopRated = index === 0;
  
  // Create array of field-value pairs for display
  const fields = COLUMNS.filter(col => col.key !== 'provider').map(col => ({
    label: col.label,
    value: product[col.key] ? String(product[col.key]) : null
  }));

  return (
    <div className={`rounded-xl border p-3 transition-all ${
      isTopRated 
        ? 'bg-brand-teal/5 border-brand-teal/30' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Product Header */}
      <div className="flex items-start gap-2 mb-3 pb-2 border-b border-gray-100">
        {product.providerLogo && (
          <img
            src={`${BACKEND_URL}${product.providerLogo}`}
            alt={product.provider ?? ''}
            className="w-8 h-8 object-contain rounded-md border border-gray-100 flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1 flex-wrap">
            <p className="text-sm font-semibold text-gray-900 break-words flex-1">{product.name}</p>
            {product.applyUrl ? (
              <a
                href={product.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-lg bg-brand-teal hover:bg-green-700 text-white text-xs font-medium transition-colors shadow-sm shadow-green-500/20 whitespace-nowrap flex-shrink-0"
              >
                Apply
              </a>
            ) : (
              <Link
                href={`/products/${product.slug}`}
                className="px-2 py-1 rounded-lg bg-brand-teal hover:bg-green-700 text-white text-xs font-medium transition-colors shadow-sm shadow-green-500/20 whitespace-nowrap flex-shrink-0"
              >
                View
              </Link>
            )}
          </div>
          {product.provider && (
            <p className="text-xs text-gray-400 mt-0.5">{product.provider}</p>
          )}
          <div className="flex gap-1 mt-1 flex-wrap">
            {product.isBestSeller && (
              <span className="text-[10px] font-medium bg-brand-teal/10 text-brand-teal px-1.5 py-0.5 rounded-full">
                Best Seller
              </span>
            )}
            {product.badge && !product.isBestSeller && (
              <span className="text-[10px] font-medium bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-full">
                {product.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Product Details Grid */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
        {fields.map((field) => (
          <div key={field.label} className="flex justify-between items-center">
            <span className="text-xs text-gray-400">{field.label}</span>
            <span className="text-xs font-medium text-gray-700">
              {field.value ? <Pill label={field.value} /> : <span className="text-gray-300">—</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== MAIN ====================

export default function ProductComparison() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<keyof Product>('interestRate');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('cards');

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
    fetch(`${API_URL}/public/products/compare`)
      .then((r) => r.json())
      .then((json) => {
        const cats: Category[] = json.data ?? [];
        setCategories(cats);
        if (cats.length > 0) setActiveTab(cats[0].slug);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Handle responsive view based on screen width
  useEffect(() => {
    const checkScreenSize = () => {
      // Use cards view on mobile and tablet (< 1024px), table view on desktop (>= 1024px)
      setViewMode(window.innerWidth < 1024 ? 'cards' : 'table');
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const activeCategory = categories.find((c) => c.slug === activeTab);

  const sortedProducts = activeCategory
    ? [...activeCategory.products].sort((a, b) => {
        const aVal = a[sortField];
        const bVal = b[sortField];
        if (!aVal) return 1;
        if (!bVal) return -1;
        return String(aVal).localeCompare(String(bVal));
      })
    : [];

  const thClass = 'px-2 lg:px-4 py-3 text-xs font-medium text-gray-400 text-center whitespace-nowrap';
  const tdClass = 'px-2 lg:px-4 py-3 text-center align-middle border-t border-gray-100';

  return (
    <div className="w-full overflow-x-hidden">
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-1">
            Compare financial products
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Side-by-side comparison of top products — category wise.
          </p>
        </div>

        {/* Category Tabs - Horizontal scroll on mobile/tablet */}
        {loading ? (
          <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-6 sm:mb-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="px-4 sm:px-6 py-2 rounded-lg bg-gray-200 animate-pulse w-20 sm:w-24 h-8" />
            ))}
          </div>
        ) : (
          <div className="relative mb-6 sm:mb-8 w-full">
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
              <div className="flex gap-1 min-w-min">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => { setActiveTab(cat.slug); setSortField('interestRate'); }}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                      activeTab === cat.slug
                        ? 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sort + Count bar - Responsive */}
        {!loading && activeCategory && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <p className="text-xs text-gray-400">
              {activeCategory.products.length} products compared
            </p>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs text-gray-400 shrink-0">Sort by:</span>
              <div className="flex gap-2 min-w-min">
                {COLUMNS.filter((c) => c.key !== 'provider').map((col) => (
                  <button
                    key={col.key}
                    onClick={() => setSortField(col.key)}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs border transition-all whitespace-nowrap ${
                      sortField === col.key
                        ? 'bg-brand-teal text-white border-brand-teal'
                        : 'bg-white text-gray-400 border-gray-200 hover:border-brand-teal hover:text-brand-teal'
                    }`}
                  >
                    {col.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Responsive View: Cards on mobile/tablet, Table on desktop */}
        {!loading && activeCategory && (
          <>
            {/* Card View (Mobile & Tablet) */}
            {viewMode === 'cards' && (
              <div className="space-y-3 w-full">
                {sortedProducts.length === 0 ? (
                  <div className="py-12 text-center text-sm text-gray-400 border rounded-xl">
                    No products found in this category.
                  </div>
                ) : (
                  sortedProducts.map((product, idx) => (
                    <ProductCard key={product.id} product={product} index={idx} />
                  ))
                )}
              </div>
            )}

            {/* Desktop Table View (Only on large screens) */}
            {viewMode === 'table' && (
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full border-collapse min-w-[900px] lg:min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 lg:px-4 py-3 text-xs font-medium text-gray-400 text-left min-w-[200px] lg:min-w-[220px]">
                        Product
                      </th>
                      {COLUMNS.map((col) => (
                        <th key={col.key} className={thClass}>{col.label}</th>
                      ))}
                      <th className={thClass}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedProducts.map((product, i) => (
                      <tr
                        key={product.id}
                        className={
                          i === 0
                            ? 'bg-brand-teal/5'
                            : 'bg-white hover:bg-gray-50/60 transition-colors'
                        }
                      >
                        {/* Product name + provider */}
                        <td className={`${tdClass} text-left`}>
                          <div className="flex items-center gap-2 lg:gap-2.5">
                            {product.providerLogo && (
                              <img
                                src={`${BACKEND_URL}${product.providerLogo}`}
                                alt={product.provider ?? ''}
                                className="w-7 h-7 lg:w-8 lg:h-8 object-contain rounded-md border border-gray-100 flex-shrink-0"
                              />
                            )}
                            <div>
                              <p className="text-sm font-medium text-gray-900">{product.name}</p>
                              {product.provider && (
                                <p className="text-xs text-gray-400 mt-0.5">{product.provider}</p>
                              )}
                              <div className="flex gap-1 mt-1 flex-wrap">
                                {product.isBestSeller && (
                                  <span className="text-[10px] font-medium bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-full">
                                    Best Seller
                                  </span>
                                )}
                                {product.badge && !product.isBestSeller && (
                                  <span className="text-[10px] font-medium bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Dynamic columns */}
                        {COLUMNS.map((col) => (
                          <td key={col.key} className={tdClass}>
                            {product[col.key]
                              ? <Pill label={String(product[col.key])} />
                              : <span className="text-gray-300 text-xs">—</span>
                            }
                          </td>
                        ))}

                        {/* Action button */}
                        <td className={tdClass}>
                          {product.applyUrl ? (
                            <a
                              href={product.applyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 lg:px-4 py-1.5 rounded-lg bg-brand-teal hover:bg-green-700 text-white text-xs font-medium transition-colors inline-block shadow-sm shadow-green-500/20 whitespace-nowrap"
                            >
                              Apply
                            </a>
                          ) : (
                            <Link
                              href={`/products/${product.slug}`}
                              className="px-3 lg:px-4 py-1.5 rounded-lg bg-brand-teal hover:bg-green-700 text-white text-xs font-medium transition-colors inline-block shadow-sm shadow-green-500/20 whitespace-nowrap"
                            >
                              View
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}

                    {/* Empty state */}
                    {sortedProducts.length === 0 && (
                      <tr>
                        <td colSpan={COLUMNS.length + 2} className="py-12 text-center text-sm text-gray-400">
                          No products found in this category.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Loading skeleton for mobile/tablet */}
        {loading && (
          <div className="rounded-xl border border-gray-200 p-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <div className="flex items-start gap-2 mb-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-md animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4 mb-2" />
                    <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-6 bg-gray-100 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
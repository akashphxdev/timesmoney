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
    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">
      {label}
    </span>
  );
}

function SkeletonRow() {
  return (
    <tr className="bg-white">
      {[...Array(COLUMNS.length + 2)].map((_, i) => (
        <td key={i} className="px-4 py-3.5 border-t border-gray-100">
          <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4 mx-auto" />
        </td>
      ))}
    </tr>
  );
}

// ==================== MAIN ====================

export default function ProductComparison() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<keyof Product>('interestRate');

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

  const thClass = 'px-4 py-3.5 text-xs font-medium text-gray-400 text-center whitespace-nowrap';
  const tdClass = 'px-4 py-3.5 text-center align-middle border-t border-gray-100';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <h2 className="text-3xl font-medium text-gray-900 mb-1">
        Compare financial products
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Side-by-side comparison of top products — category wise.
      </p>

      {/* ── Category Tabs ── */}
      {loading ? (
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="px-6 py-2 rounded-lg bg-gray-200 animate-pulse w-24 h-8" />
          ))}
        </div>
      ) : (
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-8 w-fit max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => { setActiveTab(cat.slug); setSortField('interestRate'); }}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                activeTab === cat.slug
                  ? 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* ── Sort + Count bar ── */}
      {!loading && activeCategory && (
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <p className="text-xs text-gray-400">
            {activeCategory.products.length} products compared
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-400">Sort by</span>
            {COLUMNS.filter((c) => c.key !== 'provider').map((col) => (
              <button
                key={col.key}
                onClick={() => setSortField(col.key)}
                className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
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
      )}

      {/* ── Table ── */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3.5 text-xs font-medium text-gray-400 text-left min-w-[220px]">
                Product
              </th>
              {COLUMNS.map((col) => (
                <th key={col.key} className={thClass}>{col.label}</th>
              ))}
              <th className={thClass} />
            </tr>
          </thead>
          <tbody>
            {loading
              ? [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
              : sortedProducts.map((product, i) => (
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
                      <div className="flex items-center gap-2.5">
                        {product.providerLogo && (
                          <img
                            src={`${BACKEND_URL}${product.providerLogo}`}
                            alt={product.provider ?? ''}
                            className="w-8 h-8 object-contain rounded-md border border-gray-100 flex-shrink-0"
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
                        {col.key === 'provider' ? null : (
                          product[col.key]
                            ? <Pill label={String(product[col.key])} />
                            : <span className="text-gray-300 text-xs">—</span>
                        )}
                      </td>
                    ))}

                    {/* Apply / View button */}
                    <td className={tdClass}>
                      {product.applyUrl ? (
                        <a
                          href={product.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-1.5 rounded-lg bg-brand-teal hover:bg-green-700 text-white text-xs font-medium transition-colors inline-block shadow-sm shadow-green-500/20"
                        >
                          Apply
                        </a>
                      ) : (
                        <Link
                          href={`/products/${product.slug}`}
                          className="px-4 py-1.5 rounded-lg bg-brand-teal hover:bg-green-700 text-white text-xs font-medium transition-colors inline-block shadow-sm shadow-green-500/20"
                        >
                          View
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}

            {/* Empty state */}
            {!loading && sortedProducts.length === 0 && (
              <tr>
                <td colSpan={COLUMNS.length + 2} className="py-12 text-center text-sm text-gray-400">
                  No products found in this category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
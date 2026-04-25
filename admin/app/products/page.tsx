'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import api from '@/lib/api';

interface Product {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  provider: string | null;
  status: string;
  featured: boolean;
  isBestSeller: boolean;
  viewCount: number;
  createdAt: string;
  category: { id: string; name: string } | null;
  subCategory: { id: string; name: string } | null;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const fetchProducts = useCallback(async () => {
    try {
      const res = await api.get('/products');
      setProducts(res.data.data);
    } catch {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.provider?.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  async function handleDelete(id: string) {
    try {
      await api.delete(`/products/${id}`);
      await fetchProducts();
      setDeleteId(null);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to delete product');
    }
  }

  const statusColor = (status: string) => {
    if (status === 'PUBLISHED') return 'bg-green-50 text-green-600 border-green-100';
    if (status === 'DRAFT') return 'bg-yellow-50 text-yellow-600 border-yellow-100';
    return 'bg-gray-100 text-gray-500 border-gray-200';
  };

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-sm text-gray-400 mt-1">Manage financial products</p>
        </div>
        <Link href="/products/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors">
          <AiOutlinePlus size={16} />
          Add Product
        </Link>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name or provider..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
        />
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
            {products.filter((p) => p.status === 'PUBLISHED').length} Published
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-yellow-50 text-yellow-600 border border-yellow-100 rounded-full">
            {products.filter((p) => p.status === 'DRAFT').length} Draft
          </span>
        </div>
      </div>

      {error && <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg">{error}</div>}

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-sm text-gray-400">Loading...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Image', 'Name', 'Category', 'Provider', 'Status', 'Featured', 'Actions'].map((col) => (
                  <th key={col} className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">No products found</td></tr>
              ) : (
                filtered.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      {product.image ? (
                        <img src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.image}`} alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">No img</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{product.slug}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{product.category?.name || '—'}</p>
                      {product.subCategory && <p className="text-xs text-gray-400">{product.subCategory.name}</p>}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.provider || '—'}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2.5 py-1 border rounded-full ${statusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {product.featured && (
                        <span className="text-xs font-medium px-2.5 py-1 bg-purple-50 text-purple-600 border border-purple-100 rounded-full">Featured</span>
                      )}
                      {product.isBestSeller && (
                        <span className="text-xs font-medium px-2.5 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-full ml-1">Best Seller</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/products/edit/${product.id}`}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                          <AiOutlineEdit size={15} />
                        </Link>
                        <button onClick={() => setDeleteId(product.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                          <AiOutlineDelete size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {deleteId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="px-6 py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                <AiOutlineDelete size={22} className="text-red-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Delete Product?</h3>
              <p className="text-sm text-gray-400">Product aur uski images delete ho jayengi!</p>
            </div>
            <div className="flex items-center gap-3 px-6 pb-5">
              <button onClick={() => setDeleteId(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
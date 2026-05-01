'use client';

import { useState, useEffect, useCallback } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import api from '@/lib/api';

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
  _count: { subCategories: number };
}

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
  category: { id: string; name: string };
}

interface ApiError {
  response?: { data?: { message?: string } };
}

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

export default function CategoriesPage() {
  const [activeTab, setActiveTab] = useState<'categories' | 'sub-categories'>('categories');
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<'category' | 'sub-category'>('category');
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [catRes, subRes] = await Promise.all([
        api.get('/categories'),
        api.get('/sub-categories'),
      ]);
      setCategories(catRes.data.data);
      setSubCategories(subRes.data.data);
    } catch {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const filteredCats = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSubs = subCategories.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  async function handleDelete(id: string, type: 'category' | 'sub-category') {
    try {
      await api.delete(type === 'category' ? `/categories/${id}` : `/sub-categories/${id}`);
      await fetchAll();
      setDeleteId(null);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to delete');
    }
  }

  async function handleToggle(id: string, type: 'category' | 'sub-category') {
    setTogglingId(id);
    try {
      const url = type === 'category' ? `/categories/${id}/toggle` : `/sub-categories/${id}/toggle`;
      const res = await api.patch(url);
      if (type === 'category') {
        setCategories((prev) =>
          prev.map((c) => (c.id === id ? { ...c, isActive: res.data.data.isActive } : c))
        );
      } else {
        setSubCategories((prev) =>
          prev.map((s) => (s.id === id ? { ...s, isActive: res.data.data.isActive } : s))
        );
      }
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to toggle');
    } finally {
      setTogglingId(null);
    }
  }

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Categories</h1>
          <p className="text-sm text-gray-400 mt-1">Manage categories and sub-categories</p>
        </div>
        <Link
          href={activeTab === 'categories' ? '/categories/create' : '/categories/sub/create'}
          className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <AiOutlinePlus size={16} />
          {activeTab === 'categories' ? 'Add Category' : 'Add Sub-Category'}
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 w-fit">
        <button
          onClick={() => { setActiveTab('categories'); setSearch(''); }}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
            activeTab === 'categories'
              ? 'bg-green-500 text-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Categories
        </button>
        <button
          onClick={() => { setActiveTab('sub-categories'); setSearch(''); }}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
            activeTab === 'sub-categories'
              ? 'bg-green-500 text-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Sub-Categories
        </button>
      </div>

      {/* Search + Stats */}
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
        />
        <div className="flex items-center gap-3 ml-auto">
          {activeTab === 'categories' ? (
            <>
              <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
                {categories.filter((c) => c.isActive).length} Active
              </span>
              <span className="text-xs font-medium px-3 py-1.5 bg-red-50 text-red-500 border border-red-100 rounded-full">
                {categories.filter((c) => !c.isActive).length} Inactive
              </span>
            </>
          ) : (
            <>
              <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
                {subCategories.filter((s) => s.isActive).length} Active
              </span>
              <span className="text-xs font-medium px-3 py-1.5 bg-red-50 text-red-500 border border-red-100 rounded-full">
                {subCategories.filter((s) => !s.isActive).length} Inactive
              </span>
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg">{error}</div>
      )}

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-sm text-gray-400">Loading...</div>
        ) : activeTab === 'categories' ? (

          // ---- CATEGORIES TABLE ----
          <div className="overflow-x-auto">
            <table className="w-full table-fixed min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">Image</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Slug</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Sub-cats</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Status</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Date</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredCats.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                      No categories found
                    </td>
                  </tr>
                ) : (
                  filteredCats.map((cat) => (
                    <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        {cat.imageUrl ? (
                          <img
                            src={`${SERVER_URL}${cat.imageUrl}`}
                            alt={cat.name}
                            className="w-12 h-12 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                            No img
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-900 truncate">{cat.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                          {cat.slug}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-full">
                          {cat._count.subCategories} subs
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggle(cat.id, 'category')}
                          disabled={togglingId === cat.id}
                          className={`text-xs font-medium px-2.5 py-1 border rounded-full transition-opacity hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed
                            ${cat.isActive
                              ? 'bg-green-50 text-green-600 border-green-100'
                              : 'bg-red-50 text-red-500 border-red-100'
                            }`}
                        >
                          {togglingId === cat.id ? '...' : cat.isActive ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(cat.createdAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/categories/edit/${cat.id}`}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                          >
                            <AiOutlineEdit size={15} />
                          </Link>
                          <button
                            onClick={() => { setDeleteId(cat.id); setDeleteType('category'); }}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                          >
                            <AiOutlineDelete size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        ) : (

          // ---- SUB-CATEGORIES TABLE ----
          <div className="overflow-x-auto">
            <table className="w-full table-fixed min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">Image</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Slug</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Parent</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Status</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Date</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredSubs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                      No sub-categories found
                    </td>
                  </tr>
                ) : (
                  filteredSubs.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        {sub.imageUrl ? (
                          <img
                            src={`${SERVER_URL}${sub.imageUrl}`}
                            alt={sub.name}
                            className="w-12 h-12 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                            No img
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-900 truncate">{sub.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                          {sub.slug}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium px-2.5 py-1 bg-green-50 text-green-600 border border-green-100 rounded-full">
                          {sub.category.name}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggle(sub.id, 'sub-category')}
                          disabled={togglingId === sub.id}
                          className={`text-xs font-medium px-2.5 py-1 border rounded-full transition-opacity hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed
                            ${sub.isActive
                              ? 'bg-green-50 text-green-600 border-green-100'
                              : 'bg-red-50 text-red-500 border-red-100'
                            }`}
                        >
                          {togglingId === sub.id ? '...' : sub.isActive ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/categories/sub/edit/${sub.id}`}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                          >
                            <AiOutlineEdit size={15} />
                          </Link>
                          <button
                            onClick={() => { setDeleteId(sub.id); setDeleteType('sub-category'); }}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                          >
                            <AiOutlineDelete size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="px-6 py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                <AiOutlineDelete size={22} className="text-red-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Delete?</h3>
              <p className="text-sm text-gray-400">
                {deleteType === 'category'
                  ? 'Are you sure you want to delete this category? This action cannot be undone.'
                  : 'Are you sure you want to delete this sub-category? This action cannot be undone.'}
              </p>
            </div>
            <div className="flex items-center gap-3 px-6 pb-5">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId, deleteType)}
                className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
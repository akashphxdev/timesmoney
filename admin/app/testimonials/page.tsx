'use client';

import { useState, useEffect, useCallback } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
import api from '@/lib/api';

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  avatar: string | null;
  content: string;
  rating: number;
  featured: boolean;
  active: boolean;
  createdAt: string;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [featuredId, setFeaturedId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const fetchTestimonials = useCallback(async () => {
    try {
      const res = await api.get('/testimonials');
      setTestimonials(res.data.data);
    } catch {
      setError('Failed to fetch testimonials');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchTestimonials(); }, [fetchTestimonials]);

  const filtered = testimonials.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    (t.role && t.role.toLowerCase().includes(search.toLowerCase()))
  );

  async function handleDelete(id: string) {
    try {
      await api.delete(`/testimonials/${id}`);
      await fetchTestimonials();
      setDeleteId(null);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to delete testimonial');
    }
  }

  async function handleToggleActive(id: string) {
    setTogglingId(id);
    try {
      const res = await api.patch(`/testimonials/${id}/toggle`);
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, active: res.data.data.active } : t))
      );
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to toggle status');
    } finally {
      setTogglingId(null);
    }
  }

  async function handleToggleFeatured(id: string) {
    setFeaturedId(id);
    try {
      const res = await api.patch(`/testimonials/${id}/featured`);
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, featured: res.data.data.featured } : t))
      );
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to toggle featured');
    } finally {
      setFeaturedId(null);
    }
  }

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Testimonials</h1>
          <p className="text-sm text-gray-400 mt-1">Manage customer reviews and testimonials</p>
        </div>
        <Link
          href="/testimonials/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <AiOutlinePlus size={16} />
          Add Testimonial
        </Link>
      </div>

      {/* Search + Stats */}
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
        />
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
            {testimonials.filter((t) => t.active).length} Active
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-yellow-50 text-yellow-600 border border-yellow-100 rounded-full">
            {testimonials.filter((t) => t.featured).length} Featured
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-red-50 text-red-500 border border-red-100 rounded-full">
            {testimonials.filter((t) => !t.active).length} Inactive
          </span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg">{error}</div>
      )}

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-sm text-gray-400">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-fixed min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">Avatar</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-40">Name</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Review</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Rating</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Featured</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Status</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                      No testimonials found
                    </td>
                  </tr>
                ) : (
                  filtered.map((t) => (
                    <tr key={t.id} className="hover:bg-gray-50 transition-colors">

                      {/* Avatar */}
                      <td className="px-6 py-4">
                        {t.avatar ? (
                          <img
                            src={`${SERVER_URL}${t.avatar}`}
                            alt={t.name}
                            className="w-12 h-12 rounded-full object-cover border border-gray-100"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-base">
                            {t.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </td>

                      {/* Name + Role */}
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-900 truncate">{t.name}</p>
                        {t.role && <p className="text-xs text-gray-400 truncate mt-0.5">{t.role}</p>}
                      </td>

                      {/* Content */}
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-500 line-clamp-2">{t.content}</p>
                      </td>

                      {/* Rating */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <AiFillStar
                              key={star}
                              size={14}
                              className={star <= t.rating ? 'text-yellow-400' : 'text-gray-200'}
                            />
                          ))}
                        </div>
                      </td>

                      {/* Featured Toggle */}
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleFeatured(t.id)}
                          disabled={featuredId === t.id}
                          className={`text-xs font-medium px-2.5 py-1 border rounded-full transition-opacity hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed
                            ${t.featured
                              ? 'bg-yellow-50 text-yellow-600 border-yellow-100'
                              : 'bg-gray-50 text-gray-400 border-gray-200'
                            }`}
                        >
                          {featuredId === t.id ? '...' : t.featured ? 'Featured' : 'Normal'}
                        </button>
                      </td>

                      {/* Active Toggle */}
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleActive(t.id)}
                          disabled={togglingId === t.id}
                          className={`text-xs font-medium px-2.5 py-1 border rounded-full transition-opacity hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed
                            ${t.active
                              ? 'bg-green-50 text-green-600 border-green-100'
                              : 'bg-red-50 text-red-500 border-red-100'
                            }`}
                        >
                          {togglingId === t.id ? '...' : t.active ? 'Active' : 'Inactive'}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/testimonials/edit/${t.id}`}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                          >
                            <AiOutlineEdit size={15} />
                          </Link>
                          <button
                            onClick={() => setDeleteId(t.id)}
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
              <h3 className="text-base font-bold text-gray-900">Delete Testimonial?</h3>
              <p className="text-sm text-gray-400">Testimonial permanently delete ho jayega!</p>
            </div>
            <div className="flex items-center gap-3 px-6 pb-5">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
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
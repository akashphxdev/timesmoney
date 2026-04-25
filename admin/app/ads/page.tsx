'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import api from '@/lib/api';

interface Ad {
  id: string;
  title: string;
  image: string;
  link: string | null;
  placements: string[];   // ✅ array
  active: boolean;
  clicks: number;
  impressions: number;
  sortOrder: number;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  category: { id: string; name: string } | null;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

export default function AdsPage() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [togglingId, setTogglingId] = useState<string | null>(null);

  const fetchAds = useCallback(async () => {
    try {
      const res = await api.get('/ads');
      setAds(res.data.data);
    } catch {
      setError('Failed to fetch ads');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAds(); }, [fetchAds]);

  const filtered = ads.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.placements.some((p) => p.toLowerCase().includes(search.toLowerCase())) ||
      (a.category?.name.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  async function handleDelete(id: string) {
    try {
      await api.delete(`/ads/${id}`);
      await fetchAds();
      setDeleteId(null);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to delete ad');
    }
  }

  async function handleToggleActive(ad: Ad) {
    setTogglingId(ad.id);
    try {
      await api.patch(`/ads/${ad.id}`, { active: !ad.active });
      setAds((prev) =>
        prev.map((a) => (a.id === ad.id ? { ...a, active: !ad.active } : a))
      );
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to update ad');
    } finally {
      setTogglingId(null);
    }
  }

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Ads</h1>
          <p className="text-sm text-gray-400 mt-1">Manage your advertisements</p>
        </div>
        <Link
          href="/ads/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <AiOutlinePlus size={16} />
          Add Ad
        </Link>
      </div>

      {/* Search + Stats */}
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by title, placement or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
        />
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
            {ads.filter((a) => a.active).length} Active
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-gray-100 text-gray-500 border border-gray-200 rounded-full">
            {ads.filter((a) => !a.active).length} Inactive
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
            <table className="w-full table-fixed min-w-[1000px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16">Image</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-44">Title</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-56">Placements</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Category</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">Clicks</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Impressions</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Status</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} className="px-6 py-12 text-center text-sm text-gray-400">No ads found</td></tr>
                ) : (
                  filtered.map((ad) => (
                    <tr key={ad.id} className="hover:bg-gray-50 transition-colors">

                      <td className="px-4 py-4">
                        <img
                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${ad.image}`}
                          alt={ad.title}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-sm font-semibold text-gray-900 truncate">{ad.title}</p>
                        {ad.link && (
                          <p className="text-xs text-gray-400 mt-0.5 truncate">{ad.link}</p>
                        )}
                      </td>

                      {/* ✅ Multiple placement badges */}
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1">
                          {ad.placements.map((p) => (
                            <span key={p} className="text-xs font-medium px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full whitespace-nowrap">
                              {p.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500 truncate">
                        {ad.category?.name || '—'}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500">{ad.clicks}</td>

                      <td className="px-4 py-4 text-sm text-gray-500">{ad.impressions}</td>

                      <td className="px-4 py-4">
                        <button
                          onClick={() => handleToggleActive(ad)}
                          disabled={togglingId === ad.id}
                          className={`text-xs font-medium px-2.5 py-1 border rounded-full transition-opacity cursor-pointer hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed ${
                            ad.active
                              ? 'bg-green-50 text-green-600 border-green-100'
                              : 'bg-gray-100 text-gray-500 border-gray-200'
                          }`}
                        >
                          {togglingId === ad.id ? '...' : ad.active ? 'Active' : 'Inactive'}
                        </button>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Link href={`/ads/edit/${ad.id}`}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                            <AiOutlineEdit size={15} />
                          </Link>
                          <button onClick={() => setDeleteId(ad.id)}
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
              <h3 className="text-base font-bold text-gray-900">Delete Ad?</h3>
              <p className="text-sm text-gray-400">Ad aur uski image permanently delete ho jayegi!</p>
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
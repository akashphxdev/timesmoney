'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import api from '@/lib/api';

interface Ad {
  id: string;
  title: string;
  pages: string[];
  positions: string[];
  size: string;
  customWidth: number | null;
  customHeight: number | null;
  image: string;
  link: string | null;
  active: boolean;
  sortOrder: number;
  startDateTime: string | null;
  endDateTime: string | null;
  createdAt: string;
  _count: { events: number };
}

interface ApiError {
  response?: { data?: { message?: string } };
}

const PAGE_COLORS: Record<string, string> = {
  HOME:           'bg-blue-50 text-blue-600 border-blue-100',
  BLOG:           'bg-purple-50 text-purple-600 border-purple-100',
  BLOG_DETAIL:    'bg-violet-50 text-violet-600 border-violet-100',
  PRODUCT:        'bg-orange-50 text-orange-600 border-orange-100',
  PRODUCT_DETAIL: 'bg-amber-50 text-amber-600 border-amber-100',
  CATEGORY:       'bg-cyan-50 text-cyan-600 border-cyan-100',
  SUB_CATEGORY:   'bg-teal-50 text-teal-600 border-teal-100',
  TOOLS:          'bg-lime-50 text-lime-600 border-lime-100',
  CALCULATOR:     'bg-pink-50 text-pink-600 border-pink-100',
};

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

  const filtered = ads.filter((a) => {
    const q = search.toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.pages.some((p) => p.toLowerCase().includes(q)) ||
      a.positions.some((p) => p.toLowerCase().includes(q))
    );
  });

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

  async function handleToggle(ad: Ad) {
    setTogglingId(ad.id);
    try {
      await api.patch(`/ads/${ad.id}/toggle`);
      setAds((prev) =>
        prev.map((a) => (a.id === ad.id ? { ...a, active: !a.active } : a))
      );
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to update status');
    } finally {
      setTogglingId(null);
    }
  }

  const formatSize = (ad: Ad) => {
    if (ad.size === 'CUSTOM' && ad.customWidth && ad.customHeight) {
      return `${ad.customWidth}×${ad.customHeight}`;
    }
    return ad.size.replace('BANNER_', '');
  };

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
          placeholder="Search by title, page or position..."
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
            <table className="w-full" style={{ minWidth: '900px' }}>
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '52px' }}>Img</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '160px' }}>Title</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '200px' }}>Pages</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '160px' }}>Positions</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '100px' }}>Size</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '64px' }}>Events</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '90px' }}>Status</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '100px' }}>Date</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ width: '80px' }}>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-6 py-12 text-center text-sm text-gray-400">
                      No ads found
                    </td>
                  </tr>
                ) : (
                  filtered.map((ad) => (
                    <tr key={ad.id} className="hover:bg-gray-50/70 transition-colors">

                      {/* Image */}
                      <td className="px-4 py-3">
                        {ad.image ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${ad.image}`}
                            alt={ad.title}
                            className="w-9 h-9 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-[10px]">
                            N/A
                          </div>
                        )}
                      </td>

                      {/* Title */}
                      <td className="px-4 py-3">
                        <p className="text-sm font-semibold text-gray-900 truncate max-w-[140px]">{ad.title}</p>
                        {ad.link && (
                          <p className="text-[11px] text-gray-400 mt-0.5 truncate max-w-[140px]">{ad.link}</p>
                        )}
                      </td>

                      {/* Pages */}
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {ad.pages.map((page) => (
                            <span
                              key={page}
                              className={`text-[10px] font-medium px-1.5 py-0.5 border rounded-full whitespace-nowrap ${PAGE_COLORS[page] || 'bg-gray-100 text-gray-500 border-gray-200'}`}
                            >
                              {page.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Positions */}
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {ad.positions.map((pos) => (
                            <span
                              key={pos}
                              className="text-[10px] font-medium px-1.5 py-0.5 bg-gray-100 text-gray-500 border border-gray-200 rounded-full whitespace-nowrap"
                            >
                              {pos.replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Size */}
                      <td className="px-4 py-3">
                        <span className="text-xs text-gray-500 font-medium">{formatSize(ad)}</span>
                      </td>

                      {/* Events */}
                      <td className="px-4 py-3">
                        <span className="text-xs text-gray-500">{ad._count.events}</span>
                      </td>

                      {/* Status toggle */}
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleToggle(ad)}
                          disabled={togglingId === ad.id}
                          title={`Click to ${ad.active ? 'deactivate' : 'activate'}`}
                          className={`relative inline-flex items-center w-9 h-5 rounded-full transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                            ad.active ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block w-3.5 h-3.5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                              ad.active ? 'translate-x-4' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3">
                        <span className="text-xs text-gray-400">
                          {new Date(ad.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <Link
                            href={`/ads/${ad.id}/edit`}
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                          >
                            <AiOutlineEdit size={13} />
                          </Link>
                          <button
                            onClick={() => setDeleteId(ad.id)}
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                          >
                            <AiOutlineDelete size={13} />
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
              <p className="text-sm text-gray-400">Are you sure you want to delete this ad? This action cannot be undone.</p>
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
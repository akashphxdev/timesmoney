'use client';

import { useState, useEffect, useCallback } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import api from '@/lib/api';

interface Partner {
  id: string;
  name: string;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const fetchPartners = useCallback(async () => {
    try {
      const res = await api.get('/partners');
      setPartners(res.data.data);
    } catch {
      setError('Failed to fetch partners');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPartners(); }, [fetchPartners]);

  const filtered = partners.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  async function handleDelete(id: string) {
    try {
      await api.delete(`/partners/${id}`);
      await fetchPartners();
      setDeleteId(null);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to delete partner');
    }
  }

  async function handleToggle(id: string) {
    setTogglingId(id);
    try {
      const res = await api.patch(`/partners/${id}/toggle`);
      setPartners((prev) =>
        prev.map((p) => (p.id === id ? { ...p, isActive: res.data.data.isActive } : p))
      );
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to toggle status');
    } finally {
      setTogglingId(null);
    }
  }

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Our Partners</h1>
          <p className="text-sm text-gray-400 mt-1">Manage your partner logos and status</p>
        </div>
        <Link
          href="/our-partners/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <AiOutlinePlus size={16} />
          Add Partner
        </Link>
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
          <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
            {partners.filter((p) => p.isActive).length} Active
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-red-50 text-red-500 border border-red-100 rounded-full">
            {partners.filter((p) => !p.isActive).length} Inactive
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
            <table className="w-full table-fixed min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">Logo</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Status</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Date</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-400">
                      No partners found
                    </td>
                  </tr>
                ) : (
                  filtered.map((partner) => (
                    <tr key={partner.id} className="hover:bg-gray-50 transition-colors">

                      {/* Logo */}
                      <td className="px-6 py-4">
                        {partner.imageUrl ? (
                          <img
                            src={`${SERVER_URL}${partner.imageUrl}`}
                            alt={partner.name}
                            className="w-12 h-12 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                            No img
                          </div>
                        )}
                      </td>

                      {/* Name */}
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-900 truncate">{partner.name}</p>
                      </td>

                      {/* Status Toggle */}
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggle(partner.id)}
                          disabled={togglingId === partner.id}
                          className={`text-xs font-medium px-2.5 py-1 border rounded-full transition-opacity hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed
                            ${partner.isActive
                              ? 'bg-green-50 text-green-600 border-green-100'
                              : 'bg-red-50 text-red-500 border-red-100'
                            }`}
                        >
                          {togglingId === partner.id ? '...' : partner.isActive ? 'Active' : 'Inactive'}
                        </button>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(partner.createdAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric'
                        })}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/our-partners/edit/${partner.id}`}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                          >
                            <AiOutlineEdit size={15} />
                          </Link>
                          <button
                            onClick={() => setDeleteId(partner.id)}
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
              <h3 className="text-base font-bold text-gray-900">Delete Partner?</h3>
              <p className="text-sm text-gray-400">Are you sure you want to delete this partner? This action cannot be undone.</p>
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
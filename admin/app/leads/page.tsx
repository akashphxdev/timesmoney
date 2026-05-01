'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { AiOutlineDelete, AiOutlineEye, AiOutlineDownload } from 'react-icons/ai';
import { HiOutlineFilter } from 'react-icons/hi';
import api from '@/lib/api';

interface Lead {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  status: string;
  source: string | null;
  customData: Record<string, string> | null;
  createdAt: string;
  product: { id: string; name: string } | null;
  category: { id: string; name: string } | null;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

const statuses = ['NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'REJECTED'];

const statusColor = (status: string) => {
  if (status === 'NEW') return 'bg-blue-50 text-blue-600 border-blue-100';
  if (status === 'CONTACTED') return 'bg-yellow-50 text-yellow-600 border-yellow-100';
  if (status === 'QUALIFIED') return 'bg-purple-50 text-purple-600 border-purple-100';
  if (status === 'CONVERTED') return 'bg-green-50 text-green-600 border-green-100';
  return 'bg-red-50 text-red-600 border-red-100';
};

// ─── CSV Download Logic ───────────────────────────────────────────────────────
function escapeCsvField(value: string | null | undefined): string {
  if (value == null) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function downloadCsv(leads: Lead[]) {
  const headers = [
    'Name', 'Phone', 'Email', 'Category', 'Product',
    'Status', 'Source', 'Date', 'Custom Data',
  ];

  const rows = leads.map((l) => {
    const customStr = l.customData
      ? Object.entries(l.customData).map(([k, v]) => `${k}: ${v}`).join(' | ')
      : '';
    return [
      escapeCsvField(l.name),
      escapeCsvField(l.phone),
      escapeCsvField(l.email),
      escapeCsvField(l.category?.name),
      escapeCsvField(l.product?.name),
      escapeCsvField(l.status),
      escapeCsvField(l.source),
      escapeCsvField(new Date(l.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })),
      escapeCsvField(customStr),
    ].join(',');
  });

  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `leads_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
// ─────────────────────────────────────────────────────────────────────────────

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [viewLead, setViewLead] = useState<Lead | null>(null);
  const [error, setError] = useState('');

  // CSV modal state
  const [csvModal, setCsvModal] = useState(false);
  const [csvStatus, setCsvStatus] = useState('');
  const [csvFrom, setCsvFrom] = useState('');
  const [csvTo, setCsvTo] = useState('');

  const fetchLeads = useCallback(async () => {
    try {
      const params: { status?: string } = {};
      if (statusFilter) params.status = statusFilter;
      const res = await api.get('/leads', { params });
      setLeads(res.data.data);
    } catch {
      setError('Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const filtered = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      (l.phone?.includes(search) ?? false) ||
      (l.email?.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  async function handleStatusChange(id: string, status: string) {
    try {
      await api.patch(`/leads/${id}`, { status });
      await fetchLeads();
    } catch {
      setError('Failed to update status');
    }
  }

  async function handleDelete(id: string) {
    try {
      await api.delete(`/leads/${id}`);
      await fetchLeads();
      setDeleteId(null);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to delete lead');
    }
  }

  // ─── CSV Download with filters ──────────────────────────────────────────────
  function handleCsvDownload() {
    let data = [...leads];

    // Status filter
    if (csvStatus) {
      data = data.filter((l) => l.status === csvStatus);
    }

    // Date range filter
    if (csvFrom) {
      const from = new Date(csvFrom);
      from.setHours(0, 0, 0, 0);
      data = data.filter((l) => new Date(l.createdAt) >= from);
    }
    if (csvTo) {
      const to = new Date(csvTo);
      to.setHours(23, 59, 59, 999);
      data = data.filter((l) => new Date(l.createdAt) <= to);
    }

    if (data.length === 0) {
      alert('No leads found for selected filters.');
      return;
    }

    downloadCsv(data);
    setCsvModal(false);
    setCsvStatus('');
    setCsvFrom('');
    setCsvTo('');
  }
  // ───────────────────────────────────────────────────────────────────────────

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-sm text-gray-400 mt-1">Manage customer leads</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full">
            {leads.filter((l) => l.status === 'NEW').length} New
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
            {leads.filter((l) => l.status === 'CONVERTED').length} Converted
          </span>
          {/* Download CSV Button */}
          <button
            onClick={() => setCsvModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-green-400 hover:text-green-600 text-gray-600 text-sm font-medium rounded-xl transition-all"
          >
            <AiOutlineDownload size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Search + Status Filter */}
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name, phone, email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
        >
          <option value="">All Status</option>
          {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg">{error}</div>
      )}

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-sm text-gray-400">Loading...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Name', 'Contact', 'Category', 'Product', 'Status', 'Date', 'Actions'].map((col) => (
                  <th key={col} className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                    No leads found
                  </td>
                </tr>
              ) : (
                filtered.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-green-600">{lead.name.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{lead.name}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{lead.phone || '—'}</p>
                      <p className="text-xs text-gray-400">{lead.email || '—'}</p>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">{lead.category?.name || '—'}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{lead.product?.name || '—'}</td>

                    <td className="px-6 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={`text-xs font-medium px-2.5 py-1 border rounded-full outline-none cursor-pointer ${statusColor(lead.status)}`}
                      >
                        {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(lead.createdAt).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric',
                      })}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setViewLead(lead)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                        >
                          <AiOutlineEye size={15} />
                        </button>
                        <button
                          onClick={() => setDeleteId(lead.id)}
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
        )}
      </div>

      {/* ── CSV Export Modal ─────────────────────────────────────────────────── */}
      {csvModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                  <AiOutlineDownload size={15} className="text-green-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Export CSV</h3>
              </div>
              <button
                onClick={() => { setCsvModal(false); setCsvStatus(''); setCsvFrom(''); setCsvTo(''); }}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 space-y-4">

              {/* Status Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Status
                </label>
                <select
                  value={csvStatus}
                  onChange={(e) => setCsvStatus(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
                >
                  <option value="">All Statuses</option>
                  {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Date From */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  From Date
                </label>
                <input
                  type="date"
                  value={csvFrom}
                  onChange={(e) => setCsvFrom(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
                />
              </div>

              {/* Date To */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  To Date
                </label>
                <input
                  type="date"
                  value={csvTo}
                  onChange={(e) => setCsvTo(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
                />
              </div>

              {/* Preview count */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">Matching leads</span>
                <span className="text-sm font-bold text-gray-800">
                  {(() => {
                    let data = [...leads];
                    if (csvStatus) data = data.filter((l) => l.status === csvStatus);
                    if (csvFrom) {
                      const from = new Date(csvFrom);
                      from.setHours(0, 0, 0, 0);
                      data = data.filter((l) => new Date(l.createdAt) >= from);
                    }
                    if (csvTo) {
                      const to = new Date(csvTo);
                      to.setHours(23, 59, 59, 999);
                      data = data.filter((l) => new Date(l.createdAt) <= to);
                    }
                    return data.length;
                  })()}
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center gap-3 px-6 pb-5">
              <button
                onClick={() => { setCsvModal(false); setCsvStatus(''); setCsvFrom(''); setCsvTo(''); }}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCsvDownload}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
              >
                <AiOutlineDownload size={15} />
                Download
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── View Lead Modal ──────────────────────────────────────────────────── */}
      {viewLead && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Lead Details</h3>
              <button onClick={() => setViewLead(null)} className="text-gray-400 hover:text-gray-600 text-xl">×</button>
            </div>
            <div className="px-6 py-5 space-y-3">
              {[
                { label: 'Name', value: viewLead.name },
                { label: 'Phone', value: viewLead.phone },
                { label: 'Email', value: viewLead.email },
                { label: 'Category', value: viewLead.category?.name },
                { label: 'Product', value: viewLead.product?.name },
                { label: 'Status', value: viewLead.status },
                { label: 'Source', value: viewLead.source },
              ].map(({ label, value }) => value && (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</span>
                  <span className="text-sm text-gray-800">{value}</span>
                </div>
              ))}

              {viewLead.customData && Object.keys(viewLead.customData).length > 0 && (
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Custom Fields</p>
                  {Object.entries(viewLead.customData).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between py-1">
                      <span className="text-xs text-gray-500">{key}</span>
                      <span className="text-sm text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="px-6 pb-5">
              <button
                onClick={() => setViewLead(null)}
                className="w-full px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Modal ─────────────────────────────────────────────────────── */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="px-6 py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                <AiOutlineDelete size={22} className="text-red-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Delete Lead?</h3>
              <p className="text-sm text-gray-400">Are you sure you want to delete this lead? This action cannot be undone.</p>
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
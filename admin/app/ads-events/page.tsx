'use client';

import { useState, useEffect, useCallback } from 'react';
import api from '@/lib/api';

interface AdEvent {
  id: string;
  adId: string;
  type: 'CLICK' | 'IMPRESSION';
  isUnique: boolean;
  ip: string | null;
  sessionId: string | null;
  deviceType: string | null;
  page: string | null;
  referrer: string | null;
  country: string | null;
  createdAt: string;
  ad: {
    id: string;
    title: string;
    page: string;
    position: string;
  };
}

interface Stats {
  totalClicks: number;
  totalImpressions: number;
  uniqueClicks: number;
  uniqueImpressions: number;
}

interface AdFilter {
  id: string;
  title: string;
}

export default function AdsEventsPage() {
  const [events, setEvents] = useState<AdEvent[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [adsList, setAdsList] = useState<AdFilter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [filterAdId, setFilterAdId] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterDevice, setFilterDevice] = useState('');
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const LIMIT = 20;

  // Fetch stats + ads list on mount
  useEffect(() => {
    api.get('/ad-events/stats').then((res) => setStats(res.data.data)).catch(() => {});
    api.get('/ad-events/ads-list').then((res) => setAdsList(res.data.data)).catch(() => {});
  }, []);

  const fetchEvents = useCallback(async (currentPage = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append('page', String(currentPage));
      params.append('limit', String(LIMIT));
      if (filterAdId) params.append('adId', filterAdId);
      if (filterType) params.append('type', filterType);
      if (filterDevice) params.append('deviceType', filterDevice);
      if (filterStartDate) params.append('startDate', filterStartDate);
      if (filterEndDate) params.append('endDate', filterEndDate);

      const res = await api.get(`/ad-events?${params.toString()}`);
      setEvents(res.data.events);
      setTotal(res.data.total);
      setTotalPages(res.data.totalPages);
      setPage(currentPage);
    } catch {
      setError('Failed to fetch events');
    } finally {
      setLoading(false);
    }
  }, [filterAdId, filterType, filterDevice, filterStartDate, filterEndDate]);

  useEffect(() => { fetchEvents(1); }, [fetchEvents]);

  const handleFilter = () => fetchEvents(1);

  const handleReset = () => {
    setFilterAdId('');
    setFilterType('');
    setFilterDevice('');
    setFilterStartDate('');
    setFilterEndDate('');
  };

  const typeColor = (type: string) =>
    type === 'CLICK'
      ? 'bg-blue-50 text-blue-600 border-blue-100'
      : 'bg-purple-50 text-purple-600 border-purple-100';

  const deviceIcon = (device: string | null) => {
    if (!device) return '—';
    if (device.toLowerCase().includes('mobile')) return '📱 Mobile';
    if (device.toLowerCase().includes('tablet')) return '📟 Tablet';
    return '🖥️ Desktop';
  };

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Ad Events</h1>
        <p className="text-sm text-gray-400 mt-1">Track clicks and impressions for all ads</p>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Total Clicks</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">{stats.totalClicks.toLocaleString()}</p>
            <p className="text-xs text-gray-400 mt-1">{stats.uniqueClicks.toLocaleString()} unique</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Total Impressions</p>
            <p className="text-3xl font-bold text-purple-600 mt-1">{stats.totalImpressions.toLocaleString()}</p>
            <p className="text-xs text-gray-400 mt-1">{stats.uniqueImpressions.toLocaleString()} unique</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">CTR</p>
            <p className="text-3xl font-bold text-green-600 mt-1">
              {stats.totalImpressions > 0
                ? ((stats.totalClicks / stats.totalImpressions) * 100).toFixed(2)
                : '0.00'}%
            </p>
            <p className="text-xs text-gray-400 mt-1">Click-through rate</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Total Events</p>
            <p className="text-3xl font-bold text-gray-700 mt-1">
              {(stats.totalClicks + stats.totalImpressions).toLocaleString()}
            </p>
            <p className="text-xs text-gray-400 mt-1">Clicks + Impressions</p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Filters</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

          {/* Ad filter */}
          <select
            value={filterAdId}
            onChange={(e) => setFilterAdId(e.target.value)}
            className="px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
          >
            <option value="">All Ads</option>
            {adsList.map((a) => (
              <option key={a.id} value={a.id}>{a.title}</option>
            ))}
          </select>

          {/* Type filter */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
          >
            <option value="">All Types</option>
            <option value="CLICK">Click</option>
            <option value="IMPRESSION">Impression</option>
          </select>

          {/* Device filter */}
          <select
            value={filterDevice}
            onChange={(e) => setFilterDevice(e.target.value)}
            className="px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
          >
            <option value="">All Devices</option>
            <option value="mobile">Mobile</option>
            <option value="desktop">Desktop</option>
            <option value="tablet">Tablet</option>
          </select>

          {/* Start Date */}
          <input
            type="date"
            value={filterStartDate}
            onChange={(e) => setFilterStartDate(e.target.value)}
            className="px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
          />

          {/* End Date */}
          <input
            type="date"
            value={filterEndDate}
            onChange={(e) => setFilterEndDate(e.target.value)}
            className="px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-700"
          />
        </div>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={handleFilter}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium rounded-xl transition-colors"
          >
            Reset
          </button>
          <span className="text-xs text-gray-400 ml-auto">{total.toLocaleString()} total events</span>
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
            <table className="w-full table-fixed min-w-[900px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-44">Ad</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Type</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Unique</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Device</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Country</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Page</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">IP</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-36">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {events.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-sm text-gray-400">
                      No events found
                    </td>
                  </tr>
                ) : (
                  events.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">

                      {/* Ad title */}
                      <td className="px-4 py-4">
                        <p className="text-sm font-semibold text-gray-900 truncate">{event.ad.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5 truncate">
                          {event.ad.page} · {event.ad.position.replace(/_/g, ' ')}
                        </p>
                      </td>

                      {/* Type badge */}
                      <td className="px-4 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 border rounded-full ${typeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </td>

                      {/* Unique */}
                      <td className="px-4 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 border rounded-full ${
                          event.isUnique
                            ? 'bg-green-50 text-green-600 border-green-100'
                            : 'bg-gray-100 text-gray-400 border-gray-200'
                        }`}>
                          {event.isUnique ? 'Yes' : 'No'}
                        </span>
                      </td>

                      {/* Device */}
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {deviceIcon(event.deviceType)}
                      </td>

                      {/* Country */}
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {event.country || '—'}
                      </td>

                      {/* Page */}
                      <td className="px-4 py-4 text-sm text-gray-500 truncate">
                        {event.page || '—'}
                      </td>

                      {/* IP */}
                      <td className="px-4 py-4 text-xs text-gray-400 font-mono truncate">
                        {event.ip || '—'}
                      </td>

                      {/* Date */}
                      <td className="px-4 py-4 text-sm text-gray-400">
                        {new Date(event.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        <p className="text-xs text-gray-300">
                          {new Date(event.createdAt).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Page {page} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchEvents(page - 1)}
              disabled={page <= 1}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => fetchEvents(page + 1)}
              disabled={page >= totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
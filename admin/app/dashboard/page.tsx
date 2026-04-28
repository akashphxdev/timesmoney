'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

interface Stats {
  totalProducts: number;    activeProducts: number;
  totalBlogs: number;       activeBlogs: number;
  totalCategories: number;  activeCategories: number;
  totalLeads: number;
  totalPartners: number;    activePartners: number;
  totalTestimonials: number; activeTestimonials: number;
  totalAds: number;         activeAds: number;
  thisMonthLeads: number;
  todayLeads: number;
}

interface Lead {
  id: string;
  name: string;
  phone: string;
  status: string;
  createdAt: string;
  product?: { name: string };
}

const statCards = (stats: Stats) => [
  {
    label: 'Products', total: stats.totalProducts, active: stats.activeProducts,
    path: '/products', bg: '#E6F1FB', color: '#185FA5',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    label: 'Blogs', total: stats.totalBlogs, active: stats.activeBlogs,
    path: '/blogs', bg: '#EEEDFE', color: '#534AB7',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>,
  },
  {
    label: 'Categories', total: stats.totalCategories, active: stats.activeCategories,
    path: '/categories', bg: '#FAEEDA', color: '#854F0B',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  },
  {
    label: 'Partners', total: stats.totalPartners, active: stats.activePartners,
    path: '/our-partners', bg: '#FBEAF0', color: '#993556',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
  },
  {
    label: 'Testimonials', total: stats.totalTestimonials, active: stats.activeTestimonials,
    path: '/testimonials', bg: '#E1F5EE', color: '#0F6E56',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    label: 'Ads', total: stats.totalAds, active: stats.activeAds,
    path: '/ads', bg: '#FAECE7', color: '#993C1D',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  },
];

const statusStyle: Record<string, string> = {
  NEW: 'bg-teal-50 text-teal-700',
  CONTACTED: 'bg-blue-50 text-blue-700',
  QUALIFIED: 'bg-amber-50 text-amber-700',
  CONVERTED: 'bg-green-50 text-green-700',
  REJECTED: 'bg-red-50 text-red-700',
};

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [statsRes, leadsRes] = await Promise.all([
          api.get('/dashboard/stats'),
          api.get('/leads?limit=10&sortBy=createdAt&order=desc'),
        ]);
        setStats(statsRes.data.data);
        setRecentLeads(leadsRes.data.data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-400 mt-0.5">CMS overview — all your key numbers at a glance</p>
      </div>

      {/* Lead Strip */}
      <div className="grid grid-cols-3 gap-4">
        <div
          onClick={() => router.push('/leads')}
          className="bg-emerald-500 rounded-2xl p-5 cursor-pointer hover:bg-emerald-600 transition-colors"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100 mb-2">Total Leads</p>
          <p className="text-4xl font-bold text-white">{stats.totalLeads}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">This Month</p>
          <p className="text-4xl font-bold text-gray-900">{stats.thisMonthLeads}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Today</p>
          <p className="text-4xl font-bold text-gray-900">{stats.todayLeads}</p>
        </div>
      </div>

      {/* Stat Cards */}
   {/* Stat Cards */}
    <div className="grid grid-cols-3 gap-4">
      {statCards(stats).map((card) => (
        <div
          key={card.label}
          onClick={() => router.push(card.path)}
          className="bg-white rounded-2xl border border-gray-200 p-5 cursor-pointer hover:border-gray-300 transition-colors"
        >
          {/* Top row: icon + label */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: card.bg, color: card.color }}
            >
              {card.icon}
            </div>
            <p className="text-sm font-semibold text-gray-600">{card.label}</p>
          </div>

          {/* Bottom row: total + active */}
          <div className="flex items-end justify-between">
            {/* Total - small & muted */}
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Total</p>
              <p className="text-lg font-semibold text-gray-400">{card.total}</p>
            </div>

            {/* Active - highlighted with live dot */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-1.5 mb-0.5">
                {/* Red live dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: card.color }}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: card.color }}></span>
                </span>
                <p className="text-xs font-semibold" style={{ color: card.color }}>Active</p>
              </div>
              <p className="text-2xl font-bold" style={{ color: card.color }}>{card.active}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

      {/* Recent Leads */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-700">Recent Leads</h2>
          <button
            onClick={() => router.push('/leads')}
            className="text-xs text-emerald-600 font-semibold hover:underline"
          >
            View all →
          </button>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">Name</th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">Phone</th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">Product</th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">Status</th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => router.push('/leads')}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-gray-900">{lead.name}</td>
                  <td className="px-5 py-3 text-gray-500">{lead.phone || '—'}</td>
                  <td className="px-5 py-3 text-gray-500">{lead.product?.name || '—'}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle[lead.status] || 'bg-gray-100 text-gray-600'}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-400 text-xs">
                    {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
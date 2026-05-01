'use client';

import { useState, useEffect } from 'react';
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineSave,
  AiOutlinePhone,
} from 'react-icons/ai';
import { HiOutlineBell, HiOutlineCog } from 'react-icons/hi';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { MdOutlineConstruction } from 'react-icons/md';

const API = process.env.NEXT_PUBLIC_API_URL + '/admin/settings';

export default function SettingsPage() {
  const [form, setForm] = useState({
    whatsappNo:          '',
    callingNo:           '',
    supportEmail:        '',
    instagramUrl:        '',
    linkedinUrl:         '',
    autoMailEnabled:     false,
    autoWhatsappEnabled: false,
    maintenanceMode:     false,
  });
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading,     setLoading]     = useState(true);
  const [saving,      setSaving]      = useState(false);
  const [saved,       setSaved]       = useState(false);
  const [error,       setError]       = useState('');
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    fetch(API, { credentials: 'include' })
      .then((r) => r.json())
      .then((res) => {
        if (res.success) {
          setForm({ ...form, ...res.data });
          if (res.data.updatedAt) setLastUpdated(res.data.updatedAt);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const set = (key: string, value: any) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // Maintenance toggle — show warning first
  function handleMaintenanceToggle() {
    setShowWarning(true);
  }

  function confirmMaintenance() {
    set('maintenanceMode', !form.maintenanceMode);
    setShowWarning(false);
  }

  async function handleSave() {
    setSaving(true);
    setError('');
    try {
      const res = await fetch(API, {
        method:      'PUT',
        credentials: 'include',
        headers:     { 'Content-Type': 'application/json' },
        body:        JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error('Failed');
      if (data.data.updatedAt) setLastUpdated(data.data.updatedAt);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setError('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return (
    <div className="p-8 text-sm text-gray-400">Loading settings...</div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* ── Maintenance Warning Modal ─────────────────────────────────────── */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">

            {/* Red top bar */}
            <div className="bg-red-500 px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MdOutlineConstruction size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base">Maintenance Mode Warning</p>
                <p className="text-red-100 text-xs mt-0.5">This is a critical action</p>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                <p className="text-red-700 font-bold text-lg text-center">
                  ⚠️ {form.maintenanceMode ? 'Turn OFF' : 'Turn ON'} Maintenance Mode?
                </p>
                {!form.maintenanceMode ? (
                  <ul className="text-sm text-red-600 space-y-1.5 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">✕</span>
                      <span><strong>Website will go completely offline</strong> for all visitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">✕</span>
                      <span><strong>Mobile app & all public APIs</strong> will stop working</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">✕</span>
                      <span><strong>Only Super Admin</strong> will be able to access the system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">✕</span>
                      <span>All users will see a <strong>maintenance error and maintenance page</strong></span>
                    </li>
                  </ul>
                ) : (
                  <p className="text-sm text-green-700 text-center mt-1">
                    Website, app and all services will be <strong>restored for all users</strong>.
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-400 text-center">
                Make sure you have saved all other settings before proceeding.
              </p>
            </div>

            {/* Actions */}
            <div className="px-6 pb-5 flex gap-3">
              <button
                onClick={() => setShowWarning(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmMaintenance}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition ${
                  form.maintenanceMode
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {form.maintenanceMode ? 'Yes, Turn OFF' : 'Yes, Turn ON'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <HiOutlineCog size={18} className="text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>
          {lastUpdated && (
            <p className="text-xs text-gray-400">
              Last updated:{' '}
              <span className="font-medium text-gray-500">
                {new Date(lastUpdated).toLocaleString('en-IN', {
                  day:    '2-digit',
                  month:  'short',
                  year:   'numeric',
                  hour:   '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </p>
          )}
        </div>
        <p className="text-sm text-gray-400 ml-12">Manage your platform configuration</p>
      </div>

      <div className="max-w-2xl space-y-5">

        {/* ── Maintenance Mode Card (Separate & Prominent) ──────────────── */}
        <div className={`rounded-2xl border-2 overflow-hidden transition-all ${
          form.maintenanceMode
            ? 'border-red-300 bg-red-50'
            : 'border-orange-200 bg-white'
        }`}>
          <div className={`px-6 py-4 flex items-center justify-between ${
            form.maintenanceMode ? 'bg-red-500' : 'bg-orange-50 border-b border-orange-100'
          }`}>
            <div className="flex items-center gap-2.5">
              <MdOutlineConstruction size={18} className={form.maintenanceMode ? 'text-white' : 'text-orange-500'} />
              <div>
                <h2 className={`text-sm font-bold ${form.maintenanceMode ? 'text-white' : 'text-orange-700'}`}>
                  Maintenance Mode
                </h2>
                {form.maintenanceMode && (
                  <p className="text-red-100 text-xs mt-0.5">
                    ⚠️ Website is currently OFFLINE for all visitors
                  </p>
                )}
              </div>
            </div>
            {/* Big toggle */}
            <button
              onClick={handleMaintenanceToggle}
              className={`relative inline-flex items-center w-16 h-8 rounded-full flex-shrink-0 transition-colors duration-300 focus:outline-none ${
                form.maintenanceMode ? 'bg-white/30' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  form.maintenanceMode
                    ? 'translate-x-9 bg-white'
                    : 'translate-x-1 bg-white'
                }`}
              />
            </button>
          </div>
          <div className="px-6 py-4">
            <p className={`text-xs ${form.maintenanceMode ? 'text-red-600' : 'text-gray-400'}`}>
              {form.maintenanceMode
                ? 'Only Super Admin can access the system. All users see a maintenance page.'
                : 'When enabled, website & app will go offline. Only Super Admin will have access.'}
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2.5">
            <AiOutlinePhone size={16} className="text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-700">Contact Details</h2>
          </div>
          <div className="px-6 py-5 space-y-5">

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                WhatsApp Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <AiOutlineWhatsApp size={17} className="text-green-500" />
                </div>
                <input
                  type="tel"
                  value={form.whatsappNo}
                  onChange={(e) => set('whatsappNo', e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:bg-white transition text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Include country code e.g. +91 for India</p>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Calling Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <AiOutlinePhone size={17} className="text-blue-500" />
                </div>
                <input
                  type="tel"
                  value={form.callingNo}
                  onChange={(e) => set('callingNo', e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:bg-white transition text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Support Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <AiOutlineMail size={17} className="text-blue-500" />
                </div>
                <input
                  type="email"
                  value={form.supportEmail}
                  onChange={(e) => set('supportEmail', e.target.value)}
                  placeholder="support@yourcompany.com"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:bg-white transition text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2.5">
            <FiInstagram size={16} className="text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-700">Social Links</h2>
          </div>
          <div className="px-6 py-5 space-y-5">

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Instagram URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <FiInstagram size={17} className="text-pink-500" />
                </div>
                <input
                  type="url"
                  value={form.instagramUrl}
                  onChange={(e) => set('instagramUrl', e.target.value)}
                  placeholder="https://instagram.com/yourpage"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-pink-400 focus:bg-white transition text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                LinkedIn URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <FiLinkedin size={17} className="text-blue-700" />
                </div>
                <input
                  type="url"
                  value={form.linkedinUrl}
                  onChange={(e) => set('linkedinUrl', e.target.value)}
                  placeholder="https://linkedin.com/company/yourpage"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:bg-white transition text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Automation */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2.5">
            <HiOutlineBell size={16} className="text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-700">Automation</h2>
          </div>
          <div className="px-6 py-2 divide-y divide-gray-50">

            <div className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AiOutlineWhatsApp size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Auto WhatsApp Message</p>
                  <p className="text-xs text-gray-400 mt-0.5">Send WhatsApp when a new lead is created</p>
                </div>
              </div>
              <Toggle value={form.autoWhatsappEnabled} onChange={(v) => set('autoWhatsappEnabled', v)} color="green" />
            </div>

            <div className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AiOutlineMail size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Auto Email</p>
                  <p className="text-xs text-gray-400 mt-0.5">Send email when a new lead is submitted</p>
                </div>
              </div>
              <Toggle value={form.autoMailEnabled} onChange={(v) => set('autoMailEnabled', v)} color="blue" />
            </div>

          </div>
        </div>

        {/* Save */}
        <div className="flex items-center justify-between pb-8">
          <div>
            {saved && (
              <span className="text-xs font-medium text-green-600 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full">
                ✓ Settings saved successfully
              </span>
            )}
            {error && (
              <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full">
                ✕ {error}
              </span>
            )}
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <AiOutlineSave size={16} />
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>

      </div>
    </div>
  );
}

function Toggle({
  value, onChange, color = 'green',
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  color?: 'green' | 'blue' | 'orange';
}) {
  const bg = { green: 'bg-green-500', blue: 'bg-blue-500', orange: 'bg-orange-500' }[color];
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative inline-flex items-center w-12 h-6 rounded-full flex-shrink-0 transition-colors duration-300 focus:outline-none ${value ? bg : 'bg-gray-200'}`}
    >
      <span className={`inline-block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${value ? 'translate-x-7' : 'translate-x-1'}`} />
    </button>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import api from '@/lib/api';

interface Category {
  id: string;
  name: string;
}

interface ApiError {
  response?: { data?: { message?: string; errors?: string[] } };
}

const PLACEMENTS = [
  'HOMEPAGE_TOP', 'HOMEPAGE_BOTTOM', 'BLOG_TOP', 'BLOG_BOTTOM',
  'PRODUCT_PAGE', 'BETWEEN_CONTENT', 'CALCULATOR_TOP',
  'CALCULATOR_BOTTOM', 'CATEGORY_TOP', 'CATEGORY_BOTTOM',
];

export default function CreateAdPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    link: '',
    categoryId: '',
    startDate: '',
    endDate: '',
    active: true,
    sortOrder: '0',
  });
  const [selectedPlacements, setSelectedPlacements] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/categories').then((res) => setCategories(res.data.data)).catch(() => {});
  }, []);

  const togglePlacement = (p: string) => {
    setSelectedPlacements((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('active', String(form.active));
      formData.append('sortOrder', form.sortOrder);

      // ✅ Append each placement separately
      selectedPlacements.forEach((p) => formData.append('placements', p));

      if (form.link) formData.append('link', form.link);
      if (form.categoryId) formData.append('categoryId', form.categoryId);
      if (form.startDate) formData.append('startDate', form.startDate);
      if (form.endDate) formData.append('endDate', form.endDate);
      if (image) formData.append('image', image);

      await api.post('/ads', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      router.push('/ads');
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || e.response?.data?.errors?.join(', ') || 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => router.back()} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
          <AiOutlineArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create Ad</h1>
          <p className="text-sm text-gray-400 mt-0.5">Add a new advertisement</p>
        </div>
      </div>

      {error && <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg mb-4">{error}</div>}

      <div className="grid grid-cols-3 gap-6">

        {/* Left */}
        <div className="col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Title</label>
              <input type="text" placeholder="Ad title..." value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Link (Optional)</label>
              <input type="text" placeholder="https://..." value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
            </div>

            {/* ✅ Multi-select Placements */}
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 block">
                Placements <span className="text-gray-400 font-normal normal-case">(select multiple)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PLACEMENTS.map((p) => (
                  <label key={p} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border cursor-pointer transition-colors text-sm ${
                    selectedPlacements.includes(p)
                      ? 'bg-green-50 border-green-300 text-green-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}>
                    <input
                      type="checkbox"
                      checked={selectedPlacements.includes(p)}
                      onChange={() => togglePlacement(p)}
                      className="accent-green-500"
                    />
                    {p.replace(/_/g, ' ')}
                  </label>
                ))}
              </div>
              {selectedPlacements.length > 0 && (
                <p className="text-xs text-green-600 mt-1.5">{selectedPlacements.length} placement(s) selected</p>
              )}
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Category (Optional)</label>
              <select value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800">
                <option value="">-- All Categories --</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Start Date</label>
                <input type="datetime-local" value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">End Date</label>
                <input type="datetime-local" value={form.endDate}
                  onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Sort Order</label>
              <input type="number" value={form.sortOrder}
                onChange={(e) => setForm({ ...form, sortOrder: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">

          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Publish</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Active</span>
              <button
                onClick={() => setForm({ ...form, active: !form.active })}
                className={`w-11 h-6 rounded-full transition-colors relative ${form.active ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${form.active ? 'left-5' : 'left-0.5'}`} />
              </button>
            </div>
            <button onClick={handleSubmit} disabled={saving}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50">
              {saving ? 'Saving...' : 'Create Ad'}
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">Ad Image</h3>
            {imagePreview && (
              <img src={imagePreview} alt="preview" className="w-full h-40 object-cover rounded-xl" />
            )}
            <label className="w-full flex items-center justify-center px-4 py-2.5 text-sm text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100">
              {image ? image.name : 'Choose image'}
              <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
            </label>
          </div>

        </div>
      </div>
    </div>
  );
}
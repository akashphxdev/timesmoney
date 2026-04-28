'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import api from '@/lib/api';

interface ApiError {
  response?: { data?: { message?: string; errors?: string[] } };
}

const AD_PAGES = [
  { value: 'HOME', label: 'Home' },
  { value: 'BLOG', label: 'Blog' },
  { value: 'BLOG_DETAIL', label: 'Blog Detail' },
  { value: 'PRODUCT', label: 'Product' },
  { value: 'PRODUCT_DETAIL', label: 'Product Detail' },
  { value: 'CATEGORY', label: 'Category' },
  { value: 'SUB_CATEGORY', label: 'Sub Category' },
  { value: 'TOOLS', label: 'Tools' },
  { value: 'CALCULATOR', label: 'Calculator' },
];

const AD_POSITIONS = [
  { value: 'TOP', label: 'Top' },
  { value: 'BOTTOM', label: 'Bottom' },
  { value: 'BETWEEN_CONTENT', label: 'Between Content' },
  { value: 'SIDEBAR', label: 'Sidebar' },
];

const AD_SIZES = [
  'BANNER_728x90',
  'BANNER_300x250',
  'BANNER_300x600',
  'BANNER_320x50',
  'BANNER_160x600',
  'BANNER_970x90',
  'CUSTOM',
];

export default function CreateAdPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    pages: [] as string[],
    positions: [] as string[],
    size: 'BANNER_300x250',
    customWidth: '',
    customHeight: '',
    link: '',
    active: true,
    sortOrder: '0',
    startDateTime: '',
    endDateTime: '',
  });

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const togglePage = (value: string) => {
    setForm((prev) => ({
      ...prev,
      pages: prev.pages.includes(value)
        ? prev.pages.filter((p) => p !== value)
        : [...prev.pages, value],
    }));
    setFieldErrors((p) => ({ ...p, pages: '' }));
  };

  const togglePosition = (value: string) => {
    setForm((prev) => ({
      ...prev,
      positions: prev.positions.includes(value)
        ? prev.positions.filter((p) => p !== value)
        : [...prev.positions, value],
    }));
    setFieldErrors((p) => ({ ...p, positions: '' }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setFieldErrors((prev) => ({ ...prev, image: '' }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!form.title.trim()) errors.title = 'Title is required';
    if (form.pages.length === 0) errors.pages = 'At least one page is required';
    if (form.positions.length === 0) errors.positions = 'At least one position is required';
    if (!image) errors.image = 'Ad image is required';
    if (form.size === 'CUSTOM') {
      if (!form.customWidth || Number(form.customWidth) <= 0)
        errors.customWidth = 'Width is required';
      if (!form.customHeight || Number(form.customHeight) <= 0)
        errors.customHeight = 'Height is required';
    }
    if (form.startDateTime && form.endDateTime) {
      if (new Date(form.startDateTime) >= new Date(form.endDateTime))
        errors.endDateTime = 'End date must be after start date';
    }
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError('Please fill all required fields.');
      return;
    }

    setSaving(true);
    setError('');
    setFieldErrors({});

    try {
      const formData = new FormData();
      formData.append('title', form.title);
      form.pages.forEach((p) => formData.append('pages', p));
      form.positions.forEach((p) => formData.append('positions', p));
      formData.append('size', form.size);
      if (form.size === 'CUSTOM') {
        formData.append('customWidth', form.customWidth);
        formData.append('customHeight', form.customHeight);
      }
      formData.append('active', String(form.active));
      formData.append('sortOrder', form.sortOrder);
      if (form.link) formData.append('link', form.link);
      if (form.startDateTime) formData.append('startDateTime', form.startDateTime);
      if (form.endDateTime) formData.append('endDateTime', form.endDateTime);
      if (image) formData.append('image', image);

      await api.post('/ads', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      router.push('/ads');
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(
        e.response?.data?.message ||
          e.response?.data?.errors?.join(', ') ||
          'Something went wrong'
      );
    } finally {
      setSaving(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 text-sm bg-gray-50 border rounded-xl outline-none focus:border-green-400 text-gray-800 ${
      fieldErrors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200'
    }`;

  const FieldError = ({ field }: { field: string }) =>
    fieldErrors[field] ? (
      <p className="text-red-500 text-xs mt-1">{fieldErrors[field]}</p>
    ) : null;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <AiOutlineArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create Ad</h1>
          <p className="text-sm text-gray-400 mt-0.5">Add a new advertisement</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg mb-4 border border-red-100">
          {error}
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2 space-y-4">

          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Basic Info</h3>

            {/* Title */}
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Ad title..."
                value={form.title}
                onChange={(e) => {
                  setForm({ ...form, title: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, title: '' }));
                }}
                className={inputClass('title')}
              />
              <FieldError field="title" />
            </div>

            {/* Pages — Checkboxes */}
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 block">
                Pages <span className="text-red-400">*</span>
              </label>
              <div className={`grid grid-cols-3 gap-2 p-3 border rounded-xl ${fieldErrors.pages ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                {AD_PAGES.map((page) => (
                  <label
                    key={page.value}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={form.pages.includes(page.value)}
                      onChange={() => togglePage(page.value)}
                      className="w-4 h-4 accent-green-500 rounded"
                    />
                    <span className="text-xs text-gray-700 group-hover:text-green-600">
                      {page.label}
                    </span>
                  </label>
                ))}
              </div>
              <FieldError field="pages" />
            </div>

            {/* Positions — Checkboxes */}
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 block">
                Positions <span className="text-red-400">*</span>
              </label>
              <div className={`grid grid-cols-2 gap-2 p-3 border rounded-xl ${fieldErrors.positions ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                {AD_POSITIONS.map((pos) => (
                  <label
                    key={pos.value}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={form.positions.includes(pos.value)}
                      onChange={() => togglePosition(pos.value)}
                      className="w-4 h-4 accent-green-500 rounded"
                    />
                    <span className="text-xs text-gray-700 group-hover:text-green-600">
                      {pos.label}
                    </span>
                  </label>
                ))}
              </div>
              <FieldError field="positions" />
            </div>

            {/* Size */}
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Size
              </label>
              <select
                value={form.size}
                onChange={(e) => {
                  setForm({ ...form, size: e.target.value, customWidth: '', customHeight: '' });
                  setFieldErrors((p) => ({ ...p, customWidth: '', customHeight: '' }));
                }}
                className={inputClass('size')}
              >
                {AD_SIZES.map((s) => (
                  <option key={s} value={s}>{s.replace('BANNER_', '')}</option>
                ))}
              </select>
            </div>

            {/* Custom Size */}
            {form.size === 'CUSTOM' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Width (px) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 400"
                    value={form.customWidth}
                    onChange={(e) => {
                      setForm({ ...form, customWidth: e.target.value });
                      if (e.target.value) setFieldErrors((p) => ({ ...p, customWidth: '' }));
                    }}
                    className={inputClass('customWidth')}
                  />
                  <FieldError field="customWidth" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Height (px) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 200"
                    value={form.customHeight}
                    onChange={(e) => {
                      setForm({ ...form, customHeight: e.target.value });
                      if (e.target.value) setFieldErrors((p) => ({ ...p, customHeight: '' }));
                    }}
                    className={inputClass('customHeight')}
                  />
                  <FieldError field="customHeight" />
                </div>
              </div>
            )}

            {/* Link */}
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Link URL
              </label>
              <input
                type="url"
                placeholder="https://example.com"
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                className={inputClass('link')}
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Schedule (Optional)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                  Start Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={form.startDateTime}
                  onChange={(e) => setForm({ ...form, startDateTime: e.target.value })}
                  className={inputClass('startDateTime')}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                  End Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={form.endDateTime}
                  onChange={(e) => {
                    setForm({ ...form, endDateTime: e.target.value });
                    setFieldErrors((p) => ({ ...p, endDateTime: '' }));
                  }}
                  className={inputClass('endDateTime')}
                />
                <FieldError field="endDateTime" />
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">

          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Publish</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Active</span>
              <button
                type="button"
                onClick={() => setForm({ ...form, active: !form.active })}
                className={`relative w-11 h-6 rounded-full transition-colors ${form.active ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.active ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Sort Order
              </label>
              <input
                type="number"
                min="0"
                value={form.sortOrder}
                onChange={(e) => setForm({ ...form, sortOrder: e.target.value })}
                className={inputClass('sortOrder')}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Create Ad'}
            </button>
          </div>

          {/* Ad Image */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">
              Ad Image <span className="text-red-400">*</span>
            </h3>
            {imagePreview && (
              <img src={imagePreview} alt="ad preview" className="w-full h-40 object-cover rounded-xl" />
            )}
            <label className={`w-full flex items-center justify-center px-4 py-2.5 text-sm text-gray-500 border border-dashed rounded-xl cursor-pointer hover:bg-gray-100 ${fieldErrors.image ? 'border-red-400 bg-red-50' : 'bg-gray-50 border-gray-300'}`}>
              {image ? image.name : 'Choose image'}
              <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
            </label>
            <FieldError field="image" />
          </div>

        </div>
      </div>
    </div>
  );
}
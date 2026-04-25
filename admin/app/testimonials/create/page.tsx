'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft, AiFillStar } from 'react-icons/ai';
import api from '@/lib/api';

interface ApiError {
  response?: { data?: { message?: string; errors?: string[] } };
}

export default function CreateTestimonialPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [featured, setFeatured] = useState(false);
  const [active, setActive] = useState(true);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('role', role);
      formData.append('content', content);
      formData.append('rating', String(rating));
      formData.append('featured', String(featured));
      formData.append('active', String(active));
      if (avatar) formData.append('avatar', avatar);
      await api.post('/testimonials', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      router.push('/testimonials');
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
        <button
          onClick={() => router.back()}
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <AiOutlineArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add Testimonial</h1>
          <p className="text-sm text-gray-400 mt-0.5">Add a new customer review</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg mb-4">{error}</div>
      )}

      <div className="max-w-lg space-y-4">

        {/* Avatar Upload */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Avatar / Photo</h3>
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-20 h-20 rounded-full object-cover border border-gray-100"
            />
          )}
          <label className="w-full flex items-center justify-center px-4 py-2.5 text-sm text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100">
            {avatar ? avatar.name : 'Choose avatar / photo'}
            <input type="file" accept="image/*" onChange={handleAvatar} className="hidden" />
          </label>
        </div>

        {/* Name + Role */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
              Role / Designation
            </label>
            <input
              type="text"
              placeholder="e.g. CEO at Google"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
            />
          </div>
        </div>

        {/* Review Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
            Review / Message <span className="text-red-400">*</span>
          </label>
          <textarea
            placeholder="Write the testimonial content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800 resize-none"
          />
        </div>

        {/* Rating */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3 block">
            Rating
          </label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <AiFillStar
                  size={28}
                  className={`transition-colors ${star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-400">{rating} / 5</span>
          </div>
        </div>

        {/* Featured + Active */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
              Featured
            </label>
            <select
              value={String(featured)}
              onChange={(e) => setFeatured(e.target.value === 'true')}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
            >
              <option value="false">Normal</option>
              <option value="true">Featured</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
              Status
            </label>
            <select
              value={String(active)}
              onChange={(e) => setActive(e.target.value === 'true')}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={saving || !name || !content}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Add Testimonial'}
        </button>

      </div>
    </div>
  );
}
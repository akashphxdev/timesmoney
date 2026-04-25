'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import api from '@/lib/api';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

interface ApiError {
  response?: { data?: { message?: string; errors?: string[] } };
}

export default function EditPartnerPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get(`/partners/${id}`);
        const p = res.data.data;
        setName(p.name || '');
        setIsActive(p.isActive);
        if (p.imageUrl) setPreview(`${SERVER_URL}${p.imageUrl}`);
      } catch {
        setError('Failed to fetch partner');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('isActive', String(isActive));
      if (image) formData.append('imageUrl', image);
      await api.patch(`/partners/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      router.push('/our-partners');
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || e.response?.data?.errors?.join(', ') || 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-400">Loading...</div>;

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
          <h1 className="text-2xl font-bold text-gray-900">Edit Partner</h1>
          <p className="text-sm text-gray-400 mt-0.5">Update partner details</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg mb-4">{error}</div>
      )}

      <div className="max-w-lg space-y-4">

        {/* Name + Status */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
              Partner Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
              Status
            </label>
            <select
              value={String(isActive)}
              onChange={(e) => setIsActive(e.target.value === 'true')}
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        {/* Image Upload */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Partner Logo / Icon</h3>
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-contain rounded-xl border border-gray-100 bg-gray-50 p-2"
            />
          )}
          <label className="w-full flex items-center justify-center px-4 py-2.5 text-sm text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100">
            {image ? image.name : 'Change logo / icon'}
            <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
          </label>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={saving || !name}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Update Partner'}
        </button>

      </div>
    </div>
  );
}
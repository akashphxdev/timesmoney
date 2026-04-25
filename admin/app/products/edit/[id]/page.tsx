'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AiOutlineArrowLeft, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import api from '@/lib/api';

interface Category {
  id: string;
  name: string;
}

// ✅ FIX: SubCategory mein category object add kiya
interface SubCategory {
  id: string;
  name: string;
  category: { id: string; name: string };
}

interface FormField {
  label: string;
  type: 'text' | 'number' | 'email' | 'phone' | 'select' | 'textarea' | 'date';
  required: boolean;
  options?: string[];
}

interface ApiError {
  response?: { data?: { message?: string; errors?: string[] } };
}

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';
const fieldTypes = ['text', 'number', 'email', 'phone', 'select', 'textarea', 'date'];

const financialFields: { label: string; key: 'interestRate' | 'processingFee' | 'minAmount' | 'maxAmount' | 'tenure' }[] = [
  { label: 'Interest Rate', key: 'interestRate' },
  { label: 'Processing Fee', key: 'processingFee' },
  { label: 'Min Amount', key: 'minAmount' },
  { label: 'Max Amount', key: 'maxAmount' },
  { label: 'Tenure', key: 'tenure' },
];

function DynamicList({
  title, placeholder, items, onChange,
}: {
  title: string; placeholder: string; items: string[]; onChange: (items: string[]) => void;
}) {
  const add = () => onChange([...items, '']);
  const update = (i: number, val: string) => { const u = [...items]; u[i] = val; onChange(u); };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <button onClick={add} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 text-xs font-semibold rounded-lg hover:bg-green-100 transition-colors">
          <AiOutlinePlus size={14} /> Add
        </button>
      </div>
      {items.length === 0 && <p className="text-xs text-gray-400 text-center py-4">No items — click Add to add</p>}
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input type="text" placeholder={placeholder} value={item} onChange={(e) => update(i, e.target.value)}
            className="flex-1 px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
          <button onClick={() => remove(i)} className="text-red-400 hover:text-red-600 flex-shrink-0">
            <AiOutlineDelete size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [categories, setCategories] = useState<Category[]>([]);
  // ✅ FIX: Saari sub-categories ek baar fetch
  const [allSubCategories, setAllSubCategories] = useState<SubCategory[]>([]);
  // ✅ FIX: Filtered subs — category ke hisaab se
  const [filteredSubs, setFilteredSubs] = useState<SubCategory[]>([]);

  const [form, setForm] = useState({
    name: '', slug: '', shortDescription: '', description: '',
    provider: '', interestRate: '', processingFee: '',
    minAmount: '', maxAmount: '', tenure: '', applyUrl: '',
    status: 'DRAFT', featured: false, isBestSeller: false,
    badge: '', sortOrder: '0', seoTitle: '', seoDescription: '',
    categoryId: '', subCategoryId: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [providerLogo, setProviderLogo] = useState<File | null>(null);
  const [providerLogoPreview, setProviderLogoPreview] = useState('');
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);
  const [eligibility, setEligibility] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ FIX: Categories + SubCategories + Product teeno ek saath fetch
        const [catRes, subCatRes, productRes] = await Promise.all([
          api.get('/categories'),
          api.get('/sub-categories'),
          api.get(`/products/${id}`),
        ]);

        const cats: Category[] = catRes.data.data;
        const subs: SubCategory[] = subCatRes.data.data;
        const product = productRes.data.data;

        setCategories(cats);
        setAllSubCategories(subs);

        setForm({
          name: product.name || '',
          slug: product.slug || '',
          shortDescription: product.shortDescription || '',
          description: product.description || '',
          provider: product.provider || '',
          interestRate: product.interestRate || '',
          processingFee: product.processingFee || '',
          minAmount: product.minAmount || '',
          maxAmount: product.maxAmount || '',
          tenure: product.tenure || '',
          applyUrl: product.applyUrl || '',
          status: product.status || 'DRAFT',
          featured: product.featured || false,
          isBestSeller: product.isBestSeller || false,
          badge: product.badge || '',
          sortOrder: String(product.sortOrder || 0),
          seoTitle: product.seoTitle || '',
          seoDescription: product.seoDescription || '',
          categoryId: product.categoryId || '',
          subCategoryId: product.subCategoryId || '',
        });

        // ✅ FIX: Existing category ki subs filter karo — cat?.subCategories nahi
        if (product.categoryId) {
          setFilteredSubs(subs.filter((s) => s.category.id === product.categoryId));
        }

        if (product.image) setImagePreview(`${SERVER_URL}${product.image}`);
        if (product.providerLogo) setProviderLogoPreview(`${SERVER_URL}${product.providerLogo}`);
        if (product.formFields) setFormFields(product.formFields);
        if (Array.isArray(product.features)) setFeatures(product.features);
        if (Array.isArray(product.benefits)) setBenefits(product.benefits);
        if (Array.isArray(product.eligibility)) setEligibility(product.eligibility);
      } catch {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // ✅ FIX: Frontend filter — koi extra API call nahi
  const handleCategoryChange = (categoryId: string) => {
    setForm({ ...form, categoryId, subCategoryId: '' });
    setFilteredSubs(allSubCategories.filter((s) => s.category.id === categoryId));
  };

  const addFormField = () => setFormFields([...formFields, { label: '', type: 'text', required: false }]);

  const updateFormField = <K extends keyof FormField>(index: number, key: K, value: FormField[K]) => {
    const updated = [...formFields];
    updated[index][key] = value;
    setFormFields(updated);
  };

  const removeFormField = (index: number) => setFormFields(formFields.filter((_, i) => i !== index));

  const handleSubmit = async () => {
    setSaving(true);
    setError('');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, String(value)));
      if (image) formData.append('image', image);
      if (providerLogo) formData.append('providerLogo', providerLogo);
      if (formFields.length > 0) formData.append('formFields', JSON.stringify(formFields));
      formData.append('features', JSON.stringify(features.filter((f) => f.trim())));
      formData.append('benefits', JSON.stringify(benefits.filter((b) => b.trim())));
      formData.append('eligibility', JSON.stringify(eligibility.filter((e) => e.trim())));

      await api.patch(`/products/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      router.push('/products');
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
        <button onClick={() => router.back()} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
          <AiOutlineArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Edit Product</h1>
          <p className="text-sm text-gray-400 mt-0.5">Update product details</p>
        </div>
      </div>

      {error && <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg mb-4">{error}</div>}

      <div className="grid grid-cols-3 gap-6">
        {/* ── Left Column ── */}
        <div className="col-span-2 space-y-4">

          {/* Basic Info */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Basic Info</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Slug *</label>
                <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Short Description</label>
              <input type="text" value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Description</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800 resize-none" />
            </div>
          </div>

          {/* Provider */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Provider</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Provider Name</label>
                <input type="text" value={form.provider} onChange={(e) => setForm({ ...form, provider: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Provider Logo</label>
                {providerLogoPreview && <img src={providerLogoPreview} alt="logo" className="w-16 h-16 object-contain rounded-lg mb-2" />}
                <label className="w-full flex items-center justify-center px-4 py-2.5 text-sm text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100">
                  {providerLogo ? providerLogo.name : 'Change logo'}
                  <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (!f) return; setProviderLogo(f); setProviderLogoPreview(URL.createObjectURL(f)); }} className="hidden" />
                </label>
              </div>
            </div>
          </div>

          {/* Financial Details */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Financial Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {financialFields.map(({ label, key }) => (
                <div key={key}>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">{label}</label>
                  <input type="text" value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
                </div>
              ))}
              <div className="col-span-2">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">External Apply Link</label>
                <input type="url" value={form.applyUrl} placeholder="https://example.com/apply" onChange={(e) => setForm({ ...form, applyUrl: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>
            </div>
          </div>

          <DynamicList title="Features" placeholder="e.g. Instant approval in 24 hours" items={features} onChange={setFeatures} />
          <DynamicList title="Benefits" placeholder="e.g. Zero prepayment charges" items={benefits} onChange={setBenefits} />
          <DynamicList title="Eligibility Criteria" placeholder="e.g. Minimum age 21 years" items={eligibility} onChange={setEligibility} />

          {/* Custom Form Fields */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">Custom Form Fields</h3>
              <button onClick={addFormField} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 text-xs font-semibold rounded-lg hover:bg-green-100 transition-colors">
                <AiOutlinePlus size={14} /> Add Field
              </button>
            </div>
            {formFields.length === 0 && <p className="text-xs text-gray-400 text-center py-4">No custom fields</p>}
            {formFields.map((field, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">Field {index + 1}</span>
                  <button onClick={() => removeFormField(index)} className="text-red-400 hover:text-red-600"><AiOutlineDelete size={16} /></button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="text-xs text-gray-500 mb-1 block">Label</label>
                    <input type="text" placeholder="e.g. Monthly Income" value={field.label}
                      onChange={(e) => updateFormField(index, 'label', e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-green-400 text-gray-800" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Type</label>
                    <select value={field.type} onChange={(e) => updateFormField(index, 'type', e.target.value as FormField['type'])}
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-green-400 text-gray-800">
                      {fieldTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id={`req-${index}`} checked={field.required}
                    onChange={(e) => updateFormField(index, 'required', e.target.checked)} className="accent-green-500" />
                  <label htmlFor={`req-${index}`} className="text-xs text-gray-600">Required</label>
                </div>
                {field.type === 'select' && (
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Options (comma separated)</label>
                    <input type="text" placeholder="e.g. Salaried, Self Employed"
                      value={field.options?.join(', ') || ''}
                      onChange={(e) => updateFormField(index, 'options', e.target.value.split(',').map((o) => o.trim()))}
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-green-400 text-gray-800" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">SEO</h3>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">SEO Title</label>
              <input type="text" value={form.seoTitle} onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">SEO Description</label>
              <textarea value={form.seoDescription} onChange={(e) => setForm({ ...form, seoDescription: e.target.value })} rows={2}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800 resize-none" />
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="space-y-4">

          {/* Publish */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Publish</h3>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Status</label>
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800">
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="accent-green-500" />
                <span className="text-sm text-gray-700">Featured</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.isBestSeller} onChange={(e) => setForm({ ...form, isBestSeller: e.target.checked })} className="accent-green-500" />
                <span className="text-sm text-gray-700">Best Seller</span>
              </label>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Badge</label>
              <input type="text" value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Sort Order</label>
              <input type="number" value={form.sortOrder} onChange={(e) => setForm({ ...form, sortOrder: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
            </div>
            <button onClick={handleSubmit} disabled={saving}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50">
              {saving ? 'Saving...' : 'Update Product'}
            </button>
          </div>

          {/* Product Image */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">Product Image</h3>
            {imagePreview && <img src={imagePreview} alt="product" className="w-full h-40 object-cover rounded-xl" />}
            <label className="w-full flex items-center justify-center px-4 py-2.5 text-sm text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100">
              {image ? image.name : 'Change image'}
              <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (!f) return; setImage(f); setImagePreview(URL.createObjectURL(f)); }} className="hidden" />
            </label>
          </div>

          {/* Category */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Category</h3>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Category *</label>
              <select value={form.categoryId} onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800">
                <option value="">Select category</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            {/* ✅ FIX: filteredSubs use ho raha hai ab */}
            {form.categoryId && (
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                  Sub Category
                  {filteredSubs.length === 0 && (
                    <span className="ml-2 text-gray-400 font-normal normal-case">(none available)</span>
                  )}
                </label>
                <select value={form.subCategoryId} onChange={(e) => setForm({ ...form, subCategoryId: e.target.value })}
                  disabled={filteredSubs.length === 0}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800 disabled:opacity-50">
                  <option value="">Select sub category</option>
                  {filteredSubs.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
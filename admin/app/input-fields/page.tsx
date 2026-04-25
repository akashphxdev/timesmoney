'use client';

import { useState, useEffect, useCallback } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';
import api from '@/lib/api';

type FieldType = 'TEXT' | 'NUMBER' | 'DROPDOWN' | 'CHECKBOX' | 'DATE' | 'TEXTAREA' | 'FILE';

interface DropdownOption {
  label: string;
  value: string;
}

interface InputField {
  id: string;
  label: string;
  type: FieldType;
  placeholder: string | null;
  isRequired: boolean;
  isActive: boolean;
  options: DropdownOption[] | null;
  products: { id: string; name: string }[];
  order: number;
  createdAt: string;
}

interface Product {
  id: string;
  name: string;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

const FIELD_TYPES: { value: FieldType; label: string; icon: string }[] = [
  { value: 'TEXT', label: 'Text', icon: 'T' },
  { value: 'NUMBER', label: 'Number', icon: '#' },
  { value: 'DROPDOWN', label: 'Dropdown', icon: '▾' },
  { value: 'CHECKBOX', label: 'Checkbox', icon: '☑' },
  { value: 'DATE', label: 'Date', icon: '📅' },
  { value: 'TEXTAREA', label: 'Textarea', icon: '¶' },
  { value: 'FILE', label: 'File Upload', icon: '↑' },
];

interface FormState {
  label: string;
  type: FieldType;
  placeholder: string;
  isRequired: boolean;
  isActive: boolean;
  options: DropdownOption[];
  productIds: string[];
}

const emptyForm: FormState = {
  label: '',
  type: 'TEXT',
  placeholder: '',
  isRequired: false,
  isActive: true,
  options: [],
  productIds: [],
};

export default function InputFieldsPage() {
  const [fields, setFields] = useState<InputField[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [newOption, setNewOption] = useState('');
  const [search, setSearch] = useState('');

  const fetchAll = useCallback(async () => {
    try {
      const [fieldsRes, productsRes] = await Promise.all([
        api.get('/input-fields'),
        api.get('/products'),
      ]);
      setFields(fieldsRes.data.data);
      setProducts(productsRes.data.data);
    } catch (err: unknown) {
      const e = err as ApiError;
      const msg = e.response?.data?.message || 'Failed to fetch data';
      if (msg.toLowerCase().includes('forbidden') || msg.toLowerCase().includes('access denied')) {
        setError('🚫 Forbidden — You do not have permission to view input fields.');
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const filtered = fields.filter((f) =>
    f.label.toLowerCase().includes(search.toLowerCase())
  );

  function openAdd() {
    setForm(emptyForm);
    setEditId(null);
    setError('');
    setNewOption('');
    setShowModal(true);
  }

  function openEdit(field: InputField) {
    setForm({
      label: field.label,
      type: field.type,
      placeholder: field.placeholder || '',
      isRequired: field.isRequired,
      isActive: field.isActive,
      options: field.options || [],
      productIds: field.products.map((p) => p.id),
    });
    setEditId(field.id);
    setError('');
    setNewOption('');
    setShowModal(true);
  }

  function addOption() {
    const trimmed = newOption.trim();
    if (!trimmed) return;
    const opt: DropdownOption = { label: trimmed, value: trimmed.toLowerCase().replace(/\s+/g, '_') };
    setForm((f) => ({ ...f, options: [...f.options, opt] }));
    setNewOption('');
  }

  function removeOption(idx: number) {
    setForm((f) => ({ ...f, options: f.options.filter((_, i) => i !== idx) }));
  }

  function toggleProduct(id: string) {
    setForm((f) => ({
      ...f,
      productIds: f.productIds.includes(id)
        ? f.productIds.filter((p) => p !== id)
        : [...f.productIds, id],
    }));
  }

  async function handleSave() {
    if (!form.label.trim()) return;
    setSaving(true);
    setError('');
    try {
      const payload = {
        label: form.label,
        type: form.type,
        placeholder: form.placeholder || null,
        isRequired: form.isRequired,
        isActive: form.isActive,
        options: form.type === 'DROPDOWN' ? form.options : null,
        productIds: form.productIds,
      };
      if (editId) {
        await api.patch(`/input-fields/${editId}`, payload);
      } else {
        await api.post('/input-fields', payload);
      }
      await fetchAll();
      setShowModal(false);
    } catch (err: unknown) {
      const e = err as ApiError;
      const msg = e.response?.data?.message || 'Something went wrong';
      if (msg.toLowerCase().includes('forbidden') || msg.toLowerCase().includes('access denied')) {
        setError('🚫 Forbidden — You do not have permission to perform this action.');
      } else {
        setError(msg);
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      await api.delete(`/input-fields/${id}`);
      setFields((prev) => prev.filter((f) => f.id !== id));
      setDeleteId(null);
    } catch {
      setError('Failed to delete field');
    }
  }

  async function handleToggle(field: InputField) {
    try {
      await api.patch(`/input-fields/${field.id}`, { isActive: !field.isActive });
      setFields((prev) => prev.map((f) => f.id === field.id ? { ...f, isActive: !f.isActive } : f));
    } catch {
      setError('Failed to update status');
    }
  }

  const typeIcon = (type: FieldType) => FIELD_TYPES.find((t) => t.value === type)?.icon || 'T';
  const typeLabel = (type: FieldType) => FIELD_TYPES.find((t) => t.value === type)?.label || type;

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Input Fields</h1>
          <p className="text-sm text-gray-400 mt-1">Create custom fields for your lead forms</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors">
          <AiOutlinePlus size={16} />
          New Field
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Total Fields', value: fields.length, color: 'text-gray-900' },
          { label: 'Active', value: fields.filter((f) => f.isActive).length, color: 'text-green-600' },
          { label: 'Inactive', value: fields.filter((f) => !f.isActive).length, color: 'text-gray-400' },
          { label: 'Required', value: fields.filter((f) => f.isRequired).length, color: 'text-orange-500' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{stat.label}</p>
            <p className={`text-2xl font-bold mt-0.5 ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search fields..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
      />

      {/* Error */}
      {error && !showModal && (
        <div className="bg-red-50 text-red-500 text-sm px-5 py-3 rounded-xl border border-red-100">
          {error}
        </div>
      )}

      {/* Fields List */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-sm text-gray-400">Loading...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['', 'Field', 'Type', 'Products', 'Required', 'Status', 'Actions'].map((col) => (
                  <th key={col} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">No fields found</td></tr>
              ) : (
                filtered.map((field) => (
                  <tr key={field.id} className="hover:bg-gray-50 transition-colors">

                    <td className="px-4 py-4 text-gray-300">
                      <MdDragIndicator size={18} />
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-indigo-500">{typeIcon(field.type)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{field.label}</p>
                          {field.placeholder && <p className="text-xs text-gray-400">placeholder: {field.placeholder}</p>}
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full">
                        {typeLabel(field.type)}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      {field.products.length === 0 ? (
                        <span className="text-xs text-gray-400">All / None</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {field.products.slice(0, 2).map((p) => (
                            <span key={p.id} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{p.name}</span>
                          ))}
                          {field.products.length > 2 && (
                            <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">+{field.products.length - 2}</span>
                          )}
                        </div>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      {field.isRequired ? (
                        <span className="text-xs font-semibold text-orange-500">Yes</span>
                      ) : (
                        <span className="text-xs text-gray-400">No</span>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleToggle(field)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${field.isActive ? 'bg-green-500' : 'bg-gray-200'}`}
                      >
                        <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${field.isActive ? 'translate-x-4' : 'translate-x-1'}`} />
                      </button>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(field)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                          <AiOutlineEdit size={15} />
                        </button>
                        <button onClick={() => setDeleteId(field.id)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
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

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] flex flex-col">

            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <h3 className="text-base font-bold text-gray-900">{editId ? 'Edit Field' : 'New Input Field'}</h3>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400">
                <AiOutlineClose size={16} />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 space-y-5 flex-1">
              {error && <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg">{error}</div>}

              {/* Label */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Field Label *</label>
                <input
                  type="text"
                  placeholder="e.g. Loan Amount"
                  value={form.label}
                  onChange={(e) => setForm({ ...form, label: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
                />
              </div>

              {/* Field Type */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Field Type</label>
                <div className="grid grid-cols-4 gap-2">
                  {FIELD_TYPES.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setForm({ ...form, type: t.value })}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all flex flex-col items-center gap-1 ${form.type === t.value ? 'bg-indigo-50 border-indigo-300 text-indigo-600' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'}`}
                    >
                      <span className="text-base">{t.icon}</span>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Placeholder */}
              {['TEXT', 'NUMBER', 'TEXTAREA'].includes(form.type) && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Placeholder</label>
                  <input
                    type="text"
                    placeholder="e.g. Enter your loan amount"
                    value={form.placeholder}
                    onChange={(e) => setForm({ ...form, placeholder: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
                  />
                </div>
              )}

              {/* Dropdown Options */}
              {form.type === 'DROPDOWN' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Options</label>
                  <div className="space-y-2 mb-3">
                    {form.options.map((opt, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                        <span className="text-sm text-gray-700 flex-1">{opt.label}</span>
                        <span className="text-xs text-gray-400">{opt.value}</span>
                        <button onClick={() => removeOption(idx)} className="text-red-400 hover:text-red-600 ml-2">
                          <AiOutlineClose size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add option..."
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addOption()}
                      className="flex-1 px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
                    />
                    <button onClick={addOption} className="px-4 py-2.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl">
                      Add
                    </button>
                  </div>
                </div>
              )}

              {/* Products */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Link to Products <span className="text-gray-400 normal-case font-normal">(optional)</span></label>
                <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => toggleProduct(p.id)}
                      className={`px-3 py-2 rounded-xl border text-xs font-medium text-left transition-all ${form.productIds.includes(p.id) ? 'bg-green-50 border-green-300 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'}`}
                    >
                      {form.productIds.includes(p.id) && <span className="mr-1">✓</span>}
                      {p.name}
                    </button>
                  ))}
                  {products.length === 0 && <p className="text-xs text-gray-400 col-span-2">No products found</p>}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setForm({ ...form, isRequired: !form.isRequired })}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${form.isRequired ? 'bg-orange-400' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${form.isRequired ? 'translate-x-4' : 'translate-x-1'}`} />
                  </button>
                  <span className="text-sm font-medium text-gray-600">Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setForm({ ...form, isActive: !form.isActive })}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${form.isActive ? 'bg-green-500' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${form.isActive ? 'translate-x-4' : 'translate-x-1'}`} />
                  </button>
                  <span className="text-sm font-medium text-gray-600">Active</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100 flex-shrink-0">
              <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl disabled:opacity-50">
                {saving ? 'Saving...' : editId ? 'Save Changes' : 'Create Field'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="px-6 py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                <AiOutlineDelete size={22} className="text-red-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Delete Field?</h3>
              <p className="text-sm text-gray-400">Ye field forms se hata diya jayega. Sure ho?</p>
            </div>
            <div className="flex items-center gap-3 px-6 pb-5">
              <button onClick={() => setDeleteId(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl">Delete</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
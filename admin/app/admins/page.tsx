'use client';

import { useState, useEffect, useCallback } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import api from '@/lib/api';

interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLoginAt: string | null;
  createdAt: string;
}

interface FormState {
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

const roles = ['SUPER_ADMIN', 'EDITOR', 'VIEWER'];
const emptyForm: FormState = { name: '', email: '', password: '', role: 'EDITOR', isActive: true };

export default function AdminsPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

 const fetchAdmins = useCallback(async () => {
  try {
    const res = await api.get('/admins');
    setAdmins(res.data.data);
  } catch (err: unknown) {
    const e = err as ApiError;
    const msg = e.response?.data?.message || 'Failed to fetch admins';
    if (msg.toLowerCase().includes('forbidden') || msg.toLowerCase().includes('access denied')) {
      setError('Forbidden — You do not have permission to view admins.');
    } else {
      setError(msg);
    }
  } finally {
    setLoading(false);
  }
}, []);

  useEffect(() => { fetchAdmins(); }, [fetchAdmins]);

  const filtered = admins.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase())
  );

  function openAdd() {
    setForm(emptyForm);
    setEditId(null);
    setError('');
    setShowModal(true);
  }

  function openEdit(admin: Admin) {
    setForm({ name: admin.name, email: admin.email, password: '', role: admin.role, isActive: admin.isActive });
    setEditId(admin.id);
    setError('');
    setShowModal(true);
  }

  async function handleSave() {
    if (!form.name.trim() || !form.email.trim()) return;
    setSaving(true);
    setError('');
    try {
      if (editId) {
        const payload: Partial<FormState> = { name: form.name, email: form.email, role: form.role, isActive: form.isActive };
        if (form.password) payload.password = form.password;
        await api.patch(`/admins/${editId}`, payload);
      } else {
        await api.post('/admins', form);
      }
      await fetchAdmins();
      setShowModal(false);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Something went wrong');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      await api.delete(`/admins/${id}`);
      await fetchAdmins();
      setDeleteId(null);
    } catch {
      setError('Failed to delete admin');
    }
  }

  async function handleToggle(admin: Admin) {
    try {
      await api.patch(`/admins/${admin.id}`, { isActive: !admin.isActive });
      await fetchAdmins();
    } catch {
      setError('Failed to update status');
    }
  }

  function formatDate(date: string | null) {
    if (!date) return 'Never';
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Admins</h1>
          <p className="text-sm text-gray-400 mt-1">Manage admin users and their roles</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors">
          <AiOutlinePlus size={16} />
          Add Admin
        </button>
      </div>

      {/* Search + Stats */}
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
        />
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
            {admins.filter((a) => a.isActive).length} Active
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-gray-100 text-gray-500 border border-gray-200 rounded-full">
            {admins.filter((a) => !a.isActive).length} Inactive
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {error && !showModal && (
            <div className="bg-red-50 text-red-500 text-sm px-6 py-4 border-b border-red-100 flex items-center gap-2">
              <span>{error}</span>
            </div>
          )}
          {loading ? (
          <div className="py-16 text-center text-sm text-gray-400">Loading...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Admin', 'Email', 'Role', 'Status', 'Last Login', 'Joined', 'Actions'].map((col) => (
                  <th key={col} className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">No admins found</td></tr>
              ) : (
                filtered.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition-colors">

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-green-600">{admin.name.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{admin.name}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">{admin.email}</td>

                    <td className="px-6 py-4">
                      <span className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-full">
                        {admin.role}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggle(admin)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${admin.isActive ? 'bg-green-500' : 'bg-gray-200'}`}
                      >
                        <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${admin.isActive ? 'translate-x-4' : 'translate-x-1'}`} />
                      </button>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-400">{formatDate(admin.lastLoginAt)}</td>

                    <td className="px-6 py-4 text-sm text-gray-400">{formatDate(admin.createdAt)}</td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(admin)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                          <AiOutlineEdit size={15} />
                        </button>
                        <button onClick={() => setDeleteId(admin.id)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
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
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">{editId ? 'Edit Admin' : 'Add New Admin'}</h3>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400">
                <AiOutlineClose size={16} />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              {error && <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg">{error}</div>}

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name</label>
                <input type="text" placeholder="e.g. Rahul Verma" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                <input type="email" placeholder="e.g. rahul@timesmoney.in" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Password {editId && <span className="text-gray-400 normal-case font-normal">(leave blank to keep same)</span>}
                </label>
                <input type="password" placeholder="••••••••" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Role</label>
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800">
                  {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100">
              <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl disabled:opacity-50">
                {saving ? 'Saving...' : editId ? 'Save Changes' : 'Add Admin'}
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
              <h3 className="text-base font-bold text-gray-900">Delete Admin?</h3>
              <p className="text-sm text-gray-400">Are you sure you want to delete this admin? This action cannot be undone.</p>
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
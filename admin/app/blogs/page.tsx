'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import api from '@/lib/api';

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: { id: string; name: string } | null;
  subCategory: { id: string; name: string } | null;
  status: string;
  author: string | null;
  coverImage: string | null;
  viewCount: number;
  createdAt: string;
}

interface ApiError {
  response?: { data?: { message?: string } };
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [statusChangingId, setStatusChangingId] = useState<string | null>(null);

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await api.get('/blogs');
      setBlogs(res.data.data);
    } catch {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchBlogs(); }, [fetchBlogs]);

 // Line 47-50 — ye replace karo
const filtered = blogs.filter(
  (b) =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    (b.category?.name.toLowerCase().includes(search.toLowerCase()) ?? false)
);

  async function handleDelete(id: string) {
    try {
      await api.delete(`/blogs/${id}`);
      await fetchBlogs();
      setDeleteId(null);
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to delete blog');
    }
  }

  // ✅ Quick status change
  async function handleStatusChange(blog: Blog) {
    const nextStatus = blog.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    setStatusChangingId(blog.id);
    try {
      await api.patch(`/blogs/${blog.id}`, { status: nextStatus });
      setBlogs((prev) =>
        prev.map((b) => (b.id === blog.id ? { ...b, status: nextStatus } : b))
      );
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || 'Failed to update status');
    } finally {
      setStatusChangingId(null);
    }
  }

  const statusColor = (status: string) => {
    if (status === 'PUBLISHED') return 'bg-green-50 text-green-600 border-green-100';
    if (status === 'DRAFT') return 'bg-yellow-50 text-yellow-600 border-yellow-100';
    return 'bg-gray-100 text-gray-500 border-gray-200';
  };

  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Blogs</h1>
          <p className="text-sm text-gray-400 mt-1">Manage your blog posts</p>
        </div>
        <Link
          href="/blogs/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <AiOutlinePlus size={16} />
          Add Blog
        </Link>
      </div>

      {/* Search + Stats */}
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by title or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 w-72 text-gray-700 placeholder:text-gray-400"
        />
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-full">
            {blogs.filter((b) => b.status === 'PUBLISHED').length} Published
          </span>
          <span className="text-xs font-medium px-3 py-1.5 bg-yellow-50 text-yellow-600 border border-yellow-100 rounded-full">
            {blogs.filter((b) => b.status === 'DRAFT').length} Draft
          </span>
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
          // ✅ table-fixed + overflow-x-auto for no overflow
          <div className="overflow-x-auto">
            <table className="w-full table-fixed min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16">Cover</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-48">Title</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Category</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Author</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Status</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16">Views</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28">Date</th>
                  <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} className="px-6 py-12 text-center text-sm text-gray-400">No blogs found</td></tr>
                ) : (
                  filtered.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors">

                      <td className="px-4 py-4">
                        {blog.coverImage ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${blog.coverImage}`}
                            alt={blog.title}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">No img</div>
                        )}
                      </td>

                      <td className="px-4 py-4">
                        {/* ✅ truncate title */}
                        <p className="text-sm font-semibold text-gray-900 truncate">{blog.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5 truncate">{blog.slug}</p>
                      </td>

                      {/* ✅ truncate category */}
                      <td className="px-4 py-4 text-sm text-gray-500 truncate"> {blog.category?.name || '—'}</td>

                      {/* ✅ truncate author */}
                      <td className="px-4 py-4 text-sm text-gray-500 truncate max-w-0">
                        <span className="truncate block" title={blog.author || ''}>
                          {blog.author || '—'}
                        </span>
                      </td>

                      {/* ✅ Status badge - click to toggle */}
                      <td className="px-4 py-4">
                        <button
                          onClick={() => handleStatusChange(blog)}
                          disabled={statusChangingId === blog.id || blog.status === 'ARCHIVED'}
                          title={blog.status === 'ARCHIVED' ? 'Archived blogs cannot be toggled' : `Click to change to ${blog.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED'}`}
                          className={`text-xs font-medium px-2.5 py-1 border rounded-full transition-opacity cursor-pointer hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 ${statusColor(blog.status)}`}
                        >
                          {statusChangingId === blog.id ? '...' : blog.status}
                        </button>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500">{blog.viewCount}</td>

                      <td className="px-4 py-4 text-sm text-gray-400">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Link href={`/blogs/edit/${blog.id}`}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                            <AiOutlineEdit size={15} />
                          </Link>
                          <button onClick={() => setDeleteId(blog.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                            <AiOutlineDelete size={15} />
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="px-6 py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                <AiOutlineDelete size={22} className="text-red-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Delete Blog?</h3>
              <p className="text-sm text-gray-400">Blog aur uski saari images delete ho jayengi!</p>
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
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import api from '@/lib/api';

const Editor = dynamic(() => import('@/components/editor/Editor'), { ssr: false });

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

interface ApiError {
  response?: { data?: { message?: string; errors?: string[] } };
}

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
  category: { id: string; name: string };
}

function generateSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    categoryId: '',
    subCategoryId: '',
    author: '',
    tags: '',
    status: 'DRAFT',
    seoTitle: '',
    seoDescription: '',
  });
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [filteredSubs, setFilteredSubs] = useState<SubCategory[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogRes, catRes, subRes] = await Promise.all([
          api.get(`/blogs/${id}`),
          api.get('/categories'),
          api.get('/sub-categories'),
        ]);

        const blog = blogRes.data.data;
        const allSubs: SubCategory[] = subRes.data.data;

        setCategories(catRes.data.data);
        setSubCategories(allSubs);

        setForm({
          title: blog.title || '',
          slug: blog.slug || '',
          excerpt: blog.excerpt || '',
          categoryId: blog.categoryId || '',
          subCategoryId: blog.subCategoryId || '',
          author: blog.author || '',
          tags: blog.tags?.join(', ') || '',
          status: blog.status || 'DRAFT',
          seoTitle: blog.seoTitle || '',
          seoDescription: blog.seoDescription || '',
        });

        setContent(blog.content || '');
        if (blog.coverImage) setCoverPreview(`${SERVER_URL}${blog.coverImage}`);

        if (blog.categoryId) {
          setFilteredSubs(allSubs.filter((s) => s.category.id === blog.categoryId));
        }
      } catch {
        setError('Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleCategoryChange = (catId: string) => {
    setForm({ ...form, categoryId: catId, subCategoryId: '' });
    setFilteredSubs(subCategories.filter((s) => s.category.id === catId));
    if (catId) setFieldErrors((prev) => ({ ...prev, categoryId: '' }));
  };

  const handleCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverImage(file);
    setCoverPreview(URL.createObjectURL(file));
    setFieldErrors((prev) => ({ ...prev, coverImage: '' }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!form.title.trim()) errors.title = 'Title is required';
    if (!form.slug.trim()) errors.slug = 'Slug is required';
    if (!form.excerpt.trim()) errors.excerpt = 'Excerpt is required';
    if (!form.author.trim()) errors.author = 'Author is required';
    if (!form.categoryId) errors.categoryId = 'Category is required';
    if (!form.subCategoryId) errors.subCategoryId = 'Sub-category is required';
    if (!form.tags.trim()) errors.tags = 'At least one tag is required';
    if (!form.seoTitle.trim()) errors.seoTitle = 'SEO title is required';
    if (!form.seoDescription.trim()) errors.seoDescription = 'SEO description is required';
    if (!content || content === '<p></p>') errors.content = 'Content is required';
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
      formData.append('slug', form.slug);
      formData.append('excerpt', form.excerpt);
      formData.append('author', form.author);
      formData.append('status', form.status);
      formData.append('seoTitle', form.seoTitle);
      formData.append('seoDescription', form.seoDescription);
      formData.append('content', content);
      if (form.categoryId) formData.append('categoryId', form.categoryId);
      if (form.subCategoryId) formData.append('subCategoryId', form.subCategoryId);
      if (form.tags) {
        form.tags.split(',').forEach((tag) => formData.append('tags[]', tag.trim()));
      }
      if (coverImage) formData.append('coverImage', coverImage);

      await api.patch(`/blogs/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      router.push('/blogs');
    } catch (err: unknown) {
      const e = err as ApiError;
      setError(e.response?.data?.message || e.response?.data?.errors?.join(', ') || 'Something went wrong');
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
          <h1 className="text-2xl font-bold text-gray-900">Edit Blog</h1>
          <p className="text-sm text-gray-400 mt-0.5">Update your blog post</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 text-xs px-3 py-2 rounded-lg mb-4 border border-red-100">
          {error}
        </div>
      )}

      {/* items-start — sidebar page ke saath scroll karega, sticky nahi rahega */}
      <div className="grid grid-cols-3 gap-6 items-start">

        {/* Left — Main Content */}
        <div className="col-span-2 space-y-4">

          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => {
                  setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, title: '', slug: '' }));
                }}
                className={inputClass('title')}
              />
              <FieldError field="title" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Slug <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => {
                  setForm({ ...form, slug: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, slug: '' }));
                }}
                className={`${inputClass('slug')} font-mono`}
              />
              <FieldError field="slug" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Excerpt <span className="text-red-400">*</span>
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => {
                  setForm({ ...form, excerpt: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, excerpt: '' }));
                }}
                rows={2}
                className={`${inputClass('excerpt')} resize-none`}
              />
              <FieldError field="excerpt" />
            </div>
          </div>

          {/* Editor */}
          <div className={`bg-white rounded-2xl border p-6 ${fieldErrors.content ? 'border-red-400' : 'border-gray-200'}`}>
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3 block">
              Content <span className="text-red-400">*</span>
            </label>
            <Editor
              content={content}
              onChange={(val) => {
                setContent(val);
                if (val && val !== '<p></p>') setFieldErrors((p) => ({ ...p, content: '' }));
              }}
            />
            <FieldError field="content" />
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">SEO Settings</h3>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                SEO Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.seoTitle}
                onChange={(e) => {
                  setForm({ ...form, seoTitle: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, seoTitle: '' }));
                }}
                className={inputClass('seoTitle')}
              />
              <FieldError field="seoTitle" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                SEO Description <span className="text-red-400">*</span>
              </label>
              <textarea
                value={form.seoDescription}
                onChange={(e) => {
                  setForm({ ...form, seoDescription: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, seoDescription: '' }));
                }}
                rows={2}
                className={`${inputClass('seoDescription')} resize-none`}
              />
              <FieldError field="seoDescription" />
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">

          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Publish</h3>
            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-400 text-gray-800"
              >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Update Blog'}
            </button>
          </div>

          {/* Cover Image */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">Cover Image</h3>
            {coverPreview && (
              <img src={coverPreview} alt="cover" className="w-full h-40 object-cover rounded-xl" />
            )}
            <label className="w-full flex items-center justify-center px-4 py-2.5 text-sm text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100">
              {coverImage ? coverImage.name : 'Change image'}
              <input type="file" accept="image/*" onChange={handleCover} className="hidden" />
            </label>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Details</h3>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                value={form.categoryId}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className={inputClass('categoryId')}
              >
                <option value="">-- Select Category --</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <FieldError field="categoryId" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Sub-Category <span className="text-red-400">*</span>
              </label>
              <select
                value={form.subCategoryId}
                onChange={(e) => {
                  setForm({ ...form, subCategoryId: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, subCategoryId: '' }));
                }}
                disabled={!form.categoryId}
                className={`${inputClass('subCategoryId')} disabled:opacity-50`}
              >
                <option value="">-- Select Sub-Category --</option>
                {filteredSubs.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <FieldError field="subCategoryId" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Author <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => {
                  setForm({ ...form, author: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, author: '' }));
                }}
                className={inputClass('author')}
              />
              <FieldError field="author" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                Tags <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="tag1, tag2, tag3"
                value={form.tags}
                onChange={(e) => {
                  setForm({ ...form, tags: e.target.value });
                  if (e.target.value) setFieldErrors((p) => ({ ...p, tags: '' }));
                }}
                className={inputClass('tags')}
              />
              <FieldError field="tags" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
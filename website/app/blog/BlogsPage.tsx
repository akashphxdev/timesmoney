'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import AdBanner from '@/components/ads/AdBanner';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  author: string | null;
  tags: string[];
  publishedAt: string | null;
  viewCount: number;
  category: { name: string; slug: string } | null;
  subCategory: { name: string; slug: string } | null;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '');

// ── SVG Icons ──
const BookIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-brand-teal">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const EmptyIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-slate-200 mx-auto">
    <path d="M22 12h-6l-2 3h-4l-2-3H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="inline-block mr-1 opacity-60">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="inline-block mr-1 opacity-60">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const topics = [
  {
    label: 'Personal Loans',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Credit Cards',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    label: 'Investments',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M22 12l-4-4-6 6-4-4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Insurance',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6c0 4.4-3 8.4-7 10C8 20.4 5 16.4 5 12V6l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Savings',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 12V8H4v12a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 8a2 2 0 10-4 0v4h4V8z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    label: 'Tax Planning',
    icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/web/blogs?page=${page}&limit=9`);
        setBlogs(res.data.data.blogs);
        setPagination(res.data.data.pagination);
      } catch (err) {
        console.error('Blogs fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [page]);

  return (
    <main className="min-h-screen bg-gray-50">
      

      {/* Hero Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <AdBanner page="BLOG" position="TOP" className="mb-1" />

          <p className="text-brand-teal text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-2 sm:mb-3">
            TimesMoney — Knowledge Hub
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Smart Money,{' '}
            <span className="text-brand-teal">Smarter Decisions</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            Personal loans se lekar credit cards, investments aur insurance tak —
            TimesMoney laata hai aapke liye expert-backed financial guidance,
            bilkul simple aur samajhne wali bhasha mein.
          </p>

          {/* Topic Pills — scrollable on mobile */}
          <div className="mt-4 sm:mt-6 flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-x-visible scrollbar-hide">
            {topics.map((topic) => (
              <span
                key={topic.label}
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal bg-brand-teal/5 border border-brand-teal/20 px-3 py-1.5 rounded-full whitespace-nowrap"
              >
                {topic.icon}
                {topic.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                <div className="h-44 sm:h-48 bg-gray-200" />
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        {!loading && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {blogs.map((blog) => (
                <a
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100 hover:border-brand-teal/20 flex flex-col"
                >
                  {/* Cover Image */}
                  <div className="h-44 sm:h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                    {blog.coverImage ? (
                      <img
                        src={
                          blog.coverImage.startsWith('http')
                            ? blog.coverImage
                            : `${BASE_URL}${blog.coverImage}`
                        }
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-teal/5 to-brand-teal/10">
                        <BookIcon />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">

                    {/* Category Badge */}
                    {blog.category && (
                      <span className="text-xs font-semibold text-brand-teal bg-brand-teal/5 px-2.5 py-1 rounded-full border border-brand-teal/20 w-fit">
                        {blog.category.name}
                      </span>
                    )}

                    {/* Title */}
                    <h2 className="mt-2.5 sm:mt-3 text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="mt-1.5 sm:mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed flex-1">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Tags */}
                    {blog.tags.length > 0 && (
                      <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta + Read More */}
                    <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex flex-col gap-0.5 text-xs text-gray-400">
                        <span className="flex items-center">
                          <UserIcon />
                          {blog.author ?? 'Admin'}
                        </span>
                        {blog.publishedAt && (
                          <span className="flex items-center">
                            <CalendarIcon />
                            {new Date(blog.publishedAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-brand-teal font-semibold text-xs">
                        Read more
                        <ArrowRightIcon />
                      </span>
                    </div>

                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="mt-8 sm:mt-10 flex justify-center items-center gap-1.5 sm:gap-2 flex-wrap">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 sm:px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand-teal hover:text-brand-teal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Prev
                </button>

                {[...Array(pagination.totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-sm font-medium transition-colors ${
                      page === i + 1
                        ? 'bg-brand-teal text-white shadow-md shadow-green-500/20'
                        : 'border border-gray-200 text-gray-600 hover:border-brand-teal hover:text-brand-teal'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                  disabled={page === pagination.totalPages}
                  className="px-3 sm:px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand-teal hover:text-brand-teal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}

            {/* No Blogs */}
            {blogs.length === 0 && (
              <div className="text-center py-16 sm:py-20">
                <EmptyIcon />
                <p className="mt-4 text-lg text-slate-400 font-semibold">No blogs found</p>
                <p className="text-sm text-slate-300 mt-1">No blogs have been published yet</p>
              </div>
            )}
          </>
        )}
      </div>
      <AdBanner page="BLOG" position="BOTTOM" className="mb-1" />
    </main>
  );
}
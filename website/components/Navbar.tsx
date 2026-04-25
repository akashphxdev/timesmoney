'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import Link from 'next/link';

// =====================
// TYPES
// =====================
interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  subCategories: SubCategory[];
}

interface Blog {
  id: string;
  title: string;
  slug: string;
}

// =====================
// STATIC TOOLS DATA
// =====================
const tools = [
  { name: 'EMI Calculator', slug: 'emi-calculator' },
  { name: 'SIP Calculator', slug: 'sip-calculator' },
  { name: 'Home Loan EMI Calculator', slug: 'home-loan-emi-calculator' },
  { name: 'FD Calculator', slug: 'fd-calculator' },
  { name: 'RD Calculator', slug: 'rd-calculator' },
  { name: 'PPF Calculator', slug: 'ppf-calculator' },
  { name: 'SSY Calculator', slug: 'ssy-calculator' },
  { name: 'NPS Calculator', slug: 'nps-calculator' },
  { name: 'Monthly Saving Calculator', slug: 'monthly-saving-calculator' },
  { name: 'Lumpsum Calculator', slug: 'lumpsum-calculator' },
  { name: 'Step-Up SIP Calculator', slug: 'step-up-sip-calculator' },
  { name: 'Car Loan EMI Calculator', slug: 'car-loan-emi-calculator' },
  { name: 'Personal Loan EMI Calculator', slug: 'personal-loan-emi-calculator' },
  { name: 'Compound Interest Calculator', slug: 'compound-interest-calculator' },
  { name: 'Income Tax Calculator', slug: 'income-tax-calculator' },
  { name: 'HRA Calculator', slug: 'hra-calculator' },
  { name: 'Gratuity Calculator', slug: 'gratuity-calculator' },
  { name: 'Retirement Calculator', slug: 'retirement-calculator' },
];

export const Navbar = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const res = await api.get('/web/header-data');
        setCategories(res.data.data.categories);
        setBlogs(res.data.data.blogs);
      } catch (err) {
        console.error('Header data fetch failed:', err);
      }
    };
    fetchHeaderData();
  }, []);

  return (
    <header className="sticky top-0 z-50">

      <style>{`
        @keyframes remind-phone {
          0%   { transform: rotate(0deg); }
          5%   { transform: rotate(-22deg); }
          10%  { transform: rotate(20deg); }
          15%  { transform: rotate(-16deg); }
          20%  { transform: rotate(12deg); }
          25%  { transform: rotate(-8deg); }
          30%  { transform: rotate(4deg); }
          35%  { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes remind-app {
          0%   { transform: translateY(0px); }
          5%   { transform: translateY(-6px); }
          11%  { transform: translateY(5px); }
          17%  { transform: translateY(-4px); }
          23%  { transform: translateY(2px); }
          28%  { transform: translateY(-1px); }
          33%  { transform: translateY(0px); }
          100% { transform: translateY(0px); }
        }
        .icon-phone {
          animation: remind-phone 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .icon-app {
          animation: remind-app 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .nav-dropdown {
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
        }
        .nav-item:hover .nav-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .nav-item:hover .nav-chevron {
          transform: rotate(180deg);
        }
        .nav-chevron {
          transition: transform 0.2s ease;
        }
      `}</style>

      {/* Topbar */}
      <div className="bg-gray-50 border-b border-gray-100 py-1 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-6">
          <a
            href="tel:1800-123-4567"
            className="flex items-center space-x-2 text-xs font-semibold text-slate-500 hover:text-brand-teal transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <svg className="w-3.5 h-3.5 text-brand-teal icon-phone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Talk to Expert</span>
          </a>
          <div className="h-3 w-[1px] bg-gray-300" />
          <a
            href="#"
            className="flex items-center space-x-2 text-xs font-semibold text-slate-500 hover:text-brand-teal transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <svg className="w-3.5 h-3.5 text-brand-teal icon-app" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Get The App</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-100 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-gray-900">T</span>
                <span className="text-yellow-600 font-black">₹</span>
                <span className="text-gray-900">imes</span>
                <span className="text-green-500">Money</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-1">

              {/* Dynamic Categories */}
              {categories.map((category) => (
                <div key={category.id} className="nav-item relative px-1 py-2">
                  <Link href={`/${category.slug}`}>
                    <button
                      className="flex items-center space-x-1 text-slate-700 hover:text-brand-teal font-medium text-[13px] transition-colors px-2.5 py-1.5 rounded-md hover:bg-teal-50"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span>{category.name}</span>
                      {category.subCategories.length > 0 && (
                        <svg className="w-3 h-3 nav-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  </Link>

                  {category.subCategories.length > 0 && (
                    <div className="nav-dropdown absolute left-0 top-full pt-2 z-[60]" style={{ minWidth: '260px' }}>
                      <div className="bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden">
                        <div className="px-4 pt-3 pb-2 border-b border-gray-100">
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
                            {category.name}
                          </p>
                        </div>
                        <div className="p-2">
                          {category.subCategories.map((sub) => (
                            <Link
                              key={sub.id}
                              href={`/${category.slug}/${sub.slug}`}
                              className="flex items-center px-3 py-2 text-sm text-slate-600 hover:bg-teal-50 hover:text-brand-teal transition-colors rounded-lg group"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-brand-teal mr-2.5 transition-colors flex-shrink-0" />
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Tools (Static) */}
              <div className="nav-item relative px-1 py-2">
                <Link href="/tools">
                  <button
                    className="flex items-center space-x-1 text-slate-700 hover:text-brand-teal font-medium text-[13px] transition-colors px-2.5 py-1.5 rounded-md hover:bg-teal-50"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span>Tools</span>
                    <svg className="w-3 h-3 nav-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </Link>

                <div className="nav-dropdown absolute left-0 top-full pt-2 z-[60]" style={{ minWidth: '280px' }}>
                  <div className="bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden">
                    <div className="px-4 pt-3 pb-2 border-b border-gray-100">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
                        Financial Tools
                      </p>
                    </div>
                    <div className="p-2 max-h-80 overflow-y-auto">
                      {tools.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={`/tools/${tool.slug}`}
                          className="flex items-center px-3 py-2 text-sm text-slate-600 hover:bg-teal-50 hover:text-brand-teal transition-colors rounded-lg group"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-brand-teal mr-2.5 transition-colors flex-shrink-0" />
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog */}
              <div className="nav-item relative px-1 py-2">
                <Link href="/blog">
                  <button
                    className="flex items-center space-x-1 text-slate-700 hover:text-brand-teal font-medium text-[13px] transition-colors px-2.5 py-1.5 rounded-md hover:bg-teal-50"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span>Blog</span>
                    {blogs.length > 0 && (
                      <svg className="w-3 h-3 nav-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </Link>

                {blogs.length > 0 && (
                  <div className="nav-dropdown absolute right-0 top-full pt-2 z-[60]" style={{ minWidth: '280px' }}>
                    <div className="bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden">
                      <div className="px-4 pt-3 pb-2 border-b border-gray-100">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
                          Latest Blogs
                        </p>
                      </div>
                      <div className="p-2">
                        {blogs.slice(0, 8).map((blog) => (
                          <Link
                            key={blog.id}
                            href={`/blog/${blog.slug}`}
                            className="flex items-center px-3 py-2 text-sm text-slate-600 hover:bg-teal-50 hover:text-brand-teal transition-colors rounded-lg group"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-brand-teal mr-2.5 transition-colors flex-shrink-0" />
                            <span className="truncate">{blog.title}</span>
                          </Link>
                        ))}
                        <div className="px-2 pt-1 pb-1 mt-1 border-t border-gray-100">
                          <Link
                            href="/blog"
                            className="block text-center text-xs font-semibold text-brand-teal hover:underline py-1.5"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            View All Blogs
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center ml-2 space-x-3">
                <a href="#" className="text-slate-700 hover:text-brand-teal font-medium text-[13px] transition-colors px-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Sign In
                </a>
                <button className="bg-brand-teal hover:bg-teal-600 text-white px-4 py-2 rounded-full font-bold text-[13px] transition-all shadow-md hover:shadow-lg active:scale-95" style={{ fontFamily: 'var(--font-body)' }}>
                  Sign Up
                </button>
              </div>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-slate-600 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">

            {categories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() => setOpenMobileSection(openMobileSection === category.id ? null : category.id)}
                  className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-brand-teal hover:bg-teal-50 rounded-lg transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span>{category.name}</span>
                  {category.subCategories.length > 0 && (
                    <svg className={`w-3.5 h-3.5 transition-transform ${openMobileSection === category.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {openMobileSection === category.id && category.subCategories.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-100 pl-3">
                    {category.subCategories.map((sub) => (
                      <Link key={sub.id} href={`/${category.slug}/${sub.slug}`} className="block px-2 py-2 text-sm text-slate-500 hover:text-brand-teal transition-colors" style={{ fontFamily: 'var(--font-body)' }} onClick={() => setMobileOpen(false)}>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Tools Mobile */}
            <div>
              <button
                onClick={() => setOpenMobileSection(openMobileSection === 'tools' ? null : 'tools')}
                className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-brand-teal hover:bg-teal-50 rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span>Tools</span>
                <svg className={`w-3.5 h-3.5 transition-transform ${openMobileSection === 'tools' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileSection === 'tools' && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-100 pl-3 max-h-60 overflow-y-auto">
                  {tools.map((tool) => (
                    <Link key={tool.slug} href={`/tools/${tool.slug}`} className="block px-2 py-2 text-sm text-slate-500 hover:text-brand-teal transition-colors" style={{ fontFamily: 'var(--font-body)' }} onClick={() => setMobileOpen(false)}>
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog Mobile */}
            <div>
              <button
                onClick={() => setOpenMobileSection(openMobileSection === 'blog' ? null : 'blog')}
                className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-brand-teal hover:bg-teal-50 rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span>Blog</span>
                {blogs.length > 0 && (
                  <svg className={`w-3.5 h-3.5 transition-transform ${openMobileSection === 'blog' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {openMobileSection === 'blog' && blogs.length > 0 && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-100 pl-3">
                  {blogs.slice(0, 6).map((blog) => (
                    <Link key={blog.id} href={`/blog/${blog.slug}`} className="block px-2 py-2 text-sm text-slate-500 hover:text-brand-teal transition-colors truncate" style={{ fontFamily: 'var(--font-body)' }} onClick={() => setMobileOpen(false)}>
                      {blog.title}
                    </Link>
                  ))}
                  <Link href="/blog" className="block px-2 py-2 text-sm font-semibold text-brand-teal" style={{ fontFamily: 'var(--font-body)' }} onClick={() => setMobileOpen(false)}>
                    View All Blogs
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Auth */}
            <div className="pt-2 border-t border-gray-100 flex items-center space-x-3 px-3">
              <a href="#" className="flex-1 text-center py-2 text-sm font-medium text-slate-700 border border-gray-200 rounded-lg hover:text-brand-teal hover:border-brand-teal transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                Sign In
              </a>
              <button className="flex-1 py-2 text-sm font-bold text-white bg-brand-teal rounded-lg hover:bg-teal-600 transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                Sign Up
              </button>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
};
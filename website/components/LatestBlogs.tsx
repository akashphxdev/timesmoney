'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  author: string | null;
  tags: string[];
  publishedAt: string | null;
  category: { id: string; name: string; slug: string } | null;
}

interface LatestBlogsProps {
  blogs: Blog[];
}

const formatDate = (dateStr: string | null): string => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
};

const readTime = (excerpt: string | null): string => {
  if (!excerpt) return '3 min read';
  const words = excerpt.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

const GAP = 32;
const AUTO_SLIDE_INTERVAL = 3000;

export const LatestBlogs = ({ blogs }: LatestBlogsProps) => {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const showSlider = blogs && blogs.length > 3;
  const maxSlide = showSlider ? blogs.length - 3 : 0;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const total = containerRef.current.offsetWidth;
        setCardWidth((total - GAP * 2) / 3);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    if (!showSlider) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, AUTO_SLIDE_INTERVAL);
  }, [maxSlide, showSlider, stopAuto]);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  if (!blogs || blogs.length === 0) return null;

  const goTo = (idx: number) => {
    stopAuto();
    setCurrent(Math.max(0, Math.min(idx, maxSlide)));
    startAuto();
  };

  const translateX = cardWidth ? current * (cardWidth + GAP) : 0;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-brand-teal text-xs font-black uppercase tracking-[0.2em] mb-3">Learn & Grow</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight">
              Knowledge <span className="text-brand-teal">Hub</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md">
              Expert financial advice to help you make smarter money decisions.
            </p>
          </div>
          <Link
            href="/blog"
            className="self-start md:self-auto bg-brand-teal text-white px-7 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-teal/80 transition-all duration-300 shadow-lg shadow-brand-teal/20"
          >
            Read Our Blog
          </Link>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group cursor-pointer flex-shrink-0"
                style={{ width: cardWidth ? `${cardWidth}px` : 'calc(33.333% - 22px)' }}
              >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-6 shadow-lg">
                  {blog.coverImage ? (
                    <img
                      src={`${BACKEND_URL}${blog.coverImage}`}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-300 text-4xl font-black">
                        {blog.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {blog.category && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-black text-slate-900 uppercase tracking-widest shadow">
                      {blog.category.name}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {formatDate(blog.publishedAt)}
                  </p>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                    {readTime(blog.excerpt)}
                  </p>
                </div>

                <h4 className="text-lg font-black text-slate-900 leading-snug underline decoration-transparent group-hover:decoration-brand-teal transition-all duration-300 mb-4 underline-offset-4">
                  {blog.title}
                </h4>

                {blog.excerpt && (
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-2 text-slate-800 font-black text-[11px] uppercase tracking-widest group-hover:gap-3 group-hover:text-brand-teal transition-all duration-300">
                  <span>Read Article</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {showSlider && (
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <span
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full cursor-pointer transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-2 bg-brand-teal'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
// Path: website/app/blog/[slug]/BlogDetail.tsx

'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImage: string | null;
  author: string | null;
  tags: string[];
  publishedAt: string | null;
  viewCount: number;
  seoTitle: string | null;
  seoDescription: string | null;
  category: { name: string; slug: string } | null;
  subCategory: { name: string; slug: string } | null;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '');

const fixContentImages = (html: string) => {
  return html
    .replace(/src="\/uploads\//g, `src="${BASE_URL}/uploads/`)
    .replace(/src="http:\/\/localhost:5000\/uploads\//g, `src="${BASE_URL}/uploads/`);
};

export default function BlogDetail({ blog }: { blog: Blog }) {
  const router = useRouter();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        const y = window.scrollY;
        const blurVal = Math.min((y / 300) * 8, 8);
        imgRef.current.style.filter = `blur(${blurVal}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <style>{blogStyles}</style>

      {/* Hero Cover Image */}
      {blog.coverImage && (
        <div className="hero-image-wrap">
          <img
            ref={imgRef}
            src={
              blog.coverImage.startsWith('http')
                ? blog.coverImage
                : `${BASE_URL}${blog.coverImage}`
            }
            alt={blog.title}
            className="hero-image"
            style={{ transition: 'filter 0.1s linear' }}
          />
        </div>
      )}

      {/* Article Container */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 md:px-10 pb-20 bg-[#FAFAF8] ${
          !blog.coverImage ? 'pt-20' : '-mt-12 pt-12'
        }`}
      >
        {/* Back Button */}
        <button onClick={() => router.push('/blog')} className="back-btn">
          ← All Blogs
        </button>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-2 mb-5 mt-5">
          {blog.category && (
            <span className="category-badge">{blog.category.name}</span>
          )}
          {blog.subCategory && (
            <span className="subcategory-badge">{blog.subCategory.name}</span>
          )}
          {formattedDate && (
            <span className="meta-date ml-auto">{formattedDate}</span>
          )}
        </div>

        {/* Title */}
        <h1 className="article-title">{blog.title}</h1>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="article-excerpt">{blog.excerpt}</p>
        )}

        {/* Author + Views Row */}
        <div className="author-row">
          <div className="author-avatar">
            {(blog.author || 'A')[0].toUpperCase()}
          </div>
          <div className="author-info">
            <span className="author-name">{blog.author ?? 'Admin'}</span>
            <span className="author-meta">{blog.viewCount.toLocaleString()} views</span>
          </div>
        </div>

        {/* Divider */}
        <div className="article-divider" />

        {/* HTML Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{
            __html: fixContentImages(blog.content),
          }}
        />

        {/* Tags — dynamic */}
        {blog.tags.length > 0 && (
          <div className="tags-section">
            <span className="tags-label">Topics</span>
            <div className="tags-wrap">
              {blog.tags.map((tag) => (
                <span key={tag} className="tag-pill">#{tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <button onClick={() => router.push('/blog')} className="cta-btn">
            ← Back to all articles
          </button>
        </div>
      </div>
    </main>
  );
}

// ===================== STYLES =====================
const blogStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@400;500;600&display=swap');

  :root {
    --bt: var(--color-brand-teal, theme(colors.brand-teal, #0d9488));
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: #6b7280;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 0;
    cursor: pointer;
    transition: color 0.2s;
  }
  .back-btn:hover { color: var(--bt); }

  .hero-image-wrap {
    position: relative;
    width: 100%;
    height: 520px;
    overflow: hidden;
    background: #1a1a1a;
  }
  @media (max-width: 768px) { .hero-image-wrap { height: 280px; } }
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    will-change: filter;
  }

  .category-badge {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--bt);
    background: var(--bt-bg);
    border: 1px solid var(--bt-border);
    padding: 4px 12px;
    border-radius: 100px;
  }
  .subcategory-badge {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #6b7280;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    padding: 4px 12px;
    border-radius: 100px;
  }
  .meta-date {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: #9ca3af;
  }

  .article-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: #111827;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0 0 20px;
  }

  .article-excerpt {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1.2rem;
    font-weight: 300;
    font-style: italic;
    color: #4b5563;
    line-height: 1.7;
    margin: 0 0 28px;
    padding-left: 16px;
    border-left: 3px solid var(--bt);
  }

  .author-row { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
  .author-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--bt); color: white;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 16px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .author-info { display: flex; flex-direction: column; gap: 2px; }
  .author-name { font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #111827; }
  .author-meta { font-family: 'DM Sans', sans-serif; font-size: 12px; color: #9ca3af; }

  .article-divider { height: 1px; background: linear-gradient(to right, #e5e7eb, transparent); margin: 0 0 40px; }

  .article-content {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1.125rem; font-weight: 400; color: #374151;
    line-height: 1.85; letter-spacing: 0.01em;
  }
  .article-content p { margin: 0 0 1.6em; }
  .article-content h1, .article-content h2,
  .article-content h3, .article-content h4 {
    font-family: 'Playfair Display', Georgia, serif;
    color: #111827; line-height: 1.3; margin: 2em 0 0.6em; font-weight: 700;
  }
  .article-content h2 { font-size: 1.7rem; }
  .article-content h3 { font-size: 1.35rem; }
  .article-content h4 { font-size: 1.1rem; }
  .article-content a { color: var(--bt); text-decoration: underline; text-underline-offset: 3px; }
  .article-content a:hover { opacity: 0.8; }
  .article-content strong { font-weight: 600; color: #111827; }
  .article-content blockquote {
    margin: 2em 0; padding: 20px 28px;
    background: var(--bt-subtle); border-left: 4px solid var(--bt);
    border-radius: 0 12px 12px 0; font-style: italic; color: var(--bt-dark);
  }
  .article-content img {
    display: block; max-width: 100%; width: auto; height: auto;
    max-height: 500px; margin: 2em auto; border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10); object-fit: contain;
  }
  .article-content ul, .article-content ol { margin: 0 0 1.6em 1.5em; padding: 0; }
  .article-content li { margin-bottom: 0.5em; }
  .article-content table { width: 100%; border-collapse: collapse; margin: 1.5em 0; }
  .article-content th, .article-content td {
    border: 1px solid #e5e7eb; padding: 10px 14px;
    font-size: 0.95rem; text-align: left;
  }
  .article-content th { background: #f9fafb; font-weight: 600; color: #111827; }

  .tags-section {
    margin-top: 48px; padding-top: 28px; border-top: 1px solid #e5e7eb;
    display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  }
  .tags-label {
    font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase; color: #9ca3af; margin-right: 4px;
  }
  .tags-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
  .tag-pill {
    font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500;
    color: #6b7280; background: #f3f4f6; border: 1px solid #e5e7eb;
    padding: 5px 12px; border-radius: 100px; transition: all 0.2s; cursor: pointer;
  }
  .tag-pill:hover { background: var(--bt-bg); color: var(--bt); border-color: var(--bt-border); }

  .bottom-cta { margin-top: 60px; text-align: center; }
  .cta-btn {
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
    color: var(--bt); background: transparent; border: 2px solid var(--bt);
    padding: 12px 28px; border-radius: 100px; cursor: pointer; transition: all 0.2s;
  }
  .cta-btn:hover { background: var(--bt); color: white; }

  .blog-skeleton { animation: pulse 1.5s ease-in-out infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  .skeleton-hero { width: 100%; height: 480px; background: #e5e7eb; }
  .skeleton-body { max-width: 1024px; margin: 0 auto; padding: 52px 40px; display: flex; flex-direction: column; gap: 14px; }
  .skeleton-line { height: 16px; background: #e5e7eb; border-radius: 4px; }
  .skeleton-line.tall { height: 40px; }
  .skeleton-line.w-full { width: 100%; }
  .skeleton-line.w-3\\/4 { width: 75%; }
  .skeleton-line.w-2\\/3 { width: 66%; }
  .skeleton-line.w-1\\/2 { width: 50%; }
  .skeleton-line.w-1\\/4 { width: 25%; }
  .skeleton-divider { height: 1px; background: #e5e7eb; margin: 10px 0; }
`;
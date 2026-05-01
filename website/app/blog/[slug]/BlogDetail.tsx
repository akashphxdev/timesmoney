'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AdBanner from '@/components/ads/AdBanner';

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

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  image: string | null;
  provider: string | null;
  interestRate: string | null;
  minAmount: string | null;
  maxAmount: string | null;
  badge: string | null;
  isBestSeller: boolean;
}
const BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '');

const fixContentImages = (html: string) => {
  return html
    .replace(/src="\/uploads\//g, `src="${BASE_URL}/uploads/`)
    .replace(/src="http:\/\/localhost:5000\/uploads\//g, `src="${BASE_URL}/uploads/`);
};

const resolveImage = (src: string) => {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  return `${BASE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="star-rating" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const img = product.image ? resolveImage(product.image) : null;

  return (
    <article
      className="pfy-card"
      onClick={() => router.push(`/products/${product.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && router.push(`/products/${product.slug}`)}
    >
      <div className="pfy-card-img-wrap">
        {img ? (
          <img src={img} alt={product.name} className="pfy-card-img" loading="lazy" />
        ) : (
          <div className="pfy-card-img-placeholder"><span>🛍️</span></div>
        )}
        {product.badge && (
          <span className="pfy-discount-badge">{product.badge}</span>
        )}
        <div className="pfy-best-tag">✦ Best For You</div>
      </div>

      <div className="pfy-card-body">
        <p className="pfy-card-name">{product.name}</p>

        {product.provider && (
          <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#6b7280', margin: 0 }}>
            {product.provider}
          </p>
        )}

        {product.interestRate && (
          <div className="pfy-card-price-row">
            <span className="pfy-price-current">{product.interestRate}</span>
            <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: '#9ca3af' }}>interest</span>
          </div>
        )}

        {product.minAmount && (
          <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#6b7280', margin: 0 }}>
            Min: {product.minAmount}
          </p>
        )}

        <button
          className="pfy-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/products/${product.slug}`);
          }}
        >
          View Product →
        </button>
      </div>
    </article>
  );
}

export default function BlogDetail({
  blog,
  relatedProducts = [],
}: {
  blog: Blog;
  relatedProducts?: Product[];
}) {
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
      <AdBanner page="BLOG_DETAIL" position="TOP" className="mb-8" />

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
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pb-16 md:pb-20 bg-[#FAFAF8] ${
          !blog.coverImage ? 'pt-16 md:pt-20' : '-mt-10 md:-mt-12 pt-10 md:pt-12'
        }`}
      >
        {/* Back Button */}
        <button onClick={() => router.push('/blog')} className="back-btn">
          ← All Blogs
        </button>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-2 mb-4 mt-4 md:mb-5 md:mt-5">
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

        {/* Tags */}
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

        <AdBanner page="BLOG_DETAIL" position="BOTTOM" className="mt-8" />

        {/* ── Best For You Products ── */}
        {relatedProducts.length > 0 && (
          <section className="pfy-section">
            <div className="pfy-header">
              <div className="pfy-header-left">
                <span className="pfy-eyebrow">✦ Curated For You</span>
                <h2 className="pfy-title">Best picks from <em>{blog.category?.name}</em></h2>
                <p className="pfy-subtitle">
                  Hand-picked products that go perfectly with what you just read.
                </p>
              </div>
            </div>

            <div className="pfy-grid">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="pfy-see-all-wrap">
              <button
                className="pfy-see-all-btn"
                onClick={() =>
                  router.push(
                    blog.category?.slug
                      ? `/products?category=${blog.category.slug}`
                      : '/products'
                  )
                }
              >
                See all {blog.category?.name} products →
              </button>
            </div>
          </section>
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

  /* ── Back Button ── */
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

  /* ── Hero Image ── */
  .hero-image-wrap {
    position: relative;
    width: 100%;
    height: 520px;
    overflow: hidden;
    background: #1a1a1a;
  }
  @media (max-width: 1024px) { .hero-image-wrap { height: 380px; } }
  @media (max-width: 768px)  { .hero-image-wrap { height: 240px; } }
  @media (max-width: 480px)  { .hero-image-wrap { height: 200px; } }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    will-change: filter;
  }

  /* ── Badges ── */
  .category-badge {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--bt);
    background: var(--bt-bg);
    border: 1px solid var(--bt-border);
    padding: 3px 10px;
    border-radius: 100px;
  }
  @media (min-width: 768px) { .category-badge { font-size: 11px; padding: 4px 12px; } }

  .subcategory-badge {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #6b7280;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    padding: 3px 10px;
    border-radius: 100px;
  }
  @media (min-width: 768px) { .subcategory-badge { font-size: 11px; padding: 4px 12px; } }

  .meta-date {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    color: #9ca3af;
  }
  @media (min-width: 768px) { .meta-date { font-size: 12px; } }

  /* ── Article Title ── */
  .article-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.5rem, 5vw, 3rem);
    font-weight: 800;
    color: #111827;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0 0 16px;
  }
  @media (max-width: 480px) {
    .article-title { font-size: 1.45rem; margin: 0 0 12px; }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .article-title { font-size: clamp(1.6rem, 4vw, 2.2rem); }
  }

  /* ── Excerpt ── */
  .article-excerpt {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    color: #4b5563;
    line-height: 1.7;
    margin: 0 0 22px;
    padding-left: 14px;
    border-left: 3px solid var(--bt);
  }
  @media (min-width: 768px) {
    .article-excerpt { font-size: 1.2rem; margin: 0 0 28px; padding-left: 16px; }
  }

  /* ── Author Row ── */
  .author-row { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
  @media (min-width: 768px) { .author-row { gap: 12px; margin-bottom: 28px; } }

  .author-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    background: var(--bt); color: white;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  @media (min-width: 768px) {
    .author-avatar { width: 40px; height: 40px; font-size: 16px; }
  }

  .author-info { display: flex; flex-direction: column; gap: 2px; }
  .author-name {
    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: #111827;
  }
  .author-meta {
    font-family: 'DM Sans', sans-serif; font-size: 11px; color: #9ca3af;
  }
  @media (min-width: 768px) {
    .author-name { font-size: 14px; }
    .author-meta { font-size: 12px; }
  }

  /* ── Divider ── */
  .article-divider {
    height: 1px;
    background: linear-gradient(to right, #e5e7eb, transparent);
    margin: 0 0 30px;
  }
  @media (min-width: 768px) { .article-divider { margin: 0 0 40px; } }

  /* ── Article Content ── */
  .article-content {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1rem;
    font-weight: 400;
    color: #374151;
    line-height: 1.8;
    letter-spacing: 0.01em;
  }
  @media (min-width: 768px) {
    .article-content { font-size: 1.125rem; line-height: 1.85; }
  }

  .article-content p { margin: 0 0 1.4em; }
  @media (min-width: 768px) { .article-content p { margin: 0 0 1.6em; } }

  /* Headings */
  .article-content h1,
  .article-content h2,
  .article-content h3,
  .article-content h4 {
    font-family: 'Playfair Display', Georgia, serif;
    color: #111827;
    line-height: 1.3;
    margin: 1.6em 0 0.5em;
    font-weight: 700;
  }
  @media (min-width: 768px) {
    .article-content h1,
    .article-content h2,
    .article-content h3,
    .article-content h4 { margin: 2em 0 0.6em; }
  }

  .article-content h2 { font-size: 1.35rem; }
  .article-content h3 { font-size: 1.15rem; }
  .article-content h4 { font-size: 1rem; }

  @media (min-width: 768px) {
    .article-content h2 { font-size: 1.7rem; }
    .article-content h3 { font-size: 1.35rem; }
    .article-content h4 { font-size: 1.1rem; }
  }

  .article-content a {
    color: var(--bt);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .article-content a:hover { opacity: 0.8; }
  .article-content strong { font-weight: 600; color: #111827; }

  .article-content blockquote {
    margin: 1.5em 0;
    padding: 16px 20px;
    background: var(--bt-subtle);
    border-left: 4px solid var(--bt);
    border-radius: 0 10px 10px 0;
    font-style: italic;
    color: var(--bt-dark);
    font-size: 0.97rem;
  }
  @media (min-width: 768px) {
    .article-content blockquote {
      margin: 2em 0;
      padding: 20px 28px;
      border-radius: 0 12px 12px 0;
      font-size: 1rem;
    }
  }

  .article-content img {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 320px;
    margin: 1.5em auto;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    object-fit: contain;
  }
  @media (min-width: 768px) {
    .article-content img {
      max-height: 500px;
      margin: 2em auto;
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    }
  }

  .article-content ul,
  .article-content ol {
    margin: 0 0 1.4em 0;
    padding-left: 1.4em;
  }
  @media (min-width: 768px) {
    .article-content ul,
    .article-content ol { margin: 0 0 1.6em 0; padding-left: 1.6em; }
  }

  .article-content ul { list-style-type: disc; }
  .article-content ol { list-style-type: decimal; }
  .article-content ul ul   { list-style-type: circle; }
  .article-content ul ul ul { list-style-type: square; }

  .article-content li {
    margin-bottom: 0.45em;
    padding-left: 0.2em;
    font-size: 1rem;
    line-height: 1.75;
  }
  @media (min-width: 768px) {
    .article-content li { margin-bottom: 0.5em; font-size: 1.1rem; }
  }

  .article-content li > ul,
  .article-content li > ol {
    margin-top: 0.4em;
    margin-bottom: 0.4em;
  }

  .article-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.2em 0;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 0.875rem;
  }
  @media (min-width: 768px) {
    .article-content table {
      display: table;
      margin: 1.5em 0;
      font-size: 0.95rem;
    }
  }
  .article-content th,
  .article-content td {
    border: 1px solid #e5e7eb;
    padding: 8px 10px;
    text-align: left;
    white-space: nowrap;
  }
  @media (min-width: 768px) {
    .article-content th,
    .article-content td { padding: 10px 14px; white-space: normal; }
  }
  .article-content th { background: #f9fafb; font-weight: 600; color: #111827; }

  .article-content pre {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 14px 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 0.82rem;
    line-height: 1.6;
    margin: 1.4em 0;
  }
  @media (min-width: 768px) {
    .article-content pre { padding: 18px 24px; font-size: 0.88rem; margin: 1.8em 0; }
  }
  .article-content code {
    font-size: 0.85em;
    background: #f3f4f6;
    padding: 2px 6px;
    border-radius: 4px;
    color: #d97706;
  }
  .article-content pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: inherit;
  }

  /* ── Tags ── */
  .tags-section {
    margin-top: 36px;
    padding-top: 22px;
    border-top: 1px solid #e5e7eb;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }
  @media (min-width: 768px) {
    .tags-section { margin-top: 48px; padding-top: 28px; align-items: center; }
  }

  .tags-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9ca3af;
    margin-right: 4px;
    margin-top: 4px;
  }
  @media (min-width: 768px) { .tags-label { font-size: 12px; } }

  .tags-wrap { display: flex; flex-wrap: wrap; gap: 7px; }
  @media (min-width: 768px) { .tags-wrap { gap: 8px; } }

  .tag-pill {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: #6b7280;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    padding: 4px 10px;
    border-radius: 100px;
    transition: all 0.2s;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .tag-pill { font-size: 12px; padding: 5px 12px; }
  }
  .tag-pill:hover { background: var(--bt-bg); color: var(--bt); border-color: var(--bt-border); }

  /* ══════════════════════════════════════════
     ── Best For You Section ──
  ══════════════════════════════════════════ */
  .pfy-section {
    margin-top: 56px;
    padding-top: 40px;
    border-top: 2px solid #f0fdf4;
    position: relative;
  }
  @media (min-width: 768px) { .pfy-section { margin-top: 72px; padding-top: 52px; } }

  /* Subtle teal glow strip behind section */
  .pfy-section::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 80px;
    height: 2px;
    background: var(--bt);
    border-radius: 2px;
  }

  .pfy-header { margin-bottom: 28px; }
  @media (min-width: 768px) { .pfy-header { margin-bottom: 36px; } }

  .pfy-eyebrow {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--bt);
    display: block;
    margin-bottom: 8px;
  }
  @media (min-width: 768px) { .pfy-eyebrow { font-size: 11px; } }

  .pfy-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: #111827;
    line-height: 1.25;
    margin: 0 0 8px;
  }
  .pfy-title em { font-style: italic; color: var(--bt); }
  @media (min-width: 768px) { .pfy-title { font-size: 2rem; margin: 0 0 10px; } }

  .pfy-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: #6b7280;
    margin: 0;
    line-height: 1.6;
  }
  @media (min-width: 768px) { .pfy-subtitle { font-size: 14px; } }

  /* Grid */
  .pfy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (min-width: 560px) { .pfy-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; } }
  @media (min-width: 900px) { .pfy-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; } }

  /* Card */
  .pfy-card {
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
    outline: none;
    display: flex;
    flex-direction: column;
  }
  .pfy-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(13, 148, 136, 0.12);
    border-color: rgba(13, 148, 136, 0.25);
  }
  .pfy-card:focus-visible {
    outline: 2px solid var(--bt);
    outline-offset: 2px;
  }

  .pfy-card-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #f9fafb;
    overflow: hidden;
  }

  .pfy-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .pfy-card:hover .pfy-card-img { transform: scale(1.04); }

  .pfy-card-img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    background: linear-gradient(135deg, #f0fdf4, #f9fafb);
  }

  /* Discount badge */
  .pfy-discount-badge {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #ef4444;
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 100px;
    letter-spacing: 0.03em;
    z-index: 2;
  }

  /* Best For You tag */
  .pfy-best-tag {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(13,148,136,0.92), rgba(13,148,136,0));
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 18px 10px 7px;
    opacity: 0;
    transition: opacity 0.22s ease;
  }
  .pfy-card:hover .pfy-best-tag { opacity: 1; }

  /* Card body */
  .pfy-card-body {
    padding: 10px 11px 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
  }
  @media (min-width: 768px) { .pfy-card-body { padding: 12px 14px 14px; gap: 6px; } }

  .pfy-card-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #111827;
    line-height: 1.4;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media (min-width: 768px) { .pfy-card-name { font-size: 13px; } }

  /* Stars */
  .pfy-card-rating {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .star-rating { display: inline-flex; gap: 1px; }
  .star { font-size: 11px; color: #d1d5db; }
  .star.filled { color: #f59e0b; }
  .pfy-review-count {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    color: #9ca3af;
  }

  /* Prices */
  .pfy-card-price-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-wrap: wrap;
  }
  .pfy-price-current {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #111827;
  }
  @media (min-width: 768px) { .pfy-price-current { font-size: 15px; } }
  .pfy-price-original {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    color: #9ca3af;
    text-decoration: line-through;
  }

  /* View button */
  .pfy-view-btn {
    margin-top: auto;
    padding-top: 4px;
    background: none;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: var(--bt);
    cursor: pointer;
    text-align: left;
    padding-left: 0;
    transition: opacity 0.15s;
  }
  .pfy-view-btn:hover { opacity: 0.7; }
  @media (min-width: 768px) { .pfy-view-btn { font-size: 12px; } }

  /* See All */
  .pfy-see-all-wrap {
    margin-top: 28px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) { .pfy-see-all-wrap { margin-top: 36px; } }

  .pfy-see-all-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--bt);
    background: transparent;
    border: 1.5px solid var(--bt);
    padding: 10px 24px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.01em;
  }
  @media (min-width: 768px) { .pfy-see-all-btn { font-size: 14px; padding: 12px 32px; } }
  .pfy-see-all-btn:hover {
    background: var(--bt);
    color: white;
    box-shadow: 0 4px 16px rgba(13,148,136,0.25);
  }

  /* ── Bottom CTA ── */
  .bottom-cta { margin-top: 48px; text-align: center; }
  @media (min-width: 768px) { .bottom-cta { margin-top: 60px; } }

  .cta-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--bt);
    background: transparent;
    border: 2px solid var(--bt);
    padding: 10px 22px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;
  }
  @media (min-width: 768px) { .cta-btn { font-size: 14px; padding: 12px 28px; } }
  .cta-btn:hover { background: var(--bt); color: white; }

  /* ── Skeleton ── */
  .blog-skeleton { animation: pulse 1.5s ease-in-out infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  .skeleton-hero { width: 100%; height: 240px; background: #e5e7eb; }
  @media (min-width: 768px) { .skeleton-hero { height: 480px; } }
  .skeleton-body {
    max-width: 1024px; margin: 0 auto;
    padding: 32px 16px;
    display: flex; flex-direction: column; gap: 12px;
  }
  @media (min-width: 768px) { .skeleton-body { padding: 52px 40px; gap: 14px; } }
  .skeleton-line { height: 14px; background: #e5e7eb; border-radius: 4px; }
  @media (min-width: 768px) { .skeleton-line { height: 16px; } }
  .skeleton-line.tall { height: 32px; }
  @media (min-width: 768px) { .skeleton-line.tall { height: 40px; } }
  .skeleton-line.w-full  { width: 100%; }
  .skeleton-line.w-3\\/4 { width: 75%; }
  .skeleton-line.w-2\\/3 { width: 66%; }
  .skeleton-line.w-1\\/2 { width: 50%; }
  .skeleton-line.w-1\\/4 { width: 25%; }
  .skeleton-divider { height: 1px; background: #e5e7eb; margin: 8px 0; }
`;
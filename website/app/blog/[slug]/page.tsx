// Path: website/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import BlogDetail from './BlogDetail';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yoursite.com';

async function getBlog(slug: string) {
  const res = await fetch(`${API_URL}/web/blogs/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch blog');
  const json = await res.json();
  return json.data;
}

async function getRelatedProducts(categorySlug: string) {
  try {
    const res = await fetch(
      `${API_URL}/public/products?category=${categorySlug}&limit=6`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch {
    return [];
  }
}

// ==================== SEO ====================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: blog.seoTitle ?? blog.title,
    description: blog.seoDescription ?? blog.excerpt ?? '',
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: blog.seoTitle ?? blog.title,
      description: blog.seoDescription ?? blog.excerpt ?? '',
      ...(blog.coverImage && {
        images: [{ url: `${API_URL.replace('/api', '')}${blog.coverImage}` }],
      }),
    },
  };
}

// ==================== PAGE ====================

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  // Fetch related products only if this blog has a category
  const relatedProducts = blog.category?.slug
    ? await getRelatedProducts(blog.category.slug)
    : [];

  return <BlogDetail blog={blog} relatedProducts={relatedProducts} />;
}
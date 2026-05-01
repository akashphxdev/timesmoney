// Path: website/app/blog/page.tsx

import type { Metadata } from 'next';
import BlogsPage from './BlogsPage';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

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

interface BlogsResponse {
  blogs: Blog[];
  pagination: Pagination;
}

// ✅ ISR fetch — server side, revalidate 60s
async function getBlogs(): Promise<BlogsResponse> {
  try {
    const res = await fetch(`${API_URL}/web/blogs?page=1&limit=9`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('fetch failed');
    const json = await res.json();
    return json.data;
  } catch {
    return { blogs: [], pagination: { total: 0, page: 1, limit: 9, totalPages: 1 } };
  }
}

// ✅ Metadata — static (blog list page ke liye theek hai)
export const metadata: Metadata = {
  title: 'Blog | Smart Money, Smarter Decisions | TimesMoney',
  description:
    'From personal loans to credit cards, investments and insurance — TimesMoney brings you expert-backed financial guidance in simple, easy-to-understand language.',
  keywords: [
    'personal loans',
    'credit cards',
    'investments',
    'insurance',
    'savings',
    'tax planning',
    'financial tips',
    'TimesMoney blog',
  ],
  openGraph: {
    title: 'Blog | Smart Money, Smarter Decisions | TimesMoney',
    description:
      'Expert-backed financial guidance on loans, credit cards, investments, insurance and more — only on TimesMoney.',
    url: `${SITE_URL}/blog`,
    siteName: 'TimesMoney',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'TimesMoney Blog' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | TimesMoney',
    description: 'Smart financial guidance — loans, credit cards, investments & more.',
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

// ✅ Page — server component, ISR data pass karta hai BlogsPage ko
export default async function Page() {
  const { blogs: initialBlogs, pagination: initialPagination } = await getBlogs();

  return (
    <BlogsPage
      initialBlogs={initialBlogs}
      initialPagination={initialPagination}
    />
  );
}
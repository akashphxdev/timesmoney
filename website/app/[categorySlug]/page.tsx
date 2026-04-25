// Path: website/app/[categorySlug]/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPageUI from './CategoryPage';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  subCategories: SubCategory[];
}

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  image: string | null;
  provider: string | null;
  providerLogo: string | null;
  interestRate: string | null;
  minAmount: string | null;
  maxAmount: string | null;
  tenure: string | null;
  featured: boolean;
  isBestSeller: boolean;
  badge: string | null;
  category: { id: string; name: string; slug: string } | null;
  subCategory: { id: string; name: string; slug: string } | null;
}

async function getCategory(slug: string): Promise<Category | null> {
  const res = await fetch(`${API_URL}/public/categories/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch category');
  const json = await res.json();
  return json.data;
}

async function getProducts(categorySlug: string): Promise<Product[]> {
  const res = await fetch(`${API_URL}/public/products?category=${categorySlug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data;
}

// ✅ Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;

  const [category, products] = await Promise.all([
    getCategory(categorySlug),
    getProducts(categorySlug),
  ]);

  if (!category) {
    return {
      title: 'Not Found',
      description: 'This page could not be found.',
    };
  }

  const title = `${category.name} Products | TimesMoney`;
  const description = `Explore all ${category.name.toLowerCase()} products. Compare ${products.length} options on interest rates, amounts, tenure, and more — only on TimesMoney.`;
  const ogImage = category.imageUrl ?? products.find((p) => p.image)?.image ?? '/og-default.png';

  return {
    title,
    description,
    keywords: [
      category.name,
      `${category.name} in India`,
      `best ${category.name.toLowerCase()}`,
      `compare ${category.name.toLowerCase()}`,
      'TimesMoney',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${categorySlug}`,
      siteName: 'TimesMoney',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${category.name} - TimesMoney` }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${SITE_URL}/${categorySlug}`,
    },
  };
}

// ✅ Page — UI alag file se import
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const [category, products] = await Promise.all([
    getCategory(categorySlug),
    getProducts(categorySlug),
  ]);

  if (!category) notFound();

  return (
    <CategoryPageUI
      category={category}
      products={products}
      categorySlug={categorySlug}
    />
  );
}
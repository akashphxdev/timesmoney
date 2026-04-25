// Path: website/app/[categorySlug]/[subCategorySlug]/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SubCategoryPageUI from './Subcategorypage';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  category: { id: string; name: string; slug: string };
}

interface CategoryWithSubs {
  id: string;
  name: string;
  slug: string;
  subCategories: { id: string; name: string; slug: string }[];
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

async function getSubCategory(slug: string): Promise<SubCategory | null> {
  const res = await fetch(`${API_URL}/public/sub-categories/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch sub-category');
  const json = await res.json();
  return json.data;
}

async function getCategoryWithSubs(categorySlug: string): Promise<CategoryWithSubs | null> {
  const res = await fetch(`${API_URL}/public/categories/${categorySlug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.data;
}

async function getProducts(categorySlug: string, subCategorySlug: string): Promise<Product[]> {
  const res = await fetch(
    `${API_URL}/public/products?category=${categorySlug}&subCategory=${subCategorySlug}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  const json = await res.json();
  return json.data;
}

// ✅ Metadata — page.tsx mein hi
export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; subCategorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug, subCategorySlug } = await params;

  const [subCategory, products] = await Promise.all([
    getSubCategory(subCategorySlug),
    getProducts(categorySlug, subCategorySlug),
  ]);

  if (!subCategory) {
    return {
      title: 'Not Found',
      description: 'This page could not be found.',
    };
  }

  const categoryName = subCategory.category.name;
  const subCategoryName = subCategory.name;
  const title = `${subCategoryName} Products | ${categoryName} | TimesMoney`;
  const description = `Explore the best ${subCategoryName.toLowerCase()} options under ${categoryName.toLowerCase()}. Compare ${products.length} products on interest rates, amounts, tenure, and more — only on TimesMoney.`;
  const ogImage = products.find((p) => p.image)?.image ?? '/og-default.png';

  return {
    title,
    description,
    keywords: [
      subCategoryName,
      categoryName,
      `${subCategoryName} in India`,
      `best ${subCategoryName.toLowerCase()}`,
      `compare ${subCategoryName.toLowerCase()}`,
      'TimesMoney',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${categorySlug}/${subCategorySlug}`,
      siteName: 'TimesMoney',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${subCategoryName} - ${categoryName}` }],
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
      canonical: `${SITE_URL}/${categorySlug}/${subCategorySlug}`,
    },
  };
}

// ✅ Page — UI alag file se import
export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string; subCategorySlug: string }>;
}) {
  const { categorySlug, subCategorySlug } = await params;

  const [subCategory, products, category] = await Promise.all([
    getSubCategory(subCategorySlug),
    getProducts(categorySlug, subCategorySlug),
    getCategoryWithSubs(categorySlug),
  ]);

  if (!subCategory) notFound();

  return (
    <SubCategoryPageUI
      subCategory={subCategory}
      category={category}
      products={products}
      categorySlug={categorySlug}
      subCategorySlug={subCategorySlug}
    />
  );
}
// Path: website/app/products/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductsPageUI from './ProductsPage';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

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

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/public/products`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  const json = await res.json();
  return json.data;
}

// ✅ Metadata
export const metadata: Metadata = {
  title: 'All Financial Products | TimesMoney',
  description:
    'Compare home loans, personal loans, business finance, credit cards, and insurance plans — all in one place. Find the right financial product and apply with confidence on TimesMoney.',
  keywords: [
    'financial products',
    'home loan',
    'personal loan',
    'business loan',
    'credit card',
    'insurance',
    'compare loans',
    'TimesMoney',
  ],
  openGraph: {
    title: 'All Financial Products | TimesMoney',
    description:
      'Compare home loans, personal loans, credit cards, and insurance plans — all in one place on TimesMoney.',
    url: `${SITE_URL}/products`,
    siteName: 'TimesMoney',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'TimesMoney Products' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Financial Products | TimesMoney',
    description: 'Compare loans, credit cards, and insurance — find the right product on TimesMoney.',
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
};

// ✅ Page — UI imported from separate file
export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsPageUI products={products} />;
}
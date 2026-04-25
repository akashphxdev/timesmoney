// Path: website/app/products/[slug]/page.tsx

import { notFound } from 'next/navigation';
import ProductDetail from './ProductDetailPage';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

async function getProduct(slug: string) {
  const res = await fetch(`${API_URL}/public/products/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch product');
  const json = await res.json();
  return json.data;
}

// ==================== SEO ====================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.seoTitle ?? `${product.name} | TimesMoney`,
    description: product.seoDescription ?? product.shortDescription ?? '',
    alternates: {
      canonical: `${SITE_URL}/products/${slug}`,
    },
  };
}

// ==================== PAGE ====================

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}



// Path: website/app/apply/page.tsx

import ApplyWizard from './ApplyWizard';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://timesmoney.in';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  subCategories: SubCategory[];
}

interface RawSub {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string | null;
}

interface RawCat {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string | null;
  subCategories?: RawSub[];
}

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_URL}/public/categories`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();

    const cats = json?.data;
    if (!Array.isArray(cats)) return [];

    return (cats as RawCat[]).map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      imageUrl: cat.imageUrl ?? null,
      subCategories: (cat.subCategories ?? []).map((sub) => ({
        id: sub.id,
        name: sub.name,
        slug: sub.slug,
        imageUrl: sub.imageUrl ?? null,
      })),
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const categories = await getCategories();
  const categoryNames = categories.map((c) => c.name);

  const categoryList =
    categoryNames.length > 0
      ? categoryNames.join(', ')
      : 'loans, credit cards, investments and more';

  const description = `Find out which financial products you are eligible for — ${categoryList}. Get instant approval chances in minutes.`;

  return {
    title: 'Check Eligibility | TimesMoney',
    description,
    keywords: [
      ...categoryNames.map((name) => `${name} eligibility`),
      'financial products India',
      'TimesMoney',
    ],
    alternates: {
      canonical: `${SITE_URL}/apply`,
    },
    openGraph: {
      title: 'Check Eligibility | TimesMoney',
      description,
      url: `${SITE_URL}/apply`,
      siteName: 'TimesMoney',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Check Eligibility | TimesMoney',
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; subcategory?: string }>;
}) {
  const params = await searchParams;
  const categories = await getCategories();

  return (
    <ApplyWizard
      categories={categories}
      initialCategory={params.category ?? null}
      initialSubCategory={params.subcategory ?? null}
    />
  );
}
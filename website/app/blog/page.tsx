// Path: website/app/blog/page.tsx

import type { Metadata } from 'next';
import BlogsPage from './BlogsPage';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

// ✅ Metadata — server side
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

// ✅ Page — UI alag file se import
export default function Page() {
  return <BlogsPage />;
}
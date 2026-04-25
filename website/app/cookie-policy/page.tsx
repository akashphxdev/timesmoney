// app/cookie-policy/page.tsx

import type { Metadata } from 'next';
import CookiePolicyPage from './CookiePolicyPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | Times Money',
  description:
    'Learn how Times Money uses cookies and similar tracking technologies to improve your browsing experience, analyse site traffic, and personalise content.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'Times Money', 'privacy'],
  alternates: {
    canonical: 'https://timesmoney.in/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Times Money',
    description:
      'Learn how Times Money uses cookies and similar tracking technologies.',
    url: 'https://timesmoney.in/cookie-policy',
    siteName: 'Times Money',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CookiePolicyPage />;
}
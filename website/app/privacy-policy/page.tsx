// app/privacy-policy/page.tsx

import type { Metadata } from 'next';
import PrivacyPolicyPage from './PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Times Money',
  description:
    'Read the Times Money Privacy Policy to understand how we collect, use, and protect your personal information when you use our financial comparison platform.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'Times Money', 'privacy'],
  alternates: {
    canonical: 'https://timesmoney.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Times Money',
    description:
      'Learn how Times Money collects, uses, and protects your personal information.',
    url: 'https://timesmoney.in/privacy-policy',
    siteName: 'Times Money',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
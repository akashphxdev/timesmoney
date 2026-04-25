// app/disclaimer/page.tsx

import type { Metadata } from 'next';
import DisclaimerPage from './DisclaimerPage';

export const metadata: Metadata = {
  title: 'Disclaimer | Times Money',
  description:
    'Read the Times Money disclaimer. Information on our platform is for general informational purposes only and should not be construed as professional financial advice.',
  keywords: ['disclaimer', 'financial advice', 'Times Money', 'legal', 'terms'],
  alternates: {
    canonical: 'https://timesmoney.in/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | Times Money',
    description:
      'Information on Times Money is for general informational purposes only and not financial advice.',
    url: 'https://timesmoney.in/disclaimer',
    siteName: 'Times Money',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DisclaimerPage />;
}
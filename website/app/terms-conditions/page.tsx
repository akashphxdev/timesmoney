// app/terms-and-conditions/page.tsx

import type { Metadata } from 'next';
import TermsConditionsPage from './TermsConditionsPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Times Money',
  description:
    'Read the Times Money Terms and Conditions. By accessing our platform, you agree to be bound by these terms governing the use of our financial comparison services.',
  keywords: ['terms and conditions', 'terms of service', 'legal', 'Times Money', 'user agreement'],
  alternates: {
    canonical: 'https://timesmoney.in/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Times Money',
    description:
      'Read the terms governing your use of the Times Money financial comparison platform.',
    url: 'https://timesmoney.in/terms-and-conditions',
    siteName: 'Times Money',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TermsConditionsPage />;
}
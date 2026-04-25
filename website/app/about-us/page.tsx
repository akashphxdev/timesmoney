// app/about-us/page.tsx

import AboutUI from './About' // apna path change karo

export const metadata = {
  title: 'About Us',
  description: 'TimesMoney is a trusted financial platform helping Indians compare loans, insurance, credit cards, and investments — plus smart calculators to plan your finances better.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us | TimesMoney',
    description: 'TimesMoney is a trusted financial platform helping Indians compare loans, insurance, credit cards, and investments — plus smart calculators to plan your finances better.',
    url: '/about-us',
  },
}

export default function AboutPage() {
  return <AboutUI />
}
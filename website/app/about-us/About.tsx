'use client';

// app/about-us/page.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Search, Sun, Shield, Mail, Phone } from 'lucide-react';
import api from '@/lib/api';

interface Settings {
  callingNo: string;
  supportEmail: string;
}

const stats = [
  { value: '10M+', label: 'Monthly Users' },
  { value: '50+', label: 'Bank Partners' },
  { value: '500+', label: 'Products Listed' },
  { value: '4.8★', label: 'User Rating' },
];

const values = [
  {
    icon: <Search size={22} />,
    title: 'Transparency',
    desc: 'We present information clearly and honestly, with no hidden agendas.',
  },
  {
    icon: <Sun size={22} />,
    title: 'Independence',
    desc: 'Our comparisons are unbiased and based purely on product merit.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Trust',
    desc: 'We handle your data responsibly and never compromise your privacy.',
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-[15px] font-semibold text-slate-800 border-l-[3px] border-brand-teal pl-3">
        {title}
      </h2>
      <div className="pl-4">{children}</div>
    </div>
  );
}

export default function AboutUsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    api.get('/public/settings')
      .then(res => setSettings(res.data.data))
      .catch(err => console.error('Settings fetch failed:', err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-brand-navy text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">About Us</h1>
          <p className="text-slate-400 text-sm">Empowering Indians to make smarter financial decisions</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">

        {/* Who We Are */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-3 text-[15px] leading-relaxed text-slate-600">
          <h2 className="text-xl font-bold text-slate-800">Who We Are</h2>
          <p>
            <strong className="text-slate-800">Times Money</strong> is India's trusted financial
            comparison platform, helping millions of users discover, compare, and apply for the best
            financial products — from personal loans, home loans, and car loans to credit cards,
            life &amp; health insurance, and investment options.
          </p>
          <p>
            We also offer a suite of smart calculators — EMI, SIP, FD, loan eligibility, and more —
            so you can plan your finances with confidence, without jargon or confusion.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <p className="text-3xl font-bold text-brand-teal">{s.value}</p>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-8 text-[15px] leading-relaxed text-slate-600">

          <Section title="Our Mission">
            <p>
              To democratise access to financial knowledge in India. Whether you're a first-time
              credit card applicant or a seasoned investor, we give you the tools and information
              to make the best financial choices for your life.
            </p>
          </Section>

          <Section title="What We Offer">
            <p>Times Money provides a comprehensive suite of financial tools and resources:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Compare personal loans, home loans, and car loans from top banks</li>
              <li>Life &amp; health insurance plans side-by-side</li>
              <li>Credit card comparisons by rewards, cashback, and eligibility</li>
              <li>Investment products — FDs, mutual funds, and more</li>
              <li>Free calculators — EMI, SIP, FD, loan eligibility, and more</li>
              <li>Expert-written guides and financial literacy content</li>
              <li>Real-time interest rates and product updates</li>
            </ul>
          </Section>

          <Section title="Our Values">
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {values.map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <div className="text-brand-teal mb-2">{v.icon}</div>
                  <p className="font-semibold text-slate-800 text-sm">{v.title}</p>
                  <p className="text-slate-500 text-sm mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Our Independence">
            <p>
              Times Money is an independent platform. While we may earn referral fees when users
              apply for products through our links, this never influences the objectivity of our
              comparisons or editorial content. Our recommendations are driven by data and user
              benefit — not commercial relationships.
            </p>
            <p className="mt-2">
              For more information, see our{' '}
              <Link href="/disclaimer" className="text-brand-teal underline hover:opacity-80">
                Disclaimer
              </Link>.
            </p>
          </Section>

          <Section title="Part of the Times Group">
            <p>
              Times Money is backed by the legacy and credibility of the Times Group — one of
              India's most trusted media conglomerates. We bring the same standards of trust and
              accuracy to personal finance.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>We'd love to hear from you — whether it's a query, feedback, or a partnership enquiry.</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm space-y-2">
              <p className="font-semibold text-slate-700">Times Money</p>

              {settings?.supportEmail ? (
                <a
                  href={`mailto:${settings.supportEmail}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors"
                >
                  <Mail size={14} />
                  {settings.supportEmail}
                </a>
              ) : (
                <p className="flex items-center gap-2 text-slate-400 animate-pulse">
                  <Mail size={14} /> Loading email...
                </p>
              )}

              {settings?.callingNo ? (
                <a
                  href={`tel:${settings.callingNo}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors"
                >
                  <Phone size={14} />
                  {settings.callingNo}
                </a>
              ) : (
                <p className="flex items-center gap-2 text-slate-400 animate-pulse">
                  <Phone size={14} /> Loading phone...
                </p>
              )}

              <p className="text-slate-400 text-xs mt-1">Mon – Sat, 9:00 AM – 6:00 PM IST</p>
            </div>
          </Section>

        </div>
      </section>
    </main>
  );
}
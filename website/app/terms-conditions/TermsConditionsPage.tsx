'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '@/lib/api';

interface Settings {
  callingNo: string;
  supportEmail: string;
}

export default function TermsConditionsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    api.get('/public/settings')
      .then(res => setSettings(res.data.data))
      .catch(err => console.error('Settings fetch failed:', err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Terms & Conditions</h1>
          <p className="text-slate-400 text-sm">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10 text-slate-600 text-[15px] leading-relaxed">

          <div>
            <p>
              Please read these Terms and Conditions carefully before using the{' '}
              <strong className="text-slate-800">Times Money</strong> website and services. By accessing
              or using our platform, you agree to be bound by these terms. If you do not agree,
              please do not use our services.
            </p>
          </div>

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing timesmoney.in, you confirm that you are at least 18 years of age, have
              read and understood these Terms and Conditions, and agree to be legally bound by them.
            </p>
          </Section>

          <Section title="2. Use of Services">
            <p>You agree to use Times Money only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use the platform in any way that violates applicable laws or regulations</li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Attempt to gain unauthorized access to any part of the platform</li>
              <li>Use automated tools to scrape or collect data from our website</li>
              <li>Interfere with the security or functionality of the platform</li>
            </ul>
          </Section>

          <Section title="3. Account Registration">
            <p>To access certain features, you may need to create an account. You are responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
          </Section>

          <Section title="4. Financial Products & Applications">
            <p>Times Money is a comparison platform. When you apply for a financial product through our platform:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your application is subject to the terms of the respective bank or institution</li>
              <li>Approval is at the sole discretion of the lender</li>
              <li>Times Money does not guarantee approval of any application</li>
              <li>Final product terms may differ from what is displayed on our platform</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              All content on Times Money — including text, graphics, logos, icons, and software —
              is the property of Times Money or its content suppliers and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create derivative
              works without our express written consent.
            </p>
          </Section>

          <Section title="6. Privacy">
            <p>
              Your use of Times Money is also governed by our{' '}
              <Link href="/privacy-policy" className="text-brand-teal hover:underline font-medium">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>
              Times Money is provided on an "as is" and "as available" basis without any warranties
              of any kind, either express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Times Money shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages resulting from
              your use of or inability to use our services.
            </p>
          </Section>

          <Section title="9. Indemnification">
            <p>
              You agree to indemnify and hold harmless Times Money, its affiliates, officers,
              directors, and employees from any claims, damages, or expenses arising from your
              use of the platform or violation of these Terms.
            </p>
          </Section>

          <Section title="10. Modifications to Terms">
            <p>
              Times Money reserves the right to modify these Terms at any time. Changes will be
              effective immediately upon posting. Your continued use of the platform after any
              changes constitutes your acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes arising under these Terms shall be subject to the exclusive jurisdiction
              of the courts located in Mumbai, Maharashtra.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>For any questions about these Terms and Conditions, please contact us:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm space-y-1">
              <p className="font-semibold text-slate-700">Times Money</p>

              {settings?.supportEmail ? (
                <p>
                  Email:{' '}
                  <a href={`mailto:${settings.supportEmail}`} className="text-brand-teal hover:underline">
                    {settings.supportEmail}
                  </a>
                </p>
              ) : (
                <p className="text-slate-400 animate-pulse">Loading email...</p>
              )}

              {settings?.callingNo ? (
                <p>
                  Phone:{' '}
                  <a href={`tel:${settings.callingNo}`} className="text-brand-teal hover:underline">
                    {settings.callingNo}
                  </a>
                </p>
              ) : (
                <p className="text-slate-400 animate-pulse">Loading phone...</p>
              )}
            </div>
          </Section>

        </div>
      </section>

    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-brand-teal pl-4">{title}</h2>
      <div className="pl-4">{children}</div>
    </div>
  );
}
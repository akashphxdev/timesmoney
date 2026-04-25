import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10 text-slate-600 text-[15px] leading-relaxed">

          <div className="space-y-3">
            <p>
              Welcome to <strong className="text-slate-800">Times Money</strong>. We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, and share
              information about you when you use our services.
            </p>
          </div>

          <Section title="1. Information We Collect">
            <p>We collect information you provide directly to us, such as when you:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Create an account or fill out a form</li>
              <li>Apply for a loan, credit card, or investment product</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletter or updates</li>
            </ul>
            <p className="mt-3">This may include your name, email address, phone number, date of birth, PAN number, and financial details.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Process your applications and requests</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Send you transactional and promotional communications</li>
              <li>Detect and prevent fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Banks and financial institutions for product applications</li>
              <li>Service providers who assist us in operating our platform</li>
              <li>Regulatory and law enforcement agencies when required by law</li>
            </ul>
          </Section>

          <Section title="4. Data Security">
            <p>
              We implement industry-standard security measures including SSL encryption, secure servers,
              and access controls to protect your personal data from unauthorized access, alteration,
              or disclosure.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our platform.
              You can control cookie settings through your browser preferences. Please refer to our
              Cookie Policy for more details.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </Section>

          <Section title="7. Third-Party Links">
            <p>
              Our platform may contain links to third-party websites. We are not responsible for the
              privacy practices of those sites and encourage you to review their privacy policies.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant
              changes by posting the new policy on this page with an updated date.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm">
              <p className="font-semibold text-slate-700">Times Money</p>
              <p>Email: privacy@timesmoney.com</p>
              <p>Phone: 1800-123-4567</p>
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
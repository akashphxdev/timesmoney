import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Disclaimer</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Disclaimer</h1>
          <p className="text-slate-400 text-sm">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10 text-slate-600 text-[15px] leading-relaxed">

          {/* Warning Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 flex gap-4">
            <div className="text-yellow-500 mt-0.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-yellow-800 text-sm">
              The information provided on Times Money is for general informational purposes only and
              should not be construed as professional financial advice.
            </p>
          </div>

          <div>
            <p>
              Times Money (<strong className="text-slate-800">timesmoney.com</strong>) is a financial
              comparison and information platform. By accessing and using our website, you accept and
              agree to be bound by the terms of this Disclaimer.
            </p>
          </div>

          <Section title="1. No Financial Advice">
            <p>
              The content published on Times Money — including articles, calculators, comparisons,
              and product listings — is for informational purposes only. It does not constitute
              financial, investment, legal, or tax advice. You should always consult a qualified
              financial advisor before making any financial decisions.
            </p>
          </Section>

          <Section title="2. Accuracy of Information">
            <p>
              While we strive to keep all information accurate and up-to-date, Times Money makes no
              warranties or representations of any kind regarding the completeness, accuracy, or
              reliability of any information on this platform. Interest rates, product features,
              and eligibility criteria are subject to change by the respective banks and financial
              institutions without notice.
            </p>
          </Section>

          <Section title="3. Third-Party Products">
            <p>
              Times Money is an independent comparison platform. We do not own, operate, or control
              any of the financial products listed on our website. All product details, terms, and
              conditions are governed by the respective issuing banks or financial institutions.
            </p>
          </Section>

          <Section title="4. Affiliate Relationships">
            <p>
              Times Money may earn a commission or referral fee when users apply for or purchase
              financial products through links on our platform. This does not affect the objectivity
              of our comparisons or recommendations.
            </p>
          </Section>

          <Section title="5. Calculators & Tools">
            <p>
              The financial calculators and tools provided on our platform are for illustrative
              purposes only. Results are estimates and may vary based on actual product terms,
              market conditions, and individual eligibility. Do not rely solely on calculator
              outputs for financial planning.
            </p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Times Money shall not be liable for any
              direct, indirect, incidental, or consequential damages arising from your use of
              or reliance on information provided on this platform.
            </p>
          </Section>

          <Section title="7. External Links">
            <p>
              Our website may contain links to external websites. Times Money is not responsible
              for the content, accuracy, or practices of any third-party websites.
            </p>
          </Section>

          <Section title="8. Contact">
            <p>For any questions regarding this Disclaimer, please reach out to us:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm">
              <p className="font-semibold text-slate-700">Times Money</p>
              <p>Email: legal@timesmoney.com</p>
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
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Cookie Policy</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Cookie Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10 text-slate-600 text-[15px] leading-relaxed">

          {/* Info Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex gap-4">
            <div className="text-blue-500 mt-0.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-blue-800 text-sm">
              This Cookie Policy explains how Times Money uses cookies and similar tracking technologies
              when you visit our platform. By continuing to use our site, you consent to our use of cookies
              as described in this policy.
            </p>
          </div>

          <div>
            <p>
              <strong className="text-slate-800">Times Money</strong> uses cookies and similar technologies
              to improve your browsing experience, analyse site traffic, and personalise content. This policy
              explains what cookies are, how we use them, and how you can manage your preferences.
            </p>
          </div>

          <Section title="1. What Are Cookies?">
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet)
              when you visit a website. They allow the website to recognise your device and remember certain
              information about your visit, such as your preferences and actions.
            </p>
            <p className="mt-3">
              Cookies are widely used to make websites work more efficiently and to provide information to
              the site owners. They do not contain personally identifiable information on their own, but
              may be linked to personal data we already hold about you.
            </p>
          </Section>

          <Section title="2. Types of Cookies We Use">
            <p>We use the following categories of cookies on our platform:</p>

            <div className="mt-4 space-y-4">
              <CookieType
                label="Strictly Necessary Cookies"
                color="bg-red-50 border-red-200 text-red-700"
                description="These cookies are essential for our website to function correctly. They enable core features such as security, session management, and access to secure areas. You cannot opt out of these cookies."
              />
              <CookieType
                label="Performance & Analytics Cookies"
                color="bg-purple-50 border-purple-200 text-purple-700"
                description="These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use tools like Google Analytics to measure traffic, page visits, and user behaviour."
              />
              <CookieType
                label="Functional Cookies"
                color="bg-green-50 border-green-200 text-green-700"
                description="These cookies allow our website to remember choices you make (such as your language or region) and provide enhanced, more personal features. They may also be used to remember changes you've made to text size and fonts."
              />
              <CookieType
                label="Targeting & Advertising Cookies"
                color="bg-orange-50 border-orange-200 text-orange-700"
                description="These cookies are used to deliver advertisements more relevant to you and your interests. They also help limit the number of times you see an ad and measure the effectiveness of advertising campaigns."
              />
            </div>
          </Section>

          <Section title="3. Third-Party Cookies">
            <p>
              In addition to our own cookies, we may also use cookies from trusted third-party services.
              These third parties may include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Google Analytics — for website traffic analysis</li>
              <li>Google Ads — for advertising and remarketing</li>
              <li>Facebook Pixel — for social media advertising</li>
              <li>Hotjar — for heatmaps and user behaviour insights</li>
              <li>Partner banks and financial institutions — for product tracking and referral attribution</li>
            </ul>
            <p className="mt-3">
              These third parties have their own privacy and cookie policies. We encourage you to review them
              independently.
            </p>
          </Section>

          <Section title="4. How Long Do Cookies Last?">
            <p>Cookies can be either <strong className="text-slate-700">session cookies</strong> or <strong className="text-slate-700">persistent cookies</strong>:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-slate-700">Session cookies</strong> are temporary and are deleted when you close your browser.</li>
              <li><strong className="text-slate-700">Persistent cookies</strong> remain on your device for a set period (e.g., 30 days, 1 year) or until you manually delete them.</li>
            </ul>
            <p className="mt-3">
              The specific duration of each cookie depends on its purpose and the service that sets it.
            </p>
          </Section>

          <Section title="5. Managing Your Cookie Preferences">
            <p>
              You have the right to accept, decline, or manage cookies at any time. You can control cookies
              in the following ways:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong className="text-slate-700">Browser settings:</strong> Most browsers allow you to refuse
                or delete cookies. Refer to your browser's help documentation for instructions.
              </li>
              <li>
                <strong className="text-slate-700">Cookie consent banner:</strong> When you first visit our site,
                you can choose which categories of cookies to accept via our cookie consent tool.
              </li>
              <li>
                <strong className="text-slate-700">Opt-out tools:</strong> For analytics and advertising cookies,
                you can use tools like the{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline hover:opacity-80">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </li>
            </ul>
            <p className="mt-3 text-sm text-slate-500">
              Please note that disabling certain cookies may affect the functionality and performance of our website.
            </p>
          </Section>

          <Section title="6. Cookies and Your Personal Data">
            <p>
              Some cookies we use may be linked to personal data you have provided to us (for example, if you
              are logged into your Times Money account). In such cases, our{' '}
              <Link href="/privacy-policy" className="text-brand-teal underline hover:opacity-80">
                Privacy Policy
              </Link>{' '}
              also applies to how we handle that personal data.
            </p>
          </Section>

          <Section title="7. Updates to This Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation,
              or our business practices. Any updates will be posted on this page with a revised date. We
              encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

function CookieType({
  label,
  color,
  description,
}: {
  label: string;
  color: string;
  description: string;
}) {
  return (
    <div className={`rounded-xl border p-4 ${color.split(' ')[0]} ${color.split(' ')[1]}`}>
      <p className={`font-semibold text-sm mb-1 ${color.split(' ')[2]}`}>{label}</p>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}
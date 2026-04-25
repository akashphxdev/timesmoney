import React from 'react';
import Image from 'next/image';

export const CreditReportSection = () => {
  const points = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      highlight: '50 Lakh+',
      text: 'people have checked their Free Financial Health Report!',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlight: null,
      text: 'Get personalized loan & investment recommendations instantly',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      highlight: null,
      text: '100% Free, Safe & Secure — Your data is always protected',
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT — GIF */}
          <div className="w-full md:w-1/2 flex items-end justify-center md:justify-start">
            <Image
              src="/second.gif"
              alt="Financial Health Preview"
              width={580}
              height={420}
              className="object-contain w-full max-w-[580px]"
              unoptimized
            />
          </div>

          {/* RIGHT — Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center py-16 md:py-20 md:pl-8">

            {/* Eyebrow — same as Hero trust badge style */}
            <div className="inline-flex items-center gap-2 w-fit mb-4">
              <span
                className="text-[10px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Your Financial Health Matters
              </span>
            </div>

            {/* Heading — same as Hero h1 style */}
            <h2
              className="text-3xl md:text-4xl text-slate-900 leading-[1.15] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Smart Money Decisions —{' '}
              <span className="text-brand-teal">Track &amp; Grow</span>{' '}
              <span className="text-slate-400 font-light">Your Financial Health</span>
            </h2>

            {/* Points */}
            <ul className="space-y-4 mb-8">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center mt-0.5">
                    {p.icon}
                  </div>
                  <p
                    className="text-sm text-slate-500 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.highlight ? (
                      <>
                        <span className="bg-yellow-300 text-slate-800 font-black px-1.5 py-0.5 rounded mr-1">
                          {p.highlight}
                        </span>
                        {p.text}
                      </>
                    ) : (
                      p.text
                    )}
                  </p>
                </li>
              ))}
            </ul>

            {/* Divider — same as Hero stats border */}
            <div className="w-full border-t border-gray-100 mb-6" />

            {/* CTA Button */}
            <button
              className="group relative flex items-center gap-3 bg-brand-teal hover:bg-green-700 text-white font-semibold py-3 px-7 rounded-lg text-sm shadow-md shadow-green-500/20 hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span>Check Your Financial Health — Free</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Trust note — same as Hero bottom text */}
            <p
              className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Free • Instant • 100% Secure
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
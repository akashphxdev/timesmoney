import React from 'react';

export const WhyUs = () => {
  const features = [
    {
      title: 'Trusted by Millions',
      desc: "India's most preferred financial marketplace — 10+ years of trust, 40M+ happy users across every major city.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stat: '40M+',
      statLabel: 'Happy Users',
    },
    {
      title: '100% Digital Process',
      desc: 'No paperwork, no branch visits. Apply, track, and manage everything from your phone in minutes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      stat: '100%',
      statLabel: 'Online',
    },
    {
      title: 'Instant Sanction',
      desc: 'Pre-approved offers in minutes. Fastest disbursal from top banks and NBFCs across India.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stat: '< 2 Min',
      statLabel: 'Approval',
    },
    {
      title: 'Best Interest Rates',
      desc: 'Compare rates from 50+ lenders and always get the lowest interest rate tailored for your profile.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '8.5%',
      statLabel: 'Starting Rate',
    },
    {
      title: '50+ Banking Partners',
      desc: 'We partner with India\'s top banks, NBFCs and fintech lenders — SBI, HDFC, ICICI, Axis and more.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stat: '50+',
      statLabel: 'Lenders',
    },
    {
      title: 'Zero Hidden Charges',
      desc: 'Full transparency in fees, charges and terms. What you see is exactly what you get — always.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '0',
      statLabel: 'Hidden Fees',
    },
  ];

  const stats = [
    { val: '10+', label: 'Years of Trust' },
    { val: '40M+', label: 'Users Served' },
    { val: '50+', label: 'Banking Partners' },
    { val: '₹50L', label: 'Max Loan Amount' },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden">

      {/* Soft teal blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          {/* Eyebrow badge — Hero style */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase text-brand-teal border border-brand-teal/30 bg-brand-teal/5 px-3 py-1 rounded-full"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Why Choose Us
            </span>
          </div>

          {/* Heading — Hero style */}
          <h2
            className="text-3xl md:text-4xl text-slate-900 leading-[1.15] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why <span className="text-brand-teal">Times Money?</span>
          </h2>

          <p
            className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            We simplify your financial journey by bringing the best offers from India&apos;s leading banks right to your fingertips.
          </p>
        </div>

        {/* Stats Row — Hero style */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 py-5 border-y border-gray-100 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span
                className="text-lg font-semibold text-slate-800"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.val}
              </span>
              <span
                className="text-[10px] uppercase tracking-wider text-slate-400 font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stat badge */}
              <div className="absolute top-5 right-5 text-right">
                <p
                  className="text-xl font-semibold text-brand-teal/20 group-hover:text-brand-teal/40 transition-colors duration-500 leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {f.stat}
                </p>
                <p
                  className="text-[9px] font-semibold text-slate-300 uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {f.statLabel}
                </p>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                {f.icon}
              </div>

              {/* Title */}
              <h4
                className="text-base font-semibold text-slate-800 mb-2 group-hover:text-brand-teal transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {f.title}
              </h4>

              {/* Desc */}
              <p
                className="text-sm text-slate-500 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 rounded-2xl bg-brand-teal/5 border border-brand-teal/10 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-slate-800 font-semibold text-base"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to find your best offer?
            </p>
            <p
              className="text-sm text-slate-500 mt-0.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Join 40M+ Indians who trust Times Money for their financial needs.
            </p>
          </div>
          <button
            className="flex-shrink-0 bg-brand-teal hover:bg-green-700 text-white font-semibold py-3 px-7 rounded-lg text-sm shadow-md shadow-green-500/20 hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Check Best Offers
          </button>
        </div>

      </div>
    </section>
  );
};
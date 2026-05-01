'use client';

import { FiRefreshCw, FiMail, FiClock, FiSettings } from 'react-icons/fi';

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-6 text-center">

      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center mb-6">
        <FiSettings size={36} className="text-[#00A63E]" />
      </div>

      {/* Divider */}
      <div className="w-10 h-1 bg-[#00A63E] rounded-full mb-6" />

      {/* Title */}
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Under Maintenance
      </h2>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm mb-8">
        We're working hard to improve your experience.
        We'll be back shortly — thank you for your patience!
      </p>

      {/* Info Cards */}
      <div className="flex flex-col gap-3 max-w-sm w-full mb-10">
        <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 text-left">
          <FiSettings size={18} className="text-[#00A63E] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-500">
            Our team is performing scheduled upgrades to serve you better.
          </p>
        </div>
        <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 text-left">
          <FiClock size={18} className="text-[#00A63E] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-500">
            Expected downtime is minimal. Please check back in a few minutes.
          </p>
        </div>
        <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 text-left">
          <FiMail size={18} className="text-[#00A63E] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-500">
            Urgent queries?{' '}
            <a href="mailto:support@timesmoney.in" className="text-[#00A63E] font-medium hover:underline">
              support@timesmoney.in
            </a>
          </p>
        </div>
      </div>

      {/* Refresh Button */}
      <button
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 text-sm font-semibold text-white bg-[#00A63E] hover:bg-green-700 px-7 py-3 rounded-full transition-colors duration-200"
      >
        <FiRefreshCw size={15} />
        Refresh Page
      </button>

      <p className="text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} TimesMoney. All rights reserved.
      </p>

    </main>
  );
}
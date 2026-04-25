'use client';

import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-6 text-center">

      {/* 404 Number */}
      <h1 className="font-serif text-[9rem] md:text-[12rem] font-extrabold text-gray-900 leading-none tracking-tighter">
        4<span className="text-[#00A63E]">0</span>4
      </h1>

      {/* Divider */}
      <div className="w-10 h-1 bg-[#00A63E] rounded-full mt-2 mb-6" />

      {/* Title */}
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Page Not Found
      </h2>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm mb-10">
        The article you're looking for has moved, been deleted, or never existed.
        Let's get you back on track.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => router.push('/blog')}
          className="text-sm font-semibold text-white bg-[#00A63E] hover:bg-[#00A63E] px-7 py-3 rounded-full transition-colors duration-200"
        >
          ← Back to Blog
        </button>
        <button
          onClick={() => router.push('/')}
          className="text-sm font-semibold text-[#00A63E] bg-transparent border-2 border-[#00A63E] hover:bg-[#00A63E] hover:text-white px-7 py-3 rounded-full transition-all duration-200"
        >
          Go to Home
        </button>
      </div>

    </main>
  );
}
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';

export default function NotFound() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        {/* 404 */}
        <div className="relative mb-8">
          <p className="text-[110px] font-extrabold text-slate-300 leading-none select-none">
            404
          </p>
        </div>

        {/* Text */}
        <h1 className="text-xl font-semibold text-slate-800 mb-2">
          Page not found
        </h1>

        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          Yeh page exist nahi karta ya move ho gaya hai.
        </p>

        {/* Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition"
        >
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
}
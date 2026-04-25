'use client';

import { useState, useRef, useEffect } from 'react';
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
} from 'react-icons/ai';
import { usePathname, useRouter } from 'next/navigation';

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/blogs': 'Blogs',
  '/categories': 'Categories',
  '/products': 'Products',
  '/leads': 'Leads',
  '/our-partners': 'Our Partners',
  '/ads': 'Ads',
  '/testimonials': 'Testimonials',
  '/admins': 'Admins',
  '/settings': 'Settings',
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const title = pageTitles[pathname] ?? 'Dashboard';

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => {
    // Clear cookies
    document.cookie = 'token=; path=/; max-age=0';
    document.cookie = 'admin=; path=/; max-age=0';
    router.push('/login');
  };

  return (
    <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">

      {/* Left — dynamic title */}
      <div>
        <p className="text-[11px] text-gray-400 uppercase tracking-widest font-medium">
          {title}
        </p>
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Avatar + Dropdown */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-xs font-bold text-green-600">C</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-gray-800 leading-none">CMS Admin</p>
              <p className="text-[10px] text-gray-400 mt-0.5 leading-none">Super Admin</p>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50">

              {/* User Info */}
              <div className="px-4 py-3.5 border-b border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-green-600">C</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">CMS Admin</p>
                  <p className="text-xs text-gray-400">cms@timesmoney.in</p>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <AiOutlineLogout size={15} />
                Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
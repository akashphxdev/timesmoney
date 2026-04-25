'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '@/lib/api';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  subCategories: SubCategory[];
}

export const Footer = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/web/header-data');
        setCategories(res.data.data.categories);
      } catch (err) {
        console.error('Footer data fetch failed:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-20">

          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">T</span>
                <span className="text-yellow-400 font-black">₹</span>
                <span className="text-white">imes</span>
                <span className="text-green-400">Money</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Compare and Apply for loans, Credit Cards, and investments from India&apos;s top banks. 
              Get the best deals, lowest interest rates, and expert financial guidance — all in one place.
            </p>
          </div>

          {/* Column 2 - Dynamic Categories */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <span className="text-slate-400 text-sm cursor-default">{category.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Policy & Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Policy & Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/privacy-policy"   className="hover:text-brand-teal transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-brand-teal transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/about-us"         className="hover:text-brand-teal transition-colors">About Us</Link></li>
              <li><Link href="/disclaimer"       className="hover:text-brand-teal transition-colors">Disclaimer</Link></li>
              <li><Link href="/cookie-policy"    className="hover:text-brand-teal transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium font-sans">
          <p>© 2024 Times / Timesmoney.com</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy"   className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms-conditions" className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
            <span className="text-slate-700">•</span>
            <span>By Times Group</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
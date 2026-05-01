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

interface Settings {
  whatsappNo: string;
  callingNo: string;
  supportEmail: string;
  instagramUrl: string;
  linkedinUrl: string;
}

export const Footer = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [headerRes, settingsRes] = await Promise.all([
          api.get('/web/header-data'),
          api.get('/public/settings'),
        ]);
        setCategories(headerRes.data.data.categories);
        setSettings(settingsRes.data.data);
      } catch (err) {
        console.error('Footer data fetch failed:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-brand-navy text-white pt-12 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">

          {/* Column 1 - Brand + Social */}
          <div className="space-y-4 md:space-y-6">
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

            {/* Social Icons */}
            {settings && (
              <div className="flex items-center gap-3 pt-1">
                {settings.instagramUrl && (
                  <a
                    href={settings.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-200"
                  >
                    {/* Instagram SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608C4.518 2.497 5.785 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                )}
                {settings.linkedinUrl && (
                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                  >
                    {/* LinkedIn SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {settings.whatsappNo && (
                  <a
                    href={`https://wa.me/${settings.whatsappNo.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-green-500 flex items-center justify-center transition-colors duration-200"
                  >
                    {/* WhatsApp SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
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

          {/* Column 4 - Contact Us */}
          {settings && (
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Contact Us</h4>
              <ul className="space-y-3 text-slate-400 text-sm">

                {settings.supportEmail && (
                  <li className="flex items-start gap-2">
                    {/* Mail icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href={`mailto:${settings.supportEmail}`} className="hover:text-brand-teal transition-colors break-all">
                      {settings.supportEmail}
                    </a>
                  </li>
                )}

                {settings.callingNo && (
                  <li className="flex items-start gap-2">
                    {/* Phone icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <a href={`tel:${settings.callingNo}`} className="hover:text-brand-teal transition-colors">
                      {settings.callingNo}
                    </a>
                  </li>
                )}

                {settings.whatsappNo && (
                  <li className="flex items-start gap-2">
                    {/* WhatsApp icon (small inline) */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    <a
                      href={`https://wa.me/${settings.whatsappNo.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-teal transition-colors"
                    >
                      {settings.whatsappNo}
                    </a>
                  </li>
                )}

              </ul>
            </div>
          )}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium font-sans">
          <p className="text-center md:text-left">© 2024 Times / Timesmoney.in</p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2">
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
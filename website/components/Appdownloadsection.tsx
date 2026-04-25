import React from 'react';

export const AppDownloadSection = () => {
    const features = [
        'Track your Credit Score anytime and stay financially healthy',
        'Get exclusive Loans and Credit Card offers tailored for you',
        'Enjoy a 100% seamless and paperless experience',
    ];

    return (
        <section className="relative bg-white overflow-hidden py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* LEFT — Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center py-16 md:py-20">

                        {/* Eyebrow */}
                        <p className="text-[#00a63e] text-xs font-black uppercase tracking-[0.2em] mb-4">
                            Available on iOS & Android
                        </p>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] leading-tight mb-5">
                            Download the{' '}
                            <span className="text-[#00a63e]">Times Money</span> App Now
                        </h2>

                        {/* Bullet points */}
                        <ul className="space-y-3 mb-8">
                            {features.map((f, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-[#1B2A4A] text-sm opacity-75">
                                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#00a63e]" />
                                    {f}
                                </li>
                            ))}
                        </ul>

                        {/* QR + Store Buttons */}
                        <p className="text-[#1B2A4A] text-sm font-semibold mb-4 opacity-70">
                            Scan this QR code to download the app
                        </p>

                        <div className="flex items-center gap-6">
                            {/* QR Code placeholder */}
                            <div className="w-24 h-24 border-2 border-[#1B2A4A]/10 rounded-xl overflow-hidden flex-shrink-0 bg-white p-1.5 shadow-md">
                                {/* Replace src with actual QR image if available */}
                                <div className="w-full h-full bg-[#1B2A4A]/5 rounded-lg flex items-center justify-center">
                                    <svg className="w-10 h-10 text-[#1B2A4A]/30" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 3h7v7H3V3zm1 1v5h5V4H4zm1 1h3v3H5V5zM3 14h7v7H3v-7zm1 1v5h5v-5H4zm1 1h3v3H5v-3zM14 3h7v7h-7V3zm1 1v5h5V4h-5zm1 1h3v3h-3V5z" />
                                        <path d="M14 14h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2zm0 4h2v2h-2v-2zm-4 0h2v2h-2v-2zm0-8h2v2h-2V8zm4 4h2v2h-2v-2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Store Buttons */}
                            <div className="flex flex-col gap-3">
                                {/* Google Play */}
                                <a
                                    href="#"
                                    className="flex items-center gap-3 bg-[#1B2A4A] hover:bg-[#253d6b] text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
                                >
                                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.18 23.76c.3.17.64.24.99.21l.1-.04L13.65 14 10 10.35 3.18 23.76z" fill="#EA4335" />
                                        <path d="M20.46 10.28l-2.97-1.7-3.84 3.42 3.84 3.84 2.94-1.68a1.98 1.98 0 000-3.88z" fill="#FBBC05" />
                                        <path d="M3.17.24A1.98 1.98 0 002 2v20c0 .7.37 1.31.94 1.64L13.65 14 3.17.24z" fill="#4285F4" />
                                        <path d="M3.27.2l10.38 13.8 3.84-3.84L4.26.04a1.99 1.99 0 00-.99.16z" fill="#34A853" />
                                    </svg>
                                    <div>
                                        <p className="text-[9px] opacity-70 leading-none mb-0.5 font-medium">GET IT ON</p>
                                        <p className="text-sm font-bold leading-none">Google Play</p>
                                    </div>
                                </a>

                                {/* App Store */}
                                <a
                                    href="#"
                                    className="flex items-center gap-3 bg-[#1B2A4A] hover:bg-[#253d6b] text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
                                >
                                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div>
                                        <p className="text-[9px] opacity-70 leading-none mb-0.5 font-medium">Download on the</p>
                                        <p className="text-sm font-bold leading-none">App Store</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Realistic Phone Mockup */}
                    <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end py-10">
                        <div className="relative" style={{ width: 280, height: 560 }}>

                            {/* Outer glow */}
                            <div className="absolute inset-0 rounded-[44px] bg-[#00a63e]/10 blur-2xl scale-105 pointer-events-none" />

                            {/* Phone body SVG — realistic layered shell */}
                            <svg width="280" height="560" viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-10 drop-shadow-[0_32px_48px_rgba(0,0,0,0.35)]">
                                {/* Shadow layer */}
                                <rect x="8" y="12" width="264" height="540" rx="42" fill="rgba(0,0,0,0.25)" />
                                {/* Body gradient — dark navy */}
                                <rect x="2" y="2" width="276" height="556" rx="42" fill="url(#phoneBody)" />
                                {/* Side sheen left */}
                                <rect x="2" y="2" width="8" height="556" rx="4" fill="url(#sheenLeft)" />
                                {/* Side sheen right */}
                                <rect x="270" y="2" width="8" height="556" rx="4" fill="url(#sheenRight)" />
                                {/* Screen bezel */}
                                <rect x="10" y="12" width="260" height="536" rx="34" fill="#0e1828" />
                                {/* Screen surface */}
                                <rect x="12" y="14" width="256" height="532" rx="32" fill="#F8FAFF" />
                                {/* Dynamic Island */}
                                <rect x="98" y="20" width="84" height="26" rx="13" fill="#0e1828" />
                                {/* Camera dot inside island */}
                                <circle cx="168" cy="33" r="5" fill="#1a2535" />
                                <circle cx="168" cy="33" r="2.5" fill="#111" />
                                <circle cx="169.5" cy="31.5" r="0.8" fill="rgba(255,255,255,0.3)" />
                                {/* Home indicator */}
                                <rect x="108" y="534" width="64" height="5" rx="2.5" fill="#1B2A4A" opacity="0.25" />
                                {/* Volume buttons left */}
                                <rect x="-1" y="130" width="4" height="38" rx="2" fill="#2a3f5e" />
                                <rect x="-1" y="178" width="4" height="54" rx="2" fill="#2a3f5e" />
                                <rect x="-1" y="242" width="4" height="54" rx="2" fill="#2a3f5e" />
                                {/* Power button right */}
                                <rect x="277" y="160" width="4" height="70" rx="2" fill="#2a3f5e" />
                                {/* Screen glare overlay */}
                                <rect x="12" y="14" width="256" height="532" rx="32" fill="url(#glare)" opacity="0.06" />
                                <defs>
                                    <linearGradient id="phoneBody" x1="0" y1="0" x2="280" y2="560" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#243351" />
                                        <stop offset="50%" stopColor="#1B2A4A" />
                                        <stop offset="100%" stopColor="#111e33" />
                                    </linearGradient>
                                    <linearGradient id="sheenLeft" x1="0" y1="0" x2="8" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="white" stopOpacity="0.12" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="sheenRight" x1="0" y1="0" x2="8" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0.08" />
                                    </linearGradient>
                                    <linearGradient id="glare" x1="0" y1="0" x2="256" y2="532" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                                        <stop offset="40%" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* App Screen Content */}
                            <div className="absolute z-20 flex flex-col overflow-hidden bg-[#F8FAFF]"
                                style={{ top: 14, left: 12, width: 256, height: 532, borderRadius: 32 }}>

                                {/* Status bar */}
                                <div className="flex justify-between items-center px-5 pt-8 pb-1 bg-[#F8FAFF]">
                                    <span className="text-[9px] font-bold text-[#1B2A4A] tracking-tight">9:41</span>
                                    <div className="flex gap-1.5 items-center">
                                        {/* Signal bars */}
                                        <svg width="13" height="9" viewBox="0 0 13 9" fill="#1B2A4A">
                                            <rect x="0" y="5" width="2.5" height="4" rx="0.5" />
                                            <rect x="3.5" y="3" width="2.5" height="6" rx="0.5" />
                                            <rect x="7" y="1" width="2.5" height="8" rx="0.5" />
                                            <rect x="10.5" y="0" width="2.5" height="9" rx="0.5" opacity="0.3" />
                                        </svg>
                                        {/* Wifi */}
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" stroke="#1B2A4A" strokeLinecap="round">
                                            <path d="M1 3.2C2.6 1.6 4.9 0.7 5.5 0.7s2.9.9 4.5 2.5" strokeWidth="1.2" />
                                            <path d="M2.5 4.8c.8-.9 1.8-1.4 3-1.4s2.2.5 3 1.4" strokeWidth="1.2" />
                                            <circle cx="5.5" cy="7.5" r="1" fill="#1B2A4A" stroke="none" />
                                        </svg>
                                        {/* Battery */}
                                        <svg width="19" height="9" viewBox="0 0 19 9" fill="none">
                                            <rect x="0.5" y="0.5" width="15" height="8" rx="2" stroke="#1B2A4A" strokeOpacity="0.6" />
                                            <rect x="2" y="2" width="10" height="5" rx="1" fill="#1B2A4A" />
                                            <path d="M16.5 3v3a1.5 1.5 0 000-3z" fill="#1B2A4A" fillOpacity="0.6" />
                                        </svg>
                                    </div>
                                </div>

                                {/* App Header */}
                                <div className="bg-[#00a63e] px-4 pt-2 pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-white/70 text-[8px] font-medium">Good morning</p>
                                            <p className="text-white text-[12px] font-bold leading-tight">Times Money</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {/* Search icon */}
                                            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                                                <svg width="12" height="12" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
                                                    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                                                </svg>
                                            </div>
                                            {/* Bell icon */}
                                            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                                                <svg width="12" height="12" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
                                                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Credit Score Card */}
                                    <div className="bg-white/15 backdrop-blur rounded-2xl px-3 py-2.5 flex items-center justify-between">
                                        <div>
                                            <p className="text-white/60 text-[7px] font-semibold uppercase tracking-wide">Credit Score</p>
                                            <p className="text-white text-[22px] font-black leading-none mt-0.5">782</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                <svg width="8" height="8" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <polyline points="18 15 12 9 6 15" />
                                                </svg>
                                                <p className="text-green-300 text-[7px] font-bold">Excellent</p>
                                            </div>
                                        </div>
                                        {/* Gauge SVG */}
                                        <svg width="56" height="34" viewBox="0 0 56 34">
                                            <path d="M5 32 A23 23 0 0 1 51 32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="5" strokeLinecap="round" />
                                            <path d="M5 32 A23 23 0 0 1 51 32" fill="none" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" strokeDasharray="72" strokeDashoffset="14" />
                                            <line x1="28" y1="32" x2="42" y2="13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                                            <circle cx="28" cy="32" r="3" fill="white" />
                                            <circle cx="28" cy="32" r="1.5" fill="#00a63e" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-white px-3 py-3 border-b border-gray-100">
                                    <p className="text-[#1B2A4A]/50 text-[7.5px] font-black uppercase tracking-widest mb-2">Quick Access</p>
                                    <div className="grid grid-cols-4 gap-1.5">
                                        {[
                                            {
                                                label: 'Loans', color: '#00a63e', bg: '#EEF2FF',
                                                svg: <svg width="16" height="16" fill="none" stroke="#00a63e" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                            },
                                            {
                                                label: 'Cards', color: '#10b981', bg: '#ECFDF5',
                                                svg: <svg width="16" height="16" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="3" /><path d="M1 10h22" /></svg>
                                            },
                                            {
                                                label: 'Score', color: '#f59e0b', bg: '#FFFBEB',
                                                svg: <svg width="16" height="16" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                            },
                                            {
                                                label: 'Invest', color: '#8b5cf6', bg: '#F5F3FF',
                                                svg: <svg width="16" height="16" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                            },
                                        ].map((item) => (
                                            <div key={item.label} className="flex flex-col items-center gap-1">
                                                <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: item.bg }}>
                                                    {item.svg}
                                                </div>
                                                <span className="text-[7px] text-[#1B2A4A]/60 font-semibold">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Offers */}
                                <div className="flex-1 overflow-hidden px-3 py-2.5 bg-[#F8FAFF]">
                                    <p className="text-[#1B2A4A]/50 text-[7.5px] font-black uppercase tracking-widest mb-2">Top Offers</p>
                                    <div className="space-y-2">
                                        {[
                                            {
                                                name: 'HDFC Personal Loan', sub: 'Pre-approved • 10.5% p.a.', tag: 'Apply',
                                                color: '#00a63e', bg: '#EEF2FF',
                                                svg: <svg width="14" height="14" fill="none" stroke="#00a63e" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                                            },
                                            {
                                                name: 'Axis Ace Credit Card', sub: '5% Cashback • Lifetime Free', tag: 'Apply',
                                                color: '#10b981', bg: '#ECFDF5',
                                                svg: <svg width="14" height="14" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="3" /><path d="M1 10h22M7 15h2M13 15h4" /></svg>
                                            },
                                            {
                                                name: 'SBI Mutual Fund SIP', sub: 'Start ₹500 • 0% Fee', tag: 'Invest',
                                                color: '#f59e0b', bg: '#FFFBEB',
                                                svg: <svg width="14" height="14" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                            },
                                        ].map((offer) => (
                                            <div key={offer.name} className="bg-white rounded-xl p-2 border border-gray-100 shadow-sm flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: offer.bg }}>
                                                    {offer.svg}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[#1B2A4A] text-[7.5px] font-bold truncate">{offer.name}</p>
                                                    <p className="text-[7px] font-semibold truncate" style={{ color: offer.color }}>{offer.sub}</p>
                                                </div>
                                                <div className="text-white text-[6px] font-black px-2 py-1 rounded-lg flex-shrink-0" style={{ backgroundColor: offer.color }}>{offer.tag}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="border-t border-gray-100 bg-white px-4 py-2 flex justify-around items-center">
                                    {[
                                        {
                                            label: 'Home', active: true,
                                            svg: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                        },
                                        {
                                            label: 'Offers', active: false,
                                            svg: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                                        },
                                        {
                                            label: 'Score', active: false,
                                            svg: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                        },
                                        {
                                            label: 'Profile', active: false,
                                            svg: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                        },
                                    ].map((nav) => (
                                        <div key={nav.label} className="flex flex-col items-center gap-0.5" style={{ color: nav.active ? '#00a63e' : '#94a3b8' }}>
                                            {nav.svg}
                                            <span className="text-[6px] font-bold">{nav.label}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
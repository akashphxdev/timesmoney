'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type AdPage = 'HOME' | 'BLOG' | 'PRODUCT' | 'CATEGORY' | 'CALCULATOR';
type AdPosition = 'TOP' | 'BOTTOM' | 'BETWEEN_CONTENT' | 'SIDEBAR';

interface Ad {
  id: string;
  title: string;
  image: string;
  link: string | null;
  size: string;
  position: string;
  page: string;
}

interface AdBannerProps {
  page: AdPage;
  position: AdPosition;
  className?: string;
}

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let sid = localStorage.getItem('_ad_sid');
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('_ad_sid', sid);
  }
  return sid;
}

async function getClientIp(): Promise<string | null> {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip || null;
  } catch {
    return null;
  }
}

const SIZE_MAP: Record<string, { width: number; height: number }> = {
  BANNER_728x90:  { width: 728, height: 90 },
  BANNER_300x250: { width: 300, height: 250 },
  BANNER_300x600: { width: 300, height: 600 },
  BANNER_320x50:  { width: 320, height: 50 },
  BANNER_160x600: { width: 160, height: 600 },
  BANNER_970x90:  { width: 970, height: 90 },
  CUSTOM:         { width: 300, height: 250 },
};

function AdCard({ ad }: { ad: Ad }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const impressionSent = useRef(false);
  const pathname = usePathname();

  const size = SIZE_MAP[ad.size] || SIZE_MAP['BANNER_300x250'];
  const aspectRatio = `${size.width}/${size.height}`;

  const sendEvent = useCallback(
    async (type: 'CLICK' | 'IMPRESSION') => {
      try {
        const clientIp = await getClientIp();
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/ads/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            adId: ad.id,
            type,
            sessionId: getSessionId(),
            page: pathname,
            referrer: document.referrer || null,
            clientIp,
          }),
        });
      } catch {}
    },
    [ad.id, pathname]
  );

  useEffect(() => {
    if (!imgRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !impressionSent.current) {
            impressionSent.current = true;
            sendEvent('IMPRESSION');
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [sendEvent]);

  const handleClick = () => {
    sendEvent('CLICK');
    if (ad.link) window.open(ad.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={imgRef}
      onClick={handleClick}
      title={ad.title}
      className={`relative overflow-hidden rounded-xl border border-gray-100 bg-white ${ad.link ? 'cursor-pointer' : ''}`}
      style={{ width: '100%', maxWidth: size.width, aspectRatio }}
    >
      <span className="absolute top-1.5 right-2 z-10 text-[9px] font-medium tracking-widest uppercase bg-black/40 text-white px-1.5 py-0.5 rounded">
        Ad
      </span>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL_IMG}${ad.image}`}
        alt={ad.title}
        fill
        className="object-contain"
        sizes={`${size.width}px`}
        unoptimized
      />
    </div>
  );
}

export default function AdBanner({ page, position, className = '' }: AdBannerProps) {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/ads?page=${page}&position=${position}`)
      .then((res) => res.json())
      .then((data) => { if (data.success) setAds(data.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [page, position]);

  if (loading || ads.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {ads.map((ad) => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
}
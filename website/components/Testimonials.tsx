"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  avatar: string | null;
  content: string;
  rating: number;
  featured: boolean;
}

export const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [cur, setCur] = useState(0);
  const [show, setShow] = useState(3);
  const timerRef = useRef<NodeJS.Timeout>();

  // Responsive: visible cards count
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setShow(1);
      else if (window.innerWidth < 1024) setShow(2);
      else setShow(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (!testimonials || testimonials.length === 0) return null;

  const max = Math.max(0, testimonials.length - show);

  const goTo = useCallback((n: number) => {
    setCur(n <= 0 ? 0 : n >= max ? 0 : n);
  }, [max]);

  // Reset cur if it exceeds max after resize
  useEffect(() => {
    setCur((prev) => Math.min(prev, max));
  }, [max]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCur(prev => (prev >= max ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(timerRef.current);
  }, [max]);

  const resetTimer = (n: number) => {
    clearInterval(timerRef.current);
    const clamped = Math.max(0, Math.min(n, max));
    setCur(clamped);
    timerRef.current = setInterval(() => {
      setCur(prev => (prev >= max ? 0 : prev + 1));
    }, 3200);
  };

  return (
    <section className="bg-slate-50 py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-teal/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-brand-teal text-xs font-black uppercase tracking-[0.2em] mb-3">Customer Stories</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            What Our Customers <span className="text-brand-teal">Say</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Join 40M+ happy users who found their perfect financial match.
          </p>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${cur * (100 / testimonials.length)}%)`,
              width: `${(testimonials.length / show) * 100}%`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                style={{ width: `${100 / testimonials.length}%` }}
                className="px-2 sm:px-3"
              >
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1.5 transition-all duration-500 flex flex-col gap-4 md:gap-5 h-full">
                  <div className="w-9 h-9 bg-brand-teal text-white rounded-xl flex items-center justify-center font-black text-xl leading-none">
                    "
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{item.content}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    {item.avatar ? (
                      <img src={`${BACKEND_URL}${item.avatar}`} alt={item.name} className="w-10 h-10 rounded-xl object-cover" />
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-teal-600 rounded-xl flex items-center justify-center font-black text-white text-sm">
                        {item.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                      {item.role && <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{item.role}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
          <button
            onClick={() => resetTimer(cur - 1)}
            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-slate-400 hover:border-brand-teal hover:text-brand-teal transition-all"
          >
            ←
          </button>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => resetTimer(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === cur ? 'w-5 bg-brand-teal' : 'w-2 bg-gray-300'}`}
            />
          ))}
          <button
            onClick={() => resetTimer(cur + 1)}
            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-slate-400 hover:border-brand-teal hover:text-brand-teal transition-all"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};
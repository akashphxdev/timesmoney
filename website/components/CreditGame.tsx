"use client";
import React from 'react';
import Image from 'next/image';

export const CreditGame = () => {
  return (
    <section className="relative bg-[#F3E8FF] pt-8 pb-0 overflow-hidden">
      {/* Silhouetted Landscape Background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Back Layer */}
          <path
            fill="#80CBC4"
            fillOpacity="0.4"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          {/* Middle Layer */}
          <path
            fill="#4DB6AC"
            fillOpacity="0.6"
            d="M0,256L60,245.3C120,235,240,213,360,213.3C480,213,600,235,720,245.3C840,256,960,256,1080,245.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
          {/* Front Layer */}
          <path
            fill="#26A69A"
            d="M0,288L80,277.3C160,267,320,245,480,250.7C640,256,800,288,960,288C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end">
          
          {/* Left Content */}
          <div className="space-y-4 max-w-md pb-10 w-full md:w-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2A4A] leading-tight text-center md:text-left">
              Find the Best Credit Card — Just for You!
            </h2>
            <p className="text-[#1B2A4A] text-base leading-relaxed opacity-75 text-center md:text-left">
              Compare top credit cards tailored to your credit profile. Check your eligibility instantly — no hard enquiry, no stress.
            </p>
            <ul className="space-y-2">
              {[
                "✓ Personalised card recommendations",
                "✓ Know approval chances before applying",
                "✓ Zero impact on your Credit Score",
              ].map((item) => (
                <li key={item} className="text-[#1B2A4A] text-sm font-medium opacity-80 text-center md:text-left">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#00a63e] hover:bg-[#4058d1] text-white font-bold py-4 px-12 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all transform active:scale-95 w-full sm:w-auto">
                Get Started Free
              </button>
            </div>
            <p className="text-xs text-[#1B2A4A] opacity-50 text-center md:text-left">
              Already have an account?{" "}
              <span className="underline cursor-pointer opacity-80">Log In</span>
            </p>
          </div>

          {/* Right Content — GIF flush at bottom */}
          <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end justify-end w-full md:w-auto">
            <p className="text-[#1B2A4A] text-sm font-medium leading-relaxed max-w-sm text-center md:text-right opacity-70 mb-4 px-4 md:px-0">
              Smart tech matches you with the right credit cards — apply with confidence, not guesswork.
            </p>

            {/* GIF */}
            <div className="relative translate-y-1 w-full flex justify-center md:justify-end">
              <Image
                src="/video-gif.gif"
                alt="Credit Card Comparison Animation"
                width={420}
                height={320}
                className="object-contain w-[280px] sm:w-[340px] md:w-[420px]"
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
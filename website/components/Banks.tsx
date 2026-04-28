import React from 'react';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

interface Partner {
  id: string;
  name: string;
  imageUrl: string | null;
}

interface BanksStripProps {
  partners: Partner[];
}

export const Banks = ({ partners }: BanksStripProps) => {
  if (!partners || partners.length === 0) return null;

  return (
    <section className="bg-gray-50 py-8 sm:py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h5 className="text-center text-slate-400 font-bold mb-6 sm:mb-10 uppercase tracking-[0.3em] text-[10px]">
          Our Partners
        </h5>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center space-x-2 sm:space-x-3 bg-white border border-gray-200 rounded-xl px-3 py-2.5 sm:px-5 sm:py-3 shadow-sm hover:border-brand-teal hover:shadow-md transition-all cursor-pointer group"
            >
              {partner.imageUrl ? (
                <img
                  src={`${BACKEND_URL}${partner.imageUrl}`}
                  alt={partner.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg"
                />
              ) : (
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 font-bold text-xs">
                  {partner.name.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-brand-teal transition-colors whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
import React from 'react';
import Link from 'next/link';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? '';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
}

interface ProductCategoriesProps {
  categories: Category[];
  subCategories: SubCategory[];
}

export const ProductCategories = ({ categories, subCategories }: ProductCategoriesProps) => {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="bg-white py-16">

      <style>{`
        @keyframes sub-shake {
          0%   { transform: rotate(0deg); }
          5%   { transform: rotate(-22deg); }
          10%  { transform: rotate(20deg); }
          15%  { transform: rotate(-16deg); }
          20%  { transform: rotate(12deg); }
          25%  { transform: rotate(-8deg); }
          30%  { transform: rotate(4deg); }
          35%  { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .sub-icon {
          animation: sub-shake 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {categories.map((cat) => {
            const subs = subCategories.filter((s) => s.categoryId === cat.id);

            return (
              <div key={cat.id} className="flex flex-col">

                {/* ── Category ── */}
                <Link href={`/${cat.slug}`}>
                  <div className="flex items-center gap-3 cursor-pointer group my-[35px]">
                    {cat.imageUrl ? (
                      <img
                        src={`${BACKEND_URL}${cat.imageUrl}`}
                        alt={cat.name}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold text-lg">
                        {cat.name.charAt(0)}
                      </div>
                    )}
                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-brand-teal transition-colors">
                      {cat.name}
                    </h4>
                  </div>
                </Link>

                {/* ── SubCategories ── */}
                {subs.length > 0 && (
                  <div className="flex justify-evenly flex-wrap gap-y-6 mx-0 sm:mx-[75px] lg:mx-[150px]">
                    {subs.map((sub, index) => (
                      <Link key={sub.id} href={`/${cat.slug}/${sub.slug}`}>
                        <div className="flex flex-col items-center gap-2 cursor-pointer group w-16 sm:w-20">
                          {sub.imageUrl ? (
                            <img
                              src={`${BACKEND_URL}${sub.imageUrl}`}
                              alt={sub.name}
                              className="w-8 h-8 object-contain sub-icon"
                              style={{ animationDelay: `${index * 0.3}s` }}
                            />
                          ) : (
                            <div
                              className="w-8 h-8 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold text-sm sub-icon"
                              style={{ animationDelay: `${index * 0.3}s` }}
                            >
                              {sub.name.charAt(0)}
                            </div>
                          )}
                          <span className="text-xs font-semibold text-slate-600 group-hover:text-brand-teal transition-colors text-center leading-tight">
                            {sub.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
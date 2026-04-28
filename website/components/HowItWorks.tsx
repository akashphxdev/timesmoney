import React from 'react';

export const HowItWorks = () => {
  const steps = [
    { title: 'Step Miles', desc: 'Get summarized verified leads from Nam.' },
    { title: 'Step Step', desc: 'Inspire your satisfaction leads from.' },
    { title: 'Step Step', desc: 'Give customer selected leads from your offers.' },
    { title: 'Step Step', desc: 'Pay commission please show more details.' }
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-10 md:mb-20">
          How It Works
        </h2>

        <div className="relative">
          {/* Connector Line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] border-t-2 border-dotted border-brand-teal/30 z-0" />

          {/* Vertical connector — mobile/tablet */}
          <div className="flex flex-col items-center gap-0 lg:hidden">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-xl shadow-brand-teal/20 z-10">
                  {i + 1}
                </div>
                {/* Vertical dotted line between steps */}
                {i < steps.length - 1 && (
                  <div className="w-[2px] h-8 border-l-2 border-dotted border-brand-teal/30" />
                )}
                <h4 className="text-sm font-bold text-slate-800 mb-1 mt-3">{step.title}</h4>
                <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop grid — same as original */}
          <div className="hidden lg:grid grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-xl shadow-brand-teal/20">
                  {i + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 max-w-[150px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
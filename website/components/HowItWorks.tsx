import React from 'react';

export const HowItWorks = () => {
  const steps = [
    { title: 'Step Miles', desc: 'Get summarized verified leads from Nam.' },
    { title: 'Step Step', desc: 'Inspire your satisfaction leads from.' },
    { title: 'Step Step', desc: 'Give customer selected leads from your offers.' },
    { title: 'Step Step', desc: 'Pay commission please show more details.' }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-20">How It Works</h2>
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] border-t-2 border-dotted border-brand-teal/30 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-xl shadow-brand-teal/20">
                  {i + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 max-w-[150px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>Q
        </div>
      </div>
    </section>
  );
};

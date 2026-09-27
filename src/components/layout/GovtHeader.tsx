import React from 'react';

export const GovtHeader: React.FC = () => {
  return (
    <div className="bg-navy-950 text-slate-300 text-[10px] sm:text-[11px] font-sans border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1 sm:py-1.5 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-medium text-slate-200">
            भारत सरकार | Government of India
          </span>
          <span className="text-navy-700 hidden md:inline">|</span>
          <span className="hidden md:inline text-slate-400">
            कृषि एवं किसान कल्याण मंत्रालय | Ministry of Agriculture & Farmers Welfare
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4 text-slate-400">
          <span className="hover:text-white transition-colors cursor-default">
            DARE / ICAR
          </span>
          <span className="text-navy-700">|</span>
          <span className="text-teal-400 font-mono text-[9.5px] sm:text-[10px]">
            ISO 9001:2015 Facility
          </span>
        </div>
      </div>
    </div>
  );
};

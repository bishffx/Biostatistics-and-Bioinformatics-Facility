import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const InstitutionalHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Institutional Logos & Titles */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <img
                src="/assets/icar.png"
                alt="Indian Council of Agricultural Research Emblem"
                width={64}
                height={64}
                loading="eager"
                decoding="async"
                className="h-16 w-auto object-contain"
              />
              <img
                src="/assets/NIFMD new logo.jpg"
                alt="ICAR-NIFMD Institutional Logo"
                width={64}
                height={64}
                loading="eager"
                decoding="async"
                className="h-16 w-auto object-contain rounded-sm"
              />
            </div>

            <div className="border-l border-slate-200 pl-4 sm:pl-6">
              <div className="text-[12px] font-semibold text-slate-600 tracking-wide uppercase font-sans">
                ICAR – National Institute on Foot and Mouth Disease
              </div>
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 tracking-tight leading-tight">
                Biostatistics & Bioinformatics Facility (BBF)
              </h1>
              <p className="text-xs text-slate-500 font-sans mt-0.5">
                Bhubaneswar, Odisha – 752050, India | Dedicated Shared Institutional Research Resource
              </p>
            </div>
          </div>

          {/* Quick Institutional Badges */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right border-r border-slate-200 pr-4">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Facility Status
              </div>
              <div className="flex items-center gap-1.5 justify-end text-xs font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Servers Operational
              </div>
            </div>

            <div className="text-right">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Mandate
              </div>
              <div className="text-xs font-semibold text-navy-900 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sci-600" />
                FMD Epidemiology & Omics
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

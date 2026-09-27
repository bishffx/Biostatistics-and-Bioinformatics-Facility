import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  Lock 
} from 'lucide-react';

export interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

// Visual structure and integration point for institutional visitor analytics
export interface VisitorAnalyticsPayload {
  endpointConfigured: boolean;
  totalVisitors?: number;
  dailyVisits?: number;
  timestamp?: string;
}

// Integration point: If a real telemetry service (e.g., NIC Web Analytics, Matomo, or Gov.in portal counter)
// is connected, populate this config or pass via environmental props.
const VISITOR_ANALYTICS_CONFIG: VisitorAnalyticsPayload = {
  endpointConfigured: false, // Set to true when institutional analytics endpoint is connected
  totalVisitors: undefined,  // Explicitly undefined to avoid inventing visitor numbers
  dailyVisits: undefined,
  timestamp: undefined,
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Navigation items as specified in the brief
  const navigationLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Biostatistics', sectionId: 'biostatistics' },
    { label: 'Bioinformatics', sectionId: 'bioinformatics' },
    { label: 'Infrastructure', sectionId: 'hardware-software' },
    { label: 'Research', sectionId: 'projects' },
    { label: 'Team', sectionId: 'team' },
    { label: 'Publications', sectionId: 'publications' },
    { label: 'Tools', sectionId: 'tools' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (sectionId: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(sectionId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 font-sans text-xs relative overflow-hidden">
      
      {/* Subtle Scientific Network Visual Background Pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        <h2 className="sr-only">Footer Information and Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          {/* 1. Institutional Identity (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/icar.png"
                alt="ICAR Emblem"
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-11 w-auto object-contain brightness-110"
              />
              <img
                src="/assets/NIFMD new logo.jpg"
                alt="ICAR-NIFMD Logo"
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-11 w-auto object-contain rounded-xs"
              />
              <div>
                <h3 className="font-serif text-white text-base font-bold tracking-tight leading-tight">
                  ICAR–NIFMD
                </h3>
                <p className="text-teal-400 font-mono text-[11px] font-medium tracking-tight">
                  Biostatistics and Bioinformatics Facility
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              A centralized institutional facility providing biostatistics, bioinformatics, computational biology, statistical consulting and research tools for animal science and infectious disease epidemiology.
            </p>

            <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          {/* 2. Navigation Matrix (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-slate-200 uppercase tracking-wider text-[11px] font-semibold border-b border-navy-800 pb-2 flex items-center gap-1.5">
              <span>Navigation</span>
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
              {navigationLinks.map((item) => (
                <li key={item.sectionId}>
                  <a
                    href={`#${item.sectionId}`}
                    onClick={(e) => handleLinkClick(item.sectionId, e)}
                    className="hover:text-teal-300 transition-colors inline-flex items-center gap-1 text-slate-300 py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded-xs"
                  >
                    <ChevronRight className="w-2.5 h-2.5 text-slate-600 shrink-0" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Institutional Coordinates & Placeholders (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-slate-200 uppercase tracking-wider text-[11px] font-semibold border-b border-navy-800 pb-2">
              <span>Institutional Information</span>
            </h3>
            
            <div className="space-y-2.5 text-xs">
              {/* Address Placeholder / Coordinates */}
              <div className="flex items-start gap-2">
                <Building2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 text-[11px] leading-tight">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">Address:</span>
                  <span>ICAR-NIFMD, Arugul-Jatni Road, Bhubaneswar – 752050, Odisha, India</span>
                </div>
              </div>

              {/* Official Email Placeholder */}
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">Official Email:</span>
                  <a
                    href="mailto:samarendra.das@icar.gov.in"
                    className="text-teal-300 hover:text-teal-200 hover:underline font-mono text-[10.5px]"
                  >
                    samarendra.das@icar.gov.in
                  </a>
                </div>
              </div>

              {/* Phone Placeholder */}
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">Phone:</span>
                  <span className="text-slate-400 italic text-[10.5px] font-mono">
                    [Institutional telephone / extension to be added]
                  </span>
                </div>
              </div>

              {/* Official Website */}
              <div className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">Official Website:</span>
                  <a
                    href="https://nifmd.icar.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-teal-200 hover:underline font-mono text-[10.5px] inline-flex items-center gap-1"
                  >
                    <span>nifmd.icar.gov.in</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Visitor Statistics Visual Structure (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-mono text-slate-200 uppercase tracking-wider text-[11px] font-semibold border-b border-navy-800 pb-2 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-teal-400" aria-hidden="true" />
              <span>Visitor Statistics</span>
            </h3>

            {/* Visual structure for visitor statistics without inventing numbers */}
            <div className="bg-navy-900/90 border border-navy-800 rounded p-3 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Traffic Telemetry</span>
                <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" title="Ready for analytics integration" />
              </div>

              {/* Counter Display Frame (Zero invented numbers) */}
              <div className="bg-navy-950 p-2 rounded border border-navy-800/80 text-center font-mono">
                {VISITOR_ANALYTICS_CONFIG.endpointConfigured ? (
                  <span className="text-teal-300 font-bold tracking-widest text-sm">
                    {String(VISITOR_ANALYTICS_CONFIG.totalVisitors || 0).padStart(6, '0')}
                  </span>
                ) : (
                  <div className="space-y-1">
                    <div className="flex justify-center gap-1 text-slate-500 font-bold text-xs tracking-wider">
                      <span className="px-1 py-0.5 bg-navy-900 rounded-xs border border-navy-800">-</span>
                      <span className="px-1 py-0.5 bg-navy-900 rounded-xs border border-navy-800">-</span>
                      <span className="px-1 py-0.5 bg-navy-900 rounded-xs border border-navy-800">-</span>
                      <span className="px-1 py-0.5 bg-navy-900 rounded-xs border border-navy-800">-</span>
                      <span className="px-1 py-0.5 bg-navy-900 rounded-xs border border-navy-800">-</span>
                      <span className="px-1 py-0.5 bg-navy-900 rounded-xs border border-navy-800">-</span>
                    </div>
                    <span className="text-[9px] text-slate-500 block leading-tight">
                      [Integration Point: Analytics API]
                    </span>
                  </div>
                )}
              </div>

              <div className="text-[9.5px] text-slate-400 leading-tight">
                Structure configured for NIC / Matomo institutional visitor tracking hook.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Institutional Legal & Policy Sub-bar */}
      <div className="border-t border-navy-900 bg-black/50 py-3.5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[10.5px] sm:text-[11px] text-slate-400">
          
          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-slate-300 font-semibold">ICAR–NIFMD</span>
            <span>&bull; Biostatistics and Bioinformatics Facility. All rights reserved.</span>
          </div>

          {/* Institutional / Privacy Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 sm:gap-3 text-[10px] sm:text-[10.5px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-slate-500">
              <Lock className="w-3 h-3 text-slate-500" aria-hidden="true" />
              <span>Institutional Portal</span>
            </span>
            <span aria-hidden="true">&bull;</span>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact');
              }}
              className="hover:text-teal-300 transition-colors underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded-xs"
            >
              Consultation Disclaimer
            </button>
            <span aria-hidden="true">&bull;</span>
            <a
              href="https://nifmd.icar.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded-xs"
            >
              <ShieldCheck className="w-3 h-3 text-slate-500" aria-hidden="true" />
              <span>DARE / ICAR Mandate</span>
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

import React from 'react';

export interface SectionTransitionDividerProps {
  marker: string;
  label: string;
  coordinates?: string;
  variant?: 'light' | 'dark';
}

export const SectionTransitionDivider: React.FC<SectionTransitionDividerProps> = ({
  marker,
  label,
  coordinates = '20.2961°N, 85.8245°E // ICAR-NIFMD',
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 select-none" 
      aria-hidden="true"
    >
      <div className="flex items-center gap-3">
        {/* Left thin hairline data conduit with animated SVG pulse */}
        <div className="flex-1 relative flex items-center">
          <div 
            className={`w-full h-[1px] ${
              isDark ? 'bg-navy-800' : 'bg-slate-200'
            }`} 
          />
          <svg 
            className="absolute inset-0 w-full h-[3px] pointer-events-none" 
            preserveAspectRatio="none"
          >
            <line 
              x1="0" 
              y1="1.5" 
              x2="100%" 
              y2="1.5" 
              stroke={isDark ? '#2DD4BF' : '#2563EB'} 
              strokeWidth="1.5" 
              className="animate-data-stream opacity-40" 
            />
          </svg>
        </div>

        {/* Center Scientific Marker Badge */}
        <div 
          className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-xs border font-mono text-[9px] sm:text-[10px] tracking-wider uppercase max-w-[calc(100vw-3rem)] overflow-hidden shrink-0 ${
            isDark
              ? 'bg-navy-900 border-navy-800 text-slate-300'
              : 'bg-white border-slate-200 text-slate-600 shadow-xs'
          }`}
        >
          {/* Diamond node */}
          <span 
            className={`w-1.5 h-1.5 rotate-45 shrink-0 ${
              isDark ? 'bg-teal-400' : 'bg-sci-600'
            }`} 
          />
          
          <span className="font-bold text-navy-950 dark:text-white shrink-0">
            [{marker}]
          </span>
          <span className="font-semibold truncate sm:whitespace-normal">
            {label}
          </span>
          <span className="text-slate-400 hidden md:inline shrink-0">
            | {coordinates}
          </span>
        </div>

        {/* Right thin hairline data conduit with animated SVG pulse */}
        <div className="flex-1 relative flex items-center">
          <div 
            className={`w-full h-[1px] ${
              isDark ? 'bg-navy-800' : 'bg-slate-200'
            }`} 
          />
          <svg 
            className="absolute inset-0 w-full h-[3px] pointer-events-none" 
            preserveAspectRatio="none"
          >
            <line 
              x1="0" 
              y1="1.5" 
              x2="100%" 
              y2="1.5" 
              stroke={isDark ? '#2DD4BF' : '#2563EB'} 
              strokeWidth="1.5" 
              className="animate-data-stream opacity-40" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

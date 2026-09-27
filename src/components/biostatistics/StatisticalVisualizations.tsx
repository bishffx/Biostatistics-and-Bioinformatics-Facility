import React from 'react';

export interface VisualProps {
  activeId: string;
}

export const StatisticalVisualizations: React.FC<VisualProps> = ({ activeId }) => {
  return (
    <div className="relative w-full min-h-[330px] sm:min-h-[400px] h-[340px] xs:h-[370px] sm:h-[420px] bg-navy-950 rounded-sm border border-navy-800 p-3.5 sm:p-5 overflow-hidden flex flex-col justify-between select-none font-sans">
      {/* Schematic Watermark / Scientific Classification */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono border-b border-navy-800/80 pb-2.5 sm:pb-3 z-10">
        <div className="flex items-center gap-2 text-teal-400">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
          <span className="truncate">STATISTICAL METHODOLOGY SCHEMATIC</span>
        </div>
        <div className="text-slate-400 shrink-0">
          [Illustrative Model &bull; BBF-NIFMD]
        </div>
      </div>

      {/* Interactive Visualization Display */}
      <div className="relative flex-1 flex items-center justify-center my-2">
        {/* Background subtle computational coordinate grid */}
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stat-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#94A3B8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stat-grid)" />
        </svg>

        {/* 01: Experimental Study Design Schema */}
        {activeId === 'design' && (
          <div className="w-full max-w-md h-full flex flex-col justify-center animate-fade-in">
            <svg 
              viewBox="0 0 400 240" 
              className="w-full h-auto drop-shadow-md"
              role="img"
              aria-label="Randomized block design and power optimization frontier schematic"
            >
              {/* Axes */}
              <line x1="40" y1="200" x2="380" y2="200" stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="200" stroke="#334155" strokeWidth="1.5" />
              <text x="380" y="215" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end">Factor Levels (Treatment / Dose)</text>
              <text x="35" y="20" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end" transform="rotate(-90 35,20)">Statistical Power (1-β)</text>

              {/* Statistical Power Threshold line */}
              <line x1="40" y1="70" x2="380" y2="70" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 4" opacity="0.8" className="animate-data-stream" />
              <text x="375" y="65" fill="#F59E0B" fontSize="9" fontFamily="monospace" textAnchor="end">Power Threshold = 0.80</text>

              {/* Power curves for varying sample sizes n=20, n=50, n=100 */}
              <path d="M 40 190 Q 150 170 240 100 T 380 45" fill="none" stroke="#2DD4BF" strokeWidth="2.5" />
              <path d="M 40 195 Q 180 185 270 130 T 380 75" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeDasharray="4 4" className="animate-data-stream" />
              <path d="M 40 198 Q 220 195 300 160 T 380 115" fill="none" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="2 4" />

              {/* Factorial Blocks / Randomization groups */}
              <g transform="translate(60, 110)">
                <rect x="0" y="0" width="45" height="35" fill="rgba(30, 64, 175, 0.4)" stroke="#60A5FA" strokeWidth="1" rx="2" />
                <text x="22" y="22" fill="#E2E8F0" fontSize="10" fontFamily="monospace" textAnchor="middle">Block A</text>
              </g>
              <g transform="translate(120, 95)">
                <rect x="0" y="0" width="45" height="35" fill="rgba(15, 118, 110, 0.4)" stroke="#2DD4BF" strokeWidth="1" rx="2" />
                <text x="22" y="22" fill="#E2E8F0" fontSize="10" fontFamily="monospace" textAnchor="middle">Block B</text>
              </g>
              <g transform="translate(180, 80)">
                <rect x="0" y="0" width="45" height="35" fill="rgba(217, 119, 6, 0.3)" stroke="#F59E0B" strokeWidth="1" rx="2" />
                <text x="22" y="22" fill="#E2E8F0" fontSize="10" fontFamily="monospace" textAnchor="middle">Block C</text>
              </g>

              {/* Point Markers on optimal power design with subtle pulse */}
              <circle cx="240" cy="100" r="4.5" fill="#2DD4BF" stroke="#042F2E" strokeWidth="2" className="animate-node-pulse" />
              <circle cx="310" cy="65" r="4.5" fill="#2DD4BF" stroke="#042F2E" strokeWidth="2" className="animate-node-pulse" />
            </svg>
            <div className="text-center font-mono text-[10px] text-slate-400 mt-2">
              Schema: Randomized Block Design &amp; Power Optimization Frontier
            </div>
          </div>
        )}

        {/* 02: Surveillance & Sampling Schema */}
        {activeId === 'surveillance' && (
          <div className="w-full max-w-md h-full flex flex-col justify-center animate-fade-in">
            <svg 
              viewBox="0 0 400 240" 
              className="w-full h-auto drop-shadow-md"
              role="img"
              aria-label="Two-stage cluster sampling and sero-prevalence interval estimation schematic"
            >
              {/* Axes */}
              <line x1="40" y1="200" x2="380" y2="200" stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="200" stroke="#334155" strokeWidth="1.5" />
              <text x="380" y="215" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end">Strata / Geospatial Clusters</text>
              <text x="35" y="20" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end" transform="rotate(-90 35,20)">Sero-Prevalence Rate (%)</text>

              {/* 95% Confidence Interval error bands */}
              <path d="M 60 170 Q 140 140 220 90 T 360 60 L 360 110 Q 220 140 140 180 T 60 190 Z" fill="rgba(45, 212, 191, 0.12)" />

              {/* Mean Sero-prevalence trendline */}
              <path d="M 60 180 Q 140 155 220 115 T 360 85" fill="none" stroke="#2DD4BF" strokeWidth="2.5" />

              {/* Stratified Sample Points with Error Bars */}
              {[
                { x: 80, y: 175, err: 16, label: 'Cluster 1' },
                { x: 150, y: 150, err: 22, label: 'Cluster 2' },
                { x: 220, y: 115, err: 26, label: 'Livestock' },
                { x: 290, y: 95, err: 20, label: 'Interface' },
                { x: 350, y: 85, err: 18, label: 'Wildlife' },
              ].map((pt, idx) => (
                <g key={idx}>
                  {/* Whisker bar */}
                  <line x1={pt.x} y1={pt.y - pt.err} x2={pt.x} y2={pt.y + pt.err} stroke="#60A5FA" strokeWidth="1.5" />
                  <line x1={pt.x - 5} y1={pt.y - pt.err} x2={pt.x + 5} y2={pt.y - pt.err} stroke="#60A5FA" strokeWidth="1.5" />
                  <line x1={pt.x - 5} y1={pt.y + pt.err} x2={pt.x + 5} y2={pt.y + pt.err} stroke="#60A5FA" strokeWidth="1.5" />
                  {/* Point */}
                  <circle cx={pt.x} cy={pt.y} r="4.5" fill="#3B82F6" stroke="#0F172A" strokeWidth="1.5" className="animate-node-pulse" />
                  <text x={pt.x} y={pt.y + pt.err + 12} fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">{pt.label}</text>
                </g>
              ))}

              {/* Interface dividing boundary */}
              <line x1="255" y1="30" x2="255" y2="195" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" className="animate-data-stream" />
              <text x="250" y="42" fill="#F59E0B" fontSize="8" fontFamily="monospace" textAnchor="end">Wildlife-Livestock Boundary</text>
            </svg>
            <div className="text-center font-mono text-[10px] text-slate-400 mt-2">
              Schema: Two-Stage Cluster Sampling &amp; Sero-Prevalence Interval Estimation
            </div>
          </div>
        )}

        {/* 03: Infectious Disease Modelling & ROC Diagnostics */}
        {activeId === 'modelling' && (
          <div className="w-full max-w-md h-full flex flex-col justify-center animate-fade-in">
            <svg 
              viewBox="0 0 400 240" 
              className="w-full h-auto drop-shadow-md"
              role="img"
              aria-label="ROC curve diagnostic evaluation and compartmental disease transmission dynamics schematic"
            >
              {/* Axes */}
              <line x1="40" y1="200" x2="380" y2="200" stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="200" stroke="#334155" strokeWidth="1.5" />
              <text x="380" y="215" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end">1 - Specificity (False Positive)</text>
              <text x="35" y="20" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end" transform="rotate(-90 35,20)">Sensitivity (True Positive)</text>

              {/* Diagonal Chance line (AUC = 0.50) */}
              <line x1="40" y1="200" x2="360" y2="40" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
              <text x="210" y="130" fill="#64748B" fontSize="9" fontFamily="monospace" transform="rotate(-27 210,130)">Chance Baseline (AUC=0.50)</text>

              {/* ROC Curve (AUC ≈ 0.94) */}
              <path 
                d="M 40 200 C 50 100, 90 48, 360 40" 
                fill="none" 
                stroke="#2DD4BF" 
                strokeWidth="2.5" 
              />

              {/* Secondary Diagnostic Test (AUC ≈ 0.81) */}
              <path 
                d="M 40 200 C 80 140, 160 85, 360 40" 
                fill="none" 
                stroke="#60A5FA" 
                strokeWidth="1.8" 
                strokeDasharray="4 4"
                className="animate-data-stream"
              />

              {/* Optimal Cutoff (Youden Index J) with pulse */}
              <circle cx="85" cy="62" r="5" fill="#F59E0B" stroke="#042F2E" strokeWidth="2" className="animate-node-pulse" />
              <line x1="85" y1="62" x2="85" y2="200" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="40" y1="62" x2="85" y2="62" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 2" />
              <text x="95" y="60" fill="#F59E0B" fontSize="9" fontFamily="monospace">Optimal Cutoff (Sens: 0.92, Spec: 0.86)</text>

              {/* Compartmental Transmission Curve Inset */}
              <g transform="translate(230, 120)">
                <rect x="0" y="0" width="135" height="70" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" strokeWidth="1" rx="2" />
                <text x="8" y="14" fill="#94A3B8" fontSize="8" fontFamily="monospace">Transmission Dynamics</text>
                {/* Susceptible */}
                <path d="M 10 25 Q 50 35 125 58" fill="none" stroke="#60A5FA" strokeWidth="1.2" />
                {/* Infectious Peak */}
                <path d="M 10 60 Q 50 20 85 45 T 125 60" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                {/* Recovered */}
                <path d="M 10 60 Q 60 55 125 28" fill="none" stroke="#10B981" strokeWidth="1.2" />
              </g>
            </svg>
            <div className="text-center font-mono text-[10px] text-slate-400 mt-2">
              Schema: Diagnostic ROC Analysis &amp; S-I-R Compartmental Transmission Dynamics
            </div>
          </div>
        )}

        {/* 04: Clinical Trials & Vaccine Quality Schema */}
        {activeId === 'clinical' && (
          <div className="w-full max-w-md h-full flex flex-col justify-center animate-fade-in">
            <svg 
              viewBox="0 0 400 240" 
              className="w-full h-auto drop-shadow-md"
              role="img"
              aria-label="Two-sample hypothesis testing and vaccine quality control power curve schematic"
            >
              {/* Axes */}
              <line x1="40" y1="200" x2="380" y2="200" stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="200" stroke="#334155" strokeWidth="1.5" />
              <text x="380" y="215" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end">Antibody Titer (Log10)</text>
              <text x="35" y="20" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end" transform="rotate(-90 35,20)">Probability Density f(x)</text>

              {/* Protective Titer Cutoff Line with animated stream */}
              <line x1="210" y1="30" x2="210" y2="200" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3 3" className="animate-data-stream" />
              <text x="205" y="42" fill="#F59E0B" fontSize="9" fontFamily="monospace" textAnchor="end">Protective Titer Threshold</text>

              {/* Control Group Gaussian Distribution (Unvaccinated) */}
              <path 
                d="M 60 200 Q 130 195 140 100 Q 150 195 220 200 Z" 
                fill="rgba(100, 116, 139, 0.2)" 
                stroke="#94A3B8" 
                strokeWidth="1.5" 
              />
              <text x="140" y="90" fill="#94A3B8" fontSize="9" fontFamily="monospace" textAnchor="middle">Control (μ0)</text>

              {/* Vaccinated Group Gaussian Distribution (Vaccine Quality QC) */}
              <path 
                d="M 180 200 Q 260 195 270 55 Q 280 195 360 200 Z" 
                fill="rgba(45, 212, 191, 0.2)" 
                stroke="#2DD4BF" 
                strokeWidth="2.5" 
              />
              <text x="270" y="45" fill="#2DD4BF" fontSize="9" fontFamily="monospace" textAnchor="middle">Vaccinated (μ1)</text>

              {/* Shift Delta / Effect Size Indicator */}
              <line x1="140" y1="125" x2="270" y2="125" stroke="#60A5FA" strokeWidth="1" />
              <circle cx="140" cy="125" r="3" fill="#60A5FA" />
              <circle cx="270" cy="125" r="3" fill="#60A5FA" className="animate-node-pulse" />
              <text x="205" y="118" fill="#60A5FA" fontSize="8" fontFamily="monospace" textAnchor="middle">Effect Size (Cohen's d)</text>

              {/* Sample size adequacy box */}
              <g transform="translate(55, 30)">
                <rect x="0" y="0" width="105" height="38" fill="rgba(30, 41, 59, 0.8)" stroke="#475569" strokeWidth="1" rx="2" />
                <text x="8" y="16" fill="#CBD5E1" fontSize="8" fontFamily="monospace">α = 0.05, Power = 90%</text>
                <text x="8" y="28" fill="#2DD4BF" fontSize="8" fontFamily="monospace">N Adequate per Arm</text>
              </g>
            </svg>
            <div className="text-center font-mono text-[10px] text-slate-400 mt-2">
              Schema: Two-Sample Hypothesis Testing &amp; Vaccine Quality Control Power Curve
            </div>
          </div>
        )}
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="pt-2.5 sm:pt-3 border-t border-navy-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="text-teal-400 font-semibold shrink-0">Active Module:</span>
          <span className="text-slate-200 truncate">
            {activeId === 'design' && 'Experimental Study Design & Power Frontier'}
            {activeId === 'surveillance' && 'Cluster Sampling & Sero-Surveillance Estimation'}
            {activeId === 'modelling' && 'Epidemiological Curves & ROC Diagnostic Cutoffs'}
            {activeId === 'clinical' && 'Clinical Vaccine Trial Sample Size Determination'}
          </span>
        </div>
        <div className="hidden sm:block text-slate-500 shrink-0">
          R / Python / PASS Compatible
        </div>
      </div>
    </div>
  );
};

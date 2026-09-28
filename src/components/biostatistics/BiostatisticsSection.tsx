import React, { useState, useRef } from 'react';
import { StatisticalVisualizations } from './StatisticalVisualizations';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  scopeSummary: string;
  deliverables: string[];
  scientificMethods: string[];
}

export const BIOSTATISTICS_SERVICES: ServiceItem[] = [
  {
    id: 'design',
    num: '01',
    title: 'Experimental Study Design',
    subtitle: 'Rigorous Frameworks & Grant Development',
    scopeSummary:
      'Statistical expertise in the design of experimental laboratory assays and field studies, including statistical sections for competitive research grant proposals and formal pre-analysis planning.',
    deliverables: [
      'Experimental study design (CRD, RCBD, Factorial, Split-plot)',
      'Research proposal grant writing & statistical sections for manuscripts',
      'Data pre-processing plans for interim reviews & final analysis',
      'Mentoring, training, and institutional statistical consultation',
    ],
    scientificMethods: [
      'Factorial blocking & randomization frameworks',
      'Prospective statistical power thresholding',
      'Confounder control & covariate adjustment',
    ],
  },
  {
    id: 'surveillance',
    num: '02',
    title: 'Surveillance & Sampling',
    subtitle: 'Population Sero-Surveillance & Interface Analytics',
    scopeSummary:
      'Framing sampling design and high-precision parameter estimation for sero-surveillance and sero-monitoring of infectious animal diseases in livestock populations and the wildlife-livestock interface.',
    deliverables: [
      'Sampling design & sample size calculation for sero-surveillance programs',
      'Parameter estimation for sero-monitoring studies (herd immunity thresholds)',
      'Sero-surveillance and monitoring parameter estimation in wildlife-livestock interface',
      'Multi-stage cluster sampling & strata weighting with finite population correction',
    ],
    scientificMethods: [
      'Two-stage stratified random cluster sampling',
      'Sero-prevalence rate estimation with finite population correction',
      'Spatial-temporal disease survey weighting',
    ],
  },
  {
    id: 'modelling',
    num: '03',
    title: 'Infectious Disease Modelling',
    subtitle: 'Forecasting Dynamics & Diagnostic Validation',
    scopeSummary:
      'Mathematical epidemiology and predictive modeling for infectious diseases, coupled with comprehensive ROC curve evaluation of sensitivity and specificity for novel veterinary diagnostics.',
    deliverables: [
      'Mathematical modeling of transmission dynamics',
      'Infectious disease incidence forecasting',
      'State-space models for infectious disease epidemiology',
      'ROC diagnostic evaluation (sensitivity, specificity, AUC) & power analysis',
    ],
    scientificMethods: [
      'Compartmental models (SIR / SEIR systems)',
      'State-space time-series & epidemiological forecasting',
      'Parametric & non-parametric ROC curve analysis',
    ],
  },
  {
    id: 'clinical',
    num: '04',
    title: 'Clinical Trials & Vaccine Quality',
    subtitle: 'Efficacy Trials & Quality Control Standards',
    scopeSummary:
      'Methodology for animal vaccine and drug clinical trials, including rigorous sample size determination and statistical power computation for vaccine batch release and quality control studies.',
    deliverables: [
      'Sample size determination for vaccine quality control studies',
      'Statistical power calculations across trial arms',
      'Clinical study design for vaccine and drug trials',
      'Batch-to-batch consistency & potency verification',
    ],
    scientificMethods: [
      'Two-arm & multi-arm superiority/non-inferiority margins',
      'Log-titer antibody geometric mean titer (GMT) comparison',
      'Type I (α) and Type II (β) error budget balancing',
    ],
  },
];

export const BiostatisticsSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('design');
  const serviceButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const activeService = 
    BIOSTATISTICS_SERVICES.find((s) => s.id === activeServiceId) || BIOSTATISTICS_SERVICES[0];

  // Accessible keyboard navigation across services (Arrow Up / Down)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % BIOSTATISTICS_SERVICES.length;
      const nextId = BIOSTATISTICS_SERVICES[nextIndex].id;
      setActiveServiceId(nextId);
      serviceButtonRefs.current[nextId]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + BIOSTATISTICS_SERVICES.length) % BIOSTATISTICS_SERVICES.length;
      const prevId = BIOSTATISTICS_SERVICES[prevIndex].id;
      setActiveServiceId(prevId);
      serviceButtonRefs.current[prevId]?.focus();
    }
  };

  return (
    <section 
      className="py-16 lg:py-24 bg-surface-ground border-b border-slate-200/90 font-sans"
      aria-labelledby="biostatistics-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sci-700">
              Institutional Expertise
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-sans text-slate-500">
              Biostatistics Facility Mandate
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 
              id="biostatistics-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight"
            >
              Biostatistics Facility
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Biostatistical methods for experimental design, surveillance, diagnostics and infectious disease research.
            </p>
          </div>
        </div>

        {/* SOPHISTICATED INTERACTIVE INDEX & SCIENTIFIC DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Large Vertical Service Index (01 - 04) */}
          <div 
            className="lg:col-span-5 space-y-2"
            role="tablist"
            aria-label="Biostatistics service catalog"
            aria-orientation="vertical"
          >
            {BIOSTATISTICS_SERVICES.map((service, index) => {
              const isActive = service.id === activeServiceId;

              return (
                <button
                  key={service.id}
                  ref={(el) => (serviceButtonRefs.current[service.id] = el)}
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveServiceId(service.id)}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`w-full text-left p-5 rounded-sm transition-all duration-200 border group focus:outline-none focus:ring-2 focus:ring-sci-500 ${
                    isActive
                      ? 'bg-white border-sci-700 shadow-academic text-slate-900 border-l-4 border-l-sci-700'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-3">
                        <span 
                          className={`font-mono text-xs font-bold tracking-widest ${
                            isActive ? 'text-sci-700' : 'text-slate-400 group-hover:text-sci-700'
                          }`}
                        >
                          {service.num}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className={`text-lg font-serif font-bold transition-colors ${
                        isActive ? 'text-navy-950' : 'text-slate-800 group-hover:text-navy-950'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <ChevronRight 
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 mt-1 ${
                        isActive ? 'text-sci-700 translate-x-1' : 'text-slate-300 group-hover:text-slate-400'
                      }`}
                    />
                  </div>

                  {/* Expandable brief description on mobile/hover */}
                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 font-sans leading-relaxed">
                      {service.scopeSummary}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: Synchronized Scientific Visualization & Scope Details */}
          <div 
            className="lg:col-span-7 space-y-6"
            id={`panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.id}`}
          >
            {/* 1. Abstract Statistical Visual */}
            <StatisticalVisualizations activeId={activeServiceId} />

            {/* 2. Structured Deliverables & Methodological Framework */}
            <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-7 shadow-subtle space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-sci-700 font-semibold">
                    Service Scope &amp; Deliverables
                  </div>
                  <h4 className="text-xl font-serif font-bold text-navy-950 mt-0.5">
                    {activeService.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-sci-600" />
                  <span>Module {activeService.num} of 04</span>
                </div>
              </div>

              {/* Verified Mandate Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Consultation Focus Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 p-2.5 rounded bg-surface-ground border border-slate-100 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology Rigor Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-slate-400">Methodology:</span>
                  {activeService.scientificMethods.map((m, mIdx) => (
                    <span 
                      key={mIdx} 
                      className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[11px] text-slate-700 font-sans border border-slate-200"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono text-[10px] text-teal-700 font-medium">
                    ICAR-NIFMD Validated
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

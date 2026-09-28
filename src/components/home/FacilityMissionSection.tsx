import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface FacilityMissionSectionProps {
  onNavigateCapability?: (capabilityId: string) => void;
}

export const FacilityMissionSection: React.FC<FacilityMissionSectionProps> = ({
  onNavigateCapability,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px 0px', threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      num: '01',
      id: 'biostatistics',
      title: 'Biostatistics',
      tagline: 'Experimental Rigor & Disease Modeling',
      description:
        'Framing sampling designs and parameter estimation for sero-surveillance and sero-monitoring. Delivering statistical consultation on study design, grant proposals, ROC diagnostics sensitivity/specificity, and sample size calculations for vaccine quality control.',
      focusAreas: [
        'Sero-surveillance sampling design',
        'ROC & diagnostic power calculations',
        'Infectious disease epidemiological modeling',
        'Clinical trial design for vaccines & drugs',
      ],
    },
    {
      num: '02',
      id: 'bioinformatics',
      title: 'Bioinformatics',
      tagline: 'Multi-Omics & In-Silico Vaccines',
      description:
        'End-to-end data processing pipelines for Next-Generation Sequencing (RNA-seq, scRNA-seq, snATAC-seq), multi-omics integration, and machine learning models for virus serotype prediction and multi-epitope subunit vaccine design.',
      focusAreas: [
        'Single-cell RNA-seq gene network modeling',
        'FMDV VP1 serotype & lineage classification',
        '3D macromolecular docking & immune simulation',
        'Artificial intelligence in veterinary omics',
      ],
    },
    {
      num: '03',
      id: 'tools',
      title: 'Computational Tools',
      tagline: 'Institutional Web Servers & Algorithms',
      description:
        'Developing and hosting dedicated web servers on the ICAR-NIFMD domain along with open-source R packages published on CRAN and GitHub to support national animal disease control programs.',
      focusAreas: [
        'FMDSeroSurv & SeroMonitor web platforms',
        'FMDVSerPred & MolEpidPred algorithms',
        'CRAN R packages: dhga, BootMRMR, GSAQ',
        'High-performance computing workflows',
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-ground py-20 lg:py-28 border-b border-slate-200/90 overflow-hidden font-sans"
      aria-label="Institutional Role & Mission"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Eyebrow */}
        <div 
          className={`flex items-center gap-3 mb-6 transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="h-[1px] w-8 bg-sci-600 inline-block" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sci-700">
            Institutional Purpose &amp; Scientific Mandate
          </span>
        </div>

        {/* EDITORIAL TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 lg:pb-24 border-b border-slate-200">
          
          {/* Left: Large Editorial Statement */}
          <div 
            className={`lg:col-span-5 space-y-4 transition-all duration-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold text-navy-950 tracking-tight leading-[1.18]">
              Where Statistics Meets Computational Biology
            </h2>
            <div className="h-[2px] w-16 bg-teal-600/80 mt-4" />
          </div>

          {/* Right: Detailed Explanatory Text */}
          <div 
            className={`lg:col-span-7 space-y-5 text-slate-700 leading-relaxed font-sans text-base sm:text-lg transition-all duration-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <p className="font-medium text-slate-900 text-base sm:text-xl leading-relaxed">
              The Biostatistics and Bioinformatics Facility (BBF) of ICAR-NIFMD is a shared institutional resource for biostatistics and bioinformatics consultancy, collaborative research, and novel computational tools for animal science and infectious disease epidemiology, particularly Foot-and-Mouth Disease.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our dedicated scientific team develops innovative statistical methods, machine learning architectures, and bioinformatics pipelines to address urgent problems in veterinary medicine. We provide quantitative support spanning field sero-surveillance, vaccine trial design, high-throughput transcriptomics, and multi-omics data integration to researchers across ICAR, academia, and animal health institutes nationwide.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sci-600" />
                ICAR-NIFMD Shared Resource
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                Epidemiological Modeling &amp; Omics
              </span>
            </div>
          </div>
        </div>

        {/* THREE CAPABILITY INDICATORS */}
        <div className="pt-16 lg:pt-20">
          
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                Core Capability Architecture
              </h3>
              <p className="text-sm font-serif font-medium text-slate-900 mt-1">
                Integrated Pillars of the Facility
              </p>
            </div>

            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              [ 01 — 03 ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {capabilities.map((cap) => {
              return (
                <div
                  key={cap.id}
                  className={`group relative flex flex-col justify-between pt-6 border-t-2 border-slate-200 hover:border-sci-700 transition-all duration-300 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Index & Tagline */}
                    <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                      <span className="font-mono text-sm sm:text-base font-bold text-sci-700 tracking-wider">
                        {cap.num}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {cap.tagline}
                      </span>
                    </div>

                    {/* Capability Title */}
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 group-hover:text-sci-700 transition-colors">
                      {cap.title}
                    </h4>

                    {/* Explanatory Paragraph */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {cap.description}
                    </p>

                    {/* Scientific Focus Points */}
                    <ul className="space-y-2 pt-2 text-xs text-slate-700 font-sans border-t border-slate-100">
                      {cap.focusAreas.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-sci-600 mt-1.5 shrink-0 transition-colors" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation Trigger Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    {onNavigateCapability ? (
                      <button
                        onClick={() => onNavigateCapability(cap.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-sci-700 hover:text-navy-950 transition-colors group-hover:underline focus:outline-none focus:ring-1 focus:ring-sci-500 rounded"
                      >
                        <span>Explore {cap.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    ) : (
                      <Link
                        to={`/research?tab=${cap.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-sci-700 hover:text-navy-950 transition-colors group-hover:underline focus:outline-none focus:ring-1 focus:ring-sci-500 rounded"
                      >
                        <span>Explore {cap.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

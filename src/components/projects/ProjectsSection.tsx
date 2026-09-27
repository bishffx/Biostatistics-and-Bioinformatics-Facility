import React, { useState, useMemo } from 'react';
import { 
  RESEARCH_PROJECTS_DATA, 
  FundingAgencyKey 
} from '../../data/projectsData';
import { TimelineItem } from './TimelineItem';
import { ScientificDataBackground } from '../ui/ScientificDataBackground';
import { 
  Filter, 
  Info
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedAgency, setSelectedAgency] = useState<string>('All');

  const fundingAgencies: Array<'All' | FundingAgencyKey> = [
    'All',
    'DST-SERB',
    'Government of Odisha (DST)',
    'DAHD (NADCP)',
    'ICAR-NIFMD',
  ];

  const filteredProjects = useMemo(() => {
    if (selectedAgency === 'All') return RESEARCH_PROJECTS_DATA;
    return RESEARCH_PROJECTS_DATA.filter((p) => p.agencyKey === selectedAgency);
  }, [selectedAgency]);

  return (
    <section 
      className="relative py-16 lg:py-24 bg-surface-ground border-b border-slate-200/90 font-sans overflow-hidden"
      aria-labelledby="projects-section-title"
    >
      {/* Abstract Statistical Distribution Traces Background Layer */}
      <ScientificDataBackground
        variant="mathematical"
        density="low"
        speed="slow"
        opacity={0.25}
        interactive={true}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sci-700">
              Sponsored Initiatives
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-sans text-slate-500">
              Institutional &amp; Extramural Grants
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 
              id="projects-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight"
            >
              Research Programs &amp; Funded Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Showcase ongoing and completed research initiatives supported by institutional and government funding bodies.
            </p>
          </div>
        </div>

        {/* FUNDING ORGANIZATION FILTER BAR */}
        <div className="bg-white p-4 sm:p-5 rounded-sm border border-slate-200 shadow-subtle space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
              <Filter className="w-3.5 h-3.5 text-sci-600" />
              <span>Filter by Funding Agency:</span>
            </div>

            {/* Agency Pills */}
            <div 
              className="flex flex-wrap items-center gap-1.5 pb-1 md:pb-0"
              role="radiogroup"
              aria-label="Filter research projects by funding body"
            >
              {fundingAgencies.map((agency) => {
                const isSelected = selectedAgency === agency;

                return (
                  <button
                    key={agency}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedAgency(agency)}
                    className={`px-3 py-1.5 min-h-[38px] flex items-center text-xs font-medium rounded transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 ${
                      isSelected
                        ? 'bg-navy-900 text-white font-semibold shadow-subtle'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{agency}</span>
                    <span className="ml-1.5 opacity-60 text-[10px] font-mono">
                      {agency === 'All' 
                        ? RESEARCH_PROJECTS_DATA.length 
                        : RESEARCH_PROJECTS_DATA.filter(p => p.agencyKey === agency).length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1 text-xs text-slate-500 font-mono">
            <span>
              Displaying <strong className="text-slate-900">{filteredProjects.length}</strong> active research grants
            </span>
            <span className="text-[11px] text-slate-400">
              National Agricultural Research System (NARS)
            </span>
          </div>
        </div>

        {/* ELEGANT RESEARCH TIMELINE / PROJECT ARCHIVE */}
        <div className="relative border-l-2 border-slate-200 ml-2 xs:ml-4 sm:ml-6 md:ml-8 pl-4 xs:pl-6 sm:pl-8 space-y-8">
          {filteredProjects.map((project) => (
            <TimelineItem key={project.id} project={project} />
          ))}
        </div>

        {/* Institutional Disclosure Notice on Extensible Data */}
        <div className="p-4 rounded-sm bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3 font-sans">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-slate-800">Institutional Grant Records:</span> Research programs are funded through competitive grants awarded by national and state science agencies (DST-SERB, Govt. of Odisha, DAHD, and ICAR). Detailed fiscal allocations, sanction orders, and grant documentation will be populated directly from administrative files upon release.
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PiProfileCard } from './PiProfileCard';
import { FellowCard } from './FellowCard';
import { StudentDissertationTable } from './StudentDissertationTable';
import { RESEARCH_FELLOWS_DATA } from '../../data/teamData';
import { SectionHeader } from '../ui/SectionHeader';
import { Users, BookOpen, Sparkles, Filter } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [fellowFilter, setFellowFilter] = useState<'All' | 'Active' | 'Alumni'>('All');

  const filteredFellows = fellowFilter === 'All'
    ? RESEARCH_FELLOWS_DATA
    : RESEARCH_FELLOWS_DATA.filter((f) => f.status === fellowFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn font-sans">
      {/* Institutional Section Header */}
      <SectionHeader
        eyebrow="Scientific Leadership & Human Capital"
        title="People Behind the Research"
        description="The Biostatistics and Bioinformatics Facility is powered by interdisciplinary researchers dedicated to statistical methodology, computational genomics, and translational disease epidemiology."
      />

      {/* 1. Principal Investigator & Facility Leadership Profile */}
      <section aria-labelledby="pi-leadership-heading" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <Sparkles className="w-4 h-4 text-sci-700" />
          <h3 id="pi-leadership-heading" className="font-serif font-bold text-lg text-navy-950">
            Principal Investigator &amp; Facility Lead
          </h3>
        </div>
        <PiProfileCard />
      </section>

      {/* 2. Research Fellows & Project Staff */}
      <section aria-labelledby="research-fellows-heading" className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-sci-700" />
            <div>
              <h3 id="research-fellows-heading" className="font-serif font-bold text-lg text-navy-950">
                Research Fellows &amp; Project Scientists
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Postgraduate fellows driving grant-funded research in single-cell transcriptomics and viral machine learning.
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded border border-slate-200 text-xs font-mono">
            <Filter className="w-3 h-3 text-slate-400 ml-1.5" />
            <button
              onClick={() => setFellowFilter('All')}
              className={`px-2.5 py-1 rounded transition-colors ${
                fellowFilter === 'All'
                  ? 'bg-navy-900 text-white font-semibold shadow-subtle'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              All ({RESEARCH_FELLOWS_DATA.length})
            </button>
            <button
              onClick={() => setFellowFilter('Active')}
              className={`px-2.5 py-1 rounded transition-colors ${
                fellowFilter === 'Active'
                  ? 'bg-navy-900 text-white font-semibold shadow-subtle'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              Active ({RESEARCH_FELLOWS_DATA.filter((f) => f.status === 'Active').length})
            </button>
            <button
              onClick={() => setFellowFilter('Alumni')}
              className={`px-2.5 py-1 rounded transition-colors ${
                fellowFilter === 'Alumni'
                  ? 'bg-navy-900 text-white font-semibold shadow-subtle'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              Alumni ({RESEARCH_FELLOWS_DATA.filter((f) => f.status === 'Alumni').length})
            </button>
          </div>
        </div>

        {/* Fellows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFellows.map((fellow) => (
            <FellowCard key={fellow.id} fellow={fellow} />
          ))}
        </div>
      </section>

      {/* 3. Students / Academic Capacity Building */}
      <section aria-labelledby="dissertation-scholars-heading" className="space-y-4 pt-2">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <BookOpen className="w-4 h-4 text-sci-700" />
          <h3 id="dissertation-scholars-heading" className="font-serif font-bold text-lg text-navy-950">
            Academic Mentorship &amp; Dissertation Alumni
          </h3>
        </div>
        <StudentDissertationTable />
      </section>
    </div>
  );
};

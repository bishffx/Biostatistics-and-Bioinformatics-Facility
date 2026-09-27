import React from 'react';
import { PUBLICATIONS_DATA } from '../../data/publicationsData';
import { BarChart3, TrendingUp, BookCheck } from 'lucide-react';

export interface PublicationMetricsChartProps {
  selectedYear: string;
  onSelectYear: (year: string) => void;
}

export const PublicationMetricsChart: React.FC<PublicationMetricsChartProps> = ({
  selectedYear,
  onSelectYear,
}) => {
  // Compute authentic counts
  const yearCounts: { [year: string]: number } = {
    '2024': 0,
    '2023': 0,
    '2022': 0,
  };

  PUBLICATIONS_DATA.forEach((pub) => {
    const yr = pub.year.toString();
    if (yearCounts[yr] !== undefined) {
      yearCounts[yr]++;
    }
  });

  const maxCount = Math.max(...Object.values(yearCounts), 1);

  const venues = [
    { name: 'Nature Scientific Reports', count: 1 },
    { name: 'Current Bioinformatics', count: 2 },
    { name: 'Chemosphere', count: 2 },
    { name: 'PLoS ONE', count: 1 },
    { name: 'Biologicals', count: 1 },
    { name: 'Entropy (MDPI)', count: 1 },
    { name: 'Under Communication', count: 6 },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-sm p-5 sm:p-6 shadow-subtle font-sans">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider text-sci-700 font-semibold">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Research Output Chronology &amp; Venues</span>
          </div>
          <h4 className="text-base font-serif font-bold text-navy-950 mt-0.5">
            Institutional Publication Output Distribution
          </h4>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            Verified scientific contributions from the Biostatistics &amp; Bioinformatics Facility.
          </p>
        </div>

        {/* Aggregate Badges */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <div className="bg-surface-ground px-3 py-1.5 rounded border border-slate-200 flex items-center gap-2">
            <BookCheck className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-slate-500">Peer-Reviewed:</span>
            <span className="font-bold text-navy-950">8</span>
          </div>
          <div className="bg-surface-ground px-3 py-1.5 rounded border border-slate-200 flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-slate-500">Under Review:</span>
            <span className="font-bold text-navy-950">6</span>
          </div>
          <div className="bg-navy-900 text-white px-3 py-1.5 rounded flex items-center gap-2 shadow-subtle">
            <span className="text-teal-300">Total Tracked:</span>
            <span className="font-bold">{PUBLICATIONS_DATA.length}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5">
        {/* Left: Annual Trend Histogram (5 cols) */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="uppercase text-[10px] tracking-wider font-semibold">Annual Trajectory</span>
            <span className="text-[10px]">Click bar to filter</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {Object.entries(yearCounts).map(([yr, count]) => {
              const percentage = (count / maxCount) * 100;
              const isSelected = selectedYear === yr;

              return (
                <button
                  key={yr}
                  onClick={() => onSelectYear(selectedYear === yr ? 'All' : yr)}
                  className={`w-full text-left p-2 rounded transition-all flex items-center gap-3 border ${
                    isSelected
                      ? 'bg-navy-950 text-white border-navy-900 shadow-academic'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                  }`}
                >
                  <span className="w-12 font-bold shrink-0">{yr}</span>
                  <div className="flex-1 bg-slate-200/70 h-3 rounded-xs overflow-hidden relative">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isSelected ? 'bg-teal-400' : 'bg-sci-600'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className={`w-8 text-right font-bold ${isSelected ? 'text-teal-300' : 'text-slate-900'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Key Institutional Venues (7 cols) */}
        <div className="md:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="uppercase text-[10px] tracking-wider font-semibold">Indexed Venues</span>
            <span className="text-[10px]">Articles / Manuscripts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
            {venues.map((venue, vIdx) => (
              <div
                key={vIdx}
                className="bg-surface-ground p-2.5 rounded border border-slate-200/70 flex items-center justify-between gap-2"
              >
                <span className="text-slate-800 font-medium truncate text-[11.5px]">
                  {venue.name}
                </span>
                <span className="font-mono text-[11px] font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                  {venue.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

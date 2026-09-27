import React, { useState } from 'react';
import { ResearchFellowItem } from '../../data/teamData';
import { Calendar } from 'lucide-react';

export interface FellowCardProps {
  fellow: ResearchFellowItem;
}

export const FellowCard: React.FC<FellowCardProps> = ({ fellow }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate initials for the monogram
  const initials = fellow.name
    .replace('Mrs. ', '')
    .replace('Mr. ', '')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  const isActive = fellow.status === 'Active';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-6 rounded-sm bg-white border transition-all duration-300 flex flex-col justify-between ${
        isHovered
          ? 'border-sci-600 shadow-academic -translate-y-1'
          : 'border-slate-200 shadow-subtle'
      }`}
    >
      <div className="space-y-4">
        {/* Header: Monogram Avatar & Role Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-sm bg-navy-900 text-teal-300 font-serif font-bold text-base flex items-center justify-center border border-navy-800 shrink-0">
              {initials}
            </div>

            <div>
              <h4 className="font-serif font-bold text-base text-navy-950">
                {fellow.name}
              </h4>
              <span className="text-xs font-mono text-sci-700 font-medium">
                {fellow.designation}
              </span>
            </div>
          </div>

          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              isActive
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
          >
            {isActive ? '● Active Fellow' : 'Alumni Fellow'}
          </span>
        </div>

        {/* Project Assignment */}
        <div className="space-y-1 pt-2 border-t border-slate-100">
          <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
            Sponsored Project
          </div>
          <p className="text-xs text-slate-800 font-sans font-medium leading-relaxed">
            {fellow.projectTitle}
          </p>
        </div>

        {/* Funding Agency */}
        <div className="space-y-1">
          <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
            Funding Agency
          </div>
          <p className="text-xs text-slate-600 font-sans leading-snug">
            {fellow.fundingAgency}
          </p>
        </div>
      </div>

      {/* Card Footer: Tenure */}
      <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-1.5 text-[11px]">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{fellow.tenure}</span>
        </div>

        <span className="text-[10px] text-slate-400">
          ICAR-NIFMD BBF
        </span>
      </div>
    </div>
  );
};

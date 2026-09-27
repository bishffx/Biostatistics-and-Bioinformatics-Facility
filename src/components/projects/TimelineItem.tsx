import React, { useEffect, useRef, useState } from 'react';
import { ResearchProjectItem } from '../../data/projectsData';
import { Award, Calendar, UserCheck, ExternalLink } from 'lucide-react';

export interface TimelineItemProps {
  project: ResearchProjectItem;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If reduced motion is preferred, immediately show without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentElem = itemRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative group transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-3'
      }`}
    >
      {/* Timeline Node Marker */}
      <div
        className={`absolute -left-[25px] xs:-left-[33px] sm:-left-[41px] top-2 w-4 h-4 rounded-full bg-white border-2 transition-all duration-300 shadow-xs flex items-center justify-center ${
          isVisible
            ? 'border-teal-500 scale-110 shadow-teal-500/20 shadow-md'
            : 'border-slate-300 scale-90'
        } group-hover:scale-125`}
        aria-hidden="true"
      >
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            isVisible ? 'bg-teal-500 animate-pulse' : 'bg-slate-300'
          }`}
        />
      </div>

      {/* Project Archive Entry Card */}
      <div className="bg-white rounded-sm border border-slate-200 p-4 xs:p-5 sm:p-7 shadow-subtle group-hover:shadow-academic group-hover:border-sci-300 transition-all space-y-4">
        {/* Top Bar: Agency Badge, Duration & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-slate-100 text-sci-700">
              <Award className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-semibold text-slate-800">
              {project.fundingAgency}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.duration}</span>
            </div>

            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
              ● {project.status}
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-950 group-hover:text-sci-700 transition-colors leading-snug">
          {project.projectTitle}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
          {project.description}
        </p>

        {/* Metadata Grid */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {/* Investigator */}
          <div className="p-2.5 rounded bg-surface-ground border border-slate-100 space-y-1">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-semibold flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-sci-600" />
              <span>Principal Investigator</span>
            </div>
            <div className="font-medium text-slate-800 font-sans">
              {project.investigator}
            </div>
          </div>

          {/* Collaborators / Team */}
          <div className="p-2.5 rounded bg-surface-ground border border-slate-100 space-y-1">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-semibold">
              Affiliated Fellows &amp; Units
            </div>
            <div className="text-slate-700 font-sans leading-tight">
              {project.collaborators.join(' • ')}
            </div>
          </div>

          {/* Official Project URL / Extensible Data Placeholder */}
          <div className="p-2.5 rounded bg-surface-ground border border-slate-100 space-y-1 sm:col-span-2 lg:col-span-1">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-semibold">
              Grant Portal &amp; Documentation
            </div>
            <div>
              {project.projectUrl ? (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sci-700 hover:underline font-mono inline-flex items-center gap-1 font-medium text-[11px]"
                >
                  <span>Grant Dossier</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="font-mono text-slate-400 text-[10.5px] italic">
                  [Documentation link to be added]
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

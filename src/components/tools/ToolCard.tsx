import React, { useState } from 'react';
import { ToolItem } from '../../data/toolsData';
import { 
  ExternalLink, 
  Terminal, 
  Server, 
  BookOpen, 
  Activity, 
  ChevronRight
} from 'lucide-react';

export interface ToolCardProps {
  tool: ToolItem;
  isHighlighted?: boolean;
  onHover?: (toolId: string | null) => void;
  onSelect?: (toolId: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ 
  tool, 
  isHighlighted = false,
  onHover,
  onSelect
}) => {
  const [isLocalHovered, setIsLocalHovered] = useState(false);

  const isWebServer = tool.category === 'Web Applications';
  const hasUrl = Boolean(tool.officialUrl);
  const isEmphasized = isLocalHovered || isHighlighted;

  const handleMouseEnter = () => {
    setIsLocalHovered(true);
    if (onHover) onHover(tool.id);
  };

  const handleMouseLeave = () => {
    setIsLocalHovered(false);
    if (onHover) onHover(null);
  };

  const getStatusBadgeStyle = () => {
    switch (tool.status) {
      case 'Production Server':
        return 'bg-emerald-50 text-emerald-900 border-emerald-200';
      case 'CRAN Release':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      case 'GitHub Repository':
        return 'bg-slate-100 text-slate-800 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <article
      id={`tool-${tool.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect && onSelect(tool.id)}
      className={`group relative bg-white rounded-sm border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
        isEmphasized
          ? 'border-sci-600 shadow-academic -translate-y-1 ring-1 ring-sci-500/20'
          : 'border-slate-200/90 shadow-subtle hover:border-slate-300'
      }`}
    >
      {/* 1. Top Active Data Conduit (Illuminates when hovered) */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 z-20 ${
          isEmphasized 
            ? 'opacity-100 bg-gradient-to-r from-sci-500 via-teal-400 to-sci-600' 
            : 'opacity-0 bg-transparent'
        }`}
        aria-hidden="true"
      />

      {/* 2. Card Header: Name, Category, Status & Scientific Purpose */}
      <div className="p-4 xs:p-5 sm:p-6 space-y-3 relative z-10">
        
        {/* Top Meta Line: Category & Status */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className={`p-1 rounded ${isWebServer ? 'bg-teal-50 text-teal-700' : 'bg-sci-50 text-sci-700'}`}>
              {isWebServer ? <Server className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
            </span>
            <span className="text-[11px] font-mono text-slate-600 font-medium uppercase tracking-tight">
              {tool.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            {isEmphasized && (
              <span className="text-teal-700 font-semibold animate-pulse flex items-center gap-1">
                <Activity className="w-2.5 h-2.5 text-teal-600" />
                <span>LINKED</span>
              </span>
            )}
            <span className={`px-2 py-0.5 rounded border font-medium ${getStatusBadgeStyle()}`}>
              {tool.status}
            </span>
          </div>
        </div>

        {/* Tool Name */}
        <div>
          <h4 className="text-xl font-serif font-bold text-navy-950 group-hover:text-sci-700 transition-colors flex items-center gap-2">
            <span>{tool.name}</span>
            {isWebServer && (
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 inline-block animate-pulse" title="Live Web Server" />
            )}
          </h4>
          <p className="text-xs font-semibold text-slate-700 font-sans mt-0.5">
            {tool.shortPurpose}
          </p>
        </div>

        {/* 3. Short Description (Stable height and clean typography across all grid items) */}
        <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 min-h-[3.5rem]">
          {tool.fullDescription}
        </p>

        {/* 4. Category Metadata & Technology Type (Reveals/Emphasizes on hover) */}
        <div className={`pt-2 transition-all duration-300 space-y-2 border-t border-slate-100 ${
          isEmphasized ? 'opacity-100' : 'opacity-75'
        }`}>
          <div className="flex items-center justify-between text-[10.5px] font-mono text-slate-500">
            <span>Runtime: <strong className="text-slate-800">{tool.technologyType}</strong></span>
            {tool.associatedPublication && (
              <span className="text-sci-700 font-medium">Peer Reviewed</span>
            )}
          </div>

          {/* Domain Tags */}
          {tool.tags && tool.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tool.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className={`text-[9.5px] font-mono px-1.5 py-0.5 rounded border transition-colors ${
                    isEmphasized
                      ? 'bg-slate-100 text-navy-950 border-slate-300'
                      : 'bg-surface-ground text-slate-500 border-slate-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* 5. External Link Affordance */}
      <div className={`p-3 px-4 sm:px-6 border-t relative z-10 flex items-center justify-between text-xs transition-colors min-h-[44px] ${
        isEmphasized 
          ? 'bg-slate-50 border-slate-200' 
          : 'bg-surface-ground border-slate-100'
      }`}>
        {hasUrl ? (
          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sci-700 group-hover:text-sci-900 group-hover:underline"
          >
            <span>{isWebServer ? 'Launch Web Server' : 'Access Package Repository'}</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        ) : (
          <div className="text-[10.5px] font-mono text-slate-400 italic flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>Repository link to be added</span>
          </div>
        )}

        <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
          <span>ICAR-NIFMD</span>
          <ChevronRight className={`w-3 h-3 transition-transform ${isEmphasized ? 'translate-x-0.5 text-sci-600' : 'text-slate-300'}`} />
        </span>
      </div>
    </article>
  );
};

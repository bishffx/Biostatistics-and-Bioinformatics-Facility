import React from 'react';
import { ToolItem } from '../../data/toolsData';

export interface ToolConstellationVisualizerProps {
  tools: ToolItem[];
  activeToolId: string | null;
  onHoverTool: (toolId: string | null) => void;
  onSelectTool: (toolId: string) => void;
}

export const ToolConstellationVisualizer: React.FC<ToolConstellationVisualizerProps> = ({
  tools,
  activeToolId,
  onHoverTool,
  onSelectTool,
}) => {
  const activeTool = tools.find((t) => t.id === activeToolId);
  const relatedIds = activeTool?.constellation.relatedToolIds || [];

  return (
    <div className="w-full bg-navy-950 border border-navy-800 rounded-sm p-4 sm:p-6 relative overflow-hidden select-none">
      
      {/* Background Subtle Grid & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-800/80 pb-3 mb-2 font-mono text-[10.5px]">
        <div className="flex items-center gap-2 text-teal-400">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="uppercase tracking-wider font-semibold">Research Software Ecosystem Constellation</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400 text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Web Applications</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sci-400" />
            <span>R Packages</span>
          </span>
          <span className="hidden md:inline text-slate-500">
            [Hover node to trace ecosystem linkages]
          </span>
        </div>
      </div>

      {/* SVG Constellation Network */}
      <div className="relative w-full h-[180px] sm:h-[220px]">
        <svg 
          viewBox="0 0 1000 240" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Research software and R packages constellation network map"
        >
          {/* Subtle Coordinate Grid Lines */}
          <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8">
            <line x1="0" y1="60" x2="1000" y2="60" />
            <line x1="0" y1="120" x2="1000" y2="120" />
            <line x1="0" y1="180" x2="1000" y2="180" />
            <line x1="250" y1="0" x2="250" y2="240" />
            <line x1="500" y1="0" x2="500" y2="240" />
            <line x1="750" y1="0" x2="750" y2="240" />
          </g>

          {/* Ecosystem Conduits / Connecting Edges */}
          {tools.map((sourceTool) => {
            const sx = sourceTool.constellation.cx * 10;
            const sy = sourceTool.constellation.cy * 2.4;

            return sourceTool.constellation.relatedToolIds.map((targetId) => {
              const targetTool = tools.find((t) => t.id === targetId);
              if (!targetTool) return null;

              const tx = targetTool.constellation.cx * 10;
              const ty = targetTool.constellation.cy * 2.4;

              const isEdgeActive =
                activeToolId === sourceTool.id ||
                activeToolId === targetTool.id ||
                (relatedIds.includes(sourceTool.id) && relatedIds.includes(targetTool.id));

              return (
                <line
                  key={`${sourceTool.id}-${targetId}`}
                  x1={sx}
                  y1={sy}
                  x2={tx}
                  y2={ty}
                  stroke={isEdgeActive ? '#2DD4BF' : 'rgba(148, 163, 184, 0.18)'}
                  strokeWidth={isEdgeActive ? 1.8 : 1}
                  strokeDasharray={isEdgeActive ? '5 3' : 'none'}
                  className={isEdgeActive ? 'animate-data-stream transition-all duration-300' : 'transition-colors duration-200'}
                />
              );
            });
          })}

          {/* Tool Nodes */}
          {tools.map((tool) => {
            const cx = tool.constellation.cx * 10;
            const cy = tool.constellation.cy * 2.4;
            const isWeb = tool.category === 'Web Applications';
            const isSelected = activeToolId === tool.id;
            const isRelated = relatedIds.includes(tool.id);

            const nodeColor = isWeb ? '#2DD4BF' : '#60A5FA';
            const nodeFill = isSelected ? '#FFFFFF' : nodeColor;

            return (
              <g
                key={tool.id}
                role="button"
                tabIndex={0}
                aria-label={`Select tool ${tool.name}: ${tool.shortPurpose}`}
                className="cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
                onMouseEnter={() => onHoverTool(tool.id)}
                onMouseLeave={() => onHoverTool(null)}
                onClick={() => onSelectTool(tool.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectTool(tool.id);
                  }
                }}
              >
                {/* Active Outer Pulsing Ring */}
                {(isSelected || isRelated) && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 16 : 12}
                    fill="none"
                    stroke={nodeColor}
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    className="animate-spin-slow opacity-60"
                  />
                )}

                {/* Node Halo */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 10 : 7}
                  fill={nodeColor}
                  fillOpacity={isSelected ? 0.4 : isRelated ? 0.25 : 0.12}
                  className="transition-all duration-300"
                />

                {/* Node Core */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 5 : 3.5}
                  fill={nodeFill}
                  stroke="#030B17"
                  strokeWidth="1.5"
                  className="transition-all duration-300 group-hover:scale-125"
                />

                {/* Node Label Text */}
                <text
                  x={cx}
                  y={cy + 18}
                  fill={isSelected ? '#FFFFFF' : isRelated ? '#93C5FD' : '#94A3B8'}
                  fontSize={isSelected ? '11' : '9.5'}
                  fontFamily="monospace"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                  textAnchor="middle"
                  className="transition-colors duration-200 select-none pointer-events-none"
                >
                  {tool.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Dynamic Status Bar for Currently Hovered/Selected Node */}
      <div className="pt-2 border-t border-navy-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[10px] sm:text-[11px] font-mono">
        <div className="flex items-center gap-2 truncate">
          <span className="text-slate-500 uppercase text-[9.5px] sm:text-[10px] shrink-0">Active Node:</span>
          {activeTool ? (
            <span className="text-white font-bold flex items-center gap-1.5 truncate">
              <span className="shrink-0">{activeTool.name}</span>
              <span className="text-slate-400 font-normal font-sans truncate">({activeTool.shortPurpose})</span>
            </span>
          ) : (
            <span className="text-slate-500 italic">Select or hover a tool card below</span>
          )}
        </div>

        {activeTool && (
          <span className="text-teal-300 text-[10px] sm:text-[10.5px] shrink-0">
            {activeTool.status} &bull; {activeTool.technologyType}
          </span>
        )}
      </div>

    </div>
  );
};

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { TOOLS_DATA } from '../../data/toolsData';
import { ToolCard } from './ToolCard';
import { ToolConstellationVisualizer } from './ToolConstellationVisualizer';
import { ScientificDataBackground } from '../ui/ScientificDataBackground';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Search, 
  RotateCcw, 
  Terminal, 
  Server, 
  Layers, 
  Sparkles,
  Info
} from 'lucide-react';

type CategoryFilter = 'ALL' | 'WEB APPS' | 'R PACKAGES';

export const ToolsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [hoveredToolId, setHoveredToolId] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener for '/' to focus and 'ESC' to clear/close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If user presses '/' and is not already typing inside an input/textarea
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        const tagName = document.activeElement?.tagName.toLowerCase();
        if (tagName !== 'input' && tagName !== 'textarea') {
          e.preventDefault();
          searchInputRef.current?.focus();
        }
      }

      // If user presses Escape
      if (e.key === 'Escape') {
        if (searchQuery.trim() !== '') {
          setSearchQuery('');
        }
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery]);

  // Search and filter logic
  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter((tool) => {
      // Category filter
      if (selectedCategory === 'WEB APPS' && tool.category !== 'Web Applications') {
        return false;
      }
      if (selectedCategory === 'R PACKAGES' && tool.category !== 'R Packages') {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = tool.name.toLowerCase().includes(q);
        const matchesPurpose = tool.shortPurpose.toLowerCase().includes(q);
        const matchesDesc = tool.fullDescription.toLowerCase().includes(q);
        const matchesTech = tool.technologyType.toLowerCase().includes(q);
        const matchesTags = tool.tags.some((t) => t.toLowerCase().includes(q));
        return matchesName || matchesPurpose || matchesDesc || matchesTech || matchesTags;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectToolFromConstellation = (toolId: string) => {
    const element = document.getElementById(`tool-${toolId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHoveredToolId(toolId);
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setHoveredToolId(null);
  };

  const webAppCount = TOOLS_DATA.filter((t) => t.category === 'Web Applications').length;
  const rPackageCount = TOOLS_DATA.filter((t) => t.category === 'R Packages').length;

  return (
    <section 
      className="relative py-16 lg:py-24 bg-surface-ground border-b border-slate-200/90 font-sans overflow-hidden"
      aria-labelledby="tools-section-title"
    >
      {/* Abstract Molecular Network Background Layer */}
      <ScientificDataBackground
        variant="network"
        density="low"
        speed="slow"
        opacity={0.3}
        interactive={true}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Institutional Section Header */}
        <SectionHeader
          eyebrow="Research Software &amp; Computational Resources"
          title="Computational Tools &amp; Web Servers"
          description="Research software, statistical packages, and web-based servers developed by BBF to support computational analysis in infectious animal disease epidemiology and livestock genomic health."
        />

        {/* 2. Visual "Research Tool Constellation" */}
        <div className="space-y-2">
          <ToolConstellationVisualizer
            tools={TOOLS_DATA}
            activeToolId={hoveredToolId}
            onHoverTool={setHoveredToolId}
            onSelectTool={handleSelectToolFromConstellation}
          />
        </div>

        {/* 3. Category Navigation & Command-Palette Interaction Bar */}
        <div className="bg-white border border-slate-200 rounded-sm p-4 sm:p-5 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Navigation Pills (ALL / WEB APPS / R PACKAGES) */}
          <div 
            className="flex flex-wrap items-center gap-1.5 font-mono text-xs"
            role="tablist"
            aria-label="Filter tools by category"
          >
            <button
              role="tab"
              aria-selected={selectedCategory === 'ALL'}
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-2 min-h-[40px] rounded transition-all font-semibold ${
                selectedCategory === 'ALL'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>ALL ({TOOLS_DATA.length})</span>
              </span>
            </button>

            <button
              role="tab"
              aria-selected={selectedCategory === 'WEB APPS'}
              onClick={() => setSelectedCategory('WEB APPS')}
              className={`px-3 py-2 min-h-[40px] rounded transition-all font-semibold ${
                selectedCategory === 'WEB APPS'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-teal-600" />
                <span>WEB APPS ({webAppCount})</span>
              </span>
            </button>

            <button
              role="tab"
              aria-selected={selectedCategory === 'R PACKAGES'}
              onClick={() => setSelectedCategory('R PACKAGES')}
              className={`px-3 py-2 min-h-[40px] rounded transition-all font-semibold ${
                selectedCategory === 'R PACKAGES'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sci-600" />
                <span>R PACKAGES ({rPackageCount})</span>
              </span>
            </button>
          </div>

          {/* Search Input with Command-Palette Key Hints */}
          <div className="relative w-full md:w-80">
            <label htmlFor="tool-search-input" className="sr-only">
              Search computational tools and web servers
            </label>
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id="tool-search-input"
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search computational tools..."
              className="w-full pl-10 pr-16 py-2.5 min-h-[44px] text-xs bg-surface-ground border border-slate-200 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sci-500 focus:border-sci-500 font-sans"
            />
            {/* Keyboard shortcut badges */}
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="font-mono text-[10px] text-slate-500 hover:text-slate-800 px-1.5 py-0.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-sci-500"
                  aria-label="Clear search query (or press Escape)"
                >
                  ESC
                </button>
              ) : (
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded shadow-2xs" aria-hidden="true">
                  /
                </kbd>
              )}
            </div>
          </div>

        </div>

        {/* Results Counter Banner */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1" aria-live="polite">
          <span>
            Displaying <strong className="text-navy-950 font-bold">{filteredTools.length}</strong> of{' '}
            {TOOLS_DATA.length} computational resources
          </span>
          {(searchQuery || selectedCategory !== 'ALL') && (
            <button
              onClick={handleClearFilters}
              className="text-sci-700 hover:underline inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* 4. Elegant Responsive Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                isHighlighted={hoveredToolId === tool.id}
                onHover={setHoveredToolId}
                onSelect={(id) => setHoveredToolId(id)}
              />
            ))
          ) : (
            <div className="col-span-full bg-white p-12 text-center rounded-sm border border-slate-200 space-y-3">
              <Sparkles className="w-8 h-8 text-slate-300 mx-auto" />
              <h4 className="font-serif font-bold text-base text-navy-950">
                No computational tools match &ldquo;{searchQuery}&rdquo;
              </h4>
              <p className="text-xs text-slate-500 font-sans max-w-sm mx-auto">
                Try searching for specific terms like &ldquo;surveillance&rdquo;, &ldquo;serotype&rdquo;, &ldquo;CRAN&rdquo;, or &ldquo;hub gene&rdquo;.
              </p>
              <button
                onClick={handleClearFilters}
                className="text-xs font-mono text-sci-700 underline inline-flex items-center gap-1 mt-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Show All Tools</span>
              </button>
            </div>
          )}
        </div>

        {/* Institutional Software Ecosystem Note */}
        <div className="bg-surface-ground p-4 rounded border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-slate-800">Deployment &amp; Package Distribution:</span>
            <p className="text-[11px] leading-relaxed">
              Institutional web servers are hosted on the ICAR high-speed National Agricultural Science Complex network (<code>nifmd-bbf.icar.gov.in</code>). Open-source packages are distributed via CRAN and institutional GitHub repositories under academic research licenses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

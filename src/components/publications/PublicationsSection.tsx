import React, { useState, useMemo } from 'react';
import { PUBLICATIONS_DATA } from '../../data/publicationsData';
import { PublicationArchiveItem } from './PublicationArchiveItem';
import { PublicationMetricsChart } from './PublicationMetricsChart';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Info,
  BookOpen
} from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedJournal, setSelectedJournal] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  // Extract distinct filter options
  const years = ['All', '2024', '2023', '2022'];
  
  const journals = [
    'All',
    'Nature Scientific Reports',
    'Current Bioinformatics',
    'Chemosphere',
    'PLoS ONE',
    'Biologicals',
    'Entropy',
    'Communicated (International Peer Review)',
  ];

  const publicationTypes = [
    'All',
    'Journal Article',
    'Review / Survey',
    'Communicated Manuscript',
  ];

  // Filter logic
  const filteredPublications = useMemo(() => {
    return PUBLICATIONS_DATA.filter((pub) => {
      // Year filter
      if (selectedYear !== 'All' && pub.year.toString() !== selectedYear) {
        return false;
      }

      // Journal filter
      if (selectedJournal !== 'All' && pub.journal !== selectedJournal) {
        return false;
      }

      // Publication Type filter
      if (selectedType !== 'All' && pub.publicationType !== selectedType) {
        return false;
      }

      // Search Query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = pub.title.toLowerCase().includes(q);
        const matchesAuthors = pub.authors.some((a) => a.toLowerCase().includes(q));
        const matchesJournal = pub.journal.toLowerCase().includes(q);
        const matchesDoi = pub.doi ? pub.doi.toLowerCase().includes(q) : false;
        const matchesTopics = pub.topics.some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesAuthors || matchesJournal || matchesDoi || matchesTopics;
      }

      return true;
    });
  }, [searchQuery, selectedYear, selectedJournal, selectedType]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedYear !== 'All' ||
    selectedJournal !== 'All' ||
    selectedType !== 'All';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedYear('All');
    setSelectedJournal('All');
    setSelectedType('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn font-sans">
      
      {/* 1. Official Section Header */}
      <SectionHeader
        eyebrow="Scholarly Repository &amp; Bibliographic Archive"
        title="Selected Publications"
        description="Peer-reviewed research articles and communicated manuscripts reflecting statistical methodology, computational biology workflows, and veterinary disease epidemiology at the Biostatistics &amp; Bioinformatics Facility, ICAR-NIFMD."
      />

      {/* 2. Publication Count & Output Distribution Visualization */}
      <PublicationMetricsChart
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
      />

      {/* 3. Search and Multi-Faceted Filter Matrix */}
      <div className="bg-white border border-slate-200 rounded-sm p-4 sm:p-5 shadow-subtle space-y-4">
        
        {/* Search Input Bar */}
        <div className="relative">
          <label htmlFor="publications-search-input" className="sr-only">
            Search publications by title, author, journal venue, DOI, or keyword
          </label>
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            id="publications-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by publication title, author, journal venue, DOI, or keyword (e.g., scRNA-seq, FMDV, vaccine)..."
            className="w-full pl-10 pr-10 py-2.5 min-h-[44px] text-xs bg-surface-ground border border-slate-200 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sci-500 focus:border-sci-500 font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-700 px-1 py-0.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-sci-500"
              aria-label="Clear search input"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-xs">
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Year Selector */}
            <div className="flex items-center gap-1.5 font-mono" role="group" aria-label="Filter publications by year">
              <span className="text-slate-400 text-[11px] uppercase">Year:</span>
              <div className="flex items-center gap-1">
                {years.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-sci-500 ${
                      selectedYear === yr
                        ? 'bg-navy-900 text-white font-semibold shadow-subtle'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>

            {/* Publication Type Selector */}
            <div className="flex items-center gap-1.5 font-mono">
              <label htmlFor="publication-type-select" className="text-slate-400 text-[11px] uppercase">
                Type:
              </label>
              <select
                id="publication-type-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 min-h-[38px] text-[11px] text-slate-800 focus:outline-none focus:ring-1 focus:ring-sci-500"
              >
                {publicationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Journal Venue Selector */}
            <div className="flex items-center gap-1.5 font-mono">
              <label htmlFor="publication-venue-select" className="text-slate-400 text-[11px] uppercase">
                Venue:
              </label>
              <select
                id="publication-venue-select"
                value={selectedJournal}
                onChange={(e) => setSelectedJournal(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 min-h-[38px] text-[11px] text-slate-800 focus:outline-none focus:ring-1 focus:ring-sci-500 max-w-[200px] xs:max-w-[240px] sm:max-w-[220px] truncate"
              >
                {journals.map((journal) => (
                  <option key={journal} value={journal}>
                    {journal}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reset Filters Action */}
          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="text-[11px] font-mono text-sci-700 hover:text-navy-950 inline-flex items-center gap-1 hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Results Count Banner */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500" aria-live="polite">
          <div className="flex items-center gap-2">
            <Filter className="w-3 h-3 text-slate-400" aria-hidden="true" />
            <span>
              Showing <strong className="text-navy-950">{filteredPublications.length}</strong> of{' '}
              {PUBLICATIONS_DATA.length} scholarly records
            </span>
          </div>
          {hasActiveFilters && (
            <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Active Filters Applied
            </span>
          )}
        </div>
      </div>

      {/* 4. Scholarly Publication Archive Feed */}
      <div className="space-y-3">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub, idx) => (
            <PublicationArchiveItem
              key={pub.id}
              publication={pub}
              index={idx}
            />
          ))
        ) : (
          <div className="bg-white border border-slate-200 rounded-sm p-12 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <h4 className="font-serif font-bold text-base text-navy-950">
              No matching publications found
            </h4>
            <p className="text-xs text-slate-500 font-sans max-w-md mx-auto">
              No articles or manuscripts match your current search query or filter combination.
            </p>
            <button
              onClick={handleResetFilters}
              className="text-xs font-mono text-sci-700 hover:underline inline-flex items-center gap-1 mt-2"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Search &amp; Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* 5. Institutional Bibliographic Standards Note */}
      <div className="bg-surface-ground p-4 rounded border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-slate-700">Bibliographic Record Notes:</p>
          <p className="text-[11px] leading-relaxed">
            * Indicates corresponding authorship or equally contributing lead authorship. Publications are tracked from peer-reviewed scientific journals including Nature Scientific Reports, Current Bioinformatics, Chemosphere, Biologicals, PLoS ONE, and MDPI Entropy. Communicated manuscripts represent active peer-reviewed submissions from ICAR-NIFMD BBF.
          </p>
        </div>
      </div>

    </div>
  );
};

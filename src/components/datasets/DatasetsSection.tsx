import React, { useState, useMemo } from 'react';
import { DATASETS_DATA, DatasetItem } from '../../data/datasetsData';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Database, 
  Search, 
  ExternalLink, 
  FileText, 
  Filter, 
  Lock, 
  Unlock, 
  HelpCircle,
  Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const DatasetsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Viral Genomics', 'Sero-Surveillance', 'Transcriptomics', 'Diagnostic Assays'];

  const filteredDatasets = useMemo(() => {
    return DATASETS_DATA.filter((item) => {
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesAcc = item.accessionId.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesSpecies = item.hostSpecies.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesAcc || matchesDesc || matchesSpecies || matchesTags;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const getPolicyBadge = (policy: DatasetItem['accessPolicy']) => {
    switch (policy) {
      case 'Public Access':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
            <Unlock className="w-3 h-3 text-emerald-600" aria-hidden="true" />
            Open Research Access
          </span>
        );
      case 'Institutional Access':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-50 text-blue-800 border border-blue-200">
            <Lock className="w-3 h-3 text-blue-600" aria-hidden="true" />
            ICAR / NARS Access
          </span>
        );
      case 'Available on Request':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200">
            <HelpCircle className="w-3 h-3 text-amber-600" aria-hidden="true" />
            Available on Request
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn font-sans">
      {/* 1. Header */}
      <SectionHeader
        eyebrow="Scientific Data Repository &amp; Omics Matrices"
        title="Curated Research Datasets"
        description="Access and request curated genomic alignments, nationwide bovine sero-surveillance matrices, indirect-ELISA optical density tables, and single-cell RNA-seq co-expression benchmarks developed at ICAR-NIFMD."
      />

      {/* 2. Search & Category Filters */}
      <div className="bg-white p-4 sm:p-5 rounded-sm border border-slate-200 shadow-subtle space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <label htmlFor="dataset-search" className="sr-only">
              Search datasets
            </label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
            <input
              id="dataset-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by accession ID, viral lineage, host species, or topic..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:border-sci-500 focus:bg-white focus:ring-1 focus:ring-sci-500 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5" role="radiogroup" aria-label="Dataset category filter">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono pr-2">
              <Filter className="w-3.5 h-3.5 text-sci-700" aria-hidden="true" />
              <span>Category:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                role="radio"
                aria-checked={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>
            Showing <strong className="text-navy-950 font-bold">{filteredDatasets.length}</strong> research datasets
          </span>
          <span className="hidden sm:inline text-slate-400">FAIR Data Principles Compliant</span>
        </div>
      </div>

      {/* 3. Dataset Archive Cards */}
      <div className="space-y-5">
        {filteredDatasets.map((ds) => (
          <article
            key={ds.id}
            className="bg-white border border-slate-200 rounded-sm p-5 sm:p-6 shadow-subtle hover:border-sci-300 hover:shadow-academic transition-all space-y-4"
          >
            {/* Top Bar: Accession, Category, Policy */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-sci-700 bg-sci-50 px-2 py-0.5 rounded border border-sci-200">
                  {ds.accessionId}
                </span>
                <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {ds.category}
                </span>
              </div>
              <div>{getPolicyBadge(ds.accessPolicy)}</div>
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-serif font-bold text-navy-950 tracking-tight leading-snug">
                {ds.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {ds.description}
              </p>
            </div>

            {/* Technical Specifications Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-2.5 rounded bg-surface-ground border border-slate-100 space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-semibold block">
                  Host / Organism Scope
                </span>
                <span className="font-medium text-slate-800 text-[11px]">{ds.hostSpecies}</span>
              </div>

              <div className="p-2.5 rounded bg-surface-ground border border-slate-100 space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-semibold block">
                  Data Format &amp; Schema
                </span>
                <span className="font-mono font-medium text-slate-800 text-[11px]">{ds.format}</span>
              </div>

              <div className="p-2.5 rounded bg-surface-ground border border-slate-100 space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-semibold block">
                  Archive Dimensions
                </span>
                <span className="font-mono font-medium text-slate-800 text-[11px]">{ds.recordCount}</span>
              </div>
            </div>

            {/* Tags & Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-1.5">
                <Tag className="w-3 h-3 text-slate-400" aria-hidden="true" />
                {ds.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {ds.dataUrl ? (
                  <a
                    href={ds.dataUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sci-500"
                  >
                    <span>Access Portal</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sci-500"
                  >
                    <span>Request Dataset</span>
                    <FileText className="w-3 h-3" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Institutional Data Governance Callout */}
      <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3 font-sans">
        <Database className="w-4 h-4 text-sci-700 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="leading-relaxed">
          <span className="font-semibold text-slate-800">Data Governance &amp; Research Access Policy:</span> In alignment with the National Data Sharing and Accessibility Policy (NDSAP) and ICAR data guidelines, published datasets and web servers are openly accessible for non-commercial academic research. Sero-surveillance and epidemiological survey matrices under active state surveillance programs are available upon submission of an institutional request.
        </div>
      </div>
    </div>
  );
};

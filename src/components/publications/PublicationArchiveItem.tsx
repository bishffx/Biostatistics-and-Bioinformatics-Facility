import React, { useState } from 'react';
import { PublicationItem } from '../../data/publicationsData';
import { 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  FileCode, 
  Quote, 
  Bookmark, 
  ShieldCheck 
} from 'lucide-react';

export interface PublicationArchiveItemProps {
  publication: PublicationItem;
  index: number;
}

export const PublicationArchiveItem: React.FC<PublicationArchiveItemProps> = ({
  publication,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedType, setCopiedType] = useState<'apa' | 'bibtex' | null>(null);

  const isPublished = publication.status === 'Published';

  const handleCopy = (text: string, type: 'apa' | 'bibtex') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getTypeBadgeStyle = () => {
    switch (publication.publicationType) {
      case 'Journal Article':
        return 'bg-emerald-50 text-emerald-900 border-emerald-200';
      case 'Review / Survey':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      case 'Communicated Manuscript':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <article
      aria-labelledby={`pub-title-${publication.id}`}
      className={`bg-white border rounded-sm transition-all duration-200 font-sans group ${
        isExpanded
          ? 'border-sci-500 shadow-academic border-l-4 border-l-sci-600'
          : 'border-slate-200 hover:border-slate-300 hover:border-l-4 hover:border-l-teal-500 shadow-subtle'
      }`}
    >
      {/* Compact Scholarly Row Content */}
      <div className="p-4 sm:p-5 space-y-2.5">
        
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-400 group-hover:text-sci-700 group-hover:bg-sci-50 px-1.5 py-0.5 rounded transition-colors font-bold text-[11px]">
              [{String(index + 1).padStart(2, '0')}]
            </span>
            <span className="font-mono font-semibold text-navy-950 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
              {publication.year}
            </span>
            <span className={`font-mono text-[10.5px] px-2 py-0.5 rounded border ${getTypeBadgeStyle()}`}>
              {publication.publicationType}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {publication.isCorrespondingOrEqualContrib && (
              <span className="text-[10px] font-mono text-sci-700 bg-sci-50 px-2 py-0.5 rounded border border-sci-200 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Corresponding / Lead</span>
              </span>
            )}
            <span
              className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                isPublished
                  ? 'bg-slate-50 text-slate-700 border-slate-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
            >
              {isPublished ? 'Indexed' : 'Peer Review'}
            </span>
          </div>
        </div>

        {/* Paper Title */}
        <h4
          id={`pub-title-${publication.id}`}
          className="text-base sm:text-lg font-serif font-bold text-navy-950 leading-snug tracking-tight"
        >
          {publication.externalUrl ? (
            <a
              href={publication.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sci-700 transition-colors inline"
            >
              {publication.title}
            </a>
          ) : (
            <span>{publication.title}</span>
          )}
        </h4>

        {/* Author Line */}
        <p className="text-xs text-slate-600 font-sans leading-relaxed">
          {publication.authors.map((author, aIdx) => {
            const isPI = author.includes('Das, S');
            return (
              <span key={aIdx}>
                <span
                  className={
                    isPI
                      ? 'font-bold text-navy-950 underline decoration-teal-500/70 decoration-1.5'
                      : ''
                  }
                >
                  {author}
                </span>
                {aIdx < publication.authors.length - 1 ? ', ' : ''}
              </span>
            );
          })}
        </p>

        {/* Publication Venue Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 text-slate-700">
            <Bookmark className="w-3.5 h-3.5 text-sci-700 shrink-0" />
            <span className="font-serif italic font-medium">{publication.journal}</span>
            {publication.volume && (
              <span className="font-mono text-slate-500 text-[11px]">
                Vol. {publication.volume}
                {publication.issue ? `(${publication.issue})` : ''}
                {publication.pages ? `, pp. ${publication.pages}` : ''}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2">
            {publication.doi && (
              <a
                href={publication.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`External DOI link for publication: ${publication.title}`}
                className="font-mono text-[11px] text-sci-700 hover:text-sci-900 hover:underline inline-flex items-center gap-1 font-medium bg-sci-50/60 px-2 py-0.5 rounded border border-sci-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sci-500"
              >
                <span>DOI: {publication.doi}</span>
                <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
              </a>
            )}

            {/* Expandable Citation Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls={`citation-details-${publication.id}`}
              aria-label={`${isExpanded ? 'Hide citation and details for' : 'View citation and details for'} ${publication.title}`}
              className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors inline-flex items-center gap-1 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 focus-visible:ring-offset-1 ${
                isExpanded
                  ? 'bg-navy-900 text-white border-navy-900 font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              <Quote className="w-3 h-3" aria-hidden="true" />
              <span>{isExpanded ? 'Hide Citation' : 'Cite / Details'}</span>
              {isExpanded ? <ChevronUp className="w-3 h-3" aria-hidden="true" /> : <ChevronDown className="w-3 h-3" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Details Drawer */}
      {isExpanded && (
        <div 
          id={`citation-details-${publication.id}`}
          className="border-t border-slate-200 bg-surface-ground p-4 sm:p-5 space-y-4 text-xs font-sans animate-fadeIn"
        >
          
          {/* Topics Badges */}
          {publication.topics && publication.topics.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase text-slate-400 font-semibold">
                Domain Keywords:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {publication.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Formatted APA Citation */}
          <div className="bg-white p-3 rounded border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                <Quote className="w-3 h-3 text-sci-700" aria-hidden="true" />
                <span>APA 7th Edition Citation</span>
              </span>
              <button
                onClick={() => handleCopy(publication.apaCitation, 'apa')}
                aria-label={`Copy APA citation for ${publication.title}`}
                className="font-mono text-[10.5px] text-sci-700 hover:text-sci-900 inline-flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 rounded-xs"
              >
                {copiedType === 'apa' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" aria-hidden="true" />
                    <span>Copy APA</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-slate-800 font-serif leading-relaxed italic">
              {publication.apaCitation}
            </p>
          </div>

          {/* BibTeX Entry */}
          <div className="bg-navy-950 text-slate-200 p-3 rounded border border-navy-900 space-y-2 font-mono text-[11px]">
            <div className="flex items-center justify-between text-slate-400">
              <span className="uppercase text-[10px] tracking-wider flex items-center gap-1">
                <FileCode className="w-3 h-3 text-teal-400" aria-hidden="true" />
                <span>BibTeX Record</span>
              </span>
              <button
                onClick={() => handleCopy(publication.bibtex, 'bibtex')}
                aria-label={`Copy BibTeX record for ${publication.title}`}
                className="text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 text-[10.5px] font-mono hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-xs"
              >
                {copiedType === 'bibtex' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-300 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" aria-hidden="true" />
                    <span>Copy BibTeX</span>
                  </>
                )}
              </button>
            </div>
            <pre className="overflow-x-auto text-[10.5px] text-slate-300 font-mono leading-normal p-1">
              {publication.bibtex}
            </pre>
          </div>

        </div>
      )}
    </article>
  );
};

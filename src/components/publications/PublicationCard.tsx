import React, { useState } from 'react';
import { PublicationItem } from '../../data/publicationsData';
import { ExternalLink, Copy, Check, FileText, Bookmark } from 'lucide-react';

export interface PublicationCardProps {
  publication: PublicationItem;
  index: number;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication, index }) => {
  const [copied, setCopied] = useState(false);

  const isPublished = publication.status === 'Published';

  // Construct standard academic citation string
  const citationString = `${publication.authors.join(', ')} (${publication.year}). ${publication.title}. ${publication.journal}${
    publication.volume ? `, ${publication.volume}` : ''
  }${publication.issue ? `(${publication.issue})` : ''}${
    publication.pages ? `, ${publication.pages}` : ''
  }.${publication.doi ? ` https://doi.org/${publication.doi}` : ''}`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      aria-labelledby={`pub-title-${publication.id}`}
      className="bg-white rounded-sm border border-slate-200 shadow-subtle hover:border-sci-500 hover:shadow-academic transition-all duration-200 p-6 flex flex-col justify-between group"
    >
      <div className="space-y-3.5">
        {/* Top Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-400">
              #{String(index + 1).padStart(2, '0')}
            </span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                isPublished
                  ? 'bg-teal-50 text-teal-900 border-teal-200 font-medium'
                  : 'bg-amber-50 text-amber-900 border-amber-200 font-medium'
              }`}
            >
              {isPublished ? '● Peer-Reviewed Article' : '○ Under Communication'}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {publication.year}
            </span>
          </div>

          {publication.isCorrespondingOrEqualContrib && (
            <span className="text-[10px] font-mono text-sci-700 bg-sci-50 px-2 py-0.5 rounded border border-sci-200">
              * Corresponding / Lead Author
            </span>
          )}
        </div>

        {/* Paper Title */}
        <h4
          id={`pub-title-${publication.id}`}
          className="text-base sm:text-lg font-serif font-bold text-navy-950 leading-snug group-hover:text-sci-700 transition-colors"
        >
          {publication.title}
        </h4>

        {/* Authors List */}
        <p className="text-xs text-slate-600 font-sans leading-relaxed">
          {publication.authors.map((author, idx) => {
            const isHighlight = author.includes('Das, S');
            return (
              <span key={idx}>
                <span className={isHighlight ? 'font-bold text-navy-950 underline decoration-teal-500/60 decoration-2' : ''}>
                  {author}
                </span>
                {idx < publication.authors.length - 1 ? ', ' : ''}
              </span>
            );
          })}
        </p>

        {/* Journal Citation Line */}
        <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
          <Bookmark className="w-3.5 h-3.5 text-sci-600 shrink-0" />
          <span className="italic font-serif">{publication.journal}</span>
          {publication.volume && (
            <span className="font-mono text-[11px] text-slate-600">
              Vol. {publication.volume}
              {publication.issue ? `(${publication.issue})` : ''}
              {publication.pages ? `: ${publication.pages}` : ''}
            </span>
          )}
        </div>

        {/* Topic Badges */}
        {publication.topics && publication.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {publication.topics.map((topic, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200/80"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Copy Citation Button */}
        <button
          onClick={handleCopyCitation}
          aria-label="Copy citation to clipboard"
          className="inline-flex items-center gap-1.5 font-mono text-slate-600 hover:text-navy-950 transition-colors text-[11px]"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Citation Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy Citation</span>
            </>
          )}
        </button>

        {/* DOI Link Button or Communicated Label */}
        {publication.externalUrl || publication.doiUrl ? (
          <a
            href={publication.externalUrl || publication.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sci-700 hover:text-sci-800 hover:underline font-medium text-[11px]"
          >
            <span>DOI: {publication.doi}</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        ) : (
          <span className="font-mono text-slate-400 text-[11px] flex items-center gap-1">
            <FileText className="w-3 h-3" />
            <span>Manuscript Under Review</span>
          </span>
        )}
      </div>
    </article>
  );
};

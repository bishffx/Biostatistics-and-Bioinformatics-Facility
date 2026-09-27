import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badge?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  badge,
  action,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 ${isCenter ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}>
      {(eyebrow || badge) && (
        <div className={`flex items-center gap-2 mb-2 ${isCenter ? 'justify-center' : 'justify-between'}`}>
          {eyebrow && (
            <span className="text-[11px] font-semibold tracking-wider uppercase text-sci-700 font-sans">
              {eyebrow}
            </span>
          )}
          {badge}
        </div>
      )}

      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${isCenter ? 'items-center' : ''}`}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {action && (
          <div className="shrink-0 pt-2 md:pt-0">
            {action}
          </div>
        )}
      </div>

      <div className={`mt-5 h-[1px] bg-slate-200/80 ${isCenter ? 'w-24 mx-auto' : 'w-full'}`} />
    </div>
  );
};

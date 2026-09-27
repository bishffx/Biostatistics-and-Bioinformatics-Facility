import React, { useState } from 'react';

interface LogoProps {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
  isCompact?: boolean;
}

export const InstitutionalLogo: React.FC<LogoProps> = ({
  src,
  alt,
  fallbackText,
  className = '',
  isCompact = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center font-serif font-bold text-navy-900 border border-slate-300 bg-slate-100 rounded-sm select-none ${
          isCompact ? 'w-8 h-8 text-[10px]' : 'w-12 h-12 text-xs'
        } ${className}`}
        role="img"
        aria-label={alt}
        title={alt}
      >
        <span>{fallbackText}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`object-contain transition-all duration-200 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};

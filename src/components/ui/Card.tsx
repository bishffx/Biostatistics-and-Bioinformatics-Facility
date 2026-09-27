import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'dark' | 'outline' | 'accent-left';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'rounded-sm transition-all duration-200';

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    // Default academic card: crisp white, clean hairline border, delicate elevation
    default: 'bg-white border border-slate-200/90 shadow-subtle',
    // Interactive card: subtle elevation and tone shift on hover
    interactive: 'bg-white border border-slate-200/90 shadow-subtle hover:border-sci-300 hover:shadow-academic transition-all cursor-pointer',
    // Dark: institutional deep navy for HPC and tool highlights
    dark: 'bg-navy-900 border border-navy-700/80 text-white shadow-academic',
    // Outline: clean unpadded or padded container
    outline: 'bg-transparent border border-slate-300',
    // Accent-left: scientific block with institutional accent bar on the left
    'accent-left': 'bg-white border border-slate-200/90 border-l-4 border-l-sci-700 shadow-subtle',
  };

  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`pb-4 border-b border-slate-100 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <h3 className={`text-base font-semibold text-slate-900 tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <p className={`text-xs text-slate-500 mt-1 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500 ${className}`} {...props}>
    {children}
  </div>
);

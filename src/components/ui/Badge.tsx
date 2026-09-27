import React from 'react';

export type BadgeVariant = 
  | 'default' 
  | 'primary' 
  | 'teal' 
  | 'amber' 
  | 'outline' 
  | 'success' 
  | 'dark';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  dot?: boolean;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium font-sans rounded-sm transition-colors';
  
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wide',
    md: 'text-xs px-2.5 py-1 tracking-normal',
  };

  const variantStyles = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200',
    primary: 'bg-sci-50 text-sci-700 border border-sci-200',
    teal: 'bg-teal-50 text-teal-700 border border-teal-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    dark: 'bg-navy-900 text-slate-200 border border-navy-700',
  };

  const dotColors = {
    default: 'bg-slate-400',
    primary: 'bg-sci-600',
    teal: 'bg-teal-600',
    amber: 'bg-amber-500',
    outline: 'bg-slate-400',
    success: 'bg-emerald-500',
    dark: 'bg-teal-400',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full mr-1.5 inline-block ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

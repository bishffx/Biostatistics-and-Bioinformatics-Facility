import React from 'react';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'teal' 
  | 'amber' 
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  asLink,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium font-sans transition-all duration-150 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  };

  const variantStyles = {
    // Primary: deep navy with crisp white text
    primary: 'bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 focus:ring-navy-700 shadow-subtle border border-navy-900',
    // Secondary: clean academic white with hairline border
    secondary: 'bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 border border-slate-300 focus:ring-sci-500 shadow-subtle',
    // Outline: crisp transparent button
    outline: 'bg-transparent text-sci-700 hover:bg-sci-50 border border-sci-300 active:bg-sci-100 focus:ring-sci-500',
    // Teal: computational biology & tool server highlights
    teal: 'bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900 focus:ring-teal-600 shadow-subtle border border-teal-700',
    // Amber: official institutional highlight / urgent notices
    amber: 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 focus:ring-amber-500 shadow-subtle border border-amber-600',
    // Ghost: understated link-like button
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:ring-slate-400',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

import React from 'react';

export interface MetricDisplayProps {
  value: string | number;
  label: string;
  unit?: string;
  description?: string;
  source?: string;
  trend?: string;
  icon?: React.ReactNode;
  variant?: 'light' | 'dark' | 'outline';
}

export const MetricDisplay: React.FC<MetricDisplayProps> = ({
  value,
  label,
  unit,
  description,
  source,
  icon,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`p-5 rounded-sm border transition-all duration-200 ${
        isDark
          ? 'bg-navy-900 border-navy-700 text-white'
          : 'bg-white border-slate-200/90 text-slate-800 shadow-subtle'
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {label}
        </span>
        {icon && (
          <span className={`p-1.5 rounded ${isDark ? 'bg-navy-800 text-teal-400' : 'bg-slate-100 text-sci-700'}`}>
            {icon}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1 my-1">
        <span className={`text-3xl font-bold font-mono tracking-tight tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {value}
        </span>
        {unit && (
          <span className={`text-sm font-medium ${isDark ? 'text-teal-400' : 'text-sci-700'}`}>
            {unit}
          </span>
        )}
      </div>

      {description && (
        <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}

      {source && (
        <div className={`mt-3 pt-2 text-[10px] border-t font-mono ${isDark ? 'border-navy-800 text-slate-400' : 'border-slate-100 text-slate-400'}`}>
          Src: {source}
        </div>
      )}
    </div>
  );
};

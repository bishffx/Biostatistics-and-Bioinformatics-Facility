import React from 'react';
import { Info, AlertCircle, CheckCircle2 } from 'lucide-react';

export interface CalloutProps {
  type?: 'info' | 'mandate' | 'advisory' | 'success';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({
  type = 'info',
  title,
  children,
  className = '',
}) => {
  const styles = {
    info: {
      container: 'bg-sci-50/60 border-l-4 border-l-sci-700 border-sci-100 text-slate-800',
      icon: <Info className="w-5 h-5 text-sci-700 shrink-0 mt-0.5" />,
      titleColor: 'text-sci-900',
    },
    mandate: {
      container: 'bg-navy-950 text-slate-200 border-l-4 border-l-teal-500 border-navy-800',
      icon: <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />,
      titleColor: 'text-white',
    },
    advisory: {
      container: 'bg-amber-50/80 border-l-4 border-l-amber-600 border-amber-200 text-amber-950',
      icon: <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
      titleColor: 'text-amber-900',
    },
    success: {
      container: 'bg-emerald-50/70 border-l-4 border-l-emerald-600 border-emerald-200 text-emerald-950',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />,
      titleColor: 'text-emerald-900',
    },
  };

  const current = styles[type];

  return (
    <div className={`p-4 border rounded-sm flex items-start gap-3.5 my-4 ${current.container} ${className}`}>
      {current.icon}
      <div className="text-xs sm:text-sm leading-relaxed">
        {title && (
          <h4 className={`font-semibold font-sans mb-1 text-sm tracking-tight ${current.titleColor}`}>
            {title}
          </h4>
        )}
        <div className="font-sans opacity-95">{children}</div>
      </div>
    </div>
  );
};

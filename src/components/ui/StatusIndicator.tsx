import React from 'react';

export interface StatusIndicatorProps {
  status: 'online' | 'active' | 'in_development' | 'maintenance' | 'communicated';
  label?: string;
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  size = 'md',
  pulse = true,
}) => {
  const configs = {
    online: {
      color: 'bg-emerald-500',
      pingColor: 'bg-emerald-400',
      text: 'Online / Operational',
      textColor: 'text-emerald-700',
    },
    active: {
      color: 'bg-sci-600',
      pingColor: 'bg-sci-400',
      text: 'Active / Published',
      textColor: 'text-sci-700',
    },
    in_development: {
      color: 'bg-amber-500',
      pingColor: 'bg-amber-400',
      text: 'Under Development',
      textColor: 'text-amber-700',
    },
    maintenance: {
      color: 'bg-rose-500',
      pingColor: 'bg-rose-400',
      text: 'Under Maintenance',
      textColor: 'text-rose-700',
    },
    communicated: {
      color: 'bg-indigo-500',
      pingColor: 'bg-indigo-400',
      text: 'Communicated / In Review',
      textColor: 'text-indigo-700',
    },
  };

  const current = configs[status] || configs.online;
  const dotSize = size === 'sm' ? 'w-2 h-2' : 'w-2.5 h-2.5';

  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs">
      <span className="relative flex items-center justify-center">
        {pulse && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.pingColor}`}
          />
        )}
        <span className={`relative inline-flex rounded-full ${dotSize} ${current.color}`} />
      </span>
      <span className={`font-medium tracking-tight ${current.textColor}`}>
        {label || current.text}
      </span>
    </div>
  );
};

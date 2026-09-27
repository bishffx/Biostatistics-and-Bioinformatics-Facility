import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  isSpecial?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'biostatistics', label: 'Biostatistics', href: '#biostatistics' },
  { id: 'bioinformatics', label: 'Bioinformatics', href: '#bioinformatics' },
  { id: 'hardware-software', label: 'Hardware / Software', href: '#hardware-software' },
  { id: 'projects', label: 'Research Projects', href: '#projects', badge: 'SERB' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'publications', label: 'Publications', href: '#publications' },
  { id: 'tools-servers', label: 'Computational Tools / Web Servers', href: '#tools-servers', badge: 'Live' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'design-system', label: 'Design System', href: '#design-system', isSpecial: true },
];

export interface MainNavbarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onTabChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-navy-900 border-b border-navy-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 overflow-x-auto py-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`inline-flex items-center px-3 py-1.5 rounded-sm text-xs font-medium transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'bg-sci-700 text-white shadow-sm font-semibold'
                      : item.isSpecial
                      ? 'text-teal-300 hover:text-white hover:bg-navy-800'
                      : 'text-slate-300 hover:text-white hover:bg-navy-800'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span
                      className={`ml-1.5 px-1.5 py-0.2 rounded text-[10px] font-mono leading-none ${
                        item.badge === 'Live'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-navy-800 text-slate-300 border border-navy-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick External Server Access (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="https://nifmd-bbf.icar.gov.in/FMDSeroSurv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-teal-300 bg-navy-800/80 hover:bg-navy-800 rounded border border-navy-700 hover:border-teal-500/50 transition-colors"
            >
              <span>FMDSeroSurv</span>
              <ExternalLink className="w-3 h-3 text-teal-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:hidden py-2">
            <span className="text-xs font-semibold text-white tracking-wide uppercase">
              BBF Portal Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-navy-800 bg-navy-950 px-3 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left flex items-center justify-between px-3 py-2 rounded text-sm ${
                  isActive
                    ? 'bg-sci-700 text-white font-semibold'
                    : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-navy-800 text-slate-300 border border-navy-700">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

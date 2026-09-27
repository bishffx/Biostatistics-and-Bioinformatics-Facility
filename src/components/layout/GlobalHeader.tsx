import React, { useState, useEffect, useRef } from 'react';
import { GovtHeader } from './GovtHeader';
import { InstitutionalLogo } from './InstitutionalLogo';
import { Menu, X, ChevronRight, MapPin } from 'lucide-react';

export interface NavLink {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'biostatistics', label: 'Biostatistics', href: '#biostatistics' },
  { id: 'bioinformatics', label: 'Bioinformatics', href: '#bioinformatics' },
  { id: 'hardware-software', label: 'Hardware / Software', href: '#hardware-software' },
  { id: 'projects', label: 'Research Projects', href: '#projects' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'publications', label: 'Publications', href: '#publications' },
  { id: 'tools', label: 'Tools', href: '#tools', badge: 'Live' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export interface GlobalHeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position with IntersectionObserver on sentinel
  // Guarantees ZERO layout oscillation, ZERO frame drops, and ZERO height changes
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolled = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setIsScrolled(scrolled);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    const handleScrollFallback = () => {
      const scrolled = window.scrollY > 90;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, []);

  // Accessibility: Lock background scroll and listen for Escape key on mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full font-sans bg-white relative z-40">
      {/* 1. Official Government of India top bar (scrolls naturally with zero layout shift) */}
      <GovtHeader />

      {/* 2. Desktop Institutional Branding Bar (scrolls naturally with zero layout shift) */}
      <div className="hidden md:block border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Institutional Logos & Identity */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <InstitutionalLogo
                src="/assets/icar.png"
                alt="ICAR Emblem"
                fallbackText="ICAR"
                className="h-14 w-auto"
              />
              <InstitutionalLogo
                src="/assets/NIFMD new logo.jpg"
                alt="ICAR-NIFMD Logo"
                fallbackText="NIFMD"
                className="h-14 w-auto rounded-sm"
              />
            </div>

            <div className="border-l border-slate-200 pl-4 space-y-0.5">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                ICAR – National Institute on Foot and Mouth Disease
              </div>
              <h1 className="text-xl lg:text-2xl font-serif font-bold text-navy-950 tracking-tight leading-none">
                Biostatistics and Bioinformatics Facility
              </h1>
              <p className="text-[12px] text-slate-600 font-sans">
                A National Research &amp; Computational Biology Facility
              </p>
            </div>
          </div>

          {/* Right: Small Institutional Identity & Status Element */}
          <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-slate-200">
            <div className="text-right">
              <div className="text-xs font-semibold text-navy-950 flex items-center justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sci-700 shrink-0" />
                <span>ICAR–NIFMD</span>
              </div>
              <div className="text-[11px] text-slate-500 font-sans">
                Bhubaneswar, Odisha
              </div>
              <div className="flex items-center justify-end gap-1.5 mt-0.5 text-[10px] font-mono text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Facility Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sentinel element to detect when navbar becomes sticky */}
      <div ref={sentinelRef} className="h-px -mt-px w-full pointer-events-none" aria-hidden="true" />

      {/* 3. Sticky & Compact Institutional Navbar Container */}
      <div
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b transition-shadow duration-200 ${
          isScrolled
            ? 'shadow-academic border-slate-200/90'
            : 'border-slate-200 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* DESKTOP NAVIGATION ROW */}
          <div className="hidden md:flex items-center justify-between py-1.5 min-h-[48px]">
            {/* Scrolled Compact Brand (smoothly reveals without vertical height shifts) */}
            <div
              onClick={() => handleItemClick('home')}
              className={`flex items-center gap-2.5 cursor-pointer shrink-0 group py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 rounded-sm transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'max-w-[240px] opacity-100 pr-4 translate-x-0'
                  : 'max-w-0 opacity-0 pr-0 -translate-x-2 pointer-events-none overflow-hidden'
              }`}
              role="button"
              tabIndex={isScrolled ? 0 : -1}
              aria-label="BBF ICAR–NIFMD Home"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleItemClick('home')}
            >
              <div className="flex items-center gap-1.5 shrink-0">
                <InstitutionalLogo
                  src="/assets/icar.png"
                  alt="ICAR"
                  fallbackText="ICAR"
                  className="h-8 w-auto"
                  isCompact
                />
                <InstitutionalLogo
                  src="/assets/NIFMD new logo.jpg"
                  alt="NIFMD"
                  fallbackText="NIFMD"
                  className="h-8 w-auto rounded-sm"
                  isCompact
                />
              </div>
              <div className="whitespace-nowrap">
                <div className="text-xs font-serif font-bold text-navy-950 tracking-tight leading-none group-hover:text-sci-700 transition-colors">
                  BBF | ICAR–NIFMD
                </div>
                <div className="text-[10px] text-slate-500 font-sans">
                  Bhubaneswar, Odisha
                </div>
              </div>
            </div>

            {/* Main Navigation Links */}
            <nav
              className="flex items-center space-x-1 lg:space-x-1.5 flex-1 justify-start py-0.5 overflow-x-auto"
              aria-label="Main Institutional Navigation"
            >
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative inline-flex items-center px-3 py-2 text-xs lg:text-[13px] font-medium transition-all duration-150 rounded-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 ${
                      isActive
                        ? 'text-sci-700 font-semibold bg-sci-50'
                        : 'text-slate-700 hover:text-navy-950 hover:bg-slate-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 rounded text-[10px] font-mono leading-none bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {item.badge}
                      </span>
                    )}

                    {/* Active Bottom Indicator Bar */}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-sci-700 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Scrolled Compact Status Element on Right */}
            <div
              className={`hidden xl:flex items-center gap-2 pl-4 text-[11px] font-sans text-slate-500 shrink-0 transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-slate-700">ICAR–NIFMD</span>
              <span>•</span>
              <span>Bhubaneswar</span>
            </div>
          </div>

          {/* MOBILE HEADER BAR (Always stable, never shrinks or flickers) */}
          <div className="flex md:hidden items-center justify-between py-2.5">
            <div
              className="flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 rounded-sm"
              onClick={() => handleItemClick('home')}
              role="button"
              tabIndex={0}
              aria-label="BBF ICAR–NIFMD Home"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleItemClick('home')}
            >
              <InstitutionalLogo
                src="/assets/icar.png"
                alt="ICAR Emblem"
                fallbackText="ICAR"
                className="h-8 w-auto"
                isCompact
              />
              <InstitutionalLogo
                src="/assets/NIFMD new logo.jpg"
                alt="ICAR-NIFMD Logo"
                fallbackText="NIFMD"
                className="h-8 w-auto rounded-sm"
                isCompact
              />
              <div>
                <div className="text-xs font-serif font-bold text-navy-950 leading-tight">
                  BBF Portal
                </div>
                <div className="text-[9.5px] text-slate-500 font-sans leading-none">
                  ICAR–NIFMD, Bhubaneswar
                </div>
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 text-slate-700 hover:text-navy-950 hover:bg-slate-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-sci-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER & BACKDROP */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 flex justify-end md:hidden"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            ref={mobileMenuRef}
            className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-fade-in"
          >
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <InstitutionalLogo
                  src="/assets/icar.png"
                  alt="ICAR"
                  fallbackText="ICAR"
                  className="h-8 w-auto"
                  isCompact
                />
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-sans">
                    Facility Navigation
                  </div>
                  <div className="text-sm font-serif font-bold text-navy-950">
                    BBF | ICAR–NIFMD
                  </div>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-500 hover:text-navy-950 hover:bg-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sci-500 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Institutional Sub-tag inside Mobile Menu */}
            <div className="px-4 py-3 bg-navy-900 text-white text-xs border-b border-navy-800 flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-200">ICAR–NIFMD</div>
                <div className="text-[11px] text-slate-400">Bhubaneswar, Odisha – 752050</div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-teal-300 bg-navy-800 px-2 py-0.5 rounded border border-navy-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active</span>
              </div>
            </div>

            {/* Navigation List */}
            <nav className="flex-1 overflow-y-auto p-3 space-y-1" aria-label="Mobile Navigation Links">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-sm text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-sci-50 text-sci-800 font-semibold border-l-4 border-l-sci-700 pl-3'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-sci-700 translate-x-0.5' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-500 space-y-1.5">
              <div className="font-semibold text-slate-700">
                Biostatistics & Bioinformatics Facility
              </div>
              <div className="text-[11px] leading-relaxed">
                National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha, India
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

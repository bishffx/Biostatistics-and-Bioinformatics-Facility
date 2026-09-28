import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GovtHeader } from './GovtHeader';
import { InstitutionalLogo } from './InstitutionalLogo';
import { Menu, X, ChevronRight, MapPin } from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/research', label: 'Research' },
  { path: '/projects', label: 'Projects' },
  { path: '/publications', label: 'Publications' },
  { path: '/datasets', label: 'Datasets', badge: 'Archive' },
  { path: '/facilities', label: 'Facilities' },
  { path: '/people', label: 'People' },
  { path: '/contact', label: 'Contact' },
];

export interface GlobalHeaderProps {
  activeSection?: string;
  onNavigate?: (path: string) => void;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  activeSection,
  onNavigate,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const isItemActive = (path: string) => {
    if (activeSection) {
      if (path === '/' && activeSection === 'home') return true;
      if (path === `/${activeSection}`) return true;
    }
    if (path === '/') return currentPath === '/' || currentPath === '/home';
    return currentPath.startsWith(path);
  };

  // Monitor scroll position with IntersectionObserver on sentinel
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Accessibility: Lock background scroll and listen for Escape key on mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
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

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <header className="relative w-full z-40 font-sans">
      {/* 1. Official Government of India top bar */}
      <GovtHeader />

      {/* 2. Primary Desktop Institutional Branding Area (Permanent, zero layout shift) */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between py-3.5">
            {/* Left: Institutional Logos & Identity */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 shrink-0 focus:outline-none focus:ring-1 focus:ring-sci-500 rounded">
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
              </Link>

              <div className="border-l border-slate-200 pl-4 space-y-0.5">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  ICAR – National Institute on Foot and Mouth Disease
                </div>
                <Link to="/" className="hover:text-sci-700 transition-colors">
                  <h1 className="text-xl lg:text-2xl font-serif font-bold text-navy-950 tracking-tight leading-none">
                    Biostatistics and Bioinformatics Facility
                  </h1>
                </Link>
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-0.5">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <MapPin className="w-3 h-3 text-sci-600 shrink-0" aria-hidden="true" />
                    Bhubaneswar, Odisha – 752050
                  </span>
                  <span>•</span>
                  <span className="font-mono text-[11px] text-teal-700 font-medium">
                    Centralized Computational Resource
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Institutional Badge */}
            <div className="flex items-center gap-3">
              <div className="text-right border-r border-slate-200 pr-4 hidden lg:block">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Compute Cluster
                </div>
                <div className="flex items-center gap-1.5 justify-end text-xs font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" aria-hidden="true" />
                  Servers Operational
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Institutional Mandate
                </div>
                <div className="text-xs font-semibold text-navy-950">
                  FMD Surveillance &amp; Omics
                </div>
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
            {/* Scrolled Compact Brand */}
            <Link
              to="/"
              className={`flex items-center gap-2.5 shrink-0 group py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 rounded-sm transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'max-w-[240px] opacity-100 pr-4 translate-x-0'
                  : 'max-w-0 opacity-0 pr-0 -translate-x-2 pointer-events-none overflow-hidden'
              }`}
              aria-label="BBF ICAR–NIFMD Home"
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
            </Link>

            {/* Main Navigation Links */}
            <nav
              className="flex items-center space-x-1 lg:space-x-1.5 flex-1 justify-start py-0.5 overflow-x-auto"
              aria-label="Main Institutional Navigation"
            >
              {MAIN_NAV_ITEMS.map((item) => {
                const active = isItemActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={`relative inline-flex items-center px-3 py-2 text-xs lg:text-[13px] font-medium transition-all duration-150 rounded-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 ${
                      active
                        ? 'text-sci-700 font-semibold bg-sci-50'
                        : 'text-slate-700 hover:text-navy-950 hover:bg-slate-50'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 rounded text-[10px] font-mono leading-none bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {item.badge}
                      </span>
                    )}

                    {/* Active Bottom Indicator Bar */}
                    {active && (
                      <span
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-sci-700 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
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

          {/* MOBILE HEADER BAR */}
          <div className="flex md:hidden items-center justify-between py-2.5">
            <Link
              to="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500 rounded"
              aria-label="BBF ICAR–NIFMD Home"
            >
              <InstitutionalLogo
                src="/assets/icar.png"
                alt="ICAR"
                fallbackText="ICAR"
                className="h-9 w-auto"
                isCompact
              />
              <InstitutionalLogo
                src="/assets/NIFMD new logo.jpg"
                alt="NIFMD"
                fallbackText="NIFMD"
                className="h-9 w-auto rounded-sm"
                isCompact
              />
              <div>
                <div className="text-xs font-serif font-bold text-navy-950 leading-tight">
                  BBF | ICAR–NIFMD
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Bhubaneswar, Odisha
                </div>
              </div>
            </Link>

            {/* Hamburger Button with WCAG 2.2 44x44px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-navy-950 hover:bg-slate-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-sci-500 transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
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
                const active = isItemActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={`w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-sm text-sm font-medium transition-all ${
                      active
                        ? 'bg-sci-50 text-sci-800 font-semibold border-l-4 border-l-sci-700 pl-3'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-sci-500`}
                    aria-current={active ? 'page' : undefined}
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
                        active ? 'text-sci-700 translate-x-0.5' : 'text-slate-400'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-500 space-y-1.5">
              <div className="font-semibold text-slate-700">
                Biostatistics &amp; Bioinformatics Facility
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

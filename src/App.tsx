import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { GlobalHeader } from './components/layout/GlobalHeader';
import { Footer } from './components/layout/Footer';
import { HomeHero } from './components/home/HomeHero';
import { FacilityMissionSection } from './components/home/FacilityMissionSection';
import { SectionTransitionDivider } from './components/ui/SectionTransitionDivider';
import { SectionHeader } from './components/ui/SectionHeader';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from './components/ui/Card';
import { MetricDisplay } from './components/ui/MetricDisplay';
import { StatusIndicator } from './components/ui/StatusIndicator';
import { Callout } from './components/ui/Callout';
import { 
  Server, 
  Terminal, 
  Award, 
  ChevronRight, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { useSEO } from './hooks/useSEO';

// Code-split heavy research sections on-demand to optimize initial bundle size & FCP
const BiostatisticsSection = lazy(() => 
  import('./components/biostatistics/BiostatisticsSection').then(m => ({ default: m.BiostatisticsSection }))
);
const BioinformaticsSection = lazy(() => 
  import('./components/bioinformatics/BioinformaticsSection').then(m => ({ default: m.BioinformaticsSection }))
);
const HardwareSoftwareSection = lazy(() => 
  import('./components/infrastructure/HardwareSoftwareSection').then(m => ({ default: m.HardwareSoftwareSection }))
);
const ToolsSection = lazy(() => 
  import('./components/tools/ToolsSection').then(m => ({ default: m.ToolsSection }))
);
const ProjectsSection = lazy(() => 
  import('./components/projects/ProjectsSection').then(m => ({ default: m.ProjectsSection }))
);
const TeamSection = lazy(() => 
  import('./components/team/TeamSection').then(m => ({ default: m.TeamSection }))
);
const PublicationsSection = lazy(() => 
  import('./components/publications/PublicationsSection').then(m => ({ default: m.PublicationsSection }))
);
const ContactSection = lazy(() => 
  import('./components/contact/ContactSection').then(m => ({ default: m.ContactSection }))
);
const DesignSystemShowcase = lazy(() => 
  import('./components/DesignSystemShowcase').then(m => ({ default: m.DesignSystemShowcase }))
);

// High-performance Reading Telemetry Line (Zero root re-renders; GPU transform composition)
const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0 && barRef.current) {
            const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
            barRef.current.style.transform = `scaleX(${progress / 100})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div 
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-sci-500 via-teal-400 to-amber-500 will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

// Scholarly, minimal loading fallback for asynchronous route chunks
const SectionLoadingFallback: React.FC = () => (
  <div 
    className="min-h-[55vh] flex flex-col items-center justify-center p-12 text-center"
    role="status"
    aria-label="Loading research section"
  >
    <div className="w-9 h-9 border-2 border-slate-200 border-t-sci-600 rounded-full animate-spin mb-4" />
    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
      Loading Research Environment...
    </span>
  </div>
);

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Synchronize SEO titles, meta descriptions, canonical URLs, and URL hash
  useSEO(activeSection, setActiveSection);

  // Scroll to top cleanly when navigating between sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col bg-surface-ground overflow-x-hidden w-full">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-navy-950 focus:text-white focus:border-2 focus:border-teal-400 focus:rounded-sm focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-sci-500 font-mono text-xs font-semibold uppercase tracking-wider"
      >
        Skip to main content
      </a>

      {/* Reading Telemetry Progress Line (Independent GPU-composited renderer) */}
      <ScrollProgressBar />

      {/* 1. Unified Institutional Global Header */}
      <GlobalHeader
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      {/* 2. Main Page Content */}
      <main id="main-content" tabIndex={-1} className="flex-1 w-full overflow-x-hidden focus:outline-none">
        {/* DESIGN SYSTEM VIEW (Discreetly accessible via footer or toggle) */}
        {activeSection === 'design-system' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <div className="space-y-6">
              <div className="bg-slate-100 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    Design System &amp; Component Specification Inspector
                  </span>
                  <button
                    onClick={() => setActiveSection('home')}
                    className="text-sci-700 font-medium hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sci-500"
                  >
                    Return to Portal <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <DesignSystemShowcase />
            </div>
          </Suspense>
        )}

        {/* HOME SECTION */}
        {activeSection === 'home' && (
          <div className="space-y-8 pb-16">
            {/* World-class Computational Biology Research Facility Hero */}
            <HomeHero
              onExploreFacility={() => setActiveSection('biostatistics')}
              onExploreTools={() => setActiveSection('tools')}
            />

            {/* Scientific Section Transition: Hero -> Mandate */}
            <SectionTransitionDivider 
              marker="00.01" 
              label="INSTITUTIONAL CORE &amp; MANDATE" 
              coordinates="20.2961°N, 85.8245°E // ICAR-NIFMD"
            />

            {/* Where Statistics Meets Computational Biology */}
            <FacilityMissionSection
              onNavigateCapability={(id) => setActiveSection(id)}
            />

            {/* Scientific Section Transition: Mandate -> Analytical Capabilities */}
            <SectionTransitionDivider 
              marker="00.02" 
              label="ANALYTICAL CAPABILITIES &amp; METRICS" 
              coordinates="BBF-COMPUTE-NODE // 64-BIT WORKSTATION"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Core Quantitative Metrics */}
            <section aria-labelledby="facility-metrics-heading">
              <h2 id="facility-metrics-heading" className="sr-only">Facility Metrics &amp; Operational Statistics</h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <MetricDisplay
                  label="Web Servers"
                  value="5"
                  unit="Portals"
                  description="Deployed on institutional nifmd-bbf subdomain."
                  icon={<Server className="w-4 h-4" />}
                />
                <MetricDisplay
                  label="R Packages"
                  value="8"
                  unit="CRAN/Git"
                  description="Specialized packages for hub genes and sero-surveillance."
                  icon={<Terminal className="w-4 h-4" />}
                />
                <MetricDisplay
                  label="Sponsored Grants"
                  value="4"
                  unit="Active"
                  description="Funded by DST-SERB, Govt. of Odisha, and ICAR."
                  icon={<Award className="w-4 h-4" />}
                />
                <MetricDisplay
                  label="Master's Dissertations"
                  value="8"
                  unit="Theses"
                  description="Students graduated from BBF in bioinformatics."
                  icon={<BookOpen className="w-4 h-4" />}
                />
              </div>
            </section>

            {/* Institutional Mandate Callout */}
            <Callout type="mandate" title="Mandate of the Facility">
              Coordinate and manage statistical and informatics activities in ICAR-NIFMD, providing cutting-edge computational solutions for Foot and Mouth Disease surveillance, multi-omics integration, and machine learning models for disease prediction.
            </Callout>

            {/* Additional content blocks to demonstrate smooth page scrolling & compact header behavior */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <Card variant="accent-left">
                <CardHeader>
                  <Badge variant="primary" size="sm">Biostatistics</Badge>
                  <CardTitle className="mt-2">Biostatistical Modeling &amp; Study Design</CardTitle>
                  <CardDescription>
                    Rigorous experimental design, ROC power analysis of diagnostics, sampling frameworks for sero-surveillance, and epidemiological forecasting.
                  </CardDescription>
                </CardHeader>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <div>• Sero-surveillance parameter estimation in livestock-wildlife interface</div>
                  <div>• Sample size determination for vaccine quality control studies</div>
                  <div>• Power analysis for high-throughput single-cell experiments</div>
                </div>
                <CardFooter>
                  <Button size="sm" variant="outline" onClick={() => setActiveSection('biostatistics')}>
                    View All Services <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="accent-left">
                <CardHeader>
                  <Badge variant="teal" size="sm">Bioinformatics</Badge>
                  <CardTitle className="mt-2">Computational Genomics &amp; In-Silico Vaccines</CardTitle>
                  <CardDescription>
                    High-throughput Next Generation Sequencing (RNA-seq, scRNA-seq), epitope mapping, 3D macromolecular modeling, and machine learning for virus serotyping.
                  </CardDescription>
                </CardHeader>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <div>• High-performance computing modules for NGS data analysis</div>
                  <div>• Machine learning approaches for FMDV VP1 serotype prediction</div>
                  <div>• Multi-epitope subunit vaccine design (SAT2 serotype)</div>
                </div>
                <CardFooter>
                  <Button size="sm" variant="outline" onClick={() => setActiveSection('bioinformatics')}>
                    Explore Capabilities <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            </div>
          </div>
        )}

        {/* BIOSTATISTICS SECTION */}
        {activeSection === 'biostatistics' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <BiostatisticsSection />
          </Suspense>
        )}

        {/* BIOINFORMATICS SECTION */}
        {activeSection === 'bioinformatics' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <BioinformaticsSection />
          </Suspense>
        )}

        {/* HARDWARE / SOFTWARE SECTION */}
        {activeSection === 'hardware-software' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <HardwareSoftwareSection />
          </Suspense>
        )}

        {/* COMPUTATIONAL TOOLS / WEB SERVERS SECTION */}
        {activeSection === 'tools' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <ToolsSection />
          </Suspense>
        )}

        {/* RESEARCH PROJECTS SECTION */}
        {activeSection === 'projects' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <ProjectsSection />
          </Suspense>
        )}

        {/* TEAM SECTION */}
        {activeSection === 'team' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <TeamSection />
          </Suspense>
        )}

        {/* PUBLICATIONS SECTION */}
        {activeSection === 'publications' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <PublicationsSection />
          </Suspense>
        )}

        {/* CONTACT SECTION */}
        {activeSection === 'contact' && (
          <Suspense fallback={<SectionLoadingFallback />}>
            <ContactSection />
          </Suspense>
        )}

        {/* SECTION STUBS USING THE REUSABLE SYSTEM (Only for unexpected section keys) */}
        {activeSection !== 'home' && activeSection !== 'design-system' && activeSection !== 'biostatistics' && activeSection !== 'bioinformatics' && activeSection !== 'hardware-software' && activeSection !== 'tools' && activeSection !== 'projects' && activeSection !== 'team' && activeSection !== 'publications' && activeSection !== 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <SectionHeader
              eyebrow="Portal Section"
              title={
                activeSection === 'hardware-software'
                  ? 'Hardware / Software'
                  : activeSection.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
              }
              description={`Institutional research section for ${activeSection.replace('-', ' ')} at ICAR-NIFMD, Bhubaneswar.`}
              action={
                <Button variant="secondary" size="sm" onClick={() => setActiveSection('home')}>
                  Return to Home
                </Button>
              }
            />

            <Card variant="default">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="teal">Under Active Layout</Badge>
                  <StatusIndicator status="active" label="Design Token Framework Active" />
                </div>
                <CardTitle className="mt-3 text-lg">
                  {activeSection.toUpperCase()} — Institutional Framework Active
                </CardTitle>
                <CardDescription>
                  This view will seamlessly render the verified institutional data structures already established in the architecture specification.
                </CardDescription>
              </CardHeader>

              <div className="text-xs text-slate-600 space-y-3">
                <p>
                  Global header active states and sticky scroll behavior are fully synchronized across all 9 primary navigation sections.
                </p>
                <div className="bg-slate-50 p-4 rounded border border-slate-200 font-mono text-xs">
                  Active Section ID: <span className="text-sci-700 font-bold">{activeSection}</span> | Route: <span className="text-slate-800">#{activeSection}</span>
                </div>
              </div>

              <CardFooter>
                <span className="font-mono text-[11px] text-slate-500">ICAR-NIFMD BBF</span>
                <Button size="sm" variant="outline" onClick={() => setActiveSection('design-system')}>
                  Inspect Design System
                </Button>
              </CardFooter>
            </Card>

            {/* Extra spacer card to test scrolling on subpages */}
            <div className="h-64 bg-slate-50 border border-dashed border-slate-300 rounded p-6 flex items-center justify-center text-slate-400 text-sm">
              Page content container ready for next development phase
            </div>
          </div>
        )}
      </main>

      {/* 3. Footer with Discreet Design System Switcher */}
      <Footer onNavigate={setActiveSection} />
      
      {/* Quick utility link for Design System */}
      <div className="bg-navy-950/80 border-t border-navy-900 py-1.5 px-4 text-center text-[10px] text-slate-400">
        <span>BBF Institutional Portal • </span>
        <button
          onClick={() => setActiveSection('design-system')}
          className="text-teal-400 hover:text-teal-300 underline font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
        >
          View Design System Specs
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ScientificHeroVisualization } from './ScientificHeroVisualization';
import { ScientificDataBackground } from '../ui/ScientificDataBackground';
import { Button } from '../ui/Button';
import { 
  Server, 
  ChevronRight, 
  MapPin, 
  UserCheck, 
  Dna, 
  Activity, 
  ShieldCheck 
} from 'lucide-react';

export interface HomeHeroProps {
  onExploreFacility?: () => void;
  onExploreTools?: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onExploreFacility,
  onExploreTools,
}) => {
  return (
    <section 
      className="relative bg-navy-950 text-white overflow-hidden border-b border-navy-800"
      aria-label="BBF Institutional Hero"
    >
      {/* Background Abstract Scientific Grid & Mathematical Coordinate Layer */}
      <ScientificDataBackground
        variant="mathematical"
        density="low"
        speed="slow"
        opacity={0.3}
        interactive={false}
      />

      {/* 1. Procedural Scientific Computational Visualization */}
      <ScientificHeroVisualization />

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow & Institutional Identity */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-sm bg-navy-900/90 border border-teal-500/30 text-teal-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest backdrop-blur-sm max-w-full truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
              <span className="truncate">BIOSTATISTICS &amp; BIOINFORMATICS FACILITY</span>
            </div>

            <div className="text-[11px] sm:text-sm font-semibold tracking-wider uppercase text-slate-300 font-sans flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sci-400 shrink-0" />
              <span className="truncate">ICAR–NATIONAL INSTITUTE ON FOOT AND MOUTH DISEASE</span>
            </div>
          </div>

          {/* Main Headline (Source Serif 4 / Editorial Authority) */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
            Computational Science for Animal Health &amp; Infectious Disease Research
          </h1>

          {/* Supporting Content */}
          <p className="text-sm sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl font-normal">
            A centralized institutional facility providing biostatistics, bioinformatics, computational biology, statistical consulting and research tools for animal science and infectious disease epidemiology.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link to="/about" className="w-full sm:w-auto">
              <Button
                variant="teal"
                size="lg"
                onClick={onExploreFacility}
                className="w-full sm:w-auto min-h-[44px] justify-center"
                icon={<ChevronRight className="w-4 h-4" />}
              >
                Explore the Facility
              </Button>
            </Link>

            <Link to="/research" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreTools}
                className="w-full sm:w-auto min-h-[44px] justify-center"
                icon={<Server className="w-4 h-4" />}
              >
                Research &amp; Capabilities
              </Button>
            </Link>

            {/* Quick Live Tool Indicator */}
            <div className="flex sm:inline-flex items-center justify-center gap-2 px-3 py-2 rounded-sm bg-navy-900/80 border border-navy-700/80 text-xs font-mono text-slate-300 backdrop-blur-xs min-h-[40px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>5 Web Servers Operational</span>
            </div>
          </div>
        </div>

        {/* 3. Institutional Metadata Strip */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs font-sans">
            
            {/* Institute & Location */}
            <div className="flex items-start gap-3 p-3 rounded-sm bg-navy-900/60 border border-navy-800 backdrop-blur-xs">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Institution
                </div>
                <div className="font-semibold text-slate-200 mt-0.5">
                  ICAR–NIFMD
                </div>
                <div className="text-slate-400 text-[11px]">
                  Bhubaneswar, Odisha, India
                </div>
              </div>
            </div>

            {/* Senior Scientist & PI */}
            <div className="flex items-start gap-3 p-3 rounded-sm bg-navy-900/60 border border-navy-800 backdrop-blur-xs">
              <UserCheck className="w-4 h-4 text-sci-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Senior Scientist &amp; PI
                </div>
                <div className="font-semibold text-slate-200 mt-0.5">
                  Dr. Samarendra Das
                </div>
                <div className="text-slate-400 text-[11px]">
                  Principal Investigator, BBF
                </div>
              </div>
            </div>

            {/* Research Scope */}
            <div className="flex items-start gap-3 p-3 rounded-sm bg-navy-900/60 border border-navy-800 backdrop-blur-xs">
              <Dna className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Core Mandate
                </div>
                <div className="font-semibold text-slate-200 mt-0.5">
                  Multi-Omics &amp; AI
                </div>
                <div className="text-slate-400 text-[11px]">
                  scRNA-seq, In-Silico Vaccines
                </div>
              </div>
            </div>

            {/* Quantitative Scope */}
            <div className="flex items-start gap-3 p-3 rounded-sm bg-navy-900/60 border border-navy-800 backdrop-blur-xs">
              <Activity className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Statistical Epidemiology
                </div>
                <div className="font-semibold text-slate-200 mt-0.5">
                  Sero-Surveillance
                </div>
                <div className="text-slate-400 text-[11px]">
                  FMDV Modeling &amp; ROC Power
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

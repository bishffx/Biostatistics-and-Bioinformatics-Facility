import React from 'react';
import { InfrastructurePipelineVisualizer } from './InfrastructurePipelineVisualizer';
import { SoftwareEcosystemCatalog } from './SoftwareEcosystemCatalog';
import { 
  Server, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';

export const HardwareSoftwareSection: React.FC = () => {
  return (
    <section 
      className="py-16 lg:py-24 bg-surface-ground border-b border-slate-200/90 font-sans"
      aria-labelledby="infrastructure-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sci-700">
              Computational Assets
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-sans text-slate-500">
              Hardware &amp; Software Environment
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 
              id="infrastructure-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight"
            >
              Research Infrastructure
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              The computing infrastructure supports NGS and computational biology workflows including sequence alignment, variant calling, network analysis, and computational analysis pipelines.
            </p>
          </div>
        </div>

        {/* DUAL COMPUTING SYSTEM HIGHLIGHT CARDS (Grounded strictly in project data) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Linux Computing Environment */}
          <div className="bg-white p-6 sm:p-7 rounded-sm border border-slate-200 shadow-subtle space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded bg-navy-900 text-teal-400">
                  <Terminal className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-navy-950">
                    High-End Linux Computing System
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    POSIX Terminal Environment • 64-bit Architecture
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200">
                Operational
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Dedicated high-end computing systems running enterprise Linux OS, equipped with specialized modules for all intensive stages of Next-Generation Sequencing (NGS) data processing.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Core Computational Workflows
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Sequence Alignment (STAR / BWA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Variant Calling &amp; Assembly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>ChIP-seq / snATAC-seq Peak Calling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Molecular Dynamics Simulation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Windows Computational Workstation System */}
          <div className="bg-white p-6 sm:p-7 rounded-sm border border-slate-200 shadow-subtle space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded bg-navy-900 text-sci-400">
                  <Server className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-navy-950">
                    High-End Windows System
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Multi-Core Analytical Workstation • 64-bit Architecture
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200">
                Operational
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Dedicated Windows computational systems supporting interactive biostatistical software, power/sample size calculations, molecular visualization, and web server host administration.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Core Analytical Workflows
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sci-600 shrink-0" />
                  <span>PASS &amp; Solo Power Calculations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sci-600 shrink-0" />
                  <span>Network Analysis (Cytoscape)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sci-600 shrink-0" />
                  <span>Interactive Mathematical Modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sci-600 shrink-0" />
                  <span>Institutional Web Server Hosting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5-TIER COMPUTATIONAL TOPOLOGY VISUALIZER */}
        <div className="space-y-4">
          <InfrastructurePipelineVisualizer />
        </div>

        {/* SOFTWARE ECOSYSTEM CATALOG */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                Software Ecosystem
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mt-1">
                Validated Statistical &amp; Bioinformatics Tooling
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Institutional Licenses &amp; Open-Source Frameworks
            </span>
          </div>

          <SoftwareEcosystemCatalog />
        </div>

      </div>
    </section>
  );
};

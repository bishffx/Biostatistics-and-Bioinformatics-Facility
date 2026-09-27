import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Activity, 
  ArrowRight,
  Server
} from 'lucide-react';

export interface InfrastructureTier {
  id: string;
  step: string;
  name: string;
  category: string;
  description: string;
  subModules: string[];
  techStack: string[];
  osSupport: string;
}

export const INFRASTRUCTURE_TIERS: InfrastructureTier[] = [
  {
    id: 'data',
    step: 'Tier 01',
    name: 'DATA',
    category: 'Biological Datasets & Sequence Ingestion',
    description:
      'High-throughput raw data ingestion tier supporting next-generation sequencing archives, single-cell suspensions, and sero-surveillance survey data.',
    subModules: [
      'Paired-end NGS FASTQ repositories',
      'Viral VP1 DNA & Sanger sequencing reads',
      'Single-cell RNA-seq count matrices',
      'National epidemiological survey records',
    ],
    techStack: ['FASTA / FASTQ', 'BAM / SAM', '10x Genomics HDF5', 'Survey CSV/RDS'],
    osSupport: 'Linux & Windows Shared Storage',
  },
  {
    id: 'compute',
    step: 'Tier 02',
    name: 'COMPUTE',
    category: 'High-End Computing Systems',
    description:
      'Dedicated multi-core workstation and server computing infrastructure configured with dual OS environments for CPU-intensive bioinformatics and biostatistical simulations.',
    subModules: [
      'High-end 64-bit Linux computing environment',
      'High-end 64-bit Windows computational workstations',
      'Multi-threaded process execution',
      'Isolated environment sandboxing (Conda / R-env)',
    ],
    techStack: ['Enterprise Linux OS', 'Windows Server OS', 'POSIX Shell', 'Conda Environments'],
    osSupport: 'Dual Linux / Windows System Architecture',
  },
  {
    id: 'pipelines',
    step: 'Tier 03',
    name: 'PIPELINES',
    category: 'Bioinformatics & NGS Processing Modules',
    description:
      'Automated computational pipeline modules executing all sequential stages of NGS processing from quality filtering to peak calling.',
    subModules: [
      'QC & Adapter Trimming (FastQC, Trimmomatic)',
      'High-throughput Sequence Alignment (STAR, BWA)',
      'Variant Calling & Consensus Assembly (GATK, SAMtools)',
      'Peak Calling & Annotation (MACS2, ChIPseeker)',
    ],
    techStack: ['STAR', 'BWA-MEM', 'SAMtools', 'GATK', 'Cutadapt'],
    osSupport: 'Optimized for High-Throughput Linux Terminal',
  },
  {
    id: 'analysis',
    step: 'Tier 04',
    name: 'ANALYSIS',
    category: 'Statistical & Algorithmic Engines',
    description:
      'Statistical computation and machine learning engines analyzing differential expression, network topology, molecular docking, and diagnostic power.',
    subModules: [
      'Negative binomial differential expression analysis',
      'Differential gene network analysis (dhga)',
      '3D molecular docking & epitope binding evaluation',
      'Sample size & power computation (PASS, Solo)',
    ],
    techStack: ['R / Bioconductor', 'Python / Anaconda', 'PASS', 'MATLAB', 'AutoDock Vina'],
    osSupport: 'Cross-Platform Execution',
  },
  {
    id: 'interpretation',
    step: 'Tier 05',
    name: 'INTERPRETATION',
    category: 'Biological & Epidemiological Insights',
    description:
      'Final translational tier delivering network visualization, serotype prediction, vaccine matching scores, and institutional web server deployment.',
    subModules: [
      'Network biology pathway mapping (Cytoscape, GSEA)',
      'FMDV serotype & lineage classification',
      'Antigenic matching score (r1-value) reports',
      'Deployed institutional web servers (FMDSeroSurv, FMDVSerPred)',
    ],
    techStack: ['Cytoscape', 'GSEA', 'FMDVSerPred', 'MolEpidPred', 'Shiny / Web'],
    osSupport: 'Web Server & Interactive Visual Analytics',
  },
];

export const InfrastructurePipelineVisualizer: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>('compute');

  const activeTier = 
    INFRASTRUCTURE_TIERS.find((t) => t.id === activeTierId) || INFRASTRUCTURE_TIERS[1];

  return (
    <div className="bg-navy-950 border border-navy-800 rounded-sm p-6 sm:p-8 shadow-academic space-y-8 font-sans text-white">
      
      {/* Visualizer Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-800 pb-5">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-semibold flex items-center gap-2">
            <Server className="w-3.5 h-3.5 text-teal-400" />
            <span>High-End Scientific Computing Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
            Data-to-Interpretation Computational Topology
          </h3>
        </div>

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Dual Environment (Linux &amp; Windows)</span>
        </div>
      </div>

      {/* 5-TIER HORIZONTAL RELATIONSHIP ARCHITECTURE */}
      <div className="relative">
        {/* Visual Connecting Pathway (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 bg-navy-800 z-0">
          <div className="h-full bg-gradient-to-r from-sci-500 via-teal-400 to-amber-400 opacity-60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
          {INFRASTRUCTURE_TIERS.map((tier) => {
            const isActive = tier.id === activeTierId;

            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`relative flex flex-col text-left p-4 rounded-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  isActive
                    ? 'bg-navy-850 border-teal-500 text-white shadow-lg'
                    : 'bg-navy-900/80 hover:bg-navy-900 border-navy-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className={`font-mono text-[10px] tracking-wider uppercase font-semibold ${
                    isActive ? 'text-teal-300' : 'text-slate-400'
                  }`}>
                    {tier.step}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-teal-400 animate-ping' : 'bg-navy-700'}`} />
                </div>

                {/* Tier Name */}
                <div className="font-mono text-base font-bold tracking-tight text-white">
                  {tier.name}
                </div>

                {/* Subtitle */}
                <p className="text-[11px] text-slate-400 mt-1 leading-snug font-sans">
                  {tier.category}
                </p>

                {/* Active Indicator Arrow */}
                {isActive && (
                  <div className="mt-3 pt-2 border-t border-navy-800 flex items-center justify-between text-[10px] font-mono text-teal-300">
                    <span>Inspect Node</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* DETAILED ACTIVE TIER TERMINAL INSPECTOR */}
      <div className="bg-navy-900/90 rounded border border-navy-800 p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-800 pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="font-mono text-xs text-teal-400 font-bold">{activeTier.step}:</span>
            <span className="font-mono text-sm font-bold text-white tracking-wide">{activeTier.name} NODE</span>
            <span className="text-slate-400 text-xs font-sans">— {activeTier.category}</span>
          </div>

          <div className="text-[11px] font-mono text-slate-400 bg-navy-850 px-2 py-0.5 rounded border border-navy-700">
            OS: {activeTier.osSupport}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          {activeTier.description}
        </p>

        {/* Sub-modules & Software Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Active Workflows */}
          <div className="bg-navy-950/80 p-4 rounded border border-navy-800 space-y-2">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-semibold flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-teal-400" />
              <span>Computational Workflows Supported</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
              {activeTier.subModules.map((mod, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Environment */}
          <div className="bg-navy-950/80 p-4 rounded border border-navy-800 space-y-2">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-semibold flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-sci-400" />
              <span>Technologies &amp; Formats</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeTier.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-1 rounded bg-navy-900 border border-navy-700 text-xs font-mono text-teal-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

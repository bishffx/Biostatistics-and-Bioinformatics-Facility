import React, { useState } from 'react';
import { BioinformaticsModalityVisualizer } from './BioinformaticsModalityVisualizer';
import { OmicsWorkflowPipeline } from './OmicsWorkflowPipeline';
import { ScientificDataBackground } from '../ui/ScientificDataBackground';
import { 
  Dna, 
  ShieldAlert, 
  BrainCircuit, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

export interface OmicsPillar {
  id: 'ngs' | 'vaccine' | 'ai';
  tag: string;
  title: string;
  leadDesc: string;
  capabilitiesList: string[];
  scientificTools: string[];
  icon: React.ReactNode;
}

export const BIOINFORMATICS_PILLARS: OmicsPillar[] = [
  {
    id: 'ngs',
    tag: 'High-Throughput Sequencing',
    title: 'NGS / Multi-Omics',
    leadDesc:
      'Rigorous end-to-end computational frameworks for high-throughput sequencing datasets, enabling single-cell transcriptomics, epigenomic profiling, and differential expression in host-pathogen systems.',
    capabilitiesList: [
      'Bioinformatics study planning, power & sample size determination for RNA-seq and scRNA-seq',
      'Single-cell RNA-seq data analysis and specialized method and bioinformatics tool development',
      'Data processing & analysis for NGS transcriptomics (RNAseq, scRNAseq, snATACseq, ChIPseq)',
      'Proteomics, metabolomics data analysis & multi-omics data integration',
      'Gene regulatory network modeling & differential co-expression analysis',
    ],
    scientificTools: ['R / Bioconductor', 'STAR / BWA', 'Seurat / Scanpy', 'MACS2', 'Cytoscape'],
    icon: <Dna className="w-5 h-5 text-teal-600" />,
  },
  {
    id: 'vaccine',
    tag: 'Structural Immunoinformatics',
    title: 'In-Silico Vaccine Design',
    leadDesc:
      'Computational modeling of 3D macromolecular antigens, structure prediction, conformational epitope prediction, and molecular dynamics simulations to engineer novel recombinant and subunit vaccines.',
    capabilitiesList: [
      '3D structure prediction of biological macromolecules & homology modeling',
      'Molecular interaction analysis & molecular docking (VP1/VP2/VP3 viral capsids)',
      'Molecular Dynamics (MD) simulation for thermodynamic conformational stability',
      'B-cell & T-cell epitope prediction, MHC-peptide binding analysis & immune simulation',
      'Multi-epitope subunit vaccine design (FMDV SAT2, LSDV & mRNA vaccine constructs)',
    ],
    scientificTools: ['AlphaFold / ColabFold', 'GROMACS', 'AutoDock Vina', 'IEDB Tools', 'PyMOL'],
    icon: <ShieldAlert className="w-5 h-5 text-sky-600" />,
  },
  {
    id: 'ai',
    tag: 'Algorithmic Epidemiology',
    title: 'AI / Machine Learning',
    leadDesc:
      'Artificial intelligence and supervised machine learning architectures trained on genomic sequence features for automated virus serotyping, lineage prediction, and vaccine matching.',
    capabilitiesList: [
      'Machine learning approaches for FMD virus serotype & lineage prediction using VP1 sequence data',
      'Machine learning model for vaccine matching score (r1-value) prediction',
      'Machine / deep learning techniques in multi-omics data analysis and applications',
      'Machine learning and Artificial Intelligence in infectious animal disease control & management',
      'Develop specialized bioinformatics algorithms and software for emerging areas of infectious disease omics',
    ],
    scientificTools: ['Scikit-learn', 'PyTorch', 'FMDVSerPred', 'MolEpidPred', 'BootMRMR'],
    icon: <BrainCircuit className="w-5 h-5 text-amber-600" />,
  },
];

export const BioinformaticsSection: React.FC = () => {
  const [activeModality, setActiveModality] = useState<'ngs' | 'vaccine' | 'ai'>('ngs');

  const activePillar = 
    BIOINFORMATICS_PILLARS.find((p) => p.id === activeModality) || BIOINFORMATICS_PILLARS[0];

  return (
    <section 
      className="relative py-16 lg:py-24 bg-surface-ground border-b border-slate-200/90 font-sans overflow-hidden"
      aria-labelledby="bioinformatics-section-title"
    >
      {/* Abstract Computational Biology Background Layer */}
      <ScientificDataBackground
        variant="genomic-traces"
        density="low"
        speed="slow"
        opacity={0.32}
        interactive={true}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700">
              Institutional Expertise
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-sans text-slate-500">
              Bioinformatics Facility Mandate
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 
              id="bioinformatics-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight"
            >
              Computational Biology Across the Omics Landscape
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              The BBF supports computational analysis of modern biological datasets and computational approaches for infectious disease research.
            </p>
          </div>
        </div>

        {/* 3 CORE CAPABILITY PILLARS WITH INTERACTIVE SYNCHRONIZATION */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
              Core Computational Biology Pillars
            </h3>
            <span className="text-xs font-mono text-slate-400">
              [ Select pillar to inspect architecture ]
            </span>
          </div>

          {/* Three Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BIOINFORMATICS_PILLARS.map((pillar) => {
              const isActive = pillar.id === activeModality;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveModality(pillar.id)}
                  className={`text-left p-5 rounded-sm border transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    isActive
                      ? 'bg-white border-teal-600 shadow-academic border-t-4 border-t-teal-600'
                      : 'bg-white/70 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                        {pillar.tag}
                      </span>
                      <div className={`p-1.5 rounded ${isActive ? 'bg-teal-50' : 'bg-slate-100'}`}>
                        {pillar.icon}
                      </div>
                    </div>

                    <h4 className={`text-lg font-serif font-bold ${isActive ? 'text-navy-950' : 'text-slate-800'}`}>
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-2">
                      {pillar.leadDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                    <span className={isActive ? 'text-teal-700 font-semibold' : 'text-slate-500'}>
                      {isActive ? 'Active Pipeline Architecture' : 'View Architecture'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-teal-700 translate-x-1' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Synchronized Modality Architecture Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            {/* Visualizer Canvas/SVG */}
            <div className="lg:col-span-7">
              <BioinformaticsModalityVisualizer modality={activeModality} />
            </div>

            {/* Structured Deliverables for Active Pillar */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-sm border border-slate-200 shadow-subtle space-y-6">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-teal-700 font-semibold">
                  Facility Analytical Scope
                </div>
                <h4 className="text-xl font-serif font-bold text-navy-950 mt-1">
                  {activePillar.title}
                </h4>
                <p className="text-xs text-slate-600 font-sans mt-2 leading-relaxed">
                  {activePillar.leadDesc}
                </p>
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Key Capabilities
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activePillar.capabilitiesList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2 rounded bg-surface-ground border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institutional Software & Algorithms */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Computational Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activePillar.scientificTools.map((tool, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-STAGE LAYERED OMICS WORKFLOW */}
        <div className="pt-4">
          <OmicsWorkflowPipeline />
        </div>

      </div>
    </section>
  );
};

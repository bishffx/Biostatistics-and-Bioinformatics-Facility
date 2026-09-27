import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  LineChart, 
  Boxes, 
  Sparkles, 
  ChevronRight,
  Activity
} from 'lucide-react';

export interface WorkflowStage {
  id: string;
  step: string;
  title: string;
  shortDesc: string;
  detailedScope: string;
  inputData: string;
  algorithms: string;
  institutionalOutputs: string;
  icon: React.ReactNode;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: 'data',
    step: 'Stage 01',
    title: 'Biological Data',
    shortDesc: 'Multi-omics biological inputs & sequencing runs',
    detailedScope:
      'Acquisition of high-throughput molecular datasets including paired-end Illumina/PacBio NGS reads, single-cell suspensions, VP1 capsid nucleotide sequences, and mass spectrometry proteomic profiles.',
    inputData: 'FASTQ reads, VP1 DNA sequences, 10x Genomics scRNA-seq matrices',
    algorithms: 'Base-calling quality thresholds (Q30+), demographic metadata tagging',
    institutionalOutputs: 'Validated raw multi-omics repositories for infectious animal disease',
    icon: <Database className="w-4 h-4 text-sky-400" />,
  },
  {
    id: 'processing',
    step: 'Stage 02',
    title: 'Processing',
    shortDesc: 'Quality trimming, alignment & normalization',
    detailedScope:
      'Rigorous bioinformatic pre-processing pipelines: FastQC evaluation, adapter removal (Cutadapt/Trimmomatic), splice-aware genome alignment (STAR/HISAT2), snATAC-seq peak calling, and UMI deduplication.',
    inputData: 'Raw FASTQ files, Host reference genomes (Bovine, Ovine, Porcine)',
    algorithms: 'Burrows-Wheeler Transform (BWA-MEM), STAR aligner, MACS2 peak caller',
    institutionalOutputs: 'BAM alignments, count matrices, normalized TPM/FPKM tables',
    icon: <Cpu className="w-4 h-4 text-teal-400" />,
  },
  {
    id: 'analysis',
    step: 'Stage 03',
    title: 'Analysis',
    shortDesc: 'Differential expression & structural mapping',
    detailedScope:
      'Exploratory data analysis identifying differentially expressed genes (DESeq2/edgeR), single-cell cluster marker discovery (Seurat/Scanpy), B/T-cell epitope scanning, and gene set enrichment analyses (GSEA).',
    inputData: 'Normalized expression matrices, viral protein sequences',
    algorithms: 'Negative binomial generalized linear models, Wald test, Fisher exact test',
    institutionalOutputs: 'Volcano plots, cluster dendrograms, candidate epitope affinity lists',
    icon: <LineChart className="w-4 h-4 text-emerald-400" />,
  },
  {
    id: 'modeling',
    step: 'Stage 04',
    title: 'Computational Modeling',
    shortDesc: 'Machine learning & molecular simulations',
    detailedScope:
      'Algorithmic modeling of biological complexity: single-cell gene regulatory networks, machine learning classifiers for FMDV lineage determination, and molecular dynamics simulations of subunit vaccine candidates.',
    inputData: 'Expression networks, 3D macromolecular PDB coordinates',
    algorithms: 'Random Forest, Support Vector Machines, GROMACS molecular dynamics (100ns)',
    institutionalOutputs: 'FMDVSerPred & MolEpidPred predictive models, docked protein complexes',
    icon: <Boxes className="w-4 h-4 text-indigo-400" />,
  },
  {
    id: 'insight',
    step: 'Stage 05',
    title: 'Biological Insight',
    shortDesc: 'Translational vaccine & epidemiology outcomes',
    detailedScope:
      'Translation of computational findings into actionable biological decisions: antigenic matching (r1-value prediction), novel multi-epitope subunit vaccine constructs, and serotype surveillance parameter guidance.',
    inputData: 'Model predictions, docked conformations, network hub scores',
    algorithms: 'Antigenic cartography, in-silico immune simulation (C-ImmSim)',
    institutionalOutputs: 'Vaccine candidate designs (SAT2), surveillance guidance for NADCP',
    icon: <Sparkles className="w-4 h-4 text-amber-400" />,
  },
];

export const OmicsWorkflowPipeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('processing');

  const activeStage = 
    WORKFLOW_STAGES.find((s) => s.id === activeStageId) || WORKFLOW_STAGES[1];

  return (
    <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-8 font-sans">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-teal-700 font-semibold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
            <span>Layered Scientific Architecture &amp; Data Flow</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mt-0.5">
            End-to-End Computational Workflow
          </h3>
        </div>

        <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping inline-block" />
          <span>[ 5 Continuous Pipeline Stages &bull; Active Data Stream ]</span>
        </div>
      </div>

      {/* 5-STAGE HORIZONTAL / LAYERED WORKFLOW STEPS */}
      <div className="relative">
        
        {/* Animated Continuous Pipeline Conduit (Desktop) */}
        <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-2 -translate-y-1/2 z-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            {/* Base Conduit line */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#E2E8F0" strokeWidth="2" />
            {/* Animated Data Stream Overlay */}
            <line 
              x1="0" 
              y1="50%" 
              x2="100%" 
              y2="50%" 
              stroke="#0D9488" 
              strokeWidth="2.5" 
              className="animate-data-stream opacity-70" 
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
          {WORKFLOW_STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative flex flex-col text-left p-4 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sci-500 ${
                  isActive
                    ? 'bg-navy-900 border-navy-700 text-white shadow-academic -translate-y-1'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'
                }`}
              >
                {/* Node Pipeline Connector Dot */}
                <div 
                  className={`hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 items-center justify-center transition-colors ${
                    isActive 
                      ? 'bg-teal-400 border-navy-900 shadow-xs' 
                      : 'bg-white border-slate-300'
                  }`}
                  aria-hidden="true"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-navy-950 animate-pulse' : 'bg-slate-300'}`} />
                </div>

                {/* Stage Tag & Icon */}
                <div className="flex items-center justify-between gap-2 mb-2 mt-1">
                  <span 
                    className={`font-mono text-[10px] tracking-wider uppercase font-semibold ${
                      isActive ? 'text-teal-300' : 'text-slate-400'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <div className={`p-1.5 rounded transition-transform ${isActive ? 'bg-navy-800 scale-110' : 'bg-slate-100'}`}>
                    {stage.icon}
                  </div>
                </div>

                {/* Stage Title */}
                <h4 className={`text-sm font-serif font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {stage.title}
                </h4>

                {/* Short Subtext */}
                <p className={`text-[11px] mt-1 leading-snug ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {stage.shortDesc}
                </p>

                {/* Active Indicator Arrow */}
                {isActive && (
                  <div className="mt-3 pt-2 border-t border-navy-800 flex items-center justify-between text-[10px] font-mono text-teal-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping inline-block" />
                      <span>Active Stage</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* DETAILED ACTIVE STAGE INSPECTOR */}
      <div className="p-5 sm:p-6 rounded-sm bg-surface-ground border border-slate-200/90 space-y-4 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-teal-700">{activeStage.step}:</span>
            <h4 className="text-lg font-serif font-bold text-navy-950">{activeStage.title}</h4>
          </div>
          <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>BBF High-Performance Computational Node</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
          {activeStage.detailedScope}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-medium">Input Modalities</div>
            <div className="text-slate-800 font-medium">{activeStage.inputData}</div>
          </div>

          <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-medium">Algorithmic Suite</div>
            <div className="text-slate-800 font-medium">{activeStage.algorithms}</div>
          </div>

          <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-medium">Institutional Deliverables</div>
            <div className="text-teal-800 font-medium">{activeStage.institutionalOutputs}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

export interface SoftwareTool {
  name: string;
  category: 'Statistical Environment' | 'Multi-Omics Suite' | 'Power & Sample Size' | 'Network Biology' | 'Mathematical Modeling';
  roleInBBF: string;
  capabilities: string[];
  docUrl?: string;
  badgeType: 'primary' | 'teal' | 'amber' | 'slate';
}

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    name: 'R',
    category: 'Statistical Environment',
    roleInBBF: 'Core statistical computing engine for linear modeling, multivariate analysis, and graphics.',
    capabilities: ['Generalized linear models', 'Hypothesis testing', 'Reproducible statistical reporting'],
    badgeType: 'primary',
  },
  {
    name: 'R / Bioconductor',
    category: 'Multi-Omics Suite',
    roleInBBF: 'High-throughput genomic and transcriptomic analysis framework (RNA-seq, scRNA-seq, microarray).',
    capabilities: ['Differential expression (DESeq2, edgeR)', 'Single-cell workflows (Seurat)', 'Hub gene analysis (dhga)'],
    badgeType: 'teal',
  },
  {
    name: 'Python / Anaconda',
    category: 'Statistical Environment',
    roleInBBF: 'Data science, machine learning models, and automated NGS pipeline orchestration.',
    capabilities: ['Scikit-learn classifiers', 'BioPython parsing', 'Deep learning architectures (PyTorch)'],
    badgeType: 'primary',
  },
  {
    name: 'Perl',
    category: 'Statistical Environment',
    roleInBBF: 'Methodological research scripting, sequence pattern parsing, and fast genomic file formatting.',
    capabilities: ['FASTA / FASTQ parsing', 'Regular expression sequence mining', 'Pipeline automation scripts'],
    badgeType: 'primary',
  },
  {
    name: 'MATLAB',
    category: 'Mathematical Modeling',
    roleInBBF: 'Numerical computation and simulation of complex mathematical and dynamical epidemiological models.',
    capabilities: ['Differential equation modeling', 'Epidemic trajectory simulation', 'State-space matrix algorithms'],
    badgeType: 'amber',
  },
  {
    name: 'Cytoscape',
    category: 'Network Biology',
    roleInBBF: 'Biological network visualization and molecular interaction pathway integration.',
    capabilities: ['Gene regulatory networks', 'Protein-protein interaction graphs', 'Hub node topological mapping'],
    badgeType: 'teal',
  },
  {
    name: 'GSEA',
    category: 'Multi-Omics Suite',
    roleInBBF: 'Gene Set Enrichment Analysis for evaluating pathway-level coordinate expression changes.',
    capabilities: ['Curated biological gene sets (MSigDB)', 'Leading-edge subset analysis', 'Phenotype pathway correlation'],
    badgeType: 'teal',
  },
  {
    name: 'PASS & Solo Power',
    category: 'Power & Sample Size',
    roleInBBF: 'Dedicated power analysis and sample size determination software for clinical trials and QC assays.',
    capabilities: ['Diagnostic sensitivity & specificity power', 'Clinical trial sample sizing', 'Equivalence & non-inferiority trials'],
    badgeType: 'amber',
  },
  {
    name: 'GROMACS & Docking Suite',
    category: 'Multi-Omics Suite',
    roleInBBF: 'Open-source and structural tools for epitope prediction, molecular docking, and immune simulation.',
    capabilities: ['Molecular dynamics simulation', 'Antigenic loop docking (AutoDock Vina)', 'Conformational stability analysis'],
    badgeType: 'teal',
  },
];

export const SoftwareEcosystemCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const categories = ['all', 'Statistical Environment', 'Multi-Omics Suite', 'Power & Sample Size', 'Network Biology', 'Mathematical Modeling'];

  const filteredTools = activeCategory === 'all' 
    ? SOFTWARE_TOOLS 
    : SOFTWARE_TOOLS.filter(t => t.category === activeCategory);

  return (
    <div className="space-y-6 font-sans">
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        <span className="text-xs font-mono uppercase text-slate-400 mr-2 font-medium">Filter Domain:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 min-h-[38px] text-xs rounded transition-colors flex items-center ${
              activeCategory === cat
                ? 'bg-navy-900 text-white font-medium shadow-subtle'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {cat === 'all' ? 'All Packages' : cat}
          </button>
        ))}
      </div>

      {/* Software Badges / Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool) => {
          const isHovered = hoveredTool === tool.name;

          return (
            <div
              key={tool.name}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
              className={`p-5 rounded-sm bg-white border transition-all duration-200 flex flex-col justify-between ${
                isHovered
                  ? 'border-sci-600 shadow-academic -translate-y-0.5'
                  : 'border-slate-200 shadow-subtle'
              }`}
            >
              <div className="space-y-3">
                {/* Header: Name & Category Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-slate-100 text-slate-700">
                      <Terminal className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="font-mono text-base font-bold text-navy-950">
                      {tool.name}
                    </h4>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    tool.badgeType === 'teal'
                      ? 'bg-teal-50 text-teal-800 border-teal-200'
                      : tool.badgeType === 'amber'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-sci-50 text-sci-800 border-sci-200'
                  }`}>
                    {tool.category}
                  </span>
                </div>

                {/* Role Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {tool.roleInBBF}
                </p>

                {/* Specific Capability Points */}
                <ul className="space-y-1.5 pt-2 text-[11px] text-slate-700 font-sans border-t border-slate-100">
                  {tool.capabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-sci-600 mt-1.5 shrink-0" />
                      <span className="leading-snug">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Micro-Tag */}
              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>ICAR-NIFMD Workstation</span>
                <span className={isHovered ? 'text-sci-700 font-medium' : ''}>Active Module</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

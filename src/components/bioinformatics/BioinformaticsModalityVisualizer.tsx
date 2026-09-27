import React from 'react';

export interface ModalityVisualProps {
  modality: 'ngs' | 'vaccine' | 'ai';
}

export const BioinformaticsModalityVisualizer: React.FC<ModalityVisualProps> = ({ modality }) => {
  return (
    <div className="relative w-full min-h-[340px] sm:min-h-[420px] h-[350px] xs:h-[380px] sm:h-[430px] bg-navy-950 rounded-sm border border-navy-800 p-3.5 sm:p-5 overflow-hidden flex flex-col justify-between select-none font-sans">
      {/* Schematic Top Bar */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono border-b border-navy-800/80 pb-2.5 sm:pb-3 z-10">
        <div className="flex items-center gap-2 text-teal-400">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
          <span className="truncate">COMPUTATIONAL BIOLOGY PIPELINE ARCHITECTURE</span>
        </div>
        <div className="text-slate-400 shrink-0">
          [Schematic Workflow • BBF-NIFMD]
        </div>
      </div>

      {/* Main Procedural Visual Area */}
      <div className="relative flex-1 flex items-center justify-center my-2">
        {/* Background coordinate grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bio-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#5EEAD4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bio-grid)" />
        </svg>

        {/* 1. NGS / MULTI-OMICS: Sequencing Reads, Alignment & Single-cell Clusters */}
        {modality === 'ngs' && (
          <div className="w-full max-w-lg h-full flex flex-col justify-center animate-fade-in">
            <svg 
              viewBox="0 0 440 250" 
              className="w-full h-auto drop-shadow-md"
              role="img"
              aria-label="NGS and single-cell RNA-seq alignment pipeline architecture schematic"
            >
              {/* Reference Genome Axis */}
              <line x1="30" y1="50" x2="410" y2="50" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 3" />
              <text x="30" y="40" fill="#38BDF8" fontSize="9" fontFamily="monospace">Reference Genome Sequence (FMDV / Host)</text>
              <text x="410" y="40" fill="#94A3B8" fontSize="9" fontFamily="monospace" textAnchor="end">5' → 3'</text>

              {/* Short Sequencing Reads Aligned */}
              {[
                { x: 45, y: 65, w: 42, col: '#2DD4BF' },
                { x: 60, y: 75, w: 50, col: '#2DD4BF' },
                { x: 50, y: 85, w: 45, col: '#2DD4BF' },
                { x: 120, y: 65, w: 55, col: '#60A5FA' },
                { x: 140, y: 75, w: 48, col: '#60A5FA' },
                { x: 130, y: 85, w: 52, col: '#60A5FA' },
                { x: 210, y: 65, w: 45, col: '#F59E0B' },
                { x: 225, y: 75, w: 50, col: '#F59E0B' },
                { x: 280, y: 65, w: 55, col: '#34D399' },
                { x: 300, y: 75, w: 50, col: '#34D399' },
                { x: 340, y: 85, w: 48, col: '#34D399' },
              ].map((read, idx) => (
                <g key={idx}>
                  <rect x={read.x} y={read.y} width={read.w} height="5" fill={read.col} rx="2" opacity="0.85" />
                  <circle cx={read.x + read.w - 4} cy={read.y + 2.5} r="1.5" fill="#FFFFFF" />
                </g>
              ))}

              {/* Read Depth Coverage Curve */}
              <path 
                d="M 30 115 Q 80 92 145 90 T 235 98 T 320 92 T 410 115 L 410 120 L 30 120 Z" 
                fill="rgba(45, 212, 191, 0.15)" 
                stroke="#2DD4BF" 
                strokeWidth="1.2" 
              />
              <text x="30" y="112" fill="#2DD4BF" fontSize="8" fontFamily="monospace">Read Coverage Depth (RNA-seq / ChIP-seq)</text>

              {/* Inset: Single-Cell RNA-seq Cluster Embedding (UMAP/t-SNE) */}
              <g transform="translate(40, 135)">
                <rect x="0" y="0" width="165" height="100" fill="rgba(15, 23, 42, 0.9)" stroke="#334155" strokeWidth="1" rx="2" />
                <text x="8" y="15" fill="#E2E8F0" fontSize="9" fontFamily="monospace">scRNA-seq Manifold</text>
                
                {/* Cluster 1: Epithelial */}
                {[
                  { cx: 35, cy: 45 }, { cx: 42, cy: 38 }, { cx: 48, cy: 48 }, 
                  { cx: 32, cy: 55 }, { cx: 52, cy: 42 }
                ].map((pt, i) => (
                  <circle key={`c1-${i}`} cx={pt.cx} cy={pt.cy} r="2.5" fill="#38BDF8" opacity="0.9" />
                ))}
                <text x="35" y="70" fill="#38BDF8" fontSize="7" fontFamily="monospace">Cluster A</text>

                {/* Cluster 2: T-Cells / Immune */}
                {[
                  { cx: 110, cy: 45 }, { cx: 120, cy: 38 }, { cx: 115, cy: 55 }, 
                  { cx: 128, cy: 48 }, { cx: 105, cy: 50 }
                ].map((pt, i) => (
                  <circle key={`c2-${i}`} cx={pt.cx} cy={pt.cy} r="2.5" fill="#34D399" opacity="0.9" />
                ))}
                <text x="110" y="70" fill="#34D399" fontSize="7" fontFamily="monospace">Cluster B</text>

                {/* Trajectory Arrow */}
                <path d="M 58 46 Q 80 35 100 45" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
                <text x="80" y="32" fill="#F59E0B" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Trajectory</text>
              </g>

              {/* Inset: Multi-Omics Epigenomic Peak / snATAC-seq */}
              <g transform="translate(235, 135)">
                <rect x="0" y="0" width="165" height="100" fill="rgba(15, 23, 42, 0.9)" stroke="#334155" strokeWidth="1" rx="2" />
                <text x="8" y="15" fill="#E2E8F0" fontSize="9" fontFamily="monospace">snATAC-seq Open Chromatin</text>
                
                {/* Chromatin Accessibility Peak */}
                <path 
                  d="M 15 80 L 45 80 Q 75 80 82 35 Q 90 80 120 80 L 150 80" 
                  fill="rgba(245, 158, 11, 0.15)" 
                  stroke="#F59E0B" 
                  strokeWidth="1.5" 
                />
                <circle cx="82" cy="35" r="3" fill="#F59E0B" />
                <text x="82" y="28" fill="#F59E0B" fontSize="7" fontFamily="monospace" textAnchor="middle">Promoter Peak</text>

                <text x="15" y="94" fill="#94A3B8" fontSize="7" fontFamily="monospace">Transcription Factor Binding Motif</text>
              </g>
            </svg>
            <div className="text-center font-mono text-[10px] text-slate-400 mt-2">
              Architecture: Next-Generation Read Alignment, scRNA-seq Manifold &amp; snATAC Chromatin Accessibility
            </div>
          </div>
        )}

        {/* 2. IN-SILICO VACCINE DESIGN: 3D Protein Backbone, Epitopes & Docking */}
        {modality === 'vaccine' && (
          <div className="w-full max-w-lg h-full flex flex-col justify-center animate-fade-in">
            <svg 
              viewBox="0 0 440 250" 
              className="w-full h-auto drop-shadow-md"
              role="img"
              aria-label="In-silico vaccine design 3D macromolecular epitope and docking schematic"
            >
              {/* Outer Capsid Shell Schematic (VP1 / FMDV Pentamer structure) */}
              <circle cx="160" cy="125" r="85" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Protein Ribbon / Secondary Structure Helix Representations */}
              <path 
                d="M 90 125 C 100 80, 140 70, 160 100 C 180 130, 220 90, 230 130 C 235 155, 190 175, 160 155 C 130 140, 100 170, 90 125 Z" 
                fill="rgba(45, 212, 191, 0.08)" 
                stroke="#2DD4BF" 
                strokeWidth="2.5" 
              />

              {/* Secondary Alpha-helix coils */}
              <path d="M 105 105 Q 115 95 125 105 T 145 105" fill="none" stroke="#38BDF8" strokeWidth="2" />
              <path d="M 180 135 Q 190 125 200 135 T 220 135" fill="none" stroke="#38BDF8" strokeWidth="2" />

              {/* Predicted B-Cell Epitope Loop (High Antigenicity Surface Region) */}
              <path d="M 140 72 Q 160 50 180 72" fill="none" stroke="#F59E0B" strokeWidth="3" />
              <circle cx="160" cy="56" r="4.5" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
              <text x="160" y="42" fill="#F59E0B" fontSize="8.5" fontFamily="monospace" textAnchor="middle">B-Cell Epitope (GH-Loop)</text>

              {/* T-Cell Epitope Pocket (MHC-I/II Binding Groove) */}
              <g transform="translate(195, 100)">
                <rect x="0" y="0" width="28" height="18" fill="rgba(244, 63, 94, 0.25)" stroke="#F43F5E" strokeWidth="1.2" rx="2" />
                <text x="14" y="12" fill="#FDA4AF" fontSize="7" fontFamily="monospace" textAnchor="middle">MHC-II</text>
              </g>

              {/* Molecular Docking & Simulation Dashboard Inset */}
              <g transform="translate(260, 45)">
                <rect x="0" y="0" width="165" height="160" fill="rgba(15, 23, 42, 0.95)" stroke="#334155" strokeWidth="1" rx="2" />
                <text x="12" y="20" fill="#E2E8F0" fontSize="9" fontFamily="monospace" fontWeight="bold">Molecular Docking Analysis</text>
                
                <text x="12" y="42" fill="#94A3B8" fontSize="8" fontFamily="monospace">Binding Affinity (ΔG):</text>
                <text x="12" y="55" fill="#34D399" fontSize="9" fontFamily="monospace">Optimal Binding Conformation</text>

                <text x="12" y="78" fill="#94A3B8" fontSize="8" fontFamily="monospace">RMSD Stability (100ns):</text>
                {/* Molecular Dynamics RMSD Curve */}
                <path d="M 12 105 Q 35 90 70 94 T 120 95 T 150 94" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="150" y="108" fill="#38BDF8" fontSize="7" fontFamily="monospace" textAnchor="end">Plateau &lt; 0.2 nm</text>

                <line x1="12" y1="120" x2="152" y2="120" stroke="#1E293B" strokeWidth="1" />
                <text x="12" y="136" fill="#F59E0B" fontSize="8" fontFamily="monospace">• Subunit Construct: SAT2</text>
                <text x="12" y="148" fill="#A7F3D0" fontSize="8" fontFamily="monospace">• Non-toxic &amp; Non-allergenic</text>
              </g>
            </svg>
            <div className="text-center font-mono text-[10px] text-slate-400 mt-2">
              Architecture: 3D Capsid Structure, Epitope Prediction, Molecular Dynamics &amp; MHC Binding Simulation
            </div>
          </div>
        )}

        {/* 3. AI / MACHINE LEARNING: Virus Classification & Vaccine Matching */}
        {modality === 'ai' && (
          <div className="w-full max-w-lg h-full flex flex-col justify-center animate-fade-in">
            <svg 
              viewBox="0 0 440 250" 
              className="w-full h-auto drop-shadow-md"
              role="img"
              aria-label="Machine learning virus serotype classification and vaccine matching predictive model schematic"
            >
              {/* Input Feature Layer: VP1 Nucleotide & Amino Acid Sequence */}
              <g transform="translate(25, 40)">
                <rect x="0" y="0" width="105" height="160" fill="rgba(15, 23, 42, 0.9)" stroke="#38BDF8" strokeWidth="1" rx="2" />
                <text x="8" y="18" fill="#38BDF8" fontSize="8.5" fontFamily="monospace">VP1 Sequence Input</text>
                
                {/* Feature representation lines */}
                {['K-mer Frequencies', 'Physicochemical', 'Position Specific', 'Secondary Structure'].map((feat, i) => (
                  <g key={i} transform={`translate(8, ${36 + i * 30})`}>
                    <rect x="0" y="0" width="89" height="18" fill="rgba(56, 189, 248, 0.12)" stroke="#334155" strokeWidth="0.8" rx="1" />
                    <text x="4" y="12" fill="#E2E8F0" fontSize="7" fontFamily="monospace">{feat}</text>
                  </g>
                ))}
              </g>

              {/* Connecting Neural / Algorithmic Weights */}
              {[
                { y1: 85, y2: 65 }, { y1: 85, y2: 110 }, { y1: 85, y2: 155 },
                { y1: 145, y2: 65 }, { y1: 145, y2: 110 }, { y1: 145, y2: 155 },
                { y1: 175, y2: 110 }
              ].map((conn, idx) => (
                <line 
                  key={idx}
                  x1="130" 
                  y1={conn.y1} 
                  x2="175" 
                  y2={conn.y2} 
                  stroke="rgba(45, 212, 191, 0.35)" 
                  strokeWidth="1" 
                  strokeDasharray="3 2" 
                />
              ))}

              {/* Machine Learning Model Layer (Random Forest / Deep Architecture) */}
              <g transform="translate(175, 40)">
                <rect x="0" y="0" width="115" height="160" fill="rgba(15, 23, 42, 0.9)" stroke="#2DD4BF" strokeWidth="1" rx="2" />
                <text x="8" y="18" fill="#2DD4BF" fontSize="8.5" fontFamily="monospace">Model Architecture</text>

                {/* Decision / Hidden nodes */}
                {[
                  { y: 40, label: 'Feature Embedding' },
                  { y: 75, label: 'Ensemble Weights' },
                  { y: 110, label: 'Cross-Validation' },
                  { y: 140, label: 'Softmax Vector' }
                ].map((node, i) => (
                  <g key={i} transform={`translate(8, ${node.y})`}>
                    <circle cx="10" cy="8" r="4" fill="#2DD4BF" opacity="0.9" />
                    <text x="20" y="11" fill="#E2E8F0" fontSize="7" fontFamily="monospace">{node.label}</text>
                  </g>
                ))}
              </g>

              {/* Output Connections */}
              {[
                { y1: 85, y2: 75 }, { y1: 120, y2: 115 }, { y1: 150, y2: 155 }
              ].map((conn, idx) => (
                <line 
                  key={`out-${idx}`}
                  x1="290" 
                  y1={conn.y1} 
                  x2="330" 
                  y2={conn.y2} 
                  stroke="#F59E0B" 
                  strokeWidth="1.2" 
                />
              ))}

              {/* Output Predictions Layer */}
              <g transform="translate(330, 40)">
                <rect x="0" y="0" width="95" height="160" fill="rgba(15, 23, 42, 0.95)" stroke="#F59E0B" strokeWidth="1" rx="2" />
                <text x="8" y="18" fill="#F59E0B" fontSize="8.5" fontFamily="monospace">Predicted Targets</text>

                <g transform="translate(8, 35)">
                  <rect x="0" y="0" width="79" height="32" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="0.8" rx="2" />
                  <text x="5" y="13" fill="#FCD34D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Serotype: O / A</text>
                  <text x="5" y="24" fill="#E2E8F0" fontSize="6.5" fontFamily="monospace">Lineage Identified</text>
                </g>

                <g transform="translate(8, 75)">
                  <rect x="0" y="0" width="79" height="32" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="0.8" rx="2" />
                  <text x="5" y="13" fill="#6EE7B7" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Vaccine Matching</text>
                  <text x="5" y="24" fill="#E2E8F0" fontSize="6.5" fontFamily="monospace">r1-value predicted</text>
                </g>

                <g transform="translate(8, 115)">
                  <rect x="0" y="0" width="79" height="32" fill="rgba(99, 102, 241, 0.15)" stroke="#6366F1" strokeWidth="0.8" rx="2" />
                  <text x="5" y="13" fill="#A5B4FC" fontSize="7.5" fontFamily="monospace" fontWeight="bold">FMDVSerPred</text>
                  <text x="5" y="24" fill="#E2E8F0" fontSize="6.5" fontFamily="monospace">Server Algorithm</text>
                </g>
              </g>
            </svg>
            <div className="text-center font-mono text-[10px] text-slate-400 mt-2">
              Architecture: Sequence Feature Extraction, Random Forest Ensemble &amp; Vaccine Matching Prediction
            </div>
          </div>
        )}
      </div>

      {/* Bottom Technical Specs */}
      <div className="pt-2.5 sm:pt-3 border-t border-navy-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="text-teal-400 font-semibold shrink-0">Active Pipeline:</span>
          <span className="text-slate-200 truncate">
            {modality === 'ngs' && 'High-Throughput Sequencing & Single-Cell Transcriptomics'}
            {modality === 'vaccine' && 'Structural Macromodeling & Epitope Subunit Design'}
            {modality === 'ai' && 'Machine Learning Serotype Classification & Antigenic Matching'}
          </span>
        </div>
        <div className="hidden sm:block text-slate-500 shrink-0">
          Bioconductor / PyTorch / GROMACS
        </div>
      </div>
    </div>
  );
};

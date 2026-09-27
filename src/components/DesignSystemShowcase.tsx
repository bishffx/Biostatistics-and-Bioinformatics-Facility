import React, { useState } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/Card';
import { MetricDisplay } from './ui/MetricDisplay';
import { StatusIndicator } from './ui/StatusIndicator';
import { Callout } from './ui/Callout';
import { 
  Server, 
  FileText, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Sparkles,
  Layers,
  ArrowRight,
  GitBranch,
  Award
} from 'lucide-react';

export const DesignSystemShowcase: React.FC = () => {
  const [activeTokenTab, setActiveTokenTab] = useState<'tokens' | 'typography' | 'components' | 'data'>('tokens');

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Top Banner */}
      <div className="bg-navy-900 border border-navy-800 text-white p-6 sm:p-8 rounded-sm shadow-academic">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              Institutional Visual Language Specification
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              BBF Portal Design System & Visual Tokens
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
              Standardized scientific styling tokens for ICAR-NIFMD: editorial typography, restrained scientific palette, hairline card elevations, and authentic data representations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="teal" dot>
              System Active
            </Badge>
            <Badge variant="dark">
              v1.0.0
            </Badge>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex border-b border-navy-800 mt-6 gap-6 text-xs font-medium">
          {(['tokens', 'typography', 'components', 'data'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTokenTab(tab)}
              className={`pb-3 capitalize transition-all border-b-2 -mb-[2px] ${
                activeTokenTab === tab
                  ? 'border-teal-400 text-teal-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab === 'tokens' && 'Color & Theme Tokens'}
              {tab === 'typography' && 'Editorial Typography'}
              {tab === 'components' && 'Interactive Components'}
              {tab === 'data' && 'Scientific Data Presentation'}
            </button>
          ))}
        </div>
      </div>

      {/* 1. COLOR & THEME TOKENS */}
      {activeTokenTab === 'tokens' && (
        <div className="space-y-8 animate-fade-in">
          <SectionHeader
            eyebrow="Color Palette"
            title="Restrained Scientific Palette"
            description="Designed for national research authority: zero decorative neon gradients, high readability, and strict semantic color allocations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Deep Navy */}
            <div className="border border-slate-200 rounded-sm overflow-hidden bg-white shadow-subtle">
              <div className="h-24 bg-navy-900 p-3 flex flex-col justify-end text-white">
                <span className="font-mono text-xs">#071527</span>
                <span className="text-[11px] text-slate-300">navy-900</span>
              </div>
              <div className="p-4 space-y-1 text-xs">
                <div className="font-semibold text-slate-900">Institutional Navy</div>
                <div className="text-slate-500">Headers, primary cards, high-contrast academic framing.</div>
              </div>
            </div>

            {/* Scientific Blue */}
            <div className="border border-slate-200 rounded-sm overflow-hidden bg-white shadow-subtle">
              <div className="h-24 bg-sci-700 p-3 flex flex-col justify-end text-white">
                <span className="font-mono text-xs">#1E40AF</span>
                <span className="text-[11px] text-sci-200">sci-700</span>
              </div>
              <div className="p-4 space-y-1 text-xs">
                <div className="font-semibold text-slate-900">Scientific Blue</div>
                <div className="text-slate-500">Primary buttons, links, active tab indicator, institutional accents.</div>
              </div>
            </div>

            {/* Muted Teal */}
            <div className="border border-slate-200 rounded-sm overflow-hidden bg-white shadow-subtle">
              <div className="h-24 bg-teal-700 p-3 flex flex-col justify-end text-white">
                <span className="font-mono text-xs">#0F766E</span>
                <span className="text-[11px] text-teal-200">teal-700</span>
              </div>
              <div className="p-4 space-y-1 text-xs">
                <div className="font-semibold text-slate-900">Computational Teal</div>
                <div className="text-slate-500">Bioinformatics pipelines, live servers, genomic features.</div>
              </div>
            </div>

            {/* Restrained Amber */}
            <div className="border border-slate-200 rounded-sm overflow-hidden bg-white shadow-subtle">
              <div className="h-24 bg-amber-600 p-3 flex flex-col justify-end text-white">
                <span className="font-mono text-xs">#D97706</span>
                <span className="text-[11px] text-amber-200">amber-600</span>
              </div>
              <div className="p-4 space-y-1 text-xs">
                <div className="font-semibold text-slate-900">Academic Highlight</div>
                <div className="text-slate-500">DST-SERB grant badges, communicated works, priority announcements.</div>
              </div>
            </div>
          </div>

          <Callout type="info" title="Color Restraint Directive">
            The portal avoids rainbow styling. 85% of layout surfaces use clean white (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded">#FFFFFF</code>), warm ground (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded">#F8FAFC</code>), and subtle slate borders (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded">#E2E8F0</code>). Accent colors are reserved for actionable status and scientific classification.
          </Callout>
        </div>
      )}

      {/* 2. TYPOGRAPHY MATRIX */}
      {activeTokenTab === 'typography' && (
        <div className="space-y-8 animate-fade-in">
          <SectionHeader
            eyebrow="Type System"
            title="Editorial & Scientific Typography"
            description="A classical serif display font paired with modern legible sans-serif and tabular monospace for genomic and epidemiological data."
          />

          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-sm border border-slate-200 shadow-subtle">
            {/* Display Heading */}
            <div className="border-b border-slate-100 pb-5">
              <div className="text-[11px] font-mono text-slate-400 mb-1">Display Heading (Source Serif 4 / 3rem / bold)</div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight">
                Biostatistics & Bioinformatics Facility
              </h1>
            </div>

            {/* Section Heading */}
            <div className="border-b border-slate-100 pb-5">
              <div className="text-[11px] font-mono text-slate-400 mb-1">Section Heading (Source Serif 4 / 1.875rem / bold)</div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
                Single-cell RNA-Sequencing & Gene Regulatory Networks
              </h2>
            </div>

            {/* Subsection Heading */}
            <div className="border-b border-slate-100 pb-5">
              <div className="text-[11px] font-mono text-slate-400 mb-1">Subsection Heading (Inter / 1.25rem / semibold)</div>
              <h3 className="text-lg font-semibold text-slate-900 font-sans tracking-tight">
                Statistical Approaches of Differential Gene Network Analysis (DST-SERB)
              </h3>
            </div>

            {/* Body Text */}
            <div className="border-b border-slate-100 pb-5">
              <div className="text-[11px] font-mono text-slate-400 mb-1">Body Text (Inter / 1rem / leading-relaxed)</div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans max-w-3xl">
                BBF provides statistical expertise in the design of experiments, including research proposal grant writing, data pre-processing, ROC analysis (sensitivity and specificity) of diagnostic tests, sample size determination for vaccine quality control, and infectious disease modeling in the wildlife-livestock interface.
              </p>
            </div>

            {/* Scientific Monospace Data */}
            <div className="border-b border-slate-100 pb-5">
              <div className="text-[11px] font-mono text-slate-400 mb-1">Scientific Data / Monospace (JetBrains Mono / tabular numbers)</div>
              <div className="bg-slate-50 p-4 rounded border border-slate-200 font-mono text-xs space-y-1 text-slate-800">
                <div>[SERVER] FMDSeroSurv | Status: 200 OK | Host: nifmd-bbf.icar.gov.in</div>
                <div>[CRAN]   dhga v1.3    | Authors: Das, S. et al.  | Downloads: Verified</div>
                <div>[GENOME] FMDV VP1 Seq | 639 bp coding region     | Coverage: 99.8%</div>
              </div>
            </div>

            {/* Academic Citation Style */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-1">Official Academic Citation Format (APA / Nature style)</div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans pl-3 border-l-2 border-slate-300">
                <b>Das, S.</b>, Pal, S., Mahapatra, S., Biswal, J.K., Pradhan, S.K., Sahoo, A.P., & Singh, R.P. (2024). FMDVSerPred: A novel computational solution for foot-and-mouth disease virus classification and serotype prediction prevalent in Asia using VP1 nucleotide sequence data. <i>Current Bioinformatics</i>, <b>19(9)</b>, 794–809. <span className="text-sci-700 font-mono underline">doi:10.2174/0115748936278851231213110653</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. INTERACTIVE COMPONENTS */}
      {activeTokenTab === 'components' && (
        <div className="space-y-10 animate-fade-in">
          <SectionHeader
            eyebrow="Component Library"
            title="Reusable Scientific UI Elements"
            description="Pre-built components providing uniform interaction patterns across all 9 pages."
          />

          {/* Buttons Section */}
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-subtle space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">
              Button Hierarchy
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                Primary Institutional
              </Button>
              <Button variant="secondary" icon={<FileText className="w-3.5 h-3.5" />} iconPosition="left">
                Secondary Document
              </Button>
              <Button variant="teal" icon={<Terminal className="w-3.5 h-3.5" />}>
                Bioinformatics Tool
              </Button>
              <Button variant="amber" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Priority Grant
              </Button>
              <Button variant="outline">
                Outline Option
              </Button>
              <Button variant="ghost">
                Ghost Link
              </Button>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-slate-500 font-mono">Sizes:</span>
              <Button size="sm" variant="secondary">Small (sm)</Button>
              <Button size="md" variant="secondary">Standard (md)</Button>
              <Button size="lg" variant="secondary">Large CTA (lg)</Button>
            </div>
          </div>

          {/* Badges & Indicators */}
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-subtle space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">
              Scientific Badges & Live Status Indicators
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">ICAR-NIFMD</Badge>
              <Badge variant="teal" dot>Live Server</Badge>
              <Badge variant="amber">DST-SERB Grant</Badge>
              <Badge variant="success">Peer-Reviewed</Badge>
              <Badge variant="dark">HPC Cluster</Badge>
              <Badge variant="outline">CRAN Package</Badge>
              <Badge variant="default">OUAT Dissertation</Badge>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-6">
              <StatusIndicator status="online" label="FMDSeroSurv: Operational" />
              <StatusIndicator status="active" label="FMDVSerPred: 99.4% Accuracy" />
              <StatusIndicator status="communicated" label="MolEpidPred: Under Review" />
              <StatusIndicator status="in_development" label="AI-Vaccine Match: Pipeline" />
            </div>
          </div>

          {/* Cards Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Academic Card */}
            <Card variant="default">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="teal">Web Server</Badge>
                  <StatusIndicator status="online" size="sm" label="Online" />
                </div>
                <CardTitle className="mt-2">FMDSeroSurv</CardTitle>
                <CardDescription>
                  Sero-surveillance parameter estimation & sample size optimization for bovine herds.
                </CardDescription>
              </CardHeader>
              <div className="text-xs text-slate-600 space-y-2">
                <div className="font-mono text-[11px] text-slate-500">
                  Target: Foot-and-Mouth Disease
                </div>
                <div>Published in: <i>Sci. Rep. 13, 22583 (2023)</i></div>
              </div>
              <CardFooter>
                <Button size="sm" variant="teal" asLink href="https://nifmd-bbf.icar.gov.in/FMDSeroSurv/" target="_blank" icon={<ExternalLink className="w-3 h-3" />}>
                  Access Server
                </Button>
                <span className="font-mono text-[10px]">ICAR-Hosted</span>
              </CardFooter>
            </Card>

            {/* Interactive Card */}
            <Card variant="interactive">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">CRAN Package</Badge>
                  <GitBranch className="w-4 h-4 text-slate-400" />
                </div>
                <CardTitle className="mt-2">dhga: Differential Hub Gene Analysis</CardTitle>
                <CardDescription>
                  Identification of hub genes from high-throughput gene co-expression networks.
                </CardDescription>
              </CardHeader>
              <div className="text-xs text-slate-600 space-y-1 font-sans">
                <div>Environment: R / Bioconductor</div>
                <div>Status: Maintained on CRAN</div>
              </div>
              <CardFooter>
                <span className="text-sci-700 font-medium inline-flex items-center gap-1">
                  View Repository <ArrowRight className="w-3 h-3" />
                </span>
                <span className="font-mono text-[10px]">R 4.x+</span>
              </CardFooter>
            </Card>

            {/* Dark HPC Card */}
            <Card variant="dark">
              <CardHeader className="border-navy-800">
                <div className="flex items-center justify-between">
                  <Badge variant="dark" dot>Linux / Windows</Badge>
                  <Cpu className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="text-base font-semibold text-white mt-2">
                  High-Performance Computing
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Dedicated servers equipped for NGS QC, single-cell analysis & molecular simulations.
                </p>
              </CardHeader>
              <div className="text-xs text-slate-300 font-mono space-y-1">
                <div>• RNA-seq / scRNA-seq pipelines</div>
                <div>• GOMo / Cytoscape / GSEA</div>
                <div>• In-silico vaccine docking</div>
              </div>
              <div className="pt-4 border-t border-navy-800 mt-4 text-[10px] text-teal-300 font-mono flex items-center justify-between">
                <span>Memory: High-RAM Nodes</span>
                <span>Active</span>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* 4. SCIENTIFIC DATA PRESENTATION */}
      {activeTokenTab === 'data' && (
        <div className="space-y-8 animate-fade-in">
          <SectionHeader
            eyebrow="Evidence & Metrics"
            title="Authentic Institutional Metrics"
            description="Verified statistics extracted directly from ICAR-NIFMD records. No fabricated data or placeholder statistics."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <MetricDisplay
              label="Web Servers"
              value="5"
              unit="Portals"
              description="Dedicated computational tools hosted on ICAR-NIFMD domain."
              source="ICAR-NIFMD BBF"
              icon={<Server className="w-4 h-4" />}
            />

            <MetricDisplay
              label="R Packages"
              value="8"
              unit="CRAN/Git"
              description="Algorithmic packages for hub genes, feature selection & serology."
              source="CRAN & GitHub"
              icon={<Terminal className="w-4 h-4" />}
            />

            <MetricDisplay
              label="Sponsored Grants"
              value="4"
              unit="Projects"
              description="Funded by DST-SERB, Govt of Odisha, ICAR-NIFMD, & DAHD."
              source="Institutional Registry"
              icon={<Award className="w-4 h-4" />}
            />

            <MetricDisplay
              label="M.Sc. Theses"
              value="8"
              unit="Dissertations"
              description="Bioinformatics student dissertations completed in BBF."
              source="OUAT University"
              icon={<FileText className="w-4 h-4" />}
            />
          </div>

          {/* Authentic Research Projects Table Preview */}
          <div className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-subtle">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <h4 className="font-semibold text-sm text-slate-800 font-sans">
                Sample Data Table: Sponsored Research Grants
              </h4>
              <Badge variant="primary">Verified Institutional Records</Badge>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-navy-950 text-slate-200 uppercase font-mono text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Sl</th>
                    <th className="py-3 px-4">Project Title</th>
                    <th className="py-3 px-4">Funding Agency</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono font-medium">1</td>
                    <td className="py-3 px-4 font-medium text-slate-900">
                      Statistical Approaches of Differential Gene Network Analysis for High throughput Single-cell RNA-sequencing Studies
                    </td>
                    <td className="py-3 px-4">Department of Science and Technology - SERB, Govt. of India</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="teal" size="sm">Ongoing</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono font-medium">2</td>
                    <td className="py-3 px-4 font-medium text-slate-900">
                      Machine learning approaches for Foot and Mouth Disease Virus serotype and Lineage Prediction using Virus NGS Data
                    </td>
                    <td className="py-3 px-4">Science and Technology Department, Government of Odisha</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="teal" size="sm">Ongoing</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

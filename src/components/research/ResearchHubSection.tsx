import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiostatisticsSection } from '../biostatistics/BiostatisticsSection';
import { BioinformaticsSection } from '../bioinformatics/BioinformaticsSection';
import { ToolsSection } from '../tools/ToolsSection';
import { Calculator, Dna, Cpu } from 'lucide-react';

export const ResearchHubSection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState<'biostatistics' | 'bioinformatics' | 'tools'>(
    tabParam === 'bioinformatics' || tabParam === 'tools' ? tabParam : 'biostatistics'
  );

  useEffect(() => {
    if (tabParam === 'biostatistics' || tabParam === 'bioinformatics' || tabParam === 'tools') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tab: 'biostatistics' | 'bioinformatics' | 'tools') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      {/* Top Selector Navigation */}
      <div className="bg-navy-950 text-white border-b border-navy-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider font-semibold">
                Scientific Capabilities
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Research Programs &amp; Methodologies
              </h1>
            </div>

            {/* Research Domain Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Research Domains">
              <button
                role="tab"
                aria-selected={activeTab === 'biostatistics'}
                onClick={() => handleTabChange('biostatistics')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium transition-all ${
                  activeTab === 'biostatistics'
                    ? 'bg-teal-500 text-navy-950 font-bold shadow-md'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-700'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Biostatistics</span>
              </button>

              <button
                role="tab"
                aria-selected={activeTab === 'bioinformatics'}
                onClick={() => handleTabChange('bioinformatics')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium transition-all ${
                  activeTab === 'bioinformatics'
                    ? 'bg-teal-500 text-navy-950 font-bold shadow-md'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-700'
                }`}
              >
                <Dna className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Bioinformatics &amp; Omics</span>
              </button>

              <button
                role="tab"
                aria-selected={activeTab === 'tools'}
                onClick={() => handleTabChange('tools')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium transition-all ${
                  activeTab === 'tools'
                    ? 'bg-teal-500 text-navy-950 font-bold shadow-md'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-700'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Computational Tools</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab View Render */}
      <div>
        {activeTab === 'biostatistics' && <BiostatisticsSection />}
        {activeTab === 'bioinformatics' && <BioinformaticsSection />}
        {activeTab === 'tools' && <ToolsSection />}
      </div>
    </div>
  );
};

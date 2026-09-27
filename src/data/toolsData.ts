export interface ToolItem {
  id: string;
  name: string;
  category: 'Web Applications' | 'R Packages';
  shortPurpose: string;
  fullDescription: string;
  technologyType: string;
  status: 'Production Server' | 'CRAN Release' | 'GitHub Repository';
  officialUrl?: string; // Official verified URL or undefined
  associatedPublication?: {
    citation: string;
    doi?: string;
  };
  tags: string[];
  visualMotif: 'surveillance' | 'prediction' | 'monitoring' | 'epidemiology' | 'antibody' | 'network' | 'mrmr' | 'genomics';
  // Constellation graph coordinates (percentage 0-100) and relationships
  constellation: {
    cx: number;
    cy: number;
    relatedToolIds: string[];
  };
}

export const TOOLS_DATA: ToolItem[] = [
  // --- WEB APPLICATIONS ---
  {
    id: 'fmd-sero-surv',
    name: 'FMDSeroSurv',
    category: 'Web Applications',
    shortPurpose: 'Surveillance & Parameter Estimation',
    fullDescription:
      'Web-based computational tool for estimation of foot-and-mouth disease virus sero-prevalence rates, sample size determination, and surveillance parameter calculations for susceptible bovine populations.',
    technologyType: 'R / Shiny Web Server',
    status: 'Production Server',
    officialUrl: 'https://nifmd-bbf.icar.gov.in/FMDSeroSurv/',
    associatedPublication: {
      citation: 'Sci. Rep. 13, 22583 (2023)',
      doi: '10.1038/s41598-023-48459-w',
    },
    tags: ['Sero-Surveillance', 'Prevalence Estimation', 'FMDV', 'Sampling Design'],
    visualMotif: 'surveillance',
    constellation: {
      cx: 20,
      cy: 35,
      relatedToolIds: ['sero-monitor', 'nsp-pred-serv'],
    },
  },
  {
    id: 'fmdv-ser-pred',
    name: 'FMDVSerPred',
    category: 'Web Applications',
    shortPurpose: 'Serotype & Lineage Prediction',
    fullDescription:
      'Novel computational solution for foot-and-mouth disease virus classification and serotype prediction prevalent in Asia using viral VP1 nucleotide sequence data and machine learning architectures.',
    technologyType: 'Machine Learning Web Server',
    status: 'Production Server',
    officialUrl: 'https://nifmd-bbf.icar.gov.in/FMDVSerPred/',
    associatedPublication: {
      citation: 'Current Bioinformatics 19(9), 794–809 (2024)',
      doi: '10.2174/0115748936278851231213110653',
    },
    tags: ['VP1 Sequence', 'Serotyping', 'Machine Learning', 'FMDV Asia'],
    visualMotif: 'prediction',
    constellation: {
      cx: 38,
      cy: 25,
      relatedToolIds: ['mol-epid-pred', 'swarn-seq'],
    },
  },
  {
    id: 'sero-monitor',
    name: 'SeroMonitor',
    category: 'Web Applications',
    shortPurpose: 'Monitoring Parameter Estimation',
    fullDescription:
      'Statistical approach and interactive web server for foot-and-mouth disease sero-monitoring parameter estimation, herd immunity threshold evaluation, and longitudinal post-vaccination monitoring.',
    technologyType: 'Statistical Analytics Web Server',
    status: 'Production Server',
    officialUrl: 'https://nifmd-bbf.icar.gov.in/SeroMonitor/',
    associatedPublication: {
      citation: 'Das et al. (2024, Communicated)',
    },
    tags: ['Sero-Monitoring', 'Vaccine Response', 'Herd Immunity', 'Statistical Modeling'],
    visualMotif: 'monitoring',
    constellation: {
      cx: 30,
      cy: 65,
      relatedToolIds: ['fmd-sero-surv', 'bsm'],
    },
  },
  {
    id: 'mol-epid-pred',
    name: 'MolEpidPred',
    category: 'Web Applications',
    shortPurpose: 'Molecular Epidemiology',
    fullDescription:
      'Computational solution and predictive platform for the molecular epidemiology and transmission dynamics of foot-and-mouth disease virus using sequence diversity and phylogeographic indicators.',
    technologyType: 'Molecular Epidemiology Server',
    status: 'Production Server',
    officialUrl: 'https://nifmd-bbf.icar.gov.in/MolEpidPred/',
    associatedPublication: {
      citation: 'Das et al. (2024, Communicated)',
    },
    tags: ['Molecular Epidemiology', 'VP1 Diversity', 'Lineage Tracking', 'Phylodynamics'],
    visualMotif: 'epidemiology',
    constellation: {
      cx: 48,
      cy: 45,
      relatedToolIds: ['fmdv-ser-pred', 'swarn-seq'],
    },
  },
  {
    id: 'nsp-pred-serv',
    name: 'NSPPredServ',
    category: 'Web Applications',
    shortPurpose: 'Non-Structural Protein Antibody Prediction',
    fullDescription:
      'Computational model-based approach and server for prediction and risk factor analysis of 2B non-structural protein antibodies against FMDV in cloven-hoofed domestic and wild animals.',
    technologyType: 'Diagnostic Prediction Web Server',
    status: 'Production Server',
    officialUrl: 'https://nifmd-bbf.icar.gov.in/NSPPredServ/',
    associatedPublication: {
      citation: 'Das et al. (2024, Communicated)',
    },
    tags: ['NSP 2B Antibody', 'DIVA Diagnostics', 'Wildlife-Livestock', 'Risk Analysis'],
    visualMotif: 'antibody',
    constellation: {
      cx: 15,
      cy: 75,
      relatedToolIds: ['fmd-sero-surv', 'sero-monitor'],
    },
  },

  // --- R PACKAGES ---
  {
    id: 'dhga',
    name: 'dhga',
    category: 'R Packages',
    shortPurpose: 'Differential Hub Gene Analysis',
    fullDescription:
      'Differential Hub Gene Analysis (dhga) identifies hub genes from high-throughput gene co-expression networks and measures network rewire dynamics between control and perturbed biological states.',
    technologyType: 'CRAN R Package',
    status: 'CRAN Release',
    officialUrl: 'https://CRAN.R-project.org/package=dhga',
    tags: ['CRAN', 'Hub Genes', 'Network Rewiring', 'Co-Expression'],
    visualMotif: 'network',
    constellation: {
      cx: 65,
      cy: 30,
      relatedToolIds: ['boot-mrmr', 'gsaq'],
    },
  },
  {
    id: 'boot-mrmr',
    name: 'BootMRMR',
    category: 'R Packages',
    shortPurpose: 'Bootstrap Feature Selection',
    fullDescription:
      'Bootstrap Minimum Redundancy Maximum Relevance (BootMRMR) implements ensemble feature ranking for high-dimensional microarray, RNA-seq, and biological high-throughput datasets.',
    technologyType: 'CRAN R Package',
    status: 'CRAN Release',
    officialUrl: 'https://CRAN.R-project.org/package=BootMRMR',
    tags: ['CRAN', 'Feature Selection', 'MRMR', 'Bootstrap Ensemble'],
    visualMotif: 'mrmr',
    constellation: {
      cx: 80,
      cy: 25,
      relatedToolIds: ['dhga', 'gsaq'],
    },
  },
  {
    id: 'gsaq',
    name: 'GSAQ',
    category: 'R Packages',
    shortPurpose: 'Gene Set Analysis with Quantitative Traits',
    fullDescription:
      'Statistical package for gene set analysis in high-throughput studies with quantitative traits, utilizing non-parametric tests and variance stabilization methods.',
    technologyType: 'CRAN R Package',
    status: 'CRAN Release',
    officialUrl: 'https://CRAN.R-project.org/package=GSAQ',
    tags: ['CRAN', 'Gene Set Analysis', 'Quantitative Traits', 'Pathways'],
    visualMotif: 'genomics',
    constellation: {
      cx: 72,
      cy: 55,
      relatedToolIds: ['dhga', 'gsq-seq'],
    },
  },
  {
    id: 'bsm',
    name: 'BSM',
    category: 'R Packages',
    shortPurpose: 'Biostatistical Modeling Package',
    fullDescription:
      'R package providing biostatistical modeling routines, specialized sampling designs, and variance estimation algorithms for biological and epidemiological experimentation.',
    technologyType: 'GitHub R Package',
    status: 'GitHub Repository',
    officialUrl: 'https://github.com/sam-uofl/BSM',
    tags: ['GitHub', 'Biostatistical Modeling', 'Variance Estimation', 'Experimental Design'],
    visualMotif: 'network',
    constellation: {
      cx: 85,
      cy: 65,
      relatedToolIds: ['sero-monitor', 'gsq-seq'],
    },
  },
  {
    id: 'swarn-seq',
    name: 'SwarnSeq',
    category: 'R Packages',
    shortPurpose: 'Sequence Analysis & Feature Extraction',
    fullDescription:
      'High-performance R package for viral sequence feature extraction, sequence alignment preprocessing, and statistical pattern mining across transcriptomic data.',
    technologyType: 'GitHub R Package',
    status: 'GitHub Repository',
    officialUrl: 'https://github.com/sam-uofl/SwarnSeq',
    tags: ['GitHub', 'Sequence Processing', 'Feature Extraction', 'RNA-seq'],
    visualMotif: 'genomics',
    constellation: {
      cx: 58,
      cy: 75,
      relatedToolIds: ['fmdv-ser-pred', 'mol-epid-pred', 'gsq-seq'],
    },
  },
  {
    id: 'gsq-seq',
    name: 'GSQSeq',
    category: 'R Packages',
    shortPurpose: 'Gene Set Quantification for Sequencing Data',
    fullDescription:
      'R computational pipeline for gene set quantification and pathway enrichment testing customized for RNA-sequencing and count-based genomic technologies.',
    technologyType: 'GitHub R Package',
    status: 'GitHub Repository',
    officialUrl: 'https://github.com/sam-uofl/GSQSeq',
    tags: ['GitHub', 'Gene Set Quantification', 'Pathway Enrichment', 'Count Data'],
    visualMotif: 'genomics',
    constellation: {
      cx: 75,
      cy: 80,
      relatedToolIds: ['gsaq', 'swarn-seq', 'bsm'],
    },
  },
];

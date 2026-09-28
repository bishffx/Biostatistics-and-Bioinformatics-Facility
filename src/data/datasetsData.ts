/**
 * Institutional Research Datasets & Genomic Repositories
 * Biostatistics and Bioinformatics Facility (BBF)
 * ICAR–National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha, India
 */

export interface DatasetItem {
  id: string;
  accessionId: string;
  title: string;
  category: 'Viral Genomics' | 'Sero-Surveillance' | 'Transcriptomics' | 'Diagnostic Assays';
  hostSpecies: string;
  format: string;
  recordCount: string;
  accessPolicy: 'Public Access' | 'Institutional Access' | 'Available on Request';
  description: string;
  associatedStudy?: string;
  associatedTool?: string;
  dataUrl?: string;
  tags: string[];
}

export const DATASETS_DATA: DatasetItem[] = [
  {
    id: 'ds-fmdv-vp1-seq',
    accessionId: 'BBF-DS-2024-01',
    title: 'FMDV VP1 Capsid Nucleotide Sequence Alignment Archive',
    category: 'Viral Genomics',
    hostSpecies: 'Bovine, Bubaline, Porcine, Caprine',
    format: 'FASTA / ClustalW / PHYLIP',
    recordCount: '4,500+ Curated Sequences',
    accessPolicy: 'Public Access',
    description:
      'Curated and quality-filtered VP1 coding sequence alignments of Foot-and-Mouth Disease Virus serotypes O, A, and Asia 1 isolated from outbreaks across India and South Asia, formatted for phylogenetic reconstruction and serotype classification.',
    associatedStudy: 'Current Bioinformatics 19(9), 794–809 (2024)',
    associatedTool: 'FMDVSerPred & MolEpidPred',
    dataUrl: 'https://nifmd-bbf.icar.gov.in/FMDVSerPred/',
    tags: ['VP1 Gene', 'Phylogenetics', 'Capsid Diversity', 'FMDV Lineages'],
  },
  {
    id: 'ds-sero-surv-india',
    accessionId: 'BBF-DS-2023-02',
    title: 'Nationwide Bovine FMD Sero-Surveillance Longitudinal Matrix (2008–2021)',
    category: 'Sero-Surveillance',
    hostSpecies: 'Cattle & Water Buffalo (Bos taurus, Bos indicus, Bubalus bubalis)',
    format: 'CSV / RData / Parquet',
    recordCount: '120,000+ Survey Sample Points',
    accessPolicy: 'Institutional Access',
    description:
      'State-wise longitudinal sero-monitoring and non-structural protein (NSP) antibody surveillance data aggregated under national animal disease control frameworks, supporting epidemiological parameter estimation and herd immunity tracking.',
    associatedStudy: 'Nature Scientific Reports 13, 22583 (2023)',
    associatedTool: 'FMDSeroSurv & SeroMonitor',
    dataUrl: 'https://nifmd-bbf.icar.gov.in/FMDSeroSurv/',
    tags: ['Sero-Surveillance', 'Epidemiology', 'Longitudinal Survey', 'Herd Immunity'],
  },
  {
    id: 'ds-nsp-2b-elisa',
    accessionId: 'BBF-DS-2024-03',
    title: 'FMDV 2B Non-Structural Protein Indirect-ELISA Validation Dataset',
    category: 'Diagnostic Assays',
    hostSpecies: 'Domestic Ruminants & Wildlife Interface',
    format: 'Tabular CSV / OD Matrix',
    recordCount: '1,850 Assay Records',
    accessPolicy: 'Available on Request',
    description:
      'Multi-species optical density (OD) titer measurements, diagnostic sensitivity, specificity calibration tables, and ROC cutoff thresholds for species-independent indirect-ELISA targeting non-structural protein 2B.',
    associatedStudy: 'Biologicals 87, 101785 (2024)',
    associatedTool: 'NSPPredServ',
    dataUrl: undefined,
    tags: ['DIVA Diagnostics', '2B NSP', 'Indirect-ELISA', 'ROC Analysis'],
  },
  {
    id: 'ds-scrna-gene-network',
    accessionId: 'BBF-DS-2022-04',
    title: 'Single-Cell RNA-seq Gene Co-Expression Benchmark Matrices',
    category: 'Transcriptomics',
    hostSpecies: 'Mammalian Host Model Systems',
    format: 'Matrix Market (.mtx) / Loom / HDF5',
    recordCount: '25,000+ Single-Cell Profiles',
    accessPolicy: 'Public Access',
    description:
      'Standardized sparse count matrices and normalized expression tables used to benchmark statistical differential gene regulatory network algorithms and differential hub gene dynamics under cellular perturbation.',
    associatedStudy: 'Current Bioinformatics 17(10), 888–908 (2022)',
    associatedTool: 'dhga & BootMRMR (CRAN)',
    dataUrl: 'https://CRAN.R-project.org/package=dhga',
    tags: ['scRNA-seq', 'Gene Networks', 'Hub Genes', 'Expression Matrix'],
  },
  {
    id: 'ds-bovine-vaccine-response',
    accessionId: 'BBF-DS-2024-05',
    title: 'Cattle Post-Vaccination Time-Series Transcriptomic Expression Profiles',
    category: 'Transcriptomics',
    hostSpecies: 'Indigenous & Crossbred Bovines',
    format: 'Expression Matrix (GEO standard format)',
    recordCount: '72 Microarray / RNA-seq Profiles',
    accessPolicy: 'Institutional Access',
    description:
      'Longitudinal peripheral blood mononuclear cell (PBMC) expression kinetics measured across pre- and post-vaccination intervals against Foot-and-Mouth Disease, annotated with immune pathway activations.',
    associatedStudy: 'Das et al. (Under Communication)',
    associatedTool: 'BSM & GSQSeq',
    dataUrl: undefined,
    tags: ['Vaccine Response', 'Host Transcriptome', 'PBMC', 'Immune Kinetics'],
  },
];

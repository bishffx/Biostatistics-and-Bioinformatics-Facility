/**
 * SEO & Institutional Metadata Configuration
 * Biostatistics and Bioinformatics Facility (BBF)
 * ICAR–National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha, India
 */

export interface SectionSEOMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string[];
}

/**
 * CONFIGURATION PLACEHOLDER:
 * If the portal is hosted on a specific institutional subdomain or subpath
 * (e.g., https://nifmd.icar.gov.in/bbf or https://bbf.nifmd.res.in),
 * update this base URL accordingly.
 */
export const INSTITUTIONAL_BASE_URL = 'https://nifmd.icar.gov.in/bbf';

export const INSTITUTIONAL_IDENTITY = {
  facilityName: 'Biostatistics and Bioinformatics Facility',
  facilityAcronym: 'BBF',
  instituteName: 'ICAR–National Institute on Foot and Mouth Disease',
  instituteAcronym: 'ICAR-NIFMD',
  governingBody: 'Indian Council of Agricultural Research (ICAR)',
  ministry: 'Department of Agricultural Research and Education (DARE), Ministry of Agriculture and Farmers Welfare, Government of India',
  city: 'Bhubaneswar',
  state: 'Odisha',
  country: 'India',
  pinCode: '752050',
  officialInstituteUrl: 'https://nifmd.icar.gov.in',
  piName: 'Dr. Samarendra Das',
  piRole: 'Senior Scientist & Principal Investigator',
  piEmail: 'samarendra.das@icar.gov.in',
  defaultOgImage: `${INSTITUTIONAL_BASE_URL}/assets/banner.png`,
};

export const SEO_SECTION_REGISTRY: Record<string, SectionSEOMetadata> = {
  home: {
    title: 'Biostatistics & Bioinformatics Facility | ICAR-NIFMD',
    description:
      'The Biostatistics and Bioinformatics Facility (BBF) at ICAR–National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha, provides advanced computational biology, biostatistical consulting, multi-omics data analysis, and mathematical modeling to advance Foot-and-Mouth Disease (FMD) surveillance and animal health research.',
    canonicalPath: '',
    keywords: [
      'Biostatistics',
      'Bioinformatics',
      'ICAR-NIFMD',
      'Foot and Mouth Disease',
      'Computational Biology',
      'Infectious Disease Research',
      'Animal Health',
      'Bhubaneswar Odisha',
      'Dr. Samarendra Das'
    ],
  },
  biostatistics: {
    title: 'Biostatistical Consulting & Study Design | BBF ICAR-NIFMD',
    description:
      'Rigorous experimental design, diagnostic ROC power analysis, sampling frameworks for sero-surveillance, and epidemiological forecasting at ICAR-NIFMD.',
    canonicalPath: '#biostatistics',
    keywords: [
      'Biostatistics consulting',
      'Experimental design in animal science',
      'ROC curve analysis diagnostics',
      'Sample size determination vaccine QC',
      'Epidemiological sampling frameworks',
      'Sero-surveillance parameters'
    ],
  },
  bioinformatics: {
    title: 'Bioinformatics & Computational Genomics | BBF ICAR-NIFMD',
    description:
      'High-throughput NGS analysis, in-silico multi-epitope vaccine design, RNA-seq data pipelines, and machine learning models for viral serotyping and genomic surveillance at ICAR-NIFMD.',
    canonicalPath: '#bioinformatics',
    keywords: [
      'Bioinformatics ICAR',
      'Next Generation Sequencing animal viruses',
      'In-silico vaccine design',
      'FMDV VP1 serotyping machine learning',
      'Multi-epitope subunit vaccine',
      'Computational structural biology'
    ],
  },
  'hardware-software': {
    title: 'Computational Infrastructure & Software Ecosystem | BBF ICAR-NIFMD',
    description:
      'High-performance computing workstations, 64-bit multi-core processing architecture, and specialized bioinformatics software suites supporting animal disease analytics at ICAR-NIFMD.',
    canonicalPath: '#hardware-software',
    keywords: [
      'Bioinformatics workstation ICAR',
      'Computational biology infrastructure',
      'Linux HPC bioinformatics',
      'Scientific software environment'
    ],
  },
  tools: {
    title: 'Computational Research Tools & R Packages | BBF ICAR-NIFMD',
    description:
      'Explore institutional web servers and R packages developed by BBF for hub gene identification, sero-surveillance sampling parameters, and veterinary epidemiological analytics.',
    canonicalPath: '#tools',
    keywords: [
      'Bioinformatics web servers ICAR',
      'R packages veterinary epidemiology',
      'Hub gene identification tools',
      'Sero-surveillance calculator',
      'Veterinary data science software'
    ],
  },
  projects: {
    title: 'Research Programs & Funded Projects | BBF ICAR-NIFMD',
    description:
      'Ongoing and completed research initiatives supported by national funding bodies including DST-SERB, DAHD (NADCP), Government of Odisha (DST), and ICAR-NIFMD.',
    canonicalPath: '#projects',
    keywords: [
      'DST-SERB research projects',
      'DAHD NADCP livestock projects',
      'Odisha DST computational biology',
      'Veterinary research grants India'
    ],
  },
  team: {
    title: 'People Behind the Research | BBF ICAR-NIFMD',
    description:
      'Meet the research leadership and scientific scholars at the Biostatistics and Bioinformatics Facility, ICAR-NIFMD, led by Dr. Samarendra Das (Senior Scientist & PI).',
    canonicalPath: '#team',
    keywords: [
      'Dr. Samarendra Das',
      'ICAR-NIFMD scientists',
      'Bioinformatics researchers Bhubaneswar',
      'Animal science biostatisticians'
    ],
  },
  publications: {
    title: 'Selected Scholarly Publications | BBF ICAR-NIFMD',
    description:
      'Peer-reviewed research articles and methodology papers in computational biology, veterinary biostatistics, and infectious disease modeling from ICAR-NIFMD.',
    canonicalPath: '#publications',
    keywords: [
      'ICAR-NIFMD publications',
      'Biostatistics research papers',
      'Foot-and-Mouth Disease computational genomics',
      'Scientific Reports ICAR'
    ],
  },
  contact: {
    title: 'Connect With the Facility | BBF ICAR-NIFMD',
    description:
      'Collaborate, submit statistical consultation enquiries, or visit the Biostatistics and Bioinformatics Facility at ICAR-National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha.',
    canonicalPath: '#contact',
    keywords: [
      'Biostatistics consultation ICAR-NIFMD',
      'BBF contact Bhubaneswar',
      'Veterinary bioinformatics collaboration'
    ],
  },
};

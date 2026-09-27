export type FundingAgencyKey = 
  | 'DST-SERB' 
  | 'Government of Odisha (DST)' 
  | 'DAHD (NADCP)' 
  | 'ICAR-NIFMD';

export interface ResearchProjectItem {
  id: string;
  slNo: number;
  projectTitle: string;
  fundingAgency: string;
  agencyKey: FundingAgencyKey;
  investigator: string;
  duration: string;
  status: 'Ongoing' | 'Completed';
  description: string;
  collaborators: string[];
  projectUrl?: string; // Optional official grant URL or placeholder
}

export const RESEARCH_PROJECTS_DATA: ResearchProjectItem[] = [
  {
    id: 'proj-dst-serb',
    slNo: 1,
    projectTitle: 'Statistical Approaches of Differential Gene Network Analysis for High throughput Single-cell RNA-sequencing Studies',
    fundingAgency: 'Department of Science and Technology - Science and Engineering Research Board (DST-SERB), Government of India',
    agencyKey: 'DST-SERB',
    investigator: 'Dr. Samarendra Das (Senior Scientist & PI)',
    duration: '2022 – Present (Ongoing)',
    status: 'Ongoing',
    description:
      'Developing innovative statistical and computational network biology approaches for differential co-expression gene regulatory network construction from high-throughput single-cell RNA-sequencing data in infectious disease models.',
    collaborators: [
      'Junior Research Fellows (Manaswini Jagadev / Bighneswar Barik)',
      'ICAR-NIFMD Molecular Biology Division',
    ],
    projectUrl: undefined, // Marked placeholder: "Project repository / URL to be added"
  },
  {
    id: 'proj-dst-odisha',
    slNo: 2,
    projectTitle: 'Machine learning approaches for Foot and Mouth Disease Virus serotype and Lineage Prediction using the Virus Next Generation Sequence Data',
    fundingAgency: 'Science and Technology Department, Government of Odisha',
    agencyKey: 'Government of Odisha (DST)',
    investigator: 'Dr. Samarendra Das (Principal Investigator)',
    duration: '2024 – Present (Ongoing)',
    status: 'Ongoing',
    description:
      'Designing machine learning classifiers and sequence pattern recognition algorithms using FMDV VP1 nucleotide sequence data for rapid serotype and lineage determination prevalent in the Asian subcontinent.',
    collaborators: [
      'Project Fellow (Utkal Nayak)',
      'Science and Technology Department, Govt. of Odisha',
    ],
    projectUrl: undefined,
  },
  {
    id: 'proj-icar-nifmd',
    slNo: 3,
    projectTitle: 'Computational model-based risk factor analysis and NSP sero-prevalence prediction of FMD virus infections using epidemiological survey data: An application to wildlife-livestock interface',
    fundingAgency: 'ICAR-National Institute on Foot and Mouth Disease (ICAR-NIFMD), Bhubaneswar',
    agencyKey: 'ICAR-NIFMD',
    investigator: 'Dr. Samarendra Das (Principal Investigator)',
    duration: 'Institutional Core Research (Ongoing)',
    status: 'Ongoing',
    description:
      'Conducting computational risk factor modeling, non-structural protein (NSP) antibody survey analytics, and cross-species transmission assessment across bovine livestock and wildlife interfaces in India.',
    collaborators: [
      'Epidemiology & Diagnostic Virology Groups, ICAR-NIFMD',
    ],
    projectUrl: undefined,
  },
  {
    id: 'proj-dahd-nadcp',
    slNo: 4,
    projectTitle: 'National Animal Disease Control Programme (NADCP) / Livestock Health & Disease Control Programme (LHDCP)',
    fundingAgency: 'Department of Animal Husbandry and Dairying (DAHD), Ministry of Fisheries, Animal Husbandry and Dairying, Government of India',
    agencyKey: 'DAHD (NADCP)',
    investigator: 'BBF Biostatistics Support Team',
    duration: 'National Surveillance Initiative (Ongoing)',
    status: 'Ongoing',
    description:
      'Providing national-level biostatistical sampling frameworks, sero-surveillance parameter estimation, sample size determination, and post-vaccination monitoring analytics for the National Animal Disease Control Programme.',
    collaborators: [
      'Department of Animal Husbandry and Dairying (DAHD), Govt. of India',
      'State Animal Husbandry Departments',
    ],
    projectUrl: undefined,
  },
];

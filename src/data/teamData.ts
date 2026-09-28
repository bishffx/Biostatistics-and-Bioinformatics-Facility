export interface PiProfileData {
  name: string;
  salutation: string;
  designation: string;
  role: string;
  affiliation: string;
  institution: string;
  location: string;
  emails: string[];
  bioSummary: string;
  bioPlaceholder?: string;
  researchInterests: string[];
  interestsPlaceholder?: string;
  photoUrl?: string; // Optional official portrait or undefined for typographic crest
}

export interface ResearchFellowItem {
  id: string;
  name: string;
  designation: 'Junior Research Fellow' | 'Project Fellow';
  projectTitle: string;
  fundingAgency: string;
  tenure: string;
  status: 'Active' | 'Alumni';
  qualificationPlaceholder?: string;
}

export interface StudentDissertationItem {
  id: string;
  name: string;
  degree: string;
  year: number;
  dissertationTitle: string;
  institute: string;
}

export interface CollaborativeScientistItem {
  id: string;
  name: string;
  salutation: string;
  designation: string;
  role: string;
  institution: string;
  location: string;
  collaborativeDomains: string[];
}

export const PI_DATA: PiProfileData = {
  name: 'Samarendra Das',
  salutation: 'Dr.',
  designation: 'Senior Scientist',
  role: 'Principal Investigator & Facility Lead, BBF',
  affiliation: 'Biostatistics and Bioinformatics Facility (BBF)',
  institution: 'ICAR–National Institute on Foot and Mouth Disease (ICAR-NIFMD)',
  location: 'Arugul-Jatni Road, Bhubaneswar – 752050, Odisha, India',
  emails: ['samarendra.das@icar.gov.in', 'samarendra4849@gmail.com'],
  bioSummary:
    'Dr. Samarendra Das serves as Senior Scientist and Principal Investigator at the Biostatistics and Bioinformatics Facility of ICAR-NIFMD, Bhubaneswar. His research focuses on biostatistical methods for infectious animal disease surveillance, single-cell RNA-seq gene network modeling, and machine learning architectures for viral serotyping and vaccine matching.',
  bioPlaceholder:
    '[Detailed academic biography, doctoral background, and international research fellowships to be inserted]',
  researchInterests: [
    'Biostatistics & Experimental Sampling Design',
    'Single-Cell RNA-Sequencing (scRNA-seq) & Gene Network Modeling',
    'Infectious Disease Surveillance & Sero-Monitoring (FMDV)',
    'Machine Learning & Artificial Intelligence in Veterinary Omics',
    'In-Silico Vaccine Design & Structural Antigen Mapping',
  ],
  interestsPlaceholder:
    '[Additional specialized research interests and methodological focus to be added]',
  photoUrl: undefined, // Uses high-authority typographic institutional monogram
};

export const RESEARCH_FELLOWS_DATA: ResearchFellowItem[] = [
  {
    id: 'fellow-manaswini',
    name: 'Mrs. Manaswini Jagadev',
    designation: 'Junior Research Fellow',
    projectTitle:
      'Statistical Approaches of Differential Gene Network Analysis for High-throughput Single-cell RNA-sequencing Studies',
    fundingAgency: 'Department of Science and Technology - Science and Engineering Research Board (DST-SERB)',
    tenure: '01-Nov-2022 to 27-Jun-2023',
    status: 'Alumni',
    qualificationPlaceholder: '[M.Sc. / Research Fellowship Credentials]',
  },
  {
    id: 'fellow-bighneswar',
    name: 'Mr. Bighneswar Barik',
    designation: 'Junior Research Fellow',
    projectTitle:
      'Statistical Approaches of Differential Gene Network Analysis for High-throughput Single-cell RNA-sequencing Studies',
    fundingAgency: 'Department of Science and Technology - Science and Engineering Research Board (DST-SERB)',
    tenure: '19-Jan-2024 to Present',
    status: 'Active',
    qualificationPlaceholder: '[M.Sc. / Research Fellowship Credentials]',
  },
  {
    id: 'fellow-utkal',
    name: 'Mr. Utkal Nayak',
    designation: 'Project Fellow',
    projectTitle:
      'Machine learning approaches for foot and mouth disease virus serotype and lineage prediction using the virus next generation sequence data',
    fundingAgency: 'Department of Science and Technology, Government of Odisha',
    tenure: '01-Mar-2024 to Present',
    status: 'Active',
    qualificationPlaceholder: '[M.Sc. (Bioinformatics) / Project Fellowship Credentials]',
  },
];

export const STUDENT_ALUMNI_DATA: StudentDissertationItem[] = [
  {
    id: 'student-samyak',
    name: 'Mr. Samyak Mahapatra',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2022,
    dissertationTitle: 'Machine Learning Approach for FMD Virus Serotype Prediction Using VP1 DNA Sequence Data',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
  {
    id: 'student-sanjay',
    name: 'Mr. Sanjay Behera',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2022,
    dissertationTitle: 'Network Biology Approach to Understand the FMD Vaccination Response in Cattle Using High Throughput Gene Expression Data',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
  {
    id: 'student-utkal-alumni',
    name: 'Mr. Utkal Nayak',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2023,
    dissertationTitle: 'Machine Learning Approaches for Molecular Epidemiology of Foot and Mouth Disease Virus Using VP1 Nucleotide Sequence Data',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
  {
    id: 'student-tanmaya',
    name: 'Mr. Tanmaya Parida',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2023,
    dissertationTitle: 'Immuno-Informatics Approach for Designing Multi-Epitope Peptide-based Vaccine against Foot and Mouth Disease SAT2 Serotype',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
  {
    id: 'student-mimansa',
    name: 'Ms. Mimansa Sahoo',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2024,
    dissertationTitle: 'Computational Approach for Gene Regulatory Network Modelling using Single-cell RNA-sequencing Data',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
  {
    id: 'student-bhagyashree',
    name: 'Ms. Bhagyashree Roul',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2024,
    dissertationTitle: 'Molecular Characterization of Foot and Mouth Disease Virus Serotype O using Machine Learning',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
  {
    id: 'student-sujata',
    name: 'Ms. Sujata Parida',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2024,
    dissertationTitle: 'Machine Learning Approaches for Vaccine Matching Score Prediction for Foot and Mouth Disease Virus using VP1 Nucleotide Sequence Data',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
  {
    id: 'student-diptimayee',
    name: 'Ms. Diptimayee Padhan',
    degree: 'M.Sc. (Bioinformatics)',
    year: 2024,
    dissertationTitle: 'In-silico Design of Multi-epitope Recombinant Vaccine against Foot-and-Mouth Disease Virus and Lumpy-skin Disease Virus',
    institute: 'Odisha University of Agriculture & Technology (OUAT)',
  },
];

export const COLLABORATIVE_SCIENTISTS_DATA: CollaborativeScientistItem[] = [
  {
    id: 'scientist-soumen-pal',
    name: 'Soumen Pal',
    salutation: 'Dr.',
    designation: 'Senior Scientist',
    role: 'Collaborative Senior Biostatistician & Co-Investigator',
    institution: 'ICAR–Indian Agricultural Statistics Research Institute (ICAR-IASRI)',
    location: 'Library Avenue, Pusa, New Delhi – 110012, India',
    collaborativeDomains: [
      'Biostatistics & Sero-Surveillance Methodology',
      'FMDSeroSurv & SeroMonitor Computational Web Platforms',
      'FMDVSerPred Asian Serotype Classification',
      'Longitudinal Disease Prevalence Modeling in Bovine Populations',
    ],
  },
  {
    id: 'scientist-ap-sahoo',
    name: 'A. P. Sahoo',
    salutation: 'Dr.',
    designation: 'Senior Scientist',
    role: 'Collaborative Senior Scientist & Molecular Virology Investigator',
    institution: 'ICAR–National Institute on Foot and Mouth Disease (ICAR-NIFMD)',
    location: 'Arugul-Jatni Road, Bhubaneswar – 752050, Odisha, India',
    collaborativeDomains: [
      'FMDV Molecular Virology & Host-Pathogen Interaction',
      'FMDVSerPred Viral Sequence Analytics & Classification',
      'In-Silico Vaccine Design & Structural Antigenic Mapping',
      'Diagnostic Serology & Viral Neutralization Benchmarks',
    ],
  },
];


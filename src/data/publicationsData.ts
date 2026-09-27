export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  doiUrl?: string;
  publicationType: 'Journal Article' | 'Review / Survey' | 'Communicated Manuscript';
  externalUrl?: string;
  status: 'Published' | 'Under Communication';
  volume?: string;
  issue?: string;
  pages?: string;
  isCorrespondingOrEqualContrib?: boolean;
  correspondingAuthor?: string;
  topics: string[];
  apaCitation: string;
  bibtex: string;
}

export const PUBLICATIONS_DATA: PublicationItem[] = [
  // 1. Chemosphere 2024
  {
    id: 'pub-chemosphere-2024',
    title:
      'Impact of triflumezopyrim (insecticide) on blood and serum biochemistry of freshwater fish, subadult Labeo rohita (Hamilton, 1822)',
    authors: [
      'Nayak, S.',
      'Das, S.*',
      'Das, I.I.',
      'Kumar, R.',
      'Mohanty, A.K.',
      'Sahoo, L.',
      'Sundaray, J.K.',
    ],
    journal: 'Chemosphere',
    year: 2024,
    volume: '367',
    pages: '143554',
    doi: '10.1016/j.chemosphere.2024.143554',
    publicationType: 'Journal Article',
    externalUrl: 'https://doi.org/10.1016/j.chemosphere.2024.143554',
    status: 'Published',
    isCorrespondingOrEqualContrib: true,
    correspondingAuthor: 'Dr. Samarendra Das (Co-corresponding author)',
    topics: ['Ecotoxicology', 'Serum Biochemistry', 'Statistical Analysis'],
    apaCitation:
      'Nayak, S., Das, S., Das, I. I., Kumar, R., Mohanty, A. K., Sahoo, L., & Sundaray, J. K. (2024). Impact of triflumezopyrim (insecticide) on blood and serum biochemistry of freshwater fish, subadult Labeo rohita (Hamilton, 1822). Chemosphere, 367, 143554.',
    bibtex: `@article{nayak2024impact,
  title={Impact of triflumezopyrim (insecticide) on blood and serum biochemistry of freshwater fish, subadult Labeo rohita (Hamilton, 1822)},
  author={Nayak, S. and Das, S. and Das, I. I. and Kumar, R. and Mohanty, A. K. and Sahoo, L. and Sundaray, J. K.},
  journal={Chemosphere},
  volume={367},
  pages={143554},
  year={2024},
  doi={10.1016/j.chemosphere.2024.143554}
}`,
  },

  // 2. Biologicals 2024
  {
    id: 'pub-biologicals-2024',
    title:
      'A species-independent indirect-ELISA for detection of antibodies to the non-structural protein 2B of foot-and-mouth disease virus',
    authors: [
      'Biswal, J.K.',
      'Das, S.*',
      'Mohapatra, J.K.',
      'Rout, M.',
      'Ranjan, R.',
      'Singh, R.P.',
    ],
    journal: 'Biologicals',
    year: 2024,
    volume: '87',
    pages: '101785',
    doi: '10.1016/j.biologicals.2024.101785',
    publicationType: 'Journal Article',
    externalUrl: 'https://doi.org/10.1016/j.biologicals.2024.101785',
    status: 'Published',
    isCorrespondingOrEqualContrib: true,
    correspondingAuthor: 'Dr. Samarendra Das (Co-corresponding author)',
    topics: ['Diagnostics', 'ELISA Serology', 'FMDV 2B NSP', 'ROC Power Analysis'],
    apaCitation:
      'Biswal, J. K., Das, S., Mohapatra, J. K., Rout, M., Ranjan, R., & Singh, R. P. (2024). A species-independent indirect-ELISA for detection of antibodies to the non-structural protein 2B of foot-and-mouth disease virus. Biologicals, 87, 101785.',
    bibtex: `@article{biswal2024species,
  title={A species-independent indirect-ELISA for detection of antibodies to the non-structural protein 2B of foot-and-mouth disease virus},
  author={Biswal, J. K. and Das, S. and Mohapatra, J. K. and Rout, M. and Ranjan, R. and Singh, R. P.},
  journal={Biologicals},
  volume={87},
  pages={101785},
  year={2024},
  doi={10.1016/j.biologicals.2024.101785}
}`,
  },

  // 3. Current Bioinformatics 2024
  {
    id: 'pub-curr-bioinform-2024',
    title:
      'FMDVSerPred: A novel computational solution for foot-and-mouth disease virus classification and serotype prediction prevalent in Asia using VP1 nucleotide sequence data',
    authors: [
      'Das, S.',
      'Pal, S.',
      'Mahapatra, S.',
      'Biswal, J.K.',
      'Pradhan, S.K.',
      'Sahoo, A.P.',
      'Singh, R.P.',
    ],
    journal: 'Current Bioinformatics',
    year: 2024,
    volume: '19',
    issue: '9',
    pages: '794–809',
    doi: '10.2174/0115748936278851231213110653',
    publicationType: 'Journal Article',
    externalUrl: 'https://doi.org/10.2174/0115748936278851231213110653',
    status: 'Published',
    topics: ['Machine Learning', 'FMDV Serotyping', 'Bioinformatics Web Server', 'VP1 Sequence Analysis'],
    apaCitation:
      'Das, S., Pal, S., Mahapatra, S., Biswal, J. K., Pradhan, S. K., Sahoo, A. P., & Singh, R. P. (2024). FMDVSerPred: A novel computational solution for foot-and-mouth disease virus classification and serotype prediction prevalent in Asia using VP1 nucleotide sequence data. Current Bioinformatics, 19(9), 794–809.',
    bibtex: `@article{das2024fmdvserpred,
  title={FMDVSerPred: A novel computational solution for foot-and-mouth disease virus classification and serotype prediction prevalent in Asia using VP1 nucleotide sequence data},
  author={Das, S. and Pal, S. and Mahapatra, S. and Biswal, J. K. and Pradhan, S. K. and Sahoo, A. P. and Singh, R. P.},
  journal={Current Bioinformatics},
  volume={19},
  number={9},
  pages={794--809},
  year={2024},
  doi={10.2174/0115748936278851231213110653}
}`,
  },

  // 4. Scientific Reports 2023
  {
    id: 'pub-scirep-2023',
    title:
      'Estimation of foot-and-mouth disease virus sero-prevalence rates using novel computational approach for the susceptible bovine population in India during the period 2008–2021',
    authors: [
      'Das, S.',
      'Pal, S.',
      'Rautaray, S.S.',
      'Mohapatra, J.K.',
      'Subramaniam, S.',
      'Rout, M.',
      'Rai, S.N.',
      'Singh, R.P.',
    ],
    journal: 'Nature Scientific Reports',
    year: 2023,
    volume: '13',
    pages: '22583',
    doi: '10.1038/s41598-023-48459-w',
    publicationType: 'Journal Article',
    externalUrl: 'https://doi.org/10.1038/s41598-023-48459-w',
    status: 'Published',
    topics: ['Biostatistics', 'Sero-surveillance', 'Epidemiology', 'Longitudinal Modeling'],
    apaCitation:
      'Das, S., Pal, S., Rautaray, S. S., Mohapatra, J. K., Subramaniam, S., Rout, M., Rai, S. N., & Singh, R. P. (2023). Estimation of foot-and-mouth disease virus sero-prevalence rates using novel computational approach for the susceptible bovine population in India during the period 2008–2021. Scientific Reports, 13, 22583.',
    bibtex: `@article{das2023estimation,
  title={Estimation of foot-and-mouth disease virus sero-prevalence rates using novel computational approach for the susceptible bovine population in India during the period 2008--2021},
  author={Das, S. and Pal, S. and Rautaray, S. S. and Mohapatra, J. K. and Subramaniam, S. and Rout, M. and Rai, S. N. and Singh, R. P.},
  journal={Scientific Reports},
  volume={13},
  pages={22583},
  year={2023},
  publisher={Nature Publishing Group},
  doi={10.1038/s41598-023-48459-w}
}`,
  },

  // 5. Chemosphere 2023
  {
    id: 'pub-chemosphere-2023',
    title:
      'Biochemical and histopathological alterations in freshwater fish, Labeo rohita (Hamilton, 1822) upon chronic exposure to a commonly used hopper insecticide, triflumezopyrim',
    authors: [
      'Nayak, S.',
      'Das, S.',
      'Kumar, R.',
      'Das, I.I.',
      'Mohanty, A.A.',
      'Sahoo, L.',
      'Gokulakrishnan, M.',
      'Sundaray, J.K.',
    ],
    journal: 'Chemosphere',
    year: 2023,
    volume: '337',
    pages: '139128',
    doi: '10.1016/j.chemosphere.2023.139128',
    publicationType: 'Journal Article',
    externalUrl: 'https://doi.org/10.1016/j.chemosphere.2023.139128',
    status: 'Published',
    topics: ['Ecotoxicology', 'Histopathology', 'Biostatistics'],
    apaCitation:
      'Nayak, S., Das, S., Kumar, R., Das, I. I., Mohanty, A. A., Sahoo, L., Gokulakrishnan, M., & Sundaray, J. K. (2023). Biochemical and histopathological alterations in freshwater fish, Labeo rohita (Hamilton, 1822) upon chronic exposure to a commonly used hopper insecticide, triflumezopyrim. Chemosphere, 337, 139128.',
    bibtex: `@article{nayak2023biochemical,
  title={Biochemical and histopathological alterations in freshwater fish, Labeo rohita (Hamilton, 1822) upon chronic exposure to a commonly used hopper insecticide, triflumezopyrim},
  author={Nayak, S. and Das, S. and Kumar, R. and Das, I. I. and Mohanty, A. A. and Sahoo, L. and Gokulakrishnan, M. and Sundaray, J. K.},
  journal={Chemosphere},
  volume={337},
  pages={139128},
  year={2023},
  doi={10.1016/j.chemosphere.2023.139128}
}`,
  },

  // 6. PLoS ONE 2022
  {
    id: 'pub-plosone-2022',
    title:
      'Multigroup prediction in lung cancer patients and comparative controls using signature of volatile organic compounds in breath samples',
    authors: ['Rai, S.N.', 'Das, S.*', 'Pan, J.', 'Mishra, D.C.', 'Fu, X.A.'],
    journal: 'PLoS ONE',
    year: 2022,
    volume: '17',
    issue: '11',
    pages: 'e0277431',
    doi: '10.1371/journal.pone.0277431',
    publicationType: 'Journal Article',
    externalUrl: 'https://doi.org/10.1371/journal.pone.0277431',
    status: 'Published',
    isCorrespondingOrEqualContrib: true,
    correspondingAuthor: 'Dr. Samarendra Das (Co-corresponding author)',
    topics: ['Multigroup Classification', 'Biostatistics', 'Biomarker Discovery', 'Machine Learning'],
    apaCitation:
      'Rai, S. N., Das, S., Pan, J., Mishra, D. C., & Fu, X. A. (2022). Multigroup prediction in lung cancer patients and comparative controls using signature of volatile organic compounds in breath samples. PLoS ONE, 17(11), e0277431.',
    bibtex: `@article{rai2022multigroup,
  title={Multigroup prediction in lung cancer patients and comparative controls using signature of volatile organic compounds in breath samples},
  author={Rai, S. N. and Das, S. and Pan, J. and Mishra, D. C. and Fu, X. A.},
  journal={PLoS ONE},
  volume={17},
  number={11},
  pages={e0277431},
  year={2022},
  publisher={Public Library of Science},
  doi={10.1371/journal.pone.0277431}
}`,
  },

  // 7. Current Bioinformatics 2022
  {
    id: 'pub-curr-bioinform-2022',
    title:
      'Five Years of Gene Network Modeling and Construction in Single-cell RNA-sequencing Studies: Current Statistical Approaches and Outstanding Challenges',
    authors: ['Das, S.', 'Pradhan, U.K.', 'Rai, S.N.'],
    journal: 'Current Bioinformatics',
    year: 2022,
    volume: '17',
    issue: '10',
    pages: '888–908',
    doi: '10.2174/1574893617666220823114108',
    publicationType: 'Review / Survey',
    externalUrl: 'https://doi.org/10.2174/1574893617666220823114108',
    status: 'Published',
    topics: ['Single-cell RNA-seq', 'Gene Regulatory Networks', 'Statistical Method Review'],
    apaCitation:
      'Das, S., Pradhan, U. K., & Rai, S. N. (2022). Five Years of Gene Network Modeling and Construction in Single-cell RNA-sequencing Studies: Current Statistical Approaches and Outstanding Challenges. Current Bioinformatics, 17(10), 888–908.',
    bibtex: `@article{das2022five,
  title={Five Years of Gene Network Modeling and Construction in Single-cell RNA-sequencing Studies: Current Statistical Approaches and Outstanding Challenges},
  author={Das, S. and Pradhan, U. K. and Rai, S. N.},
  journal={Current Bioinformatics},
  volume={17},
  number={10},
  pages={888--908},
  year={2022},
  doi={10.2174/1574893617666220823114108}
}`,
  },

  // 8. Entropy 2022
  {
    id: 'pub-entropy-2022',
    title:
      'Differential Expression Analysis of Single-cell RNA-sequencing Data: Current Statistical Approaches and Outstanding Challenges',
    authors: ['Das, S.', 'Rai, A.', 'Rai, S.N.'],
    journal: 'Entropy',
    year: 2022,
    volume: '24',
    issue: '7',
    pages: '995',
    doi: '10.3390/e24070995',
    publicationType: 'Review / Survey',
    externalUrl: 'https://doi.org/10.3390/e24070995',
    status: 'Published',
    topics: ['Single-cell RNA-seq', 'Differential Expression', 'Statistical Information Theory'],
    apaCitation:
      'Das, S., Rai, A., & Rai, S. N. (2022). Differential Expression Analysis of Single-cell RNA-sequencing Data: Current Statistical Approaches and Outstanding Challenges. Entropy, 24(7), 995.',
    bibtex: `@article{das2022differential,
  title={Differential Expression Analysis of Single-cell RNA-sequencing Data: Current Statistical Approaches and Outstanding Challenges},
  author={Das, S. and Rai, A. and Rai, S. N.},
  journal={Entropy},
  volume={24},
  number={7},
  pages={995},
  year={2022},
  doi={10.3390/e24070995}
}`,
  },

  // PAPERS UNDER COMMUNICATION
  // 9. MolEpidPred
  {
    id: 'com-molepidpred-2024',
    title:
      'MolEpidPred: A Novel Computational Solution for the Molecular Epidemiology of Foot-and-mouth Disease Virus',
    authors: ['Das, S.', 'Nayak, U.', 'Pal, S.', 'Subramaniam, S.'],
    journal: 'Communicated (International Peer Review)',
    year: 2024,
    publicationType: 'Communicated Manuscript',
    status: 'Under Communication',
    topics: ['Molecular Epidemiology', 'Machine Learning', 'FMDV Lineage Prediction'],
    apaCitation:
      'Das, S., Nayak, U., Pal, S., & Subramaniam, S. (2024). MolEpidPred: A Novel Computational Solution for the Molecular Epidemiology of Foot-and-mouth Disease Virus. (Under Communication).',
    bibtex: `@article{das2024molepidpred,
  title={MolEpidPred: A Novel Computational Solution for the Molecular Epidemiology of Foot-and-mouth Disease Virus},
  author={Das, S. and Nayak, U. and Pal, S. and Subramaniam, S.},
  note={Under Communication},
  year={2024}
}`,
  },

  // 10. SeroMonitor
  {
    id: 'com-seromonitor-2024',
    title:
      'Statistical Approach and Web Server for Foot-and-mouth Disease Sero-monitoring Parameter Estimation: An Application to Sero-monitoring Studies in India during 2006-22',
    authors: ['Das, S.', 'Pal, S.', 'Subramaniam, S.', 'Mohapatra, J.K.', 'Singh, R.P.'],
    journal: 'Communicated (International Peer Review)',
    year: 2024,
    publicationType: 'Communicated Manuscript',
    status: 'Under Communication',
    topics: ['Biostatistics', 'Sero-monitoring', 'Parameter Estimation', 'Web Server'],
    apaCitation:
      'Das, S., Pal, S., Subramaniam, S., Mohapatra, J. K., & Singh, R. P. (2024). Statistical Approach and Web Server for Foot-and-mouth Disease Sero-monitoring Parameter Estimation: An Application to Sero-monitoring Studies in India during 2006-22. (Under Communication).',
    bibtex: `@article{das2024seromonitor,
  title={Statistical Approach and Web Server for Foot-and-mouth Disease Sero-monitoring Parameter Estimation: An Application to Sero-monitoring Studies in India during 2006-22},
  author={Das, S. and Pal, S. and Subramaniam, S. and Mohapatra, J. K. and Singh, R. P.},
  note={Under Communication},
  year={2024}
}`,
  },

  // 11. SAT2 Subunit Vaccine Design
  {
    id: 'com-sat2-vaccine-2024',
    title:
      'Designing Multi-Epitope Subunit Vaccine against Foot-and-mouth Disease Virus Serotype SAT2 using Immunoinformatics Approach',
    authors: ['Das, S.', 'Parida, T.', 'Nayak, U.', 'Pradhan, S.K.', 'Biswal, J.K.'],
    journal: 'Communicated (International Peer Review)',
    year: 2024,
    publicationType: 'Communicated Manuscript',
    status: 'Under Communication',
    topics: ['Immunoinformatics', 'In-Silico Vaccine Design', 'SAT2 Serotype', 'Molecular Dynamics'],
    apaCitation:
      'Das, S., Parida, T., Nayak, U., Pradhan, S. K., & Biswal, J. K. (2024). Designing Multi-Epitope Subunit Vaccine against Foot-and-mouth Disease Virus Serotype SAT2 using Immunoinformatics Approach. (Under Communication).',
    bibtex: `@article{das2024sat2vaccine,
  title={Designing Multi-Epitope Subunit Vaccine against Foot-and-mouth Disease Virus Serotype SAT2 using Immunoinformatics Approach},
  author={Das, S. and Parida, T. and Nayak, U. and Pradhan, S. K. and Biswal, J. K.},
  note={Under Communication},
  year={2024}
}`,
  },

  // 12. NSPPredServ
  {
    id: 'com-nsppredserv-2024',
    title:
      'NSPPredServ: A Computational Model-based Approach for Prediction of 2B Non-Structural Antibody against Foot-and-mouth Disease Virus in Cloven Hoofed Animals',
    authors: ['Das, S.', 'Barik, B.', 'Pal, S.', 'Biswal, J.K.', 'Mohapatra, J.K.', 'Singh, R.P.'],
    journal: 'Communicated (International Peer Review)',
    year: 2024,
    publicationType: 'Communicated Manuscript',
    status: 'Under Communication',
    topics: ['Machine Learning', '2B NSP Antibody', 'Livestock Diagnostics', 'Web Server'],
    apaCitation:
      'Das, S., Barik, B., Pal, S., Biswal, J. K., Mohapatra, J. K., & Singh, R. P. (2024). NSPPredServ: A Computational Model-based Approach for Prediction of 2B Non-Structural Antibody against Foot-and-mouth Disease Virus in Cloven Hoofed Animals. (Under Communication).',
    bibtex: `@article{das2024nsppredserv,
  title={NSPPredServ: A Computational Model-based Approach for Prediction of 2B Non-Structural Antibody against Foot-and-mouth Disease Virus in Cloven Hoofed Animals},
  author={Das, S. and Barik, B. and Pal, S. and Biswal, J. K. and Mohapatra, J. K. and Singh, R. P.},
  note={Under Communication},
  year={2024}
}`,
  },

  // 13. Cattle vaccination response network biology
  {
    id: 'com-cattle-network-2024',
    title:
      'A Network Biology Approach for Understanding Foot-and-mouth Disease Vaccination Response in Cattle using High-throughput Gene Expression Data',
    authors: ['Das, S.', 'Behera, S.', 'Pradhan, S.K.', 'Sahoo, N.R.'],
    journal: 'Communicated (International Peer Review)',
    year: 2024,
    publicationType: 'Communicated Manuscript',
    status: 'Under Communication',
    topics: ['Network Biology', 'Host Transcriptomics', 'Vaccination Response', 'High-throughput Expression'],
    apaCitation:
      'Das, S., Behera, S., Pradhan, S. K., & Sahoo, N. R. (2024). A Network Biology Approach for Understanding Foot-and-mouth Disease Vaccination Response in Cattle using High-throughput Gene Expression Data. (Under Communication).',
    bibtex: `@article{das2024cattlenetwork,
  title={A Network Biology Approach for Understanding Foot-and-mouth Disease Vaccination Response in Cattle using High-throughput Gene Expression Data},
  author={Das, S. and Behera, S. and Pradhan, S. K. and Sahoo, N. R.},
  note={Under Communication},
  year={2024}
}`,
  },

  // 14. mRNA vaccine against FMD
  {
    id: 'com-mrna-vaccine-2024',
    title:
      'Designing a novel mRNA vaccine against Foot-and-mouth Disease using immunoinformatics approach',
    authors: ['Das, S.', 'Jagadeb, M.', 'Biswal, J.K.'],
    journal: 'Communicated (International Peer Review)',
    year: 2024,
    publicationType: 'Communicated Manuscript',
    status: 'Under Communication',
    topics: ['mRNA Vaccine', 'Immunoinformatics', 'Epitope Engineering', 'FMDV Prophylaxis'],
    apaCitation:
      'Das, S., Jagadeb, M., & Biswal, J. K. (2024). Designing a novel mRNA vaccine against Foot-and-mouth Disease using immunoinformatics approach. (Under Communication).',
    bibtex: `@article{das2024mrnavaccine,
  title={Designing a novel mRNA vaccine against Foot-and-mouth Disease using immunoinformatics approach},
  author={Das, S. and Jagadeb, M. and Biswal, J. K.},
  note={Under Communication},
  year={2024}
}`,
  },
];

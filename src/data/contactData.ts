export interface InstitutionalContactInfo {
  institution: string;
  facility: string;
  location: string;
  principalInvestigator: {
    name: string;
    designation: string;
    role: string;
    emailPrimary: string;
    emailAlternate: string;
    phoneOffice: string;
    phoneResidence: string;
    phonePlaceholder?: string;
  };
  address: {
    campus: string;
    road: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  visitingHours: string;
  visitingProtocol: string[];
  instituteWebsite: string;
}

export const CONTACT_INFO: InstitutionalContactInfo = {
  institution: 'ICAR–National Institute on Foot and Mouth Disease',
  location: 'Bhubaneswar, Odisha, India',
  facility: 'Biostatistics and Bioinformatics Facility',
  principalInvestigator: {
    name: 'Dr. Samarendra Das',
    designation: 'Senior Scientist',
    role: 'Principal Investigator',
    emailPrimary: 'samarendra.das@icar.gov.in',
    emailAlternate: 'samarendra4849@gmail.com',
    phoneOffice: '+91 674-2601109',
    phoneResidence: '+91 674-2912335',
  },
  address: {
    campus: 'ICAR–NIFMD Permanent Research Campus',
    road: 'Arugul-Jatni Road',
    locality: 'Post-Argul, Jatni',
    city: 'Bhubaneswar',
    state: 'Odisha',
    pincode: '752050',
    country: 'India',
  },
  visitingHours: 'Monday – Friday | 09:30 AM – 05:00 PM IST',
  visitingProtocol: [
    'Official academic or scientific visits require prior appointment or institutional clearance.',
    'Visitors must present valid government or institutional photo identification at the campus security gate.',
    'For student dissertation inquiries or dataset consulting sessions, please submit the enquiry form in advance.',
  ],
  instituteWebsite: 'https://nifmd.icar.gov.in',
};

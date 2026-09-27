// Design System & Domain Types for BBF Portal

export type ColorVariant = 'primary' | 'secondary' | 'teal' | 'amber' | 'neutral';

export type BadgeVariant = 
  | 'default'
  | 'primary'
  | 'teal'
  | 'amber'
  | 'outline'
  | 'success'
  | 'subtle';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'teal' 
  | 'amber';

export type ButtonSize = 'sm' | 'md' | 'lg';

// Institutional Entities
export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  source?: string;
}

export interface ComputationalTool {
  id: string;
  name: string;
  type: 'web_server' | 'r_package' | 'standalone';
  description: string;
  targetDomain: string; // e.g. "Sero-surveillance", "VP1 Serotyping", "Molecular Epidemiology"
  url?: string;
  repoUrl?: string;
  paperReference?: string;
  status: 'active' | 'in_development' | 'published';
  tags: string[];
}

export interface ResearchProject {
  slNo: number;
  title: string;
  fundingAgency: string;
  status: 'Ongoing' | 'Completed';
  category?: string;
}

export interface FellowMember {
  name: string;
  designation: string;
  projectTitle: string;
  fundingAgency: string;
  tenure: string;
}

export interface StudentDissertation {
  name: string;
  degree: string;
  dissertationTitle: string;
  year: number;
  institute: string;
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  volume?: string;
  pages?: string;
  year: number;
  doi?: string;
  isCorrespondingAuthor?: boolean;
  status: 'published' | 'communicated';
}

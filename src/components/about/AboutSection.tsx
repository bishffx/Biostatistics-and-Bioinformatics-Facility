import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FacilityMissionSection } from '../home/FacilityMissionSection';
import { MetricDisplay } from '../ui/MetricDisplay';
import { Callout } from '../ui/Callout';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
  Building2, 
  ShieldCheck, 
  Server, 
  Terminal, 
  Award, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn font-sans">
      {/* 1. Page Header */}
      <SectionHeader
        eyebrow="Institutional Identity &amp; Mandate"
        title="About the Facility"
        description="The Biostatistics and Bioinformatics Facility (BBF) is a specialized institutional computational biology and statistical consulting resource at ICAR–National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha, India."
      />

      {/* 2. Institutional Mandate Banner */}
      <Callout type="mandate" title="Mandate of the Facility">
        Coordinate and manage statistical and informatics activities in ICAR-NIFMD, providing cutting-edge computational solutions for Foot and Mouth Disease surveillance, multi-omics integration, in-silico vaccine design, and machine learning models for disease prediction across India.
      </Callout>

      {/* 3. Mission & Foundational Capabilities */}
      <FacilityMissionSection />

      {/* 4. Core Quantitative Facility Metrics */}
      <section aria-labelledby="about-metrics-heading" className="space-y-4 pt-4">
        <h2 id="about-metrics-heading" className="sr-only">Facility Operational Metrics</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <MetricDisplay
            label="Web Servers"
            value="5"
            unit="Portals"
            description="Deployed on institutional nifmd-bbf subdomain."
            icon={<Server className="w-4 h-4" />}
          />
          <MetricDisplay
            label="R Packages"
            value="8"
            unit="CRAN/Git"
            description="Specialized packages for hub genes and sero-surveillance."
            icon={<Terminal className="w-4 h-4" />}
          />
          <MetricDisplay
            label="Sponsored Grants"
            value="4"
            unit="Active"
            description="Funded by DST-SERB, Govt. of Odisha, and ICAR."
            icon={<Award className="w-4 h-4" />}
          />
          <MetricDisplay
            label="Master's Dissertations"
            value="8"
            unit="Theses"
            description="Bioinformatics postgraduates successfully graduated from BBF."
            icon={<BookOpen className="w-4 h-4" />}
          />
        </div>
      </section>

      {/* 5. Institutional Governance & Affiliations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <Card variant="accent-left">
          <CardHeader>
            <Badge variant="primary" size="sm">National Governance</Badge>
            <CardTitle className="mt-2">Indian Council of Agricultural Research (ICAR)</CardTitle>
            <CardDescription>
              Operates under the Department of Agricultural Research and Education (DARE), Ministry of Agriculture and Farmers Welfare, Government of India.
            </CardDescription>
          </CardHeader>
          <div className="text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-sci-600 shrink-0" />
              <span>National Animal Disease Control Programme (NADCP) Biostatistics Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-sci-600 shrink-0" />
              <span>Permanent Research Campus at Arugul-Jatni Road, Bhubaneswar</span>
            </div>
          </div>
          <CardFooter>
            <Link
              to="/facilities"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sci-700 hover:text-sci-900 font-mono"
            >
              Explore Infrastructure <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </CardFooter>
        </Card>

        <Card variant="accent-left">
          <CardHeader>
            <Badge variant="teal" size="sm">Research Leadership</Badge>
            <CardTitle className="mt-2">Scientific Leadership &amp; Mentorship</CardTitle>
            <CardDescription>
              Led by Senior Scientist Dr. Samarendra Das, the facility conducts peer-reviewed computational genomics and trains research scholars from OUAT and national universities.
            </CardDescription>
          </CardHeader>
          <div className="text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Extramural grants supported by DST-SERB and Government of Odisha</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>High-impact publications in Nature Scientific Reports, Chemosphere, &amp; PLoS ONE</span>
            </div>
          </div>
          <CardFooter>
            <Link
              to="/people"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 font-mono"
            >
              Meet the Research Team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

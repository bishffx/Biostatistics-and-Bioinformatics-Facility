import React from 'react';
import { PI_DATA } from '../../data/teamData';
import { 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export const PiProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-sm border border-slate-200 shadow-academic overflow-hidden font-sans">
      
      {/* Top Identity Banner */}
      <div className="bg-navy-950 text-white p-6 sm:p-8 border-b border-navy-800 relative bg-grid-dark">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Principal Investigator &amp; Facility Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {PI_DATA.salutation} {PI_DATA.name}
            </h3>
            <p className="text-slate-300 text-sm font-sans font-medium">
              {PI_DATA.designation} &bull; {PI_DATA.role}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-navy-900 border border-teal-500/40 text-teal-300 font-mono text-xs">
              ICAR-NIFMD Scientist
            </span>
          </div>
        </div>
      </div>

      {/* Main Body Grid */}
      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left: Typographic Monogram Crest & Contact Card */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Typographic Institutional Monogram (Avoids fake stock portrait) */}
          <div 
            role="img" 
            aria-label="Dr. Samarendra Das institutional insignia monogram"
            className="aspect-square max-w-[240px] mx-auto rounded-sm bg-navy-900 border-2 border-slate-200/90 shadow-subtle p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            {/* Background subtle geometric seal lines */}
            <div className="absolute inset-0 border-[6px] border-navy-800 m-2 rounded-xs pointer-events-none" aria-hidden="true" />
            <div className="w-20 h-20 rounded-full border border-teal-500/40 flex items-center justify-center mb-3 bg-navy-950 text-teal-300 font-serif text-3xl font-bold tracking-tight shadow-inner" aria-hidden="true">
              SD
            </div>
            <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
              Dr. Samarendra Das
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">
              Senior Scientist, ICAR-NIFMD
            </div>
            <div className="mt-3 text-[9px] font-mono px-2 py-0.5 rounded bg-navy-800 text-teal-400 border border-navy-700">
              Institutional Research Lead
            </div>
          </div>

          {/* Contact Coordinates */}
          <div className="bg-surface-ground p-4 rounded border border-slate-200/80 space-y-3 text-xs">
            <div className="font-mono text-[10px] uppercase text-slate-400 font-semibold tracking-wider">
              Institutional Coordinates
            </div>

            <div className="space-y-2 text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sci-700 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug text-[11px]">{PI_DATA.location}</span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-sci-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-0.5 text-[11px]">
                  {PI_DATA.emails.map((email, eIdx) => (
                    <a
                      key={eIdx}
                      href={`mailto:${email}`}
                      aria-label={`Send email to ${email}`}
                      className="block text-sci-700 hover:underline font-mono text-[10.5px] break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sci-500 rounded-xs"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Academic Biography & Research Scope */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Biography Block */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sci-700 font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Academic Biography</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
              {PI_DATA.bioSummary}
            </p>
            {PI_DATA.bioPlaceholder && (
              <div className="p-3 rounded bg-slate-50 border border-dashed border-slate-200 text-xs font-mono text-slate-500 leading-relaxed italic">
                {PI_DATA.bioPlaceholder}
              </div>
            )}
          </div>

          {/* Research Interests Matrix */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Primary Research Interests &amp; Methodologies</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PI_DATA.researchInterests.map((interest, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded bg-surface-ground border border-slate-100 text-xs text-slate-800 font-sans"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{interest}</span>
                </div>
              ))}
            </div>

            {PI_DATA.interestsPlaceholder && (
              <div className="p-2.5 rounded bg-slate-50 border border-dashed border-slate-200 text-[11px] font-mono text-slate-400 italic">
                {PI_DATA.interestsPlaceholder}
              </div>
            )}
          </div>

          {/* Active Editorial Notice */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>BBF Shared Resource Facility • ICAR-NIFMD</span>
            <span className="text-teal-700 font-medium">Bhubaneswar, Odisha</span>
          </div>

        </div>

      </div>

    </div>
  );
};

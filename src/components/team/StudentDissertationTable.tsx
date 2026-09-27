import React, { useState } from 'react';
import { STUDENT_ALUMNI_DATA } from '../../data/teamData';
import { GraduationCap } from 'lucide-react';

export const StudentDissertationTable: React.FC = () => {
  const [filterYear, setFilterYear] = useState<string>('All');

  const years = ['All', '2024', '2023', '2022'];

  const filteredStudents = filterYear === 'All'
    ? STUDENT_ALUMNI_DATA
    : STUDENT_ALUMNI_DATA.filter((s) => s.year.toString() === filterYear);

  return (
    <div className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-subtle space-y-4 p-5 sm:p-6 font-sans">
      
      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-sci-700 font-semibold flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-sci-700" />
            <span>Academic Capacity Building &amp; Mentorship</span>
          </div>
          <h4 className="text-xl font-serif font-bold text-navy-950 mt-0.5">
            M.Sc. (Bioinformatics) Dissertation Scholars
          </h4>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            Scholars who completed their postgraduate dissertation research work at BBF, ICAR-NIFMD.
          </p>
        </div>

        {/* Year Filter Buttons */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline">Year:</span>
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setFilterYear(yr)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                filterYear === yr
                  ? 'bg-navy-900 text-white font-semibold shadow-subtle'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Stacked Scholar Card View (< 640px) */}
      <div className="block sm:hidden space-y-3">
        {filteredStudents.map((student) => (
          <div 
            key={student.id} 
            className="p-3.5 rounded-sm bg-surface-ground border border-slate-200/90 space-y-2 text-xs"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-bold text-slate-900 text-xs">{student.name}</div>
                <div className="text-[11px] font-mono text-sci-700 font-medium">{student.degree}</div>
              </div>
              <span className="shrink-0 px-2 py-0.5 rounded font-mono text-[10.5px] bg-white text-slate-800 border border-slate-200 shadow-xs font-semibold">
                {student.year}
              </span>
            </div>

            <p className="font-medium text-slate-800 text-[11.5px] leading-snug pt-1.5 border-t border-slate-200/60">
              {student.dissertationTitle}
            </p>

            <div className="text-[10.5px] text-slate-500 font-mono pt-0.5 flex items-center justify-between">
              <span>{student.institute}</span>
              <span className="text-teal-700 font-medium">Alumnus</span>
            </div>
          </div>
        ))}
      </div>

      {/* Semantic Accessible Table for Tablet & Desktop (>= 640px) */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left text-xs font-sans">
          <thead className="bg-slate-50 border-y border-slate-200 text-slate-700 font-mono text-[10px] uppercase tracking-wider">
            <tr>
              <th scope="col" className="py-3 px-4 w-48">Candidate &amp; Degree</th>
              <th scope="col" className="py-3 px-4">Dissertation Research Title</th>
              <th scope="col" className="py-3 px-4 w-24 text-center">Year</th>
              <th scope="col" className="py-3 px-4 w-52">University / Institute</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filteredStudents.map((student) => (
              <tr 
                key={student.id}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                {/* Candidate Name & Degree */}
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-slate-900 text-xs">
                    {student.name}
                  </div>
                  <div className="text-[11px] font-mono text-sci-700 mt-0.5">
                    {student.degree}
                  </div>
                </td>

                {/* Dissertation Title */}
                <td className="py-3.5 px-4 font-medium text-slate-800 leading-snug">
                  {student.dissertationTitle}
                </td>

                {/* Year */}
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-block px-2 py-0.5 rounded font-mono text-[11px] bg-slate-100 text-slate-800 border border-slate-200">
                    {student.year}
                  </span>
                </td>

                {/* Institute */}
                <td className="py-3.5 px-4 text-slate-600 text-[11px] leading-tight">
                  <div className="font-medium text-slate-800">
                    {student.institute}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Affiliated Scholar
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
        <div>
          Showing <span className="font-bold text-slate-900">{filteredStudents.length}</span> of {STUDENT_ALUMNI_DATA.length} postgraduate dissertations
        </div>
        <span className="text-[11px] text-slate-400">
          OUAT Bhubaneswar Partnership
        </span>
      </div>

    </div>
  );
};

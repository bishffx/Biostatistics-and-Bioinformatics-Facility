import React, { useState } from 'react';
import { CONTACT_INFO } from '../../data/contactData';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { 
  Building2, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Compass, 
  Info,
  Loader2,
  FileQuestion,
  UserCheck
} from 'lucide-react';

interface FormState {
  name: string;
  institution: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  institution?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    institution: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string>('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }

    if (!formData.institution.trim()) {
      errs.institution = 'Institution or organization name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Valid email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. user@domain.ac.in)';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject line is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide enquiry details or message content';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters in length';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    // Simulate network submission to demonstration docket handler
    setTimeout(() => {
      setIsLoading(false);
      setSubmittedRef(`BBF-ENQ-${Date.now().toString().slice(-6)}`);
      setSubmissionSuccess(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      institution: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmissionSuccess(false);
    setSubmittedRef('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn font-sans">
      
      {/* 1. Header */}
      <SectionHeader
        eyebrow="Institutional Channels &amp; Scientific Communication"
        title="Connect With the Facility"
        description="Connect with the Biostatistics and Bioinformatics Facility for experimental design consultation, omics pipeline collaboration, machine learning partnerships, or postgraduate dissertation opportunities."
      />

      {/* 2. Main Two-Column Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column (5 cols): Institutional Identity, PI, & Visit Information */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Institutional Branding & Coordinates */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 text-sci-700 font-mono text-xs uppercase tracking-wider font-semibold border-b border-slate-100 pb-3">
              <Building2 className="w-4 h-4 text-sci-700" />
              <span>Facility Headquarters</span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Facility
              </span>
              <h3 className="text-lg font-serif font-bold text-navy-950">
                {CONTACT_INFO.facility}
              </h3>
            </div>

            <div className="space-y-1 pt-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Institution
              </span>
              <h4 className="text-sm font-sans font-semibold text-slate-800">
                {CONTACT_INFO.institution}
              </h4>
              <p className="text-xs text-slate-500 font-mono">
                {CONTACT_INFO.location}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sci-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11.5px] leading-relaxed">
                  <div>{CONTACT_INFO.address.campus}</div>
                  <div>{CONTACT_INFO.address.road}, {CONTACT_INFO.address.locality}</div>
                  <div className="font-semibold text-navy-950">
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} – {CONTACT_INFO.address.pincode}
                  </div>
                  <div className="text-slate-500 font-mono text-[10px]">{CONTACT_INFO.address.country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Investigator Identity Card */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 text-sci-700 font-mono text-xs uppercase tracking-wider font-semibold border-b border-slate-100 pb-3">
              <UserCheck className="w-4 h-4 text-sci-700" />
              <span>Principal Investigator</span>
            </div>

            <div className="space-y-1">
              <h4 className="text-base font-serif font-bold text-navy-950">
                {CONTACT_INFO.principalInvestigator.name}
              </h4>
              <div className="text-xs text-slate-600 font-medium">
                {CONTACT_INFO.principalInvestigator.designation} &bull; {CONTACT_INFO.principalInvestigator.role}
              </div>
            </div>

            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-[10px] uppercase w-20">Gov Email:</span>
                <a
                  href={`mailto:${CONTACT_INFO.principalInvestigator.emailPrimary}`}
                  className="text-sci-700 hover:text-navy-950 hover:underline font-semibold text-[11px]"
                >
                  {CONTACT_INFO.principalInvestigator.emailPrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-[10px] uppercase w-20">Alternate:</span>
                <a
                  href={`mailto:${CONTACT_INFO.principalInvestigator.emailAlternate}`}
                  className="text-slate-600 hover:text-navy-950 hover:underline text-[11px]"
                >
                  {CONTACT_INFO.principalInvestigator.emailAlternate}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-slate-400 text-[10px] uppercase w-20">Telephone:</span>
                <span className="text-slate-400 text-[10px] italic">
                  {CONTACT_INFO.principalInvestigator.phonePlaceholder}
                </span>
              </div>
            </div>
          </div>

          {/* Visit ICAR–NIFMD Area */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 text-sci-700 font-mono text-xs uppercase tracking-wider font-semibold border-b border-slate-100 pb-3">
              <Compass className="w-4 h-4 text-sci-700" />
              <span>Visit ICAR–NIFMD</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Working Timings: {CONTACT_INFO.visitingHours}</span>
              </div>

              <div className="space-y-1.5 text-slate-600 text-[11px] leading-relaxed pt-1">
                <p className="font-semibold text-slate-700">Visitor Protocols:</p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-slate-500">
                  {CONTACT_INFO.visitingProtocol.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Official Portal:</span>
                <a
                  href={CONTACT_INFO.instituteWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sci-700 hover:underline inline-flex items-center gap-1 font-mono font-medium"
                >
                  <span>nifmd.icar.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (7 cols): Contact Form & Map Area */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Institutional Contact Form */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-academic space-y-6">
            
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-sci-700 font-mono text-xs uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Scientific Inquiry</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-950 mt-1">
                Send an Institutional Enquiry
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Complete the fields below to initiate consulting discussions, computational pipeline access, or collaborative research queries.
              </p>
            </div>

            {/* ERROR STATE BANNER */}
            {Object.keys(errors).length > 0 && (
              <div role="alert" aria-live="assertive" className="p-3.5 bg-rose-50 border border-rose-200 text-rose-900 rounded-sm text-xs flex items-start gap-2.5 animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-0.5">
                  <span className="font-semibold">Please correct the highlighted fields:</span>
                  <ul className="list-disc list-inside text-[11px] text-rose-700">
                    {Object.values(errors).map((err, idx) => (
                      <li key={idx}>{err}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* SUCCESS STATE */}
            {submissionSuccess ? (
              <div role="status" aria-live="polite" className="p-8 bg-emerald-50 border border-emerald-200 rounded-sm text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto" aria-hidden="true">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-lg text-emerald-950">
                    Enquiry Recorded
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Your institutional enquiry details have been validated and recorded for the Biostatistics and Bioinformatics Facility.
                  </p>
                </div>

                <div className="bg-white p-3 rounded border border-emerald-200 max-w-xs mx-auto font-mono text-xs">
                  <span className="text-slate-500">Tracking Reference: </span>
                  <span className="font-bold text-emerald-900">{submittedRef}</span>
                </div>

                {/* Explicit Backend Status Notice */}
                <div className="bg-white/80 p-3.5 rounded border border-emerald-300 text-[11px] text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <Info className="w-3.5 h-3.5 text-sci-700" />
                    <span>Backend Mail Dispatch Notice:</span>
                  </div>
                  <p className="text-slate-600 text-[10.5px] leading-relaxed">
                    Direct SMTP/API email transmission is pending backend service configuration on the institutional server. For time-sensitive matters, you may directly reach Dr. Samarendra Das via <a href="mailto:samarendra.das@icar.gov.in" className="text-sci-700 font-mono underline">samarendra.das@icar.gov.in</a> referencing this docket.
                  </p>
                </div>

                <div className="pt-2">
                  <Button size="sm" variant="outline" onClick={handleReset}>
                    Send Another Enquiry
                  </Button>
                </div>
              </div>
            ) : (
              /* FORM INPUTS */
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs font-sans">
                
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="block font-medium text-slate-800">
                    Name <span className="text-rose-600" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    disabled={isLoading}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Enter your full name"
                    className={`w-full px-3 py-2.5 min-h-[44px] bg-white border rounded text-slate-900 text-xs focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-slate-300 focus:border-sci-500 focus:ring-1 focus:ring-sci-500'
                    }`}
                  />
                  {errors.name && (
                    <span id="contact-name-error" role="alert" className="text-[10.5px] text-rose-600 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Institution / Organization */}
                <div className="space-y-1">
                  <label htmlFor="contact-institution" className="block font-medium text-slate-800">
                    Institution / Organization <span className="text-rose-600" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-institution"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.institution}
                    aria-describedby={errors.institution ? "contact-institution-error" : undefined}
                    disabled={isLoading}
                    value={formData.institution}
                    onChange={(e) => {
                      setFormData({ ...formData, institution: e.target.value });
                      if (errors.institution) setErrors({ ...errors, institution: undefined });
                    }}
                    placeholder="e.g. ICAR Institute / University / Organization"
                    className={`w-full px-3 py-2.5 min-h-[44px] bg-white border rounded text-slate-900 text-xs focus:outline-none transition-colors ${
                      errors.institution
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-slate-300 focus:border-sci-500 focus:ring-1 focus:ring-sci-500'
                    }`}
                  />
                  {errors.institution && (
                    <span id="contact-institution-error" role="alert" className="text-[10.5px] text-rose-600 block">
                      {errors.institution}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="block font-medium text-slate-800">
                    Email <span className="text-rose-600" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    disabled={isLoading}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. investigator@institute.gov.in"
                    className={`w-full px-3 py-2.5 min-h-[44px] bg-white border rounded text-slate-900 text-xs focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-slate-300 focus:border-sci-500 focus:ring-1 focus:ring-sci-500'
                    }`}
                  />
                  {errors.email && (
                    <span id="contact-email-error" role="alert" className="text-[10.5px] text-rose-600 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="block font-medium text-slate-800">
                    Subject <span className="text-rose-600" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    disabled={isLoading}
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="e.g. Consultation on Sero-Surveillance Sampling Framework"
                    className={`w-full px-3 py-2.5 min-h-[44px] bg-white border rounded text-slate-900 text-xs focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-slate-300 focus:border-sci-500 focus:ring-1 focus:ring-sci-500'
                    }`}
                  />
                  {errors.subject && (
                    <span id="contact-subject-error" role="alert" className="text-[10.5px] text-rose-600 block">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="contact-message" className="block font-medium text-slate-800">
                      Message <span className="text-rose-600" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono" aria-live="polite">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    disabled={isLoading}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Detail the scope of research, biological dataset characteristics, or consultation objectives..."
                    className={`w-full px-3 py-2.5 min-h-[96px] bg-white border rounded text-slate-900 text-xs focus:outline-none transition-colors leading-relaxed ${
                      errors.message
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-slate-300 focus:border-sci-500 focus:ring-1 focus:ring-sci-500'
                    }`}
                  />
                  {errors.message && (
                    <span id="contact-message-error" role="alert" className="text-[10.5px] text-rose-600 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <div className="pt-2 flex items-center justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isLoading}
                    className="w-full sm:w-auto min-w-[150px] min-h-[44px] justify-center"
                  >
                    {isLoading ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Enquiry</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}

          </div>

          {/* MAP AREA (Strictly no fabricated GPS coordinates) */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-subtle space-y-3 font-sans">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sci-700 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Geographic Location &amp; Campus Map</span>
              </div>
              <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                Institutional GIS
              </span>
            </div>

            {/* Map Area Placeholder (Strict anti-fabrication compliant) */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-2.5">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                <FileQuestion className="w-5 h-5 text-slate-500" />
              </div>
              
              <div className="space-y-1 max-w-sm">
                <h4 className="font-serif font-bold text-sm text-navy-950">
                  Campus Map Area
                </h4>
                <p className="text-xs text-slate-600 font-mono text-[11px]">
                  ICAR–NIFMD, Arugul-Jatni Road, Bhubaneswar – 752050, Odisha, India
                </p>
                <p className="text-[10.5px] text-slate-500 leading-relaxed pt-1">
                  [Interactive GIS Map Embed will be rendered via official map provider upon provisioning of institutional geodetic API key. Coordinates are intentionally not fabricated.]
                </p>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
              <span>National Institute Campus Corridor</span>
              <span className="font-mono text-[10px] text-slate-400">Bhubaneswar Hub</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

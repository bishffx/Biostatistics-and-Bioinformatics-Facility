# Short Implementation Plan: BBF (ICAR-NIFMD) Portal

## Status: Inspection Completed & Architecture Defined

### Checklist & Next Steps:

- [x] **Step 1: Codebase & Asset Inspection**
  - Inspected existing ASP.NET legacy codebase in `Downloads/bbf_main`.
  - Extracted authentic scientific and personnel records from `BBF_NIFMD.docx`, `Corrections in BBF website.docx`, and `Research Fellows and students.docx`.
  - Identified official institutional assets: `icar.png`, `NIFMD new logo.jpg`, `FMDV.jpg`, server diagrams.

- [x] **Step 2: Technical Stack Identification**
  - Identified Node.js v24.20.0 and npm 11.19.0.
  - Recommended stack: Vite + React 19 / TypeScript + Tailwind CSS + Lucide Icons + React Router.

- [x] **Step 3: Component & Folder Architecture**
  - Defined modular structure in `docs/ARCHITECTURE.md`.
  - Established Design System Specification in `docs/DESIGN_SYSTEM.md`.
  - Implemented reusable UI primitives (`Badge`, `Button`, `Card`, `SectionHeader`, `MetricDisplay`, `StatusIndicator`, `Callout`).
  - Implemented institutional layout (`GovtHeader`, `InstitutionalHeader`, `MainNavbar`, `Footer`).

- [x] **Step 4: Dependency Mapping & Verification**
  - Installed minimal production dependencies: `react`, `react-dom`, `lucide-react`, `clsx`, `tailwind-merge`.
  - Configured Tailwind tokens, Google Fonts (`Source Serif 4`, `Inter`, `JetBrains Mono`), and Vite bundler.
  - Verified production build (`npm run build`: 0 errors, clean build).

- [x] **Step 5: Global Header & Navigation System**
  - Built desktop institutional header with ICAR & ICAR-NIFMD logos and graceful text fallbacks.
  - Implemented 9 required navigation sections with active indicators and smooth transitions.
  - Built sticky scroll behavior with compact transformation when scrolled.
  - Created status/identity element: "ICAR–NIFMD, Bhubaneswar, Odisha".
  - Created fully accessible mobile navigation drawer (Escape key, body scroll lock, aria labels, focus control).

- [x] **Step 6: Homepage Hero Section & Computational Bio-Visualization**
  - Created procedural scientific canvas visualization (`ScientificHeroVisualization.tsx`) with dynamic node networks and computational pathways.
  - Implemented subtle cursor interaction and smooth physics damping.
  - Fully accessible with strict `prefers-reduced-motion` compliance.
  - Configured institutional headline, eyebrow, supporting statement, and primary/secondary CTAs.
  - Built institutional metadata strip (ICAR-NIFMD Bhubaneswar, Senior Scientist & PI Dr. Samarendra Das, Research Scope).

- [x] **Step 7: Editorial Institutional Statement & Capability Architecture**
  - Created editorial layout component (`FacilityMissionSection.tsx`) immediately below the hero.
  - Implemented large left-aligned serif statement: "Where Statistics Meets Computational Biology".
  - Structured detailed right-aligned institutional mandate for animal science & Foot-and-Mouth Disease epidemiology.
  - Built 3 capability pillars (01 Biostatistics, 02 Bioinformatics, 03 Computational Tools) using typography and spacing instead of generic cards.
  - Added staggered scroll-reveal transitions with `prefers-reduced-motion` support.

- [x] **Step 8: Biostatistics Facility Interactive Section**
  - Built `BiostatisticsSection.tsx` featuring a large vertical interactive service index (01 to 04).
  - Designed synchronized procedural SVG statistical diagrams (`StatisticalVisualizations.tsx`) covering:
    1. Experimental Study Design & Power Threshold Frontier
    2. Cluster Sampling & Sero-Surveillance Error Bars (Livestock-Wildlife Interface)
    3. Infectious Disease Transmission Curves & ROC Diagnostic Cutoffs (Youden Index)
    4. Two-Arm Clinical Vaccine Quality Trials & Gaussian Distribution Shifts
  - Clearly marked all diagrams as illustrative schematics with zero invented empirical results.
  - Added full keyboard accessibility (`ArrowUp`/`ArrowDown`, ARIA tablist/tab roles, focus visible).

- [x] **Step 9: Bioinformatics Facility & Layered Omics Workflow**
  - Built `BioinformaticsSection.tsx` with Title: "Computational Biology Across the Omics Landscape".
  - Structured 3 core capabilities: NGS / Multi-Omics, In-Silico Vaccine Design, and AI / Machine Learning.
  - Built synchronized visualizer (`BioinformaticsModalityVisualizer.tsx`) rendering procedural sequencing read alignments, single-cell clusters, 3D capsid structures, docking pockets, and sequence classification nodes.
  - Built interactive 5-stage layered workflow (`OmicsWorkflowPipeline.tsx`): Biological Data → Processing → Analysis → Computational Modeling → Biological Insight.
  - Zero fabricated results or claimed accuracy percentages; all interactions informative and grounded in verified ICAR-NIFMD methods.

- [x] **Step 10: Research Infrastructure (Hardware / Software)**
  - Built `HardwareSoftwareSection.tsx` with Title: "Research Infrastructure".
  - Created interactive 5-tier topology visualizer (`InfrastructurePipelineVisualizer.tsx`): DATA → COMPUTE → PIPELINES → ANALYSIS → INTERPRETATION.
  - Built `SoftwareEcosystemCatalog.tsx` featuring R, R/Bioconductor, Python, MATLAB, Cytoscape, and PASS with interactive hover states.
  - Highlighted dual 64-bit computing environments (Enterprise Linux + Windows workstations) supporting sequence alignment, variant calling, network analysis, and computational analysis pipelines.
  - Strictly avoided fabricated hardware specifications, CPU/GPU GHz benchmarks, or invented RAM counts.

- [x] **Step 11: Computational Tools & Web Servers Directory**
  - Built `ToolsSection.tsx` and `ToolCard.tsx` with Title: "Computational Tools & Web Servers".
  - Created typed registry (`toolsData.ts`) featuring 5 Web Applications (FMDSeroSurv, FMDVSerPred, SeroMonitor, MolEpidPred, NSPPredServ) and 6 R Packages (dhga, BootMRMR, GSAQ, BSM, SwarnSeq, GSQSeq).
  - Implemented instant live search and category filters (All Tools, Web Applications, R Packages) with count badges and reset controls.
  - Designed interactive scientific hover states with procedural background visual motifs and verified institutional URLs.
  - Added accessible keyboard navigation, search labels, and mobile-friendly controls.

- [x] **Step 12: Research Programs & Funded Projects (Extensible Timeline)**
  - Built `ProjectsSection.tsx` with Title: "Research Programs & Funded Projects".
  - Created structured data model (`projectsData.ts`) covering DST-SERB, Govt. of Odisha (DST), DAHD (NADCP), and ICAR-NIFMD initiatives.
  - Strictly followed anti-fabrication directives: zero invented project amounts, synthetic dates, or fictional grant codes; clearly designated content placeholders for missing links and documentation.
  - Built elegant research timeline archive with active node markers, duration tags, and interactive funding agency filter pills.

- [x] **Step 13: Team & Publications Data Fixtures**
  - Integrated authentic data fixtures:
    - `src/data/teamData.ts`: Dr. Samarendra Das (PI), 3 Research Fellows (Manaswini Jagadev, Bighneswar Barik, Utkal Nayak), and 8 OUAT M.Sc. dissertation scholars.
    - `src/data/publicationsData.ts`: 8 peer-reviewed journal articles (Nature Sci. Rep., Elsevier Chemosphere, Biologicals, PLoS ONE, MDPI Entropy) and 6 communicated manuscripts with complete DOI links.
    - `src/data/contactData.ts`: Verified postal coordinates, emails, operational timings, and consultation categories.

- [x] **Step 14: Remaining Page Implementations**
  - **Team Section (`TeamSection.tsx`):**
    - High-authority PI academic profile with institutional typographic crest monogram (`SD`), research focus areas, and verified institutional coordinates.
    - Research Fellows directory (`FellowCard.tsx`) with status filters (All, Active, Alumni).
    - Academic capacity building table (`StudentDissertationTable.tsx`) cataloging 8 OUAT bioinformatics dissertation graduates with year-based filtering.
  - **Publications Section (`PublicationsSection.tsx` & `PublicationCard.tsx`):**
    - Title: "Publications & Scientific Output".
    - Filterable by type (All Papers, Published Articles, Under Communication) and instant search across titles, authors, journals, and keywords.
    - One-click APA citation copy and direct DOI links to scientific publishers.
  - **Contact & Consultation Section (`ContactSection.tsx`):**
    - Institutional address, operational timings, and PI contact coordinates.
    - Interactive scientific consultation request form with area selection and automated docket generation (`BBF-REQ-XXXXXX`).

- [x] **Step 15: Final Testing, Polish & Build Validation**
  - All 9 primary navigation sections fully wired into header, footer, and reactive state machine.
  - Footer enhanced with quick links to all 9 portal sections and direct links to live web servers.
  - Verified clean TypeScript compilation and production build (`npm run build`: 0 errors in ~8.38s).
  - Background Vite dev server active and hot-reloading smoothly.

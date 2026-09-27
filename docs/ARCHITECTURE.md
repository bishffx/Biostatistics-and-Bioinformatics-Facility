# Implementation Architecture & Project Roadmap
## Biostatistics and Bioinformatics Facility (BBF) Portal
### ICAR–National Institute on Foot and Mouth Disease (ICAR-NIFMD), Bhubaneswar, Odisha, India

---

## 1. Project Background & Source Inspection Findings

Following an inspection of the source repository and official project documentation:

1. **Legacy Stack**:
   - Original implementation was a legacy ASP.NET 4.x WebForms application (`bbf_main.csproj`, `MasterPage/beforelogin.Master`, Bootstrap 3.4.1, jQuery 3.6.3).
   - Monolithic tabbed interface with nested tables and inline styling.

2. **Official Source Documentation Extracted**:
   - `BBF_NIFMD.docx`: Core mandate, organizational mission, biostatistics services, bioinformatics infrastructure, high-performance computing assets.
   - `Corrections in BBF website.docx`: Corrected references, verified citations for 5 web servers, updated 2024 publications, peer-reviewed articles under communication.
   - `Research Fellows and students.docx`: Personnel records, Principal Investigator profile (Dr. Samarendra Das, Senior Scientist), Junior Research Fellows with project grants (DST-SERB, Govt of Odisha), and 8 M.Sc. dissertations (OUAT).
   - `Images/`: Official ICAR emblem (`icar.png`), ICAR-NIFMD institutional logo (`NIFMD new logo.jpg`), FMDV virus structural diagram (`FMDV.jpg`), demo server mockups (`Demo_PredServer.png`, `seroimg.png`).

---

## 2. Technical Stack Definition

- **Core Runtime**: React 18 / 19 with TypeScript for strict type checking and zero runtime schema drift.
- **Build Tool**: Vite (lightning fast, modern ESM, deterministic static export).
- **Styling**: Tailwind CSS configured with an institutional research design token set:
  - Deep Academic Navy (`#0A2540`, `#0F172A`)
  - ICAR Royal Blue (`#1E40AF`, `#1D4ED8`)
  - Science Teal / Viridian Accent (`#0D9488`, `#047857`)
  - Off-white / Warm Gray Academic Ground (`#F8FAFC`, `#F1F5F9`)
  - Editorial Typography: Serif titles (`Merriweather` / `Source Serif 4`) paired with clean sans body (`Inter` / `Plus Jakarta Sans`) and tabular monospace data (`JetBrains Mono`).
- **Icons**: `lucide-react` (precise, light, academic/scientific iconography).
- **Routing**: `react-router-dom` with hash or history routing for institutional web server deployment.

---

## 3. Directory & Component Architecture

```
c:\Users\HP\Downloads\BBF (ICAR)\
├── docs/
│   ├── ARCHITECTURE.md
│   └── IMPLEMENTATION_PLAN.md
├── public/
│   └── assets/
│       ├── logos/ (ICAR logo, NIFMD logo, Govt emblems)
│       └── images/ (FMDV structure, server diagrams)
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── GovtHeader.tsx       (Govt of India / DARE / ICAR institutional bar)
│   │   │   ├── MainNavbar.tsx       (Main navigation with responsive drawer)
│   │   │   ├── Breadcrumb.tsx       (Accessible breadcrumb navigation)
│   │   │   ├── PageHeader.tsx       (Institutional page banner & subtitle)
│   │   │   └── Footer.tsx           (Mandatory institute credits, location, visitor counter)
│   │   ├── ui/
│   │   │   ├── Badge.tsx            (Peer-reviewed, CRAN, Web Server status badges)
│   │   │   ├── Card.tsx             (Academic card container with subtle borders)
│   │   │   ├── Table.tsx            (Semantic, accessible data table)
│   │   │   └── TabGroup.tsx         (Faceted categorizations for tools/publications)
│   │   └── cards/
│   │       ├── ToolCard.tsx         (Computational web servers & R packages)
│   │       ├── ProjectCard.tsx      (DST-SERB, Govt Odisha, ICAR funded grants)
│   │       ├── PublicationItem.tsx  (APA citation format, DOI links, status pill)
│   │       ├── FellowCard.tsx       (Research fellows & active project roles)
│   │       └── StudentRow.tsx       (M.Sc. dissertation records)
│   ├── data/                        (100% authentic, verified institutional data)
│   │   ├── navigation.ts
│   │   ├── tools.ts                 (5 ICAR-hosted Web Servers + 8 CRAN/GitHub R packages)
│   │   ├── projects.ts              (4 sponsored research projects)
│   │   ├── team.ts                  (PI, Research Fellows, Student Alumni)
│   │   ├── publications.ts          (Peer-reviewed papers + communicated manuscripts)
│   │   ├── biostatistics.ts         (12 core mandate consultation domains)
│   │   ├── bioinformatics.ts        (10 core research & analysis areas)
│   │   └── infrastructure.ts        (Workstations, OS, HPC modules, software licenses)
│   ├── pages/
│   │   ├── HomePage.tsx             (Institute overview, mission, highlights, quick links)
│   │   ├── BiostatisticsPage.tsx    (Consultation scope, experimental design, ROC, sampling)
│   │   ├── BioinformaticsPage.tsx   (NGS, scRNA-seq, in-silico vaccine design, AI/ML)
│   │   ├── HardwareSoftwarePage.tsx (Computing clusters, bioinformatics suites, OS)
│   │   ├── ProjectsPage.tsx         (Funded research grants & status)
│   │   ├── TeamPage.tsx             (PI, Research Fellows, Student Dissertations)
│   │   ├── PublicationsPage.tsx     (Peer-reviewed articles, citations, communicated)
│   │   ├── ToolsServersPage.tsx     (Web Servers, R packages on CRAN & GitHub)
│   │   └── ContactPage.tsx          (ICAR-NIFMD campus address, PI coordinates, map)
│   ├── types/
│   │   └── index.ts                 (TypeScript interfaces for all institutional entities)
│   ├── App.tsx                      (Routing configuration & layout wrapper)
│   ├── main.tsx                     (React entry point)
│   └── index.css                    (Tailwind base, scientific typography, print styles)
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 4. Reusable Institutional Data Models

### Tools & Web Servers (`Tool`)
- `id`, `name`, `type` (`"web_server"` | `"r_package"` | `"software"`)
- `title`, `description`, `url`, `repositoryUrl`, `citationUrl`, `version`, `status` (`"online"` | `"cran"` | `"github"`)
- `associatedPublication` (Title, DOI, Year)

### Research Projects (`ResearchProject`)
- `id`, `slNo`, `title`, `fundingAgency` (e.g. DST-SERB, Govt of Odisha, ICAR-NIFMD, DAHD)
- `status` (`"Ongoing"` | `"Completed"`), `grantCode`

### Team Members (`TeamMember`)
- `id`, `name`, `role` (`"Principal Investigator"` | `"Junior Research Fellow"` | `"Project Fellow"` | `"Student"`)
- `degree`, `affiliation`, `projectTitle`, `fundingAgency`, `tenure`, `email`

### Publications (`Publication`)
- `id`, `authors`, `title`, `journal`, `volume`, `pages`, `year`, `doi`, `isCommunicated`, `isCorrespondingAuthor`

---

## 5. Phased Implementation Plan

1. **Phase 1: Project Foundation (Current Step)**
   - Initialize Vite + React + TypeScript + Tailwind CSS project structure.
   - Set up Tailwind typography, color tokens, and asset directories.
   - Copy and optimize institutional logos and graphic assets from the source archive.

2. **Phase 2: Data Architecture & Schemas**
   - Populate verified data files (`tools.ts`, `publications.ts`, `projects.ts`, `team.ts`, `biostatistics.ts`, `bioinformatics.ts`, `infrastructure.ts`) using exact information from the official NIFMD docx files.

3. **Phase 3: Core Layout & Navigation**
   - Build accessible `GovtHeader`, `MainNavbar`, `PageHeader`, and `Footer`.
   - Configure React Router with routes for all 9 required pages.

4. **Phase 4: Page Implementations (Accredited Institutional Presentation)**
   - Build Home with verified mandate, core research themes, active server shortcuts, and institutional highlights.
   - Build Biostatistics & Bioinformatics facility deep-dives with structured service matrices.
   - Build Hardware / Software inventory with scientific specifications.
   - Build Research Projects catalog with funding agency tags.
   - Build Team page with PI profile, Research Fellows table, and Student Dissertations table.
   - Build Publications page with faceted filtering (Published vs Communicated) and verified DOIs.
   - Build Computational Tools / Web Servers portal with direct links to `nifmd-bbf.icar.gov.in` servers and CRAN packages.
   - Build Contact page with official ICAR-NIFMD Bhubaneswar postal details, emails, and institutional metadata.

5. **Phase 5: Refinement & Validation**
   - Polish typography, responsiveness, accessibility (WCAG 2.1 AA), and zero performance degradation.
   - Verify build integrity with `npm run build`.

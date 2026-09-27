# Biostatistics & Bioinformatics Facility (BBF) | ICAR–NIFMD

> **A National Research & Computational Biology Facility**  
> ICAR – National Institute on Foot and Mouth Disease (ICAR-NIFMD)  
> Bhubaneswar, Odisha, India

A modern computational biology and biostatistics research portal built with React 18, TypeScript, Vite, and Tailwind CSS. The portal provides interactive scientific visualizations, research software tools, publication archives, funded project timelines, personnel profiles, and institutional consulting inquiry workflows for animal health and Foot-and-Mouth Disease (FMD) epidemiology.

---

## 🏛️ Institutional Overview

The **Biostatistics and Bioinformatics Facility (BBF)** at ICAR-NIFMD serves as a shared institutional resource for:
- **Biostatistical Study Design & Consulting**: Sero-surveillance sampling design, diagnostic ROC power analysis, and vaccine quality control batch release standards.
- **Computational Genomics & Multi-Omics**: Bulk and single-cell RNA-seq (scRNA-seq), chromatin accessibility (snATAC-seq), and gene regulatory network modeling.
- **In-Silico Vaccine Design**: 3D macromolecular modeling, conformational epitope prediction, and molecular dynamics simulations for subunit vaccines.
- **Artificial Intelligence in Veterinary Epidemiology**: Machine learning classification for virus serotyping (VP1 sequence data) and phylodynamic characterization.

---

## 🚀 Key Features

- **Zero-CLS Header & Navigation**: Government of India top banner with sticky institutional navigation bar optimized for zero layout shift and 60fps scrolling.
- **Interactive Procedural Canvas Visualizers**:
  - `ScientificHeroVisualization`: Biological network node graph with dynamic particle packets and cursor deflection.
  - `ScientificDataBackground`: Mathematical coordinate grids, genomic traces, and distribution curves.
  - `StatisticalVisualizations`: Interactive SVG schematics for ROC curves, cluster sampling intervals, and vaccine power frontiers.
  - `ToolConstellationVisualizer`: SVG constellation network connecting web servers and R packages.
- **Computational Tools Directory**: Instant multi-attribute search and category filtering across web applications (`FMDSeroSurv`, `FMDVSerPred`, `SeroMonitor`, `MolEpidPred`, `NSPPredServ`) and CRAN/GitHub R packages (`dhga`, `BootMRMR`, `GSAQ`, `BSM`, `SwarnSeq`, `GSQSeq`).
- **Bibliographic Archive**: Filterable scholarly repository with automated APA 7th edition and BibTeX citation generators.
- **Funded Research Timeline**: Archive of extramural and institutional grants funded by DST-SERB, Govt. of Odisha, DAHD, and ICAR.
- **Institutional Consultation Form**: Form validation with docket tracking reference generator.
- **Accessibility & Performance**: Fully accessible with semantic ARIA landmarks, `prefers-reduced-motion` compliance, GPU-composited telemetry, and responsive layouts across all device viewports.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (Sans UI), Source Serif 4 (Editorial Serif), JetBrains Mono (Scientific Monospace)
- **Deployment**: [Vercel](https://vercel.com/) (configured via `vercel.json` SPA rewrites)

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/bishffx/Biostatistics-and-Bioinformatics-Facility.git

# Enter project directory
cd Biostatistics-and-Bioinformatics-Facility

# Install dependencies
npm install
```

### Running Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Build output will be generated in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment on Vercel

This repository is pre-configured for one-click, zero-config deployment on Vercel:

1. Import this repository (`bishffx/Biostatistics-and-Bioinformatics-Facility`) in the [Vercel Dashboard](https://vercel.com/new).
2. Framework Preset will automatically detect **Vite**.
3. Build Command: `npm run build` (or `tsc && vite build`).
4. Output Directory: `dist`.
5. The included [`vercel.json`](./vercel.json) automatically handles SPA route rewrites to `/index.html`.
6. Click **Deploy**.

---

## 📄 License & Attribution

- **Institution**: ICAR – National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha, India.
- **Principal Investigator**: Dr. Samarendra Das, Senior Scientist (Agricultural Statistics).
- **All Rights Reserved**: © Indian Council of Agricultural Research (ICAR).

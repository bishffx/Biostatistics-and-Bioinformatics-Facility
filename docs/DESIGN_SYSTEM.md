# BBF Institutional Research Portal: Design System Specification
### ICAR–National Institute on Foot and Mouth Disease, Bhubaneswar, Odisha

---

## 1. Aesthetic Identity & Design Directive

**Identity Archetype:** National Research Institute + Computational Biology Laboratory + Scientific Data Platform.

### Core Principles
- **Prestigious & Authoritative:** Styled for a premier Indian Council of Agricultural Research (ICAR) institute.
- **Academically Credible:** Clean editorial layouts, authentic peer-reviewed citations, verified funding agencies (DST-SERB, Govt. of Odisha, ICAR).
- **Strictly Non-SaaS:** Zero playful cartoon illustrations, zero decorative gradient blobs, zero exaggerated border radii, zero fake statistics or fake testimonials.
- **High Readability & Contrast:** Optimized for scientists, researchers, students, and government stakeholders.

---

## 2. Scientific Color System

| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| `navy-950` | `#030B17` | Deepest Black-Navy | Government top bar, high-contrast dark banners |
| `navy-900` | `#071527` | Institutional Navy | Main navigation, primary headers, dark HPC cards |
| `navy-800` | `#0F294A` | Surface Dark Accent | Sub-nav borders, dark mode card headers |
| `sci-700` | `#1E40AF` | Scientific Blue | Primary brand accent, active navigation tabs |
| `sci-600` | `#1D4ED8` | Interactive Blue | Primary action buttons, hyperlinks |
| `teal-700` | `#0F766E` | Computational Teal | Bioinformatics tools, genomic analyses, live server badges |
| `teal-500` | `#14B8A6` | Active Teal | Live server pulsing indicators, terminal highlights |
| `amber-600`| `#D97706` | Academic Amber | Funded grant badges, priority notices |
| `surface-ground` | `#F8FAFC` | Academic Warm Ground | Page background |
| `surface-card` | `#FFFFFF` | Research Card | Default card surfaces |
| `surface-border`| `#E2E8F0` | Hairline Border | Micro-dividers and card outlines |

---

## 3. Typography Architecture

- **Display & Section Headings:** `Source Serif 4` (Classical editorial serif). Conveys institutional gravity and scientific prestige.
- **Interface & Body Text:** `Inter` (Precision sans-serif). Clear legibility across scientific abstracts, methods, and navigational controls.
- **Scientific & Tabular Data:** `JetBrains Mono` (Fixed-width tabular monospace). Applied to genomic coordinates, server response statuses, package versions, and numerical metrics.

### Typography Hierarchy

- **Display Heading:** `font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight`
- **Section Heading:** `font-serif text-2xl sm:text-3xl font-bold tracking-tight`
- **Subsection Heading:** `font-sans text-lg font-semibold tracking-tight`
- **Body Text:** `font-sans text-sm sm:text-base leading-relaxed text-slate-700`
- **Metadata & Labels:** `font-sans text-xs font-medium text-slate-500`
- **Scientific Monospace:** `font-mono text-xs tabular-nums text-slate-800`

---

## 4. Reusable Component Primitives

The design system provides fully typed and tested React components in `src/components/ui/`:

1. **`Badge` (`src/components/ui/Badge.tsx`)**
   - Variants: `default`, `primary`, `teal`, `amber`, `outline`, `success`, `dark`
   - Features: Optional live pulsing status dot, compact size modes (`sm`, `md`).

2. **`Button` (`src/components/ui/Button.tsx`)**
   - Variants: `primary`, `secondary`, `teal`, `amber`, `outline`, `ghost`
   - Sizes: `sm`, `md`, `lg`
   - Features: Accessible focus indicators, left/right icon slots, anchor link mode (`asLink`).

3. **`Card` (`src/components/ui/Card.tsx`)**
   - Variants: `default` (subtle shadow), `interactive` (elevation on hover), `dark` (for HPC / server infrastructure), `accent-left`
   - Modular subcomponents: `CardHeader`, `CardTitle`, `CardDescription`, `CardFooter`.

4. **`SectionHeader` (`src/components/ui/SectionHeader.tsx`)**
   - Features: Eyebrow category tag, editorial serif heading, lead description, hairline divider, action slot.

5. **`MetricDisplay` (`src/components/ui/MetricDisplay.tsx`)**
   - Features: Tabular monospace figures, source attribution, units, verified scientific counts.

6. **`StatusIndicator` (`src/components/ui/StatusIndicator.tsx`)**
   - Modes: `online`, `active`, `in_development`, `maintenance`, `communicated`.
   - Features: Controlled ping animation.

7. **`Callout` (`src/components/ui/Callout.tsx`)**
   - Modes: `info`, `mandate`, `advisory`, `success`.

---

## 5. Institutional Layout Components

Located in `src/components/layout/`:
- **`GovtHeader`**: Official bilingual Government of India / DARE / ICAR bar.
- **`InstitutionalHeader`**: Institutional crests (ICAR emblem and ICAR-NIFMD logo), bilingual typography, and live facility operational indicators.
- **`MainNavbar`**: Sticky navigation across all 9 portal sections + interactive Design System showcase.
- **`Footer`**: Authentic address (Arugul-Jatni Road, Bhubaneswar 752050), PI contact emails, and quick resource links.

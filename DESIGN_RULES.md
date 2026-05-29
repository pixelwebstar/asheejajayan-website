# Portfolio Design Rules & System Standards

This document establishes the official design system, coding rules, and conversion-focused section patterns for the website to maintain strict uniformity and a premium, high-converting aesthetic.

---

## 1. Typography & Font System
We use a single unified font family for the entire website to maintain a clean, editorial developer look.

*   **Font Family**: `Inter` (sans-serif), mapped to the Tailwind variable `--font-sans`.
*   **Font Weights**:
    *   `font-medium` (500) for standard paragraphs and body copy.
    *   `font-bold` (700) for links, buttons, navigation items, and subheadings.
    *   `font-black` (900) for prominent headings and page-level titles.

### Standardized Font Sizes
To ensure uniformity, we limit ourselves to exactly **5 standard size categories**:

1.  **Tiny Labels & Badges (`text-[10px]` / `text-xs`)**:
    *   Used for category tags, section labels, buttons, navigation items, and uppercase tags.
    *   *Rules*: Always pair with `font-bold`, `uppercase`, and tracking (`tracking-widest` or `tracking-[0.2em]`).
2.  **Standard Body (`text-sm` / `text-base`)**:
    *   Used for primary copy, descriptions, and paragraphs.
    *   *Rules*: Always pair with `font-medium` and `text-slate-600` (`text-muted`).
3.  **Subheadings (`text-lg` / `text-xl` / `text-2xl`)**:
    *   Used for feature headers, capabilities, pricing plan titles, and section intros.
4.  **Major Page Headings (`text-4xl` / `text-5xl` / `text-6xl`)**:
    *   Used for hero headers and main section titles.
    *   *Rules*: Always pair with `font-black`, `tracking-tight`, and `text-slate-900` (`text-foreground`).
5.  **Micro Captions (`text-[9px]`)**:
    *   Used only for footer copyrights and tiny labels.

---

## 2. Color System
We adhere to a strict **monochrome slate** foundation, accented by two super-light backgrounds for alternating sections.

### Core Colors (Slate Monochrome)
*   **Page Background**: `#FFFFFF` (`var(--background)`)
*   **Foreground / Primary Elements**: `#0F172A` (Slate-900, `var(--foreground)` & `var(--primary)`)
*   **Surface (Card BG)**: `#FFFFFF` (`var(--surface)`)
*   **Surface 2 (Header Row 1 & Footer)**: `#F8FAFC` (Slate-50, `var(--surface-2)`)
*   **Dividers / Borders**: `#E2E8F0` (Slate-200, `var(--border)`)
*   **Secondary Text**: `#64748B` (Slate-500, `var(--muted)`)

### Alternating Section Accents
We use two very light backgrounds to create a subtle contrast rhythm between page sections:
*   **Warm Accent (`--color-warm-light`)**: `#FAF5F0` (warm sand/champagne tint).
*   **Cool Accent (`--color-cool-light`)**: `#F0F4F8` (cool ice blue tint).
*   *Luminosity Rule*: Both accents are locked at **96% lightness** to guarantee excellent reading contrast.

---

## 3. Button Standards
Buttons must have uniform shapes, interactive feel, and minimum sizes.

### Primary Action Buttons (`btnPrimary`)
Every primary link or action button uses the exact same styling:
```tsx
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
```
*   **Rounding**: `rounded` (4px standard radius).
*   **Paddings**: `px-8` horizontal, `py-4` vertical (creates a wide, sleek format).
*   **Micro-Interaction**: `duration-200 hover:bg-slate-800 active:scale-[0.98]` (feels responsive and animated).
*   **Min Width**: `min-w-[220px]` (ensures consistent size across side-by-side or stacked buttons).

### Form Submission Buttons
For forms (contact/pricing cards), we extend the action button to feel more touch-friendly:
*   **Class**: `${btnPrimary} w-full py-6 rounded-xl text-sm`
*   **Adjustments**: Full width, taller padding (`py-6`), larger text (`text-sm`), and larger rounding (`rounded-xl` / 12px) to complement input field styling.

---

## 4. Component Layout Rules
*   **Hero Sections**: Every hero section must fill the exact viewport minus the fixed double header height:
    ```css
    min-height: calc(100svh - var(--navbar-h));
    min-height: calc(100dvh - var(--navbar-h));
    ```
*   **Container Rounding**:
    *   Form fields & input buttons: `rounded-xl` (12px).
    *   Outer wrapper/container boxes (e.g., intake forms): `rounded-3xl` (24px).
*   **Section Spacing**:
    *   Standard section vertical padding: `py-20` (80px) on mobile, scaling to `py-32` (128px) on desktop.

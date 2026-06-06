# Design System & Visual Guidelines

This document outlines the visual principles, typography guidelines, and background image continuity rules for the website.

---

## 1. Core Color System (CSS Variables)

The website uses a structured, double-temperature light color scheme to organize content blocks and create visual rhythm.

* **Warm Tones (Champagne/Sand):**
  * *Hex:* `#FAF5F0` (CSS variable `--color-warm-light` / Tailwind `bg-warm-light`).
  * *Purpose:* Used for the Hero, Selected Work, ROI Comparison, and Testimonial sections. Communicates high-end luxury and bespoke craftsmanship.
* **Cool Tones (Slate Blue-Gray):**
  * *Hex:* `#F0F4F8` (CSS variable `--color-cool-light` / Tailwind `bg-cool-light`).
  * *Purpose:* Used for Services, Our Method, Value Bento, and Pricing Intake. Communicates technical precision, logic, and structure.
* **Neutral Whites:**
  * *Hex:* `#FFFFFF` (CSS variable `--background` / Tailwind `bg-white`).
  * *Purpose:* Card backings, dropdowns, and form bodies to make content pop.
* **Typography / Primary Contrast:**
  * *Hex:* `#0F172A` (Slate-900 / CSS variable `--foreground` / Tailwind `text-slate-900`).
  * *Purpose:* Headers, primary buttons, active links, and body text. High-contrast dark text ensures readability.

---

## 2. Background Image Continuity Rules

To maintain visual cohesion, background images must follow these rules:

1. **Keep it Subdued:** Background watermarks should never fight with text. They should have a soft opacity (e.g., 20% to 40% depending on image contrast) so that text remains 100% readable.
2. **Thematic Coherence:** Images must follow a logical narrative:
   * **Hero (Section 0):** Strategy & Planning (The warm sand growth chart).
   * **Services (Section 1):** Solid background with no image (for clean, minimal reading of the cards), or a very faint technical blueprint/grid.
   * **Contact/Footer (Bottom):** The cold snow pattern (`services-bg.webp`) fits best here, separated by several solid blocks from the hero image to prevent thematic clash.
3. **No Transparency in Navigation:** The navigation bar must remain solid (Row 1: slate-blue `#F0F4F8`, Row 2: white `#FFFFFF`) to maintain a clean structure and clear separation as it floats over scrolling content.

---

## 3. Typography & Spacing Scale
* **Primary Fonts:** Inter (Google Fonts) mapped to `--font-sans`.
* **Headings (H1):** `text-5xl` sm:`text-6xl` lg:`text-7xl` font-black, tracking-tight.
* **Section Headings (H2):** `text-3xl` sm:`text-4xl` lg:`text-5xl` font-black, tracking-tight.
* **Subtitles:** `text-lg` leading-relaxed, font-medium.
* **Body / Card Text:** `text-xs` sm:`text-sm` leading-relaxed, font-medium, `text-slate-600`.
* **Spacing:** Every section is styled using standard flex/grid spacing (`space-y-8`, `gap-6`) and standard page padding (`px-6 sm:px-12 lg:px-20 xl:px-28`) for visual consistency.

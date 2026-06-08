# Page 4 Blueprint: Projects `/project`
**Primary Page Objective:** Build unquestionable credibility by demonstrating business problem-solving capability and showing verified performance metrics of past builds.

---

## Part A: The Projects Index Page `/project`

### 1. Page Hero Section Spec
*   **Visual Background:** Warm Sand (`bg-warm-light`) with a radial-blurred chart overlay.
*   **Headline:** "Projects."
*   **Subtitle:** "Real systems designed, coded, and optimized for real business results."
*   **Hero Actions:**
    *   **Primary Button:** "See Projects" (smooth-scrolls to Section 2: Selected Work).

### 2. Page Section Breakdown (2 Sections)
*   **Section 1: Hero**
    *   **Background:** Warm Sand (`bg-warm-light`)
    *   **Goal:** Set the results-oriented tone.
    *   **CTA Button:** Yes ("See Projects" $\rightarrow$ `#projects`).
*   **Section 2: Selected Work**
    *   **Background:** Cool Slate (`bg-cool-light`)
    *   **Goal:** Display clickable project cards (NovaCookers, CheckersMark, KSingh Construction, JSGasTech, Dakeek).
    *   **Card details:** Each card shows: Thumbnail inside browser mockup, company name, industry tag, and one core speed or conversion outcome metric.
    *   **CTA Button:** None (Cool Slate section. Cards take the visitor to `/project/[slug]`).

---

## Part B: The Individual Case Study Page `/project/[slug]`

Every case study page has exactly 5 sections to build a structured narrative:

```
┌─────────────────────────────────────────────────────────────────┐
│ Section 1: Hero (bg-warm-light)                                 │
│ Headline: Client Name + Core speed outcome metric               │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 2: The Business Problem (bg-cool-light)                 │
│ Goal: Build empathy by showing original pain points             │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 3: Custom Solution (bg-warm-light)                      │
│ Goal: Show Chrome mockup screenshots of UI & database logic     │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 4: Verified Outcomes & Metrics (bg-cool-light)          │
│ Goal: Hard speed tests (PageSpeed 100/100) & conversion data    │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 5: Case Study CTA (bg-warm-light)                        │
│ Goal: Direct route to pricing for matched services              │
└─────────────────────────────────────────────────────────────────┘
```

### Section 1: Hero
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Summarize the project and its highlight metric instantly (e.g., "KSingh Construction: Rebuilding for Local Leads, Speed Improved by 800%").
*   **CTA Button:** None.

### Section 2: The Business Problem
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Outline what the client was dealing with before. Empathize with slow sites, dropped leads, or manual Excel files.
*   **CTA Button:** None.

### Section 3: Custom Solution
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Present screenshot images inside Chrome-style browser mockups. Explain the architecture choices (Next.js, database integration, SEO optimizations).
*   **CTA Button:** Yes ("View Technical Blueprint" $\rightarrow$ `/services`).

### Section 4: Verified Outcomes & Metrics
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Hard proof. Display PageSpeed scores (100/100 performance) and conversion increases.
*   **CTA Button:** None.

### Section 5: Case Study CTA (Terminal Section)
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Capture the hot prospect who wants the same outcome.
*   **CTA Button:** Yes ("Request a Similar System" $\rightarrow$ `/pricing#plans`).

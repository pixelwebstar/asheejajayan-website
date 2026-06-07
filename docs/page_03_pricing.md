# Page 3 Blueprint: Pricing `/pricing`
**Primary Page Objective:** Drive conversion through full budget transparency, allowing clients to self-select standard packages or custom-estimate their own project quote.

---

## 1. Page Hero Section Spec
*   **Visual Background:** Warm Sand (`bg-warm-light`) with a radial-blurred growth chart image overlay.
*   **Headline:** "Transparent Pricing Packages."
*   **Subtitle:** "Select a plan below, customize your options, and launch development. No hidden fees, no retainers."
*   **Hero Psychology:** Defuses budget anxiety. Leads immediately into pricing cards.
*   **Hero Actions:**
    *   **Primary Button:** "Select a Plan" (smooth-scrolls to Section 2: Cards).
    *   **Secondary Button:** "Build a Custom Quote" (smooth-scrolls to Section 3: Estimator).

---

## 2. Page Section Breakdown (6 Sections)

### Section 1: Hero
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Establish transparency.
*   **CTA Button:** Yes ("Select a Plan" $\rightarrow$ `#plans` / "Build a Custom Quote" $\rightarrow$ `#estimator`).

### Section 2: Plan Cards (Essential / Growth / Enterprise)
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Segment clients into standard budget tiers ($999, $2,499, $4,999+).
*   **Design detail:** The **Growth** card is visually highlighted as "Recommended" using subtle borders or background contrast.
*   **CTA Button:** Yes ("Select Plan" $\rightarrow$ redirects to `/contact?plan=[plan-name]` to pre-fill the intake form).

### Section 3: Interactive Estimator (NEW)
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Capture custom/hybrid projects (e.g., Sarah who needs a website + booking, or Robert who needs Growth + Ads). Gives them full agency and trust.
*   **Estimator Feature Logic:**
    1.  **Custom Website Design** — $999 (Toggled ON by default, non-removable).
    2.  **Mobile Optimization** — Included.
    3.  **CRM Lead Capture (Database Integration)** — +$500
    4.  **Google Maps Optimization** — +$300
    5.  **Google Ads Campaign Setup** — +$500
    6.  **Custom Web Application Systems** — +$2,000
    7.  **Stripe Payment Integration** — +$800
    8.  **Portal Client Access (CheckersMark)** — +$400
    9.  **Ongoing Support & Maintenance** — +$200/mo
*   **Live Total Calculation:** Displays the running sum dynamically at the bottom.
*   **CTA Button:** Yes ("Request This Quote" $\rightarrow$ redirects to `/contact?custom=encoded-options`, pre-filling their exact options in the project form description).

### Section 4: What’s Included in Every Plan (NEW)
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Define table stakes. Prevents repetitive questions about basic features.
*   **Deliverables listed:** Responsive mobile layouts, basic SEO setup, standard contact forms, source code ownership, 1 round of revisions, 30 days post-launch support, $0 monthly builder fees.
*   **CTA Button:** None.

### Section 5: Custom Client Solutions (Warm Sand)
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Pitch high-end enterprise client systems (multi-location, booking engines, custom PWAs) directly to Marcus-level clients.
*   **CTA Button:** Yes ("Request Custom Proposal" $\rightarrow$ `/contact?plan=enterprise`).

### Section 6: FAQ Accordion (NEW)
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Answer psychological objections at the final scroll threshold (code ownership, editability, hosting, payment timelines).
*   **Action/Interaction:** Collapsible panels that expand on click.
*   **CTA Button:** None (pure Q&A element).

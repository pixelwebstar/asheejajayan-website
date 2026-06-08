# Page 3 Blueprint: Pricing `/pricing`
**Primary Page Objective:** Drive conversion through full budget transparency, allowing clients to self-select standard packages or custom-estimate their own project quote.

---

## 1. Page Hero Section Spec
*   **Visual Background:** Warm Sand (`bg-warm-light`) with a radial-blurred growth chart image overlay.
*   **Headline:** "Pricing."
*   **Subtitle:** "Select a plan below, customize your options, and launch development. No hidden fees, no monthly platform rent."
*   **Hero Psychology:** Defuses budget anxiety. Leads immediately into pricing cards.
*   **Hero Actions:**
    *   **Primary Button:** "See Packages" (smooth-scrolls to Section 2: Packages).
    *   **Secondary Button:** "Price Calculator" (smooth-scrolls to Section 3: Calculator).

---

## 2. Page Section Breakdown (6 Sections)

### Section 1: Hero
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Establish transparency.
*   **CTA Button:** Yes ("See Packages" $\rightarrow$ `#plans` / "Price Calculator" $\rightarrow$ `#estimator`).

### Section 2: Packages (Essential / Growth / Enterprise)
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Segment clients into standard budget tiers ($999, $2,499, $4,999+).
*   **Design detail:** The **Growth** card is visually highlighted as "Recommended" using subtle borders or background contrast.
*   **CTA Button:** Yes ("Select Plan" $\rightarrow$ redirects to `/contact?plan=[plan-name]#form` to pre-fill the intake form).

### Section 3: Price Calculator
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Capture custom/hybrid projects. Gives them full agency and trust.
*   **Calculator Feature Logic:**
    1.  **Custom Website Design** — $999 (Toggled ON by default, non-removable).
    2.  **Mobile Optimization** — Included.
    3.  **CRM Software** — +$500
    4.  **Google Maps SEO** — +$300
    5.  **Google Search Ads** — +$500
    6.  **Custom Web Application Systems** — +$2,000
    7.  **Stripe Payment Integration** — +$800
    8.  **Portal Client Access (CheckersMark)** — +$400
    9.  **Ongoing Support & Maintenance** — +$200/mo
*   **Live Total Calculation:** Displays the running sum dynamically at the bottom.
*   **CTA Button:** None (Cool Slate section).

### Section 4: Standard Features
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Define table stakes. Prevents repetitive questions about basic features.
*   **Deliverables listed:** Responsive mobile layouts, basic SEO setup, standard contact forms, source code ownership, 1 round of revisions, 30 days post-launch support, $0 monthly builder fees.
*   **CTA Button:** None.

### Section 5: Custom Applications
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Pitch high-end enterprise client systems (multi-location, booking engines, custom PWAs) directly to corporate-level clients.
*   **CTA Button:** Yes ("Request Custom Proposal" $\rightarrow$ `/contact?plan=enterprise#form`).

### Section 6: FAQ
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Answer psychological objections at the final scroll threshold (code ownership, editability, hosting, payment timelines).
*   **Action/Interaction:** Collapsible panels that expand on click.
*   **CTA Button:** None.

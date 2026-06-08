# Page 1 Blueprint: Home `/`
**Primary Page Objective:** Drive cold traffic (from SEO, Google Ads, or referrals) to self-qualify by checking pricing or submitting a quick-start inquiry.

---

## 1. Page Hero Section Spec
*   **Visual Background:** Warm Sand (`bg-warm-light`) with a radial-blurred growth chart image overlay. Opacity is masked to prevent competing with text.
*   **Headline:** "Websites Built for Business Growth."
*   **Subtitle:** "Most business websites are slow, bloated, and expensive. We build custom platforms that load instantly, capture leads, and cost nothing in monthly fees. You own the code. It just works."
*   **Hero Psychology:** Hook the user in 3 seconds. The bold H1 (`font-black`) communicates immediate value. The subtitle establishes that we are premium (custom) and focused on business outcomes (leads), not just "digital art."
*   **Hero Actions:**
    *   **Primary Button:** "See Pricing" (navigates to `/pricing`).
    *   **Secondary Button:** "View My Work" (smooth-scrolls to Section 2: Selected Projects).

---

## 2. Page Section Breakdown (7 Sections)

Every section alternates color temperatures (`bg-warm-light` / `bg-cool-light`) to maintain high reading motivation.

```
┌─────────────────────────────────────────────────────────────────┐
│ Section 1: Hero (bg-warm-light)                                 │
│ Goals: Grab attention, direct to pricing or projects            │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 2: Selected Projects (bg-cool-light)                    │
│ Goals: Show immediate proof using 3D Cover Flow gallery         │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 3: Services Overview (bg-warm-light)                    │
│ Goals: Display range of products, click to deep dive            │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 4: The Method / Process (bg-cool-light)                 │
│ Goals: Clarify the onboarding and build process                 │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 5: Templates vs. Custom Build (bg-warm-light)           │
│ Goals: Financial & technical comparison to justify $2.5K+ price │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 6: Client Reviews (bg-cool-light)                       │
│ Goals: External trust validation                                │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 7: Project Brief (bg-warm-light)                        │
│ Goals: Frictionless lead capture for high-intent visitors       │
└─────────────────────────────────────────────────────────────────┘
```

### Section 1: Hero
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Establish value proposition instantly.
*   **CTA Button:** Yes ("See Pricing" $\rightarrow$ `/pricing` / "View My Work" $\rightarrow$ `#projects`).

### Section 2: Selected Projects (The Projects Gallery)
*   **Background:** White (`bg-white`)
*   **Goal:** Provide instant visual proof of execution. Show real browser screenshots (Dakeek, NovaCookers, KSingh) in Chrome frames rather than abstract vectors.
*   **Connection/Flow:** Placed directly under the hero. If a buyer like Robert (Plumber) or Sarah (Orthodontist) doubts your credentials, they get visual validation before they can scroll away.
*   **CTA Button:** Yes ("Start Your Project" $\rightarrow$ `/pricing#plans` / "How I Work" $\rightarrow$ `#services`).

### Section 3: Services Overview
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Show the 6-service matrix (Websites, Web Apps, CRM, Google Business, Google Ads, Support).
*   **Connection/Flow:** Connects the visual proof they just saw to the technical systems you build.
*   **CTA Button:** Yes ("View All Capabilities" $\rightarrow$ `/services#overview`). Each service card is a link leading to the specific anchor on the `/services` page.

### Section 4: The Method (Process Timeline)
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Demystify the timeline (Discovery $\rightarrow$ Strategy $\rightarrow$ Design $\rightarrow$ Build $\rightarrow$ Launch).
*   **Connection/Flow:** Lowers psychological friction. Robert (Plumber) gets nervous about developers who take the money and disappear. This shows a structured roadmap.
*   **CTA Button:** None (pure layout navigation element).

### Section 5: Templates vs. Custom Build (Comparison Chart)
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Educate the buyer. Provide real metrics on code size, load speed, security, and monthly app subscriptions.
*   **Connection/Flow:** Justifies the price. If Evelyn (Shopify boutique owner) is wondering why custom is worth $3,000, she sees the comparison of speed and $0 platform fees here.
*   **CTA Button:** Yes ("Compare Packages" $\rightarrow$ `/pricing#plans`).

### Section 6: Client Reviews
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Social validation. Let other business owners speak for you.
*   **Connection/Flow:** Reinforces the statistics shown in Section 5 with human validation.
*   **CTA Button:** None.

### Section 7: Project Brief
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Fast lead capture for high-intent visitors.
*   **Connection/Flow:** This is the terminal prompt of the home page scroll. Left: trust indicators (No obligation, under 24hr reply, 100% ownership). Right: Compact name, email, description form.
*   **CTA Button:** Yes ("Submit Project Request" form submit).

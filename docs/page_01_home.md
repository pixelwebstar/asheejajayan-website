# Page 1 Blueprint: Home `/`
**Primary Page Objective:** Drive cold traffic (from SEO, Google Ads, or referrals) to self-qualify by checking pricing or submitting a quick-start inquiry.

---

## 1. Page Hero Section Spec
*   **Visual Background:** Warm Sand (`bg-warm-light`) with a radial-blurred growth chart image overlay. Opacity is masked to prevent competing with text.
*   **Headline:** "Websites Built for Business Growth."
*   **Subtitle:** "No templates. No clutter. Just custom digital platforms designed to turn your traffic into qualified leads."
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
│ Goals: Clarify the onboarding and build pipeline                │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 5: Custom vs. Templates (bg-warm-light)                 │
│ Goals: Financial & technical comparison to justify $2.5K+ price │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 6: Testimonials (bg-cool-light)                         │
│ Goals: External trust validation                                │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 7: Get Started Intake Form (bg-warm-light)              │
│ Goals: Frictionless lead capture for high-intent visitors       │
└─────────────────────────────────────────────────────────────────┘
```

### Section 1: Hero
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Establish value proposition instantly.
*   **CTA Button:** Yes ("See Pricing" $\rightarrow$ `/pricing` / "View My Work" $\rightarrow$ `#projects`).

### Section 2: Selected Projects (The 3D Gallery)
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Provide instant visual proof of execution. Show real browser screenshots (Dakeek, NovaCookers, KSingh) in Chrome frames rather than abstract vectors.
*   **Connection/Flow:** Placed directly under the hero. If a buyer like Robert (Plumber) or Sarah (Orthodontist) doubts your credentials, they get visual validation before they can scroll away.
*   **CTA Button:** Yes ("Start Your Project" $\rightarrow$ `/pricing` / "See How We Do It" $\rightarrow$ `#services`).

### Section 3: Services Overview
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Show the 6-service matrix (Websites, Web Apps, CRM, Google Business, Google Ads, Support).
*   **Connection/Flow:** Connects the visual proof they just saw to the technical systems you build.
*   **CTA Button:** None on section, but each service card is a link leading to the specific anchor on the `/services` page.

### Section 4: The Method (Process Timeline)
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Demystify the timeline (Discovery $\rightarrow$ Strategy $\rightarrow$ Design $\rightarrow$ Build $\rightarrow$ Launch).
*   **Connection/Flow:** Lowers psychological friction. Robert (Plumber) gets nervous about developers who take the money and disappear. This shows a structured roadmap.
*   **CTA Button:** None (pure layout navigation element).

### Section 5: Custom vs. Templates (Comparison Chart)
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Educate the buyer. Provide real metrics on code size, load speed, security, and monthly app subscriptions.
*   **Connection/Flow:** Justifies the price. If Evelyn (Shopify boutique owner) is wondering why custom is worth $3,000, she sees the comparison of speed and $0 platform fees here.
*   **CTA Button:** None (pure educational value table).

### Section 6: Testimonials
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Social validation. Let other business owners speak for you.
*   **Connection/Flow:** Reinforces the statistics shown in Section 5 with human validation.
*   **CTA Button:** None.

### Section 7: Compact Intake Form
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Fast lead capture for high-intent visitors.
*   **Connection/Flow:** This is the terminal prompt of the home page scroll. Left: trust indicators (No obligation, under 24hr reply, 100% ownership). Right: Compact name, email, description form.
*   **CTA Button:** Yes ("Submit Project Request" form submit).

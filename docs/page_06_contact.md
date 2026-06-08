# Page 6 Blueprint: Contact `/contact`
**Primary Page Objective:** Drive maximum conversion by providing a clean, detailed project intake form and direct communication channels.

---

## 1. Page Hero Section Spec
*   **Visual Background:** Warm Sand (`bg-warm-light`) with a radial-blurred chart overlay.
*   **Headline:** "Contact."
*   **Subtitle:** "Ready to get started? Submit your project goals below and receive a detailed custom proposal within 24 hours."
*   **Hero Psychology:** Welcomes high-intent buyers, outlines response guarantees (under 24 hours), and drives them immediately to the form.
*   **Hero Actions:**
    *   **Primary Button:** "Project Brief" (smooth-scrolls to Section 2: Form).
    *   **Secondary Button:** "Direct Channels" (smooth-scrolls to Section 3: Channels).

---

## 2. Page Section Breakdown (3 Sections)

Because the user landing here is already motivated to purchase, we keep section counts short (3 sections) to eliminate any conversion friction.

```
┌─────────────────────────────────────────────────────────────────┐
│ Section 1: Hero (bg-warm-light)                                 │
│ Goals: Welcome, set response expectations                       │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 2: Project Brief (bg-cool-light)                        │
│ Goals: Gather structured info (Timeline, Budget, Plan, Scope)   │
└───────────────────────────────┬─────────────────────────────────┘
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│ Section 3: Direct Channels (bg-warm-light)                      │
│ Goals: Muted direct links for email, phone, and social channels │
└─────────────────────────────────────────────────────────────────┘
```

### Section 1: Hero
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Prompt immediate action.
*   **CTA Button:** Yes ("Project Brief" $\rightarrow$ `#message` / "Direct Channels" $\rightarrow$ `#channels`).

### Section 2: Project Brief
*   **Background:** Cool Slate (`bg-cool-light`)
*   **Goal:** Capture structured project requirements so you can write a proposal immediately without back-and-forth emails.
*   **Form Field Specs:**
    1.  **Full Name** (Input, required)
    2.  **Email Address** (Input, required)
    3.  **Phone Number** (Input, optional)
    4.  **Project Scope / Plan** (Dropdown, pre-fills from the Pricing plan cards or custom estimator selection parameters, e.g., Essential / Growth / Enterprise / Custom Quote).
    5.  **What does your business do?** (Textarea, required)
    6.  **What do you need built?** (Textarea, required. Pre-fills with custom estimator toggles if selected).
    7.  **Preferred Timeline** (Dropdown: ASAP / 1–2 Weeks / 1 Month / Flexible).
    8.  **How did you find us?** (Dropdown: Google Search / Referral / Social Media / Other).
*   **Form CTA Button:** "Submit Project Request" (submits data to lead database / CRM email target).

### Section 3: Direct Channels
*   **Background:** Warm Sand (`bg-warm-light`)
*   **Goal:** Provide alternative ways to reach you for users who dislike form fields.
*   **Information listed:** Direct email link, phone number, physical location (Canada), LinkedIn URL, GitHub URL.
*   **CTA Button:** Yes (Clickable `mailto:` and `tel:` buttons).

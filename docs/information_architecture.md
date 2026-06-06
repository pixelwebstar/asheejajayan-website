# Information Architecture & Navigation Map

This document outlines the structural blueprint of the website, describing the layout of individual pages, section hierarchy, and interactive button mapping.

---

## 1. Page-by-Page Blueprint

### Page 1: Home (The Conversion Hub)
Designed to tell a complete story from value proposition to proof, ending with a low-friction call to action.

* **Section 0: The Hook (Hero)**
  * *Heading:* Websites Built for Business Growth.
  * *Subtitle:* No templates. No clutter. Just custom digital platforms designed to turn your traffic into qualified leads.
  * *CTAs:* "Start Your Project" (leads to intake form) & "See How We Do It" (smooth scrolls to services).
* **Section 1: Selected Work (Case Studies)**
  * *Heading:* Real Projects. Real Outcomes.
  * *Content:* 3D browser mockups displaying custom software (Dakeek.ae, CheckersMark, etc.).
  * *CTAs:* "Start Your Project" & "See How We Do It".
* **Section 2: Services / Capabilities (What We Do)**
  * *Heading:* Websites and Web Applications.
  * *Content:* 6-card capability grid (Websites, Web Apps, CRM integration, Google Ads, Maps, Support/Ops).
  * *CTAs:* Link cards directing to specific detail anchors in `/services`.
* **Section 3: Our Method (How We Do It)**
  * *Heading:* Architected for Growth.
  * *Content:* 5-stage process timeline (Discovery, Strategy, Custom Design, Code/Build, Launch/Support).
* **Section 4: The ROI / Comparison Table**
  * *Heading:* Custom Build vs. Templates.
  * *Content:* High-contrast comparison metrics (speed, code bloat, security, recurring fees).
* **Section 5: Value Delivery (The Automated Pipeline)**
  * *Heading:* What Your Business Gets.
  * *Content:* Bento grid showcasing the lead capture pipeline flow.
* **Section 6: Client Reviews (Social Proof)**
  * *Heading:* What Our Clients Achieve.
  * *Content:* 3-column staggered grid displaying testimonials.
* **Section 7: Project Intake (The Close)**
  * *Heading:* Initiate Your Project.
  * *Content:* Structured form collecting name, email, and objectives, with clear response times (under 24 hours).

---

### Page 2: About (The Craft)
Focuses on developer philosophy, custom hand-coding vs. block builders, and the benefits of full code ownership.
* *Content:* Text narrative, focus blocks on security and speed, download resume/vcard option.

---

### Page 3: Services (Details)
A deep dive into individual capabilities, allowing prospective clients to read detailed answers to technical integrations (e.g., how the CRM syncs or how ads are tracked).

---

### Page 4: Pricing / Estimator (Bespoke Planning)
An interactive project calculator where users can select features and instantly see a transparent price range, qualifying high-value leads.

---

### Page 5: Contact
A simple contact page featuring the intake form and a direct link to book a discovery call.

---

## 2. Interactive Navigation Map (Button Flow)

| Button / Click Event | Location | Target Destination | Behavior |
| :--- | :--- | :--- | :--- |
| **"Start Project"** | Header Row 1 | `/pricing` (or `#pricing` on Home) | Direct link / Scroll |
| **"Start Your Project"** | Hero Section | `#pricing` (Home Intake) | Smooth scroll |
| **"See How We Do It"** | Hero Section | `#services` | Smooth scroll |
| **Service Cards** | Services Grid | `/services#CapabilityName` | Page redirect to anchor |
| **"Start Your Project"** | Selected Work Panel | `#pricing` | Smooth scroll |
| **"See How We Do It"** | Selected Work Panel | `#services` | Smooth scroll |
| **Submit Button** | Intake Form | Form submission endpoint | Triggers success state |
| **Nav Links (Home/About...)** | Header Row 2 | Corresponding Next.js routes | Instant page navigation |

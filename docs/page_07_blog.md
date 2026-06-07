# Page 7 Blueprint: Blog `/blog`
**Primary Page Objective:** Act as your organic search traffic acquisition engine, attracting local and national clients by answering long-tail keywords, establishing authority, and routing them to pricing.

---

## Part A: The Blog Index Page `/blog`

### 1. Page Hero Section Spec
*   **Visual Background:** Warm Sand (`bg-warm-light`) with a radial-blurred growth chart image overlay.
*   **Headline:** "Web Insights & Strategy."
*   **Subtitle:** "Articles written to help business owners understand speed, search optimization, and automated customer systems."
*   **Hero Actions:**
    *   **Primary Button:** "Explore Articles" (smooth-scrolls to Section 2: Post List).

### 2. Page Section Breakdown (2 Sections)
*   **Section 1: Hero**
    *   **Background:** Warm Sand (`bg-warm-light`)
    *   **Goal:** Establish topical authority and value.
    *   **CTA Button:** Yes ("Explore Articles" $\rightarrow$ `#articles`).
*   **Section 2: Post List Grid**
    *   **Background:** Cool Slate (`bg-cool-light`)
    *   **Goal:** Display searchable blog post cards sorted chronologically.
    *   **Card details:** Thumbnail, title, publish date, estimated reading time, short description excerpt, and category tag (e.g., "Speed", "SEO", "CRM").
    *   **CTA Button:** Yes (Clicking a card navigates to `/blog/[slug]`).

---

## Part B: The Individual Article Page `/blog/[slug]`

### 1. Page Section Breakdown (3 Sections)

*   **Section 1: Article Header Hero**
    *   **Background:** Warm Sand (`bg-warm-light`)
    *   **Goal:** Display article title, author, reading time, publish date, and categories. Focus the reader's attention on the topic.
    *   **CTA Button:** None.
*   **Section 2: Article Body (Typography focus)**
    *   **Background:** Cool Slate (`bg-cool-light`) but with a white card background for the text body column.
    *   **Goal:** Provide the core informational content. Layout uses highly readable typography settings: `prose lg:prose-xl mx-auto`.
    *   **CTA Button:** Inline contextual text links to services or pricing pages.
*   **Section 3: Article Footer CTA (Terminal Section)**
    *   **Background:** Warm Sand (`bg-warm-light`)
    *   **Goal:** Capture the reader's interest at the end of the post.
    *   **CTA Button:** Yes ("Want to optimize your website? See Pricing" $\rightarrow$ `/pricing`).

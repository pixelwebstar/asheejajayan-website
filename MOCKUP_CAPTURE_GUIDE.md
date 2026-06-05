# Mockup Capture & Asset Generation Guide

This guide details the standards, configurations, and procedures for capturing high-fidelity project preview screenshots and loop recordings. Follow these instructions when updating project preview assets to maintain visual consistency and avoid clipping or rendering issues.

---

## 1. Visual Standards & Specifications

To fit perfectly within the custom `BrowserMockup` components, all assets must be captured using the exact specifications below:

| Asset Type | Format | Target Resolution | Aspect Ratio | deviceScaleFactor | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Static Screenshot** | `.png` | `1280 x 684` | `1.87` (Desktop Chrome) | `1.5` (Retina crispness) | Static page previews |
| **Looped Video** | `.webm` | `1280 x 684` | `1.87` (Desktop Chrome) | `1.5` (Retina crispness) | Micro-interactions / live loops |

---

## 2. Key Learnings & Pitfalls (How to avoid clipping)

### A. Avoid Loading Animations & Transitions
* **The Problem:** Modern sites use entry animations (fade-ins, slide-ins, loading screens). Taking screenshots immediately after page load results in blank or half-rendered captures.
* **The Fix:** Playwright must wait **at least 5 seconds** for static screenshots and **10 seconds** for video recordings before capturing, allowing the layout to fully settle.

### B. Capture the Full Hero Area without Cut-Offs
* **The Problem:** If a client website has a very tall hero section, the bottom of the main message or navigation may get clipped at the standard `684px` height boundary.
* **The Fix:**
  * For pages with tall heroes, use the `scroll` parameter in the script to scroll down slightly (e.g. `100px` to `200px`) before capturing, centering the main CTA inside the viewport.
  * Adjust the viewport height or site scale factor in Playwright if necessary to keep the visual balance.

### C. Eliminate Video Load-In Frames
* **The Problem:** WebM recordings captured directly via Playwright contain the initial page navigation and loading phases, creating a jarring flicker in the looping portfolio preview.
* **The Fix:**
  * Record the full session to a temporary file.
  * Use FFmpeg to trim the video, discarding the first `loadTime + 10.0` seconds.
  * Slice a **clean, 5-second window** thereafter to generate a seamless, non-distracting looping preview.

---

## 3. Automation Script usage

The automated capture pipeline is defined in [generate-all-assets.js](file:///home/asheejajayan/Desktop/pixelwebstar/asheejajayan-portfolio/scripts/generate-all-assets.js).

### Running the Generator
To re-generate all screenshots and videos locally, run:
```bash
node scripts/generate-all-assets.js
```

### Script Configurations
Inside the script, projects are defined as objects in the `projects` array:
```javascript
const projects = [
  { id: 'mobwik', url: 'https://mobwik.vercel.app', isVideo: false, scroll: 0 },
  { id: 'ksingh', url: 'https://ksinghconstruction.vercel.app', isVideo: true, scroll: 150 }
];
```
* **`id`**: Matching the filename saved in `/public/screenshots/${id}.png` or `.webm`.
* **`url`**: The live URL of the deployed client website.
* **`isVideo`**: If set to `true`, the script uses Playwright context recording and FFmpeg to generate a WebM. If `false`, it saves a high-res PNG.
* **`scroll`**: Pixel offset to scroll down before capturing. Useful for centering elements.

---

## 4. Dependencies
To run video captures successfully, ensure your local environment has the following installed:
1. **Node.js** & **Playwright** (`npm install playwright`)
2. **FFmpeg** (used to crop and slice raw `.webm` streams)
   * *Linux:* `sudo apt install ffmpeg`
   * *macOS:* `brew install ffmpeg`

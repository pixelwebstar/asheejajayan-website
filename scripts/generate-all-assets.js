/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const projects = [
  { id: 'mobwik', url: 'https://mobwik.vercel.app', isVideo: false, scroll: 0 },
  { id: 'dakeek', url: 'https://dakeek.ae', isVideo: false, scroll: 0 },
  { id: 'checkersmark', url: 'https://checkersmark.com', isVideo: false, scroll: 0 },
  { id: 'novacookers', url: 'https://novacookers.vercel.app', isVideo: false, scroll: 0 },
  { id: 'bonder', url: 'https://bonder.vercel.app', isVideo: false, scroll: 0 },
  { id: 'lumiere', url: 'https://lumiereluminouse.netlify.app/', isVideo: true, scroll: 0 },
  { id: 'sayahnam', url: 'https://sayahnam.vercel.app', isVideo: false, scroll: 0 },
  { id: 'ksingh', url: 'https://ksinghconstruction.vercel.app', isVideo: true, scroll: 0 },
  { id: 'jsgastech', url: 'https://jsgastech.com', isVideo: false, scroll: 0 }
];

const autoScroll = async (page, maxScroll) => {
  if (maxScroll <= 0) return;
  await page.evaluate((scrollAmount) => {
    window.scrollTo(0, scrollAmount);
  }, maxScroll);
};

const run = async () => {
  const dir = path.join(__dirname, '../public/screenshots');
  const tempDir = path.join(dir, 'temp');
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(tempDir)){
    fs.mkdirSync(tempDir, { recursive: true });
  }

  console.log('Launching Playwright Chromium to capture all assets...');
  const browser = await chromium.launch({ headless: true });

  for (const p of projects) {
    const filename = `${p.id}.${p.isVideo ? 'webm' : 'png'}`;
    const destPath = path.join(dir, filename);
    console.log(`- Processing ${p.id} (${p.url}) -> ${filename}...`);

    if (p.isVideo) {
      // Record WebM Video (5 seconds after loading animation)
      const context = await browser.newContext({
        recordVideo: {
          dir: tempDir, // store raw playwright files in temp
          size: { width: 1920, height: 1080 }
        },
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 1.0,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      });
      const page = await context.newPage();
      
      // Override webdriver to bypass bot detection
      await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', {
          get: () => undefined,
        });
      });

      try {
        const startTime = Date.now();
        await page.goto(p.url, { waitUntil: 'load', timeout: 60000 });
        const loadTime = (Date.now() - startTime) / 1000;
        console.log(`  Page loaded in ${loadTime.toFixed(2)}s. Waiting for loading animation to settle (5s)...`);
        await page.waitForTimeout(5000);
        console.log('  Recording video stream (6s)...');
        await page.waitForTimeout(6000);
        
        // Capture video handle and path before closing context
        const video = page.video();
        const tempPath = video ? await video.path() : null;
        await context.close();

        if (video && tempPath) {
          console.log('  Trimming video (cutting loading animation)...');
          const { execSync } = require('child_process');
          try {
            // Trim starting exactly at loadTime + 5.0 seconds, duration 5 seconds
            const startTrim = (loadTime + 5.0).toFixed(2);
            execSync(`ffmpeg -y -i "${tempPath}" -ss ${startTrim} -t 5 "${destPath}"`);
            console.log(`  Video saved and trimmed successfully via FFmpeg.`);
          } catch (e) {
            console.error(`  FFmpeg trimming failed, saving raw video as fallback:`, e.message);
            await video.saveAs(destPath);
          }
        } else {
          console.error(`  Warning: Playwright video handle is null for ${p.id}`);
        }
      } catch (err) {
        console.error(`  Error recording video:`, err.message);
        await context.close();
      }
    } else {
      // Take high-resolution static screenshot
      const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 1.0,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      });
      const page = await context.newPage();
      
      // Override webdriver to bypass bot detection
      await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', {
          get: () => undefined,
        });
      });

      try {
        await page.goto(p.url, { waitUntil: 'load', timeout: 60000 });
        console.log('  Page loaded. Waiting 5 seconds for full CSS rendering & hydration...');
        await page.waitForTimeout(5000);
        
        if (p.scroll > 0) {
          console.log(`  Scrolling down by ${p.scroll}px to reveal layout...`);
          await autoScroll(page, p.scroll);
          await page.waitForTimeout(1000); // let scroll settle
        }

        await page.screenshot({ path: destPath, type: 'png' });
        console.log(`  Screenshot saved successfully.`);
      } catch (err) {
        console.error(`  Error capturing screenshot:`, err.message);
      }
      await context.close();
    }
  }

  await browser.close();

  // Clean up temporary video files folder
  if (fs.existsSync(tempDir)) {
    console.log('Cleaning up temporary video directory...');
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  console.log('All screenshots and videos generated successfully!');
};

run();

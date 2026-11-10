# Outcome Solution: Technical SEO Audit & Changes

Site: https://ponchobhujltd-com.github.io/ (GitHub Pages user site, root domain)
Date: 2026-11-11

## 1. Audit findings (before)

| # | Problem | Severity |
|---|---------|----------|
| 1 | `robots.txt` and `sitemap.xml` pointed to the placeholder `https://YOUR-DOMAIN.com`, so Google could not use the sitemap | Critical |
| 2 | No canonical URLs on any page | High |
| 3 | `og:image` and schema `logo` used relative paths. Facebook, WhatsApp and Google need absolute URLs | High |
| 4 | Titles were generic ("Dropshipping \| Outcome Solution") with no search terms such as *Bangladesh* or *course* | High |
| 5 | Structured data only on 2 pages, with no WebSite, BreadcrumbList, Course or FAQPage | Medium |
| 6 | `success-stories.html` contains only placeholder testimonials ("Learner Name"). That is thin content and a trust risk | Medium |
| 7 | The site did not mention 2 of the 4 target audiences (funded entrepreneurs and idea-based entrepreneurs) or the planning and implementation services | High (business) |
| 8 | Homepage had no FAQ, no audience sections, and no "Bangladesh" in the H1 | Medium |
| 9 | Missing `og:url`, `twitter:title/description/image` and robots meta | Low |

Already good (kept): HTML5 semantic structure, one H1 per page, alt text on every image, width/height on images, `defer` on JS, lazy loading below the fold, `fetchpriority` on the hero image, WebP logos, mobile nav, skip link, floating WhatsApp button, no broken internal links, no `noindex`.

## 2. What was changed

### All 13 pages
- New unique, keyword-focused `<title>` and meta description.
- `<link rel="canonical">` with absolute URLs (`https://ponchobhujltd-com.github.io/...`).
- Full Open Graph and Twitter Card tags with absolute image URLs.
- `meta robots`: `index, follow` everywhere except `success-stories.html` (see below).
- One JSON-LD `@graph` per page: EducationalOrganization + WebSite + WebPage (AboutPage/ContactPage where relevant) + BreadcrumbList on inner pages, Course on the programs, course-modules, dropshipping and subscription pages, and FAQPage wherever a page has a visible FAQ (the schema text is generated from the visible FAQ, so they always match).
- "Business Support" added to the main nav and "Business Planning" to the footer.

### New page: `business-support.html`
Business Planning & Implementation Support, for funded and idea-based entrepreneurs. It explains the difference between Learning, Planning and Implementation, includes an honest "no funding, no guaranteed profit" note, and has an FAQ and WhatsApp CTAs. **No price is shown, because none was provided.**

### Content
- `index.html`: new H1 and lead text; a "Who we help" section (4 audiences); a "How we help" section (Learning / Business planning / Implementation); a 6-question FAQ; a keyword-relevant hero alt text.
- `dropshipping.html`: H1 changed to "Learn Dropshipping in Bangladesh"; a new "Dropshipping in Bangladesh: what is different" section (Facebook commerce, cash on delivery, couriers, sourcing); honest expectations; a 4-question FAQ.
- `opportunities.html`: H1 changed to "Online Earning & Work-from-Home Opportunities"; a new section for university students, including a warning about "quick money" schemes.
- `contact.html`: the form now includes "Business planning support" and "Implementation support" options.

### Files
- `sitemap.xml`: 12 indexable URLs, absolute, with `lastmod`.
- `robots.txt`: allows all crawlers and points to the correct sitemap.
- `_config.yml`: stops GitHub Pages from publishing `docs-seo/` and `README.md`.

### Success stories
`success-stories.html` is set to `noindex, follow` and left out of the sitemap, because it only has placeholder cards. **When you add real stories (with written permission), delete the robots `noindex` line, add the page back to `sitemap.xml`, and change the title and description in its `<head>`.**

## 3. Validation actually performed
- JSON-LD parsed successfully on all 13 pages (Python `json`).
- `sitemap.xml` parsed as valid XML.
- Every internal `href`/`src` resolved to an existing file. The `#planning` and `#implementation` anchors exist.
- Exactly one `<h1>` per page, and no `<img>` without `alt`.
- Homepage rendered on a local server at 375px width with no horizontal overflow.

**Not done:** Lighthouse/PageSpeed scores, Google's Rich Results Test, real-device testing. Run these after deploying (see GSC-AND-DEPLOY.md).

## 4. Remaining recommendations
- Several titles are 63–82 characters. Google may cut off the " | Outcome Solution" suffix, which is acceptable because the keywords come first.
- `assets/img/icon-512.png` (142 KB) and `logo-header.png` (74 KB) are used only for schema and icons. They could be compressed further, but they don't affect page speed.
- The Google Fonts stylesheet blocks rendering. If you need more speed, self-host Poppins (2 weights) later.
- A custom domain (for example outcomesolution.com.bd) would help trust and branding. If you add one, update every canonical URL, `sitemap.xml` and `robots.txt`.

## 5. Missing information (not invented)
- Physical address or office location (needed for Google Business Profile and LocalBusiness schema).
- Whether the program is online, offline or both (schema `courseMode` is left out).
- Batch start dates, instructor names and qualifications.
- Fees for business planning and implementation support.
- Real learner stories with permission.
- Refund and instalment policy text.

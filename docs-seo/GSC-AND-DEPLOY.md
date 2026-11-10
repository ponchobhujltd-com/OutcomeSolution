# Deploy to GitHub Pages & Set Up Google Search Console

## 1. Deploy (GitHub Pages)

The repository is `ponchobhujltd-com/ponchobhujltd-com.github.io`. A push to its publishing branch updates the live site within about 1–2 minutes.

```bash
git add -A
git commit -m "SEO optimisation: metadata, schema, sitemap, business support page"
git push
```

Then check under GitHub → repo → **Settings → Pages**: the source should be your main branch, `/ (root)`.

## 2. Verify the site in Google Search Console

1. Go to https://search.google.com/search-console and sign in.
2. Click **Add property** → choose **URL prefix** → enter `https://ponchobhujltd-com.github.io/`.
   (A "Domain" property won't work, because you don't own github.io.)
3. Choose the **HTML tag** method. Google gives you a tag like
   `<meta name="google-site-verification" content="XXXX">`.
4. Paste that tag into the `<head>` of `index.html` (right under the `<meta name="viewport">` line), commit and push.
5. Wait about 2 minutes, then click **Verify** in Search Console.

## 3. Submit the sitemap

Search Console → **Sitemaps** → enter `sitemap.xml` → **Submit**.
Full URL: **https://ponchobhujltd-com.github.io/sitemap.xml**
The status should change to "Success" (this can take hours to days).

## 4. Request indexing for key pages

Search Console → **URL Inspection** (top search bar) → paste a URL → **Request indexing**. Do this for:

- https://ponchobhujltd-com.github.io/
- https://ponchobhujltd-com.github.io/dropshipping.html
- https://ponchobhujltd-com.github.io/programs.html
- https://ponchobhujltd-com.github.io/business-support.html
- https://ponchobhujltd-com.github.io/opportunities.html

There is a daily limit, so don't request the same URL repeatedly. Indexing is not guaranteed and can take from days to weeks.

## 5. Monitor results

- **Performance → Search results:** clicks, impressions, CTR and average position. Use the **Queries** tab to see the real search terms people use, and **Pages** to see which pages they land on. Filter by **Country = Bangladesh**.
- **Indexing → Pages:** shows which pages are indexed and why others are not ("Discovered – currently not indexed" is normal at first).
- **Experience → Core Web Vitals:** needs real traffic before data appears.
- **Enhancements:** FAQ, Breadcrumbs and similar sections will show any errors in the structured data.

Check it once a week. After 4–6 weeks, rewrite the titles of pages that have many impressions but a low CTR.

## 6. Post-deployment checklist

- [ ] https://ponchobhujltd-com.github.io/ loads, and so does every link in the menu
- [ ] https://ponchobhujltd-com.github.io/robots.txt shows the sitemap line
- [ ] https://ponchobhujltd-com.github.io/sitemap.xml opens and lists 12 URLs
- [ ] https://ponchobhujltd-com.github.io/docs-seo/ returns 404 (excluded by `_config.yml`)
- [ ] View the page source of the homepage: the canonical URL is `https://ponchobhujltd-com.github.io/`
- [ ] Rich Results Test (https://search.google.com/test/rich-results) on the homepage and dropshipping page shows no errors
- [ ] PageSpeed Insights (https://pagespeed.web.dev) on mobile, with any issues noted
- [ ] Share the homepage link in WhatsApp or Facebook and check that the preview image and title appear
- [ ] Search Console verified, sitemap submitted, key URLs requested for indexing
- [ ] Set up a Google Business Profile if you have a physical address

## 7. When you add real success stories
1. Replace the placeholder cards in `success-stories.html`.
2. Delete `<meta name="robots" content="noindex, follow">` from its `<head>`.
3. Add `https://ponchobhujltd-com.github.io/success-stories.html` to `sitemap.xml`.

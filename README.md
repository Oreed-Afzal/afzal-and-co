# Afzal A. Haider & Co. — Law Firm Website

A modern, SEO-optimised website for a law firm, built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Professional navy-and-gold design.

## Getting started

```bash
npm install      # already done
npm run dev      # start the dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where to edit content

Almost everything lives in **one file**: [`src/lib/site.ts`](src/lib/site.ts).

| What to change | Where |
| --- | --- |
| Firm name, tagline, founder | `site` object |
| Phone, WhatsApp, email, address, hours | `site.contact` |
| Social links | `site.social` |
| **Production domain** (set before launch!) | `site.url` |
| Practice areas (add/edit/remove) | `practiceAreas` array |
| Stats counters | `stats` array |
| Testimonials | `testimonials` array |
| Blog posts | `blogPosts` array |

## Pages

- `/` — Home (hero, value props, about, practice areas, why-us + stats, testimonials, blog, consultation form)
- `/about` — About, mission/vision, values
- `/services` and `/services/[slug]` — Practice areas + detail pages
- `/blog` and `/blog/[slug]` — Articles
- `/contact` — Contact form + Google Map embed
- `sitemap.xml`, `robots.txt` — auto-generated for SEO

## Swapping in real images

Placeholder art lives in `public/images/` as `.svg` files. Replace any file with a
real photo (keep the **same filename**, or update the path in `src/lib/site.ts`).
Recommended: optimised `.webp`/`.jpg`. The hero, about, founder, and CTA images are
referenced directly in the page components.

## SEO features included

- Per-page `<title>`, meta description, canonical URLs
- Open Graph + Twitter card metadata
- `LegalService` + `Article` JSON-LD structured data (rich results)
- Auto-generated sitemap and robots.txt
- Semantic HTML, fast static rendering, optimised images

### Before launch checklist

1. Set the real domain in `src/lib/site.ts` → `site.url`.
2. Replace placeholder images in `public/images/`.
3. Update real contact details, address, and the map location (`site.contact.mapQuery`).
4. Wire the consultation form to a real endpoint (see `src/components/ConsultationForm.tsx` — currently opens the visitor's email client as a fallback).
5. Add a Google Business Profile and submit the sitemap in Google Search Console — **this is the single biggest lever for local search ranking.**

## The contact form

`ConsultationForm` currently has no backend — on submit it composes a `mailto:` to
your firm email. To capture leads reliably, replace the handler with a call to an
API route (`/api/contact`) that emails you or pushes to a CRM.

# Perioperative Partners — marketing site

Public marketing site for [perioperativepartners.com.au](https://perioperativepartners.com.au).

## Hosting

- **Deploy target:** GitHub Pages (auto-deploys on push to `main`)
- **DNS:** Cloudflare — points `perioperativepartners.com.au` at GitHub Pages IPs
- **Portal (`portal.perioperativepartners.com.au`)** lives in a separate repo and is not affected by changes here
- **Email (`hello@perioperativepartners.com.au`)** is delivered by VentraIP mail; MX records in Cloudflare are left untouched

## Structure

```
/
├── index.html         # homepage
├── refer/index.html   # referral form landing
├── styles.css         # site-wide styles
├── script.js          # navigation + smooth scroll
├── favicon.svg        # nested-arch mark
├── assets/            # photography and patient-info PDFs
└── CNAME              # tells GitHub Pages which custom domain to serve
```

## Editing

Small copy or style tweaks: edit files locally, commit, push to `main`. GitHub Actions rebuilds and publishes automatically (~1–2 min).

## Logo

The mark is inline SVG (see the `<svg class="logo">` blocks in `index.html` and `refer/index.html`). It uses `currentColor` on the outer arch so header/footer colouring inherits from the surrounding text. Amber accent `#E8A33A` is fixed.

# LEE HOLDINGS GROUP

**Built on Land. Designed for Legacy.**

LEE HOLDINGS GROUP is a land acquisition, development, and rental company focused on strategic real estate investment and long-term value creation. This website serves as the public-facing portfolio for current land holdings, development plans, and future rental properties.

---

## Overview

This project is a fully static, data-driven website designed to showcase:

- Active land holdings
- Development plans and timelines
- Property galleries
- Embedded map locations
- Future rental opportunities

The site is intentionally lightweight, scalable, and easy to maintain as the portfolio grows.

---

## Features

- Modular ES6 architecture
- Data-driven property listings (`data.js`)
- Dynamic filtering by county and status
- Individual property detail pages
- Embedded Google Maps integration
- Responsive layout (mobile + desktop optimized)
- Luxury-inspired UI design with layered gradients and texture
- Clean, scalable component structure

---

## Tech Stack

- HTML5
- CSS3 (Custom properties + responsive grid)
- Vanilla JavaScript (ES Modules)
- Google Maps Embed API
- Git + GitHub
- Netlify (deployment)

No frameworks. No build tools. No dependencies.

---

## Project Structure

```
/
│
├── index.html
├── land-developments.html
├── rentals.html
├── honor.html
│
├── app.js
├── data.js
│
├── styles.css
│
├── assets/
│   ├── property-images
│   └── renderings
│
└── README.md
```

---

## How It Works

All properties are defined in:

```
data.js
```

To add a new land holding:

1. Add property images to the appropriate folder.
2. Copy an existing object inside the `developments` array.
3. Update:
   - `id`
   - `name`
   - `address`
   - `county`
   - `acreage`
   - `status`
   - `heroImage`
   - `gallery`
   - `overview`
   - `vision`
   - `timeline`
   - `mapUrl`
4. Save and deploy.

No HTML modifications required.

---

## Deployment

This site is deployed via Netlify.

To update the live site:

```bash
git add .
git commit -m "Update property listings"
git push
```

Netlify automatically rebuilds on push to the `main` branch.

---

## Design Philosophy

The interface emphasizes:

- Clarity over clutter
- Subtle luxury through color depth and texture
- Long-term brand consistency
- Scalable portfolio presentation

The brand palette includes:

- Forest Green: #1F3D2B
- Soft Ivory: #FAF8F4
- Gold Accent: #C9A24D
- Supporting Neutral: #2B2B2B

---

## Contact

For inquiries:

leeholdingsbiz@gmail.com

---

© 2025 LEE HOLDINGS GROUP
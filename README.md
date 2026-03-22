# High-Performance CDN Optimization — Next.js Demo

A production-ready Next.js application demonstrating global CDN performance optimization techniques. Built to achieve top Core Web Vitals scores with edge caching, optimized image delivery, and real user monitoring.

**Live Demo:** [cdn-pref.vercel.app](https://cdn-pref.vercel.app)

---

## What This Project Does

This app demonstrates three performance optimization techniques that directly impact how fast a website loads for real users:

1. **Edge Caching with ISR** — Data is fetched once and cached globally. Every subsequent visitor gets an instant response from a server near them, instead of hitting the origin server each time.
2. **Optimized Image Delivery** — Images are automatically compressed, resized per device, and converted to WebP format for smaller file sizes.
3. **Real User Monitoring** — Core Web Vitals are tracked from actual visitors and reported to a dashboard.

**Results:**
- LCP: 0.4s on desktop / 1.2s on mobile
- Lighthouse Performance Score: 100

---

## Glossary (Plain English)

| Term | What it means |
|------|---------------|
| **CDN** (Content Delivery Network) | A global network of servers. Instead of everyone hitting one server, visitors get content from the server closest to them — making it faster. |
| **ISR** (Incremental Static Regeneration) | A Next.js feature. The page is built and cached the first time someone visits. It stays cached until a set time passes, then it refreshes in the background. Fast for visitors, always up to date. |
| **LCP** (Largest Contentful Paint) | How long it takes for the biggest visible element (usually an image or heading) to appear on screen. Google considers under 2.5s "Good". |
| **CLS** (Cumulative Layout Shift) | Measures how much the page jumps around while loading. A score of 0 means nothing moves unexpectedly. |
| **FID / INP** (First Input Delay / Interaction to Next Paint) | How fast the page responds when a user clicks or types. |
| **Core Web Vitals** | Google's three key metrics for user experience: LCP, CLS, and INP. Used as a ranking signal in Google Search. |
| **WebP** | A modern image format that is 25–35% smaller than JPEG/PNG with the same visual quality. |
| **Edge** | Servers located around the world (not just one data center). Vercel has edge servers in 100+ locations. |
| **Revalidate** | The number of seconds a cached page stays fresh before Next.js fetches new data in the background. |
| **Turbopack** | Next.js's new bundler (replaces Webpack). Compiles code faster during development. |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | React framework with built-in ISR, image optimization, and server components |
| [TypeScript](https://www.typescriptlang.org) | Typed JavaScript — catches bugs before they reach production |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework for styling |
| [Vercel](https://vercel.com) | Deployment platform with a global edge network |
| [@vercel/speed-insights](https://vercel.com/docs/speed-insights) | Tracks real Core Web Vitals from actual visitors |

---

## Key Implementation Details

### ISR (Edge Caching)
```ts
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 20 } // Cache for 20 seconds, then refresh in background
})
```
Without this, every visitor triggers a fresh API call. With this, the first visitor's result is cached at Vercel's edge — the next 10,000 visitors get an instant cached response.

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="https://example.com/photo.jpg"
  width={800}
  height={400}
  priority   // Tells browser to load this first — improves LCP
/>
```
`next/image` automatically compresses, resizes for each screen size, and converts to WebP. A plain `<img>` tag does none of this.

### Speed Insights
```tsx
// app/layout.tsx — runs on every page
import { SpeedInsights } from '@vercel/speed-insights/next'

<body>
  {children}
  <SpeedInsights />
</body>
```
Collects LCP, CLS, and INP from real users and sends data to the Vercel dashboard.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/nihaanth/High-Performance-Content-Delivery-Network-CDN-Optimization.git
cd High-Performance-Content-Delivery-Network-CDN-Optimization

# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nihaanth/High-Performance-Content-Delivery-Network-CDN-Optimization)

One click to deploy your own copy on Vercel.

# The Container — Cinematic Edition (v3)

Bilingual (EN/AR) venue website for **The Container** at Shams Container Terminal,
Jeddah, Saudi Arabia — a working Red Sea shipping-container terminal repurposed as
a licensed industrial electronic-music venue.

## Design

Cinematic, full-bleed photographic scrollytelling. Each section is a full-viewport
photographic panel with overlaid editorial text, graded to a consistent duotone
(deep teal-black Red Sea night + warm amber stage glow) via CSS filters and washes,
plus film grain and slow scroll-driven parallax/fade reveals. Display serif
(Cormorant Garamond) headlines over a clean sans (Inter) body; Cairo for Arabic.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Static export (`output: 'export'`)
- Self-hosted, duotone-graded photography in `/public/photos`

## Bilingual

Clickable EN/AR toggle switches all copy, persists to `localStorage`, and sets
`<html lang/dir>`. EN is LTR; AR is full RTL with mirrored layout and Arabic type.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Content

Real lineup (subject to change): Anja Schneider — Fri 21 Aug 2026; Cassy — Fri 11
Sep 2026; plus one TBA. Framing: licensed live electronic-music events
(culturally appropriate for Saudi Arabia).

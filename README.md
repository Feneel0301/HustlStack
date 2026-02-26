# HustlStack Website

Professional agency website for HustlStack — Digital Growth Partner.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: CSS transitions + GSAP-ready (parallax, scroll reveal)
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (accent)
- **SEO**: Metadata API, JSON-LD, sitemap, robots.txt

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

1. Push to GitHub
2. Import repo at vercel.com
3. Deploy — zero config needed

## Before Going Live — Replace These Placeholders

Search for `XXXXXXXXXX` and replace with your real WhatsApp number (with country code, no +).

Example: `91XXXXXXXXXX` → `919876543210`

Also update in `app/layout.tsx`:
- `YOUR_GOOGLE_SEARCH_CONSOLE_ID` with your GSC verification token
- `https://hustlstack.com` with your real domain
- `hustlstack.team@gmail.com` with your email

## Project Structure

```
app/
  layout.tsx     → SEO metadata + JSON-LD structured data
  page.tsx       → Home page (assembles all sections)
  globals.css    → Design tokens, animations, utility classes
  sitemap.ts     → Auto sitemap for Google
  robots.ts      → robots.txt
components/
  Navbar.tsx     → Sticky nav with mobile menu
  Hero.tsx       → Parallax hero with animated orbs
  Marquee.tsx    → Scrolling ticker
  Problem.tsx    → Pain point cards
  AboutUs.tsx    → Animated counter stats
  Services.tsx   → 4 service cards with pricing
  Transformation.tsx → Before/After split
  HowItWorks.tsx → 4-step process
  Pricing.tsx    → Pricing table
  WhyUs.tsx      → 6 USP cards + final CTA
  Footer.tsx     → Full footer
  Cursor.tsx     → Custom cursor
  WhatsAppFloat.tsx → Sticky WhatsApp button
  useScrollReveal.ts → Scroll animation hook
```

## SEO Checklist
- [x] Title & meta description
- [x] OG/Twitter card tags
- [x] LocalBusiness JSON-LD schema
- [x] sitemap.xml
- [x] robots.txt
- [ ] Add Google Search Console verification ID
- [ ] Upload og-image.png (1200x630) to /public
- [ ] Add favicon files to /public
- [ ] Replace domain placeholders

## Color Palette
- Background: `#050508`
- Cyan accent: `#00D4FF`
- Card bg: `#0D0D14`
- Border: `#1A1A2E`
- Text: `#A0A0B8`
- White: `#F0F0FF`

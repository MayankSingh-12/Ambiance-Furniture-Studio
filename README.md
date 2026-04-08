# Ambiance Furniture Studio — Next.js Website

A complete, production-ready Next.js 14 website for **Ambiance Furniture Studio** (Faridabad, Haryana).

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── about/page.tsx      # About Us page
│   ├── products/page.tsx   # Products page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar
│   ├── Footer.tsx          # Full footer with links
│   ├── Hero.tsx            # Full-screen hero section
│   ├── StatsStrip.tsx      # Stats bar (40+ years, 2000 sqm, etc.)
│   ├── AboutSection.tsx    # About section for home page
│   ├── ProductCard.tsx     # Reusable product card component
│   ├── ProductsSection.tsx # Products grid for home page
│   ├── WhyUs.tsx           # Features/why choose us section
│   ├── Reviews.tsx         # Customer reviews section
│   └── CTABanner.tsx       # Call-to-action banner
└── lib/
    └── data.ts             # All business data (products, reviews, etc.)
```

## 🛠️ Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library
- **next/image** — Optimized images

## 📝 Customisation

All business data (contact info, products, reviews, etc.) is in one file:
**`src/lib/data.ts`**

Update this file to change any business information, add new products, or update contact details.

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or on any Node.js hosting platform.

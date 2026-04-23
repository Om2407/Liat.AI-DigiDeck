<div align="center">

# 🏙️ AMERICAN DREAM MALL
## Interactive B2B Sales Deck

<br/>

[![Live Demo](https://img.shields.io/badge/🔴_LIVE_DEMO-Visit_Now-blue?style=for-the-badge)](https://american-dream-mall-om.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-black?style=for-the-badge&logo=github)](https://github.com/Om2407/Liat.ai-digi-deck)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-94%2F100-green?style=for-the-badge&logo=lighthouse)]()

<br/>

> *"A self-contained web application that replaces fragmented sales tools — YouTube videos, static PDFs, and verbal narration — with a single cinematic, interactive experience that makes prospects say: I need to be here."*

</div>

---

## 🎯 The Brief

The world's largest shopping malls are no longer just places to shop. They are massive, mixed-use destinations combining retail, dining, entertainment, hospitality, and live events — attracting tens of millions of visitors per year.

**The problem:** The sales process is fragmented. A rep pulls up YouTube, flips through a PDF, opens a spreadsheet, and verbally narrates. It's manual, inconsistent, and doesn't convey the scale or energy of the property.

**This tool replaces all of that.**

| Audience | Business Goal |
|----------|--------------|
| 🏪 Retail Tenants | Drive leasing deals — luxury, mid-tier, flagship, pop-up |
| 🎯 Brand Sponsors | Drive sponsorship & brand partnership commitments |
| 🎤 Event Producers | Drive event bookings — concerts, activations, launches |

---

## 🔴 Live URL & Performance

```
https://om-liatai-digi-deck.vercel.app/
```

| Metric | Desktop | Mobile |
|--------|---------|--------|
| ⚡ Performance | **94** 🟢 | **80** 🟠 |
| ♿ Accessibility | **81** 🟢 | **81** 🟢 |
| ✅ Best Practices | **96** 🟢 | **96** 🟢 |
| 🔍 SEO | **90** 🟢 | **90** 🟢 |

---

## 🖥️ Deck Screenshots — 16 Slides

### 01 · Hero — Cinematic Intro
![01 Hero](./screenshots/01-hero.png)
> *Full-screen video background at 2× speed. Audience switcher transforms headline, stats, and CTAs in real-time for Tenant / Sponsor / Event Producer.*

---

### 02 · The Scale — Visitor Demographics
![02 Scale](./screenshots/02-scale.png)
> *Data-driven overview: 40M+ visitors, 3M sq ft, $180 avg spend, 4hr+ dwell time. Designed to establish commercial credibility immediately.*

---

### 03 · Brands — Luxury Portfolio
![03 Brands](./screenshots/03-brands.png)
> *450+ brand roster. Hermès, Gucci, Louis Vuitton, Fendi — social proof for prospective tenants evaluating the co-tenancy environment.*

---

### 04 · Parks — Nickelodeon Universe + Big Snow
![04 Parks](./screenshots/04-parks.png)
> *North America's largest indoor theme park. Big Snow — the only indoor ski slope in the Western Hemisphere. These are the traffic drivers.*

---

### 05 · Water Park — DreamWorks Water Park
![05 Waterpark](./screenshots/05-waterpark.png)
> *America's largest indoor waterpark. 40+ attractions. Year-round operation. The ultimate family destination driver that no competitor can match.*

---

### 06 · Mall Tour — 3D Cinematic Walkthrough
![06 Mall Tour](./screenshots/06-malltour.png)
> *Immersive 3D property walkthrough built with Three.js + React Three Fiber. Lets prospects "walk the property" without visiting.*

---

### 07 · Retail — The Avenue
![07 Retail](./screenshots/07-retail.png)
> *Curated luxury brand grid. Zone breakdown: The Avenue (flagship), The Plaza (mid-tier), The Market (F&B), The Lab (pop-up/activation).*

---

### 08 · ROI Calculator — Interactive Revenue Model
![08 ROI](./screenshots/08-roi.png)
> *Live interactive calculator. Tenant inputs store size + dwell time → sees projected annual revenue, foot traffic, and ROI vs standalone location.*

---

### 09 · Leasing Paths — Segmented by Category
![09 Leasing](./screenshots/09-leasing.png)
> *4 distinct leasing tracks — Luxury Flagship / Mid-Tier Retail / F&B Restaurant / Pop-up Activation — each with tailored pitch, pricing, and perks.*

---

### 10 · Tech Hub — Innovation Corridor
![10 Tech](./screenshots/10-techhub.png)
> *Entertainment-tech corridor: AR/VR activations, IMAX, SEA LIFE Aquarium. Positioned for tech-forward brands and experiential retail.*

---

### 11 · Brand Activations — Case Studies
![11 Activations](./screenshots/11-activations.png)
> *Real activation case studies: Samsung, Nike, BTS, WWE. Proof that the platform delivers reach no standalone venue can replicate.*

---

### 12 · Events — Arena + Expo Center
![12 Events](./screenshots/12-events.png)
> *5,000-seat arena + 300,000 sq ft Exposition Center. Booking flow, capacity specs, past event highlights, and direct CTA.*

---

### 13 · Sponsorship — 3 Partnership Tiers
![13 Sponsorship](./screenshots/13-sponsorship.png)
> *Presenting, Associate, and Activation partner tiers. Audience data, impression guarantees, and activation examples per tier.*

---

### 14 · Dining — F&B District
![14 Dining](./screenshots/14-dining.png)
> *100+ restaurants across every category. Food as a lifestyle draw — not an afterthought. Positions F&B as a destination in itself.*

---

### 15 · Social Proof — Digital Reach
![15 Social](./screenshots/15-social.png)
> *8.4M followers. 120M monthly impressions. UGC volume. Platform-by-platform breakdown of the organic amplification a partner receives.*

---

### 16 · Partner With Us — Build My Pitch AI
![16 Contact](./screenshots/16-contact.png)
> *Type brand name + select category → Gemini AI generates a personalized 3-paragraph pitch. "Send to Leasing Team" pre-fills a mailto with the output.*

---

## 🛠️ Tech Stack

| Layer | Technology | Decision |
|-------|-----------|----------|
| Framework | **React 19 + TypeScript** | Type-safe, component-driven architecture |
| Build | **Vite 6** | Fast HMR, manual chunk splitting |
| Styling | **Tailwind CSS v4** | Utility-first, zero runtime overhead |
| Animation | **Framer Motion** | Cinematic page transitions + micro-interactions |
| 3D | **Three.js + R3F** | MallTour immersive walkthrough |
| AI | **Google Gemini 2.0 Flash** | 3 distinct live AI features |
| Deployment | **Vercel** | CDN edge, auto-deploy on push |

---

## ⚙️ Setup

```bash
# 1. Clone
git clone https://github.com/Om2407/Liat.ai-digi-deck
cd Liat.ai-digi-deck

# 2. Install
npm install

# 3. Environment
cp .env.example .env
# Add your Gemini API key → https://aistudio.google.com
```

**.env**
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

```bash
# 4. Run
npm run dev       # → http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
```

---

## 🤖 AI Integration — 3 Live Features

### 1. ✦ Build My Pitch *(Slide 16 — Contact)*
User inputs **brand name + category** → Gemini generates a personalized 3-paragraph sales pitch explaining exactly why that brand belongs at American Dream.

```
Input:  Brand = "Nike"  |  Category = "Tech Retail"
Output: 3-paragraph pitch referencing Nike's demographic alignment
        with American Dream's 40M visitors, event co-marketing
        upside, tech corridor placement, and a clear urgency CTA
```

**7 categories:** Luxury Retail · Tech Retail · F&B · Pop-up · Corporate Sponsor · Event Producer · Entertainment Brand

---

### 2. 💬 AI Concierge *(Floating Widget — always visible)*
Always-on conversational assistant trained on American Dream's full property details — leasing, events, venues, sponsorship tiers, parking, hours. Powered by Gemini with a custom system prompt scoped strictly to property knowledge.

---

### 3. 📊 Overview AI Insights *(Slide 02)*
4 one-click questions → Gemini evaluates the demographic data on screen and explains the commercial opportunity in the language of the prospect's specific interest.

---

## 🎨 Key Design Decisions

### Audience Switcher
Three different buyer types. One deck. The switcher at the top transforms the hero in real-time per audience — tagline, headline, subheading, stats, CTA buttons, and color accent all animate simultaneously using `AnimatePresence mode="wait"`.

| Audience | Accent Color | Hero Headline |
|----------|-------------|---------------|
| 🟠 Retail Tenant | Amber | YOUR FLAGSHIP HOME |
| 🟣 Brand Sponsor | Purple | OWN THE MOMENT |
| 🟢 Event Producer | Green | BOOK THE ARENA |

### Video-First Hero
Autoplay MP4 at **2× playback speed** as full-bleed background. Graceful Ken Burns image fallback if video fails. Right panel mini-player with animated LIVE badge. On video end → KB slides cycle automatically.

### Dark Luxury UI
Inspired by Apple · Tesla · Hermès · Saint Laurent. `zinc-950` base (not pure black). Every color accent is audience-reactive. Gradient text headlines. Cinematic overlays on all media assets.

### Non-Linear Navigation
Sidebar (all 16 slides) + sticky header + slide arrows. Any prospect jumps directly to the relevant section. Works as screen-share or standalone link — no narration needed.

### Code Splitting
Vite `manualChunks` isolates Three.js (~1MB) from the main bundle. Main JS: **184KB gzipped**. Keeps initial paint fast while deferring the heavy 3D scene.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx              # Video hero + audience switcher
│   │   ├── Overview.tsx          # Demographics + Gemini AI insights
│   │   ├── Retail.tsx            # Brand grid + leasing paths
│   │   ├── ROICalculator.tsx     # Interactive revenue model
│   │   ├── Events.tsx            # Arena + Expo Center booking
│   │   ├── Sponsorship.tsx       # 3 partnership tiers
│   │   ├── Contact.tsx           # Build My Pitch AI
│   │   ├── SocialSection.tsx     # 8.4M follower proof
│   │   ├── MarvelSection.tsx     # Brand activation case studies
│   │   └── ... 7 more sections
│   ├── DeckEngine.tsx            # 16-slide navigation engine
│   ├── AIConcierge.tsx           # Floating Gemini chat widget
│   └── Header.tsx                # Audience-reactive sticky nav
├── context/
│   └── AudienceContext.tsx       # Global audience state
└── App.tsx                       # Slide array + layout
```

---

## 🧠 AI Tools Used in Development

| Tool | Usage |
|------|-------|
| **Google Gemini 2.0 Flash** | All 3 live AI features in the deployed deck |
| **Claude (Anthropic)** | Architecture decisions, component logic, TypeScript debugging |
| **DALL-E 3 / Midjourney** | Custom property renders and activation mockups |
| **Cursor** | Accelerated boilerplate and utility scaffolding |

---

## 🔮 What I'd Improve With More Time

**Performance**
- Lazy-load Three.js MallTour on interaction (biggest bottleneck — 1MB chunk loads upfront)
- Replace stock video with official American Dream press kit footage
- Push mobile Lighthouse Performance from 80 → 90+

**Features**
- Live venue availability calendar (Calendly API)
- Deck engagement analytics — section dwell time, CTA clicks, per audience
- PDF/email export of Build My Pitch output
- Real leasing availability feed from property management system

**Content**
- Official photography from American Dream media kit
- Live event footage from past WWE, concerts, NY Fashion Week activations
- Dynamic sponsorship tier pricing from live CRM

---

<div align="center">

**Built with React 19 · Vite · Tailwind CSS · Framer Motion · Three.js · Google Gemini**

<br/>

[![Live Demo](https://img.shields.io/badge/🔴_View_Live-Visit_Now-blue?style=for-the-badge)](https://om-liatai-digi-deck.vercel.app/)

</div>

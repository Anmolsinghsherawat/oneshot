# ONE SHOT ANIMATION — Comprehensive Client & Developer Handover Specification

---

## 1. Document & Project Metadata

| Field | Detail |
| :--- | :--- |
| **Project Name** | ONE SHOT ANIMATION Agency Platform |
| **Project Version** | `v1.0.0` (Production Ready) |
| **Document Version** | `1.0.0` |
| **Completion Date** | July 27, 2026 |
| **Developer / Agency** | Premium Creative & Tech Engineering Team |
| **Copyright Notice** | © 2026 ONE SHOT ANIMATION. All rights reserved. |
| **Target Audience** | Dual Purpose: Client Leadership (Executive Overview) & Engineering Team (Handover Technical Specs) |
| **Licensing** | Proprietary & Client-Owned (Full IP ownership transferred upon project delivery) |
| **Technical Support Contact** | `anmolsingh30102006@gmail.com` |

---

## 2. Live Links & Export References

- **Shared Preview / Demo URL:** `https://ais-pre-5bfofmgvsaldtg6mpe4trz-712552403310.asia-southeast1.run.app`
- **Development App URL:** `https://ais-dev-5bfofmgvsaldtg6mpe4trz-712552403310.asia-southeast1.run.app`
- **GitHub / Code Export:** Accessible via the top-right **Settings > Export to GitHub** or **Export as ZIP** menu in the platform workspace.

---

## 3. Project Purpose & Target Audience

- **Company Profile:** ONE SHOT ANIMATION is a premier content creation agency and ad campaign scaling engine specializing in 3D/CGI animation, viral UGC video ads, and high-ROAS paid media campaigns.
- **Primary Website Purpose:** Convert high-intent brand marketers, e-commerce founders, and enterprise advertisers into qualified leads while attracting top-tier 3D animation talent.
- **Key Objectives:**
  1. High-impact video showcase with zero-friction lightboxes and filterable portfolio tags.
  2. Interactive lead generation tools including a **Campaign ROAS Calculator** and **Ad Hook Simulator**.
  3. Seamless lead capture via interactive Consultation and Job Application modals.

---

## 4. Complete Tech Stack & NPM Dependencies

### Dependencies (`package.json`)

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.344.0",
    "motion": "^12.4.7",
    "canvas-confetti": "^1.9.4"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/canvas-confetti": "^1.9.0",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^9.9.1",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  }
}
```

---

## 5. Branding Guidelines & Design System

### Brand Color Palette
- **Primary Brand Red (`#ED1C24`):** Used for primary buttons, active states, key highlighted phrases, and ambient glows.
- **Dark Canvas Charcoal (`#0A0B10` to `#12141D`):** Deep background neutral providing high contrast for video reels.
- **Light Backdrop Glow (`#F0F2F5` / `#FFFFFF`):** Applied to top header gradients and light reflection masks for maximum readability.
- **Warning / Star Accent (`#F59E0B`):** 5-star rating badges and trust metrics.
- **Text Neutrals:** `white/95` (headings), `white/80` (body), `white/50` (subtle labels).

### Typography
- **Headings:** Modern, bold display typography with styled italicized brand accents.
- **Body Text:** Clean, highly readable sans-serif (Plus Jakarta Sans / Inter font stack).

---

## 6. Layout Breakpoints & Responsive Design

Configured strictly using **Tailwind CSS Default Breakpoints**:

| Screen Size | Breakpoint | Layout Adaptations |
| :--- | :--- | :--- |
| **Mobile (`< 640px`)** | Default | Single column layout, mobile drawer menu, touch targets >= 44px |
| **Tablet (`sm:` / `md:`)** | `640px` / `768px` | 2-column grids, horizontal nav links appear, inline video players |
| **Desktop (`lg:` / `xl:`)** | `1024px` / `1280px` | Full multi-column dashboard layouts, sticky header, side-by-side calculators |
| **Ultra-Wide (`2xl:`)** | `1536px`+ | Max-width container bounds (`max-w-[1800px] mx-auto`) to prevent stretching |

---

## 7. Accessibility (A11y) & UX Standards

- **Semantic HTML5:** Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
- **Keyboard Navigation:** Full keyboard focusability across all buttons, modal triggers, and form fields with `onKeyDown` handlers for `Enter` and `Space`.
- **Focus Indicators:** Visible ring outlines (`focus-visible:ring-2 focus-visible:ring-[#ED1C24]`) on interactive elements.
- **ARIA Attributes:** Accessible labels (`aria-label`, `aria-expanded`, `aria-hidden`) on all interactive buttons and SVG icons.
- **Contrast Ratios:** Compliant with WCAG AA guidelines for high-contrast text against dark and light backdrops.

---

## 8. Performance Optimizations

1. **GPU-Accelerated Motion:** CSS transform and opacity-driven animations using `motion/react` to eliminate layout repaints.
2. **Lazy-Rendered Lightboxes:** Video Lightbox and Consultation Modals mount only when explicitly opened by the user.
3. **CDN Media Asset Delivery:** High-resolution videos and images hosted on AWS CloudFront and Unsplash CDNs for instant streaming.
4. **Hardware Video Decoders:** Optimized `<video>` attributes (`preload="metadata"`, `playsInline`, `muted`, `loop`) preventing main-thread blocking.
5. **Debounced & Memoized Handlers:** Efficient state updates preventing unnecessary re-renders.

---

## 9. Officially Guaranteed Browser Support

- **Google Chrome:** Version 100+
- **Apple Safari:** Version 15+ (macOS & iOS)
- **Microsoft Edge:** Version 100+
- **Mozilla Firefox:** Version 100+
- **Mobile Browsers:** Mobile Safari (iOS 15+) and Chrome for Android

---

## 10. Known Scope Boundaries & Frontend Architecture

- **Frontend-Only Scope:** In strict accordance with client requirements, all forms (Consultation Modal, Career Application Form, Ad Hook Generator, ROAS Calculator) operate as interactive client-side components.
- **Data Persistence:** Submissions trigger simulated lead confirmations and confetti animations. No backend database or server key is embedded in the client code.

---

## 11. Step-by-Step Installation & Local Development Instructions

### Prerequisite
Ensure **Node.js (v18 or higher)** and **npm** are installed on your system.

### Installation
```bash
# 1. Extract the downloaded project ZIP file
cd oneshot-animation

# 2. Install all project dependencies
npm install

# 3. Launch the local development server
npm run dev
```

Visit `http://localhost:3000` or `http://localhost:5173` in your web browser.

### Production Build
```bash
# Build optimized static files
npm run build
```
The production bundle will be created in the `dist/` directory, ready to deploy to Netlify, Vercel, Cloudflare Pages, AWS S3, or any static hosting service.

---

## 12. Maintenance & Future Developer Guidelines

- **Adding Portfolio Videos:** Edit `src/components/PortfolioSection.tsx` or `src/components/ViralCampaignsSection.tsx` array entries.
- **Connecting Backend API:**
  - Connect `ConsultationModal.tsx` to an email API (e.g., Formspree, Resend, or SendGrid) inside `handleSubmit`.
  - Connect `JobSection.tsx` to a candidate tracking system or webhook (e.g., Zapier, Notion API).
- **Code Conventions:**
  - Keep components modular inside `src/components/`.
  - Follow TypeScript typing standards without introducing `any` types.

---

## 13. Summary Checklist for Client Handover

- [x] Zero API key security risks (Clean frontend codebase)
- [x] Tested across mobile, tablet, and desktop viewports
- [x] High-craft motion animations and interactive ROI calculator
- [x] Complete documentation & installation instructions provided in `README.md`

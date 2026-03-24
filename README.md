# KJs DataEdge Consulting — Website

A premium, futuristic React SPA for KJs DataEdge Consulting — a global Data & IT consulting firm.

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom theme with extended config)
- **Framer Motion 11** (page transitions, scroll animations, micro-interactions)
- **React Router DOM 6** (client-side routing)
- **Google Fonts** — Syne (display) + DM Sans (body) + JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn

### Installation

```bash
# 1. Navigate into the project folder
cd kjs-dataedge-consulting

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder — ready to deploy on Vercel, Netlify, or any static host.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky glassmorphism nav with mobile menu
│   ├── Footer.jsx         # Premium dark footer with links
│   ├── Hero.jsx           # Full-screen animated hero with floating UI
│   ├── ServiceCard.jsx    # Reusable card (compact + full variants)
│   ├── IndustryCard.jsx   # Industry vertical card with hover glow
│   ├── CTA.jsx            # Gradient CTA banner with glow effects
│   └── SectionWrapper.jsx # Animated section primitives (label, title, etc.)
├── pages/
│   ├── Home.jsx           # Full homepage with all 6 sections
│   ├── Services.jsx       # Detailed service pages with alternating layout
│   ├── About.jsx          # Timeline, leadership, values, offices
│   └── Contact.jsx        # Animated form with multi-step validation
├── hooks/
│   └── useScrollAnimation.js  # IntersectionObserver + counter hooks
├── utils/
│   └── constants.js       # All company data, services, industries, etc.
├── App.jsx                # Router + AnimatePresence wrapper
├── main.jsx               # React entry point
└── index.css              # Global styles, Tailwind directives, custom CSS
```

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Navy 950 | `#020d1a` | Primary background |
| Navy 800 | `#0A2540` | Section backgrounds |
| Blue Electric | `#007BFF` | Primary accent, CTAs |
| Teal Neon | `#4FD1C5` | Secondary accent, labels |

### Typography
- **Display/Headings**: Syne (800 weight)
- **Body**: DM Sans (300–500 weight)
- **Mono/Labels**: JetBrains Mono

### Animation Patterns
- Scroll-triggered fade + slide using `framer-motion` `whileInView`
- Counter animations using custom `useCountUp` hook
- Page transitions with `AnimatePresence`
- Floating cards with CSS keyframe animations
- Hover glow using inline style manipulation

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

### Manual
```bash
npm run build
# Upload contents of dist/ to any static host (S3, CloudFront, etc.)
```

## 🔧 Customisation

1. **Company data**: Edit `src/utils/constants.js` — all content in one place
2. **Colors**: Edit `tailwind.config.js` color tokens + CSS variables in `src/index.css`
3. **Fonts**: Change Google Fonts imports in `index.html` + `tailwind.config.js` fontFamily
4. **Images**: Replace Unsplash URLs in `constants.js` with your own assets

---

Built with ❤️ for KJs DataEdge Consulting.

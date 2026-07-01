# 3. Page Documentation

Since this is a single-page application, each "page" corresponds to a section within the page. Every section is documented below.

---

## 3.1 Hero Section (`#home`)

**File:** `src/Sections/Hero.jsx`
**Component:** `Hero`

### Purpose
First impression section. Introduces the brand, value proposition, and showcases vending machine images in a carousel.

### Layout
```
┌───────────────────────────────────────┐
│  Tagline                              │
│  Heading: "Smart Vending Machines..." │  ← left text column
│  Description paragraph                │
│  [Explore Machines] CTA button        │
│  [Partner badges] "Trusted by 50+..." │
├───────────────────────────────────────┤
│       [Image Carousel]                │  ← right panel
│       ● ● ● ○ (dot indicators)        │
└───────────────────────────────────────┘
```
- Desktop: side-by-side (text left 50%, image right 50%)
- Mobile/tablet: stacked (text above, image below)

### Components Used
- `useBlurReveal` hook (section scroll animation)
- GSAP (right panel entrance animation)
- `useColors` hook (theme-aware colors)

### Typography
- Tagline: `text-[0.4rem]` → `lg:text-[0.7rem]`, uppercase, `font-semibold`, `tracking-[0.2em]`
- Heading: `text-[2.25rem]` → `lg:text-7xl`, `font-bold`, `leading-[1.08]`
- Description: `text-[0.65rem]` → `lg:text-lg`, `lg:font-light`

### Colors
- Background: `colors.primaryColor` (theme-dependent)
- Text: `text-white/80`, `text-white/50`
- CTA: `bg-[#F8F6E8] text-[#2d3a1a]` (hardcoded, not theme-aware)
- Right panel: `colors.secondaryColor`

### Buttons
- "Explore Machines": `<a>` styled as button, `rounded-full`, hover `-translate-y-0.5` + `shadow-lg`

### Images
- 4 vending machine PNGs (Blue, Green, Purple, Yellow)
- Auto-rotating carousel (3s interval)
- Clickable to jump to a specific image
- Slide animation with `translateX` and `scale`
- Floating animation via `animate-float` CSS class

### States

| State | Handling |
|-------|----------|
| **Loading** | Images fade in via blur-reveal; right panel starts at `opacity: 0` |
| **Error** | ❓ No error handling for image load failures |
| **Empty** | N/A — content is static |
| **Interaction** | Hover on CTA lifts it up; carousel dots are clickable |

### Accessibility Notes
- Missing `aria-label` on carousel buttons
- Carousel auto-plays with no pause mechanism
- CTA is an `<a>` with `href="#machines"` — works as a smooth scroll
- Partner avatars have no `aria-label` or `alt` text

---

## 3.2 Machines Section (`#machines`)

**File:** `src/Sections/Machines.jsx`
**Component:** `Machines`

### Purpose
Showcases the four vending machine categories.

### Layout
```
┌──────────────────────────────────────────────────┐
│              "Our Fleet" tagline                  │
│              "Machines Built For Every Space"     │
│              Description paragraph                │
├──────────┬──────────┬──────────┬──────────────────┤
│  Snack   │  Coffee  │ Healthy  │ Combination      │
│  & Bev   │  & Hot   │ & Fresh  │ Units            │
│  [img]   │  [img]   │  [img]   │  [img]           │
│ Popular  │ Popular  │ Popular  │ Popular          │
│ features │ features │ features │ features         │
├──────────┴──────────┴──────────┴──────────────────┤
│  [4 icon cards: Smart Sensors, Always Connected,  │
│   Premium Quality, Easy Restock]                  │
├──────────────────────────────────────────────────┤
│        "Trusted across industries" list           │
└──────────────────────────────────────────────────┘
```
- Desktop: 4-column grid
- Tablet: 2-column grid  
- Mobile: 1 column

### Cards
Each card contains:
- Machine image (aspect `4/3` container)
- "Popular" badge (top-right corner)
- Title (bold)
- Description
- Feature tags (3 per card)

### Hover States
- Card lifts up (`hover:-translate-y-1.5`)
- Image scales up (`group-hover:scale-105`)

### Icons
- `Cpu`, `Wifi`, `Coffee`, `ShoppingBag` from Lucide React

---

## 3.3 Technology Section (`#technology`)

**File:** `src/Sections/Technology.jsx`
**Component:** `Technology`

### Purpose
Highlights 6 technology features of the vending machines.

### Layout
```
┌──────────────────────────────────────────────────┐
│            "Built Different" tagline              │
│            "Technology That Just Works"           │
├──────────┬──────────┬──────────┬──────────────────┤
│ AI-      │ IoT      │ Cashless │ Secure           │
│ Powered  │ Connect. │ Payments │ Platform         │
│ span 7   │ span 5   │ span 5   │ span 7          │
├──────────┴──────────┴──────────┴──────────────────┤
│     Auto Replenishment (span 6)                   │
│     Analytics Dashboard (span 6)                  │
├──────────────────────────────────────────────────┤
│  [API avatars] "Seamless integration..." callout   │
└──────────────────────────────────────────────────┘
```
- Uses a 12-column CSS grid with varying span sizes
- Desktop: 6 cards in a staggered 2-row layout
- Tablet: 2 columns
- Mobile: 1 column

### Cards
- Icon in a rounded box
- Title (larger for wide cards)
- Description
- Hover: lifts up (`hover:-translate-y-1`) + icon scales up (`group-hover:scale-110`)

---

## 3.4 Solutions Section (`#solutions`)

**File:** `src/Sections/Solutions.jsx`
**Component:** `Solutions`

### Purpose
Shows 6 industry-specific vending solutions in a draggable horizontal carousel.

### Layout
```
┌──────────────────────────────────────────────────┐
│         "Tailored For You" tagline                │
│         "Solutions For Every Industry"            │
├──────────────────────────────────────────────────┤
│  ◄ │ [Card] [Card] [Card] [Card] [Card] [Card]│ ► │
│    ● ● ● ○ ● ● (dot indicators)                  │
└──────────────────────────────────────────────────┘
```

### Carousel Behavior
- Horizontal scroll with drag support
- Auto-play every 4 seconds
- Prev/Next arrow buttons
- Dot indicators for active card
- Cards resize based on container width
- Inactive cards are dimmed (`opacity: 0.55`, `scale: 0.95`)
- Hover over a card sets it active

### Cards
- Industry icon (Lucide)
- Title, description
- Highlight tags (3 per card)

### States

| State | Handling |
|-------|----------|
| **Auto-play** | 4s interval, resets on manual interaction |
| **Drag** | Pointer events, `cursor: grab` → `cursor: grabbing` |
| **Edge** | Loops infinitely (next from last → first) |

---

## 3.5 Deployment Section (`#deployment`)

**File:** `src/Sections/Deployment.jsx`
**Component:** `Deployment`

### Purpose
Explains the 4-step deployment process via a vertical timeline.

### Layout
```
┌────────────────────────────────────────────┐
│       "From Survey to Smart Retail"        │
│           "Our Deployment Process"         │
├────────────────────────────────────────────┤
│  ● ── Card (Site Analysis)                │  ← alternating
│  ● ── Card (Tech Configuration)           │     left/right
│  ● ── Card (Seamless Deployment)          │     on desktop
│  ● ── Card (Proactive Management)         │
└────────────────────────────────────────────┘
```
- Desktop: alternating left/right cards on a center timeline
- Mobile/tablet: all cards right-aligned, timeline on the left
- Vertical line animates with GSAP ScrollTrigger scrub

### Timeline Animation
- GSAP `ScrollTrigger` with `scrub: 1.4` for the timeline line
- Cards animate in with blur + x offset on scroll
- Header elements animate with blur + y offset with staggered delay

### Cards
- Icon on the timeline (gradient circle)
- Title, description, "Step XX" badge
- Hover: lift + scale, background/border color shift

---

## 3.6 Contact Section (`#contact`)

**File:** `src/Sections/Contact.jsx`
**Component:** `Contact`

### Purpose
Provides contact information and a lead generation form.

### Layout (Desktop)
```
┌────────────────────────────────────────────┐
│         "Get In Touch" tagline             │
│         "Let's Build Something Together"   │
├──────────────────┬─────────────────────────┤
│  📧 Email        │  Name      Email        │
│  📞 Phone        │  Subject                │
│  📍 Location     │  Message (textarea)     │
│                  │  [Send Message] button  │
└──────────────────┴─────────────────────────┘
```
- Desktop: 2-column (info 2/5, form 3/5)
- Mobile: stacked

### Form Fields
| Field | Type | Placeholder |
|-------|------|-------------|
| Name | text | "Your Name" |
| Email | email | "Your Email" |
| Subject | text | "Subject" |
| Message | textarea (4 rows) | "Tell us about your space..." |

**⚠ Note:** The form has no `onSubmit` handler or state management. It is purely presentational.

### Contact Info Cards
- Email → `mailto:hello@vendmac.com`
- Phone → `tel:+15551234567`
- Location → `#` (placeholder, no actual address)
- Hover: lifts up (`hover:-translate-y-0.5`)

---

## 3.7 Footer

**File:** `src/Sections/Footer.jsx`
**Component:** `Footer`

### Layout
```
┌──────────┬──────────────┬────────────┬──────────────┐
│ VendMac  │ Quick Links  │ Contact    │ Industries   │
│ Logo     │ • Home       │ 📧 email   │ • Offices    │
│          │ • Machines   │ 📞 phone   │ • Schools    │
│ tagline  │ • Technology │ 📍 loc     │ • Hospitals  │
│          │ • Solutions  │            │ • Gyms       │
│          │ • Contact    │            │ • Hotels     │
│          │              │            │ • Retail     │
├──────────┴──────────────┴────────────┴──────────────┤
│              © 2026 VendMac. All rights reserved.    │
└─────────────────────────────────────────────────────┘
```
- Background: `colors.darkPrimary`
- Text: `colors.secondaryColor` at various opacities

---

## 3.8 Navbar

**File:** `src/components/Navbar.jsx`
**Component:** `Navbar`

### Mobile
- Fixed top-right, hamburger icon
- Animated dropdown menu via Framer Motion (`AnimatePresence`)
- "Get Quote" button at bottom of mobile menu
- Glassmorphism styling with backdrop blur

### Desktop
- Fixed top-center, horizontal link row
- Glassmorphism background
- Sliding active indicator bar
- "Get Quote" button on the right
- Logo "V" + "Vendza" brand text

### Active Section Tracking
- Uses `IntersectionObserver` per section
- Updates `activeSection` state
- Desktop: sliding indicator bar animates to active link position
- Mobile: active link highlighted with dot indicator

# 4. Component Documentation

## 4.1 Navbar

**File:** `src/components/Navbar.jsx`

### Purpose
Fixed-position navigation bar with mobile hamburger menu, active section tracking, and sliding indicator.

### Props
None — uses `useColors()` context for theming.

### Internal State
| State | Type | Description |
|-------|------|-------------|
| `mobileMenuOpen` | boolean | Toggles mobile dropdown menu |
| `activeSection` | string | Currently visible section ID |
| `hoveredLink` | string\|null | Desktop nav link being hovered |
| `hover` | boolean | Desktop "Get Quote" button hover |

### Ref Objects
| Ref | Target |
|-----|--------|
| `indicatorRef` | Sliding background bar |
| `linkRefs` | Map of nav link `<a>` elements |
| `mobileNavRef` | Mobile nav wrapper |
| `desktopNavRef` | Desktop nav wrapper |
| `navListRef` | Desktop `<ul>` container |

### Variants
- **Desktop** (`md:block`): horizontal bar, centered, glassmorphism
- **Mobile** (`md:hidden`): hamburger icon, slide-down menu

### Responsive Behavior
| Breakpoint | Nav variant |
|------------|-------------|
| `< 768px` | Mobile (hamburger) |
| `>= 768px` | Desktop (horizontal) |

### Animations
- Desktop nav entrance: GSAP `fromTo` (opacity 0→1, y: -24 → 0, delay 0.15s)
- Mobile nav entrance: GSAP `fromTo` (opacity 0→1, y: -20 → 0, delay 0.2s)
- Mobile menu: Framer Motion `AnimatePresence` (scale + y transition)
- Active indicator: CSS `transition-all duration-300`

### Accessibility
- ✅ Mobile menu toggle button with icon
- ⚠ Missing `aria-label` on nav links
- ⚠ Missing `aria-expanded` on mobile menu button
- ⚠ No keyboard trap management in mobile menu

---

## 4.2 ThemeSelector

**File:** `src/components/ThemeSelector.jsx`

### Purpose
Floating theme switcher that lets users change the site's color scheme.

### Props
None — uses `useTheme()` context.

### State
| State | Type | Description |
|-------|------|-------------|
| `open` | boolean | Toggles the palette popup |

### Variants
- **Closed**: Small paintbrush icon button (bottom-right)
- **Open**: Button + horizontal row of 5 color circles

### Accessibility
- ✅ Color circles have `title` attribute with theme name
- ⚠ Button has no `aria-label`
- ⚠ No keyboard navigation for color selection

---

## 4.3 CardContent (Deployment sub-component)

**File:** `src/Sections/Deployment.jsx` (internal)

### Purpose
Renders the content inside each deployment timeline card.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `s` | object | Step object with `title`, `desc`, `step` |

### States
- **Default**: Styled with theme colors at reduced opacity
- **Hover** (via parent `.group`): Title turns `text-white`, badge gets white background

---

## 4.4 Useable Patterns

This section documents recurring UI patterns across the codebase.

### Reusable Pattern: Blur-Reveal Section
- **Hook:** `useBlurReveal()` 
- **Usage:** Add `blur-reveal` class to elements within a section
- Each section wraps its content in a ref returned by the hook
- Elements stagger in with a 0.05 * index delay

### Reusable Pattern: Section Header
Every section follows this pattern:
```
<p className="... text-[0.65rem] font-medium tracking-[0.2em] uppercase">
  Section Tagline
</p>
<h2 className="... text-2xl sm:text-3xl lg:text-4xl font-bold">
  Title <span style={{ color: colors.primaryColor }}>Highlight</span>
</h2>
<p className="... text-xs sm:text-sm">
  Description paragraph
</p>
```

### Reusable Pattern: Gradient Decorative Circle
Each section has a large decorative circle for visual depth:
```
<div className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none"
     style={{ background: colors.primaryColor }} />
```

### Reusable Pattern: Glassmorphism Card
Used in Navbar and ThemeSelector:
```css
background: rgba(secondaryColor, 0.45);
backdropFilter: "blur(24px)";
border: 1px solid rgba(secondaryColor, 0.12);
```

### Hover Lift Pattern
Many interactive elements share this hover behavior:
```css
transition: all 0.3s;
hover: -translate-y-0.5
hover: shadow-lg
```

## Components That Should Be Extracted

| Current Location | Suggested Component | Reason |
|-----------------|-------------------|--------|
| Hero.jsx carousel dots | `CarouselDots` | Repeated pattern in Solutions |
| Section headers (tagline + title + desc) | `SectionHeader` | 6/7 sections use identical structure |
| Decorative gradient circles | `DecorativeCircle` | Used in every section |
| Machine card | `MachineCard` | Could accept props |
| Technology card | `FeatureCard` | Could accept props |
| Industry solution card | `SolutionCard` | Could accept props |
| Timeline card | `TimelineCard` | Could accept props |
| Contact info card | `ContactInfoCard` | Could accept props |
| Feature tag pills | `TagPill` | Used in Machines and Solutions |

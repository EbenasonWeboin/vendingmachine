# 7. Responsive Analysis

## 7.1 Breakpoints

The project uses Tailwind CSS v4 breakpoints (default screen values):

| Breakpoint | Min Width | CSS Prefix |
|------------|-----------|------------|
| Mobile (default) | 0 | *(no prefix)* |
| `sm` | 640px | `sm:` |
| `md` | 768px | `md:` |
| `lg` | 1024px | `lg:` |

---

## 7.2 Layout Changes by Breakpoint

### Navbar

| Breakpoint | Behavior |
|------------|----------|
| `< 768px` | Hamburger icon, fixed top-right. Menu slides down on tap |
| `>= 768px` | Horizontal centered bar, fixed top. Link indicator slides. "Get Quote" button visible |

### Hero

| Breakpoint | Layout | Image Panel |
|------------|--------|-------------|
| `< 1024px` | Stacked (text on top, image below) | Full width, `rounded-t-[2rem]`, shorter height (`max-h-[420px]`) |
| `>= 1024px` | Side-by-side (text 48%, image 52%) | Positioned right, full height, `rounded-l-[2rem]` |

Responsive tweaks:
- Tagline: `text-[0.4rem]` → `sm:text-[0.55rem]` → `lg:text-[0.7rem]`
- Heading: `text-[2.25rem]` → `sm:text-4xl` → `lg:text-7xl`
- Description: `text-[0.65rem]` → `sm:text-xs` → `lg:text-lg`
- CTA: `text-[0.6rem]` → `sm:text-xs`
- Slide offset: 60px on mobile, 120px on desktop

### Machines

| Breakpoint | Grid |
|------------|------|
| `< 640px` | 1 column |
| `640px–1023px` | 2 columns |
| `>= 1024px` | 4 columns |

- Feature grid (bottom): 2 columns on mobile, 4 on desktop
- Card border radius: `rounded-2xl` crops to `rounded-3xl` on `sm+`
- Image height: `h-[65%]` on mobile, `h-[75%]` on `sm+`

### Technology

| Breakpoint | Grid |
|------------|------|
| `< 640px` | 1 column |
| `640px–1023px` | 2 columns |
| `>= 1024px` | 12-column grid with varying spans |

- Feature cards: `rounded-2xl` → `lg:col-span-5/6/7`
- Title: `text-xs` vs `text-base` depending on card width
- Integration callout: `flex-col` on mobile, `flex-row` on `sm+`

### Solutions

| Breakpoint | Card Width |
|------------|------------|
| `< 640px` | `min(containerW - 40, 260px)` |
| `640px–1023px` | `min(containerW * 0.55, 300px)` |
| `>= 1024px` | `300px` |

- Arrow buttons: 28px on mobile, 32px on desktop

### Deployment

| Breakpoint | Layout |
|------------|--------|
| `< 1024px` | Right-aligned cards, timeline line on left |
| `>= 1024px` | Alternating left/right cards, centered timeline |

- Timeline width: `w-[3px]` on mobile, `w-0.5` on desktop
- Icon size: `w-8 h-8` on mobile, `w-10 h-10` on desktop
- Card padding: `p-4` on mobile, `p-5` on desktop

### Contact

| Breakpoint | Layout |
|------------|--------|
| `< 1024px` | Stacked (info cards above form) |
| `>= 1024px` | Side-by-side (info 2/5, form 3/5) |

- Form: single column on mobile, 2-column for Name/Email on `sm+`

### Footer

| Breakpoint | Grid |
|------------|------|
| `< 640px` | 1 column |
| `640px–1023px` | 2 columns |
| `>= 1024px` | 4 columns |

---

## 7.3 Elements Hidden on Specific Breakpoints

| Element | Hidden On |
|---------|-----------|
| Desktop nav | `< 768px` (`hidden md:block` → reversed via `md:hidden` on mobile nav) |
| Mobile nav | `>= 768px` (`md:hidden`) |
| "Vendza" brand text | `< 640px` (`hidden sm:block`) |
| Desktop "Get Quote" | `< 768px` (`hidden md:block`) |
| Desktop layout cards | `< 1024px` (`hidden lg:flex` → `lg:hidden` for mobile cards) |

---

## 7.4 Potential Responsive Issues

| Issue | Location | Severity | Description |
|-------|----------|----------|-------------|
| Very small text | All sections | ⚠️ Medium | Base text sizes of `0.4rem`–`0.65rem` (6–10px) may be illegible on small screens |
| Technology grid overlap | Technology | ⚠️ Low | 12-column grid with `lg:col-span-5/6/7` may not distribute evenly on some screen widths |
| Carousel arrow positioning | Solutions | ⚠️ Low | Absolute arrows may overlap cards on very narrow screens |
| Timeline icon offset | Deployment | ⚠️ Low | Manual `-left-[28px]` positioning is fragile |
| Glassmorphism on low-end | Navbar | ⚠️ Medium | `backdrop-filter: blur()` can cause jank on mobile |
| No landscape optimizations | Global | ⚠️ Medium | No specific handling for landscape phone orientation |
| Hero right panel overlap | Hero | ⚠️ Low | `lg:pr-[52%]` + `lg:w-[50%]` right panel may have 2% gap on exact breakpoint |
| Partner avatar shadows | Hero | ⚠️ Low | `boxShadow` on partner avatars uses non-theme color |

---

## 7.5 Responsive Improvements

1. **Increase minimum font size** on mobile to at least `0.5rem` (8px) for better readability
2. **Add `lg:` breakpoint** for ultra-wide screens (>1440px) to constrain max content width
3. **Test landscape tablet** — the side-by-side hero layout may need adjustment
4. **Add touch feedback** for carousel drag (currently only visual cursor change)
5. **Consider `container` queries** for truly independent card responsiveness

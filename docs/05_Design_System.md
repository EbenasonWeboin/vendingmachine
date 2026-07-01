# 5. Design System

## 5.1 Color System

The app uses a **multi-theme** color system managed via React Context.

### Theme Structure

Each theme is an object with 6 color slots:

```js
{
  primaryColor: "#...",    // Main brand color (used for backgrounds, buttons, accents)
  secondaryColor: "#...",  // Light background color
  lightPrimary: "#...",    // Lighter variant of primary (subtle accents, secondary text)
  darkPrimary: "#...",     // Darker variant (footer backgrounds, active states)
  darkText: "#...",        // Text on light backgrounds
  white: "#FFFFFF",        // Always white
}
```

### Available Themes

| Theme | primaryColor | secondaryColor | lightPrimary | darkPrimary | darkText |
|-------|-------------|---------------|-------------|-------------|---------|
| **Olive** (default) | `#4D5A27` | `#F8F6E8` | `#A3B18A` | `#37431C` | `#111B27` |
| **Ocean Blue** | `#011C40` | `#F8F6E8` | `#54ACBF` | `#023859` | `#011C40` |
| **Purple** | `#4F275A` | `#F8F6E8` | `#AA8AB1` | `#3E1C43` | `#271122` |
| **Burgundy** | `#561C24` | `#E8D8C4` | `#C7B7A3` | `#6D2932` | `#2D0F15` |
| **Brown Beige** | `#3E2522` | `#FFF2DF` | `#D3A376` | `#775244` | `#1E110F` |

### Color Usage by Component

| Component | Background | Text | Accent |
|-----------|-----------|------|--------|
| Hero | `primaryColor` | `white/80` | `secondaryColor` |
| Machines | `secondaryColor` | `darkText` | `primaryColor` |
| Technology | `primaryColor` | `secondaryColor` | `lightPrimary` |
| Solutions | `secondaryColor` | `darkText` | `primaryColor` |
| Deployment | `primaryColor` | `secondaryColor` | `lightPrimary` |
| Contact | `secondaryColor` | `darkText` | `primaryColor` |
| Footer | `darkPrimary` | `secondaryColor` | `lightPrimary` |
| Navbar (desktop) | Glassmorphism `secondaryColor` | `darkPrimary` | `primaryColor` |

### Color Opacity Pattern

The codebase uses Tailwind's opacity modifiers and inline `rgba()` strings extensively:

```
colors.primaryColor + "15"   →  #4D5A2715  (very subtle background)
colors.primaryColor + "25"   →  #4D5A2725  (border)
colors.secondaryColor + "99" →  #F8F6E899  (muted text)
```

Common opacity values:
- `08`–`15`: Subtle backgrounds, card fills
- `20`–`30`: Icon backgrounds, tag backgrounds
- `40`–`50`: Muted text, inactive elements
- `66`–`99`: Secondary text
- `CC`: High-emphasis secondary text

### Hardcoded Colors (Not Theme-Aware)

| Location | Color | Issue |
|----------|-------|-------|
| Hero CTA button | `bg-[#F8F6E8] text-[#2d3a1a]` | Ignores theme change |
| Partner avatar gradients | Hardcoded hex values | Won't adapt to theme |
| Hero image shadows | `rgba(0,0,0,0.45)` | Hardcoded black |
| Deployment card hover shadow | `rgba(163,177,138,0.5)` | Hardcoded to olive |

---

## 5.2 Typography

| Property | Value |
|----------|-------|
| Font Family | `Inter` (Google Fonts) |
| Fallback | `sans-serif` |
| Weights used | 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold) |
| Import | Google Fonts via `@import` in `index.css` |

### Font Size Scale

Sizes are set with Tailwind utilities and arbitrary values:

| Token | Size | Usage |
|-------|------|-------|
| `text-[0.4rem]` | ~6.4px | Partner initials |
| `text-[0.45rem]` | ~7.2px | Tag badges, copyright |
| `text-[0.5rem]` | ~8px | Feature tags, dot labels |
| `text-[0.55rem]` | ~8.8px | Step badges, contact labels |
| `text-[0.6rem]` | ~9.6px | Card descriptions, footer text |
| `text-[0.65rem]` | ~10.4px | Section taglines |
| `text-xs` | 12px | Body text, form inputs |
| `text-sm` | 14px | Descriptions |
| `text-base` | 16px | Card titles |
| `text-lg` | 18px | Hero description (desktop) |
| `text-2xl` | 24px | Section headings (mobile) |
| `text-3xl` | 30px | Section headings (tablet) |
| `text-4xl` | 36px | Section headings (desktop) |
| `text-7xl` | 72px | Hero heading (desktop) |

---

## 5.3 Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `py-12`, `py-16`, `py-20` | 48–80px | Section vertical padding |
| `px-5`, `px-8` | 20–32px | Section horizontal padding |
| `gap-4`, `gap-5`, `gap-6` | 16–24px | Grid gaps |
| `mb-10`, `mb-12` | 40–48px | Space below section headers |
| `mt-6`, `mt-10`, `mt-12` | 24–48px | Space between blocks within sections |
| `p-4`, `p-5` | 16–20px | Card padding |

---

## 5.4 Grid System

- Uses Tailwind CSS Grid
- Max container: `max-w-7xl` (80rem / 1280px)
- Section padding: `px-5 sm:px-8`
- Grid columns:
  - Machines: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
  - Technology: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-12` (with custom spans)
  - Contact: `grid-cols-1 lg:grid-cols-5`
  - Footer: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

---

## 5.5 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-full` | 9999px | Buttons, badges, icons, nav |
| `rounded-xl` | 12px | Cards, form inputs, dropdowns |
| `rounded-2xl` | 16px | Machine cards, tech cards |
| `rounded-3xl` | 24px | Machine cards (tablet+) |
| `rounded-lg` | 8px | Small icon containers |
| `rounded-t-[2rem]` | 32px | Hero right panel top corners |

---

## 5.6 Shadows

| Usage | Shadow Value |
|-------|-------------|
| Navbar | `0 18px 70px rgba(darkText, 0.45)` |
| Cards | `0 4px 24px rgba(darkText, 0.04)` |
| CTA hover | `shadow-lg` (Tailwind) |
| Mobile menu | `0 20px 60px rgba(darkText, 0.18)` |
| Timeline icons hover | `0 0 30px rgba(163,177,138, 0.5)` |
| Machine images | `drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]` |

---

## 5.7 Icon System

- **Library:** Lucide React v1.21
- **Style:** Outline, 16–18px default size
- **Color:** Inherits from parent or set via `style` prop
- **Icons used:** `Menu`, `X`, `Cpu`, `Wifi`, `Coffee`, `ShoppingBag`, `Smartphone`, `Shield`, `RefreshCw`, `BarChart3`, `Building2`, `GraduationCap`, `Hospital`, `ShoppingBag`, `Dumbbell`, `Hotel`, `ChevronLeft`, `ChevronRight`, `ClipboardList`, `Settings`, `Truck`, `Activity`, `Mail`, `Phone`, `MapPin`, `Send`, `Palette`

---

## 5.8 Theme Consistency Assessment

| Aspect | Score | Notes |
|--------|-------|-------|
| Theme-aware colors | ⚠️ Partial | Most components use `useColors()`, but some have hardcoded values |
| Typography | ✅ Consistent | Inter throughout, same size scale |
| Spacing | ✅ Consistent | Section padding, card gaps follow patterns |
| Border radius | ✅ Consistent | `rounded-xl` for cards, `rounded-full` for buttons |
| Button styles | ⚠️ Partial | CTA in Hero is hardcoded; nav buttons use theme |
| Card shadows | ⚠️ Partial | Varying shadow intensities across sections |
| Icon sizes | ✅ Consistent | Most icons are 14–18px |

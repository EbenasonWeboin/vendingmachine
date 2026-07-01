# 10. Assets

## 10.1 Images

| File | Path | Format | Size | Dimensions (approx) | Usage |
|------|------|--------|------|-------------------|-------|
| BlueVM.png | `src/assets/` | PNG | ~1,085 KB | Not specified (large) | Hero carousel, Machines card |
| GreenVM.png | `src/assets/` | PNG | ~1,155 KB | Not specified (large) | Hero carousel, Machines card |
| PurpleVM.png | `src/assets/` | PNG | ~1,022 KB | Not specified (large) | Hero carousel, Machines card |
| YellowVM.png | `src/assets/` | PNG | ~1,093 KB | Not specified (large) | Hero carousel, Machines card |

**Total image size:** ~4.3 MB (unoptimized)

### Image Notes
- All 4 images are **vending machine product photos** with transparent/light backgrounds
- Images are imported directly in JSX and used as `src` attributes
- No lazy loading (`loading="lazy"`) implemented
- No responsive image variants (same image for all screen sizes)
- No WebP or AVIF formats (all PNG)
- Large file sizes (~1MB each) will impact initial load time

### Image Optimization Recommendations
1. Convert to WebP with PNG fallback
2. Compress to reduce file sizes by 60-80%
3. Add `loading="lazy"` to below-fold images
4. Consider responsive `srcSet` for different viewport sizes

---

## 10.2 Icons

### Lucide React Icons

All icons are from the `lucide-react` library (v1.21), imported as components:

| Icon | Component | Used In |
|------|-----------|---------|
| `Menu` | Machines section | Navbar (mobile toggle) |
| `X` | Navbar (mobile close) |
| `Cpu` | Machines (feature grid) |
| `Wifi` | Machines, Technology |
| `Coffee` | Machines |
| `ShoppingBag` | Machines |
| `Smartphone` | Technology |
| `Shield` | Technology |
| `RefreshCw` | Technology |
| `BarChart3` | Technology |
| `Building2` | Solutions |
| `GraduationCap` | Solutions |
| `Hospital` | Solutions |
| `Dumbbell` | Solutions |
| `Hotel` | Solutions |
| `ChevronLeft` | Solutions (prev button) |
| `ChevronRight` | Solutions (next button) |
| `ClipboardList` | Deployment (step 1) |
| `Settings` | Deployment (step 2) |
| `Truck` | Deployment (step 3) |
| `Activity` | Deployment (step 4) |
| `Mail` | Contact, Footer |
| `Phone` | Contact, Footer |
| `MapPin` | Contact, Footer |
| `Send` | Contact (form button) |
| `Palette` | ThemeSelector |

### SVG Icons

**File:** `public/icons.svg`
- Purpose: ❓ Unable to determine (not referenced in any component)

**File:** `public/favicon.svg`
- Purpose: Browser tab icon
- Referenced in `index.html` line 5

---

## 10.3 Fonts

| Font | Provider | Weights | Usage |
|------|----------|---------|-------|
| Inter | Google Fonts | 100–900 | All text across the entire site |

**Import method:** `@import` in `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
```

**CSS variable:** `--font-sans: "Inter", sans-serif`

---

## 10.4 Asset Organization

```
src/
  assets/          → Images (vending machine photos)
  icons/           → ❌ Does not exist
  fonts/           → ❌ Does not exist (uses Google Fonts CDN)

public/
  favicon.svg      → Browser favicon
  icons.svg        → SVG sprite (unused)
```

---

## 10.5 Asset Summary

| Asset Type | Count | Total Size | Optimization Status |
|------------|-------|------------|-------------------|
| PNG images | 4 | ~4.3 MB | ❌ Unoptimized |
| SVG icons (Lucide) | ~27 | Bundled (negligible) | ✅ Tree-shaken |
| SVG files (public) | 2 | ~2 KB | ✅ Already small |
| Font (Inter) | 1 | CDN (variable) | ✅ Google Fonts CDN |

---

## 10.6 Asset Usage Matrix

| Section | Image | Icons | Font |
|---------|-------|-------|------|
| Hero | 4 VM images (carousel) | None | Inter |
| Machines | 4 VM images (cards) | Cpu, Wifi, Coffee, ShoppingBag | Inter |
| Technology | None | Cpu, Wifi, Smartphone, Shield, RefreshCw, BarChart3 | Inter |
| Solutions | None | Building2, GraduationCap, Hospital, ShoppingBag, Dumbbell, Hotel, ChevronLeft, ChevronRight | Inter |
| Deployment | None | ClipboardList, Settings, Truck, Activity | Inter |
| Contact | None | Mail, Phone, MapPin, Send | Inter |
| Footer | None | Mail, Phone, MapPin | Inter |
| Navbar | None | Menu, X | Inter |
| ThemeSelector | None | Palette | Inter |

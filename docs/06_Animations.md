# 6. Animations

## 6.1 Animation Libraries

The project uses two animation libraries plus native CSS animations:

| Library | Purpose | Version |
|---------|---------|---------|
| **GSAP 3** | Scroll-triggered animations, entrance effects, timeline scrub | `^3.15.0` |
| **Framer Motion 12** | Mobile menu enter/exit transitions | `^12.42.0` |
| **CSS** | Floating image, decorative keyframes | Native via `@theme` |

---

## 6.2 GSAP Animations

### Blur Reveal (`useBlurReveal` hook)

**File:** `src/hooks/useBlurReveal.js`

**Used in:** Hero, Machines, Technology, Solutions, Contact

```js
gsap.fromTo(target, {
  opacity: 0,
  filter: 'blur(12px)',
  y: 40,
}, {
  opacity: 1,
  filter: 'blur(0px)',
  y: 0,
  duration: 0.3,
  delay: 0.05 * i,          // Stagger by index
  ease: 'expo.inOut',
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top 90%',
    toggleActions: 'play none none none',
  },
});
```

| Parameter | Value | Notes |
|-----------|-------|-------|
| Duration | 0.3s | Fast, snappy |
| Stagger delay | 0.05s × index | Elements animate one after another |
| Ease | `expo.inOut` | Accelerates then decelerates |
| Trigger | Section container | All elements in section trigger together |
| Start | `top 90%` | Fires when section top reaches 90% of viewport |
| Blur start | 12px | Heavy initial blur |
| Y offset | 40px | Slides up while unblurring |

### Navbar Entrance

**File:** `src/components/Navbar.jsx`

**Desktop:**
```js
gsap.fromTo(desktopNavRef.current,
  { opacity: 0, y: -24, xPercent: -50 },
  { opacity: 1, y: 0, xPercent: -50, duration: 0.8, delay: 0.15, ease: "power3.out" }
);
```

**Mobile:**
```js
gsap.fromTo(mobileNavRef.current,
  { opacity: 0, y: -20, scale: 0.9 },
  { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.2, ease: "power3.out" }
);
```

### Hero Right Panel Entrance

**File:** `src/Sections/Hero.jsx`

```js
gsap.fromTo(rightRef.current,
  { opacity: 0, x: 120, scale: 0.92 },
  { opacity: 1, x: 0, scale: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
);
```

| Parameter | Value |
|-----------|-------|
| Duration | 1.2s |
| Delay | 0.3s |
| Ease | `power3.out` |
| Start | 120px right, 0.92 scale |

### Deployment Timeline

**File:** `src/Sections/Deployment.jsx`

**Timeline line scrub:**
```js
gsap.fromTo(line,
  { scaleY: 0, transformOrigin: "top center" },
  { scaleY: 1, duration: 1.6, ease: "none", scrollTrigger: { scrub: 1.4 } }
);
```

**Card entrance:**
```js
gsap.fromTo(card,
  { opacity: 0, filter: "blur(10px)", x: 60 },
  { opacity: 1, filter: "blur(0px)", x: 0, duration: 0.5, ease: "expo.in" }
);
```

**Header entrance:**
```js
gsap.fromTo(target,
  { opacity: 0, filter: "blur(10px)", y: 30 },
  { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.5, delay: 0.05 * i, ease: "power3.out" }
);
```

### Solutions Carousel Scroll

**File:** `src/Sections/Solutions.jsx`

```js
gsap.to(scrollRef.current, {
  scrollLeft: target,
  duration: 0.6,
  ease: "power3.out",
  overwrite: "auto",
});
```

---

## 6.3 Framer Motion Animations

**Used only in:** Navbar mobile menu (`AnimatePresence`)

```jsx
<motion.div
  initial={{ opacity: 0, y: -8, scale: 0.92 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -8, scale: 0.92 }}
>
```

| State | Opacity | Y | Scale |
|-------|---------|---|-------|
| Initial | 0 | -8px | 0.92 |
| Animate | 1 | 0 | 1 |
| Exit | 0 | -8px | 0.92 |

---

## 6.4 CSS Animations

### Float (Hero carousel images)

```css
@keyframes float {
  0%, 100% { translate: 0 0px; }
  50% { translate: 0 -12px; }
}
```
- Duration: 3s
- Easing: `ease-in-out`
- Infinite loop

### FadeInUp

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
- Duration: 0.7s
- Not used directly in components (defined but unused)

### SlideInRight

```css
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(60px); }
  to { opacity: 1; transform: translateX(0); }
}
```
- Defined but **not used** in any component

### ScaleIn

```css
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
}
```
- Defined but **not used** in any component

### PulseGlow

```css
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(248, 246, 232, 0.15); }
  50% { box-shadow: 0 0 40px rgba(248, 246, 232, 0.3); }
}
```
- Defined but **not used** in any component

---

## 6.5 Hover Animations

| Element | Effect | Duration | Easing |
|---------|--------|----------|--------|
| Navbar links | Indicator slide | 300ms | ease-out |
| Navbar CTA | Background + color swap | 300ms | default |
| Hero CTA | Lift + shadow | 300ms | default |
| Machine cards | Lift 4px, image scale 105% | 500ms | default |
| Technology cards | Lift 4px, icon scale 110% | 500ms | default |
| Deployment cards | Lift + scale 102% + background shift | 400ms | cubic-bezier |
| Timeline icons | Scale 125% + glow shadow | 500ms | default |
| Contact info cards | Lift 2px | 300ms | default |
| ThemeSelector circles | Scale 125% | default | default |
| ThemeSelector button | Scale 105% | default | default |

---

## 6.6 Animation Summary

| Animation | Library | Count | Performance |
|-----------|---------|-------|-------------|
| Blur reveal (scroll) | GSAP | ~40 targets | ⚠️ `filter: blur()` is GPU-intensive |
| Navbar entrance | GSAP | 2 targets | ✅ Lightweight |
| Hero panel entrance | GSAP | 1 target | ✅ Lightweight |
| Timeline scrub | GSAP | 1 target | ✅ Lightweight |
| Mobile menu | Framer Motion | 1 target | ✅ Lightweight |
| Carousel scroll | GSAP | per interaction | ✅ Lightweight |
| CSS float | CSS | 4 targets | ✅ GPU-accelerated |

### Performance Concern
The `useBlurReveal` hook animates the CSS `filter: blur()` property using GSAP. Blur filters trigger GPU composition and can cause jank on low-end devices, especially with many simultaneous targets. Consider reducing blur radius or using `will-change: filter` on animated elements.

### Unused Animations
4 CSS keyframe animations (`fadeInUp`, `slideInRight`, `scaleIn`, `pulseGlow`) are defined in `index.css` but never referenced in any component. These can be safely removed.

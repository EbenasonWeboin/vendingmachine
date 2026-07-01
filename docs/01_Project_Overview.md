# 1. Project Overview

## Project Purpose

VendMac is a single-page marketing landing page for a smart vending machine company. It presents the company's product lineup, technology stack, industry solutions, deployment process, and contact information — all on one scrollable page.

## Target Users

- Office managers and facility operators looking to install vending machines
- School administrators (K–12 and university)
- Hospital facility directors
- Gym/fitness center owners
- Hotel and hospitality managers
- Retail mall operators
- Any business with high foot traffic seeking unattended retail solutions

## Main Objective

Generate qualified leads by presenting VendMac as a premium, technology-driven vending solution. The page drives visitors toward the contact form (bottom of page) via progressive section reveals and compelling copy.

## Type of Website

- **Single-page application (SPA)** with anchor-based scrolling
- **Marketing landing page** with lead generation focus
- **No routing framework** — uses `id` anchor links and IntersectionObserver for active section tracking
- **No backend** — contact form is presentational only (no submission handler)

## Overall Layout

```
┌─────────────────────────────────────────┐
│            Navbar (fixed top)            │
├─────────────────────────────────────────┤
│              Hero (full viewport)        │
│   Text left  ·  Image carousel right     │
├─────────────────────────────────────────┤
│           Machines (4-column grid)       │
├─────────────────────────────────────────┤
│          Technology (6 cards grid)       │
├─────────────────────────────────────────┤
│         Solutions (horizontal carousel)  │
├─────────────────────────────────────────┤
│        Deployment (vertical timeline)    │
├─────────────────────────────────────────┤
│     Contact (info cards + form side-by)  │
├─────────────────────────────────────────┤
│              Footer (4-column grid)      │
├─────────────────────────────────────────┤
│    ThemeSelector (fixed bottom-right)    │
└─────────────────────────────────────────┘
```

## Design Philosophy

- **Olive-green aesthetic** — premium, natural, earthy tones convey reliability and sustainability
- **Glassmorphism** — frosted glass navbar with backdrop blur
- **Generous whitespace** — clean, uncluttered layouts
- **Progressive disclosure** — sections animate in as user scrolls (blur reveal)
- **Mobile-first responsive** — all sections adapt layout for small screens

## Brand Identity

| Element | Detail |
|---------|--------|
| **Brand name** | VendMac |
| **Brand mark** | Stylized "V" in a gradient circle |
| **Tagline** | "Smart Vending Machines For Modern Spaces" |
| **Voice** | Professional, confident, technology-forward |
| **Default theme** | Olive green (`#4D5A27` primary, `#F8F6E8` secondary) |
| **Alternate themes** | Ocean Blue, Purple, Burgundy, Brown Beige |

## Confidence Levels

| Item | Confidence | Notes |
|------|------------|-------|
| Project purpose | ✅ Confirmed | Inferred from sections & copy |
| Target users | ✅ Confirmed | Explicit in Solutions section |
| Design philosophy | ✅ Confirmed | Evident in all components |
| Brand identity | ✅ Confirmed | "VendMac" in footer, "V" logo throughout |
| No backend | ✅ Confirmed | Form has no `onSubmit` handler |

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# VendMac — Vending Machine Landing Page

## Documentation Index

| File | Description |
|------|-------------|
| [01_Project_Overview.md](./01_Project_Overview.md) | Project purpose, target users, design philosophy, brand identity |
| [02_Sitemap.md](./02_Sitemap.md) | Complete sitemap, navigation hierarchy, internal links |
| [03_Pages.md](./03_Pages.md) | Detailed page-by-page analysis (sections, layout, states) |
| [04_Components.md](./04_Components.md) | All reusable components, props, states, variants, accessibility |
| [05_Design_System.md](./05_Design_System.md) | Colors, typography, spacing, grid, shadows, theme system |
| [06_Animations.md](./06_Animations.md) | GSAP, Framer Motion, CSS animations, scroll-triggered effects |
| [07_Responsive.md](./07_Responsive.md) | Breakpoints, layout changes, mobile/tablet/desktop behavior |
| [08_User_Flows.md](./08_User_Flows.md) | Visitor journey, navigation, interactions, CTA flows |
| [09_Project_Structure.md](./09_Project_Structure.md) | Folder structure, component tree, hooks, context, routing |
| [10_Assets.md](./10_Assets.md) | Images, icons, fonts, SVGs, asset organization |
| [11_Improvement_Report.md](./11_Improvement_Report.md) | Code quality, performance, UX, accessibility, refactoring |

## Tech Stack

- **Framework:** React 19 with Vite 8
- **Language:** JavaScript (JSX)
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP 3 + ScrollTrigger, Framer Motion 12
- **Icons:** Lucide React
- **Build:** Vite 8 + Rolldown + Babel (React Compiler)
- **Linting:** ESLint with React Hooks & React Refresh plugins

## Quick Start

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run lint     # run linter
npm run preview  # preview production build
```

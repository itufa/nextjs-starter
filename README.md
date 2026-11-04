# Next.js Starter

**English** | [Русский](README.ru.md)

A micro-framework for landing pages and corporate websites built with the
Next.js App Router, TypeScript, Sass modules, and a custom design system.
No Tailwind.

## Features

- Next.js 16 App Router with static generation
- Custom SCSS design system with CSS variables
- Light and dark themes with no flash on load
- 28 UI components and 14 landing-page sections
- Accessible overlays: native `<dialog>` modals and drawers
- `Field` component with automatic `aria-describedby` wiring
- Server actions for contact and newsletter forms
- Toast queue via `ToastProvider` and `useToast`
- SEO metadata, OpenGraph image generation, sitemap and robots
- Unit tests (Vitest), E2E tests (Playwright), axe accessibility checks
- GitHub Actions CI

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5 (strict)
- Sass 1.105 + CSS modules
- ESLint 9, Prettier, Stylelint
- Vitest + Testing Library
- Playwright + axe-core

## Quick start

```bash
npm install
cp .env.example .env.local   # optional: NEXT_PUBLIC_SITE_URL
npm run dev
```

Open `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the built app |
| `npm run lint` | ESLint |
| `npm run lint:styles` | Stylelint for SCSS |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Unit tests (Vitest) |
| `npm run test:watch` | Vitest watch mode |
| `npm run test:e2e` | Playwright E2E |
| `npm run format` | Prettier |

If Playwright browsers are not installed locally:

```bash
CHROME_PATH=/usr/bin/chromium npm run test:e2e
```

## Routes

- `/` — component catalog.
- `/landing` — landing page composed from sections.
- `/app` — private-area demo with a `Sidebar`.
- `/app/settings` — settings form demo.
- `/privacy`, `/terms` — legal pages.
- `/sitemap.xml`, `/robots.txt` — generated from `config/site.ts`.
- `/icon.svg`, `/opengraph-image` — favicon and OpenGraph image.

Route groups do not affect URLs: `app/(marketing)`, `app/(app)`, `app/(legal)`.

## Project structure

```
app/
  (marketing)/landing/   landing page
  (app)/app/             private area with Sidebar
  (legal)/               privacy and terms
  actions/               server actions for forms
  layout.tsx             Navbar, Footer, ToastProvider, theme
  not-found.tsx, error.tsx, sitemap.ts, robots.ts
components/
  ui/                    atomic and composite components
  layout/                Navbar, Footer, Sidebar, Stack, Cluster, ...
  sections/              Hero, Features, Pricing, FAQ, ...
  icons/                 SVG icons
  demo/                  client-only demo wrappers
config/                  site.ts, nav.ts, theme.ts
lib/
  hooks/                 useDisclosure, useClickOutside, useTheme, ...
  seo/                   buildMetadata
  utils/                 formatDate, slugify
  cn.ts, fonts.ts, theme.ts
styles/                  tokens, themes, reset, base, grid, utilities, motion
types/                   shared types
e2e/                     Playwright tests
```

## Design system

- All values are CSS variables from `styles/tokens.scss`.
- Sass maps are used only for compile-time generation.
- Themes: `default` and `dark`, switched via `data-theme` on `<html>`.
- Components use `var(--*)` directly, never Sass variables at runtime.

## Theming

- The choice is stored in `localStorage` under the `theme` key.
- An inline script in `<head>` applies the theme before first paint.
- Without a saved choice, `prefers-color-scheme` is used.
- `ThemeToggle` uses `useTheme` and CSS-based icon switching.

## Components

The catalog at `/` demonstrates 28 UI components:

- **Atoms:** Button, Input, Textarea, Select, Checkbox, Radio, Switch, Label,
  Field, FieldError, Badge, Avatar, Divider, Spinner, Skeleton, Progress, Icon.
- **Composites:** Card, Alert, Accordion, Tabs, Dropdown, Tooltip, Popover,
  Modal, Drawer, Toast, Breadcrumbs, Pagination.
- **Layout:** Navbar, NavLinks, Hamburger, MobileMenu, Footer, Sidebar, Stack,
  Cluster, ThemeToggle.
- **Sections:** Hero, LogoCloud, Features, FeatureSplit, HowItWorks, Stats,
  Testimonials, Pricing, FAQ, CTA, ContactForm, Newsletter, Team, BlogGrid.

## Hooks

- `useDisclosure` — open/close/toggle state.
- `useClickOutside` — close on outside pointer events.
- `useLockScroll` — lock body scroll for Modal/Drawer.
- `useTheme` — read/write `data-theme` and localStorage.
- `useMediaQuery` — subscribe to a media query.
- `useReveal` — reveal on intersection via IntersectionObserver.

## Forms and notifications

- `Field` connects label, control, hint/error and `aria-describedby`.
- `ContactForm` and `Newsletter` are client components with `onSubmit`.
- `/landing` passes server actions from `app/actions/contact.ts`
  (validation plus a placeholder for email/DB integration).
- `ToastProvider` + `useToast` provide a notification queue; the provider is
  mounted in the root layout.

## SEO and OpenGraph

- `config/site.ts` — name, URL, description, locale.
- `lib/seo/buildMetadata` — canonical URL, OpenGraph, Twitter, robots.
- `app/opengraph-image.tsx` — generated 1200×630 image via `ImageResponse`.
- `sitemap.ts` and `robots.ts` use `NEXT_PUBLIC_SITE_URL`.

## Testing and CI

- Vitest + Testing Library for Field, Accordion, Tabs, formatDate, slugify.
- Playwright covers theme switching, mobile menu, forms, toast, dropdowns,
  404, `/app`, `/privacy`.
- `e2e/a11y.spec.ts` runs axe on the landing page (serious/critical).
- `.github/workflows/ci.yml` runs typecheck, lint, stylelint, unit tests,
  build and E2E.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and robots |

## Conventions

- Component files: `<Name>/<Name>.tsx`, `<Name>.module.scss`, `index.ts`.
- Shared types live in `types/index.ts`.
- Client components use `'use client'`.
- Accessibility: semantics, `aria-*`, focus states, Escape/outside click.
- Avoid new dependencies unless necessary.

Russian documentation: [README.ru.md](README.ru.md).
Task status: [what is to be done.md](<what is to be done.md>).

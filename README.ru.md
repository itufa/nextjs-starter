# Next.js Starter

[English](README.md) | **Русский**

Микро-фреймворк для лендингов и корпоративных сайтов: Next.js App Router,
TypeScript, Sass-модули и собственная дизайн-система без Tailwind.

## Стек

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5 (strict)
- Sass 1.105 + CSS-модули
- ESLint 9, Prettier, Stylelint
- Vitest + Testing Library
- Playwright + axe-core

## Быстрый старт

```bash
npm install
cp .env.example .env.local   # по желанию: NEXT_PUBLIC_SITE_URL
npm run dev
```

Приложение откроется на `http://localhost:3000`.

## Скрипты

| Команда | Что делает |
|---|---|
| `npm run dev` | Dev-сервер |
| `npm run build` | Production-сборка |
| `npm run start` | Запуск собранного приложения |
| `npm run lint` | ESLint |
| `npm run lint:styles` | Stylelint для SCSS |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Юнит-тесты (Vitest) |
| `npm run test:watch` | Vitest в watch-режиме |
| `npm run test:e2e` | Playwright E2E |
| `npm run format` | Prettier |

Для E2E без установленного браузера Playwright:

```bash
CHROME_PATH=/usr/bin/chromium npm run test:e2e
```

## Маршруты

- `/` — каталог компонентов.
- `/landing` — пример лендинга из секций.
- `/app` — демо приватной части с `Sidebar`.
- `/app/settings` — пример формы настроек.
- `/privacy`, `/terms` — legal-страницы.
- `/sitemap.xml`, `/robots.txt` — генерируются из `config/site.ts`.
- `/icon.svg`, `/opengraph-image` — favicon и OG-картинка.

Route groups не влияют на URL: `app/(marketing)`, `app/(app)`, `app/(legal)`.

## Структура

```
app/
  (marketing)/landing/   лендинг
  (app)/app/             приватная часть с Sidebar
  (legal)/               privacy и terms
  actions/               server actions для форм
  layout.tsx             Navbar, Footer, ToastProvider, тема
  not-found.tsx, error.tsx, sitemap.ts, robots.ts
components/
  ui/                    атомы и составные компоненты
  layout/                Navbar, Footer, Sidebar, Stack, Cluster, ...
  sections/              Hero, Features, Pricing, FAQ, и т.д.
  icons/                 SVG-иконки
  demo/                  клиентские обёртки для демо
config/                  site.ts, nav.ts, theme.ts
lib/
  hooks/                 useDisclosure, useClickOutside, useTheme, ...
  seo/                   buildMetadata
  utils/                 formatDate, slugify
  cn.ts, fonts.ts, theme.ts
styles/                  токены, темы, reset, base, grid, утилиты, motion
types/                   общие типы
e2e/                     Playwright-тесты
```

## Дизайн-система

- Все значения — CSS-переменные из `styles/tokens.scss`.
- Sass-карты используются только для compile-time генерации.
- Темы: `default` и `dark`, переключаются атрибутом `data-theme` на `<html>`.
- Компоненты не используют Sass-переменные напрямую — только `var(--*)`.

## Темы

- Выбор хранится в `localStorage` под ключом `theme`.
- Inline-скрипт в `<head>` выставляет тему до первой отрисовки.
- Если выбора нет — используется системная `prefers-color-scheme`.
- `ThemeToggle` использует `useTheme` и CSS-переключение иконок.

## Иконки

`components/icons` — обёртки над `Icon`:
`ArrowRight`, `ArrowLeft`, `Check`, `Close`, `Menu`, `Sun`, `Moon`, `Search`,
`ChevronDown`, `ChevronRight`, `Plus`, `ExternalLink`.

## Хуки

- `useDisclosure` — open/close/toggle для меню и поповеров.
- `useClickOutside` — закрытие по клику вне.
- `useLockScroll` — блокировка скролла для Modal/Drawer.
- `useTheme` — чтение/запись темы через `data-theme` и localStorage.
- `useMediaQuery` — подписка на media query.
- `useReveal` — появление элемента через IntersectionObserver.

## Формы и уведомления

- `Field` связывает label, контрол, hint/error и `aria-describedby`.
- `ContactForm` и `Newsletter` — клиентские компоненты с `onSubmit`.
- `/landing` передаёт им server actions из `app/actions/contact.ts`
  (валидация + заготовка для отправки письма/записи в БД).
- `ToastProvider` + `useToast` — очередь уведомлений; провайдер подключён в root layout.

## SEO

- `config/site.ts` — название, URL, описание, locale.
- `lib/seo/buildMetadata` — canonical, OpenGraph, Twitter, robots.
- `app/opengraph-image.tsx` — OG-изображение 1200×630.
- `sitemap.ts` и `robots.ts` используют `NEXT_PUBLIC_SITE_URL`.

## Тесты и CI

- `components/**/*.test.tsx`, `lib/**/*.test.ts` — Vitest + Testing Library.
- `e2e/` — Playwright: тема, мобильное меню, формы, 404, `/app`, `/privacy`.
- `e2e/a11y.spec.ts` — axe-проверка лендинга (serious/critical).
- CI: `.github/workflows/ci.yml` — typecheck, lint, stylelint, unit, build, e2e.

## Переменные окружения

| Переменная | Назначение |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Канонический URL для metadata, sitemap и robots |

## Соглашения

- Файлы компонентов: `<Name>/<Name>.tsx`, `<Name>.module.scss`, `index.ts`.
- Общие типы — в `types/index.ts`.
- Интерактивные компоненты помечаются `'use client'`.
- Доступность: семантика, `aria-*`, фокус-состояния, Escape/клик вне для оверлеев.
- Не добавляйте зависимости без необходимости.

Актуальный статус задач — в [what is to be done.md](<what is to be done.md>).

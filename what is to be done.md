# Список того, что предстоит сделать

**Статус: весь чек-лист закрыт.** Ниже — что именно сделано и зачем.

## `components/ui/` — UI-компоненты

### Простые (атомы)

- [x] `Button` — кнопка: варианты primary/secondary/ghost/outline, размеры, disabled, иконки.
- [x] `Input` — текстовое поле: размеры, ошибка, иконки, disabled.
- [x] `Textarea` — многострочное поле: размеры, ошибка, disabled.
- [x] `Select` — выпадающий список с placeholder и размерами.
- [x] `Checkbox` — чекбокс: checked, disabled, error, размеры.
- [x] `Radio` — радиокнопка для групп по `name`.
- [x] `Switch` — переключатель на `role="switch"`.
- [x] `Label` — подпись к контролу.
- [x] `Field` — обёртка label + контрол + hint/error; связывает `id`, `required`, `aria-invalid`, `aria-describedby`.
- [x] `FieldError` — текст ошибки; остаётся примитивом для групп и кастомных раскладок.
- [x] `Badge` — метка: 7 вариантов, точка, размеры.
- [x] `Avatar` — аватар: изображение или инициалы.
- [x] `Divider` — горизонтальный/вертикальный разделитель, подпись.
- [x] `Spinner` — индикатор загрузки с `role="status"`.
- [x] `Skeleton` — заглушка text/circle/rect.
- [x] `Progress` — прогресс-бар, в том числе бесконечный.
- [x] `Icon` — обёртка для SVG: размер, `currentColor`, подпись.

### Составные

- [x] `Card` — карточка с заголовком, описанием и футером.
- [x] `Alert` — сообщение info/success/warning/danger.
- [x] `Accordion` — аккордеон с `aria-expanded` и анимацией высоты.
- [x] `Tabs` — табы с навигацией стрелками и Home/End.
- [x] `Dropdown` — меню с закрытием по клику вне и Escape.
- [x] `Tooltip` — подсказка по hover/focus.
- [x] `Popover` — всплывающее окно с клонированием aria-атрибутов на триггер.
- [x] `Modal` — модалка на нативном `<dialog>`: focus trap, Escape, блокировка скролла.
- [x] `Drawer` — выдвижная панель left/right на `<dialog>`.
- [x] `Toast` — уведомление; плюс `ToastProvider` и `useToast` для очереди.
- [x] `Breadcrumbs` — хлебные крошки с `aria-current`.
- [x] `Pagination` — пагинация с ellipsis и `hrefForPage`.

## `components/layout/` — каркас

- [x] `Navbar` — верхняя навигация, sticky, мобильный режим.
- [x] `NavLinks` — ссылки `next/link` с активным состоянием по pathname/hash.
- [x] `Hamburger` — кнопка-гамбургер, превращается в крестик.
- [x] `MobileMenu` — мобильное меню на `Drawer`.
- [x] `Footer` — нижний блок: бренд, колонки ссылок, copyright.
- [x] `Sidebar` — боковая навигация для `(app)`.
- [x] `Stack` — вертикальный ритм с gap xs–xl.
- [x] `Cluster` — горизонтальная группа с wrap/align/justify.
- [x] `ThemeToggle` — переключатель темы на `useTheme`, без вспышки.

## `components/sections/` — блоки лендинга

- [x] `Hero` — первый экран: eyebrow, заголовок, описание, CTA, медиа.
- [x] `LogoCloud` — логотипы клиентов.
- [x] `Features` — сетка возможностей с иконками.
- [x] `FeatureSplit` — картинка + текст, с reversal и bullets.
- [x] `HowItWorks` — шаги 01/02/03.
- [x] `Stats` — цифры проекта.
- [x] `Testimonials` — отзывы с авторами и аватарами.
- [x] `Pricing` — тарифы с популярным планом и CTA-слотом.
- [x] `FAQ` — частые вопросы на `Accordion`.
- [x] `CTA` — финальный призыв.
- [x] `ContactForm` — контактная форма на `Field`, с onSubmit и состояниями.
- [x] `Newsletter` — подписка на рассылку.
- [x] `Team` — команда.
- [x] `BlogGrid` — сетка статей.

## `components/icons/` — SVG-иконки

- [x] `ArrowRight`, `ArrowLeft` — стрелки.
- [x] `Check` — галочка; используется в FeatureSplit и Pricing.
- [x] `Close` — крестик.
- [x] `Menu` — меню.
- [x] `Sun`, `Moon` — иконки темы; используются в ThemeToggle.
- [x] `Search` — поиск.
- [x] `ChevronDown`, `ChevronRight` — шевроны.
- [x] `Plus`, `ExternalLink` — дополнительные иконки.

## `lib/` — утилиты и хуки

### Хуки

- [x] `useMediaQuery` — подписка на media query через `useSyncExternalStore`.
- [x] `useLockScroll` — блокировка скролла; используется в Modal/Drawer.
- [x] `useReveal` — появление через IntersectionObserver.
- [x] `useTheme` — чтение/запись темы через `data-theme` и localStorage.
- [x] `useClickOutside` — закрытие Dropdown/Popover по клику вне.
- [x] `useDisclosure` — open/close/toggle.

### Утилиты

- [x] `formatDate` — форматирование даты через Intl.
- [x] `slugify` — транслитерация кириллицы и slug.

### SEO

- [x] `buildMetadata` — canonical, OpenGraph, Twitter, robots. Используется на `/landing`, `/app`, `/privacy`, `/terms`.

## `config/` — конфиги

- [x] `site.ts` — название, URL, описание, locale; URL из `NEXT_PUBLIC_SITE_URL`.
- [x] `nav.ts` — ссылки навигации.
- [x] `theme.ts` — ключ хранения, дефолтная тема, список тем.

## `app/` — страницы

- [x] `app/page.tsx` — каталог компонентов.
- [x] `app/(marketing)/landing/page.tsx` — лендинг в route group.
- [x] `app/(app)/app/` — приватная часть с `Sidebar`, `/app` и `/app/settings`.
- [x] `app/(legal)/` — `/privacy` и `/terms`.
- [x] `app/not-found.tsx` — 404 с metadata.
- [x] `app/error.tsx` — error boundary с reset.
- [x] `app/sitemap.ts` — sitemap из `siteConfig`.
- [x] `app/robots.ts` — robots + sitemap.
- [x] `app/opengraph-image.tsx` — OG-изображение 1200×630.
- [x] `app/icon.svg` — favicon.

## Инфраструктура

- [x] Тёмная тема и переключатель без вспышки.
- [x] `types/index.ts` — Theme, NavLink, FormStatus, SiteConfig.
- [x] README — стек, маршруты, структура, темы, тесты, env.
- [x] `typecheck`, `lint:styles`, `format`, `test`, `test:e2e` скрипты.
- [x] Prettier и Stylelint конфиги.
- [x] Удалён неиспользуемый `clsx`.
- [x] `.env.example` + `!.env.example` в `.gitignore`.
- [x] Sass `if()` заменён на функцию `pick` — предупреждений 0.
- [x] `--color-bg-subtle` в светлой теме исправлен на `#fafafa`.
- [x] Контраст `Button secondary` исправлен через `--color-secondary-fg`.
- [x] Контраст мелкого текста (`fg-muted`, логи, футер, блог) исправлен.

## Тесты и CI

- [x] Vitest + Testing Library: `Field`, `Accordion`, `Tabs`, `formatDate`, `slugify` — 10 тестов.
- [x] Playwright: лендинг, тема, мобильное меню, форма, toast, dropdown/popover, 404, `/app`, `/privacy` — 9 тестов.
- [x] axe-проверка лендинга: 0 serious/critical нарушений.
- [x] CI: typecheck, lint, stylelint, unit, build, e2e.

## Проверки

```bash
npm run typecheck
npm run lint
npm run lint:styles
npm test
npm run build
CHROME_PATH=/usr/bin/chromium npm run test:e2e
```

## Идеи на будущее (не входят в текущий чек-лист)

- Авторизация и реальная БД вместо демо-кабинета.
- Отправка писем/CRM в server actions вместо заготовки.
- i18n и MDX-блог.
- Storybook или отдельная документация компонентов.
- Command palette на `Cmd+K`.
- Пресеты акцентного цвета.

# Список того, что предстоит сделать

## components/ui/ — UI-компоненты

### Простые (атомы):

- [x] `Button` — кнопка. 
- [x] `Input` — текстовое поле.
- [x] `Textarea` — многострочное.
- [x] `Select` — выпадающий список.
- [x] `Checkbox` — чекбокс.
- [x] `Radio` — радио.
- [x] `Switch` — переключатель.
- [x] `Label` — подпись.
- [x] `Field` — обёртка label + input + ошибка.
- [x] `Badge` — бейдж/метка.
- [x] `Avatar` — аватар.
- [x] `Divider` — разделитель.
- [x] `Spinner` — индикатор загрузки.
- [x] `Skeleton` — скелетон.
- [x] `Progress` — прогресс-бар.
- [x] `Icon` — обёртка для SVG.


### Составные:

- [x] `Card` — карточка.
- [x] `Alert` — сообщение.
- [x] `Accordion` — аккордеон.
- [x] `Tabs` — табы.
- [x] `Dropdown` — выпадающее меню.
- [x] `Tooltip` — подсказка.
- [x] `Popover` — всплывающее окно.
- [x] `Modal` — модальное окно.
- [x] `Drawer` — выдвижная панель.
- [x] `Toast` — всплывающее уведомление.
- [x] `Breadcrumbs` — хлебные крошки.
- [x] `Pagination` — пагинация.
 

## `components/layout/` — каркас

- [x] `Navbar` — верхняя навигация.
- [x] `NavLinks` — ссылки в navbar.
- [x] `Hamburger` — кнопка-гамбургер.
- [x] `MobileMenu` — мобильное меню.
- [x] `Footer` — нижний блок.
- [x] `Sidebar` — боковая навигация (для `(app)`).
- [x] `Stack` — вертикальный ритм.
- [x] `Cluster` — горизонтальная группа.
- [x] `ThemeToggle` — переключатель темы.
  

## `components/sections/` — блоки лендинга

- [x] `Hero` — первый экран.
- [x] `LogoCloud` — логотипы клиентов.
- [x] `Features` — сетка возможностей.
- [x] `FeatureSplit` — картинка + текст.
- [x] `HowItWorks` — шаги.
- [x] `Stats` — цифры.
- [x] `Testimonials` — отзывы.
- [x] `Pricing` — тарифы.
- [x] `FAQ` — частые вопросы.
- [x] `CTA` — финальный призыв.
- [x] `ContactForm` — контактная форма.
- [x] `Newsletter` — подписка.
- [x] `Team` — команда.
- [x] `BlogGrid` — сетка статей.
 

## `components/icons/` — SVG-иконки

- [ ] `ArrowRight`, `ArrowLeft`, `Check`, `Close`, `Menu`, `Sun`, `Moon`, `Search`, `ChevronDown`, `ChevronRight` и так далее.
  

## `lib/` — утилиты и хуки
  
### Хуки:

- [ ] `useMediaQuery`
- [ ] `useLockScroll`
- [ ] `useReveal`
- [ ] `useTheme`
- [ ] `useClickOutside`
- [ ] `useDisclosure`
 

### Утилиты:

- [ ] `formatDate`
- [ ] `slugify`
 

### SEO:

- [ ] `buildMetadata`
 

## `config/` — конфиги
 
- [ ] `site.ts` — название, URL, описание.
- [ ] `nav.ts` — ссылки навигации.
- [ ] `theme.ts` — настройки темы.
  

## `app/` — страницы

- [ ] `app/page.tsx` — главная.
- [ ] `app/(marketing)/` — лендинг.
- [ ] `app/(app)/` — приватная часть.
- [ ] `app/(legal)/` — legal-страницы.
- [ ] `app/not-found.tsx`
- [ ] `app/error.tsx`
- [ ] `app/sitemap.ts`
- [ ] `app/robots.ts`


## Инфраструктура

- [x] Тёмная тема (переключатель).
- [ ] Типы (`types/index.ts`).
- [ ] README.
 

## Порядок по приоритету

### Этап 1 — база UI:

1. `Input` ← следующий.
2. `Card`.
3. `Badge`.
4. `Divider`.

### Этап 2 — каркас:

5. `Navbar` + `Hamburger` + `MobileMenu`.
6. `Footer`.

### Этап 3 — секции:

7. `Hero`, `Features`, `Pricing`, `FAQ`, `CTA`.

8. Остальные по надобности.
  

### Этап 4 — интерактив:

9. `Modal`, `Dropdown`, `Accordion`, `Tabs`, `Tooltip`.
 

### Этап 5 — формы:

10. `Checkbox`, `Radio`, `Switch`, `Select`, `Field`.
11. `ContactForm`.


### Этап 6 — утилиты:

12. Хуки, `config/`, тёмная тема.
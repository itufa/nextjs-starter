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

- [ ] `Card` — карточка.
- [ ] `Alert` — сообщение.
- [ ] `Accordion` — аккордеон.
- [ ] `Tabs` — табы.
- [ ] `Dropdown` — выпадающее меню.
- [ ] `Tooltip` — подсказка.
- [ ] `Popover` — всплывающее окно.
- [ ] `Modal` — модальное окно.
- [ ] `Drawer` — выдвижная панель.
- [ ] `Toast` — всплывающее уведомление.
- [ ] `Breadcrumbs` — хлебные крошки.
- [ ] `Pagination` — пагинация.
 

## `components/layout/` — каркас

- [ ] `Navbar` — верхняя навигация.
- [ ] `NavLinks` — ссылки в navbar.
- [ ] `Hamburger` — кнопка-гамбургер.
- [ ] `MobileMenu` — мобильное меню.
- [ ] `Footer` — нижний блок.
- [ ] `Sidebar` — боковая навигация (для `(app)`).
- [ ] `Stack` — вертикальный ритм.
- [ ] `Cluster` — горизонтальная группа.
- [ ] `ThemeToggle` — переключатель темы.
  

## `components/sections/` — блоки лендинга

- [ ] `Hero` — первый экран.
- [ ] `LogoCloud` — логотипы клиентов.
- [ ] `Features` — сетка возможностей.
- [ ] `FeatureSplit` — картинка + текст.
- [ ] `HowItWorks` — шаги.
- [ ] `Stats` — цифры.
- [ ] `Testimonials` — отзывы.
- [ ] `Pricing` — тарифы.
- [ ] `FAQ` — частые вопросы.
- [ ] `CTA` — финальный призыв.
- [ ] `ContactForm` — контактная форма.
- [ ] `Newsletter` — подписка.
- [ ] `Team` — команда.
- [ ] `BlogGrid` — сетка статей.
 

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

- [ ] Тёмная тема (переключатель).
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
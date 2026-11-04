// ============================================================
// config/nav.ts
// ------------------------------------------------------------
// Единый источник ссылок навигации.
// Используется в Navbar (layout) и в демо-меню.
// ============================================================

import type { NavLink } from '@/components/layout'

export const navLinks: NavLink[] = [
	{ label: 'Действия', href: '#actions' },
	{ label: 'Формы', href: '#forms' },
	{ label: 'Данные', href: '#data' },
	{ label: 'Составные', href: '#composites' },
	{ label: 'Каркас', href: '#layout' },
	{ label: 'Иконки', href: '#icons' },
	{ label: 'Сетка', href: '#grid' },
]

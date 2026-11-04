// ============================================================
// config/nav.ts
// ------------------------------------------------------------
// Единый источник ссылок навигации.
// Используется в Navbar (layout), футере и демо-меню.
// ============================================================

import type { NavLink } from '@/types'

export const navLinks: NavLink[] = [
	{ label: 'Лендинг', href: '/landing' },
	{ label: 'Действия', href: '/#actions' },
	{ label: 'Формы', href: '/#forms' },
	{ label: 'Данные', href: '/#data' },
	{ label: 'Составные', href: '/#composites' },
	{ label: 'Каркас', href: '/#layout' },
	{ label: 'Иконки', href: '/#icons' },
	{ label: 'Кабинет', href: '/app' },
	{ label: 'Настройки', href: '/app/settings' },
	{ label: 'Политика', href: '/privacy' },
	{ label: 'Условия', href: '/terms' },
]

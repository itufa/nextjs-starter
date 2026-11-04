// ============================================================
// lib/fonts.ts
// ------------------------------------------------------------
// Все шрифты проекта. Единственное место подключения.
//
// Имя переменной = имя шрифта:
//   Inter          → --font-inter
//   JetBrains Mono → --font-jetbrains-mono
//
// Чтобы добавить шрифт:
//   1. Добавь export const xxx = Xxx({ variable: "--font-xxx", ... })
//   2. Добавь xxx в объект `fonts` ниже
//   3. Примени в CSS: font-family: var(--font-xxx)
// ============================================================

import { Inter, JetBrains_Mono } from 'next/font/google'

// ------------------------------------------------------------
// Подключение шрифтов
// ------------------------------------------------------------

export const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
	display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap',
})

// ------------------------------------------------------------
// Реестр шрифтов
// ------------------------------------------------------------
// Используется в layout.tsx через getFontClassNames().
// Добавил новый шрифт — допиши его сюда.

export const fonts = {
	inter,
	jetbrainsMono,
} as const

// ------------------------------------------------------------
// Хелпер для <html className>
// ------------------------------------------------------------

export function getFontClassNames(): string {
	return Object.values(fonts)
		.map(f => f.variable)
		.join(' ')
}

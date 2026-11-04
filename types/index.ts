// ============================================================
// types/index.ts
// ------------------------------------------------------------
// Общие типы проекта.
// ============================================================

import type { ReactNode } from 'react'

export type Theme = 'default' | 'dark'

export type NavLink = {
	label: string
	href: string
	icon?: ReactNode
}

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export type SiteConfig = {
	name: string
	description: string
	url: string
	locale: string
}

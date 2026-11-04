// ============================================================
// config/site.ts
// ------------------------------------------------------------
// Базовые данные сайта (metadata, sitemap, robots).
//
// URL задаётся через NEXT_PUBLIC_SITE_URL, иначе — заглушка.
// ============================================================

import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
	name: 'Next.js Starter',
	description:
		'Микро-фреймворк для лендингов и корпоративных сайтов: Next.js, TypeScript, Sass и собственная дизайн-система.',
	url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextjs-starter.example',
	locale: 'ru_RU',
}

// ============================================================
// app/layout.tsx
// ------------------------------------------------------------
// Корневой layout приложения.
// ============================================================

import type { Metadata, Viewport } from 'next'
import { getFontClassNames } from '@/lib/fonts'

import './globals.scss'

export const metadata: Metadata = {
	title: {
		default: 'Next.js Starter',
		template: '%s | Next.js Starter',
	},
	description: 'Микро-фреймворк для лендингов и корпоративных сайтов',
	metadataBase: new URL('https://example.com'),
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		siteName: 'Next.js Starter',
	},
	twitter: {
		card: 'summary_large_image',
	},
	icons: {
		icon: '/favicon.ico',
	},
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			data-theme='default'
			className={getFontClassNames()}
			suppressHydrationWarning
		>
			<body>{children}</body>
		</html>
	)
}

// ============================================================
// app/layout.tsx
// ------------------------------------------------------------
// Корневой layout приложения.
// ============================================================

import type { Metadata, Viewport } from 'next'
import { Footer, Navbar, ThemeToggle } from '@/components/layout'
import type { FooterColumn } from '@/components/layout'
import { navLinks } from '@/config/nav'
import { getFontClassNames } from '@/lib/fonts'
import { themeInitScript } from '@/lib/theme'

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

const footerColumns: FooterColumn[] = [
	{
		title: 'Компоненты',
		links: [
			{ label: 'Формы', href: '#forms' },
			{ label: 'Составные', href: '#composites' },
			{ label: 'Каркас', href: '#layout' },
		],
	},
	{
		title: 'Ресурсы',
		links: [
			{ label: 'Документация', href: '#docs' },
			{ label: 'GitHub', href: '#github' },
		],
	},
	{
		title: 'Компания',
		links: [
			{ label: 'О проекте', href: '#about' },
			{ label: 'Контакты', href: '#contacts' },
		],
	},
]

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
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>

			<body>
				<Navbar
					brand='Next.js Starter'
					links={navLinks}
					actions={<ThemeToggle />}
					sticky
				/>

				{children}

				<Footer
					brand='Next.js Starter'
					description='Микро-фреймворк для лендингов и корпоративных сайтов.'
					columns={footerColumns}
					copyright='© 2026 Next.js Starter'
				/>
			</body>
		</html>
	)
}

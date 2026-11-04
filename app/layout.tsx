// ============================================================
// app/layout.tsx
// ------------------------------------------------------------
// Корневой layout приложения.
// ============================================================

import type { Metadata, Viewport } from 'next'
import { Footer, Navbar, ThemeToggle } from '@/components/layout'
import type { FooterColumn } from '@/components/layout'
import { ToastProvider } from '@/components/ui'
import { navLinks } from '@/config/nav'
import { siteConfig } from '@/config/site'
import { getFontClassNames } from '@/lib/fonts'
import { themeInitScript } from '@/lib/theme'

import './globals.scss'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.url),
	openGraph: {
		type: 'website',
		locale: siteConfig.locale,
		siteName: siteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
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
			{ label: 'Формы', href: '/#forms' },
			{ label: 'Составные', href: '/#composites' },
			{ label: 'Каркас', href: '/#layout' },
		],
	},
	{
		title: 'Страницы',
		links: [
			{ label: 'Лендинг', href: '/landing' },
			{ label: 'Кабинет', href: '/app' },
			{ label: 'Настройки', href: '/app/settings' },
		],
	},
	{
		title: 'Компания',
		links: [
			{ label: 'Политика', href: '/privacy' },
			{ label: 'Условия', href: '/terms' },
			{ label: 'GitHub', href: '#github' },
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
				<ToastProvider>
					<Navbar
						brand={siteConfig.name}
						links={navLinks}
						actions={<ThemeToggle />}
						sticky
					/>

					{children}

					<Footer
						brand={siteConfig.name}
						description={siteConfig.description}
						columns={footerColumns}
						copyright={`© 2026 ${siteConfig.name}`}
					/>
				</ToastProvider>
			</body>
		</html>
	)
}

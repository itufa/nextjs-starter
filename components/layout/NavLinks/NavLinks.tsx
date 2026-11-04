// ============================================================
// components/layout/NavLinks/NavLinks.tsx
// ------------------------------------------------------------
// Ссылки навигации.
//
// links:       ({ label, href, icon? })
// orientation: horizontal | vertical
// activeHref:  принудительно активная ссылка
// onNavigate:  колбэк после клика (удобно для закрытия меню)
//
// Пример:
//   <NavLinks links={[{ label: "Главная", href: "/" }]} />
// ============================================================

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import styles from './NavLinks.module.scss'

export type NavLink = {
	label: string
	href: string
	icon?: React.ReactNode
}

type NavLinksProps = {
	links: NavLink[]
	orientation?: 'horizontal' | 'vertical'
	activeHref?: string
	onNavigate?: () => void
	className?: string
}

export function NavLinks({
	links,
	orientation = 'horizontal',
	activeHref,
	onNavigate,
	className,
}: NavLinksProps) {
	const pathname = usePathname()
	const [hash, setHash] = useState('')

	useEffect(() => {
		const syncHash = () => setHash(window.location.hash)

		syncHash()
		window.addEventListener('hashchange', syncHash)
		window.addEventListener('popstate', syncHash)

		return () => {
			window.removeEventListener('hashchange', syncHash)
			window.removeEventListener('popstate', syncHash)
		}
	}, [pathname])

	const current = activeHref ?? (hash || pathname)

	return (
		<ul className={cn(styles.list, styles[orientation], className)}>
			{links.map(link => {
				const active = link.href === current

				return (
					<li key={link.href}>
						<Link
							href={link.href}
							aria-current={active ? 'page' : undefined}
							className={cn(styles.link, active && styles.active)}
							onClick={() => {
								if (link.href.startsWith('#')) {
									setHash(link.href)
								}

								onNavigate?.()
							}}
						>
							{link.icon && (
								<span className={styles.icon} aria-hidden='true'>
									{link.icon}
								</span>
							)}
							<span>{link.label}</span>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

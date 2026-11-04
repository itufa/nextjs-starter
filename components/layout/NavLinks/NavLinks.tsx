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
import type { NavLink } from '@/types'
import { cn } from '@/lib/cn'
import styles from './NavLinks.module.scss'

type NavLinksProps = {
	links: NavLink[]
	orientation?: 'horizontal' | 'vertical'
	activeHref?: string
	onNavigate?: () => void
	className?: string
}

function isActiveLink(href: string, pathname: string, hash: string) {
	const [path, linkHash] = href.split('#')

	if (linkHash) {
		const samePath = path === '' || path === pathname
		return samePath && hash === `#${linkHash}`
	}

	return href === pathname
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

	const currentHash = hash

	return (
		<ul className={cn(styles.list, styles[orientation], className)}>
			{links.map(link => {
				const active = activeHref
					? link.href === activeHref
					: isActiveLink(link.href, pathname, currentHash)
				return (
					<li key={link.href}>
						<Link
							href={link.href}
							aria-current={active ? 'page' : undefined}
							className={cn(styles.link, active && styles.active)}
							onClick={() => {
								const linkHash = link.href.split('#')[1]

								if (linkHash) {
									setHash(`#${linkHash}`)
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

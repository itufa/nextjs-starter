// ============================================================
// components/layout/Navbar/Navbar.tsx
// ------------------------------------------------------------
// Верхняя навигация.
//
// brand:   логотип/название
// links:   ссылки (NavLink[])
// actions: правый слот (например, ThemeToggle)
// sticky:  прилипание к верху
//
// На мобильных ссылки прячутся, появляется Hamburger.
//
// Пример:
//   <Navbar
//     brand="Next.js Starter"
//     links={links}
//     actions={<ThemeToggle />}
//     sticky
//   />
// ============================================================

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import { Hamburger } from '../Hamburger'
import { MobileMenu } from '../MobileMenu'
import { NavLinks, type NavLink } from '../NavLinks'
import styles from './Navbar.module.scss'

type NavbarProps = {
	brand?: React.ReactNode
	brandHref?: string
	links: NavLink[]
	actions?: React.ReactNode
	sticky?: boolean
	className?: string
}

export function Navbar({
	brand,
	brandHref = '/',
	links,
	actions,
	sticky = false,
	className,
}: NavbarProps) {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header
			className={cn(styles.navbar, sticky && styles.sticky, className)}
		>
			<div className={styles.inner}>
				{brand && (
					<Link href={brandHref} className={styles.brand}>
						{brand}
					</Link>
				)}

				<nav className={styles.desktop} aria-label='Основная навигация'>
					<NavLinks links={links} />
				</nav>

				<div className={styles.actions}>
					{actions}
					<Hamburger
						open={menuOpen}
						className={styles.hamburger}
						onClick={() => setMenuOpen(value => !value)}
					/>
				</div>
			</div>

			<MobileMenu
				open={menuOpen}
				onClose={() => setMenuOpen(false)}
				links={links}
			/>
		</header>
	)
}

// ============================================================
// components/layout/MobileMenu/MobileMenu.tsx
// ------------------------------------------------------------
// Мобильное меню.
//
// Построено на Drawer: фокус-трап, Escape и клик по фону
// работают из коробки.
//
// Пример:
//   <MobileMenu open={open} onClose={close} links={links} />
// ============================================================

'use client'

import { Drawer } from '@/components/ui'
import { NavLinks, type NavLink } from '../NavLinks'
import styles from './MobileMenu.module.scss'

type MobileMenuProps = {
	open: boolean
	onClose: () => void
	links: NavLink[]
	title?: string
	footer?: React.ReactNode
}

export function MobileMenu({
	open,
	onClose,
	links,
	title = 'Меню',
	footer,
}: MobileMenuProps) {
	return (
		<Drawer open={open} onClose={onClose} title={title} side='right'>
			<div className={styles.content}>
				<NavLinks
					links={links}
					orientation='vertical'
					onNavigate={onClose}
				/>
				{footer && <div className={styles.footer}>{footer}</div>}
			</div>
		</Drawer>
	)
}

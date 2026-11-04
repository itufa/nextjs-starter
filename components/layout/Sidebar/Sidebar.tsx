// ============================================================
// components/layout/Sidebar/Sidebar.tsx
// ------------------------------------------------------------
// Боковая навигация для приватной части (app).
//
// title  — заголовок секции
// links  — ссылки (NavLink[])
// footer — нижний слот
//
// Пример:
//   <Sidebar title="Кабинет" links={links} footer={<UserMenu />} />
// ============================================================

import { cn } from '@/lib/cn'
import { NavLinks, type NavLink } from '../NavLinks'
import styles from './Sidebar.module.scss'

type SidebarProps = {
	links: NavLink[]
	title?: React.ReactNode
	footer?: React.ReactNode
	className?: string
}

export function Sidebar({ links, title, footer, className }: SidebarProps) {
	return (
		<aside className={cn(styles.sidebar, className)}>
			{title && <div className={styles.title}>{title}</div>}

			<NavLinks links={links} orientation='vertical' />

			{footer && <div className={styles.footer}>{footer}</div>}
		</aside>
	)
}

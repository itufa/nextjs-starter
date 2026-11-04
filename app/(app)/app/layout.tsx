import type { ReactNode } from 'react'
import { Sidebar } from '@/components/layout'
import type { NavLink } from '@/types'
import styles from './app.module.scss'

const links: NavLink[] = [
	{ label: 'Обзор', href: '/app' },
	{ label: 'Настройки', href: '/app/settings' },
]

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<main>
			<div className='container'>
				<div className={styles.grid}>
					<Sidebar
						title='Кабинет'
						links={links}
						className={styles.sidebar}
					/>
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</main>
	)
}

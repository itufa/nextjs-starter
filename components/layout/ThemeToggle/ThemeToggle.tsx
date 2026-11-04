// ============================================================
// components/layout/ThemeToggle/ThemeToggle.tsx
// ------------------------------------------------------------
// Переключатель темы.
//
// Меняет data-theme на <html> и сохраняет выбор в localStorage.
// Иконки переключаются чистым CSS по [data-theme="dark"].
//
// Пример:
//   <ThemeToggle />
// ============================================================

'use client'

import { Icon } from '@/components/ui'
import { THEME_STORAGE_KEY } from '@/lib/theme'
import { cn } from '@/lib/cn'
import styles from './ThemeToggle.module.scss'

type ThemeToggleProps = {
	className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
	function toggleTheme() {
		const root = document.documentElement
		const next = root.getAttribute('data-theme') === 'dark' ? 'default' : 'dark'

		root.setAttribute('data-theme', next)

		try {
			window.localStorage.setItem(THEME_STORAGE_KEY, next)
		} catch {
			// localStorage может быть недоступен — тема всё равно переключится.
		}
	}

	return (
		<button
			type='button'
			className={cn(styles.toggle, className)}
			aria-label='Переключить тему'
			title='Переключить тему'
			onClick={toggleTheme}
		>
			<Icon size='sm' className={styles.sun}>
				<circle cx='12' cy='12' r='4' />
				<path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
			</Icon>

			<Icon size='sm' className={styles.moon}>
				<path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z' />
			</Icon>
		</button>
	)
}

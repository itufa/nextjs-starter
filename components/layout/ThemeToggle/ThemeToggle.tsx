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

import { Moon, Sun } from '@/components/icons'
import { useTheme } from '@/lib/hooks'
import { cn } from '@/lib/cn'
import styles from './ThemeToggle.module.scss'

type ThemeToggleProps = {
	className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
	const { toggleTheme } = useTheme()

	return (
		<button
			type='button'
			className={cn(styles.toggle, className)}
			aria-label='Переключить тему'
			title='Переключить тему'
			onClick={toggleTheme}
		>
			<Sun size='sm' className={styles.sun} />
			<Moon size='sm' className={styles.moon} />
		</button>
	)
}

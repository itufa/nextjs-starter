// ============================================================
// components/layout/Hamburger/Hamburger.tsx
// ------------------------------------------------------------
// Кнопка-гамбургер.
//
// open превращает три полоски в крестик.
//
// Пример:
//   <Hamburger open={open} onClick={() => setOpen(!open)} />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Hamburger.module.scss'

type HamburgerProps = {
	open?: boolean
	onClick?: () => void
	label?: string
	className?: string
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'aria-label'>

export function Hamburger({
	open = false,
	onClick,
	label,
	className,
	...rest
}: HamburgerProps) {
	return (
		<button
			type='button'
			className={cn(styles.button, open && styles.open, className)}
			aria-expanded={open}
			aria-label={label ?? (open ? 'Закрыть меню' : 'Открыть меню')}
			onClick={onClick}
			{...rest}
		>
			<span className={styles.line} />
			<span className={styles.line} />
			<span className={styles.line} />
		</button>
	)
}

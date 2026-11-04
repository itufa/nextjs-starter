// ============================================================
// components/ui/Switch/Switch.tsx
// ------------------------------------------------------------
// Переключатель (тумблер).
//
// Размеры:   sm | md | lg
// Состояния: checked, disabled, error
// Подпись:   через children
//
// Примеры:
//   <Switch>Уведомления</Switch>
//   <Switch defaultChecked>Автопродление</Switch>
//   <Switch size="lg">Большой</Switch>
//   <Switch error>Примите условия</Switch>
//   <Switch disabled>Недоступно</Switch>
//
// Без children обязательно передайте aria-label:
//   <Switch aria-label="Тёмная тема" />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Switch.module.scss'

type SwitchSize = 'sm' | 'md' | 'lg'

type SwitchProps = {
	children?: React.ReactNode
	size?: SwitchSize
	error?: boolean
	className?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>

export function Switch({
	children,
	size = 'md',
	error = false,
	className,
	disabled,
	...rest
}: SwitchProps) {
	return (
		<label
			className={cn(
				styles.root,
				styles[size],
				error && styles.error,
				disabled && styles.disabled,
				className,
			)}
		>
			<input
				type='checkbox'
				role='switch'
				className={styles.input}
				disabled={disabled}
				aria-invalid={error || undefined}
				{...rest}
			/>
			<span className={styles.track} aria-hidden='true'>
				<span className={styles.thumb} />
			</span>
			{children != null && <span className={styles.label}>{children}</span>}
		</label>
	)
}

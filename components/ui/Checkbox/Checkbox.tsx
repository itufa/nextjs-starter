// ============================================================
// components/ui/Checkbox/Checkbox.tsx
// ------------------------------------------------------------
// Чекбокс.
//
// Размеры:   sm | md | lg
// Состояния: checked, disabled, error
// Подпись:   через children
//
// Примеры:
//   <Checkbox>Согласен с условиями</Checkbox>
//   <Checkbox defaultChecked>Подписаться на новости</Checkbox>
//   <Checkbox size="lg">Большой</Checkbox>
//   <Checkbox error>Примите условия</Checkbox>
//   <Checkbox disabled>Недоступно</Checkbox>
//
// Без children обязательно передайте aria-label:
//   <Checkbox aria-label="Выбрать строку" />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Checkbox.module.scss'

type CheckboxSize = 'sm' | 'md' | 'lg'

type CheckboxProps = {
	children?: React.ReactNode
	size?: CheckboxSize
	error?: boolean
	className?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>

export function Checkbox({
	children,
	size = 'md',
	error = false,
	className,
	disabled,
	...rest
}: CheckboxProps) {
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
				className={styles.input}
				disabled={disabled}
				aria-invalid={error || undefined}
				{...rest}
			/>
			<span className={styles.box} aria-hidden='true' />
			{children != null && <span className={styles.label}>{children}</span>}
		</label>
	)
}

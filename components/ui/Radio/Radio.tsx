// ============================================================
// components/ui/Radio/Radio.tsx
// ------------------------------------------------------------
// Радиокнопка.
//
// Размеры:   sm | md | lg
// Состояния: checked, disabled, error
// Подпись:   через children
// Группа:    через name (стандартный HTML-атрибут)
//
// Примеры:
//   <Radio name="plan" defaultChecked>Базовый</Radio>
//   <Radio name="plan">Расширенный</Radio>
//   <Radio name="plan" size="lg">Максимальный</Radio>
//   <Radio name="plan" error>Примите условия</Radio>
//   <Radio name="plan" disabled>Недоступно</Radio>
//
// Без children обязательно передайте aria-label:
//   <Radio name="row" aria-label="Выбрать строку" />
//
// error — визуальное состояние. Для группы ошибку помечайте
// на контейнере (fieldset / role="radiogroup"), а не на input:
// роль radio не поддерживает aria-invalid.
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Radio.module.scss'

type RadioSize = 'sm' | 'md' | 'lg'

type RadioProps = {
	children?: React.ReactNode
	size?: RadioSize
	error?: boolean
	className?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>

export function Radio({
	children,
	size = 'md',
	error = false,
	className,
	disabled,
	...rest
}: RadioProps) {
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
				type='radio'
				className={styles.input}
				disabled={disabled}
				{...rest}
			/>
			<span className={styles.box} aria-hidden='true' />
			{children != null && <span className={styles.label}>{children}</span>}
		</label>
	)
}

// ============================================================
// components/ui/Input/Input.tsx
// ------------------------------------------------------------
// Текстовое поле.
//
// Размеры:   sm | md | lg
// Состояния: disabled, error, readOnly
// Иконки:    iconLeft, iconRight
// Тип:       любой (text, email, password, number, tel, search, url...)
//
// Примеры:
//   <Input placeholder="Введите текст" />
//   <Input type="email" size="lg" />
//   <Input iconLeft={<SearchIcon />} placeholder="Поиск" />
//   <Input error />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Input.module.scss'

type InputSize = 'sm' | 'md' | 'lg'

type InputProps = {
	size?: InputSize
	error?: boolean
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
	className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({
	size = 'md',
	error = false,
	iconLeft,
	iconRight,
	className,
	disabled,
	...rest
}: InputProps) {
	const input = (
		<input
			className={cn(
				styles.input,
				styles[size],
				error && styles.error,
				iconLeft && styles.withIconLeft,
				iconRight && styles.withIconRight,
				className,
			)}
			disabled={disabled}
			{...rest}
		/>
	)

	if (!iconLeft && !iconRight) {
		return input
	}

	return (
		<div
			className={cn(
				styles.wrapper,
				styles[size],
				error && styles.error,
				disabled && styles.disabled,
			)}
		>
			{iconLeft && (
				<span className={cn(styles.icon, styles.iconLeft)}>{iconLeft}</span>
			)}
			{input}
			{iconRight && (
				<span className={cn(styles.icon, styles.iconRight)}>{iconRight}</span>
			)}
		</div>
	)
}

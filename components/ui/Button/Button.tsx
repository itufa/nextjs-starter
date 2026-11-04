// ============================================================
// components/ui/Button/Button.tsx
// ------------------------------------------------------------
// Кнопка. Базовый UI-компонент.
//
// Варианты:  primary | secondary | ghost | outline
// Размеры:   sm | md | lg
// Состояния: disabled, fullWidth
// Иконки:    iconLeft, iconRight
//
// Примеры:
//   <Button>Купить</Button>
//   <Button variant="secondary" size="lg">Подробнее</Button>
//   <Button iconLeft={<ArrowIcon />}>Дальше</Button>
//   <Button fullWidth>Отправить</Button>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
	children: React.ReactNode
	variant?: ButtonVariant
	size?: ButtonSize
	fullWidth?: boolean
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
	className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	iconLeft,
	iconRight,
	className,
	disabled,
	...rest
}: ButtonProps) {
	return (
		<button
			className={cn(
				styles.button,
				styles[variant],
				styles[size],
				fullWidth && styles.fullWidth,
				className,
			)}
			disabled={disabled}
			{...rest}
		>
			{iconLeft && <span className={styles.icon}>{iconLeft}</span>}
			<span className={styles.label}>{children}</span>
			{iconRight && <span className={styles.icon}>{iconRight}</span>}
		</button>
	)
}

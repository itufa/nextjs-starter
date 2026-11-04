// ============================================================
// components/ui/Badge/Badge.tsx
// ------------------------------------------------------------
// Бейдж/метка.
//
// Варианты: neutral | primary | secondary | success | warning | danger | info
// Размеры:  sm | md | lg
// Точка:    dot
//
// Примеры:
//   <Badge>Новое</Badge>
//   <Badge variant="success">Активен</Badge>
//   <Badge variant="danger" dot>Ошибка</Badge>
//   <Badge size="lg">Large</Badge>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Badge.module.scss'

type BadgeVariant =
	| 'neutral'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'

type BadgeSize = 'sm' | 'md' | 'lg'

type BadgeProps = {
	children: React.ReactNode
	variant?: BadgeVariant
	size?: BadgeSize
	dot?: boolean
	className?: string
} & React.HTMLAttributes<HTMLSpanElement>

export function Badge({
	children,
	variant = 'neutral',
	size = 'md',
	dot = false,
	className,
	...rest
}: BadgeProps) {
	return (
		<span
			className={cn(
				styles.badge,
				styles[variant],
				styles[size],
				dot && styles.dot,
				className,
			)}
			{...rest}
		>
			{children}
		</span>
	)
}

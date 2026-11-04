// ============================================================
// components/ui/Progress/Progress.tsx
// ------------------------------------------------------------
// Прогресс-бар.
//
// Размеры:   sm | md | lg
// Варианты:  primary | success | warning | danger
// Значение:  value (0..max); без value — бесконечный прогресс
//
// Примеры:
//   <Progress value={65} label="Загрузка" />
//   <Progress value={40} variant="success" size="sm" />
//   <Progress label="Загрузка" />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Progress.module.scss'

type ProgressSize = 'sm' | 'md' | 'lg'
type ProgressVariant = 'primary' | 'success' | 'warning' | 'danger'

type ProgressProps = {
	value?: number
	max?: number
	size?: ProgressSize
	variant?: ProgressVariant
	label?: string
	className?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

export function Progress({
	value,
	max = 100,
	size = 'md',
	variant = 'primary',
	label,
	className,
	...rest
}: ProgressProps) {
	const safeMax = max > 0 ? max : 100
	const clamped = value == null ? null : Math.min(Math.max(value, 0), safeMax)
	const percent = clamped == null ? null : (clamped / safeMax) * 100

	return (
		<div
			role='progressbar'
			aria-valuemin={0}
			aria-valuemax={safeMax}
			aria-valuenow={clamped ?? undefined}
			aria-label={label}
			className={cn(
				styles.progress,
				styles[size],
				styles[variant],
				clamped == null && styles.indeterminate,
				className,
			)}
			{...rest}
		>
			<div
				className={styles.bar}
				style={percent == null ? undefined : { width: `${percent}%` }}
			/>
		</div>
	)
}

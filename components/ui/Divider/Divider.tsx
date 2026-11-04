// ============================================================
// components/ui/Divider/Divider.tsx
// ------------------------------------------------------------
// Разделитель.
//
// Ориентация: horizontal | vertical
// Подпись:    label (только для horizontal)
//
// Примеры:
//   <Divider />
//   <Divider label="или" />
//   <Divider orientation="vertical" />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Divider.module.scss'

type DividerOrientation = 'horizontal' | 'vertical'

type DividerProps = {
	orientation?: DividerOrientation
	label?: React.ReactNode
	className?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

export function Divider({
	orientation = 'horizontal',
	label,
	className,
	...rest
}: DividerProps) {
	if (orientation === 'horizontal' && label) {
		return (
			<div
				role='separator'
				aria-orientation='horizontal'
				className={cn(
					styles.divider,
					styles.horizontal,
					styles.withLabel,
					className,
				)}
				{...rest}
			>
				<span className={styles.line} aria-hidden='true' />
				<span className={styles.label}>{label}</span>
				<span className={styles.line} aria-hidden='true' />
			</div>
		)
	}

	return (
		<div
			role='separator'
			aria-orientation={orientation}
			className={cn(styles.divider, styles[orientation], className)}
			{...rest}
		/>
	)
}

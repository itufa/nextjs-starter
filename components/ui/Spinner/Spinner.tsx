// ============================================================
// components/ui/Spinner/Spinner.tsx
// ------------------------------------------------------------
// Индикатор загрузки.
//
// Размеры: sm | md | lg
// Текст:   label (скрыт визуально, читается скринридером)
//
// Примеры:
//   <Spinner />
//   <Spinner size="lg" />
//   <Spinner label="Отправляем" />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Spinner.module.scss'

type SpinnerSize = 'sm' | 'md' | 'lg'

type SpinnerProps = {
	size?: SpinnerSize
	label?: string
	className?: string
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

export function Spinner({
	size = 'md',
	label = 'Загрузка',
	className,
	...rest
}: SpinnerProps) {
	return (
		<span
			role='status'
			className={cn(styles.spinner, styles[size], className)}
			{...rest}
		>
			<span className={styles.circle} aria-hidden='true' />
			<span className={styles.srOnly}>{label}</span>
		</span>
	)
}

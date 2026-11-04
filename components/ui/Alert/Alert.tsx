// ============================================================
// components/ui/Alert/Alert.tsx
// ------------------------------------------------------------
// Сообщение.
//
// Варианты: info | success | warning | danger
// Поля:     title, children, icon
//
// Примеры:
//   <Alert variant="success" title="Готово">Изменения сохранены.</Alert>
//   <Alert variant="danger" title="Ошибка" icon={<Icon />}>...</Alert>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Alert.module.scss'

type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

type AlertProps = {
	children: React.ReactNode
	variant?: AlertVariant
	title?: React.ReactNode
	icon?: React.ReactNode
	className?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>

export function Alert({
	children,
	variant = 'info',
	title,
	icon,
	className,
	...rest
}: AlertProps) {
	return (
		<div
			role='alert'
			className={cn(styles.alert, styles[variant], className)}
			{...rest}
		>
			{icon && (
				<span className={styles.icon} aria-hidden='true'>
					{icon}
				</span>
			)}
			<div className={styles.content}>
				{title && <div className={styles.title}>{title}</div>}
				<div className={styles.message}>{children}</div>
			</div>
		</div>
	)
}

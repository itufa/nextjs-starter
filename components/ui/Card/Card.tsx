// ============================================================
// components/ui/Card/Card.tsx
// ------------------------------------------------------------
// Карточка.
//
// Содержимое: children (обязательно), title, description, footer
// Паддинг:    none | sm | md | lg
//
// Примеры:
//   <Card title="Заголовок" description="Описание">
//     <p>Контент</p>
//   </Card>
//   <Card footer={<Button>Действие</Button>}>...</Card>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Card.module.scss'

type CardPadding = 'none' | 'sm' | 'md' | 'lg'

type CardProps = {
	children: React.ReactNode
	title?: React.ReactNode
	description?: React.ReactNode
	footer?: React.ReactNode
	padding?: CardPadding
	className?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'title'>

export function Card({
	children,
	title,
	description,
	footer,
	padding = 'md',
	className,
	...rest
}: CardProps) {
	return (
		<div className={cn(styles.card, className)} {...rest}>
			<div className={cn(styles.body, styles[padding])}>
				{(title || description) && (
					<div className={styles.header}>
						{title && <div className={styles.title}>{title}</div>}
						{description && (
							<p className={styles.description}>{description}</p>
						)}
					</div>
				)}
				<div className={styles.content}>{children}</div>
			</div>
			{footer && <div className={styles.footer}>{footer}</div>}
		</div>
	)
}

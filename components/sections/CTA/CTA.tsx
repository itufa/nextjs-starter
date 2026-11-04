// ============================================================
// components/sections/CTA/CTA.tsx
// ------------------------------------------------------------
// Финальный призыв.
//
// Пример:
//   <CTA
//     title="Готовы начать?"
//     description="Создайте первый лендинг за вечер."
//     actions={<Button>Начать</Button>}
//   />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './CTA.module.scss'

type CTAProps = {
	title: React.ReactNode
	description?: React.ReactNode
	actions?: React.ReactNode
	className?: string
}

export function CTA({ title, description, actions, className }: CTAProps) {
	return (
		<section className={cn('section', className)}>
			<div className='container'>
				<div className={styles.panel}>
					<h2 className={styles.title}>{title}</h2>
					{description && (
						<p className={styles.description}>{description}</p>
					)}
					{actions && <div className={styles.actions}>{actions}</div>}
				</div>
			</div>
		</section>
	)
}

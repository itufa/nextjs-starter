// ============================================================
// components/sections/FeatureSplit/FeatureSplit.tsx
// ------------------------------------------------------------
// Картинка + текст.
//
// media: слот для изображения/визуала
// reverse: поменять стороны местами
//
// Пример:
//   <FeatureSplit
//     title="Тёмная тема из коробки"
//     description="..."
//     bullets={["CSS-переменные", "Без мигания"]}
//     media={<img src="/shot.png" alt="" />}
//     reverse
//   />
// ============================================================

import { Check } from '@/components/icons'
import { cn } from '@/lib/cn'
import styles from './FeatureSplit.module.scss'

type FeatureSplitProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	bullets?: React.ReactNode[]
	actions?: React.ReactNode
	media?: React.ReactNode
	reverse?: boolean
	className?: string
}

export function FeatureSplit({
	eyebrow,
	title,
	description,
	bullets,
	actions,
	media,
	reverse = false,
	className,
}: FeatureSplitProps) {
	return (
		<section className={cn('section', className)}>
			<div className='container'>
				<div className={cn(styles.grid, reverse && styles.reverse)}>
					<div className={styles.text}>
						{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
						<h2 className={styles.title}>{title}</h2>
						{description && (
							<p className={styles.description}>{description}</p>
						)}

						{bullets && bullets.length > 0 && (
							<ul className={styles.bullets}>
								{bullets.map((bullet, index) => (
									<li key={index} className={styles.bullet}>
										<span className={styles.check} aria-hidden='true'>
											<Check size='sm' />
										</span>
										<span>{bullet}</span>
									</li>
								))}
							</ul>
						)}

						{actions && <div className={styles.actions}>{actions}</div>}
					</div>

					{media && <div className={styles.media}>{media}</div>}
				</div>
			</div>
		</section>
	)
}

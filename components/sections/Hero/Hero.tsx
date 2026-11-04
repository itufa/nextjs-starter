// ============================================================
// components/sections/Hero/Hero.tsx
// ------------------------------------------------------------
// Первый экран.
//
// Слоты: eyebrow, title, description, actions, media
// align: left | center
//
// Пример:
//   <Hero
//     eyebrow="Новый стартер"
//     title="Соберите лендинг за вечер"
//     description="..."
//     actions={<Button>Начать</Button>}
//     media={<Card>...</Card>}
//   />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Hero.module.scss'

type HeroProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	actions?: React.ReactNode
	media?: React.ReactNode
	align?: 'left' | 'center'
	className?: string
}

export function Hero({
	eyebrow,
	title,
	description,
	actions,
	media,
	align = 'left',
	className,
}: HeroProps) {
	return (
		<section className={cn('section', styles.hero, className)}>
			<div className='container'>
				<div
					className={cn(
						styles.grid,
						!media && styles.solo,
						align === 'center' && styles.center,
					)}
				>
					<div className={styles.content}>
						{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
						<h1 className={styles.title}>{title}</h1>
						{description && (
							<p className={styles.description}>{description}</p>
						)}
						{actions && <div className={styles.actions}>{actions}</div>}
					</div>

					{media && <div className={styles.media}>{media}</div>}
				</div>
			</div>
		</section>
	)
}

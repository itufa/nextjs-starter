// ============================================================
// components/sections/Features/Features.tsx
// ------------------------------------------------------------
// Сетка возможностей.
//
// features: ({ icon?, title, description })
//
// Пример:
//   <Features
//     title="Всё для запуска"
//     features={[{ title: "Темы", description: "..." }]}
//   />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Features.module.scss'

type Feature = {
	icon?: React.ReactNode
	title: React.ReactNode
	description: React.ReactNode
}

type FeaturesProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	features: Feature[]
	className?: string
}

export function Features({
	eyebrow,
	title,
	description,
	features,
	className,
}: FeaturesProps) {
	return (
		<section className={cn('section', className)}>
			<div className='container'>
				<header className={styles.header}>
					{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
					<h2 className={styles.title}>{title}</h2>
					{description && (
						<p className={styles.description}>{description}</p>
					)}
				</header>

				<div className={styles.grid}>
					{features.map((feature, index) => (
						<article key={index} className={styles.card}>
							{feature.icon && (
								<div className={styles.icon}>{feature.icon}</div>
							)}
							<h3 className={styles.cardTitle}>{feature.title}</h3>
							<p className={styles.cardText}>{feature.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

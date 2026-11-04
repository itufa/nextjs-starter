// ============================================================
// components/sections/Stats/Stats.tsx
// ------------------------------------------------------------
// Цифры.
//
// stats: ({ value, label })
//
// Пример:
//   <Stats stats={[{ value: "10k+", label: "разработчиков" }]} />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Stats.module.scss'

type Stat = {
	value: React.ReactNode
	label: React.ReactNode
}

type StatsProps = {
	title?: React.ReactNode
	stats: Stat[]
	className?: string
}

export function Stats({ title, stats, className }: StatsProps) {
	return (
		<section className={cn('section', className)}>
			<div className='container'>
				{title && <h2 className={styles.title}>{title}</h2>}

				<div className={styles.grid}>
					{stats.map((stat, index) => (
						<div key={index} className={styles.stat}>
							<div className={styles.value}>{stat.value}</div>
							<div className={styles.label}>{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

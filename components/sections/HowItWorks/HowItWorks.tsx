// ============================================================
// components/sections/HowItWorks/HowItWorks.tsx
// ------------------------------------------------------------
// Шаги.
//
// steps: ({ title, description })
//
// Пример:
//   <HowItWorks
//     title="Как это работает"
//     steps={[{ title: "Установите", description: "..." }]}
//   />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './HowItWorks.module.scss'

type Step = {
	title: React.ReactNode
	description: React.ReactNode
}

type HowItWorksProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	steps: Step[]
	className?: string
}

export function HowItWorks({
	eyebrow,
	title,
	description,
	steps,
	className,
}: HowItWorksProps) {
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

				<ol className={styles.grid}>
					{steps.map((step, index) => (
						<li key={index} className={styles.step}>
							<div className={styles.number}>
								{String(index + 1).padStart(2, '0')}
							</div>
							<h3 className={styles.stepTitle}>{step.title}</h3>
							<p className={styles.stepText}>{step.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}

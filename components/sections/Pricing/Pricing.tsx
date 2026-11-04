// ============================================================
// components/sections/Pricing/Pricing.tsx
// ------------------------------------------------------------
// Тарифы.
//
// plans: ({ name, price, period?, description?, features, cta, popular? })
//
// cta — готовый элемент (Button/Link), чтобы не диктовать поведение.
//
// Пример:
//   <Pricing
//     title="Тарифы"
//     plans={[{
//       name: "Про",
//       price: "1 990 ₽",
//       period: "/мес",
//       features: ["Всё из Базового", "Приоритетная поддержка"],
//       cta: <Button>Выбрать</Button>,
//       popular: true,
//     }]}
//   />
// ============================================================

import { Check } from '@/components/icons'
import { cn } from '@/lib/cn'
import styles from './Pricing.module.scss'

type PricingPlan = {
	name: string
	price: React.ReactNode
	period?: string
	description?: React.ReactNode
	features: React.ReactNode[]
	cta: React.ReactNode
	popular?: boolean
}

type PricingProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	plans: PricingPlan[]
	className?: string
}

export function Pricing({
	eyebrow,
	title,
	description,
	plans,
	className,
}: PricingProps) {
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
					{plans.map(plan => (
						<article
							key={plan.name}
							className={cn(styles.card, plan.popular && styles.popular)}
						>
							{plan.popular && (
								<div className={styles.badge}>Популярный</div>
							)}

							<h3 className={styles.name}>{plan.name}</h3>

							{plan.description && (
								<p className={styles.planDescription}>
									{plan.description}
								</p>
							)}

							<div className={styles.priceRow}>
								<span className={styles.price}>{plan.price}</span>
								{plan.period && (
									<span className={styles.period}>{plan.period}</span>
								)}
							</div>

							<ul className={styles.features}>
								{plan.features.map((feature, index) => (
									<li key={index} className={styles.feature}>
										<span className={styles.check} aria-hidden='true'>
											<Check size='sm' />
										</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<div className={styles.cta}>{plan.cta}</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

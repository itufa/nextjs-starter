// ============================================================
// components/sections/Testimonials/Testimonials.tsx
// ------------------------------------------------------------
// Отзывы.
//
// items: ({ quote, name, role?, avatar? })
//
// Пример:
//   <Testimonials
//     title="Отзывы"
//     items={[{ quote: "Отлично!", name: "Анна", role: "CTO" }]}
//   />
// ============================================================

import { Avatar } from '@/components/ui'
import { cn } from '@/lib/cn'
import styles from './Testimonials.module.scss'

type Testimonial = {
	quote: React.ReactNode
	name: string
	role?: string
	avatar?: React.ReactNode
}

type TestimonialsProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	items: Testimonial[]
	className?: string
}

function getInitials(name: string) {
	return name
		.split(/\s+/)
		.map(part => part[0])
		.filter(Boolean)
		.slice(0, 2)
		.join('')
}

export function Testimonials({
	eyebrow,
	title,
	description,
	items,
	className,
}: TestimonialsProps) {
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
					{items.map((item, index) => (
						<figure key={index} className={styles.card}>
							<blockquote className={styles.quote}>
								{item.quote}
							</blockquote>
							<figcaption className={styles.author}>
								<div className={styles.avatar}>
									{item.avatar ?? (
										<Avatar
											size='sm'
											initials={getInitials(item.name)}
										/>
									)}
								</div>
								<div className={styles.authorText}>
									<div className={styles.name}>{item.name}</div>
									{item.role && (
										<div className={styles.role}>{item.role}</div>
									)}
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}

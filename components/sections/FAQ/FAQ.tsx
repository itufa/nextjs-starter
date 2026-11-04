// ============================================================
// components/sections/FAQ/FAQ.tsx
// ------------------------------------------------------------
// Частые вопросы на Accordion.
//
// items: ({ question, answer })
//
// Пример:
//   <FAQ
//     title="Вопросы"
//     items={[{ question: "Как начать?", answer: "..." }]}
//   />
// ============================================================

import { Accordion } from '@/components/ui'
import { cn } from '@/lib/cn'
import styles from './FAQ.module.scss'

type FAQItem = {
	question: React.ReactNode
	answer: React.ReactNode
}

type FAQProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	items: FAQItem[]
	className?: string
}

export function FAQ({
	eyebrow,
	title,
	description,
	items,
	className,
}: FAQProps) {
	const accordionItems = items.map((item, index) => ({
		id: `faq-${index}`,
		title: item.question,
		content: <p>{item.answer}</p>,
	}))

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

				<div className={styles.list}>
					<Accordion items={accordionItems} />
				</div>
			</div>
		</section>
	)
}

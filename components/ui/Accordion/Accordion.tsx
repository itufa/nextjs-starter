// ============================================================
// components/ui/Accordion/Accordion.tsx
// ------------------------------------------------------------
// Аккордеон.
//
// Пункты:   items ({ id, title, content })
// Режим:    multiple — разрешить несколько открытых
// Старт:    defaultOpen — массив id
//
// Пример:
//   <Accordion
//     defaultOpen={["delivery"]}
//     items={[
//       { id: "delivery", title: "Доставка", content: <p>...</p> },
//     ]}
//   />
// ============================================================

'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import styles from './Accordion.module.scss'

type AccordionItem = {
	id: string
	title: React.ReactNode
	content: React.ReactNode
}

type AccordionProps = {
	items: AccordionItem[]
	defaultOpen?: string[]
	multiple?: boolean
	className?: string
}

export function Accordion({
	items,
	defaultOpen = [],
	multiple = false,
	className,
}: AccordionProps) {
	const [openIds, setOpenIds] = useState<string[]>(defaultOpen)
	const baseId = useId()

	function toggle(id: string) {
		setOpenIds(current => {
			if (current.includes(id)) {
				return current.filter(itemId => itemId !== id)
			}

			return multiple ? [...current, id] : [id]
		})
	}

	return (
		<div className={cn(styles.accordion, className)}>
			{items.map(item => {
				const isOpen = openIds.includes(item.id)
				const triggerId = `${baseId}-${item.id}-trigger`
				const panelId = `${baseId}-${item.id}-panel`

				return (
					<div key={item.id} className={styles.item}>
						<h4 className={styles.heading}>
							<button
								type='button'
								id={triggerId}
								aria-expanded={isOpen}
								aria-controls={panelId}
								className={styles.trigger}
								onClick={() => toggle(item.id)}
							>
								<span className={styles.triggerLabel}>{item.title}</span>
								<span
									className={cn(styles.icon, isOpen && styles.iconOpen)}
									aria-hidden='true'
								/>
							</button>
						</h4>

						<div
							id={panelId}
							role='region'
							aria-labelledby={triggerId}
							className={cn(styles.panel, isOpen && styles.panelOpen)}
						>
							<div className={styles.panelInner}>
								<div className={styles.content}>{item.content}</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

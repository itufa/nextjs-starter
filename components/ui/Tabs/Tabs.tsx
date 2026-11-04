// ============================================================
// components/ui/Tabs/Tabs.tsx
// ------------------------------------------------------------
// Табы.
//
// Пункты:  items ({ id, label, content, disabled? })
// Старт:   defaultId — id активного таба
// Клавиши: ArrowLeft / ArrowRight / Home / End
//
// Пример:
//   <Tabs items={[
//     { id: "one", label: "Первый", content: <p>...</p> },
//   ]} />
// ============================================================

'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import styles from './Tabs.module.scss'

type TabItem = {
	id: string
	label: React.ReactNode
	content: React.ReactNode
	disabled?: boolean
}

type TabsProps = {
	items: TabItem[]
	defaultId?: string
	label?: string
	className?: string
}

export function Tabs({
	items,
	defaultId,
	label = 'Табы',
	className,
}: TabsProps) {
	const baseId = useId()
	const [activeId, setActiveId] = useState(defaultId ?? items[0]?.id)
	const activeItem = items.find(item => item.id === activeId) ?? items[0]

	function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
			return
		}

		event.preventDefault()

		const tabs = Array.from(
			event.currentTarget.querySelectorAll<HTMLButtonElement>(
				'[role="tab"]:not(:disabled)',
			),
		)

		if (tabs.length === 0) {
			return
		}

		const currentIndex = tabs.indexOf(
			document.activeElement as HTMLButtonElement,
		)
		let nextIndex = currentIndex

		if (event.key === 'ArrowRight') {
			nextIndex = (currentIndex + 1) % tabs.length
		} else if (event.key === 'ArrowLeft') {
			nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
		} else if (event.key === 'Home') {
			nextIndex = 0
		} else if (event.key === 'End') {
			nextIndex = tabs.length - 1
		}

		tabs[nextIndex]?.focus()
		tabs[nextIndex]?.click()
	}

	if (!activeItem) {
		return null
	}

	return (
		<div className={cn(styles.tabs, className)}>
			<div
				role='tablist'
				aria-label={label}
				className={styles.list}
				onKeyDown={onKeyDown}
			>
				{items.map(item => {
					const selected = item.id === activeItem.id
					const tabId = `${baseId}-${item.id}-tab`
					const panelId = `${baseId}-${item.id}-panel`

					return (
						<button
							key={item.id}
							type='button'
							role='tab'
							id={tabId}
							aria-selected={selected}
							aria-controls={panelId}
							tabIndex={selected ? 0 : -1}
							disabled={item.disabled}
							className={cn(styles.tab, selected && styles.active)}
							onClick={() => setActiveId(item.id)}
						>
							{item.label}
						</button>
					)
				})}
			</div>

			<div
				role='tabpanel'
				id={`${baseId}-${activeItem.id}-panel`}
				aria-labelledby={`${baseId}-${activeItem.id}-tab`}
				tabIndex={0}
				className={styles.panel}
			>
				{activeItem.content}
			</div>
		</div>
	)
}

// ============================================================
// components/ui/Popover/Popover.tsx
// ------------------------------------------------------------
// Всплывающее окно.
//
// Триггер: любой элемент (button, ссылка) через trigger
// Контент: children
//
// Закрывается по клику вне и по Escape.
//
// Пример:
//   <Popover trigger={<Button>Открыть</Button>} label="Настройки">
//     <p>Контент</p>
//   </Popover>
// ============================================================

'use client'

import { cloneElement, isValidElement, useEffect, useRef } from 'react'
import type { MouseEvent, ReactElement, ReactNode } from 'react'
import { useClickOutside, useDisclosure } from '@/lib/hooks'
import { cn } from '@/lib/cn'
import styles from './Popover.module.scss'

type TriggerProps = {
	onClick?: (event: MouseEvent<HTMLElement>) => void
	'aria-expanded'?: boolean
	'aria-haspopup'?: 'dialog'
}

type PopoverProps = {
	trigger: ReactNode
	children: ReactNode
	align?: 'start' | 'end'
	label?: string
	className?: string
}

export function Popover({
	trigger,
	children,
	align = 'start',
	label,
	className,
}: PopoverProps) {
	const { open, onClose, onToggle } = useDisclosure()
	const rootRef = useRef<HTMLDivElement>(null)

	useClickOutside(rootRef, onClose, open)

	useEffect(() => {
		if (!open) {
			return
		}

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', onKeyDown)

		return () => document.removeEventListener('keydown', onKeyDown)
	}, [open, onClose])

	const triggerNode = isValidElement(trigger) ? (
		cloneElement(trigger as ReactElement<TriggerProps>, {
			onClick: (event: MouseEvent<HTMLElement>) => {
				const original = (trigger.props as TriggerProps).onClick
				original?.(event)
				onToggle()
			},
			'aria-expanded': open,
			'aria-haspopup': 'dialog',
		})
	) : (
		<button
			type='button'
			className={styles.fallback}
			aria-expanded={open}
			aria-haspopup='dialog'
			onClick={onToggle}
		>
			{trigger}
		</button>
	)

	return (
		<div ref={rootRef} className={cn(styles.root, className)}>
			{triggerNode}

			{open && (
				<div
					role='dialog'
					aria-label={label}
					className={cn(styles.panel, styles[align])}
				>
					{children}
				</div>
			)}
		</div>
	)
}

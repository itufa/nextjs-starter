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

import { cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import type { MouseEvent, ReactElement, ReactNode } from 'react'
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
	const [open, setOpen] = useState(false)
	const rootRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!open) {
			return
		}

		function onPointerDown(event: PointerEvent) {
			if (!rootRef.current?.contains(event.target as Node)) {
				setOpen(false)
			}
		}

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setOpen(false)
			}
		}

		document.addEventListener('pointerdown', onPointerDown)
		document.addEventListener('keydown', onKeyDown)

		return () => {
			document.removeEventListener('pointerdown', onPointerDown)
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [open])

	const triggerNode = isValidElement(trigger) ? (
		cloneElement(trigger as ReactElement<TriggerProps>, {
			onClick: (event: MouseEvent<HTMLElement>) => {
				const original = (trigger.props as TriggerProps).onClick
				original?.(event)
				setOpen(value => !value)
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
			onClick={() => setOpen(value => !value)}
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

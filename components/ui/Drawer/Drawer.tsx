// ============================================================
// components/ui/Drawer/Drawer.tsx
// ------------------------------------------------------------
// Выдвижная панель на нативном <dialog>.
//
// Управление: open + onClose
// Сторона:    right | left
// Слоты:      title, children, footer
//
// Пример:
//   <Drawer open={open} onClose={close} title="Фильтры">
//     ...
//   </Drawer>
// ============================================================

'use client'

import { useEffect, useId, useRef } from 'react'
import { useLockScroll } from '@/lib/hooks'
import { cn } from '@/lib/cn'
import styles from './Drawer.module.scss'

type DrawerSide = 'right' | 'left'

type DrawerProps = {
	open: boolean
	onClose: () => void
	title?: React.ReactNode
	children: React.ReactNode
	footer?: React.ReactNode
	side?: DrawerSide
	className?: string
}

export function Drawer({
	open,
	onClose,
	title,
	children,
	footer,
	side = 'right',
	className,
}: DrawerProps) {
	const ref = useRef<HTMLDialogElement>(null)
	const titleId = useId()

	useEffect(() => {
		const dialog = ref.current

		if (!dialog) {
			return
		}

		if (open && !dialog.open) {
			dialog.showModal()
		}

		if (!open && dialog.open) {
			dialog.close()
		}
	}, [open])

	useLockScroll(open)

	return (
		<dialog
			ref={ref}
			aria-labelledby={title ? titleId : undefined}
			className={cn(styles.dialog, styles[side], className)}
			onCancel={event => {
				event.preventDefault()
				onClose()
			}}
			onClick={event => {
				if (event.target === ref.current) {
					onClose()
				}
			}}
		>
			<div className={styles.header}>
				{title && (
					<h2 id={titleId} className={styles.title}>
						{title}
					</h2>
				)}
				<button
					type='button'
					className={styles.close}
					aria-label='Закрыть'
					onClick={onClose}
				>
					<span aria-hidden='true'>×</span>
				</button>
			</div>

			<div className={styles.body}>{children}</div>

			{footer && <div className={styles.footer}>{footer}</div>}
		</dialog>
	)
}

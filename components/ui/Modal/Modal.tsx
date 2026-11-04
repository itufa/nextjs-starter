// ============================================================
// components/ui/Modal/Modal.tsx
// ------------------------------------------------------------
// Модальное окно на нативном <dialog>.
//
// Управление: open + onClose
// Слоты:      title, children, footer
// Размеры:    sm | md | lg
//
// <dialog> даёт focus trap, Escape и top layer из коробки.
//
// Пример:
//   <Modal open={open} onClose={close} title="Заголовок">
//     <p>Контент</p>
//   </Modal>
// ============================================================

'use client'

import { useEffect, useId, useRef } from 'react'
import { cn } from '@/lib/cn'
import styles from './Modal.module.scss'

type ModalSize = 'sm' | 'md' | 'lg'

type ModalProps = {
	open: boolean
	onClose: () => void
	title?: React.ReactNode
	children: React.ReactNode
	footer?: React.ReactNode
	size?: ModalSize
	className?: string
}

export function Modal({
	open,
	onClose,
	title,
	children,
	footer,
	size = 'md',
	className,
}: ModalProps) {
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

	useEffect(() => {
		if (!open) {
			return
		}

		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = previousOverflow
		}
	}, [open])

	return (
		<dialog
			ref={ref}
			aria-labelledby={title ? titleId : undefined}
			className={cn(styles.dialog, styles[size], className)}
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

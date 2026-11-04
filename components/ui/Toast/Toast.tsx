// ============================================================
// components/ui/Toast/Toast.tsx
// ------------------------------------------------------------
// Всплывающее уведомление.
//
// Управление: open + onClose
// Варианты:   info | success | warning | danger
// Автозакрытие: duration (мс), 0 — отключить
//
// Пример:
//   <Toast
//     open={open}
//     onClose={close}
//     title="Готово"
//     message="Изменения сохранены"
//     variant="success"
//   />
// ============================================================

'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'
import styles from './Toast.module.scss'

type ToastVariant = 'info' | 'success' | 'warning' | 'danger'

type ToastProps = {
	open: boolean
	onClose: () => void
	message: React.ReactNode
	title?: React.ReactNode
	variant?: ToastVariant
	duration?: number
	action?: React.ReactNode
	className?: string
}

export function Toast({
	open,
	onClose,
	message,
	title,
	variant = 'info',
	duration = 5000,
	action,
	className,
}: ToastProps) {
	const onCloseRef = useRef(onClose)

	useEffect(() => {
		onCloseRef.current = onClose
	}, [onClose])

	useEffect(() => {
		if (!open || duration <= 0) {
			return
		}

		const timer = window.setTimeout(() => {
			onCloseRef.current()
		}, duration)

		return () => window.clearTimeout(timer)
	}, [open, duration])

	if (!open) {
		return null
	}

	return (
		<div
			role={variant === 'danger' ? 'alert' : 'status'}
			aria-atomic='true'
			className={cn(styles.toast, styles[variant], className)}
		>
			<span className={styles.accent} aria-hidden='true' />

			<div className={styles.content}>
				{title && <div className={styles.title}>{title}</div>}
				<div className={styles.message}>{message}</div>
				{action && <div className={styles.action}>{action}</div>}
			</div>

			<button
				type='button'
				className={styles.close}
				aria-label='Закрыть'
				onClick={onClose}
			>
				<span aria-hidden='true'>×</span>
			</button>
		</div>
	)
}

'use client'

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from 'react'
import type { ReactNode } from 'react'
import { Toast } from './Toast'
import styles from './ToastProvider.module.scss'

type ToastVariant = 'info' | 'success' | 'warning' | 'danger'

export type ToastOptions = {
	title?: ReactNode
	message: ReactNode
	variant?: ToastVariant
	duration?: number
	action?: ReactNode
}

type ToastItem = ToastOptions & { id: number }

type ToastContextValue = {
	toast: (options: ToastOptions) => number
	dismiss: (id: number) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<ToastItem[]>([])
	const nextId = useRef(0)

	const dismiss = useCallback((id: number) => {
		setItems(current => current.filter(item => item.id !== id))
	}, [])

	const toast = useCallback((options: ToastOptions) => {
		const id = nextId.current
		nextId.current += 1
		setItems(current => [...current, { ...options, id }])
		return id
	}, [])

	const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

	return (
		<ToastContext.Provider value={value}>
			{children}

			<div className={styles.viewport}>
				{items.map(({ id, ...item }) => (
					<Toast
						key={id}
						inline
						open
						onClose={() => dismiss(id)}
						{...item}
					/>
				))}
			</div>
		</ToastContext.Provider>
	)
}

export function useToast(): ToastContextValue {
	const context = useContext(ToastContext)

	if (!context) {
		throw new Error('useToast must be used within ToastProvider')
	}

	return context
}

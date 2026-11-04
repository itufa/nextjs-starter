// ============================================================
// components/ui/Dropdown/Dropdown.tsx
// ------------------------------------------------------------
// Выпадающее меню.
//
// Пункты: items ({ label, href?, onSelect?, disabled? })
// Выравнивание: align = start | end
//
// Закрывается по клику вне меню и по Escape.
//
// Пример:
//   <Dropdown
//     label="Меню"
//     items={[
//       { label: "Профиль", href: "/profile" },
//       { label: "Выйти", onSelect: logout },
//     ]}
//   />
// ============================================================

'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'
import styles from './Dropdown.module.scss'

type DropdownItem = {
	label: string
	href?: string
	onSelect?: () => void
	disabled?: boolean
}

type DropdownProps = {
	label: string
	items: DropdownItem[]
	align?: 'start' | 'end'
	className?: string
}

export function Dropdown({
	label,
	items,
	align = 'start',
	className,
}: DropdownProps) {
	const [open, setOpen] = useState(false)
	const rootRef = useRef<HTMLDivElement>(null)
	const triggerRef = useRef<HTMLButtonElement>(null)

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
				triggerRef.current?.focus()
			}
		}

		document.addEventListener('pointerdown', onPointerDown)
		document.addEventListener('keydown', onKeyDown)

		return () => {
			document.removeEventListener('pointerdown', onPointerDown)
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [open])

	return (
		<div ref={rootRef} className={cn(styles.dropdown, className)}>
			<button
				ref={triggerRef}
				type='button'
				aria-haspopup='menu'
				aria-expanded={open}
				className={styles.trigger}
				onClick={() => setOpen(value => !value)}
			>
				{label}
				<span className={styles.chevron} aria-hidden='true' />
			</button>

			{open && (
				<div role='menu' className={cn(styles.menu, styles[align])}>
					{items.map((item, index) => {
						const itemClass = cn(
							styles.item,
							item.disabled && styles.disabled,
						)

						if (item.disabled) {
							return (
								<span
									key={`${item.label}-${index}`}
									role='menuitem'
									aria-disabled='true'
									className={itemClass}
								>
									{item.label}
								</span>
							)
						}

						if (item.href) {
							return (
								<a
									key={`${item.label}-${index}`}
									role='menuitem'
									href={item.href}
									className={itemClass}
									onClick={() => setOpen(false)}
								>
									{item.label}
								</a>
							)
						}

						return (
							<button
								key={`${item.label}-${index}`}
								type='button'
								role='menuitem'
								className={itemClass}
								onClick={() => {
									item.onSelect?.()
									setOpen(false)
								}}
							>
								{item.label}
							</button>
						)
					})}
				</div>
			)}
		</div>
	)
}

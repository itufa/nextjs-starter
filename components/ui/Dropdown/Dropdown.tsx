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

import { useEffect, useRef } from 'react'
import { useClickOutside, useDisclosure } from '@/lib/hooks'
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
	const { open, onClose, onToggle } = useDisclosure()
	const rootRef = useRef<HTMLDivElement>(null)
	const triggerRef = useRef<HTMLButtonElement>(null)

	useClickOutside(rootRef, onClose, open)

	useEffect(() => {
		if (!open) {
			return
		}

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				onClose()
				triggerRef.current?.focus()
			}
		}

		document.addEventListener('keydown', onKeyDown)

		return () => document.removeEventListener('keydown', onKeyDown)
	}, [open, onClose])

	return (
		<div ref={rootRef} className={cn(styles.dropdown, className)}>
			<button
				ref={triggerRef}
				type='button'
				aria-haspopup='menu'
				aria-expanded={open}
				className={styles.trigger}
				onClick={onToggle}
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
									onClick={onClose}
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
									onClose()
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

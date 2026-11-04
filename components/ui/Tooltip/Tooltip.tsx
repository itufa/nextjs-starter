// ============================================================
// components/ui/Tooltip/Tooltip.tsx
// ------------------------------------------------------------
// Подсказка.
//
// Появляется при наведении и фокусе на триггере.
// Сторона: top | bottom
//
// Пример:
//   <Tooltip label="Скопировать ссылку">
//     <Button>Копировать</Button>
//   </Tooltip>
// ============================================================

'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import styles from './Tooltip.module.scss'

type TooltipProps = {
	label: string
	children: React.ReactNode
	side?: 'top' | 'bottom'
	className?: string
}

export function Tooltip({
	label,
	children,
	side = 'top',
	className,
}: TooltipProps) {
	const [open, setOpen] = useState(false)
	const id = useId()

	return (
		<span
			className={cn(styles.wrapper, className)}
			aria-describedby={open ? id : undefined}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			onFocus={() => setOpen(true)}
			onBlur={() => setOpen(false)}
		>
			{children}
			{open && (
				<span
					role='tooltip'
					id={id}
					className={cn(styles.tooltip, styles[side])}
				>
					{label}
				</span>
			)}
		</span>
	)
}

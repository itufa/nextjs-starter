// ============================================================
// components/ui/Label/Label.tsx
// ------------------------------------------------------------
// Подпись к полю ввода.
//
// Пример:
//   <Label htmlFor="email">Email</Label>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Label.module.scss'

type LabelProps = {
	children: React.ReactNode
	className?: string
} & React.LabelHTMLAttributes<HTMLLabelElement>

export function Label({ children, className, ...rest }: LabelProps) {
	return (
		<label className={cn(styles.label, className)} {...rest}>
			{children}
		</label>
	)
}

// ============================================================
// components/ui/FieldError/FieldError.tsx
// ------------------------------------------------------------
// Текст ошибки под полем ввода.
//
// Пример:
//   <FieldError>Неверный email</FieldError>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './FieldError.module.scss'

type FieldErrorProps = {
	children: React.ReactNode
	className?: string
} & React.HTMLAttributes<HTMLParagraphElement>

export function FieldError({ children, className, ...rest }: FieldErrorProps) {
	return (
		<p className={cn(styles.error, className)} {...rest}>
			{children}
		</p>
	)
}

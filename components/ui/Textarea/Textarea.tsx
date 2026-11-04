// ============================================================
// components/ui/Textarea/Textarea.tsx
// ------------------------------------------------------------
// Многострочное текстовое поле.
//
// Размеры:   sm | md | lg
// Состояния: disabled, error, readOnly
// Высота:    через rows (стандартный HTML-атрибут)
//
// Примеры:
//   <Textarea placeholder="Введите текст" />
//   <Textarea rows={6} size="lg" />
//   <Textarea error />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Textarea.module.scss'

type TextareaSize = 'sm' | 'md' | 'lg'

type TextareaProps = {
	size?: TextareaSize
	error?: boolean
	className?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({
	size = 'md',
	error = false,
	className,
	disabled,
	...rest
}: TextareaProps) {
	return (
		<textarea
			className={cn(
				styles.textarea,
				styles[size],
				error && styles.error,
				className,
			)}
			disabled={disabled}
			{...rest}
		/>
	)
}

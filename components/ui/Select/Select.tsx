// ============================================================
// components/ui/Select/Select.tsx
// ------------------------------------------------------------
// Выпадающий список.
//
// Размеры:   sm | md | lg
// Состояния: disabled, error
// Опции:     через children (<option>...</option>)
// Placeholder: через проп, добавляет первую disabled-опцию
//
// Примеры:
//   <Select>
//     <option value="1">Опция 1</option>
//     <option value="2">Опция 2</option>
//   </Select>
//
//   <Select placeholder="Выберите город">
//     <option value="msk">Москва</option>
//     <option value="spb">Санкт-Петербург</option>
//   </Select>
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Select.module.scss'

type SelectSize = 'sm' | 'md' | 'lg'

type SelectProps = {
	children: React.ReactNode
	size?: SelectSize
	error?: boolean
	placeholder?: string
	className?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>

export function Select({
	children,
	size = 'md',
	error = false,
	placeholder,
	className,
	disabled,
	defaultValue,
	...rest
}: SelectProps) {
	// Если placeholder есть и defaultValue не задан —
	// первая опция становится placeholder-ом.
	const showPlaceholder = placeholder && defaultValue === undefined

	return (
		<select
			className={cn(
				styles.select,
				styles[size],
				error && styles.error,
				className,
			)}
			disabled={disabled}
			defaultValue={showPlaceholder ? '' : defaultValue}
			{...rest}
		>
			{showPlaceholder && (
				<option value='' disabled>
					{placeholder}
				</option>
			)}
			{children}
		</select>
	)
}

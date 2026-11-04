// ============================================================
// components/ui/Field/Field.tsx
// ------------------------------------------------------------
// Обёртка поля: Label + контрол + подсказка/ошибка.
//
// Автоматически связывает label и контрол:
//   id, required, aria-invalid, aria-describedby
//
// Пример:
//   <Field id="email" label="Email" error="Неверный email" required>
//     <Input type="email" />
//   </Field>
// ============================================================

import { cloneElement, isValidElement } from 'react'
import type { ReactElement } from 'react'
import { cn } from '@/lib/cn'
import { FieldError } from '../FieldError'
import { Label } from '../Label'
import styles from './Field.module.scss'

type FieldControlProps = {
	id?: string
	required?: boolean
	'aria-invalid'?: boolean
	'aria-describedby'?: string
}

type FieldProps = {
	id: string
	label: React.ReactNode
	children: React.ReactNode
	error?: React.ReactNode
	hint?: React.ReactNode
	required?: boolean
	className?: string
}

export function Field({
	id,
	label,
	children,
	error,
	hint,
	required = false,
	className,
}: FieldProps) {
	const errorId = `${id}-error`
	const hintId = `${id}-hint`
	const describedBy =
		[hint && !error ? hintId : null, error ? errorId : null]
			.filter(Boolean)
			.join(' ') || undefined

	const control = isValidElement(children)
		? cloneElement(children as ReactElement<FieldControlProps>, {
				id,
				required,
				'aria-invalid': error ? true : undefined,
				'aria-describedby': describedBy,
			})
		: children

	return (
		<div className={cn(styles.field, className)}>
			<Label htmlFor={id}>
				{label}
				{required && (
					<span className={styles.required} aria-hidden='true'>
						*
					</span>
				)}
			</Label>

			{control}

			{hint && !error && (
				<p id={hintId} className={styles.hint}>
					{hint}
				</p>
			)}

			{error && <FieldError id={errorId}>{error}</FieldError>}
		</div>
	)
}

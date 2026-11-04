// ============================================================
// components/sections/Newsletter/Newsletter.tsx
// ------------------------------------------------------------
// Подписка.
//
// onSubmit опционален: без него показывается успешное состояние.
//
// Пример:
//   <Newsletter title="Новости раз в месяц" />
// ============================================================

'use client'

import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { Alert, Button, Input } from '@/components/ui'
import { cn } from '@/lib/cn'
import styles from './Newsletter.module.scss'

type NewsletterProps = {
	title?: React.ReactNode
	description?: React.ReactNode
	placeholder?: string
	onSubmit?: (email: string) => void | Promise<void>
	className?: string
}

export function Newsletter({
	title = 'Новости раз в месяц',
	description,
	placeholder = 'you@example.com',
	onSubmit,
	className,
}: NewsletterProps) {
	const emailId = useId()
	const [sent, setSent] = useState(false)

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const form = event.currentTarget
		const email = String(new FormData(form).get('email') ?? '')

		await onSubmit?.(email)
		setSent(true)
		form.reset()
	}

	return (
		<section className={cn('section', className)}>
			<div className='container'>
				<div className={styles.panel}>
					<h2 className={styles.title}>{title}</h2>
					{description && (
						<p className={styles.description}>{description}</p>
					)}

					<form className={styles.form} onSubmit={handleSubmit}>
						<label htmlFor={emailId} className={styles.srOnly}>
							Email
						</label>
						<div className={styles.field}>
							<Input
								id={emailId}
								name='email'
								type='email'
								placeholder={placeholder}
								required
							/>
						</div>
						<Button type='submit'>Подписаться</Button>
					</form>

					{sent && (
						<Alert variant='success' title='Подписка оформлена'>
							Спасибо! Проверьте почту.
						</Alert>
					)}
				</div>
			</div>
		</section>
	)
}

// ============================================================
// components/sections/ContactForm/ContactForm.tsx
// ------------------------------------------------------------
// Контактная форма.
//
// onSubmit опционален: без него форма работает как демо
// и показывает успешное состояние.
//
// Пример:
//   <ContactForm title="Свяжитесь с нами" />
// ============================================================

'use client'

import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { Alert, Button, Input, Label, Textarea } from '@/components/ui'
import { cn } from '@/lib/cn'
import styles from './ContactForm.module.scss'

type ContactData = {
	name: string
	email: string
	message: string
}

type ContactFormProps = {
	title?: React.ReactNode
	description?: React.ReactNode
	onSubmit?: (data: ContactData) => void | Promise<void>
	className?: string
}

type Status = 'idle' | 'sending' | 'sent'

export function ContactForm({
	title = 'Свяжитесь с нами',
	description,
	onSubmit,
	className,
}: ContactFormProps) {
	const baseId = useId()
	const [status, setStatus] = useState<Status>('idle')

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const form = event.currentTarget
		const data = new FormData(form)
		const payload: ContactData = {
			name: String(data.get('name') ?? ''),
			email: String(data.get('email') ?? ''),
			message: String(data.get('message') ?? ''),
		}

		setStatus('sending')

		try {
			await onSubmit?.(payload)
			setStatus('sent')
			form.reset()
		} catch {
			setStatus('idle')
		}
	}

	return (
		<section className={cn('section', className)}>
			<div className='container'>
				<div className={styles.grid}>
					<div className={styles.text}>
						<h2 className={styles.title}>{title}</h2>
						{description ? (
							<p className={styles.description}>{description}</p>
						) : (
							<p className={styles.description}>
								Расскажите о задаче — ответим в течение рабочего дня.
							</p>
						)}
					</div>

					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles.field}>
							<Label htmlFor={`${baseId}-name`}>Имя</Label>
							<Input
								id={`${baseId}-name`}
								name='name'
								placeholder='Как к вам обращаться'
								required
							/>
						</div>

						<div className={styles.field}>
							<Label htmlFor={`${baseId}-email`}>Email</Label>
							<Input
								id={`${baseId}-email`}
								name='email'
								type='email'
								placeholder='you@example.com'
								required
							/>
						</div>

						<div className={styles.field}>
							<Label htmlFor={`${baseId}-message`}>Сообщение</Label>
							<Textarea
								id={`${baseId}-message`}
								name='message'
								rows={4}
								placeholder='Чем можем помочь?'
								required
							/>
						</div>

						<Button
							type='submit'
							fullWidth
							disabled={status === 'sending'}
						>
							{status === 'sending' ? 'Отправляем…' : 'Отправить'}
						</Button>

						{status === 'sent' && (
							<Alert variant='success' title='Готово'>
								Сообщение отправлено. Мы свяжемся с вами.
							</Alert>
						)}
					</form>
				</div>
			</div>
		</section>
	)
}

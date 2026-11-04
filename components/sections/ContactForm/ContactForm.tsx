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
import { Alert, Button, Field, Input, Textarea } from '@/components/ui'
import type { FormStatus } from '@/types'
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

export function ContactForm({
	title = 'Свяжитесь с нами',
	description,
	onSubmit,
	className,
}: ContactFormProps) {
	const baseId = useId()
	const [status, setStatus] = useState<FormStatus>('idle')

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
			setStatus('error')
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
						<Field id={`${baseId}-name`} label='Имя' required>
							<Input name='name' placeholder='Как к вам обращаться' />
						</Field>

						<Field id={`${baseId}-email`} label='Email' required>
							<Input
								name='email'
								type='email'
								placeholder='you@example.com'
							/>
						</Field>

						<Field id={`${baseId}-message`} label='Сообщение' required>
							<Textarea
								name='message'
								rows={4}
								placeholder='Чем можем помочь?'
							/>
						</Field>

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

						{status === 'error' && (
							<Alert variant='danger' title='Ошибка'>
								Не удалось отправить сообщение. Попробуйте ещё раз.
							</Alert>
						)}
					</form>
				</div>
			</div>
		</section>
	)
}

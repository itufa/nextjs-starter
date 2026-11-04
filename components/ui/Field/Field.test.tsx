import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Field } from './Field'
import { Input } from '../Input'

describe('Field', () => {
	it('связывает label, контрол и подсказку', () => {
		render(
			<Field id='email' label='Email' hint='Подсказка'>
				<Input />
			</Field>,
		)

		const input = screen.getByLabelText('Email')

		expect(input).toHaveAttribute('id', 'email')
		expect(input).toHaveAttribute('aria-describedby', 'email-hint')
		expect(screen.getByText('Подсказка')).toHaveAttribute('id', 'email-hint')
	})

	it('помечает ошибку и связывает её с контролом', () => {
		render(
			<Field id='email' label='Email' error='Неверный email'>
				<Input />
			</Field>,
		)

		const input = screen.getByLabelText('Email')

		expect(input).toHaveAttribute('aria-invalid', 'true')
		expect(input).toHaveAttribute('aria-describedby', 'email-error')
		expect(screen.getByText('Неверный email')).toHaveAttribute(
			'id',
			'email-error',
		)
	})

	it('добавляет required контролу', () => {
		render(
			<Field id='name' label='Имя' required>
				<Input />
			</Field>,
		)

		expect(screen.getByRole('textbox')).toBeRequired()
	})
})

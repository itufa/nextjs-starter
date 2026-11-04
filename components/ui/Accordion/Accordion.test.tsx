import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'

const items = [
	{ id: 'one', title: 'Первый', content: <p>Контент первого</p> },
	{ id: 'two', title: 'Второй', content: <p>Контент второго</p> },
]

describe('Accordion', () => {
	it('открывает и закрывает пункт', async () => {
		const user = userEvent.setup()
		render(<Accordion items={items} />)

		const trigger = screen.getByRole('button', { name: 'Первый' })

		expect(trigger).toHaveAttribute('aria-expanded', 'false')

		await user.click(trigger)
		expect(trigger).toHaveAttribute('aria-expanded', 'true')

		await user.click(trigger)
		expect(trigger).toHaveAttribute('aria-expanded', 'false')
	})

	it('в одиночном режиме открыт только один пункт', async () => {
		const user = userEvent.setup()
		render(<Accordion items={items} />)

		await user.click(screen.getByRole('button', { name: 'Первый' }))
		await user.click(screen.getByRole('button', { name: 'Второй' }))

		expect(
			screen.getByRole('button', { name: 'Первый' }),
		).toHaveAttribute('aria-expanded', 'false')
		expect(
			screen.getByRole('button', { name: 'Второй' }),
		).toHaveAttribute('aria-expanded', 'true')
	})
})

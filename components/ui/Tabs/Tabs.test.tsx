import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tabs } from './Tabs'

const items = [
	{ id: 'one', label: 'Первый', content: <p>Первый контент</p> },
	{ id: 'two', label: 'Второй', content: <p>Второй контент</p> },
]

describe('Tabs', () => {
	it('переключает панель по клику', async () => {
		const user = userEvent.setup()
		render(<Tabs items={items} />)

		expect(screen.getByRole('tabpanel')).toHaveTextContent('Первый контент')

		await user.click(screen.getByRole('tab', { name: 'Второй' }))

		expect(screen.getByRole('tabpanel')).toHaveTextContent('Второй контент')
		expect(screen.getByRole('tab', { name: 'Второй' })).toHaveAttribute(
			'aria-selected',
			'true',
		)
	})
})

import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('лендинг без серьёзных нарушений доступности', async ({ page }) => {
	await page.goto('/landing')

	const results = await new AxeBuilder({ page }).analyze()
	const serious = results.violations.filter(
		violation =>
			violation.impact === 'serious' || violation.impact === 'critical',
	)

	expect(serious).toEqual([])
})

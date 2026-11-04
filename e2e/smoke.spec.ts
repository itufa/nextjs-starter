import { test, expect } from '@playwright/test'

test('лендинг открывается', async ({ page }) => {
	await page.goto('/landing')

	await expect(page).toHaveTitle(/Лендинг/)
	await expect(page.getByRole('heading', { level: 1 })).toContainText(
		'Лендинг',
	)
})

test('тема переключается и сохраняется', async ({ page }) => {
	await page.goto('/')

	const html = page.locator('html')
	const initial = await html.getAttribute('data-theme')

	await page
		.getByRole('button', { name: 'Переключить тему' })
		.first()
		.click()

	const next = await html.getAttribute('data-theme')

	expect(next).not.toBe(initial)

	await page.reload()
	await expect(html).toHaveAttribute('data-theme', next ?? '')
})

test('мобильное меню открывается', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 })
	await page.goto('/')

	await page
		.getByRole('banner')
		.getByRole('button', { name: 'Открыть меню' })
		.click()

	const dialog = page.getByRole('dialog')
	await expect(dialog).toBeVisible()
	await expect(dialog.getByRole('link', { name: 'Лендинг' })).toBeVisible()
})

test('контактная форма отправляется', async ({ page }) => {
	await page.goto('/landing')

	const form = page
		.locator('form')
		.filter({ has: page.getByRole('button', { name: 'Отправить' }) })

	await form.getByLabel('Имя').fill('Иван')
	await form.getByLabel('Email').fill('ivan@example.com')
	await form.getByLabel('Сообщение').fill('Хочу собрать лендинг')
	await form.getByRole('button', { name: 'Отправить' }).click()

	await expect(form.getByRole('alert')).toContainText('Сообщение отправлено')
})

test('toast показывается через провайдер', async ({ page }) => {
	await page.goto('/')

	await page.getByRole('button', { name: 'Toast' }).click()

	const toast = page
		.getByRole('status')
		.filter({ hasText: 'Изменения сохранены.' })

	await expect(toast).toBeVisible()
})

test('404 отдаёт страницу not-found', async ({ page }) => {
	const response = await page.goto('/no-such-page')

	expect(response?.status()).toBe(404)
	await expect(
		page.getByRole('heading', { name: 'Страница не найдена' }),
	).toBeVisible()
})

test('приватная часть и legal открываются', async ({ page }) => {
	await page.goto('/app')
	await expect(page.getByRole('heading', { name: 'Обзор' })).toBeVisible()

	await page.goto('/app/settings')
	await expect(page.getByRole('heading', { name: 'Настройки' })).toBeVisible()

	await page.goto('/privacy')
	await expect(
		page.getByRole('heading', { name: 'Политика конфиденциальности' }),
	).toBeVisible()
})

test('dropdown и popover закрываются по Escape', async ({ page }) => {
	await page.goto('/')

	await page.getByRole('button', { name: 'Меню', exact: true }).click()
	await expect(page.getByRole('menu')).toBeVisible()
	await page.keyboard.press('Escape')
	await expect(page.getByRole('menu')).toBeHidden()

	await page.getByRole('button', { name: 'Popover', exact: true }).click()
	const popover = page.getByRole('dialog', { name: 'Popover' })
	await expect(popover).toBeVisible()
	await page.keyboard.press('Escape')
	await expect(popover).toBeHidden()
})

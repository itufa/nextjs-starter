import { describe, expect, it } from 'vitest'
import { formatDate } from './formatDate'
import { slugify } from './slugify'

describe('slugify', () => {
	it('транслитерирует кириллицу', () => {
		expect(slugify('Привет, мир!')).toBe('privet-mir')
	})

	it('схлопывает разделители', () => {
		expect(slugify('  Next.js   Starter  ')).toBe('next-js-starter')
	})
})

describe('formatDate', () => {
	it('форматирует дату', () => {
		expect(formatDate('2026-01-01')).toContain('2026')
	})

	it('возвращает пустую строку для невалидной даты', () => {
		expect(formatDate('not-a-date')).toBe('')
	})
})

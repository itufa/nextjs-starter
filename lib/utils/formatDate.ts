export function formatDate(
	value: Date | string | number,
	options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	},
	locale = 'ru-RU',
): string {
	const date = value instanceof Date ? value : new Date(value)

	if (Number.isNaN(date.getTime())) {
		return ''
	}

	return new Intl.DateTimeFormat(locale, options).format(date)
}

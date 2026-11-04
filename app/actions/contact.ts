'use server'

type ContactPayload = {
	name: string
	email: string
	message: string
}

function assertEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContact(data: ContactPayload): Promise<void> {
	const name = data.name.trim()
	const email = data.email.trim()
	const message = data.message.trim()

	if (name.length < 2) {
		throw new Error('Укажите имя')
	}

	if (!assertEmail(email)) {
		throw new Error('Укажите корректный email')
	}

	if (message.length < 10) {
		throw new Error('Сообщение слишком короткое')
	}

	// Демо: здесь должна быть отправка письма или запись в БД.
}

export async function subscribeNewsletter(email: string): Promise<void> {
	if (!assertEmail(email.trim())) {
		throw new Error('Укажите корректный email')
	}

	// Демо: здесь должна быть подписка на рассылку.
}

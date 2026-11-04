import type { Metadata } from 'next'
import { Breadcrumbs, Button, Card, Field, Input, Switch } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import styles from './settings.module.scss'

export const metadata: Metadata = buildMetadata({
	title: 'Настройки',
	description: 'Пример формы настроек в приватной части приложения.',
	path: '/app/settings',
})

export default function AppSettingsPage() {
	return (
		<>
			<Breadcrumbs
				items={[
					{ label: 'Главная', href: '/' },
					{ label: 'Кабинет', href: '/app' },
					{ label: 'Настройки' },
				]}
			/>

			<h1>Настройки</h1>

			<Card title='Профиль' description='Демонстрационная форма.'>
				<form className={styles.form}>
					<Field id='settings-name' label='Имя' required>
						<Input defaultValue='Анна' />
					</Field>

					<Field
						id='settings-email'
						label='Email'
						hint='На этот адрес придут уведомления.'
						required
					>
						<Input type='email' defaultValue='anna@example.com' />
					</Field>

					<Switch className={styles.switch} defaultChecked>
						Уведомления на почту
					</Switch>

					<Button type='submit'>Сохранить</Button>
				</form>
			</Card>
		</>
	)
}

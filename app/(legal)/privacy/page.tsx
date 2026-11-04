import type { Metadata } from 'next'
import { formatDate } from '@/lib/utils'
import { buildMetadata } from '@/lib/seo'
import styles from '../legal.module.scss'

export const metadata: Metadata = buildMetadata({
	title: 'Политика конфиденциальности',
	description: 'Демонстрационная политика конфиденциальности.',
	path: '/privacy',
})

export default function PrivacyPage() {
	return (
		<main className='section'>
			<div className='container'>
				<article className={styles.prose}>
					<p className={styles.updated}>
						Обновлено {formatDate('2026-01-01')}
					</p>
					<h1>Политика конфиденциальности</h1>

					<p>
						Это демонстрационный документ. Замените его на реальную
						политику вашего продукта перед публикацией.
					</p>

					<h2>Какие данные мы собираем</h2>
					<p>
						Имя, email и сообщение из контактной формы, а также
						технические данные, необходимые для работы сайта.
					</p>

					<h2>Как мы используем данные</h2>
					<p>
						Данные используются только для ответа на обращение и не
						передаются третьим лицам без вашего согласия.
					</p>

					<h2>Ваши права</h2>
					<ul>
						<li>запросить копию своих данных;</li>
						<li>исправить неточности;</li>
						<li>удалить данные по запросу.</li>
					</ul>
				</article>
			</div>
		</main>
	)
}

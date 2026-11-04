import type { Metadata } from 'next'
import { formatDate } from '@/lib/utils'
import { buildMetadata } from '@/lib/seo'
import styles from '../legal.module.scss'

export const metadata: Metadata = buildMetadata({
	title: 'Условия использования',
	description: 'Демонстрационные условия использования.',
	path: '/terms',
})

export default function TermsPage() {
	return (
		<main className='section'>
			<div className='container'>
				<article className={styles.prose}>
					<p className={styles.updated}>
						Обновлено {formatDate('2026-01-01')}
					</p>
					<h1>Условия использования</h1>

					<p>
						Это демонстрационный документ. Замените его на реальные
						условия перед публикацией.
					</p>

					<h2>Использование сайта</h2>
					<p>
						Сайт предоставляется «как есть». Вы обязуетесь не
						использовать его для незаконных действий.
					</p>

					<h2>Интеллектуальная собственность</h2>
					<p>
						Тексты, изображения и код принадлежат их правообладателям.
					</p>

					<h2>Ограничение ответственности</h2>
					<p>
						Мы не несём ответственности за возможные убытки, связанные
						с использованием демонстрационного сайта.
					</p>
				</article>
			</div>
		</main>
	)
}

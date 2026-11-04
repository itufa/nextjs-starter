import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './status.module.scss'

export const metadata: Metadata = {
	title: 'Страница не найдена',
}

export default function NotFound() {
	return (
		<main className='section'>
			<div className='container'>
				<p className={styles.code}>404</p>
				<h1 className={styles.title}>Страница не найдена</h1>
				<p className={styles.text}>
					Возможно, она переехала или никогда не существовала. Проверьте адрес
					или вернитесь на главную.
				</p>

				<div className={styles.actions}>
					<Link href='/' className={styles.link}>
						На главную
					</Link>
				</div>
			</div>
		</main>
	)
}

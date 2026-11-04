// ============================================================
// app/(marketing)/landing/page.tsx
// ------------------------------------------------------------
// Пример лендинга, собранного из секций.
// ============================================================

import { submitContact, subscribeNewsletter } from '@/app/actions/contact'
import { Badge, Button, Card, Icon, Progress } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import {
	Hero,
	LogoCloud,
	Features,
	FeatureSplit,
	HowItWorks,
	Stats,
	Testimonials,
	Pricing,
	FAQ,
	Team,
	BlogGrid,
	CTA,
	ContactForm,
	Newsletter,
} from '@/components/sections'
import styles from './page.module.scss'

export const metadata = buildMetadata({
	title: 'Лендинг',
	description: 'Пример лендинга, собранного из секций Next.js Starter',
	path: '/landing',
})

const features = [
	{
		icon: (
			<Icon>
				<path d='M13 2 3 14h9l-1 8 10-12h-9l1-8Z' />
			</Icon>
		),
		title: 'Быстрый старт',
		description:
			'Готовые секции, токены и компоненты. Собирайте страницу из блоков.',
	},
	{
		icon: (
			<Icon>
				<path d='m12 2 9 5-9 5-9-5 9-5Z' />
				<path d='m3 12 9 5 9-5' />
				<path d='m3 17 9 5 9-5' />
			</Icon>
		),
		title: 'Слоистая система',
		description:
			'Токены, темы, утилиты и компоненты не смешиваются и легко заменяются.',
	},
	{
		icon: (
			<Icon>
				<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z' />
			</Icon>
		),
		title: 'Типы и доступность',
		description:
			'Строгий TypeScript, aria-атрибуты, фокус-состояния и семантика.',
	},
	{
		icon: (
			<Icon>
				<path d='m16 18 6-6-6-6' />
				<path d='m8 6-6 6 6 6' />
			</Icon>
		),
		title: 'Без лишних зависимостей',
		description:
			'Только Next.js, React и Sass. Всё остальное — в самом проекте.',
	},
	{
		icon: (
			<Icon>
				<path d='M3 3v18h18' />
				<path d='m7 15 4-4 4 4 5-6' />
			</Icon>
		),
		title: 'Тёмная тема',
		description:
			'Переключение без вспышки, сохранение выбора и системная тема по умолчанию.',
	},
	{
		icon: (
			<Icon>
				<circle cx='12' cy='12' r='9' />
				<path d='M12 7v5l3 2' />
			</Icon>
		),
		title: 'Скорость',
		description:
			'Статическая генерация, минимум клиентского JS и ленивые изображения.',
	},
]

const steps = [
	{
		title: 'Установите',
		description:
			'Склонируйте репозиторий, установите зависимости и запустите dev-сервер.',
	},
	{
		title: 'Соберите',
		description:
			'Замените тексты и данные в секциях. Компоненты уже готовы к работе.',
	},
	{
		title: 'Запустите',
		description:
			'Соберите production-бандл и задеплойте на любой хостинг Next.js.',
	},
]

const stats = [
	{ value: '14', label: 'секций лендинга' },
	{ value: '28', label: 'UI-компонентов' },
	{ value: '2', label: 'темы оформления' },
	{ value: '0', label: 'лишних зависимостей' },
]

const testimonials = [
	{
		quote:
			'Собрали лендинг за два вечера. Секции действительно закрывают 90% задач.',
		name: 'Анна Петрова',
		role: 'CTO, Studio Nord',
	},
	{
		quote:
			'Наконец-то стартер, в котором дизайн-система не разваливается на третьем компоненте.',
		name: 'Иван Соколов',
		role: 'Frontend Lead, Orbit',
	},
	{
		quote:
			'Тёмная тема и типографика из коробки — то, что обычно делаешь неделю.',
		name: 'Мария Ким',
		role: 'Product Designer, Field',
	},
]

const plans = [
	{
		name: 'Старт',
		price: '0 ₽',
		period: '/мес',
		description: 'Для пет-проектов и экспериментов.',
		features: ['Все компоненты', 'Светлая и тёмная темы', 'Без поддержки'],
		cta: (
			<Button variant='outline' fullWidth>
				Начать
			</Button>
		),
	},
	{
		name: 'Про',
		price: '1 990 ₽',
		period: '/мес',
		description: 'Для команд, которые запускают продукт.',
		features: [
			'Всё из «Старта»',
			'Приоритетная поддержка',
			'Обновления секций',
		],
		cta: <Button fullWidth>Выбрать</Button>,
		popular: true,
	},
	{
		name: 'Бизнес',
		price: '4 990 ₽',
		period: '/мес',
		description: 'Для нескольких проектов и команд.',
		features: ['Всё из «Про»', 'Несколько проектов', 'Созвон с командой'],
		cta: (
			<Button variant='outline' fullWidth>
				Связаться
			</Button>
		),
	},
]

const faqItems = [
	{
		question: 'Подходит ли стартер для продакшена?',
		answer:
			'Да. В основе Next.js App Router, строгий TypeScript и собственная дизайн-система без лишних зависимостей.',
	},
	{
		question: 'Можно ли использовать только часть компонентов?',
		answer:
			'Да, каждый компонент независим и лежит в своей папке. Импортируйте только то, что нужно.',
	},
	{
		question: 'Как добавить новую тему?',
		answer:
			'Скопируйте файл темы в styles/themes, объявите токены и добавьте data-theme на html.',
	},
	{
		question: 'Есть ли тёмная тема?',
		answer:
			'Да, она включена. ThemeToggle сохраняет выбор в localStorage и учитывает системную тему.',
	},
	{
		question: 'Нужен ли Tailwind?',
		answer:
			'Нет. Стили построены на Sass-модулях и CSS-переменных, Tailwind не требуется.',
	},
]

const members = [
	{ name: 'Анна Петрова', role: 'CTO' },
	{ name: 'Иван Соколов', role: 'Frontend Lead' },
	{ name: 'Мария Ким', role: 'Product Designer' },
	{ name: 'Олег Смирнов', role: 'Backend Engineer' },
]

const posts = [
	{
		title: 'Как устроены токены дизайн-системы',
		excerpt:
			'Разбираем Sass-карты, CSS-переменные и переопределения на брейкпоинтах.',
		href: '/landing',
		date: '12 марта',
		category: 'Дизайн',
	},
	{
		title: 'Тёмная тема без вспышки',
		excerpt:
			'Inline-скрипт в head, data-theme и localStorage — без мигания светлым.',
		href: '/landing',
		date: '5 марта',
		category: 'Разработка',
	},
	{
		title: 'Секции, которые не стыдно показать',
		excerpt:
			'Как собрать лендинг из готовых блоков и не потерять ритм страницы.',
		href: '/landing',
		date: '28 февраля',
		category: 'Практика',
	},
]

export default function LandingPage() {
	return (
		<main>
			<Hero
				eyebrow='Next.js Starter'
				title='Лендинг, который собирается за вечер'
				description='Готовые секции, продуманная типографика, тёмная тема и доступность. Остаётся добавить смысл — остальное уже есть.'
				actions={
					<>
						<Button size='lg'>Начать бесплатно</Button>
						<Button size='lg' variant='outline'>
							Смотреть демо
						</Button>
					</>
				}
				media={
					<Card
						title='Панель проекта'
						description='Прогресс за неделю'
						footer={<Badge variant='success'>Всё готово</Badge>}
					>
						<div className={styles.heroPanel}>
							<div className={styles.heroRow}>
								<span>Готовность</span>
								<span className={styles.heroValue}>72%</span>
							</div>
							<Progress value={72} label='Готовность проекта' />
							<div className={styles.heroStats}>
								<div>
									<div className={styles.heroStatValue}>14</div>
									<div className={styles.heroStatLabel}>секций</div>
								</div>
								<div>
									<div className={styles.heroStatValue}>28</div>
									<div className={styles.heroStatLabel}>компонентов</div>
								</div>
								<div>
									<div className={styles.heroStatValue}>2</div>
									<div className={styles.heroStatLabel}>темы</div>
								</div>
							</div>
						</div>
					</Card>
				}
			/>

			<LogoCloud
				title='Нам доверяют команды'
				logos={['Acme', 'Globex', 'Initech', 'Umbrella', 'Stark']}
				className='section-sm bg-muted'
			/>

			<Features
				eyebrow='Возможности'
				title='Всё, что нужно для запуска'
				description='Стартер закрывает базовые задачи лендинга: от токенов и типографики до форм и тёмной темы.'
				features={features}
			/>

			<FeatureSplit
				eyebrow='Темы'
				title='Тёмная тема без вспышки'
				description='Скрипт в head выставляет data-theme до первой отрисовки. Выбор сохраняется, системная тема учитывается.'
				bullets={[
					'CSS-переменные вместо хардкода',
					'localStorage и системная тема',
					'Переключение без гидратационных ошибок',
				]}
				actions={
					<Button variant='outline'>Как это работает</Button>
				}
				media={
					<div className={styles.visual}>
						<Card
							className='w-full'
							title='Токены темы'
							description='Одна палитра — две темы'
						>
							<div className={styles.swatches}>
								{[
									['primary', '--color-primary'],
									['surface', '--color-bg'],
									['text', '--color-fg'],
									['success', '--color-success'],
								].map(([label, token]) => (
									<div key={token} className={styles.swatch}>
										<div
											className={styles.swatchColor}
											style={{ background: `var(${token})` }}
										/>
										<span className={styles.swatchName}>{label}</span>
									</div>
								))}
							</div>
						</Card>
					</div>
				}
				reverse
				className='bg-muted'
			/>

			<HowItWorks
				eyebrow='Процесс'
				title='Три шага до запуска'
				description='Никакой магии: установка, сборка, деплой.'
				steps={steps}
			/>

			<Stats
				title='Цифры проекта'
				stats={stats}
				className='bg-muted'
			/>

			<Testimonials
				eyebrow='Отзывы'
				title='Что говорят команды'
				description='Стартер используют для лендингов, документации и внутренних продуктов.'
				items={testimonials}
			/>

			<Pricing
				eyebrow='Тарифы'
				title='Простые условия'
				description='Начните бесплатно, масштабируйтесь по мере роста.'
				plans={plans}
				className='bg-muted'
			/>

			<FAQ
				eyebrow='FAQ'
				title='Частые вопросы'
				description='Если не нашли ответ — напишите нам.'
				items={faqItems}
			/>

			<Team
				eyebrow='Команда'
				title='Кто делает стартер'
				description='Небольшая команда, которая любит аккуратные интерфейсы.'
				members={members}
				className='bg-muted'
			/>

			<BlogGrid
				eyebrow='Блог'
				title='Полезные материалы'
				description='Заметки о дизайн-системах и разработке на Next.js.'
				posts={posts}
			/>

			<ContactForm
				title='Свяжитесь с нами'
				description='Расскажите о проекте — поможем со стартом и ответим на вопросы.'
				onSubmit={submitContact}
				className='bg-muted'
			/>

			<Newsletter
				title='Новости раз в месяц'
				description='Новые секции, компоненты и разборы. Без спама.'
				onSubmit={subscribeNewsletter}
			/>

			<CTA
				title='Готовы собрать свой лендинг?'
				description='Начните с готовых секций и адаптируйте их под свой продукт.'
				actions={
					<>
						<Button size='lg'>Начать бесплатно</Button>
						<Button size='lg' variant='outline'>
							Документация
						</Button>
					</>
				}
			/>
		</main>
	)
}

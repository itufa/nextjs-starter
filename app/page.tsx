// ============================================================
// app/page.tsx
// ------------------------------------------------------------
// Демонстрационная страница.
//
// Витрина сгруппирована по категориям:
//   1. Действия
//   2. Формы
//   3. Данные и обратная связь
//   4. Составные
//   5. Иконки
//   6. Сетка
// ============================================================

import {
	Button,
	Input,
	Label,
	FieldError,
	Textarea,
	Select,
	Checkbox,
	Radio,
	Switch,
	Badge,
	Avatar,
	Divider,
	Spinner,
	Skeleton,
	Progress,
	Icon,
	Card,
	Alert,
	Accordion,
	Tabs,
	Dropdown,
	Tooltip,
	Popover,
	Breadcrumbs,
	Pagination,
} from '@/components/ui'
import { CompositeDemos } from '@/components/demo/CompositeDemos'

const avatarSrc =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%235d21ce'/%3E%3Ccircle cx='40' cy='30' r='13' fill='%23fff'/%3E%3Cpath d='M16 70c0-13 11-24 24-24s24 11 24 24' fill='%23fff'/%3E%3C/svg%3E"

const accordionItems = [
	{
		id: 'delivery',
		title: 'Доставка',
		content: <p>Доставляем по всей России за 2–5 дней.</p>,
	},
	{
		id: 'payment',
		title: 'Оплата',
		content: <p>Картой, переводом или при получении.</p>,
	},
	{
		id: 'return',
		title: 'Возврат',
		content: <p>14 дней на возврат без объяснения причин.</p>,
	},
]

const tabItems = [
	{
		id: 'overview',
		label: 'Обзор',
		content: <p>Общее описание продукта и его возможностей.</p>,
	},
	{
		id: 'specs',
		label: 'Характеристики',
		content: <p>Размеры, материалы, комплектация.</p>,
	},
	{
		id: 'reviews',
		label: 'Отзывы',
		content: <p>Средняя оценка — 4.8 из 5.</p>,
	},
]

const dropdownItems = [
	{ label: 'Профиль' },
	{ label: 'Настройки' },
	{ label: 'Выйти', disabled: true },
]

function Demo({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<div className='mt-8'>
			<h3>{title}</h3>
			<div className='mt-4'>{children}</div>
		</div>
	)
}

export default function HomePage() {
	return (
		<main>
			<section className='section'>
				<div className='container'>
					<h1>Next.js Starter</h1>
					<p className='lead'>
						Микро-фреймворк для лендингов и корпоративных сайтов
					</p>
				</div>
			</section>

			{/* 1. Действия */}
			<section className='section section-sm border-top'>
				<div className='container'>
					<h2>Действия</h2>

					<Demo title='Кнопки'>
						<div className='flex gap-4 flex-wrap'>
							<Button variant='primary'>Primary</Button>
							<Button variant='secondary'>Secondary</Button>
							<Button variant='ghost'>Ghost</Button>
							<Button variant='outline'>Outline</Button>
						</div>
					</Demo>

					<Demo title='Размеры'>
						<div className='flex gap-4 items-center flex-wrap'>
							<Button size='sm'>Small</Button>
							<Button size='md'>Medium</Button>
							<Button size='lg'>Large</Button>
						</div>
					</Demo>

					<Demo title='Состояния'>
						<div className='flex gap-4 flex-wrap'>
							<Button disabled>Disabled</Button>
							<Button variant='outline' disabled>
								Disabled outline
							</Button>
						</div>
					</Demo>
				</div>
			</section>

			{/* 2. Формы */}
			<section className='section section-sm border-top'>
				<div className='container'>
					<h2>Формы</h2>

					<div className='grid mt-8'>
						<div className='col-4 col-md-12'>
							<h3>Input</h3>

							<div className='mt-4'>
								<Label htmlFor='name'>Имя</Label>
								<Input id='name' placeholder='Введите имя' />
							</div>

							<div className='mt-4'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='you@example.com'
								/>
							</div>

							<div className='mt-4'>
								<Label htmlFor='password'>Пароль</Label>
								<Input
									id='password'
									type='password'
									placeholder='••••••••'
								/>
							</div>

							<div className='mt-4'>
								<Label htmlFor='email-error'>Email с ошибкой</Label>
								<Input
									id='email-error'
									type='email'
									error
									defaultValue='неверный-email'
								/>
								<FieldError>Введите корректный email</FieldError>
							</div>

							<div className='mt-4'>
								<Label htmlFor='input-disabled'>Disabled</Label>
								<Input
									id='input-disabled'
									disabled
									defaultValue='Недоступно'
								/>
							</div>

							<h4 className='mt-6'>Размеры</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Input size='sm' placeholder='Small' />
								<Input size='md' placeholder='Medium' />
								<Input size='lg' placeholder='Large' />
							</div>
						</div>

						<div className='col-4 col-md-12'>
							<h3>Textarea</h3>

							<div className='mt-4'>
								<Label htmlFor='message'>Сообщение</Label>
								<Textarea
									id='message'
									rows={4}
									placeholder='Введите сообщение'
								/>
							</div>

							<div className='mt-4'>
								<Label htmlFor='message-error'>Сообщение с ошибкой</Label>
								<Textarea
									id='message-error'
									rows={4}
									error
									defaultValue='Слишком короткое'
								/>
								<FieldError>Минимум 20 символов</FieldError>
							</div>

							<div className='mt-4'>
								<Label htmlFor='message-disabled'>Disabled</Label>
								<Textarea
									id='message-disabled'
									rows={4}
									disabled
									defaultValue='Недоступно'
								/>
							</div>

							<h4 className='mt-6'>Размеры</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Textarea size='sm' rows={3} placeholder='Small' />
								<Textarea size='md' rows={3} placeholder='Medium' />
								<Textarea size='lg' rows={3} placeholder='Large' />
							</div>
						</div>

						<div className='col-4 col-md-12'>
							<h3>Select</h3>

							<h4 className='mt-4'>Состояния</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<div>
									<Label htmlFor='city'>Город</Label>
									<Select id='city' placeholder='Выберите город'>
										<option value='msk'>Москва</option>
										<option value='spb'>Санкт-Петербург</option>
										<option value='kzn'>Казань</option>
										<option value='nsk'>Новосибирск</option>
									</Select>
								</div>

								<div>
									<Label htmlFor='city-value'>
										С выбранным значением
									</Label>
									<Select id='city-value' defaultValue='spb'>
										<option value='msk'>Москва</option>
										<option value='spb'>Санкт-Петербург</option>
										<option value='kzn'>Казань</option>
									</Select>
								</div>

								<div>
									<Label htmlFor='city-error'>С ошибкой</Label>
									<Select id='city-error' error placeholder='Выберите город'>
										<option value='msk'>Москва</option>
										<option value='spb'>Санкт-Петербург</option>
									</Select>
									<FieldError>Выберите город из списка</FieldError>
								</div>

								<div>
									<Label htmlFor='city-disabled'>Disabled</Label>
									<Select id='city-disabled' disabled defaultValue='msk'>
										<option value='msk'>Москва</option>
										<option value='spb'>Санкт-Петербург</option>
									</Select>
								</div>
							</div>

							<h4 className='mt-6'>Размеры</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Select size='sm'>
									<option>Small</option>
								</Select>
								<Select size='md'>
									<option>Medium</option>
								</Select>
								<Select size='lg'>
									<option>Large</option>
								</Select>
							</div>
						</div>
					</div>

					<div className='grid mt-8'>
						<div className='col-4 col-md-12'>
							<h3>Checkbox</h3>

							<h4 className='mt-4'>Состояния</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Checkbox>Согласен с условиями</Checkbox>
								<Checkbox defaultChecked>Подписаться на новости</Checkbox>
								<Checkbox disabled>Недоступно</Checkbox>
								<Checkbox disabled defaultChecked>
									Недоступно, но выбран
								</Checkbox>
								<Checkbox error>Примите условия</Checkbox>
								<Checkbox error defaultChecked>
									Примите условия (выбран)
								</Checkbox>
							</div>

							<h4 className='mt-6'>Размеры</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Checkbox size='sm'>Small</Checkbox>
								<Checkbox size='md'>Medium</Checkbox>
								<Checkbox size='lg'>Large</Checkbox>
							</div>
						</div>

						<div className='col-4 col-md-12'>
							<h3>Radio</h3>

							<h4 className='mt-4'>Группа</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Radio name='plan' defaultChecked>
									Базовый
								</Radio>
								<Radio name='plan'>Расширенный</Radio>
								<Radio name='plan'>Максимальный</Radio>
							</div>

							<h4 className='mt-6'>Состояния</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Radio name='radio-disabled' disabled>
									Недоступно
								</Radio>
								<Radio name='radio-disabled-checked' disabled defaultChecked>
									Недоступно, но выбран
								</Radio>
								<Radio name='radio-error' error>
									Примите условия
								</Radio>
								<Radio name='radio-error-checked' error defaultChecked>
									Примите условия (выбран)
								</Radio>
							</div>

							<h4 className='mt-6'>Размеры</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Radio name='radio-size' size='sm' defaultChecked>
									Small
								</Radio>
								<Radio name='radio-size' size='md'>
									Medium
								</Radio>
								<Radio name='radio-size' size='lg'>
									Large
								</Radio>
							</div>
						</div>

						<div className='col-4 col-md-12'>
							<h3>Switch</h3>

							<h4 className='mt-4'>Состояния</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Switch>Уведомления по email</Switch>
								<Switch defaultChecked>Автопродление подписки</Switch>
								<Switch disabled>Недоступно</Switch>
								<Switch disabled defaultChecked>
									Недоступно, но включён
								</Switch>
								<Switch error>Примите условия</Switch>
								<Switch error defaultChecked>
									Примите условия (включён)
								</Switch>
							</div>

							<h4 className='mt-6'>Размеры</h4>
							<div className='flex flex-col gap-4 mt-4'>
								<Switch size='sm'>Small</Switch>
								<Switch size='md'>Medium</Switch>
								<Switch size='lg'>Large</Switch>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. Данные и обратная связь */}
			<section className='section section-sm border-top'>
				<div className='container'>
					<h2>Данные и обратная связь</h2>

					<div className='grid mt-8'>
						<div className='col-6 col-md-12'>
							<h3>Badge</h3>

							<h4 className='mt-6'>Варианты</h4>
							<div className='flex gap-2 flex-wrap mt-4'>
								<Badge>Neutral</Badge>
								<Badge variant='primary'>Primary</Badge>
								<Badge variant='secondary'>Secondary</Badge>
								<Badge variant='success'>Success</Badge>
								<Badge variant='warning'>Warning</Badge>
								<Badge variant='danger'>Danger</Badge>
								<Badge variant='info'>Info</Badge>
							</div>

							<h4 className='mt-6'>С точкой</h4>
							<div className='flex gap-2 flex-wrap mt-4'>
								<Badge dot>Neutral</Badge>
								<Badge variant='success' dot>
									Активен
								</Badge>
								<Badge variant='warning' dot>
									Ожидает
								</Badge>
								<Badge variant='danger' dot>
									Ошибка
								</Badge>
								<Badge variant='info' dot>
									Новое
								</Badge>
							</div>

							<h4 className='mt-6'>Размеры</h4>
							<div className='flex gap-2 items-center flex-wrap mt-4'>
								<Badge size='sm'>Small</Badge>
								<Badge size='md'>Medium</Badge>
								<Badge size='lg'>Large</Badge>
							</div>
						</div>

						<div className='col-6 col-md-12'>
							<h3>Avatar</h3>
							<div className='flex gap-4 items-center mt-4'>
								<Avatar size='sm' initials='АИ' />
								<Avatar size='md' initials='АИ' />
								<Avatar size='lg' initials='АИ' />
								<Avatar src={avatarSrc} alt='Алексей Иванов' size='md' />
							</div>

							<h3 className='mt-8'>Divider</h3>
							<div className='mt-4'>
								<Divider />
							</div>
							<div className='mt-6'>
								<Divider label='или' />
							</div>
							<div
								className='flex items-center gap-4 mt-6'
								style={{ height: '48px' }}
							>
								<span>Слева</span>
								<Divider orientation='vertical' />
								<span>Справа</span>
							</div>
						</div>
					</div>

					<div className='grid mt-8'>
						<div className='col-4 col-md-12'>
							<h3>Spinner</h3>
							<div className='flex gap-6 items-center mt-4'>
								<Spinner size='sm' />
								<Spinner size='md' />
								<Spinner size='lg' />
							</div>
						</div>

						<div className='col-4 col-md-12'>
							<h3>Skeleton</h3>
							<div className='mt-4'>
								<Skeleton variant='text' />
								<div className='mt-2'>
									<Skeleton variant='text' width='80%' />
								</div>
								<div className='flex gap-4 items-center mt-4'>
									<Skeleton variant='circle' width={48} height={48} />
									<div style={{ flex: 1 }}>
										<Skeleton variant='text' width='60%' />
										<div className='mt-2'>
											<Skeleton variant='text' width='40%' />
										</div>
									</div>
								</div>
								<div className='mt-4'>
									<Skeleton variant='rect' height={120} />
								</div>
							</div>
						</div>

						<div className='col-4 col-md-12'>
							<h3>Progress</h3>
							<div className='mt-4'>
								<Progress value={65} label='Загрузка' />
								<div className='mt-4'>
									<Progress value={40} variant='success' size='sm' />
								</div>
								<div className='mt-4'>
									<Progress value={80} variant='warning' />
								</div>
								<div className='mt-4'>
									<Progress value={30} variant='danger' size='lg' />
								</div>
								<div className='mt-4'>
									<Progress label='Загрузка' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 4. Составные */}
			<section className='section section-sm border-top'>
				<div className='container'>
					<h2>Составные</h2>

					<div className='grid mt-8'>
						<div className='col-6 col-md-12'>
							<h3>Card</h3>
							<div className='mt-4'>
								<Card
									title='Заголовок карточки'
									description='Короткое описание карточки'
									footer={<Button variant='outline'>Действие</Button>}
								>
									<p>
										Карточка — контейнер для контента с шапкой, телом и
										подвалом.
									</p>
								</Card>
							</div>
						</div>

						<div className='col-6 col-md-12'>
							<h3>Alert</h3>
							<div className='flex flex-col gap-4 mt-4'>
								<Alert variant='info' title='Информация'>
									Обновление выйдет в ближайшее время.
								</Alert>
								<Alert variant='success' title='Готово'>
									Изменения сохранены.
								</Alert>
								<Alert variant='warning' title='Обратите внимание'>
									Проверьте заполнение полей.
								</Alert>
								<Alert variant='danger' title='Ошибка'>
									Не удалось сохранить данные.
								</Alert>
							</div>
						</div>
					</div>

					<div className='grid mt-8'>
						<div className='col-6 col-md-12'>
							<h3>Accordion</h3>
							<div className='mt-4'>
								<Accordion
									items={accordionItems}
									defaultOpen={['delivery']}
								/>
							</div>
						</div>

						<div className='col-6 col-md-12'>
							<h3>Tabs</h3>
							<div className='mt-4'>
								<Tabs items={tabItems} />
							</div>
						</div>
					</div>

					<h3 className='mt-8'>Оверлеи</h3>
					<div className='flex gap-4 flex-wrap items-center mt-4'>
						<Dropdown label='Меню' items={dropdownItems} />

						<Tooltip label='Подсказка при наведении'>
							<Button variant='outline'>Tooltip</Button>
						</Tooltip>

						<Popover
							trigger={<Button variant='outline'>Popover</Button>}
							label='Popover'
						>
							<p>Всплывающее окно. Закрывается по клику вне и по Escape.</p>
						</Popover>

						<CompositeDemos />
					</div>

					<div className='grid mt-8'>
						<div className='col-6 col-md-12'>
							<h3>Breadcrumbs</h3>
							<div className='mt-4'>
								<Breadcrumbs
									items={[
										{ label: 'Главная', href: '/' },
										{ label: 'Каталог', href: '#catalog' },
										{ label: 'Компоненты' },
									]}
								/>
							</div>
						</div>

						<div className='col-6 col-md-12'>
							<h3>Pagination</h3>
							<div className='mt-4'>
								<Pagination
									page={3}
									totalPages={10}
									hrefForPage={page => `#page-${page}`}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 5. Иконки */}
			<section className='section section-sm border-top'>
				<div className='container'>
					<h2>Иконки</h2>

					<div className='flex gap-4 items-center mt-6'>
						<Icon size='sm'>
							<path d='M20 6 9 17l-5-5' />
						</Icon>
						<Icon>
							<path d='M20 6 9 17l-5-5' />
						</Icon>
						<Icon size='lg'>
							<path d='M20 6 9 17l-5-5' />
						</Icon>
						<Icon size='lg' label='Поиск'>
							<circle cx='11' cy='11' r='8' />
							<path d='m21 21-4.3-4.3' />
						</Icon>
					</div>
				</div>
			</section>

			{/* 6. Сетка */}
			<section className='section section-sm border-top'>
				<div className='container'>
					<h2>Сетка</h2>

					<div className='grid mt-6'>
						<div className='col-12 col-md-6 col-lg-4'>
							col-12 col-md-6 col-lg-4
						</div>
						<div className='col-12 col-md-6 col-lg-4'>
							col-12 col-md-6 col-lg-4
						</div>
						<div className='col-12 col-md-12 col-lg-4'>
							col-12 col-md-12 col-lg-4
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

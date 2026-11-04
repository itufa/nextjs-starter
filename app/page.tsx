// ============================================================
// app/page.tsx
// ------------------------------------------------------------
// Демонстрационная страница.
// ============================================================

import { Button, Input, Label, FieldError, Textarea, Select } from '@/components/ui'

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

			<section className='section bg-subtle'>
				<div className='container'>
					<h2>Кнопки</h2>
					<div className='flex gap-4 flex-wrap'>
						<Button variant='primary'>Primary</Button>
						<Button variant='secondary'>Secondary</Button>
						<Button variant='ghost'>Ghost</Button>
						<Button variant='outline'>Outline</Button>
					</div>

					<h2 className='mt-8'>Кнопки — размеры</h2>
					<div className='flex gap-4 items-center flex-wrap'>
						<Button size='sm'>Small</Button>
						<Button size='md'>Medium</Button>
						<Button size='lg'>Large</Button>
					</div>

					<h2 className='mt-8'>Состояния</h2>
					<div className='flex gap-4 flex-wrap'>
						<Button disabled>Disabled</Button>
						<Button variant='outline' disabled>
							Disabled outline
						</Button>
					</div>
				</div>
			</section>

			<section className='section'>
				<div className='container'>
					<h2>Поля ввода</h2>

					<div className='mt-6' style={{ maxWidth: '400px' }}>
						<Label htmlFor='name'>Имя</Label>
						<Input id='name' placeholder='Введите имя' />
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='email'>Email</Label>
						<Input id='email' type='email' placeholder='you@example.com' />
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='password'>Пароль</Label>
						<Input id='password' type='password' placeholder='••••••••' />
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='email-error'>Email с ошибкой</Label>
						<Input
							id='email-error'
							type='email'
							error
							defaultValue='неверный-email'
						/>
						<FieldError>Введите корректный email</FieldError>
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='disabled'>Disabled</Label>
						<Input id='disabled' disabled defaultValue='Недоступно' />
					</div>

					<h3 className='mt-8'>Размеры</h3>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Input size='sm' placeholder='Small' />
					</div>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Input size='md' placeholder='Medium' />
					</div>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Input size='lg' placeholder='Large' />
					</div>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='message'>Сообщение</Label>
						<Textarea id='message' rows={4} placeholder='Введите сообщение' />
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='message-error'>Сообщение с ошибкой</Label>
						<Textarea
							id='message-error'
							rows={4}
							error
							defaultValue='Слишком короткое'
						/>
						<FieldError>Минимум 20 символов</FieldError>
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='message-disabled'>Disabled</Label>
						<Textarea
							id='message-disabled'
							rows={4}
							disabled
							defaultValue='Недоступно'
						/>
					</div>

					<h3 className='mt-8'>Размеры Textarea</h3>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Textarea size='sm' rows={3} placeholder='Small' />
					</div>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Textarea size='md' rows={3} placeholder='Medium' />
					</div>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Textarea size='lg' rows={3} placeholder='Large' />
					</div>

					<h3 className='mt-8'>Select</h3>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='city'>Город</Label>
						<Select id='city' placeholder='Выберите город'>
							<option value='msk'>Москва</option>
							<option value='spb'>Санкт-Петербург</option>
							<option value='kzn'>Казань</option>
							<option value='nsk'>Новосибирск</option>
						</Select>
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='city-value'>С выбранным значением</Label>
						<Select id='city-value' defaultValue='spb'>
							<option value='msk'>Москва</option>
							<option value='spb'>Санкт-Петербург</option>
							<option value='kzn'>Казань</option>
						</Select>
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='city-error'>С ошибкой</Label>
						<Select id='city-error' error placeholder='Выберите город'>
							<option value='msk'>Москва</option>
							<option value='spb'>Санкт-Петербург</option>
						</Select>
						<FieldError>Выберите город из списка</FieldError>
					</div>

					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Label htmlFor='city-disabled'>Disabled</Label>
						<Select id='city-disabled' disabled defaultValue='msk'>
							<option value='msk'>Москва</option>
							<option value='spb'>Санкт-Петербург</option>
						</Select>
					</div>

					<h3 className='mt-8'>Размеры Select</h3>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Select size='sm'>
							<option>Small</option>
						</Select>
					</div>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Select size='md'>
							<option>Medium</option>
						</Select>
					</div>
					<div className='mt-4' style={{ maxWidth: '400px' }}>
						<Select size='lg'>
							<option>Large</option>
						</Select>
					</div>
				</div>
			</section>

			<section className='section bg-subtle'>
				<div className='container'>
					<h2>Сетка</h2>
					<div className='grid'>
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

import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: '100%',
				height: '100%',
				padding: '72px',
				background: '#0a0a0a',
				color: '#fafafa',
				fontFamily: 'sans-serif',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '16px',
					color: '#fd661f',
					fontSize: 28,
					fontWeight: 600,
				}}
			>
				<div
					style={{
						display: 'flex',
						width: 48,
						height: 48,
						background: '#fd661f',
						borderRadius: 12,
					}}
				/>
				{siteConfig.name}
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						fontSize: 76,
						fontWeight: 800,
						lineHeight: 1.05,
						letterSpacing: '-0.03em',
					}}
				>
					<div>Лендинг, который</div>
					<div>собирается за вечер</div>
				</div>
				<div
					style={{
						maxWidth: 900,
						color: '#a3a3a3',
						fontSize: 30,
						lineHeight: 1.4,
					}}
				>
					{siteConfig.description}
				</div>
			</div>
		</div>,
		size,
	)
}

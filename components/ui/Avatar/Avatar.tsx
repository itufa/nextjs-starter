// ============================================================
// components/ui/Avatar/Avatar.tsx
// ------------------------------------------------------------
// Аватар.
//
// Размеры:  sm | md | lg
// Источник: изображение (src) или инициалы (initials)
//
// Примеры:
//   <Avatar initials="АИ" />
//   <Avatar src="/me.jpg" alt="Алексей Иванов" size="lg" />
//   <Avatar initials="AI" size="sm" />
//
// Если передан src, alt обязателен для доступности.
// Внешние домены изображений требуют images.remotePatterns
// в next.config.ts (стандартное поведение next/image).
// ============================================================

import Image from 'next/image'
import { cn } from '@/lib/cn'
import styles from './Avatar.module.scss'

type AvatarSize = 'sm' | 'md' | 'lg'

const SIZES: Record<AvatarSize, number> = {
	sm: 32,
	md: 40,
	lg: 56,
}

type AvatarProps = {
	src?: string
	alt?: string
	initials?: string
	size?: AvatarSize
	className?: string
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

export function Avatar({
	src,
	alt,
	initials,
	size = 'md',
	className,
	...rest
}: AvatarProps) {
	return (
		<span className={cn(styles.root, styles[size], className)} {...rest}>
			{src ? (
				<Image
					src={src}
					alt={alt ?? ''}
					width={SIZES[size]}
					height={SIZES[size]}
					className={styles.image}
				/>
			) : (
				<span className={styles.initials}>{initials}</span>
			)}
		</span>
	)
}

// ============================================================
// components/ui/Skeleton/Skeleton.tsx
// ------------------------------------------------------------
// Скелетон (заглушка на время загрузки).
//
// Варианты: text | circle | rect
// Размеры:  через width / height (px или строка)
//
// Примеры:
//   <Skeleton />
//   <Skeleton variant="circle" width={48} height={48} />
//   <Skeleton variant="rect" height={120} />
// ============================================================

import { cn } from '@/lib/cn'
import styles from './Skeleton.module.scss'

type SkeletonVariant = 'text' | 'circle' | 'rect'

type SkeletonProps = {
	variant?: SkeletonVariant
	width?: React.CSSProperties['width']
	height?: React.CSSProperties['height']
	className?: string
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

export function Skeleton({
	variant = 'text',
	width,
	height,
	className,
	style,
	...rest
}: SkeletonProps) {
	return (
		<span
			aria-hidden='true'
			className={cn(styles.skeleton, styles[variant], className)}
			style={{ width, height, ...style }}
			{...rest}
		/>
	)
}

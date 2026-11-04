// ============================================================
// components/sections/BlogGrid/BlogGrid.tsx
// ------------------------------------------------------------
// Сетка статей.
//
// posts: ({ title, excerpt, href, date?, category?, media? })
//
// Пример:
//   <BlogGrid
//     title="Блог"
//     posts={[{
//       title: "Как ускорить сайт",
//       excerpt: "...",
//       href: "/blog/speed",
//     }]}
//   />
// ============================================================

import Link from 'next/link'
import { cn } from '@/lib/cn'
import styles from './BlogGrid.module.scss'

type BlogPost = {
	title: React.ReactNode
	excerpt: React.ReactNode
	href: string
	date?: React.ReactNode
	category?: React.ReactNode
	media?: React.ReactNode
}

type BlogGridProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	posts: BlogPost[]
	className?: string
}

export function BlogGrid({
	eyebrow,
	title,
	description,
	posts,
	className,
}: BlogGridProps) {
	return (
		<section className={cn('section', className)}>
			<div className='container'>
				<header className={styles.header}>
					{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
					<h2 className={styles.title}>{title}</h2>
					{description && (
						<p className={styles.description}>{description}</p>
					)}
				</header>

				<div className={styles.grid}>
					{posts.map((post, index) => (
						<article key={`${post.href}-${index}`} className={styles.card}>
							<div className={styles.media}>
								{post.media ?? (
									<span className={styles.mediaPlaceholder} aria-hidden='true'>
										{post.category}
									</span>
								)}
							</div>

							<div className={styles.body}>
								<div className={styles.meta}>
									{post.category && (
										<span className={styles.category}>{post.category}</span>
									)}
									{post.date && (
										<span className={styles.date}>{post.date}</span>
									)}
								</div>

								<h3 className={styles.cardTitle}>
									<Link href={post.href} className={styles.titleLink}>
										{post.title}
									</Link>
								</h3>

								<p className={styles.excerpt}>{post.excerpt}</p>

								<Link href={post.href} className={styles.readMore}>
									Читать →
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

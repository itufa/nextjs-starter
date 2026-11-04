// ============================================================
// components/sections/Team/Team.tsx
// ------------------------------------------------------------
// Команда.
//
// members: ({ name, role, avatar? })
//
// Пример:
//   <Team
//     title="Команда"
//     members={[{ name: "Анна Петрова", role: "CTO" }]}
//   />
// ============================================================

import { Avatar } from '@/components/ui'
import { cn } from '@/lib/cn'
import styles from './Team.module.scss'

type TeamMember = {
	name: string
	role: React.ReactNode
	avatar?: React.ReactNode
}

type TeamProps = {
	eyebrow?: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	members: TeamMember[]
	className?: string
}

function getInitials(name: string) {
	return name
		.split(/\s+/)
		.map(part => part[0])
		.filter(Boolean)
		.slice(0, 2)
		.join('')
}

export function Team({
	eyebrow,
	title,
	description,
	members,
	className,
}: TeamProps) {
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
					{members.map(member => (
						<article key={member.name} className={styles.member}>
							<div className={styles.avatar}>
								{member.avatar ?? (
									<Avatar
										size='lg'
										initials={getInitials(member.name)}
									/>
								)}
							</div>
							<h3 className={styles.name}>{member.name}</h3>
							<p className={styles.role}>{member.role}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

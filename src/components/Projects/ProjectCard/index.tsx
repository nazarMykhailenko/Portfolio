import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Github } from 'lucide-react'
import './styles.css'

import styles from './Card.module.css'

interface CardProps {
	title: string
	category: { en: string; ru: string }
	linkSite: string
	linkGitHub: string
	id: number
}

export const Card: React.FC<CardProps> = ({
	title,
	category,
	linkSite,
	linkGitHub,
	id,
}) => {
	const { i18n } = useTranslation()

	const currentLanguage = i18n.language as 'en' | 'ru'

	console.log(category[currentLanguage])

	return (
		<div className={`${styles.card} card_${id}`}>
			<div className={styles.thumbnail}>
				<div className={styles.mask} />
			</div>
			<span className={styles.category}>
				{category[currentLanguage] || category.en}
			</span>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.links}>
				{linkSite ? (
					<a
						href={linkSite}
						target='_blank'
						className={styles.site}
						rel='noreferrer'
					>
						<Link />
					</a>
				) : null}
				{linkGitHub ? (
					<a
						href={linkGitHub}
						target='_blank'
						className={styles.github}
						rel='noreferrer'
					>
						<Github />
					</a>
				) : null}
			</div>
		</div>
	)
}

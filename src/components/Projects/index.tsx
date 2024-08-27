import React from 'react'
import { Card } from './ProjectCard'
import { projects, titles } from './projects'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import styles from './Project.module.css'

interface MenuItems {
	id: number
	title: { en: string; ru: string }
	category: { en: string; ru: string }
	linkSite: string
	linkGitHub: string
}

export const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t, i18n } = useTranslation()
	const [items, setItems] = React.useState<MenuItems[]>(projects)

	const filterItem = (categoryItem: string) => {
		const updatedItems = projects.filter((elem) => {
			return elem.category.en === categoryItem
		})

		setItems(updatedItems)
	}

	const getTitle = (item: {
		id: number
		title: { en: string; ru: string }
	}) => {
		const language = i18n.language as 'en' | 'ru'
		return item.title[language] || item.title.en
	}

	return (
		<section
			className={`${styles.wrapper} mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32`}
			id='projects'
			ref={ref}
		>
			<h2 className={styles.title}>{t(TranslationKeys.PROJECTS)}</h2>
			<div className={styles.filters}>
				<span className={styles.item} onClick={() => setItems(projects)}>
					{t(TranslationKeys.ALL)}
				</span>
				{titles.map((item) => {
					return (
						<span
							key={item.id}
							className={styles.item}
							onClick={() => filterItem(item.title.en)}
						>
							{getTitle(item)}
						</span>
					)
				})}
			</div>
			<div className={styles.container}>
				{items.map((item) => {
					return (
						<Card
							id={item.id}
							key={item.id}
							title={getTitle(item)}
							category={item.category}
							linkSite={item.linkSite}
							linkGitHub={item.linkGitHub}
						/>
					)
				})}
			</div>
		</section>
	)
})

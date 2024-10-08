import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from './i18n'
import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import { Info } from './components/Info'
import { Services } from './components/Services'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import emoji from './assets/emoji-wink-svgrepo-com.svg'
import './App.css'

const App: React.FC = () => {
	const [language, setLanguage] = useState('EN')
	const { i18n, t } = useTranslation()

	const toggleLanguage = () => {
		const newLanguage = language === 'EN' ? 'RU' : 'EN'
		setLanguage(newLanguage)
		i18n.changeLanguage(newLanguage.toLowerCase())
	}

	const aboutRef = React.useRef(null)
	const infoRef = React.useRef(null)
	const servicesRef = React.useRef(null)
	const experienceRef = React.useRef(null)
	const projectRef = React.useRef(null)

	const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
		if (!ref.current) return

		ref.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className='bg-[#f9f7fc] w-full h-screen relative'>
			{/* Fixed Language Switch Button */}
			<div className='fixed top-5 right-10 z-50'>
				<button
					onClick={toggleLanguage}
					className='bg-[#ff4b61] text-white px-4 py-2 rounded-full shadow-lg transition-transform hover:scale-105'
				>
					{language === 'EN' ? 'RU' : 'EN'}
				</button>
			</div>

			<div className='flex h-full'>
				<Sidebar
					handleScrollTo={handleScrollTo}
					aboutRef={aboutRef}
					infoRef={infoRef}
					servicesRef={servicesRef}
					experienceRef={experienceRef}
					projectRef={projectRef}
				/>
				<main className='xl:w-[90%] xl:ml-auto h-full overflow-y-auto outline-none'>
					<About ref={aboutRef} />
					<Info ref={infoRef} />
					<Services ref={servicesRef} />
					<Experience ref={experienceRef} />
					<Projects ref={projectRef} />

					<h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3 justify-center px-4'>
						<div>{t(TranslationKeys.THANKS)}</div>
						<div>
							<img
								className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'
								src={emoji}
								alt='emoji'
							/>
						</div>
					</h1>
				</main>
			</div>
		</div>
	)
}

export default App

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useIntersection } from 'react-use'
import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import { Info } from './components/Info'
import { Services } from './components/Services'
import './App.css'

const App: React.FC = () => {
	// Language state to switch between RU and EN
	const [language, setLanguage] = useState('EN')
	const { i18n } = useTranslation() // Access i18n instance to change language

	const toggleLanguage = () => {
		const newLanguage = language === 'EN' ? 'RU' : 'EN'
		setLanguage(newLanguage)
		i18n.changeLanguage(newLanguage.toLowerCase()) // Change i18n language
	}

	const aboutRef = React.useRef(null)
	const infoRef = React.useRef(null)
	const servicesRef = React.useRef(null)

	// const [activeSection, setActiveSection] = React.useState('about')

	const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
		if (!ref.current) return

		ref.current.scrollIntoView({ behavior: 'smooth' })
	}

	const aboutIntersection = useIntersection(aboutRef, {
		threshold: 0.4,
	})
	const advantagesIntersection = useIntersection(infoRef, {
		threshold: 0.4,
	})
	const feesIntersection = useIntersection(servicesRef, {
		threshold: 0.4,
	})

	React.useEffect(() => {
		if (aboutIntersection?.isIntersecting) {
			// setActiveSection('about')
		} else if (advantagesIntersection?.isIntersecting) {
			// setActiveSection('advantages')
		} else if (feesIntersection?.isIntersecting) {
			// setActiveSection('fees')
		}
	}, [
		aboutIntersection?.isIntersecting,
		advantagesIntersection?.isIntersecting,
		feesIntersection?.isIntersecting,
	])

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
				/>
				<main className='w-[90%] ml-auto p-10 h-full overflow-y-auto outline-none'>
					<About ref={aboutRef} />
					<Info ref={infoRef} />
					<Services ref={servicesRef} />
				</main>
			</div>
		</div>
	)
}

export default App

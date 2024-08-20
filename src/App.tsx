import React, { useState } from 'react'
import { useTranslation } from 'react-i18next' // Import the useTranslation hook
import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import './App.css'
import { Info } from './components/Info'

const App: React.FC = () => {
	// Language state to switch between RU and EN
	const [language, setLanguage] = useState('EN')
	const { i18n } = useTranslation() // Access i18n instance to change language

	const toggleLanguage = () => {
		const newLanguage = language === 'EN' ? 'RU' : 'EN'
		setLanguage(newLanguage)
		i18n.changeLanguage(newLanguage.toLowerCase()) // Change i18n language
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
				<Sidebar />
				<main className='w-[90%] ml-auto p-10 h-full overflow-y-auto outline-none'>
					<About />
					<Info />
					Hello
				</main>
			</div>
		</div>
	)
}

export default App

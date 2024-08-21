import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import code from '../../assets/code.svg'
import optimization from '../../assets/optimization.svg'
import backend from '../../assets/backend.svg'

export const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div className='mb-32' ref={ref}>
			<h1 className='text-3xl text-center font-bold mb-10'>
				{t(TranslationKeys.SERVICES)}
			</h1>

			<div className='w-[80%] mx-auto'>
				<div className='flex gap-8 justify-between text-white text-center'>
					{/* Card 1: Web Development */}
					<div className='w-1/3 bg-[#6c6ce4] px-6 py-8 rounded-lg shadow-lg shadow-[#6c6ce4]/50 transform transition-transform hover:-translate-y-2 duration-300'>
						<div className='flex justify-center mb-4'>
							<img className='w-16 object-cover' src={code} alt='code' />
						</div>
						<h2 className='text-xl font-bold mb-4'>
							{t(TranslationKeys.WEB_DEVELOPMENT)}
						</h2>
						<p>React, JavaScript, Python, HTML, NextJS, Vite, CSS, SCSS.</p>
					</div>

					{/* Card 2: Web Optimization */}
					<div className='w-1/3 bg-[#f9d74b] px-6 py-8 rounded-lg shadow-lg shadow-[#f9d74b]/50 transform transition-transform hover:-translate-y-2 duration-300'>
						<div className='flex justify-center mb-4'>
							<img
								className='w-16 object-cover'
								src={optimization}
								alt='optimization'
							/>
						</div>
						<h2 className='text-xl font-bold mb-4'>
							{t(TranslationKeys.WEB_OPTIMIZATION)}
						</h2>
						<p>VS Code, WebStorm, Figma</p>
					</div>

					{/* Card 3: Backend Development */}
					<div className='w-1/3 bg-[#f97b8b] px-6 py-8 rounded-lg shadow-lg shadow-[#f97b8b]/50 transform transition-transform hover:-translate-y-2 duration-300'>
						<div className='flex justify-center mb-4'>
							<img className='w-16 object-cover' src={backend} alt='backend' />
						</div>
						<h2 className='text-xl font-bold mb-4'>
							{t(TranslationKeys.BACKEND)}
						</h2>
						<p>NodeJS, FastAPI, SQL, PostgreSQL</p>
					</div>
				</div>
			</div>
		</div>
	)
})

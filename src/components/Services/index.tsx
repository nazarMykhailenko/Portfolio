import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import code from '../../assets/code.svg'
import optimization from '../../assets/optimization.svg'
import backend from '../../assets/backend.svg'

export const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div className='mb-20 md:mb-28 lg:mb-32' ref={ref}>
			<h1 className='text-2xl md:text-3xl text-center font-bold mb-8 md:mb-10 lg:mb-12 text-gray-800'>
				{t(TranslationKeys.SERVICES)}
			</h1>

			<div className='w-[90%] sm:w-[85%] mx-auto'>
				<div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 justify-between text-white text-center'>
					{/* First Card */}
					<div className='flex-1 bg-[#6c6ce4] px-4 py-6 md:px-6 md:py-8 rounded-lg shadow-lg shadow-[#6c6ce4]/50 transform transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300'>
						<div className='flex justify-center mb-3 md:mb-4'>
							<img
								className='w-14 md:w-16 object-cover'
								src={code}
								alt='code'
							/>
						</div>
						<h2 className='text-lg md:text-xl font-bold mb-3 md:mb-4'>
							{t(TranslationKeys.WEB_DEVELOPMENT)}
						</h2>
						<p className='leading-relaxed text-xs md:text-sm lg:text-base'>
							React, JavaScript, Python, HTML, NextJS, Vite, CSS, SCSS
						</p>
					</div>

					{/* Second Card */}
					<div className='flex-1 bg-[#f9d74b] px-4 py-6 md:px-6 md:py-8 rounded-lg shadow-lg shadow-[#f9d74b]/50 transform transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300'>
						<div className='flex justify-center mb-3 md:mb-4'>
							<img
								className='w-14 md:w-16 object-cover'
								src={optimization}
								alt='optimization'
							/>
						</div>
						<h2 className='text-lg md:text-xl font-bold mb-3 md:mb-4'>
							{t(TranslationKeys.WEB_OPTIMIZATION)}
						</h2>
						<p className='leading-relaxed text-xs md:text-sm lg:text-base'>
							VS Code, WebStorm, Figma
						</p>
					</div>

					{/* Third Card */}
					<div className='flex-1 bg-[#f97b8b] px-4 py-6 md:px-6 md:py-8 rounded-lg shadow-lg shadow-[#f97b8b]/50 transform transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300'>
						<div className='flex justify-center mb-3 md:mb-4'>
							<img
								className='w-14 md:w-16 object-cover'
								src={backend}
								alt='backend'
							/>
						</div>
						<h2 className='text-lg md:text-xl font-bold mb-3 md:mb-4'>
							{t(TranslationKeys.BACKEND)}
						</h2>
						<p className='leading-relaxed text-xs md:text-sm lg:text-base'>
							NodeJS, FastAPI, SQL, PostgreSQL
						</p>
					</div>
				</div>
			</div>
		</div>
	)
})

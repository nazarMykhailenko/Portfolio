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
			<h1 className='text-3xl text-center font-bold mb-10 text-gray-800'>
				{t(TranslationKeys.SERVICES)}
			</h1>

			<div className='w-[85%] mx-auto'>
				<div className='flex flex-col lg:flex-row gap-8 justify-between text-white text-center'>
					{/* First Card */}
					<div className='flex-1 bg-[#6c6ce4] px-6 py-8 rounded-lg shadow-lg shadow-[#6c6ce4]/50 transform transition-all hover:-translate-y-3 hover:scale-105 hover:shadow-2xl duration-300'>
						<div className='flex justify-center mb-4'>
							<img className='w-16 object-cover' src={code} alt='code' />
						</div>
						<h2 className='text-xl font-bold mb-4'>
							{t(TranslationKeys.WEB_DEVELOPMENT)}
						</h2>
						<p className='leading-relaxed text-sm md:text-base'>
							React, JavaScript, Python, HTML, NextJS, Vite, CSS, SCSS
						</p>
					</div>

					{/* Second Card */}
					<div className='flex-1 bg-[#f9d74b] px-6 py-8 rounded-lg shadow-lg shadow-[#f9d74b]/50 transform transition-all hover:-translate-y-3 hover:scale-105 hover:shadow-2xl duration-300'>
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
						<p className='leading-relaxed text-sm md:text-base'>
							VS Code, WebStorm, Figma
						</p>
					</div>

					{/* Third Card */}
					<div className='flex-1 bg-[#f97b8b] px-6 py-8 rounded-lg shadow-lg shadow-[#f97b8b]/50 transform transition-all hover:-translate-y-3 hover:scale-105 hover:shadow-2xl duration-300'>
						<div className='flex justify-center mb-4'>
							<img className='w-16 object-cover' src={backend} alt='backend' />
						</div>
						<h2 className='text-xl font-bold mb-4'>
							{t(TranslationKeys.BACKEND)}
						</h2>
						<p className='leading-relaxed text-sm md:text-base'>
							NodeJS, FastAPI, SQL, PostgreSQL
						</p>
					</div>
				</div>
			</div>
		</div>
	)
})

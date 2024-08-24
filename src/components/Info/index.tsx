import React from 'react'
import { Flame, UsersRound, Coffee } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import './styles.css'

export const Info = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div className='mb-32' ref={ref}>
			<h1 className='text-3xl text-center font-bold mb-10 text-gray-800'>
				{t(TranslationKeys.ABOUT_ME)}
			</h1>

			<div className='mb-14 bg-white w-[85%] md:w-[80%] px-10 py-8 rounded-lg shadow-lg mt-4 mx-auto chat-notification flex flex-col md:flex-row gap-10'>
				<div className='w-full md:w-1/2 flex flex-col justify-between'>
					{/* Top content */}
					<div>
						<p className='text-[#5e5c7f] mb-6 leading-relaxed text-base'>
							{t(TranslationKeys.INFO)}
						</p>
					</div>

					{/* Button placed at the bottom */}
					<div className='mt-auto'>
						<button className='bg-[#ff4b61] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#ff6b7d] hover:-translate-y-1'>
							{t(TranslationKeys.DOWNLOAD_CV)}
						</button>
					</div>
				</div>

				{/* Percentage Charts for Skills */}
				<div className='w-full md:w-1/2'>
					<div className='mb-4'>
						<h2 className='text-lg font-semibold text-gray-800'>
							{t(TranslationKeys.WEB_DEVELOPMENT)}
						</h2>
						<div className='progress-bar'>
							<div className='progress-fill web-dev transition-all duration-700'></div>
						</div>
						<p className='text-right text-sm mt-1 text-gray-600'>80%</p>
					</div>

					<div className='mb-4'>
						<h2 className='text-lg font-semibold text-gray-800'>
							{t(TranslationKeys.WEB_OPTIMIZATION)}
						</h2>
						<div className='progress-bar'>
							<div className='progress-fill optimization transition-all duration-700'></div>
						</div>
						<p className='text-right text-sm mt-1 text-gray-600'>93%</p>
					</div>

					<div>
						<h2 className='text-lg font-semibold text-gray-800'>
							{t(TranslationKeys.BACKEND)}
						</h2>
						<div className='progress-bar'>
							<div className='progress-fill backend transition-all duration-700'></div>
						</div>
						<p className='text-right text-sm mt-1 text-gray-600'>43%</p>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div className='w-[85%] md:w-[80%] mx-auto'>
				<div className='flex flex-col md:flex-row gap-8 justify-between'>
					{/* First Stat */}
					<div className='flex items-center gap-6'>
						<Flame size={30} color='#dedeea' />
						<div>
							<div className='text-3xl text-[#343252] font-bold'>10+</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.FINISHED_PROJECTS)}
							</div>
						</div>
					</div>

					{/* Second Stat */}
					<div className='flex items-center gap-6'>
						<UsersRound size={30} color='#dedeea' />
						<div>
							<div className='text-3xl text-[#343252] font-bold'>3+</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.HAPPY_CLIENTS)}
							</div>
						</div>
					</div>

					{/* Third Stat */}
					<div className='flex items-center gap-6'>
						<Coffee size={30} color='#dedeea' />
						<div>
							<div className='text-3xl text-[#343252] font-bold'>1000+</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.CUPS_OF_COFFEE)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

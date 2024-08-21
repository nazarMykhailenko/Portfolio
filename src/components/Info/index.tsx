import React from 'react'
import { Flame, UsersRound, Coffee } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import './styles.css'

export const Info = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div className='mb-32' ref={ref}>
			<h1 className='text-3xl text-center font-bold mb-10'>
				{t(TranslationKeys.ABOUT_ME)}
			</h1>

			<div className='mb-14 bg-white w-[80%] px-10 py-8 rounded-lg shadow-lg mt-4 mx-auto chat-notification flex gap-10'>
				<div className='w-1/2 flex flex-col justify-between'>
					{/* Top content */}
					<div>
						<p className='text-[#5e5c7f] mb-6'>{t(TranslationKeys.INFO)}</p>
					</div>

					{/* Button placed at the bottom */}
					<div className='mt-auto'>
						<button className='bg-[#ff4b61] text-white px-4 py-2 rounded-full font-bold hover-jump'>
							{t(TranslationKeys.DOWNLOAD_CV)}
						</button>
					</div>
				</div>

				{/* Percentage Charts for Skills */}
				<div className='w-1/2'>
					<div className='mb-4'>
						<h2 className='text-lg'>{t(TranslationKeys.WEB_DEVELOPMENT)}</h2>
						<div className='progress-bar'>
							<div className='progress-fill web-dev'></div>
						</div>
						<p className='text-right text-sm'>80%</p>
					</div>

					<div className='mb-4'>
						<h2 className='text-lg'>{t(TranslationKeys.WEB_OPTIMIZATION)}</h2>
						<div className='progress-bar'>
							<div className='progress-fill optimization'></div>
						</div>
						<p className='text-right text-sm'>93%</p>
					</div>

					<div>
						<h2 className='text-lg'>{t(TranslationKeys.BACKEND)}</h2>
						<div className='progress-bar'>
							<div className='progress-fill backend'></div>
						</div>
						<p className='text-right text-sm'>43%</p>
					</div>
				</div>
			</div>

			<div className='w-[80%] mx-auto'>
				<div className='flex gap-8 justify-between'>
					{/* First container */}
					<div>
						<div className='flex items-center gap-6'>
							<Flame size={30} color='#dedeea' />
							<div>
								<div className='text-3xl text-[#343252] font-bold'>10+</div>
								<div className='text-[#5e5c7f]'>
									{t(TranslationKeys.FINISHED_PROJECTS)}
								</div>
							</div>
						</div>
					</div>

					{/* Second container */}
					<div>
						<div className='flex items-center gap-6'>
							<UsersRound size={30} color='#dedeea' />
							<div>
								<div className='text-3xl text-[#343252] font-bold'>3+</div>
								<div className='text-[#5e5c7f]'>
									{t(TranslationKeys.HAPPY_CLIENTS)}
								</div>
							</div>
						</div>
					</div>

					{/* Third container */}
					<div>
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
		</div>
	)
})

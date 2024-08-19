import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import './styles.css'

export const Info: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div>
			<h1 className='text-3xl text-center font-bold mb-10'>
				{t(TranslationKeys.ABOUT_ME)}
			</h1>

			<div className='bg-white w-[70%] px-10 py-8 rounded-lg shadow-lg mt-4 mx-auto chat-notification flex gap-10'>
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
		</div>
	)
}

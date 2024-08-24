import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { GraduationCap } from 'lucide-react'

export const Experience = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div className='mb-32' ref={ref}>
			<h1 className='text-3xl text-center font-bold mb-10 text-gray-800'>
				{t(TranslationKeys.EXPERIENCE)}
			</h1>

			<div className='w-[85%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12'>
				{/* First Card with hover effect */}
				<div className='w-full lg:w-1/2 bg-white px-8 py-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 ease-in-out'>
					<div className='flex gap-6 mb-4'>
						<div className='flex flex-col items-center'>
							<GraduationCap size={30} color='#ff4b61' className='mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>2016-2022</div>
							<div className='font-bold text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.MATH_SCHOOL)}
							</div>
							<div className='text-gray-600 leading-relaxed'>
								{t(TranslationKeys.MATH_SCHOOL_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-6 mb-4'>
						<div className='flex flex-col items-center'>
							<GraduationCap size={30} color='#ff4b61' className='mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>2022</div>
							<div className='font-bold text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.CAREER_START)}
							</div>
							<div className='text-gray-600 leading-relaxed'>
								{t(TranslationKeys.CAREER_START_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-6'>
						<div className='flex flex-col items-center'>
							<GraduationCap size={30} color='#ff4b61' className='mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>
								2022 - {t(TranslationKeys.NOW)}
							</div>
							<div className='font-bold text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.COURSES)}
							</div>
							<div className='text-gray-600 leading-relaxed pb-[22px]'>
								{t(TranslationKeys.COURSES_TEXT)}
							</div>
						</div>
					</div>
				</div>

				{/* Second Card with hover effect */}
				<div className='w-full lg:w-1/2 bg-white px-8 py-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 ease-in-out'>
					<div className='flex gap-6 mb-4'>
						<div className='flex flex-col items-center'>
							<GraduationCap size={30} color='#ff4b61' className='mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>
								{t(TranslationKeys.SEPTEMBER)} 2022
							</div>
							<div className='font-bold text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.FIRST_EXPERIENCE)}
							</div>
							<div className='text-gray-600 leading-relaxed'>
								{t(TranslationKeys.FIRST_EXPERIENCE_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-6'>
						<div className='flex flex-col items-center'>
							<GraduationCap size={30} color='#ff4b61' className='mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>
								2023 - {t(TranslationKeys.NOW)}
							</div>
							<div className='font-bold text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.COMMERCIAL_EXPERIENCE)}
							</div>
							<div className='text-gray-600 leading-relaxed'>
								{t(TranslationKeys.COMMERCIAL_EXPERIENCE_TEXT)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

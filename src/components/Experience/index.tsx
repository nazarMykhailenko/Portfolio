import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { GraduationCap } from 'lucide-react'

export const Experience = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div className=' mb-20 sm:mb-20 md:mb-28 lg:mb-32' ref={ref}>
			<h1 className='text-2xl md:text-3xl text-center font-bold mb-8 md:mb-10 lg:mb-12 text-gray-800'>
				{t(TranslationKeys.EXPERIENCE)}
			</h1>

			<div className='w-[90%] sm:w-[85%] mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12'>
				{/* First Card */}
				<div className='w-full lg:w-1/2 bg-white px-6 py-6 md:px-8 md:py-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 ease-in-out'>
					<div className='flex gap-4 md:gap-6 mb-4'>
						<div className='flex flex-col items-center'>
							<GraduationCap className='text-[25px] text-[#ff4b61] mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>2016-2022</div>
							<div className='font-bold text-xl md:text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.MATH_SCHOOL)}
							</div>
							<div className='text-gray-600 leading-relaxed text-sm md:text-base'>
								{t(TranslationKeys.MATH_SCHOOL_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-4 md:gap-6 mb-4'>
						<div className='flex flex-col items-center'>
							<GraduationCap className='text-[25px] text-[#ff4b61] mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>2022</div>
							<div className='font-bold text-xl md:text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.CAREER_START)}
							</div>
							<div className='text-gray-600 leading-relaxed text-sm md:text-base'>
								{t(TranslationKeys.CAREER_START_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-4 md:gap-6'>
						<div className='flex flex-col items-center'>
							<GraduationCap className='text-[25px] text-[#ff4b61] mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>
								2022 - {t(TranslationKeys.NOW)}
							</div>
							<div className='font-bold text-xl md:text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.COURSES)}
							</div>
							<div className='text-gray-600 leading-relaxed text-sm md:text-base pb-[22px]'>
								{t(TranslationKeys.COURSES_TEXT)}
							</div>
						</div>
					</div>
				</div>

				{/* Second Card */}
				<div className='w-full lg:w-1/2 bg-white px-6 py-6 md:px-8 md:py-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 ease-in-out'>
					<div className='flex gap-4 md:gap-6 mb-4'>
						<div className='flex flex-col items-center'>
							<GraduationCap className='text-[25px] text-[#ff4b61] mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>
								{t(TranslationKeys.SEPTEMBER)} 2022
							</div>
							<div className='font-bold text-xl md:text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.FIRST_EXPERIENCE)}
							</div>
							<div className='text-gray-600 leading-relaxed text-sm md:text-base'>
								{t(TranslationKeys.FIRST_EXPERIENCE_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-4 md:gap-6'>
						<div className='flex flex-col items-center'>
							<GraduationCap className='text-[25px] text-[#ff4b61] mb-2' />
							<div className='flex-grow w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div>
							<div className='text-gray-500 text-sm mb-2'>
								2023 - {t(TranslationKeys.NOW)}
							</div>
							<div className='font-bold text-xl md:text-2xl mb-2 text-gray-800'>
								{t(TranslationKeys.COMMERCIAL_EXPERIENCE)}
							</div>
							<div className='text-gray-600 leading-relaxed text-sm md:text-base'>
								{t(TranslationKeys.COMMERCIAL_EXPERIENCE_TEXT)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

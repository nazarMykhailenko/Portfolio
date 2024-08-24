import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { GraduationCap } from 'lucide-react'

export const Experience = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div className='mb-32' ref={ref}>
			<h1 className='text-3xl text-center font-bold mb-10'>
				{t(TranslationKeys.EXPERIENCE)}
			</h1>

			<div className='w-[80%] mx-auto flex gap-10'>
				{/* First Card with hover effect */}
				<div className='w-1/2 bg-white px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2'>
					<div className='flex gap-4 mb-1'>
						<div className='flex flex-col items-center'>
							<div className='mb-2'>
								<GraduationCap size={25} color='#ff4b61' />
							</div>
							<div className='h-full w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div className='pb-8'>
							<div className='text-[#8a88b1] text-sm mb-2'>2016-2022</div>
							<div className='font-bold text-xl mb-2'>
								{t(TranslationKeys.MATH_SCHOOL)}
							</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.MATH_SCHOOL_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-4 mb-1'>
						<div className='flex flex-col items-center'>
							<div className='mb-2'>
								<GraduationCap size={25} color='#ff4b61' />
							</div>
							<div className='h-full w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div className='pb-8'>
							<div className='text-[#8a88b1] text-sm mb-2'>2022</div>
							<div className='font-bold text-xl mb-2'>
								{t(TranslationKeys.CAREER_START)}
							</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.CAREER_START_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-4'>
						<div className='flex flex-col items-center'>
							<div className='mb-2'>
								<GraduationCap size={25} color='#ff4b61' />
							</div>
							<div className='h-full w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div className='pb-3'>
							<div className='text-[#8a88b1] text-sm mb-2'>
								2022 - {t(TranslationKeys.NOW)}
							</div>
							<div className='font-bold text-xl mb-2'>
								{t(TranslationKeys.COURSES)}
							</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.COURSES_TEXT)}
							</div>
						</div>
					</div>
				</div>

				{/* Second Card with hover effect */}
				<div className='w-1/2 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2'>
					<div className='flex gap-4 mb-1'>
						<div className='flex flex-col items-center'>
							<div className='mb-2'>
								<GraduationCap size={25} color='#ff4b61' />
							</div>
							<div className='h-full w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div className='pb-8'>
							<div className='text-[#8a88b1] text-sm mb-2'>
								{t(TranslationKeys.SEPTEMBER)} 2022
							</div>
							<div className='font-bold text-xl mb-2'>
								{t(TranslationKeys.FIRST_EXPERIENCE)}
							</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.FIRST_EXPERIENCE_TEXT)}
							</div>
						</div>
					</div>

					<div className='flex gap-4 mb-1'>
						<div className='flex flex-col items-center'>
							<div className='mb-2'>
								<GraduationCap size={25} color='#ff4b61' />
							</div>
							<div className='h-full w-[2px] bg-[#ff4b61]'></div>
						</div>
						<div className='pb-8'>
							<div className='text-[#8a88b1] text-sm mb-2'>
								2023 - {t(TranslationKeys.NOW)}
							</div>
							<div className='font-bold text-xl mb-2'>
								{t(TranslationKeys.COMMERCIAL_EXPERIENCE)}
							</div>
							<div className='text-[#5e5c7f]'>
								{t(TranslationKeys.COMMERCIAL_EXPERIENCE_TEXT)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

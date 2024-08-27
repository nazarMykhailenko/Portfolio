import React from 'react'
import {
	Triangle,
	Minus,
	Circle,
	LoaderCircle,
	Send,
	Github,
	Mail,
} from 'lucide-react'
import { TranslationKeys } from '../../i18n'
import { useTranslation } from 'react-i18next'
import my_img from '../../assets/my_img.jpg'

export const About = React.forwardRef<HTMLDivElement>((_, ref) => {
	const { t } = useTranslation()

	return (
		<div
			ref={ref}
			className='w-full h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'
		>
			{/* Animated Elements evenly distributed */}
			<div className='absolute top-10 left-10 sm:left-20 rotate-12 animate-float'>
				<Triangle size={25} color='#ff4b61' />
			</div>
			<div className='absolute top-16 left-[60%] lg:left-[70%] rotate-[45deg] animate-spin-slow'>
				<LoaderCircle size={22} color='#6c6ce4' />
			</div>
			<div className='absolute top-24 left-[30%] sm:left-[40%] rotate-[30deg] animate-float'>
				<Circle size={28} color='#44d7b5' />
			</div>
			<div className='absolute top-[30%] right-[10%] lg:right-[15%] rotate-[60deg] animate-spin-slow'>
				<Minus size={28} color='#ffd15c' />
			</div>
			<div className='absolute top-[35%] right-[3%] sm:right-[5%] rotate-[75deg] animate-float'>
				<Triangle size={20} color='#ff4b61' />
			</div>
			<div className='absolute top-[50%] left-[20%] sm:left-[25%] rotate-[15deg] animate-float'>
				<Minus size={28} color='#ffd15c' />
			</div>
			<div className='absolute top-[45%] left-[65%] sm:left-[70%] rotate-[45deg] animate-spin-slow'>
				<Circle size={30} color='#ffd15c' />
			</div>
			<div className='absolute bottom-[20%] left-[15%] sm:left-[20%] rotate-[60deg] animate-float'>
				<Triangle size={20} color='#6c6ce4' />
			</div>
			<div className='absolute bottom-[15%] left-[60%] sm:left-[65%] rotate-[75deg] animate-spin-slow'>
				<LoaderCircle size={28} color='#44d7b5' />
			</div>
			<div className='absolute bottom-[25%] left-[35%] sm:left-[40%] rotate-[45deg] animate-float'>
				<Minus size={28} color='#ff4b61' />
			</div>

			{/* Main Content */}
			<div className='relative z-10 flex flex-col items-center'>
				<img
					src={my_img}
					alt='my_img'
					className='w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover mb-5'
				/>
				<h1 className='font-bold text-[24px] sm:text-[32px] xl:text-[38px] mb-4 text-center'>
					{t(TranslationKeys.NAME)}, 18 {t(TranslationKeys.YEARS_OLD)}
				</h1>
				<p className='text-[#5e5c7f] mb-6 text-lg sm:text-xl xl:text-2xl text-center'>
					Frontend {t(TranslationKeys.DEVELOPER)}
				</p>
				<div className='flex space-x-6 sm:space-x-8'>
					<div>
						<a href='https://t.me/Nazar_mikh17' target='_blank'>
							<Send
								className='hover:text-[#ff4b61] transition-transform transform hover:scale-110'
								size={28}
							/>
						</a>
					</div>
					<div>
						<a href='https://github.com/nazarMykhailenko' target='_blank'>
							<Github
								className='hover:text-[#ff4b61] transition-transform transform hover:scale-110'
								size={28}
							/>
						</a>
					</div>
					<div>
						<a
							href='mailto:9142359911n@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Mail
								className='hover:text-[#ff4b61] transition-transform transform hover:scale-110'
								size={28}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
})

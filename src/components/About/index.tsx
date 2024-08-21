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
			className='w-full h-screen flex flex-col justify-center items-center relative overflow-hidden'
		>
			{/* Custom Elements evenly distributed away from edges and center */}
			{/* Top section elements */}
			<div className='absolute top-10 left-20 rotate-12'>
				<Triangle size={30} color='#ff4b61' />
			</div>
			<div className='absolute top-16 left-[70%] rotate-[45deg]'>
				<LoaderCircle size={25} color='#6c6ce4' />
			</div>
			<div className='absolute top-24 left-[40%] rotate-[30deg]'>
				<Circle size={30} color='#44d7b5' />
			</div>

			{/* Extra elements added towards the right */}
			<div className='absolute top-[30%] right-[15%] rotate-[60deg]'>
				<Minus size={30} color='#ffd15c' />
			</div>
			<div className='absolute top-[35%] right-[5%] rotate-[75deg]'>
				<Triangle size={25} color='#ff4b61' />
			</div>

			{/* Middle section elements */}
			<div className='absolute top-[50%] left-[25%] rotate-[15deg]'>
				<Minus size={30} color='#ffd15c' />
			</div>
			<div className='absolute top-[45%] left-[70%] rotate-[45deg]'>
				<Circle size={35} color='#ffd15c' />
			</div>

			{/* Bottom section elements */}
			<div className='absolute bottom-[20%] left-[20%] rotate-[60deg]'>
				<Triangle size={25} color='#6c6ce4' />
			</div>
			<div className='absolute bottom-[15%] left-[65%] rotate-[75deg]'>
				<LoaderCircle size={30} color='#44d7b5' />
			</div>
			<div className='absolute bottom-[25%] left-[40%] rotate-[45deg]'>
				<Minus size={30} color='#ff4b61' />
			</div>

			{/* Main Content */}
			<div className='relative z-10 flex flex-col items-center'>
				<img
					src={my_img}
					alt='my_img'
					className='w-60 h-60 rounded-full object-cover mb-5'
				/>
				<h1 className='font-bold text-[38px] mb-4'>
					{t(TranslationKeys.NAME)}, 18 {t(TranslationKeys.YEARS_OLD)}
				</h1>
				<p className='text-[#5e5c7f] mb-6 text-xl'>
					Frontend {t(TranslationKeys.DEVELOPER)}
				</p>
				<div className='flex space-x-8'>
					<div>
						<a href='https://t.me/Nazar_mikh17' target='_blank'>
							<Send className='hover:text-[#ff4b61]' size={33} />
						</a>
					</div>
					<div>
						<a href='https://github.com/nazarMykhailenko' target='_blank'>
							<Github className='hover:text-[#ff4b61]' size={33} />
						</a>
					</div>
					<div>
						<a
							href='mailto:9142359911n@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Mail className='hover:text-[#ff4b61]' size={33} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
})

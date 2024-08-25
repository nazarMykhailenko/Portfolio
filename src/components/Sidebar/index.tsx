import React from 'react'
import {
	House,
	UserRound,
	Wrench,
	BriefcaseBusiness,
	Layers,
	Code,
} from 'lucide-react'

interface ISidebarProps {
	handleScrollTo: (ref: React.RefObject<HTMLDivElement>) => void
	aboutRef: React.RefObject<HTMLDivElement>
	infoRef: React.RefObject<HTMLDivElement>
	servicesRef: React.RefObject<HTMLDivElement>
	experienceRef: React.RefObject<HTMLDivElement>
	projectRef: React.RefObject<HTMLDivElement>
}

export const Sidebar: React.FC<ISidebarProps> = ({
	handleScrollTo,
	aboutRef,
	infoRef,
	servicesRef,
	experienceRef,
	projectRef,
}) => {
	return (
		<aside className='fixed top-0 left-0 w-[10%] h-screen text-white px-10 py-12 flex flex-col items-center border-r border-gray-300 gap-20'>
			{/* Logo Section with Smooth Bounce Animation */}
			<div className='cursor-pointer'>
				<Code
					size={60}
					color={'#ff4d60'}
					className='smooth-bounce transition-all duration-300'
				/>
			</div>

			{/* Navigation Section */}
			<nav className='flex-grow'>
				<ul className='space-y-10'>
					<li>
						<a
							href='#about'
							className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-125'
							onClick={(e) => {
								e.stopPropagation()
								handleScrollTo(aboutRef)
							}}
						>
							<House
								size={30}
								className='transition-transform hover:animate-pulse hover:scale-110'
							/>
						</a>
					</li>
					<li>
						<a
							href='#projects'
							className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-125'
							onClick={(e) => {
								e.stopPropagation()
								handleScrollTo(infoRef)
							}}
						>
							<UserRound
								size={30}
								className='transition-transform hover:animate-pulse hover:scale-110'
							/>
						</a>
					</li>
					<li>
						<a
							href='#contact'
							className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-125'
							onClick={(e) => {
								e.stopPropagation()
								handleScrollTo(servicesRef)
							}}
						>
							<Wrench
								size={30}
								className='transition-transform hover:animate-pulse hover:scale-110'
							/>
						</a>
					</li>
					<li>
						<a
							href='#experience'
							className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-125'
							onClick={(e) => {
								e.stopPropagation()
								handleScrollTo(experienceRef)
							}}
						>
							<BriefcaseBusiness
								size={30}
								className='transition-transform hover:animate-pulse hover:scale-110'
							/>
						</a>
					</li>
					<li>
						<a
							href='#'
							className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-125'
						>
							<Layers
								onClick={(e) => {
									e.stopPropagation()
									handleScrollTo(projectRef)
								}}
								size={30}
								className='transition-transform hover:animate-pulse hover:scale-110'
							/>
						</a>
					</li>
				</ul>
			</nav>

			{/* Footer Section */}
			<div>
				<p className='text-gray-400 transform -rotate-90'>&copy; 2024</p>
			</div>
		</aside>
	)
}

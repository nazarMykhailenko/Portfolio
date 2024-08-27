import React, { useState } from 'react'
import {
	House,
	UserRound,
	Wrench,
	BriefcaseBusiness,
	Layers,
	Code,
	Menu,
	X,
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
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev)
	}

	return (
		<>
			{/* Burger button (shown only on xl screens and below) */}
			<div className='burger-button xl:hidden fixed top-5 left-5 z-[100]'>
				<button onClick={toggleMenu}>
					{isMenuOpen ? (
						<X size={30} color='#ff4d60' />
					) : (
						<Menu size={30} color='#ff4d60' />
					)}
				</button>
			</div>

			{/* Sidebar (visible on xl and above or when burger menu is clicked) */}
			<aside
				className={`fixed xl:relative top-0 left-0 w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[12%] max-w-[300px] h-screen text-black px-6 py-10 flex flex-col items-center border-r border-gray-300 gap-14 bg-[#f9f7fc] z-50 transition-transform ${
					isMenuOpen ? 'translate-x-0' : '-translate-x-full'
				} xl:translate-x-0`}
			>
				{/* Logo Section with Smooth Bounce Animation */}
				<div className='cursor-pointer'>
					<Code
						size={50}
						color={'#ff4d60'}
						className='smooth-bounce transition-all duration-300'
					/>
				</div>

				{/* Navigation Section */}
				<nav className='flex-grow overflow-y-auto'>
					<ul className='space-y-8'>
						<li>
							<a
								className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-110'
								onClick={(e) => {
									e.stopPropagation()
									handleScrollTo(aboutRef)
									toggleMenu() // Close the menu after click
								}}
							>
								<House
									size={25}
									className='transition-transform hover:animate-pulse'
								/>
							</a>
						</li>
						<li>
							<a
								className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-110'
								onClick={(e) => {
									e.stopPropagation()
									handleScrollTo(infoRef)
									toggleMenu() // Close the menu after click
								}}
							>
								<UserRound
									size={25}
									className='transition-transform hover:animate-pulse'
								/>
							</a>
						</li>
						<li>
							<a
								className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-110'
								onClick={(e) => {
									e.stopPropagation()
									handleScrollTo(servicesRef)
									toggleMenu() // Close the menu after click
								}}
							>
								<Wrench
									size={25}
									className='transition-transform hover:animate-pulse'
								/>
							</a>
						</li>
						<li>
							<a
								className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-110'
								onClick={(e) => {
									e.stopPropagation()
									handleScrollTo(experienceRef)
									toggleMenu() // Close the menu after click
								}}
							>
								<BriefcaseBusiness
									size={25}
									className='transition-transform hover:animate-pulse'
								/>
							</a>
						</li>
						<li>
							<a
								className='text-black hover:text-[#ff4d60] transition-transform duration-300 transform hover:scale-110'
								onClick={(e) => {
									e.stopPropagation()
									handleScrollTo(projectRef)
									toggleMenu() // Close the menu after click
								}}
							>
								<Layers
									size={25}
									className='transition-transform hover:animate-pulse'
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
		</>
	)
}

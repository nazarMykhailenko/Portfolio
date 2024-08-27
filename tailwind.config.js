/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				xl: '1200px',
				'2xl': '1440px',
			},
		},
	},
	plugins: [],
}

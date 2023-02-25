/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		colors: {
			black: '#000000',
			orange: '#D8944E',
			'light-blue': '#3173DC',
			'dark-blue': '#3D5175',
			magenta: '#B75373',
			beige: '#91857E',
			white: '#F9FAF7',
			'dark-grey': '#4A4A4A',
			'medium-grey': '#7D7D7D',
			'light-grey': '#E5E5E5'
		},
		fontFamily: {
			sans: ['Lato', 'Helvetica'],
			serif: ['PT Sans', 'serif']
		},
		fontSize: {
			subhead: ['0.9375rem', '1.25rem'],
			small: ['1rem', '1.25rem'],
			body: ['1.0625rem', '1.375rem'],
			'title-3': ['1.25rem', '1.75rem'],
			'title-2': ['1.5rem', '1.75rem'],
			'title-1': ['1.75rem', '2.125rem'],
			'title-large': ['2.125rem', '2.25rem']
		},
		extend: {
			minWidth: {
				xs: '20rem',
				sm: '24rem',
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
				'3xl': '48rem',
				'4xl': '56rem',
				'5xl': '64rem',
				'6xl': '72rem',
				'7xl': '80rem',
				'8xl': '1440px'
			},
			maxWidth: {
				'8xl': '1440px'
			},
			screens: {
				'2xs': '375px',
				xs: '414px'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: []
}

module.exports = config

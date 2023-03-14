/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { PaletteMode, ThemeOptions } from '@mui/material'

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '10px'
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '10px'
				}
			}
		}
	},
	palette: {
		mode,
		...(mode === 'light'
			? {
					darkGrey: { main: '#858585' },
					mediumGrey: { main: '#f0f0f0' },
					lightGrey: { main: '#9da4ac' },
					yellow: { main: '#C5A015' },
					lightBlue: { main: '#c2fffc' },
					mediumBlue: { main: '#75aacc' },
					darkBlue: { main: '#789bd9' },
					lightText: { main: '#E0E8EF' }
			  }
			: {
					darkGrey: { main: '#121D26' },
					mediumGrey: { main: '#1F2C36' },
					lightGrey: { main: '#2F3E4E' },
					yellow: { main: '#C5A015' },
					lightBlue: { main: '#9EFFFA' },
					mediumBlue: { main: '#0082B2' },
					darkBlue: { main: '#006EC5' },
					lightText: { main: '#E0E8EF' }
			  })
	},
	spacing: 4,
	typography: {
		fontFamily: ['Lato', 'Helvetica', '"PT Sans"', 'serif'].join(',')
	}
})

export default getDesignTokens

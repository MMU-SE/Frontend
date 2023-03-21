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
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderColor: mode === 'light' ? '#EBEBF5' : '#1C1C1E'
				}
			}
		}
	},
	palette: {
		mode,
		...(mode === 'light'
			? {
					primary: {
						main: '#7459D9'
					},
					secondary: {
						main: '#5E5CE6'
					},
					darkGrey: { main: '#F2F2F7' },
					mediumGrey: { main: '#FFFFFF' },
					lightGrey: { main: '#FFFFFF' },
					lightIndigo: { main: '#7459D9' },
					darkIndigo: { main: '#5E5CE6' },
					textGrey: { main: '#EBEBF5' },
					white: { main: '#FFFFFF' },
					textPrimary: { main: '#11263C' },
					textSecondary: { main: '#D0D1D2' },
					gradient: {
						main: 'radial-gradient(circle, rgba(94,92,230,1) 0%, rgba(28,28,30,1) 65%)'
					}
			  }
			: {
					primary: {
						main: '#7459D9'
					},
					secondary: {
						main: '#5E5CE6'
					},
					darkGrey: { main: '#1C1C1E' },
					mediumGrey: { main: '#2C2C2E' },
					lightGrey: { main: '#3A3A3C' },
					lightIndigo: { main: '#7459D9' },
					darkIndigo: { main: '#5E5CE6' },
					textGrey: { main: '#EBEBF5' },
					white: { main: '#FFFFFF' },
					textPrimary: { main: '#FFFFFF' },
					textSecondary: { main: '#EBEBF5' },
					gradient: {
						main: 'radial-gradient(circle, rgba(94,92,230,1) 0%, rgba(28,28,30,1) 65%)'
					}
			  })
	},
	spacing: 4,
	typography: {
		fontFamily: ['Poppins', '"PT Sans"'].join(',')
	}
})

export default getDesignTokens

/* eslint-disable @typescript-eslint/no-magic-numbers */
import { createTheme } from '@mui/material'

const theme = createTheme({
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
		primary: {
			main: '#1E4E79'
		},
		secondary: {
			main: '#753B7D'
		},
		success: {
			main: '#0B6403'
		},
		error: {
			main: '#B20101'
		},
		black: { main: '#000000' },
		orange: { main: '#D8944E' },
		lightBlue: { main: '#3173DC' },
		darkBlue: { main: '#3D5175' },
		magenta: { main: '#B75373' },
		beige: { main: '#91857E' },
		white: { main: '#F9FAF7' },
		darkGrey: { main: '#4A4A4A' },
		mediumGrey: { main: '#7D7D7D' },
		lightGrey: { main: '#E5E5E5' }
	},
	spacing: 4,
	typography: {
		fontFamily: ['Lato', 'Helvetica', '"PT Sans"', 'serif'].join(',')
	}
})

export default theme

import { Brightness7, ModeNightSharp } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { ColorModeContext } from 'App'
import type { ReactElement } from 'react'
import { useContext } from 'react'

const ThemeSwitcher = (): ReactElement => {
	const { onToggleColorMode, mode } = useContext(ColorModeContext)

	return (
		<Box>
			<IconButton onClick={onToggleColorMode}>
				{mode === 'light' ? <ModeNightSharp /> : <Brightness7 />}
			</IconButton>
		</Box>
	)
}

export default ThemeSwitcher

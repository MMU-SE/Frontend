import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import type { ReactElement } from 'react'
import { createContext, useMemo, useState } from 'react'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import routes from 'routes'
import MockToggle from 'components/Core/MockToggle/MockToggle'
import type { PaletteMode } from '@mui/material'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { LocationGenerics } from 'util/types/Location'
import getDesignTokens from 'muiTheme'

const reactLocation = new ReactLocation<LocationGenerics>()

export interface ColorModeContextType {
	onToggleColorMode: () => void
	mode: PaletteMode
}

export const ColorModeContext = createContext<ColorModeContextType>(
	{} as ColorModeContextType
)

const App = (): ReactElement => {
	const [mode, setMode] = useState<PaletteMode>('light')

	const colorMode = useMemo(
		() => ({
			onToggleColorMode: () => {
				setMode(previousMode => (previousMode === 'light' ? 'dark' : 'light'))
			},
			mode
		}),
		[mode]
	)

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Router location={reactLocation} routes={routes}>
					<CssBaseline />
					<Outlet />
					{import.meta.env.DEV ? (
						<div id='devtools'>
							<ReactQueryDevtools initialIsOpen={false} />
							<ReactLocationDevtools
								initialIsOpen={false}
								toggleButtonProps={{
									style: { marginLeft: 60 }
								}}
							/>
						</div>
					) : undefined}
					{import.meta.env.DEV ? (
						<Box
							sx={{
								position: 'fixed',
								bottom: 0,
								right: 0
							}}
						>
							<MockToggle />
						</Box>
					) : undefined}
				</Router>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App

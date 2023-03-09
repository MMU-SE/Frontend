import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import type { ReactElement } from 'react'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import routes from 'routes'
import MockToggle from 'components/Core/MockToggle/MockToggle'
import { Box, CssBaseline } from '@mui/material'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { LocationGenerics } from 'util/types/Location'

const reactLocation = new ReactLocation<LocationGenerics>()

const App = (): ReactElement => (
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
)

export default App

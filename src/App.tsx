import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import type { ReactElement } from 'react'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import routes from 'routes'

const reactLocation = new ReactLocation()

const App = (): ReactElement => (
	<Router location={reactLocation} routes={routes}>
		<Outlet />
		{import.meta.env.DEV ? (
			<div id='devtools'>
				<ReactLocationDevtools initialIsOpen={false} />
			</div>
		) : undefined}
	</Router>
)

export default App

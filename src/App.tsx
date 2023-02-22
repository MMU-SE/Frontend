import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import type { ReactElement } from 'react'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import routes from 'routes'
import MockToggle from 'components/Core/MockToggle/MockToggle'

const reactLocation = new ReactLocation()

const App = (): ReactElement => (
	<Router location={reactLocation} routes={routes}>
		<Outlet />
		{import.meta.env.DEV ? (
			<div id='devtools'>
				<ReactLocationDevtools initialIsOpen={false} />
			</div>
		) : undefined}
		{import.meta.env.DEV ? (
			<div className='fixed bottom-0 right-0 p-1'>
				<MockToggle />
			</div>
		) : undefined}
	</Router>
)

export default App

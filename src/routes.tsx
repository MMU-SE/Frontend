import type { Route } from '@tanstack/react-location'
import Landing from 'pages/Landing/Landing'
import SomePage from 'pages/SomePage/SomePage'

// TODO: Add LocationGenerics appropriately when needed: Route<LocationGenerics>[]

const routes: Route[] = [
	{
		path: '/',
		element: <Landing />
	},
	{
		path: '/some-page',
		element: <SomePage />
	}
]

export default routes

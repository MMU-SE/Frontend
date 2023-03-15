import type { Route } from '@tanstack/react-location'
import { Navigate, Outlet } from '@tanstack/react-location'
import PageWrapper from 'components/Layout/PageWrapper/PageWrapper'
import Dashboard from 'pages/Dashboard/Dashboard'
import NotFound from 'pages/NotFound/NotFound'
import Products from 'pages/Products/Products'
import type { LocationGenerics } from 'util/types/Location'

const routes: Route<LocationGenerics>[] = [
	{
		path: '/',
		element: <Navigate to='/user/dashboard' replace />
	},
	{
		path: '/user',
		element: (
			<PageWrapper>
				<Outlet />
			</PageWrapper>
		),
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />
			},
			{
				path: 'products',
				element: <Products />
			}
		]
	},
	{ path: '*', element: <NotFound /> }
]

export default routes

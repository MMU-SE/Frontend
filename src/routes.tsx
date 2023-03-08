import type { Route } from '@tanstack/react-location'
import { Navigate, Outlet } from '@tanstack/react-location'
import PageWrapper from 'components/Layout/PageWrapper/PageWrapper'
import Dashboard from 'pages/DashboardController/Dashboard/Dashboard'
import DashboardController from 'pages/DashboardController/DashboardController'
import SomePage from 'pages/SomePage/SomePage'
import type { LocationGenerics } from 'util/Location'

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
				element: <DashboardController />
			},
			{
				path: '/products',
				element: <SomePage />
			},
			{
				path: '/categories',
				element: <SomePage />
			},
			{
				path: '/customers',
				element: <SomePage />
			},
			{
				path: '/reports',
				element: <SomePage />
			}
		]
	}
]

export default routes

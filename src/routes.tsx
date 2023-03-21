import type { Route } from '@tanstack/react-location'
import { Navigate, Outlet } from '@tanstack/react-location'
import ProtectedRoute from 'components/Core/ProtectedRoute/ProtectedRoute'
import PageWrapper from 'components/Layout/PageWrapper/PageWrapper'
import SignIn from 'pages/Auth/Login/Login'
import Dashboard from 'pages/Dashboard/Dashboard'
import NotFound from 'pages/NotFound/NotFound'
import Products from 'pages/Products/Products'
import SingleProductView from 'pages/Products/SingleProductView/SingleProductView'
import type { LocationGenerics } from 'util/types/Location'

const routes: Route<LocationGenerics>[] = [
	{
		path: '/',
		element: <Navigate to='/user/dashboard' replace />
	},
	{
		path: '/sign-in',
		element: <SignIn />
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
				element: (
					<ProtectedRoute type='authenticated'>
						<Outlet />
					</ProtectedRoute>
				),
				children: [
					{
						path: '/',
						element: <Products />
					},
					{
						path: ':productId',
						element: <SingleProductView />
					}
				]
			}
		]
	},
	{ path: '*', element: <NotFound /> }
]

export default routes

import { Navigate, useRouter } from '@tanstack/react-location'
import { useAuth } from 'contexts/AuthProvider/AuthProvider'
import type { ReactElement } from 'react'
import Splash from '../SplashScreen/SplashScreen'

interface ProtectedRouteProperties {
	type: 'authenticated' | 'unauthenticated'
	redirect?: number | string | null | undefined
	children: ReactElement | ReactElement[]
}

const ProtectedRoute = ({
	type,
	redirect,
	children
}: ProtectedRouteProperties): ReactElement => {
	const { initializingAuth, isAuthenticated } = useAuth()
	const {
		state: {
			location: { pathname }
		}
	} = useRouter()

	if (initializingAuth) return <Splash />

	if (type === 'authenticated' && !isAuthenticated) {
		return (
			<Navigate
				to={redirect ?? '/sign-in'}
				search={{ redirect: pathname }}
				replace
			/>
		)
	}

	if (type === 'unauthenticated' && isAuthenticated) {
		return <Navigate to={redirect ?? '/portal'} replace />
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>
}

export default ProtectedRoute

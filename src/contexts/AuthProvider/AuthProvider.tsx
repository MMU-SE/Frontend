/* eslint-disable unicorn/no-useless-undefined */
import { OpenAPI } from 'api'
import type { User, UserCredential } from 'firebase/auth'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import type { ReactElement, ReactNode } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const login = async (
	email: string,
	password: string
): Promise<UserCredential> =>
	new Promise((resolve, reject) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(cred => {
				resolve(cred)
			})
			.catch(reject)
	})

const logout = async (): Promise<void> => {
	const auth = getAuth()
	return signOut(auth)
}

const register = (): void => {}

export interface AuthContextType {
	initializingAuth: boolean
	user?: User
	isAuthenticated: boolean
	login: (email: string, password: string) => Promise<UserCredential>
	logout: () => Promise<void>
	register: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({
	children
}: {
	children: ReactNode | ReactNode[]
}): ReactElement => {
	const [initializingAuth, setInitializingAuth] = useState(true)
	const [user, setUser] = useState<User>()

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = auth.onAuthStateChanged(async authUser => {
			if (authUser) {
				OpenAPI.TOKEN = await authUser.getIdToken()
				setUser(authUser)
			} else {
				OpenAPI.TOKEN = undefined
				setUser(undefined)
			}
			setInitializingAuth(false)
		})
		return unsubscribe
	}, [])

	const context = useMemo(
		() => ({
			initializingAuth,
			user,
			isAuthenticated: user !== undefined,
			login,
			register,
			logout
		}),
		[initializingAuth, user]
	)

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

const useAuth = (): AuthContextType => useContext(AuthContext)

export { AuthProvider, useAuth }

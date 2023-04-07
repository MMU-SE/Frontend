/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import firebaseConfig from 'config/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, getAuth } from 'firebase/auth'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './i18n'
import 'typeface-poppins'
import 'typeface-pt-sans'
import { AuthProvider } from 'contexts/AuthProvider/AuthProvider'
import { OpenAPI } from 'api'

// Import mocks
if (import.meta.env.VITE_ENV === 'DEV') {
	import('./mocks/browser').catch(() => {})
} else {
	OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL as string
}

// Init Firebase
const firebaseApp = initializeApp(firebaseConfig)
const authentication = getAuth(firebaseApp)
authentication.setPersistence(browserLocalPersistence).catch(() => {})

// Init Tanstack Query
const MAX_RETRIES = 0
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES,
			networkMode: 'always'
		},
		mutations: {
			retry: MAX_RETRIES,
			networkMode: 'always'
		}
	}
})

const container = document.querySelector('#root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<App />
				</AuthProvider>
			</QueryClientProvider>
		</StrictMode>
	)
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

if (import.meta.env.VITE_ENV === 'DEV') {
	import('./mocks/browser').catch(() => {})
}

const container = document.querySelector('#root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	)
}

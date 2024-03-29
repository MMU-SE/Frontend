import { OpenAPI } from 'api'
import { setupWorker } from 'msw'
import combinedHandlers from './handlers'

const worker = setupWorker(...combinedHandlers)

export const mswStart = (): void => {
	worker.start().catch(() => {})
}
export const mswStop = (): void => {
	worker.stop()
}

if (localStorage.getItem('mswEnabled') === 'true') {
	OpenAPI.BASE = ''
	worker.start().catch(() => {})
} else {
	OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL
}

export default worker

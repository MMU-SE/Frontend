import { OpenAPI } from 'api'
import { setupWorker } from 'msw'
import combinedHandlers from './handlers'

const worker = setupWorker(...combinedHandlers)

window.mswStart = () => {
	worker.start().catch(() => {})
}
window.mswStop = () => {
	worker.stop()
}

if (localStorage.getItem('mswEnabled') === 'true') {
	OpenAPI.BASE = ''
	worker.start().catch(() => {})
}

export default worker

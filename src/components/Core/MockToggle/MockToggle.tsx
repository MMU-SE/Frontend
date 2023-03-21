import { Switch } from '@mui/material'
import { OpenAPI } from 'api'
import { mswStart, mswStop } from 'mocks/browser'
import type { ReactElement } from 'react'
import { useState } from 'react'

const MockToggle = (): ReactElement => {
	const [mockingEnabled, setMockingEnabled] = useState(
		localStorage.getItem('mswEnabled') === 'true'
	)

	const onMockingToggled = (): void => {
		if (mockingEnabled) {
			setMockingEnabled(false)
			OpenAPI.BASE = ''
			localStorage.setItem('mswEnabled', 'false')
			mswStop()
		} else {
			setMockingEnabled(true)
			OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL
			localStorage.setItem('mswEnabled', 'true')
			mswStart()
		}
	}

	return <Switch checked={mockingEnabled} onChange={onMockingToggled} />
}

export default MockToggle

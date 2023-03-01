import { Switch } from '@mui/material'
import { OpenAPI } from 'api'
import clsx from 'clsx'
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
			OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL as string
			localStorage.setItem('mswEnabled', 'true')
			mswStart()
		}
	}

	return (
		<Switch
			checked={mockingEnabled}
			onChange={onMockingToggled}
			className={clsx(
				'relative inline-flex h-6 w-11 items-center rounded-full'
			)}
		/>
	)
}

export default MockToggle

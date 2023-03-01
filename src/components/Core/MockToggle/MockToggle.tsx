import { Switch } from '@headlessui/react'
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
				'relative inline-flex h-6 w-11 items-center rounded-full',
				{
					'bg-light-blue': mockingEnabled,
					'bg-grey': !mockingEnabled
				}
			)}
		>
			<span
				className={clsx(
					'inline-block h-4 w-4 transform rounded-full bg-white',
					{
						'translate-x-6': mockingEnabled,
						'translate-x-1': !mockingEnabled
					}
				)}
			/>
		</Switch>
	)
}

export default MockToggle

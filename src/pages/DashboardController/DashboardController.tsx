/* eslint-disable react/no-array-index-key */
import { Navigate, useNavigate, useSearch } from '@tanstack/react-location'
import clsx from 'clsx'
import type { ReactElement } from 'react'
import { SearchTab } from 'util/Location'
import type { LocationGenerics } from 'util/Location'
import { Tab } from '@headlessui/react'
import GettingStarted from './GettingStarted/GettingStarted'
import Dashboard from './Dashboard/Dashboard'
import Statistics from './Statistics/Statistics'

interface DashboardLink {
	to: SearchTab
	label: string
}

interface DashboardControllerProperties {
	links: DashboardLink[]
}

const DashboardController = ({
	links
}: DashboardControllerProperties): ReactElement => {
	const navigate = useNavigate()
	const { tab: currentTab } = useSearch<LocationGenerics>()

	const onTabChange = (newTab: SearchTab): void => {
		navigate({
			search: search => ({
				...search,
				tab: newTab
			})
		})
	}

	if (!currentTab) {
		return (
			<Navigate<LocationGenerics>
				search={search => ({ ...search, tab: SearchTab.DASHBOARD })}
				replace
			/>
		)
	}
	return (
		<div>
			<Tab.Group>
				<Tab.List className='mb-4 flex w-max flex-row gap-1 rounded-lg bg-dark-blue p-1'>
					{links.map(link => (
						<Tab key={link.label} onClick={() => onTabChange(link.to)}>
							<div
								className={clsx('rounded-lg py-2 px-4', {
									'bg-light-blue text-white': currentTab === link.to,
									'bg-white': !(currentTab === link.to)
								})}
							>
								{link.label}
							</div>
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>
						<GettingStarted />
					</Tab.Panel>
					<Tab.Panel>
						<Dashboard />
					</Tab.Panel>
					<Tab.Panel>
						<Statistics />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

export default DashboardController

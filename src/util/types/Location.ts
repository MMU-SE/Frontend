import type { MakeGenerics } from '@tanstack/react-location'

export enum SearchTab {
	GETTING_STARTED = 'getting-started',
	DASHBOARD = 'dashboard',
	STATISTICS = 'statistics'
}

export interface LocationSearchGenerics {
	tab: SearchTab
	redirect: string
	rowsPerPage: number
}

export type LocationGenerics = MakeGenerics<{
	Search: Partial<LocationSearchGenerics>
}>

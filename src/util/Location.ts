import type { MakeGenerics } from '@tanstack/react-location'

export enum SearchTab {
	GETTING_STARTED = 'getting-started',
	DASHBOARD = 'dashboard',
	STATISTICS = 'statistics'
}

export interface LocationSearchGenerics {
	tab: SearchTab
	redirect: string
}

export type LocationGenerics = MakeGenerics<{
	Search: Partial<LocationSearchGenerics>
}>

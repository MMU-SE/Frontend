import { SearchTab } from 'util/types/Location'
import type { HeaderLink } from './Header/Header'

export const HEADER_LINKS: HeaderLink[] = [
	{
		label: 'Dashboard',
		to: '/user/dashboard'
	},
	{
		label: 'Products',
		to: '/user/products'
	},
	{
		label: 'Categories',
		to: '/user/categories'
	},
	{
		label: 'Customers',
		to: '/user/customers'
	}
]

export const DASHBOARD_TABS = [
	{
		label: 'Getting Started',
		to: SearchTab.GETTING_STARTED
	},
	{
		label: 'Dashboard',
		to: SearchTab.DASHBOARD
	},
	{
		label: 'Statistics',
		to: SearchTab.STATISTICS
	}
]

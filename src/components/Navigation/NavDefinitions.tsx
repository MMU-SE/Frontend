import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchTab } from 'util/Location'
import type { HeaderLink } from './Header/Header'
import type { SectionProperties } from './Sidebar/Sidebar'

export const SIDEBAR_SECTIONS: SectionProperties[] = [
	{
		heading: 'Navigation',
		navLinks: [
			{
				label: 'Dashboard',
				to: '/user/dashboard',
				icon: <FontAwesomeIcon icon={faHome} />
			},
			{
				label: 'Products',
				to: '/user/products',
				icon: <FontAwesomeIcon icon={faHome} />
			},
			{
				label: 'Categories',
				to: '/user/categories',
				icon: <FontAwesomeIcon icon={faHome} />
			},
			{
				label: 'Customers',
				to: '/user/customers',
				icon: <FontAwesomeIcon icon={faHome} />
			},
			{
				label: 'Reports',
				to: '/user/reports',
				icon: <FontAwesomeIcon icon={faHome} />
			}
		]
	}
]

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

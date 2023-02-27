import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserMenu from 'components/Core/UserMenu/UserMenu'
import SearchBox from 'components/Input/SearchBox/SearchBox'
import type { ReactElement } from 'react'
import { HEADER_LINKS } from '../NavDefinitions'

export interface HeaderLink {
	label: string
	to: string
}

const Header = (): ReactElement => (
	<div className='flex flex-row justify-end gap-6 bg-dark-blue py-2'>
		<span className='my-auto mr-auto ml-4 font-semibold text-white'>
			Atlas Barcode
		</span>
		<SearchBox />
		<UserMenu navLinks={HEADER_LINKS} />
		<button type='button' className='mr-4'>
			<FontAwesomeIcon icon={faBell} size='xl' />
		</button>
	</div>
)

export default Header

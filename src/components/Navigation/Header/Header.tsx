import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, IconButton, Typography } from '@mui/material'
import ReferenceLink from 'components/Core/ReferenceLink/ReferenceLink'
import SearchBox from 'components/Input/SearchBox/SearchBox'
import type { ReactElement } from 'react'

export interface HeaderLink {
	label: string
	to: string
}

const Header = (): ReactElement => (
	<Box
		display='flex'
		flexDirection='row'
		justifyContent='flex-end'
		alignItems='center'
		gap={6}
	>
		<Typography
			sx={{
				mr: 'auto'
			}}
		>
			Atlas Barcode
		</Typography>
		<SearchBox />
		<IconButton component={ReferenceLink}>
			<FontAwesomeIcon icon={faBell} size='lg' />
		</IconButton>
	</Box>
)

export default Header

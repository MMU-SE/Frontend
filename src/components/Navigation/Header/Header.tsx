import { Box, Typography } from '@mui/material'
import ThemeSwitcher from 'components/Core/ThemeSwitcher/ThemeSwitcher'
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
		bgcolor='lightblue'
		gap={6}
	>
		<Typography
			sx={{
				mr: 'auto',
				ml: 2
			}}
		>
			Inventory Manager
		</Typography>
		<SearchBox />
		<ThemeSwitcher />
	</Box>
)

export default Header

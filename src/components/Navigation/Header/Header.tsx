import { Box, Typography } from '@mui/material'
import ThemeSwitcher from 'components/Core/ThemeSwitcher/ThemeSwitcher'
import SearchBox from 'components/Input/SearchBox/SearchBox'
import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export interface HeaderLink {
	label: string
	to: string
}

const Header = (): ReactElement => {
	const { t } = useTranslation('common')
	return (
		<Box
			display='flex'
			flexDirection='row'
			justifyContent='flex-end'
			alignItems='center'
			bgcolor='mediumGrey.main'
			gap={6}
			sx={{
				height: 56
			}}
		>
			<Typography
				sx={{
					mr: 'auto',
					ml: 2,
					color: 'yellow.main'
				}}
			>
				{t('header.title')}
			</Typography>
			<SearchBox />
			<ThemeSwitcher />
		</Box>
	)
}

export default Header

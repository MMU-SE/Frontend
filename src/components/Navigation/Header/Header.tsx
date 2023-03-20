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
				height: 56,
				boxShadow: 1
			}}
		>
			<Typography
				component='h1'
				variant='h6'
				sx={{
					mr: 'auto',
					ml: 2,
					color: 'textPrimary.main'
				}}
			>
				{t('header.title')}
			</Typography>
			<SearchBox
				placeholder='Search Site'
				handleSubmitAction={(search: string) => console.log(search)}
			/>
			<ThemeSwitcher />
		</Box>
	)
}

export default Header

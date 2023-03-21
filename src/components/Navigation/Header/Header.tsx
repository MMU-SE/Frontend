import { Box, Button, Typography } from '@mui/material'
import { useNavigate, useRouter } from '@tanstack/react-location'
import ReferenceLink from 'components/Core/ReferenceLink/ReferenceLink'
import ThemeSwitcher from 'components/Core/ThemeSwitcher/ThemeSwitcher'
import SearchBox from 'components/Input/SearchBox/SearchBox'
import { useAuth } from 'contexts/AuthProvider/AuthProvider'
import { useSnackbar } from 'contexts/SnackbarProvider/SnackbarProvider'
import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export interface HeaderLink {
	label: string
	to: string
}

const Header = (): ReactElement => {
	const { t } = useTranslation(['common', 'auth'])
	const { isAuthenticated, logout } = useAuth()
	const {
		state: {
			location: { pathname }
		}
	} = useRouter()
	const navigate = useNavigate()
	const { triggerSnackbar } = useSnackbar()

	const onLogout = (): void => {
		logout()
			.then(() => {
				navigate({ to: '/user/dashboard' })
			})
			.catch(() => {
				triggerSnackbar({
					message: t('auth:logout.error'),
					severity: 'error'
				})
			})
	}

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
			{isAuthenticated ? (
				<Button variant='contained' onClick={onLogout}>
					{t('auth:logout.cta')}
				</Button>
			) : (
				<Button
					component={ReferenceLink}
					variant='contained'
					to='/sign-in'
					search={{ redirect: pathname }}
				>
					{t('auth:sign_in.cta')}
				</Button>
			)}
			<ThemeSwitcher />
		</Box>
	)
}

export default Header

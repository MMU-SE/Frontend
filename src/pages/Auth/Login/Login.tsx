import { Button, Stack, TextField, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { Navigate, useNavigate, useSearch } from '@tanstack/react-location'
import { useAuth } from 'contexts/AuthProvider/AuthProvider'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { LocationGenerics } from 'util/types/Location'
import { z } from 'zod'
import AuthPageContainer from '../AuthPageContainer/AuthPageContainer'
import i18n from 'i18n'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'contexts/SnackbarProvider/SnackbarProvider'

const MIN_EMAIL_LENGTH = 6
const MIN_PASSWORD_LENGTH = 8

export const LoginValidationSchema = z.object({
	email: z
		.string()
		.min(MIN_EMAIL_LENGTH, {
			message: i18n.t('auth:sign_in.email.validation', {
				MIN_EMAIL_LENGTH
			})
		})
		.email(),
	password: z.string().min(MIN_PASSWORD_LENGTH, {
		message: i18n.t('auth:sign_in.password.validation', {
			MIN_PASSWORD_LENGTH
		})
	})
})

const SignIn = (): ReactElement => {
	const { t } = useTranslation('auth')
	const [isLoggingIn, setIsLoggingIn] = useState(false)
	const [loginError, setLoginError] = useState(false)

	const { isAuthenticated, login } = useAuth()
	const navigate = useNavigate<LocationGenerics>()
	const { redirect } = useSearch<LocationGenerics>()
	const { triggerSnackbar } = useSnackbar()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<z.infer<typeof LoginValidationSchema>>({
		mode: 'onTouched',
		resolver: zodResolver(LoginValidationSchema)
	})

	const onSubmit = handleSubmit(({ email, password }) => {
		setIsLoggingIn(true)
		setLoginError(false)

		login(email, password)
			.then(() => {
				navigate({ to: redirect ?? '/user/dashboard', replace: !!redirect })
			})
			.catch(() => {
				setLoginError(true)
				setIsLoggingIn(false)
			})
	})

	if (!isLoggingIn && isAuthenticated) {
		return <Navigate to={redirect ?? '/user/dashboard'} />
	}

	if (loginError) {
		triggerSnackbar({
			severity: 'error',
			message: i18n.t('auth:sign_in.generic_error')
		})
	}

	return (
		<AuthPageContainer>
			<form onSubmit={onSubmit}>
				<Stack spacing={6}>
					<Typography variant='h4'>Sign In</Typography>
					<TextField
						label={t('sign_in.email.label')}
						variant='outlined'
						autoComplete='email'
						fullWidth
						{...register('email')}
						error={!!errors.email}
						helperText={errors.email?.message ?? ' '}
					/>
					<TextField
						label={t('sign_in.password.label')}
						variant='outlined'
						autoComplete='password'
						type='password'
						fullWidth
						{...register('password')}
						error={!!errors.password}
						helperText={errors.password?.message ?? ' '}
					/>
					<Button type='submit' variant='contained'>
						{t('sign_in.cta')}
					</Button>
					<Typography
						variant='body2'
						sx={{
							textAlign: 'right'
						}}
					>
						{t('sign_in.register_cta')}
					</Typography>
				</Stack>
			</form>
		</AuthPageContainer>
	)
}

export default SignIn

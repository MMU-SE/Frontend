/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/consistent-function-scoping */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, FormControl, TextField } from '@mui/material'
import type { ReactElement } from 'react'
import { useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

interface FormInputs {
	search: string
}

const SearchBox = (): ReactElement => {
	const {
		register,
		handleSubmit: onHandleSubmit,
		formState,
		reset
	} = useForm<FormInputs>()

	const onSubmit: SubmitHandler<FormInputs> = data => {
		// TODO: Do something with the search input
		console.log(data)
	}

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ search: '' })
		}
	}, [formState.isSubmitSuccessful, reset])
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				height: 56,
				alignItems: 'center'
			}}
		>
			<TextField
				id='search'
				label='Search'
				aria-describedby='search-box'
				variant='outlined'
				size='small'
				{...register('search')}
			/>
			<Button
				onClick={onHandleSubmit(onSubmit)}
				size='large'
				variant='contained'
				sx={{
					py: 3,
					ml: 1
				}}
			>
				<FontAwesomeIcon icon={faSearch} />
			</Button>
		</Box>
	)
}

export default SearchBox

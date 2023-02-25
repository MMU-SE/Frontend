/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/consistent-function-scoping */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
	}

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ search: '' })
		}
	}, [formState.isSubmitSuccessful, reset])
	return (
		<form onSubmit={onHandleSubmit(onSubmit)} className='flex flex-row'>
			<input
				placeholder='Search'
				{...register('search')}
				className='text-sm text-balck block w-full rounded-l-lg border border-dark-blue bg-light-grey py-2 pl-10 focus:ring-light-blue'
			/>
			<button
				type='submit'
				name='Search'
				className='rounded-r-lg bg-light-blue'
			>
				<FontAwesomeIcon icon={faSearch} className='px-4' />
			</button>
		</form>
	)
}

export default SearchBox

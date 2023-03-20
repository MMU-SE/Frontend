import { TextField } from '@mui/material'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface SearchBoxProperties {
	handleSubmitAction: (search: string) => void
	placeholder?: string
}

export const SearchValidationSchema = z.object({
	search: z.string()
})

const SearchBox = ({
	handleSubmitAction,
	placeholder
}: SearchBoxProperties): ReactElement => {
	const { register, handleSubmit } =
		useForm<z.infer<typeof SearchValidationSchema>>()

	const onSubmit = handleSubmit(({ search }) => {
		handleSubmitAction(search)
	})

	return (
		<form onSubmit={onSubmit}>
			<TextField
				label='Search'
				placeholder={placeholder ?? 'Search'}
				variant='outlined'
				size='small'
				{...register('search')}
			/>
		</form>
	)
}

export default SearchBox

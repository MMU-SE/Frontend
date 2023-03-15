import { Box, Typography } from '@mui/material'
import { useMatch } from '@tanstack/react-location'
import useSingleProductQuery from 'hooks/queries/useSingleProductQuery'
import type { ReactElement } from 'react'
import type { LocationGenerics } from 'util/types/Location'

const SingleProductView = (): ReactElement => {
	const {
		params: { productId }
	} = useMatch<LocationGenerics>()

	const { data: productData } = useSingleProductQuery({
		id: productId ?? ''
	})

	return (
		<Box
			component='div'
			display='flex'
			flexDirection='column'
			gap={4}
			sx={{
				my: 4,
				mx: 8
			}}
		>
			<Typography component='h2' variant='h5'>
				Product ID
			</Typography>
			<Typography component='body' variant='body1'>
				{productData?.id}
			</Typography>
			<Typography component='h2' variant='h5'>
				Product Name
			</Typography>
			<Typography component='body' variant='body1'>
				{productData?.name}
			</Typography>
			<Typography component='h2' variant='h5'>
				Price
			</Typography>
			<Typography component='body' variant='body1'>
				{productData?.price}
			</Typography>
			<Typography component='h2' variant='h5'>
				Quantity
			</Typography>
			<Typography component='body' variant='body1'>
				{productData?.quantity}
			</Typography>
			<Typography component='h2' variant='h5'>
				Category
			</Typography>
			<Typography component='body' variant='body1'>
				{productData?.category}
			</Typography>
		</Box>
	)
}

export default SingleProductView

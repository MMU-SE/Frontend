import { Visibility } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import type { GridColDef, GridRowParams } from '@mui/x-data-grid'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useNavigate } from '@tanstack/react-location'
import CustomPagination from 'components/Core/CustomPagination/CustomPagination'
import type { UseProductsQueryParameters } from 'hooks/queries/useProductsQuery'
import useProductsQuery from 'hooks/queries/useProductsQuery'
import usePagination from 'hooks/usePagination'
import type { ReactElement } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ProductsTableDefinition {
	id: string
	name: string
	price: number
	quantity: number
	category: string
}

interface TableActionsProperties {
	to: string
	search?: string
}

const Products = (): ReactElement => {
	const { t } = useTranslation('products')
	const navigate = useNavigate()
	const {
		pageSize,
		pageNumber,
		changePageSize: onChangePageSize,
		changePageNumber: onChangePage
	} = usePagination()

	const queryOptions: UseProductsQueryParameters = useMemo(
		() => ({
			limit: pageSize,
			page: pageNumber
		}),
		[pageSize, pageNumber]
	)

	const { data: productsData } = useProductsQuery(queryOptions)

	const onHandleTableActions = useCallback(
		({ to, search }: TableActionsProperties) => {
			navigate({
				to,
				search: {
					// TODO: implement proper routing
					search
				}
			})
		},
		[navigate]
	)
	const columns: GridColDef<ProductsTableDefinition>[] = useMemo(
		() => [
			{
				field: 'id',
				headerName: t('table.id'),
				headerFontWeight: 'bold',
				flex: 1,
				renderCell: parameters => (
					<Typography component='h2' variant='subtitle2'>
						{parameters.row.id}
					</Typography>
				),
				sortable: false
			},
			{
				field: 'name',
				headerName: t('table.name'),
				headerFontWeight: 'bold',
				flex: 1,
				renderCell: parameters => (
					<Typography component='h2' variant='subtitle2'>
						{parameters.row.name}
					</Typography>
				),
				sortable: false
			},
			{
				field: 'price',
				headerName: t('table.price'),
				headerFontWeight: 'bold',
				flex: 1,
				renderCell: parameters => (
					<Typography component='h2' variant='subtitle2'>
						{parameters.row.price}
					</Typography>
				),
				sortable: false
			},
			{
				field: 'quantity',
				headerName: t('table.quantity'),
				headerFontWeight: 'bold',
				flex: 1,
				renderCell: parameters => (
					<Typography component='h2' variant='subtitle2'>
						{parameters.row.quantity}
					</Typography>
				),
				sortable: false
			},
			{
				field: 'category',
				headerName: t('table.category'),
				headerFontWeight: 'bold',
				flex: 1,
				renderCell: parameters => (
					<Typography component='h2' variant='subtitle2'>
						{parameters.row.category}
					</Typography>
				),
				sortable: false
			},
			{
				field: 'actions',
				type: 'actions',
				flex: 0.2,
				getActions: (parameters: GridRowParams<ProductsTableDefinition>) => [
					<GridActionsCellItem
						key='view-product'
						label={t('table.actions.view')}
						icon={<Visibility />}
						onClick={() =>
							onHandleTableActions({
								to: parameters.row.id,
								search: parameters.row.name
							})
						}
						showInMenu
					/>
				]
			}
		],
		[t, onHandleTableActions]
	)

	const [rowCountState, setRowCountState] = useState(productsData?.total ?? 0)

	useEffect(() => {
		setRowCountState(previousState => productsData?.total ?? previousState)
	}, [productsData, setRowCountState])

	return (
		<Box
			display='flex'
			flexDirection='column'
			gap={6}
			sx={{
				px: 4,
				py: 4
			}}
		>
			<Typography component='h1' variant='h4'>
				{t('title')}
			</Typography>
			<DataGrid
				autoHeight
				page={pageNumber}
				pageSize={pageSize}
				pagination
				paginationMode='server'
				onPageSizeChange={onChangePageSize}
				onPageChange={onChangePage}
				rowCount={rowCountState}
				rows={productsData?.data ?? []}
				rowsPerPageOptions={[10, 20, 30]}
				columnBuffer={5}
				columns={columns}
				components={{
					Pagination: CustomPagination
				}}
			/>
		</Box>
	)
}

export default Products

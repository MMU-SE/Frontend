import { Visibility } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import type { GridColDef, GridRowParams } from '@mui/x-data-grid'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useNavigate } from '@tanstack/react-location'
import CustomPagination from 'components/Core/CustomPagination/CustomPagination'
import useCategoriesQuery from 'hooks/queries/useCategoriesQuery'
import type { UseProductsQueryParameters } from 'hooks/queries/useProductsQuery'
import usePagination from 'hooks/usePagination'
import type { ReactElement } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { LocationGenerics } from 'util/types/Location'

interface CategoriesTableDefinition {
	id: string
	name: string
}

interface TableActionsProperties {
	to: string
	search?: string
}

const Categories = (): ReactElement => {
	const { t } = useTranslation('products')
	const navigate = useNavigate<LocationGenerics>()
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

	const { data: categoriesData, isFetching } = useCategoriesQuery(queryOptions)

	const onHandleTableActions = useCallback(
		({ to }: TableActionsProperties) => {
			navigate({
				to
			})
		},
		[navigate]
	)
	const columns: GridColDef<CategoriesTableDefinition>[] = useMemo(
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
				field: 'actions',
				type: 'actions',
				flex: 0.2,
				getActions: (parameters: GridRowParams<CategoriesTableDefinition>) => [
					<GridActionsCellItem
						key='view-product'
						label={t('table.actions.view')}
						icon={<Visibility />}
						onClick={() =>
							onHandleTableActions({
								to: parameters.row.id
							})
						}
						showInMenu
					/>
				]
			}
		],
		[t, onHandleTableActions]
	)

	const [rowCountState, setRowCountState] = useState(categoriesData?.total ?? 0)

	useEffect(() => {
		setRowCountState(previousState => categoriesData?.total ?? previousState)
	}, [categoriesData, setRowCountState])

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
				loading={isFetching}
				pagination
				paginationMode='server'
				onPageSizeChange={onChangePageSize}
				onPageChange={onChangePage}
				rowCount={rowCountState}
				rows={categoriesData?.data ?? []}
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

export default Categories

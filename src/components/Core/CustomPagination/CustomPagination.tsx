/* eslint-disable react/jsx-handler-names */
import {
	gridPageCountSelector,
	gridPageSelector,
	GridPagination,
	useGridApiContext,
	useGridRootProps,
	useGridSelector
} from '@mui/x-data-grid'
import type { ReactElement } from 'react'

const CustomPagination = (): ReactElement => {
	const apiReference = useGridApiContext()
	const page = useGridSelector(apiReference, gridPageSelector)
	const pageCount = useGridSelector(apiReference, gridPageCountSelector)
	const { loading } = useGridRootProps()

	return (
		<GridPagination
			backIconButtonProps={{ disabled: page === 0 || loading }}
			nextIconButtonProps={{ disabled: page === pageCount - 1 || loading }}
		/>
	)
}

export default CustomPagination

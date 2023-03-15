import { useNavigate, useSearch } from '@tanstack/react-location'
import { useState } from 'react'
import type { LocationGenerics } from 'util/types/Location'

interface UsePaginationType {
	pageSize: number
	changePageSize: (newPageSize: number) => void
	pageNumber: number
	changePageNumber: (newPageNumber: number) => void
}

const usePagination = (): UsePaginationType => {
	const { rowsPerPage } = useSearch<LocationGenerics>()
	const navigate = useNavigate<LocationGenerics>()

	const [pageSize, setPageSize] = useState(rowsPerPage ?? 10)
	const [pageNumber, setPageNumber] = useState(0)

	const changePageSize = (newPageSize: number): void => {
		setPageSize(newPageSize)
		navigate({
			search: search => ({
				...search,
				rowsPerPage: newPageSize
			})
		})
	}

	const changePageNumber = (newPageNumber: number): void => {
		setPageNumber(newPageNumber)
	}

	return {
		pageSize,
		changePageSize,
		pageNumber,
		changePageNumber
	}
}

export default usePagination

import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { CancelablePromise, PaginatedProductsResponse } from 'api'
import useApi from 'hooks/useApi'

const FIVE_MINUTES = 1000 * 60 * 5

export interface UseProductsQueryParameters {
	page: number
	limit: number
}

const useProductsQuery = (
	options: UseProductsQueryParameters
): UseQueryResult<PaginatedProductsResponse> => {
	const api = useApi()
	const { page, limit } = options

	const queryClient = useQueryClient()

	const getProducts = (): CancelablePromise<PaginatedProductsResponse> => {
		let cursor: string | undefined
		if (page && page > 0) {
			const previous = queryClient.getQueryData<PaginatedProductsResponse>([
				'products',
				{
					...options,
					page: page - 1
				}
			])
			cursor = previous?.cursor
		}

		return api.products.getProducts(limit, cursor)
	}

	return useQuery(['products', options], getProducts, {
		staleTime: FIVE_MINUTES,
		keepPreviousData: true
	})
}

export default useProductsQuery

import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { CancelablePromise, ProductsResponse } from 'api'
import useApi from 'hooks/useApi'

const FIVE_MINUTES = 1000 * 60 * 5

export interface UseProductsQueryParameters {
	page: number
	limit: number
}

const useProductsQuery = (
	options: UseProductsQueryParameters
): UseQueryResult<ProductsResponse> => {
	const api = useApi()
	const { page, limit } = options

	const queryClient = useQueryClient()

	const getProducts = (): CancelablePromise<ProductsResponse> => {
		let cursor: string | undefined
		if (page && page > 0) {
			const previous = queryClient.getQueryData<ProductsResponse>([
				'products',
				{
					...options,
					page: page - 1
				}
			])
			cursor = previous?.startAfterId
		}

		return api.products.getAllProducts(limit, cursor)
	}

	return useQuery(['products', options], getProducts, {
		staleTime: FIVE_MINUTES,
		keepPreviousData: true
	})
}

export default useProductsQuery

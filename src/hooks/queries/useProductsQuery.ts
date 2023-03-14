import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { CancelablePromise, ProductsResponse } from 'api'
import useApi from 'hooks/useApi'

const FIVE_MINUTES = 1000 * 60 * 5

interface UseProductsQueryParameters {
	limit: number
}

const useProductsQuery = (
	options: UseProductsQueryParameters
): UseQueryResult<ProductsResponse> => {
	const api = useApi()
	const { limit } = options

	const getProducts = (): CancelablePromise<ProductsResponse> =>
		api.products.getAllProducts(limit)

	return useQuery(['product', options], getProducts, {
		staleTime: FIVE_MINUTES,
		keepPreviousData: true
	})
}

export default useProductsQuery

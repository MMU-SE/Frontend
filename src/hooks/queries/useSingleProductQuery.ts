import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { CancelablePromise, DetailedProduct } from 'api'
import useApi from 'hooks/useApi'

const FIVE_MINUTES = 1000 * 60 * 5

export interface UseSingleProductQueryParameters {
	id: string
}

const useSingleProductQuery = (
	options: UseSingleProductQueryParameters
): UseQueryResult<DetailedProduct> => {
	const api = useApi()
	const { id } = options

	const getSingleProduct = (): CancelablePromise<DetailedProduct> =>
		api.products.getProduct(id)

	return useQuery(['singleProduct', options], getSingleProduct, {
		staleTime: FIVE_MINUTES,
		keepPreviousData: true
	})
}

export default useSingleProductQuery

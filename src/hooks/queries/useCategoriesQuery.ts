import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { CancelablePromise, PaginatedCategoryResponse } from 'api'
import useApi from 'hooks/useApi'

const FIVE_MINUTES = 1000 * 60 * 5

export interface UseCategoriesQueryParameters {
	page: number
	limit: number
}

const useCategoriesQuery = (
	options: UseCategoriesQueryParameters
): UseQueryResult<PaginatedCategoryResponse> => {
	const api = useApi()
	const { page, limit } = options

	const queryClient = useQueryClient()

	const getCategories = (): CancelablePromise<PaginatedCategoryResponse> => {
		let cursor: string | undefined
		if (page && page > 0) {
			const previous = queryClient.getQueryData<PaginatedCategoryResponse>([
				'categories',
				{
					...options,
					page: page - 1
				}
			])
			cursor = previous?.cursor
		}

		return api.categories.getCategories(limit, cursor)
	}

	return useQuery(['categories', options], getCategories, {
		staleTime: FIVE_MINUTES,
		keepPreviousData: true
	})
}

export default useCategoriesQuery

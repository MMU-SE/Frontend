import type { DetailedCategory, PaginatedCategoryResponse } from 'api'
import {
	generateDetailedCategory,
	getRandomCategories
} from 'mocks/data/categories'
import { rest } from 'msw'

const handlers = [
	rest.get<never, never, PaginatedCategoryResponse>(
		'/api/categories',
		(request, response, context) => {
			const limit = request.url.searchParams.get('limit')
			const cursor = request.url.searchParams.get('cursor')

			const cursorIndex = getRandomCategories.findIndex(
				category => category.id === cursor
			)

			const startIndex = cursorIndex >= 0 ? cursorIndex : 0
			const categorySlice = getRandomCategories.slice(
				startIndex,
				startIndex + Number(limit)
			)
			const result = {
				limit: Number(limit),
				total: getRandomCategories.length,
				cursor: categorySlice.length > 0 ? categorySlice.at(-1)?.id ?? '' : '',
				data: categorySlice
			}

			return response(context.status(200), context.json(result))
		}
	),
	rest.get<never, never, DetailedCategory>(
		'/api/category/:id',
		(_, response, context) =>
			response(context.status(200), context.json(generateDetailedCategory()))
	)
]

export default handlers

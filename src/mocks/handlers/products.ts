import type { Product, PaginatedProductsResponse } from 'api'
import { generateProduct, getRandomProducts } from 'mocks/data/products'
import { rest } from 'msw'

const handlers = [
	rest.get<never, never, PaginatedProductsResponse>(
		'/api/products',
		(request, response, context) => {
			const limit = request.url.searchParams.get('limit')
			const cursor = request.url.searchParams.get('cursor')

			const cursorIndex = getRandomProducts.findIndex(
				product => product.id === cursor
			)

			const startIndex = cursorIndex >= 0 ? cursorIndex : 0
			const productSlice = getRandomProducts.slice(
				startIndex,
				startIndex + Number(limit)
			)
			const result = {
				limit: Number(limit),
				total: getRandomProducts.length,
				cursor: productSlice.length > 0 ? productSlice.at(-1)?.id ?? '' : '',
				data: productSlice
			}

			return response(context.status(200), context.json(result))
		}
	),
	rest.get<never, never, Product>('/api/products/:id', (_, response, context) =>
		response(context.status(200), context.json(generateProduct()))
	)
]

export default handlers

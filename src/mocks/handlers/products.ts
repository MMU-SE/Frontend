import type { ProductsResponse } from 'api'
import { getRandomProducts } from 'mocks/data/products'
import { rest } from 'msw'

const handlers = [
	rest.get<never, never, ProductsResponse>(
		'/api/v1/products',
		(request, response, context) => {
			const limit = request.url.searchParams.get('limit')
			const startAfterId = request.url.searchParams.get('startAfterId')

			const cursorIndex = getRandomProducts.findIndex(
				product => product.id === startAfterId
			)

			const startIndex = cursorIndex >= 0 ? cursorIndex : 0
			const productSlice = getRandomProducts.slice(
				startIndex,
				startIndex + Number(limit)
			)
			const result = {
				limit: Number(limit),
				total: getRandomProducts.length,
				startAfterId:
					productSlice.length > 0 ? productSlice.at(-1)?.id ?? '' : '',
				data: productSlice
			}

			return response(context.status(200), context.json(result))
		}
	)
]

export default handlers

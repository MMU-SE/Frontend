import type { ProductsResponse } from 'api'
import { getRandomProducts } from 'mocks/data/products'
import { rest } from 'msw'

const handlers = [
	rest.get<never, never, ProductsResponse>(
		'/api/v1/products',
		(_, response, context) => {
			const result = {
				limit: 10,
				startAfterId: '21212',
				data: getRandomProducts()
			}

			return response(context.status(200), context.json(result))
		}
	)
]

export default handlers

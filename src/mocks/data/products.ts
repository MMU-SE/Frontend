import type { Product } from 'api'
import { faker } from '@faker-js/faker'
import { generateCategory } from './categories'

faker.seed(1232)

export const generateProduct = (): Product => ({
	id: faker.datatype.uuid(),
	sku: faker.datatype.string(5),
	productName: faker.name.firstName(),
	unitPrice: faker.datatype.number(),
	quantity: faker.datatype.number(),
	category: generateCategory()
})

export const getRandomProducts: Product[] = Array.from(
	{ length: 30 },
	generateProduct
)

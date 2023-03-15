import type { Product } from 'api'
import { faker } from '@faker-js/faker'

faker.seed(1232)

export const generateProduct = (): Product => ({
	id: faker.datatype.uuid(),
	name: faker.name.firstName(),
	description: faker.company.catchPhrase(),
	price: faker.datatype.number(),
	quantity: faker.datatype.number(),
	category: faker.commerce.department(),
	createdAt: faker.date.past().toString(),
	updatedAt: faker.date.past().toString()
})

export const getRandomProducts: Product[] = Array.from(
	{ length: 30 },
	generateProduct
)

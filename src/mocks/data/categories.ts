import { faker } from '@faker-js/faker'
import type { Category, DetailedCategory } from 'api'

export const generateCategory = (): Category => ({
	id: faker.datatype.uuid(),
	name: faker.name.firstName()
})

export const generateDetailedCategory = (): DetailedCategory => ({
	...generateCategory(),
	description: faker.company.catchPhrase()
})

export const getRandomCategories: DetailedCategory[] = Array.from(
	{ length: 30 },
	generateDetailedCategory
)

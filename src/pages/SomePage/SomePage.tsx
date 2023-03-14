import useProductsQuery from 'hooks/queries/useProductsQuery'
import type { ReactElement } from 'react'

const SomePage = (): ReactElement => {
	const {
		data: productsData,
		isFetching,
		isError
	} = useProductsQuery({ limit: 10 })

	if (!isFetching && isError) {
		return <div>Error</div>
	}

	return (
		<div>
			<h1>Some Page</h1>
			{productsData?.data.map(product => (
				<div key={product.id}>
					<span>{product.name}</span>
					<span>{product.description}</span>
				</div>
			))}
		</div>
	)
}

export default SomePage

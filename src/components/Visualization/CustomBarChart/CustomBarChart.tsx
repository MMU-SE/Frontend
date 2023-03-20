import type { ReactElement } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
	{
		name: 'Page A',
		value: 4000
	},
	{
		name: 'Page B',
		value: 3000
	},
	{
		name: 'Page C',
		value: 2000
	}
]

const CustomBarChart = (): ReactElement => (
	<BarChart width={300} height={250} data={data} margin={{}}>
		<CartesianGrid strokeDasharray='3 3' />
		<XAxis dataKey='name' />
		<YAxis />
		<Tooltip />
		<Bar dataKey='value' fill='#8884d8' />
	</BarChart>
)

export default CustomBarChart

/* eslint-disable react/no-array-index-key */
import type { ReactElement } from 'react'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'

const CustomPieChart = (): ReactElement => {
	const data = [
		{
			name: 'Group A',
			value: 400
		},
		{
			name: 'Group B',
			value: 300
		},
		{
			name: 'Group C',
			value: 300
		}
	]

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

	return (
		<PieChart width={300} height={250}>
			<Pie
				data={data}
				dataKey='value'
				nameKey='name'
				cx='50%'
				cy='50%'
				outerRadius={100}
				fill='#8884d8'
			>
				{data.map((_, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Tooltip />
			<Legend />
		</PieChart>
	)
}

export default CustomPieChart

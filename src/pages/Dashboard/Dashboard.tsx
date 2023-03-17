import { Box } from '@mui/material'
import DonutChart from 'components/Visualization/DonutChart/DonutChart'
import type { ReactElement } from 'react'

const Dashboard = (): ReactElement => {
	const LABELS = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
	const DATASETS = [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			]
		}
	]

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Dashboard</p>
			<Box width={300}>
				<DonutChart labels={LABELS} datasets={DATASETS} />
			</Box>
		</div>
	)
}

export default Dashboard

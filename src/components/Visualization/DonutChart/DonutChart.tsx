import { ArcElement, Chart, Legend, Tooltip } from 'chart.js'
import type { ReactElement } from 'react'
import { Doughnut } from 'react-chartjs-2'

interface DatasetTypes {
	label: string
	data: number[]
	backgroundColor: string[]
	borderColor: string[]
}

interface DonutChartProperties {
	labels: string[]
	datasets: DatasetTypes[]
}

const DonutChart = ({
	labels,
	datasets
}: DonutChartProperties): ReactElement => {
	Chart.register(ArcElement, Tooltip, Legend)

	const data = {
		labels,
		datasets
	}

	return <Doughnut data={data} />
}

export default DonutChart
